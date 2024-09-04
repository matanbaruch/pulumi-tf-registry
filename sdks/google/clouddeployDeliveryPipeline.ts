// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClouddeployDeliveryPipeline extends pulumi.CustomResource {
    /**
     * Get an existing ClouddeployDeliveryPipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClouddeployDeliveryPipelineState, opts?: pulumi.CustomResourceOptions): ClouddeployDeliveryPipeline {
        return new ClouddeployDeliveryPipeline(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/clouddeployDeliveryPipeline:ClouddeployDeliveryPipeline';

    /**
     * Returns true if the given object is an instance of ClouddeployDeliveryPipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClouddeployDeliveryPipeline {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClouddeployDeliveryPipeline.__pulumiType;
    }

    /**
     * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See
     * https://google.aip.dev/128#annotations for more details such as format and size limitations. **Note**: This field is
     * non-authoritative, and will only manage the annotations present in your configuration. Please refer to the field
     * `effective_annotations` for all of the annotations present on the resource.
     */
    public readonly annotations!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Output only. Information around the state of the Delivery Pipeline.
     */
    public /*out*/ readonly conditions!: pulumi.Output<outputs.ClouddeployDeliveryPipelineCondition[]>;
    /**
     * Output only. Time at which the pipeline was created.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Description of the `DeliveryPipeline`. Max length is 255 characters.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveAnnotations!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete
     * requests to ensure the client has an up-to-date value before proceeding.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the
     * following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and
     * dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a
     * lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values
     * are additionally constrained to be <= 128 bytes. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field `effective_labels` for all of the labels present on the
     * resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The location for the resource
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Name of the `DeliveryPipeline`. Format is `a-z?`.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The project for the resource
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
     */
    public readonly serialPipeline!: pulumi.Output<outputs.ClouddeployDeliveryPipelineSerialPipeline | undefined>;
    /**
     * When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
     */
    public readonly suspended!: pulumi.Output<boolean | undefined>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.ClouddeployDeliveryPipelineTimeouts | undefined>;
    /**
     * Output only. Unique identifier of the `DeliveryPipeline`.
     */
    public /*out*/ readonly uid!: pulumi.Output<string>;
    /**
     * Output only. Most recent time at which the pipeline was updated.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a ClouddeployDeliveryPipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClouddeployDeliveryPipelineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClouddeployDeliveryPipelineArgs | ClouddeployDeliveryPipelineState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClouddeployDeliveryPipelineState | undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["conditions"] = state ? state.conditions : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveAnnotations"] = state ? state.effectiveAnnotations : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["serialPipeline"] = state ? state.serialPipeline : undefined;
            resourceInputs["suspended"] = state ? state.suspended : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as ClouddeployDeliveryPipelineArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["serialPipeline"] = args ? args.serialPipeline : undefined;
            resourceInputs["suspended"] = args ? args.suspended : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["conditions"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveAnnotations"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["uid"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClouddeployDeliveryPipeline.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClouddeployDeliveryPipeline resources.
 */
export interface ClouddeployDeliveryPipelineState {
    /**
     * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See
     * https://google.aip.dev/128#annotations for more details such as format and size limitations. **Note**: This field is
     * non-authoritative, and will only manage the annotations present in your configuration. Please refer to the field
     * `effective_annotations` for all of the annotations present on the resource.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Output only. Information around the state of the Delivery Pipeline.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.ClouddeployDeliveryPipelineCondition>[]>;
    /**
     * Output only. Time at which the pipeline was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Description of the `DeliveryPipeline`. Max length is 255 characters.
     */
    description?: pulumi.Input<string>;
    effectiveAnnotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete
     * requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: pulumi.Input<string>;
    /**
     * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the
     * following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and
     * dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a
     * lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values
     * are additionally constrained to be <= 128 bytes. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field `effective_labels` for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location for the resource
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the `DeliveryPipeline`. Format is `a-z?`.
     */
    name?: pulumi.Input<string>;
    /**
     * The project for the resource
     */
    project?: pulumi.Input<string>;
    /**
     * SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
     */
    serialPipeline?: pulumi.Input<inputs.ClouddeployDeliveryPipelineSerialPipeline>;
    /**
     * When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
     */
    suspended?: pulumi.Input<boolean>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ClouddeployDeliveryPipelineTimeouts>;
    /**
     * Output only. Unique identifier of the `DeliveryPipeline`.
     */
    uid?: pulumi.Input<string>;
    /**
     * Output only. Most recent time at which the pipeline was updated.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ClouddeployDeliveryPipeline resource.
 */
export interface ClouddeployDeliveryPipelineArgs {
    /**
     * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See
     * https://google.aip.dev/128#annotations for more details such as format and size limitations. **Note**: This field is
     * non-authoritative, and will only manage the annotations present in your configuration. Please refer to the field
     * `effective_annotations` for all of the annotations present on the resource.
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Description of the `DeliveryPipeline`. Max length is 255 characters.
     */
    description?: pulumi.Input<string>;
    /**
     * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the
     * following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and
     * dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a
     * lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values
     * are additionally constrained to be <= 128 bytes. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field `effective_labels` for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location for the resource
     */
    location: pulumi.Input<string>;
    /**
     * Name of the `DeliveryPipeline`. Format is `a-z?`.
     */
    name?: pulumi.Input<string>;
    /**
     * The project for the resource
     */
    project?: pulumi.Input<string>;
    /**
     * SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
     */
    serialPipeline?: pulumi.Input<inputs.ClouddeployDeliveryPipelineSerialPipeline>;
    /**
     * When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
     */
    suspended?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.ClouddeployDeliveryPipelineTimeouts>;
}
