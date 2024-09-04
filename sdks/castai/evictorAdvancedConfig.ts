// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EvictorAdvancedConfig extends pulumi.CustomResource {
    /**
     * Get an existing EvictorAdvancedConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EvictorAdvancedConfigState, opts?: pulumi.CustomResourceOptions): EvictorAdvancedConfig {
        return new EvictorAdvancedConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'castai:index/evictorAdvancedConfig:EvictorAdvancedConfig';

    /**
     * Returns true if the given object is an instance of EvictorAdvancedConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EvictorAdvancedConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EvictorAdvancedConfig.__pulumiType;
    }

    /**
     * CAST AI cluster id.
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * evictor advanced configuration to target specific node/pod
     */
    public readonly evictorAdvancedConfigs!: pulumi.Output<outputs.EvictorAdvancedConfigEvictorAdvancedConfig[]>;
    public readonly timeouts!: pulumi.Output<outputs.EvictorAdvancedConfigTimeouts | undefined>;

    /**
     * Create a EvictorAdvancedConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EvictorAdvancedConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EvictorAdvancedConfigArgs | EvictorAdvancedConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EvictorAdvancedConfigState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["evictorAdvancedConfigs"] = state ? state.evictorAdvancedConfigs : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as EvictorAdvancedConfigArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.evictorAdvancedConfigs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'evictorAdvancedConfigs'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["evictorAdvancedConfigs"] = args ? args.evictorAdvancedConfigs : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EvictorAdvancedConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EvictorAdvancedConfig resources.
 */
export interface EvictorAdvancedConfigState {
    /**
     * CAST AI cluster id.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * evictor advanced configuration to target specific node/pod
     */
    evictorAdvancedConfigs?: pulumi.Input<pulumi.Input<inputs.EvictorAdvancedConfigEvictorAdvancedConfig>[]>;
    timeouts?: pulumi.Input<inputs.EvictorAdvancedConfigTimeouts>;
}

/**
 * The set of arguments for constructing a EvictorAdvancedConfig resource.
 */
export interface EvictorAdvancedConfigArgs {
    /**
     * CAST AI cluster id.
     */
    clusterId: pulumi.Input<string>;
    /**
     * evictor advanced configuration to target specific node/pod
     */
    evictorAdvancedConfigs: pulumi.Input<pulumi.Input<inputs.EvictorAdvancedConfigEvictorAdvancedConfig>[]>;
    timeouts?: pulumi.Input<inputs.EvictorAdvancedConfigTimeouts>;
}
