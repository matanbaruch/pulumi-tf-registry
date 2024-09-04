// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PolicyIpBlock extends pulumi.CustomResource {
    /**
     * Get an existing PolicyIpBlock resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyIpBlockState, opts?: pulumi.CustomResourceOptions): PolicyIpBlock {
        return new PolicyIpBlock(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/policyIpBlock:PolicyIpBlock';

    /**
     * Returns true if the given object is an instance of PolicyIpBlock.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyIpBlock {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyIpBlock.__pulumiType;
    }

    /**
     * Network address and the prefix length which will be associated with a layer-2 broadcast domain
     */
    public readonly cidr!: pulumi.Output<string>;
    /**
     * Resource context
     */
    public readonly context!: pulumi.Output<outputs.PolicyIpBlockContext | undefined>;
    /**
     * Description for this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name for this resource
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * NSX ID for this resource
     */
    public readonly nsxId!: pulumi.Output<string>;
    /**
     * Policy path for this resource
     */
    public /*out*/ readonly path!: pulumi.Output<string>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.PolicyIpBlockTag[] | undefined>;

    /**
     * Create a PolicyIpBlock resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyIpBlockArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyIpBlockArgs | PolicyIpBlockState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyIpBlockState | undefined;
            resourceInputs["cidr"] = state ? state.cidr : undefined;
            resourceInputs["context"] = state ? state.context : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["nsxId"] = state ? state.nsxId : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as PolicyIpBlockArgs | undefined;
            if ((!args || args.cidr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cidr'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["cidr"] = args ? args.cidr : undefined;
            resourceInputs["context"] = args ? args.context : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["nsxId"] = args ? args.nsxId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicyIpBlock.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicyIpBlock resources.
 */
export interface PolicyIpBlockState {
    /**
     * Network address and the prefix length which will be associated with a layer-2 broadcast domain
     */
    cidr?: pulumi.Input<string>;
    /**
     * Resource context
     */
    context?: pulumi.Input<inputs.PolicyIpBlockContext>;
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName?: pulumi.Input<string>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * Policy path for this resource
     */
    path?: pulumi.Input<string>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    revision?: pulumi.Input<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyIpBlockTag>[]>;
}

/**
 * The set of arguments for constructing a PolicyIpBlock resource.
 */
export interface PolicyIpBlockArgs {
    /**
     * Network address and the prefix length which will be associated with a layer-2 broadcast domain
     */
    cidr: pulumi.Input<string>;
    /**
     * Resource context
     */
    context?: pulumi.Input<inputs.PolicyIpBlockContext>;
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName: pulumi.Input<string>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyIpBlockTag>[]>;
}
