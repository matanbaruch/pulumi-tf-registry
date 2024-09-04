// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PolicyHostTransportNodeCollection extends pulumi.CustomResource {
    /**
     * Get an existing PolicyHostTransportNodeCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyHostTransportNodeCollectionState, opts?: pulumi.CustomResourceOptions): PolicyHostTransportNodeCollection {
        return new PolicyHostTransportNodeCollection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/policyHostTransportNodeCollection:PolicyHostTransportNodeCollection';

    /**
     * Returns true if the given object is an instance of PolicyHostTransportNodeCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyHostTransportNodeCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyHostTransportNodeCollection.__pulumiType;
    }

    /**
     * Compute collection id
     */
    public readonly computeCollectionId!: pulumi.Output<string>;
    /**
     * Description for this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name for this resource
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * ID of the enforcement point this resource belongs to
     */
    public readonly enforcementPoint!: pulumi.Output<string>;
    /**
     * NSX ID for this resource
     */
    public readonly nsxId!: pulumi.Output<string>;
    /**
     * Policy path for this resource
     */
    public /*out*/ readonly path!: pulumi.Output<string>;
    /**
     * Indicate whether NSX service should be removed from hypervisors during resource deletion
     */
    public readonly removeNsxOnDestroy!: pulumi.Output<boolean | undefined>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * Path to the site this resource belongs to
     */
    public readonly sitePath!: pulumi.Output<string | undefined>;
    /**
     * List of sub-cluster configuration
     */
    public readonly subClusterConfigs!: pulumi.Output<outputs.PolicyHostTransportNodeCollectionSubClusterConfig[] | undefined>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.PolicyHostTransportNodeCollectionTag[] | undefined>;
    /**
     * Transport Node Profile Path
     */
    public readonly transportNodeProfilePath!: pulumi.Output<string | undefined>;

    /**
     * Create a PolicyHostTransportNodeCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyHostTransportNodeCollectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyHostTransportNodeCollectionArgs | PolicyHostTransportNodeCollectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyHostTransportNodeCollectionState | undefined;
            resourceInputs["computeCollectionId"] = state ? state.computeCollectionId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["enforcementPoint"] = state ? state.enforcementPoint : undefined;
            resourceInputs["nsxId"] = state ? state.nsxId : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["removeNsxOnDestroy"] = state ? state.removeNsxOnDestroy : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["sitePath"] = state ? state.sitePath : undefined;
            resourceInputs["subClusterConfigs"] = state ? state.subClusterConfigs : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["transportNodeProfilePath"] = state ? state.transportNodeProfilePath : undefined;
        } else {
            const args = argsOrState as PolicyHostTransportNodeCollectionArgs | undefined;
            if ((!args || args.computeCollectionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'computeCollectionId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["computeCollectionId"] = args ? args.computeCollectionId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enforcementPoint"] = args ? args.enforcementPoint : undefined;
            resourceInputs["nsxId"] = args ? args.nsxId : undefined;
            resourceInputs["removeNsxOnDestroy"] = args ? args.removeNsxOnDestroy : undefined;
            resourceInputs["sitePath"] = args ? args.sitePath : undefined;
            resourceInputs["subClusterConfigs"] = args ? args.subClusterConfigs : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["transportNodeProfilePath"] = args ? args.transportNodeProfilePath : undefined;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicyHostTransportNodeCollection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicyHostTransportNodeCollection resources.
 */
export interface PolicyHostTransportNodeCollectionState {
    /**
     * Compute collection id
     */
    computeCollectionId?: pulumi.Input<string>;
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName?: pulumi.Input<string>;
    /**
     * ID of the enforcement point this resource belongs to
     */
    enforcementPoint?: pulumi.Input<string>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * Policy path for this resource
     */
    path?: pulumi.Input<string>;
    /**
     * Indicate whether NSX service should be removed from hypervisors during resource deletion
     */
    removeNsxOnDestroy?: pulumi.Input<boolean>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    revision?: pulumi.Input<number>;
    /**
     * Path to the site this resource belongs to
     */
    sitePath?: pulumi.Input<string>;
    /**
     * List of sub-cluster configuration
     */
    subClusterConfigs?: pulumi.Input<pulumi.Input<inputs.PolicyHostTransportNodeCollectionSubClusterConfig>[]>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyHostTransportNodeCollectionTag>[]>;
    /**
     * Transport Node Profile Path
     */
    transportNodeProfilePath?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PolicyHostTransportNodeCollection resource.
 */
export interface PolicyHostTransportNodeCollectionArgs {
    /**
     * Compute collection id
     */
    computeCollectionId: pulumi.Input<string>;
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName: pulumi.Input<string>;
    /**
     * ID of the enforcement point this resource belongs to
     */
    enforcementPoint?: pulumi.Input<string>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * Indicate whether NSX service should be removed from hypervisors during resource deletion
     */
    removeNsxOnDestroy?: pulumi.Input<boolean>;
    /**
     * Path to the site this resource belongs to
     */
    sitePath?: pulumi.Input<string>;
    /**
     * List of sub-cluster configuration
     */
    subClusterConfigs?: pulumi.Input<pulumi.Input<inputs.PolicyHostTransportNodeCollectionSubClusterConfig>[]>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyHostTransportNodeCollectionTag>[]>;
    /**
     * Transport Node Profile Path
     */
    transportNodeProfilePath?: pulumi.Input<string>;
}
