// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Fcv3AsyncInvokeConfig extends pulumi.CustomResource {
    /**
     * Get an existing Fcv3AsyncInvokeConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Fcv3AsyncInvokeConfigState, opts?: pulumi.CustomResourceOptions): Fcv3AsyncInvokeConfig {
        return new Fcv3AsyncInvokeConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/fcv3AsyncInvokeConfig:Fcv3AsyncInvokeConfig';

    /**
     * Returns true if the given object is an instance of Fcv3AsyncInvokeConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Fcv3AsyncInvokeConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Fcv3AsyncInvokeConfig.__pulumiType;
    }

    public readonly asyncTask!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly destinationConfig!: pulumi.Output<outputs.Fcv3AsyncInvokeConfigDestinationConfig | undefined>;
    public readonly functionName!: pulumi.Output<string>;
    public readonly maxAsyncEventAgeInSeconds!: pulumi.Output<number | undefined>;
    public readonly maxAsyncRetryAttempts!: pulumi.Output<number | undefined>;
    public readonly qualifier!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.Fcv3AsyncInvokeConfigTimeouts | undefined>;

    /**
     * Create a Fcv3AsyncInvokeConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Fcv3AsyncInvokeConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Fcv3AsyncInvokeConfigArgs | Fcv3AsyncInvokeConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Fcv3AsyncInvokeConfigState | undefined;
            resourceInputs["asyncTask"] = state ? state.asyncTask : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["destinationConfig"] = state ? state.destinationConfig : undefined;
            resourceInputs["functionName"] = state ? state.functionName : undefined;
            resourceInputs["maxAsyncEventAgeInSeconds"] = state ? state.maxAsyncEventAgeInSeconds : undefined;
            resourceInputs["maxAsyncRetryAttempts"] = state ? state.maxAsyncRetryAttempts : undefined;
            resourceInputs["qualifier"] = state ? state.qualifier : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as Fcv3AsyncInvokeConfigArgs | undefined;
            if ((!args || args.functionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'functionName'");
            }
            resourceInputs["asyncTask"] = args ? args.asyncTask : undefined;
            resourceInputs["destinationConfig"] = args ? args.destinationConfig : undefined;
            resourceInputs["functionName"] = args ? args.functionName : undefined;
            resourceInputs["maxAsyncEventAgeInSeconds"] = args ? args.maxAsyncEventAgeInSeconds : undefined;
            resourceInputs["maxAsyncRetryAttempts"] = args ? args.maxAsyncRetryAttempts : undefined;
            resourceInputs["qualifier"] = args ? args.qualifier : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Fcv3AsyncInvokeConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Fcv3AsyncInvokeConfig resources.
 */
export interface Fcv3AsyncInvokeConfigState {
    asyncTask?: pulumi.Input<boolean>;
    createTime?: pulumi.Input<string>;
    destinationConfig?: pulumi.Input<inputs.Fcv3AsyncInvokeConfigDestinationConfig>;
    functionName?: pulumi.Input<string>;
    maxAsyncEventAgeInSeconds?: pulumi.Input<number>;
    maxAsyncRetryAttempts?: pulumi.Input<number>;
    qualifier?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.Fcv3AsyncInvokeConfigTimeouts>;
}

/**
 * The set of arguments for constructing a Fcv3AsyncInvokeConfig resource.
 */
export interface Fcv3AsyncInvokeConfigArgs {
    asyncTask?: pulumi.Input<boolean>;
    destinationConfig?: pulumi.Input<inputs.Fcv3AsyncInvokeConfigDestinationConfig>;
    functionName: pulumi.Input<string>;
    maxAsyncEventAgeInSeconds?: pulumi.Input<number>;
    maxAsyncRetryAttempts?: pulumi.Input<number>;
    qualifier?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.Fcv3AsyncInvokeConfigTimeouts>;
}
