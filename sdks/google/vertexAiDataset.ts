// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VertexAiDataset extends pulumi.CustomResource {
    /**
     * Get an existing VertexAiDataset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VertexAiDatasetState, opts?: pulumi.CustomResourceOptions): VertexAiDataset {
        return new VertexAiDataset(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/vertexAiDataset:VertexAiDataset';

    /**
     * Returns true if the given object is an instance of VertexAiDataset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VertexAiDataset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VertexAiDataset.__pulumiType;
    }

    /**
     * The timestamp of when the dataset was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
     * fractional digits.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * The user-defined name of the Dataset. The name can be up to 128 characters long and can be consist of any UTF-8
     * characters.
     */
    public readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be
     * secured by this key.
     */
    public readonly encryptionSpec!: pulumi.Output<outputs.VertexAiDatasetEncryptionSpec | undefined>;
    /**
     * A set of key/value label pairs to assign to this Workflow. **Note**: This field is non-authoritative, and will only
     * manage the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels
     * present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is
     * defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in
     * gs://google-cloud-aiplatform/schema/dataset/metadata/.
     */
    public readonly metadataSchemaUri!: pulumi.Output<string>;
    /**
     * The resource name of the Dataset. This value is set by Google.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The region of the dataset. eg us-central1
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.VertexAiDatasetTimeouts | undefined>;
    /**
     * The timestamp of when the dataset was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
     * nine fractional digits.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a VertexAiDataset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VertexAiDatasetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VertexAiDatasetArgs | VertexAiDatasetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VertexAiDatasetState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["encryptionSpec"] = state ? state.encryptionSpec : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["metadataSchemaUri"] = state ? state.metadataSchemaUri : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as VertexAiDatasetArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.metadataSchemaUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metadataSchemaUri'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["encryptionSpec"] = args ? args.encryptionSpec : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["metadataSchemaUri"] = args ? args.metadataSchemaUri : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VertexAiDataset.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VertexAiDataset resources.
 */
export interface VertexAiDatasetState {
    /**
     * The timestamp of when the dataset was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
     * fractional digits.
     */
    createTime?: pulumi.Input<string>;
    /**
     * The user-defined name of the Dataset. The name can be up to 128 characters long and can be consist of any UTF-8
     * characters.
     */
    displayName?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be
     * secured by this key.
     */
    encryptionSpec?: pulumi.Input<inputs.VertexAiDatasetEncryptionSpec>;
    /**
     * A set of key/value label pairs to assign to this Workflow. **Note**: This field is non-authoritative, and will only
     * manage the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels
     * present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is
     * defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in
     * gs://google-cloud-aiplatform/schema/dataset/metadata/.
     */
    metadataSchemaUri?: pulumi.Input<string>;
    /**
     * The resource name of the Dataset. This value is set by Google.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The region of the dataset. eg us-central1
     */
    region?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.VertexAiDatasetTimeouts>;
    /**
     * The timestamp of when the dataset was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to
     * nine fractional digits.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VertexAiDataset resource.
 */
export interface VertexAiDatasetArgs {
    /**
     * The user-defined name of the Dataset. The name can be up to 128 characters long and can be consist of any UTF-8
     * characters.
     */
    displayName: pulumi.Input<string>;
    /**
     * Customer-managed encryption key spec for a Dataset. If set, this Dataset and all sub-resources of this Dataset will be
     * secured by this key.
     */
    encryptionSpec?: pulumi.Input<inputs.VertexAiDatasetEncryptionSpec>;
    /**
     * A set of key/value label pairs to assign to this Workflow. **Note**: This field is non-authoritative, and will only
     * manage the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels
     * present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is
     * defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in
     * gs://google-cloud-aiplatform/schema/dataset/metadata/.
     */
    metadataSchemaUri: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The region of the dataset. eg us-central1
     */
    region?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VertexAiDatasetTimeouts>;
}
