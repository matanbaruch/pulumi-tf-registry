// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SagemakerEndpointConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing SagemakerEndpointConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SagemakerEndpointConfigurationState, opts?: pulumi.CustomResourceOptions): SagemakerEndpointConfiguration {
        return new SagemakerEndpointConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/sagemakerEndpointConfiguration:SagemakerEndpointConfiguration';

    /**
     * Returns true if the given object is an instance of SagemakerEndpointConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SagemakerEndpointConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SagemakerEndpointConfiguration.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly asyncInferenceConfig!: pulumi.Output<outputs.SagemakerEndpointConfigurationAsyncInferenceConfig | undefined>;
    public readonly dataCaptureConfig!: pulumi.Output<outputs.SagemakerEndpointConfigurationDataCaptureConfig | undefined>;
    public readonly kmsKeyArn!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly namePrefix!: pulumi.Output<string>;
    public readonly productionVariants!: pulumi.Output<outputs.SagemakerEndpointConfigurationProductionVariant[]>;
    public readonly shadowProductionVariants!: pulumi.Output<outputs.SagemakerEndpointConfigurationShadowProductionVariant[] | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a SagemakerEndpointConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SagemakerEndpointConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SagemakerEndpointConfigurationArgs | SagemakerEndpointConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SagemakerEndpointConfigurationState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["asyncInferenceConfig"] = state ? state.asyncInferenceConfig : undefined;
            resourceInputs["dataCaptureConfig"] = state ? state.dataCaptureConfig : undefined;
            resourceInputs["kmsKeyArn"] = state ? state.kmsKeyArn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namePrefix"] = state ? state.namePrefix : undefined;
            resourceInputs["productionVariants"] = state ? state.productionVariants : undefined;
            resourceInputs["shadowProductionVariants"] = state ? state.shadowProductionVariants : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as SagemakerEndpointConfigurationArgs | undefined;
            if ((!args || args.productionVariants === undefined) && !opts.urn) {
                throw new Error("Missing required property 'productionVariants'");
            }
            resourceInputs["asyncInferenceConfig"] = args ? args.asyncInferenceConfig : undefined;
            resourceInputs["dataCaptureConfig"] = args ? args.dataCaptureConfig : undefined;
            resourceInputs["kmsKeyArn"] = args ? args.kmsKeyArn : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namePrefix"] = args ? args.namePrefix : undefined;
            resourceInputs["productionVariants"] = args ? args.productionVariants : undefined;
            resourceInputs["shadowProductionVariants"] = args ? args.shadowProductionVariants : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SagemakerEndpointConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SagemakerEndpointConfiguration resources.
 */
export interface SagemakerEndpointConfigurationState {
    arn?: pulumi.Input<string>;
    asyncInferenceConfig?: pulumi.Input<inputs.SagemakerEndpointConfigurationAsyncInferenceConfig>;
    dataCaptureConfig?: pulumi.Input<inputs.SagemakerEndpointConfigurationDataCaptureConfig>;
    kmsKeyArn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namePrefix?: pulumi.Input<string>;
    productionVariants?: pulumi.Input<pulumi.Input<inputs.SagemakerEndpointConfigurationProductionVariant>[]>;
    shadowProductionVariants?: pulumi.Input<pulumi.Input<inputs.SagemakerEndpointConfigurationShadowProductionVariant>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a SagemakerEndpointConfiguration resource.
 */
export interface SagemakerEndpointConfigurationArgs {
    asyncInferenceConfig?: pulumi.Input<inputs.SagemakerEndpointConfigurationAsyncInferenceConfig>;
    dataCaptureConfig?: pulumi.Input<inputs.SagemakerEndpointConfigurationDataCaptureConfig>;
    kmsKeyArn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namePrefix?: pulumi.Input<string>;
    productionVariants: pulumi.Input<pulumi.Input<inputs.SagemakerEndpointConfigurationProductionVariant>[]>;
    shadowProductionVariants?: pulumi.Input<pulumi.Input<inputs.SagemakerEndpointConfigurationShadowProductionVariant>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
