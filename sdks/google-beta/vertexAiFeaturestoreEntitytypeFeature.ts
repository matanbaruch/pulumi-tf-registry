// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VertexAiFeaturestoreEntitytypeFeature extends pulumi.CustomResource {
    /**
     * Get an existing VertexAiFeaturestoreEntitytypeFeature resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VertexAiFeaturestoreEntitytypeFeatureState, opts?: pulumi.CustomResourceOptions): VertexAiFeaturestoreEntitytypeFeature {
        return new VertexAiFeaturestoreEntitytypeFeature(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/vertexAiFeaturestoreEntitytypeFeature:VertexAiFeaturestoreEntitytypeFeature';

    /**
     * Returns true if the given object is an instance of VertexAiFeaturestoreEntitytypeFeature.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VertexAiFeaturestoreEntitytypeFeature {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VertexAiFeaturestoreEntitytypeFeature.__pulumiType;
    }

    /**
     * The timestamp of when the entity type was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
     * nine fractional digits.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Description of the feature.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * The name of the Featurestore to use, in the format
     * projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.
     */
    public readonly entitytype!: pulumi.Output<string>;
    /**
     * Used to perform consistent read-modify-write updates.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * A set of key/value label pairs to assign to the feature. **Note**: This field is non-authoritative, and will only manage
     * the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
     * the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the feature. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and
     * a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The region of the feature
     */
    public /*out*/ readonly region!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.VertexAiFeaturestoreEntitytypeFeatureTimeouts | undefined>;
    /**
     * The timestamp when the entity type was most recently updated in RFC3339 UTC "Zulu" format, with nanosecond resolution
     * and up to nine fractional digits.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;
    /**
     * Type of Feature value. Immutable.
     * https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType
     */
    public readonly valueType!: pulumi.Output<string>;

    /**
     * Create a VertexAiFeaturestoreEntitytypeFeature resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VertexAiFeaturestoreEntitytypeFeatureArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VertexAiFeaturestoreEntitytypeFeatureArgs | VertexAiFeaturestoreEntitytypeFeatureState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VertexAiFeaturestoreEntitytypeFeatureState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["entitytype"] = state ? state.entitytype : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
            resourceInputs["valueType"] = state ? state.valueType : undefined;
        } else {
            const args = argsOrState as VertexAiFeaturestoreEntitytypeFeatureArgs | undefined;
            if ((!args || args.entitytype === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entitytype'");
            }
            if ((!args || args.valueType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'valueType'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["entitytype"] = args ? args.entitytype : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["valueType"] = args ? args.valueType : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VertexAiFeaturestoreEntitytypeFeature.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VertexAiFeaturestoreEntitytypeFeature resources.
 */
export interface VertexAiFeaturestoreEntitytypeFeatureState {
    /**
     * The timestamp of when the entity type was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
     * nine fractional digits.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Description of the feature.
     */
    description?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the Featurestore to use, in the format
     * projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.
     */
    entitytype?: pulumi.Input<string>;
    /**
     * Used to perform consistent read-modify-write updates.
     */
    etag?: pulumi.Input<string>;
    /**
     * A set of key/value label pairs to assign to the feature. **Note**: This field is non-authoritative, and will only manage
     * the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
     * the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the feature. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and
     * a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.
     */
    name?: pulumi.Input<string>;
    /**
     * The region of the feature
     */
    region?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.VertexAiFeaturestoreEntitytypeFeatureTimeouts>;
    /**
     * The timestamp when the entity type was most recently updated in RFC3339 UTC "Zulu" format, with nanosecond resolution
     * and up to nine fractional digits.
     */
    updateTime?: pulumi.Input<string>;
    /**
     * Type of Feature value. Immutable.
     * https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType
     */
    valueType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VertexAiFeaturestoreEntitytypeFeature resource.
 */
export interface VertexAiFeaturestoreEntitytypeFeatureArgs {
    /**
     * Description of the feature.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Featurestore to use, in the format
     * projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.
     */
    entitytype: pulumi.Input<string>;
    /**
     * A set of key/value label pairs to assign to the feature. **Note**: This field is non-authoritative, and will only manage
     * the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
     * the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the feature. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and
     * a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VertexAiFeaturestoreEntitytypeFeatureTimeouts>;
    /**
     * Type of Feature value. Immutable.
     * https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType
     */
    valueType: pulumi.Input<string>;
}
