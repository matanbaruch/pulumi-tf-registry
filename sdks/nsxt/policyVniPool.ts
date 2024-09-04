// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PolicyVniPool extends pulumi.CustomResource {
    /**
     * Get an existing PolicyVniPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyVniPoolState, opts?: pulumi.CustomResourceOptions): PolicyVniPool {
        return new PolicyVniPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/policyVniPool:PolicyVniPool';

    /**
     * Returns true if the given object is an instance of PolicyVniPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyVniPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyVniPool.__pulumiType;
    }

    /**
     * Description for this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name for this resource
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * End value of VNI Pool range
     */
    public readonly end!: pulumi.Output<number>;
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
     * Start value of VNI Pool range
     */
    public readonly start!: pulumi.Output<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.PolicyVniPoolTag[] | undefined>;

    /**
     * Create a PolicyVniPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyVniPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyVniPoolArgs | PolicyVniPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyVniPoolState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["end"] = state ? state.end : undefined;
            resourceInputs["nsxId"] = state ? state.nsxId : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["start"] = state ? state.start : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as PolicyVniPoolArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.end === undefined) && !opts.urn) {
                throw new Error("Missing required property 'end'");
            }
            if ((!args || args.start === undefined) && !opts.urn) {
                throw new Error("Missing required property 'start'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["end"] = args ? args.end : undefined;
            resourceInputs["nsxId"] = args ? args.nsxId : undefined;
            resourceInputs["start"] = args ? args.start : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicyVniPool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicyVniPool resources.
 */
export interface PolicyVniPoolState {
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName?: pulumi.Input<string>;
    /**
     * End value of VNI Pool range
     */
    end?: pulumi.Input<number>;
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
     * Start value of VNI Pool range
     */
    start?: pulumi.Input<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyVniPoolTag>[]>;
}

/**
 * The set of arguments for constructing a PolicyVniPool resource.
 */
export interface PolicyVniPoolArgs {
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName: pulumi.Input<string>;
    /**
     * End value of VNI Pool range
     */
    end: pulumi.Input<number>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * Start value of VNI Pool range
     */
    start: pulumi.Input<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyVniPoolTag>[]>;
}
