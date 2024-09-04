// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VertexAiFeaturestoreEntitytype extends pulumi.CustomResource {
    /**
     * Get an existing VertexAiFeaturestoreEntitytype resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VertexAiFeaturestoreEntitytypeState, opts?: pulumi.CustomResourceOptions): VertexAiFeaturestoreEntitytype {
        return new VertexAiFeaturestoreEntitytype(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/vertexAiFeaturestoreEntitytype:VertexAiFeaturestoreEntitytype';

    /**
     * Returns true if the given object is an instance of VertexAiFeaturestoreEntitytype.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VertexAiFeaturestoreEntitytype {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VertexAiFeaturestoreEntitytype.__pulumiType;
    }

    /**
     * The timestamp of when the featurestore was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
     * nine fractional digits.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Optional. Description of the EntityType.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Used to perform consistent read-modify-write updates.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.
     */
    public readonly featurestore!: pulumi.Output<string>;
    /**
     * A set of key/value label pairs to assign to this EntityType. **Note**: This field is non-authoritative, and will only
     * manage the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels
     * present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The default monitoring configuration for all Features under this EntityType. If this is populated with
     * [FeaturestoreMonitoringConfig.monitoring_interval] specified, snapshot analysis monitoring is enabled. Otherwise,
     * snapshot analysis monitoring is disabled.
     */
    public readonly monitoringConfig!: pulumi.Output<outputs.VertexAiFeaturestoreEntitytypeMonitoringConfig | undefined>;
    /**
     * The name of the EntityType. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first
     * character cannot be a number.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The region of the EntityType.
     */
    public /*out*/ readonly region!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.VertexAiFeaturestoreEntitytypeTimeouts | undefined>;
    /**
     * The timestamp of when the featurestore was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up
     * to nine fractional digits.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a VertexAiFeaturestoreEntitytype resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VertexAiFeaturestoreEntitytypeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VertexAiFeaturestoreEntitytypeArgs | VertexAiFeaturestoreEntitytypeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VertexAiFeaturestoreEntitytypeState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["featurestore"] = state ? state.featurestore : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["monitoringConfig"] = state ? state.monitoringConfig : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as VertexAiFeaturestoreEntitytypeArgs | undefined;
            if ((!args || args.featurestore === undefined) && !opts.urn) {
                throw new Error("Missing required property 'featurestore'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["featurestore"] = args ? args.featurestore : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["monitoringConfig"] = args ? args.monitoringConfig : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VertexAiFeaturestoreEntitytype.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VertexAiFeaturestoreEntitytype resources.
 */
export interface VertexAiFeaturestoreEntitytypeState {
    /**
     * The timestamp of when the featurestore was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
     * nine fractional digits.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Optional. Description of the EntityType.
     */
    description?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Used to perform consistent read-modify-write updates.
     */
    etag?: pulumi.Input<string>;
    /**
     * The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.
     */
    featurestore?: pulumi.Input<string>;
    /**
     * A set of key/value label pairs to assign to this EntityType. **Note**: This field is non-authoritative, and will only
     * manage the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels
     * present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The default monitoring configuration for all Features under this EntityType. If this is populated with
     * [FeaturestoreMonitoringConfig.monitoring_interval] specified, snapshot analysis monitoring is enabled. Otherwise,
     * snapshot analysis monitoring is disabled.
     */
    monitoringConfig?: pulumi.Input<inputs.VertexAiFeaturestoreEntitytypeMonitoringConfig>;
    /**
     * The name of the EntityType. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first
     * character cannot be a number.
     */
    name?: pulumi.Input<string>;
    /**
     * The region of the EntityType.
     */
    region?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.VertexAiFeaturestoreEntitytypeTimeouts>;
    /**
     * The timestamp of when the featurestore was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up
     * to nine fractional digits.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VertexAiFeaturestoreEntitytype resource.
 */
export interface VertexAiFeaturestoreEntitytypeArgs {
    /**
     * Optional. Description of the EntityType.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.
     */
    featurestore: pulumi.Input<string>;
    /**
     * A set of key/value label pairs to assign to this EntityType. **Note**: This field is non-authoritative, and will only
     * manage the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels
     * present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The default monitoring configuration for all Features under this EntityType. If this is populated with
     * [FeaturestoreMonitoringConfig.monitoring_interval] specified, snapshot analysis monitoring is enabled. Otherwise,
     * snapshot analysis monitoring is disabled.
     */
    monitoringConfig?: pulumi.Input<inputs.VertexAiFeaturestoreEntitytypeMonitoringConfig>;
    /**
     * The name of the EntityType. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first
     * character cannot be a number.
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VertexAiFeaturestoreEntitytypeTimeouts>;
}
