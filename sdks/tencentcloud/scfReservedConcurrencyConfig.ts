// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ScfReservedConcurrencyConfig extends pulumi.CustomResource {
    /**
     * Get an existing ScfReservedConcurrencyConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScfReservedConcurrencyConfigState, opts?: pulumi.CustomResourceOptions): ScfReservedConcurrencyConfig {
        return new ScfReservedConcurrencyConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/scfReservedConcurrencyConfig:ScfReservedConcurrencyConfig';

    /**
     * Returns true if the given object is an instance of ScfReservedConcurrencyConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScfReservedConcurrencyConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScfReservedConcurrencyConfig.__pulumiType;
    }

    /**
     * Specifies the function of which you want to configure the reserved quota.
     */
    public readonly functionName!: pulumi.Output<string>;
    /**
     * Function namespace. Default value: default.
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Reserved memory quota of the function. Note: the upper limit for the total reserved quota of the function is the user's
     * total concurrency memory minus 12800.
     */
    public readonly reservedConcurrencyMem!: pulumi.Output<number>;

    /**
     * Create a ScfReservedConcurrencyConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScfReservedConcurrencyConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScfReservedConcurrencyConfigArgs | ScfReservedConcurrencyConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ScfReservedConcurrencyConfigState | undefined;
            resourceInputs["functionName"] = state ? state.functionName : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["reservedConcurrencyMem"] = state ? state.reservedConcurrencyMem : undefined;
        } else {
            const args = argsOrState as ScfReservedConcurrencyConfigArgs | undefined;
            if ((!args || args.functionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'functionName'");
            }
            if ((!args || args.reservedConcurrencyMem === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reservedConcurrencyMem'");
            }
            resourceInputs["functionName"] = args ? args.functionName : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["reservedConcurrencyMem"] = args ? args.reservedConcurrencyMem : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ScfReservedConcurrencyConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ScfReservedConcurrencyConfig resources.
 */
export interface ScfReservedConcurrencyConfigState {
    /**
     * Specifies the function of which you want to configure the reserved quota.
     */
    functionName?: pulumi.Input<string>;
    /**
     * Function namespace. Default value: default.
     */
    namespace?: pulumi.Input<string>;
    /**
     * Reserved memory quota of the function. Note: the upper limit for the total reserved quota of the function is the user's
     * total concurrency memory minus 12800.
     */
    reservedConcurrencyMem?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ScfReservedConcurrencyConfig resource.
 */
export interface ScfReservedConcurrencyConfigArgs {
    /**
     * Specifies the function of which you want to configure the reserved quota.
     */
    functionName: pulumi.Input<string>;
    /**
     * Function namespace. Default value: default.
     */
    namespace?: pulumi.Input<string>;
    /**
     * Reserved memory quota of the function. Note: the upper limit for the total reserved quota of the function is the user's
     * total concurrency memory minus 12800.
     */
    reservedConcurrencyMem: pulumi.Input<number>;
}
