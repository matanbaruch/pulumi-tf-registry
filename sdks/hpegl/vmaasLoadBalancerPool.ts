// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VmaasLoadBalancerPool extends pulumi.CustomResource {
    /**
     * Get an existing VmaasLoadBalancerPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VmaasLoadBalancerPoolState, opts?: pulumi.CustomResourceOptions): VmaasLoadBalancerPool {
        return new VmaasLoadBalancerPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'hpegl:index/vmaasLoadBalancerPool:VmaasLoadBalancerPool';

    /**
     * Returns true if the given object is an instance of VmaasLoadBalancerPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VmaasLoadBalancerPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VmaasLoadBalancerPool.__pulumiType;
    }

    /**
     * Load balancing pool algorithm controls how the incoming connectionsare distributed among the members
     */
    public readonly algorithm!: pulumi.Output<string>;
    /**
     * pool Configuration
     */
    public readonly configs!: pulumi.Output<outputs.VmaasLoadBalancerPoolConfig[] | undefined>;
    /**
     * Creating the Network loadbalancer pool.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Parent lb ID, lb_id can be obtained by using LB datasource/resource.
     */
    public readonly lbId!: pulumi.Output<number>;
    /**
     * The minimum number of members for the pool to be considered active
     */
    public readonly minActiveMembers!: pulumi.Output<number | undefined>;
    /**
     * Network loadbalancer pool name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * tags Configuration
     */
    public readonly tags!: pulumi.Output<outputs.VmaasLoadBalancerPoolTag[] | undefined>;

    /**
     * Create a VmaasLoadBalancerPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VmaasLoadBalancerPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VmaasLoadBalancerPoolArgs | VmaasLoadBalancerPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VmaasLoadBalancerPoolState | undefined;
            resourceInputs["algorithm"] = state ? state.algorithm : undefined;
            resourceInputs["configs"] = state ? state.configs : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["lbId"] = state ? state.lbId : undefined;
            resourceInputs["minActiveMembers"] = state ? state.minActiveMembers : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as VmaasLoadBalancerPoolArgs | undefined;
            if ((!args || args.algorithm === undefined) && !opts.urn) {
                throw new Error("Missing required property 'algorithm'");
            }
            if ((!args || args.lbId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lbId'");
            }
            resourceInputs["algorithm"] = args ? args.algorithm : undefined;
            resourceInputs["configs"] = args ? args.configs : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["lbId"] = args ? args.lbId : undefined;
            resourceInputs["minActiveMembers"] = args ? args.minActiveMembers : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VmaasLoadBalancerPool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VmaasLoadBalancerPool resources.
 */
export interface VmaasLoadBalancerPoolState {
    /**
     * Load balancing pool algorithm controls how the incoming connectionsare distributed among the members
     */
    algorithm?: pulumi.Input<string>;
    /**
     * pool Configuration
     */
    configs?: pulumi.Input<pulumi.Input<inputs.VmaasLoadBalancerPoolConfig>[]>;
    /**
     * Creating the Network loadbalancer pool.
     */
    description?: pulumi.Input<string>;
    /**
     * Parent lb ID, lb_id can be obtained by using LB datasource/resource.
     */
    lbId?: pulumi.Input<number>;
    /**
     * The minimum number of members for the pool to be considered active
     */
    minActiveMembers?: pulumi.Input<number>;
    /**
     * Network loadbalancer pool name
     */
    name?: pulumi.Input<string>;
    /**
     * tags Configuration
     */
    tags?: pulumi.Input<pulumi.Input<inputs.VmaasLoadBalancerPoolTag>[]>;
}

/**
 * The set of arguments for constructing a VmaasLoadBalancerPool resource.
 */
export interface VmaasLoadBalancerPoolArgs {
    /**
     * Load balancing pool algorithm controls how the incoming connectionsare distributed among the members
     */
    algorithm: pulumi.Input<string>;
    /**
     * pool Configuration
     */
    configs?: pulumi.Input<pulumi.Input<inputs.VmaasLoadBalancerPoolConfig>[]>;
    /**
     * Creating the Network loadbalancer pool.
     */
    description?: pulumi.Input<string>;
    /**
     * Parent lb ID, lb_id can be obtained by using LB datasource/resource.
     */
    lbId: pulumi.Input<number>;
    /**
     * The minimum number of members for the pool to be considered active
     */
    minActiveMembers?: pulumi.Input<number>;
    /**
     * Network loadbalancer pool name
     */
    name?: pulumi.Input<string>;
    /**
     * tags Configuration
     */
    tags?: pulumi.Input<pulumi.Input<inputs.VmaasLoadBalancerPoolTag>[]>;
}
