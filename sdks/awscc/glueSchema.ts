// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GlueSchema extends pulumi.CustomResource {
    /**
     * Get an existing GlueSchema resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GlueSchemaState, opts?: pulumi.CustomResourceOptions): GlueSchema {
        return new GlueSchema(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/glueSchema:GlueSchema';

    /**
     * Returns true if the given object is an instance of GlueSchema.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GlueSchema {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GlueSchema.__pulumiType;
    }

    /**
     * Amazon Resource Name for the Schema.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Specify checkpoint version for update. This is only required to update the Compatibility.
     */
    public readonly checkpointVersion!: pulumi.Output<outputs.GlueSchemaCheckpointVersion>;
    /**
     * Compatibility setting for the schema.
     */
    public readonly compatibility!: pulumi.Output<string>;
    /**
     * Data format name to use for the schema. Accepted values: 'AVRO', 'JSON', 'PROTOBUF'
     */
    public readonly dataFormat!: pulumi.Output<string>;
    /**
     * A description of the schema. If description is not provided, there will not be any default value for this.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Represents the version ID associated with the initial schema version.
     */
    public /*out*/ readonly initialSchemaVersionId!: pulumi.Output<string>;
    /**
     * Name of the schema.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Identifier for the registry which the schema is part of.
     */
    public readonly registry!: pulumi.Output<outputs.GlueSchemaRegistry>;
    /**
     * Definition for the initial schema version in plain-text.
     */
    public readonly schemaDefinition!: pulumi.Output<string>;
    /**
     * List of tags to tag the schema
     */
    public readonly tags!: pulumi.Output<outputs.GlueSchemaTag[]>;

    /**
     * Create a GlueSchema resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GlueSchemaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GlueSchemaArgs | GlueSchemaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GlueSchemaState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["checkpointVersion"] = state ? state.checkpointVersion : undefined;
            resourceInputs["compatibility"] = state ? state.compatibility : undefined;
            resourceInputs["dataFormat"] = state ? state.dataFormat : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["initialSchemaVersionId"] = state ? state.initialSchemaVersionId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["registry"] = state ? state.registry : undefined;
            resourceInputs["schemaDefinition"] = state ? state.schemaDefinition : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as GlueSchemaArgs | undefined;
            if ((!args || args.compatibility === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compatibility'");
            }
            if ((!args || args.dataFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataFormat'");
            }
            if ((!args || args.schemaDefinition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaDefinition'");
            }
            resourceInputs["checkpointVersion"] = args ? args.checkpointVersion : undefined;
            resourceInputs["compatibility"] = args ? args.compatibility : undefined;
            resourceInputs["dataFormat"] = args ? args.dataFormat : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["registry"] = args ? args.registry : undefined;
            resourceInputs["schemaDefinition"] = args ? args.schemaDefinition : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["initialSchemaVersionId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GlueSchema.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GlueSchema resources.
 */
export interface GlueSchemaState {
    /**
     * Amazon Resource Name for the Schema.
     */
    arn?: pulumi.Input<string>;
    /**
     * Specify checkpoint version for update. This is only required to update the Compatibility.
     */
    checkpointVersion?: pulumi.Input<inputs.GlueSchemaCheckpointVersion>;
    /**
     * Compatibility setting for the schema.
     */
    compatibility?: pulumi.Input<string>;
    /**
     * Data format name to use for the schema. Accepted values: 'AVRO', 'JSON', 'PROTOBUF'
     */
    dataFormat?: pulumi.Input<string>;
    /**
     * A description of the schema. If description is not provided, there will not be any default value for this.
     */
    description?: pulumi.Input<string>;
    /**
     * Represents the version ID associated with the initial schema version.
     */
    initialSchemaVersionId?: pulumi.Input<string>;
    /**
     * Name of the schema.
     */
    name?: pulumi.Input<string>;
    /**
     * Identifier for the registry which the schema is part of.
     */
    registry?: pulumi.Input<inputs.GlueSchemaRegistry>;
    /**
     * Definition for the initial schema version in plain-text.
     */
    schemaDefinition?: pulumi.Input<string>;
    /**
     * List of tags to tag the schema
     */
    tags?: pulumi.Input<pulumi.Input<inputs.GlueSchemaTag>[]>;
}

/**
 * The set of arguments for constructing a GlueSchema resource.
 */
export interface GlueSchemaArgs {
    /**
     * Specify checkpoint version for update. This is only required to update the Compatibility.
     */
    checkpointVersion?: pulumi.Input<inputs.GlueSchemaCheckpointVersion>;
    /**
     * Compatibility setting for the schema.
     */
    compatibility: pulumi.Input<string>;
    /**
     * Data format name to use for the schema. Accepted values: 'AVRO', 'JSON', 'PROTOBUF'
     */
    dataFormat: pulumi.Input<string>;
    /**
     * A description of the schema. If description is not provided, there will not be any default value for this.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the schema.
     */
    name?: pulumi.Input<string>;
    /**
     * Identifier for the registry which the schema is part of.
     */
    registry?: pulumi.Input<inputs.GlueSchemaRegistry>;
    /**
     * Definition for the initial schema version in plain-text.
     */
    schemaDefinition: pulumi.Input<string>;
    /**
     * List of tags to tag the schema
     */
    tags?: pulumi.Input<pulumi.Input<inputs.GlueSchemaTag>[]>;
}
