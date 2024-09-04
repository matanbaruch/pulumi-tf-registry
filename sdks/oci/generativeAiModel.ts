// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GenerativeAiModel extends pulumi.CustomResource {
    /**
     * Get an existing GenerativeAiModel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GenerativeAiModelState, opts?: pulumi.CustomResourceOptions): GenerativeAiModel {
        return new GenerativeAiModel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/generativeAiModel:GenerativeAiModel';

    /**
     * Returns true if the given object is an instance of GenerativeAiModel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GenerativeAiModel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GenerativeAiModel.__pulumiType;
    }

    public readonly baseModelId!: pulumi.Output<string>;
    public /*out*/ readonly capabilities!: pulumi.Output<string[]>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly fineTuneDetails!: pulumi.Output<outputs.GenerativeAiModelFineTuneDetails>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly isLongTermSupported!: pulumi.Output<boolean>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public /*out*/ readonly modelMetrics!: pulumi.Output<outputs.GenerativeAiModelModelMetric[]>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeDeprecated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.GenerativeAiModelTimeouts | undefined>;
    public /*out*/ readonly type!: pulumi.Output<string>;
    public readonly vendor!: pulumi.Output<string>;
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a GenerativeAiModel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GenerativeAiModelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GenerativeAiModelArgs | GenerativeAiModelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GenerativeAiModelState | undefined;
            resourceInputs["baseModelId"] = state ? state.baseModelId : undefined;
            resourceInputs["capabilities"] = state ? state.capabilities : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["fineTuneDetails"] = state ? state.fineTuneDetails : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["isLongTermSupported"] = state ? state.isLongTermSupported : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["modelMetrics"] = state ? state.modelMetrics : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeDeprecated"] = state ? state.timeDeprecated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["vendor"] = state ? state.vendor : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as GenerativeAiModelArgs | undefined;
            if ((!args || args.baseModelId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseModelId'");
            }
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.fineTuneDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fineTuneDetails'");
            }
            resourceInputs["baseModelId"] = args ? args.baseModelId : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["fineTuneDetails"] = args ? args.fineTuneDetails : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vendor"] = args ? args.vendor : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["capabilities"] = undefined /*out*/;
            resourceInputs["isLongTermSupported"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["modelMetrics"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeDeprecated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GenerativeAiModel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GenerativeAiModel resources.
 */
export interface GenerativeAiModelState {
    baseModelId?: pulumi.Input<string>;
    capabilities?: pulumi.Input<pulumi.Input<string>[]>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    fineTuneDetails?: pulumi.Input<inputs.GenerativeAiModelFineTuneDetails>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isLongTermSupported?: pulumi.Input<boolean>;
    lifecycleDetails?: pulumi.Input<string>;
    modelMetrics?: pulumi.Input<pulumi.Input<inputs.GenerativeAiModelModelMetric>[]>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeDeprecated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GenerativeAiModelTimeouts>;
    type?: pulumi.Input<string>;
    vendor?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GenerativeAiModel resource.
 */
export interface GenerativeAiModelArgs {
    baseModelId: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    fineTuneDetails: pulumi.Input<inputs.GenerativeAiModelFineTuneDetails>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GenerativeAiModelTimeouts>;
    vendor?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}
