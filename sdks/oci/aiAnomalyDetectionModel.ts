// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AiAnomalyDetectionModel extends pulumi.CustomResource {
    /**
     * Get an existing AiAnomalyDetectionModel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AiAnomalyDetectionModelState, opts?: pulumi.CustomResourceOptions): AiAnomalyDetectionModel {
        return new AiAnomalyDetectionModel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/aiAnomalyDetectionModel:AiAnomalyDetectionModel';

    /**
     * Returns true if the given object is an instance of AiAnomalyDetectionModel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AiAnomalyDetectionModel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AiAnomalyDetectionModel.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly modelTrainingDetails!: pulumi.Output<outputs.AiAnomalyDetectionModelModelTrainingDetails>;
    public /*out*/ readonly modelTrainingResults!: pulumi.Output<outputs.AiAnomalyDetectionModelModelTrainingResult[]>;
    public readonly projectId!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AiAnomalyDetectionModelTimeouts | undefined>;

    /**
     * Create a AiAnomalyDetectionModel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AiAnomalyDetectionModelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AiAnomalyDetectionModelArgs | AiAnomalyDetectionModelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AiAnomalyDetectionModelState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["modelTrainingDetails"] = state ? state.modelTrainingDetails : undefined;
            resourceInputs["modelTrainingResults"] = state ? state.modelTrainingResults : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AiAnomalyDetectionModelArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.modelTrainingDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'modelTrainingDetails'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["modelTrainingDetails"] = args ? args.modelTrainingDetails : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["modelTrainingResults"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AiAnomalyDetectionModel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AiAnomalyDetectionModel resources.
 */
export interface AiAnomalyDetectionModelState {
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    lifecycleDetails?: pulumi.Input<string>;
    modelTrainingDetails?: pulumi.Input<inputs.AiAnomalyDetectionModelModelTrainingDetails>;
    modelTrainingResults?: pulumi.Input<pulumi.Input<inputs.AiAnomalyDetectionModelModelTrainingResult>[]>;
    projectId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AiAnomalyDetectionModelTimeouts>;
}

/**
 * The set of arguments for constructing a AiAnomalyDetectionModel resource.
 */
export interface AiAnomalyDetectionModelArgs {
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    modelTrainingDetails: pulumi.Input<inputs.AiAnomalyDetectionModelModelTrainingDetails>;
    projectId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AiAnomalyDetectionModelTimeouts>;
}
