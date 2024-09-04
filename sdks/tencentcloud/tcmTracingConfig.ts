// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TcmTracingConfig extends pulumi.CustomResource {
    /**
     * Get an existing TcmTracingConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TcmTracingConfigState, opts?: pulumi.CustomResourceOptions): TcmTracingConfig {
        return new TcmTracingConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/tcmTracingConfig:TcmTracingConfig';

    /**
     * Returns true if the given object is an instance of TcmTracingConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TcmTracingConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TcmTracingConfig.__pulumiType;
    }

    /**
     * APM config.
     */
    public readonly apm!: pulumi.Output<outputs.TcmTracingConfigApm | undefined>;
    /**
     * Whether enable tracing.
     */
    public readonly enable!: pulumi.Output<boolean | undefined>;
    /**
     * Mesh ID.
     */
    public readonly meshId!: pulumi.Output<string>;
    /**
     * Tracing sampling, 0.0-1.0.
     */
    public readonly sampling!: pulumi.Output<number | undefined>;
    /**
     * Third party zipkin config.
     */
    public readonly zipkin!: pulumi.Output<outputs.TcmTracingConfigZipkin | undefined>;

    /**
     * Create a TcmTracingConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TcmTracingConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TcmTracingConfigArgs | TcmTracingConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TcmTracingConfigState | undefined;
            resourceInputs["apm"] = state ? state.apm : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["meshId"] = state ? state.meshId : undefined;
            resourceInputs["sampling"] = state ? state.sampling : undefined;
            resourceInputs["zipkin"] = state ? state.zipkin : undefined;
        } else {
            const args = argsOrState as TcmTracingConfigArgs | undefined;
            if ((!args || args.meshId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'meshId'");
            }
            resourceInputs["apm"] = args ? args.apm : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["meshId"] = args ? args.meshId : undefined;
            resourceInputs["sampling"] = args ? args.sampling : undefined;
            resourceInputs["zipkin"] = args ? args.zipkin : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TcmTracingConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TcmTracingConfig resources.
 */
export interface TcmTracingConfigState {
    /**
     * APM config.
     */
    apm?: pulumi.Input<inputs.TcmTracingConfigApm>;
    /**
     * Whether enable tracing.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Mesh ID.
     */
    meshId?: pulumi.Input<string>;
    /**
     * Tracing sampling, 0.0-1.0.
     */
    sampling?: pulumi.Input<number>;
    /**
     * Third party zipkin config.
     */
    zipkin?: pulumi.Input<inputs.TcmTracingConfigZipkin>;
}

/**
 * The set of arguments for constructing a TcmTracingConfig resource.
 */
export interface TcmTracingConfigArgs {
    /**
     * APM config.
     */
    apm?: pulumi.Input<inputs.TcmTracingConfigApm>;
    /**
     * Whether enable tracing.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Mesh ID.
     */
    meshId: pulumi.Input<string>;
    /**
     * Tracing sampling, 0.0-1.0.
     */
    sampling?: pulumi.Input<number>;
    /**
     * Third party zipkin config.
     */
    zipkin?: pulumi.Input<inputs.TcmTracingConfigZipkin>;
}
