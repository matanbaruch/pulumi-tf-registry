// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LambdaFunctionUrl extends pulumi.CustomResource {
    /**
     * Get an existing LambdaFunctionUrl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LambdaFunctionUrlState, opts?: pulumi.CustomResourceOptions): LambdaFunctionUrl {
        return new LambdaFunctionUrl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/lambdaFunctionUrl:LambdaFunctionUrl';

    /**
     * Returns true if the given object is an instance of LambdaFunctionUrl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LambdaFunctionUrl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LambdaFunctionUrl.__pulumiType;
    }

    public readonly authorizationType!: pulumi.Output<string>;
    public readonly cors!: pulumi.Output<outputs.LambdaFunctionUrlCors | undefined>;
    public /*out*/ readonly functionArn!: pulumi.Output<string>;
    public readonly functionName!: pulumi.Output<string>;
    public /*out*/ readonly functionUrl!: pulumi.Output<string>;
    public readonly invokeMode!: pulumi.Output<string | undefined>;
    public readonly qualifier!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.LambdaFunctionUrlTimeouts | undefined>;
    public /*out*/ readonly urlId!: pulumi.Output<string>;

    /**
     * Create a LambdaFunctionUrl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LambdaFunctionUrlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LambdaFunctionUrlArgs | LambdaFunctionUrlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LambdaFunctionUrlState | undefined;
            resourceInputs["authorizationType"] = state ? state.authorizationType : undefined;
            resourceInputs["cors"] = state ? state.cors : undefined;
            resourceInputs["functionArn"] = state ? state.functionArn : undefined;
            resourceInputs["functionName"] = state ? state.functionName : undefined;
            resourceInputs["functionUrl"] = state ? state.functionUrl : undefined;
            resourceInputs["invokeMode"] = state ? state.invokeMode : undefined;
            resourceInputs["qualifier"] = state ? state.qualifier : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["urlId"] = state ? state.urlId : undefined;
        } else {
            const args = argsOrState as LambdaFunctionUrlArgs | undefined;
            if ((!args || args.authorizationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizationType'");
            }
            if ((!args || args.functionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'functionName'");
            }
            resourceInputs["authorizationType"] = args ? args.authorizationType : undefined;
            resourceInputs["cors"] = args ? args.cors : undefined;
            resourceInputs["functionName"] = args ? args.functionName : undefined;
            resourceInputs["invokeMode"] = args ? args.invokeMode : undefined;
            resourceInputs["qualifier"] = args ? args.qualifier : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["functionArn"] = undefined /*out*/;
            resourceInputs["functionUrl"] = undefined /*out*/;
            resourceInputs["urlId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LambdaFunctionUrl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LambdaFunctionUrl resources.
 */
export interface LambdaFunctionUrlState {
    authorizationType?: pulumi.Input<string>;
    cors?: pulumi.Input<inputs.LambdaFunctionUrlCors>;
    functionArn?: pulumi.Input<string>;
    functionName?: pulumi.Input<string>;
    functionUrl?: pulumi.Input<string>;
    invokeMode?: pulumi.Input<string>;
    qualifier?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LambdaFunctionUrlTimeouts>;
    urlId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LambdaFunctionUrl resource.
 */
export interface LambdaFunctionUrlArgs {
    authorizationType: pulumi.Input<string>;
    cors?: pulumi.Input<inputs.LambdaFunctionUrlCors>;
    functionName: pulumi.Input<string>;
    invokeMode?: pulumi.Input<string>;
    qualifier?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LambdaFunctionUrlTimeouts>;
}
