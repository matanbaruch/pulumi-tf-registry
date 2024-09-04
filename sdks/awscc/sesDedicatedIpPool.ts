// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SesDedicatedIpPool extends pulumi.CustomResource {
    /**
     * Get an existing SesDedicatedIpPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SesDedicatedIpPoolState, opts?: pulumi.CustomResourceOptions): SesDedicatedIpPool {
        return new SesDedicatedIpPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/sesDedicatedIpPool:SesDedicatedIpPool';

    /**
     * Returns true if the given object is an instance of SesDedicatedIpPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SesDedicatedIpPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SesDedicatedIpPool.__pulumiType;
    }

    /**
     * The name of the dedicated IP pool.
     */
    public readonly poolName!: pulumi.Output<string>;
    /**
     * Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD.
     */
    public readonly scalingMode!: pulumi.Output<string>;

    /**
     * Create a SesDedicatedIpPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SesDedicatedIpPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SesDedicatedIpPoolArgs | SesDedicatedIpPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SesDedicatedIpPoolState | undefined;
            resourceInputs["poolName"] = state ? state.poolName : undefined;
            resourceInputs["scalingMode"] = state ? state.scalingMode : undefined;
        } else {
            const args = argsOrState as SesDedicatedIpPoolArgs | undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["scalingMode"] = args ? args.scalingMode : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SesDedicatedIpPool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SesDedicatedIpPool resources.
 */
export interface SesDedicatedIpPoolState {
    /**
     * The name of the dedicated IP pool.
     */
    poolName?: pulumi.Input<string>;
    /**
     * Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD.
     */
    scalingMode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SesDedicatedIpPool resource.
 */
export interface SesDedicatedIpPoolArgs {
    /**
     * The name of the dedicated IP pool.
     */
    poolName?: pulumi.Input<string>;
    /**
     * Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD.
     */
    scalingMode?: pulumi.Input<string>;
}
