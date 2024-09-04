// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DatasetDefinition extends pulumi.CustomResource {
    /**
     * Get an existing DatasetDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetDefinitionState, opts?: pulumi.CustomResourceOptions): DatasetDefinition {
        return new DatasetDefinition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'honeycombio:index/datasetDefinition:DatasetDefinition';

    /**
     * Returns true if the given object is an instance of DatasetDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatasetDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatasetDefinition.__pulumiType;
    }

    /**
     * The column to set the definition to. Must be the name of an existing Column or the alias of an existing Derived Column.
     */
    public readonly column!: pulumi.Output<string>;
    /**
     * The type of the column assigned to the definition. Either `column` or `derived_column`.
     */
    public /*out*/ readonly columnType!: pulumi.Output<string>;
    /**
     * The dataset to set the Dataset Definition for.
     */
    public readonly dataset!: pulumi.Output<string>;
    /**
     * The name of the definition being set.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a DatasetDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetDefinitionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatasetDefinitionArgs | DatasetDefinitionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatasetDefinitionState | undefined;
            resourceInputs["column"] = state ? state.column : undefined;
            resourceInputs["columnType"] = state ? state.columnType : undefined;
            resourceInputs["dataset"] = state ? state.dataset : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as DatasetDefinitionArgs | undefined;
            if ((!args || args.column === undefined) && !opts.urn) {
                throw new Error("Missing required property 'column'");
            }
            if ((!args || args.dataset === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataset'");
            }
            resourceInputs["column"] = args ? args.column : undefined;
            resourceInputs["dataset"] = args ? args.dataset : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["columnType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatasetDefinition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatasetDefinition resources.
 */
export interface DatasetDefinitionState {
    /**
     * The column to set the definition to. Must be the name of an existing Column or the alias of an existing Derived Column.
     */
    column?: pulumi.Input<string>;
    /**
     * The type of the column assigned to the definition. Either `column` or `derived_column`.
     */
    columnType?: pulumi.Input<string>;
    /**
     * The dataset to set the Dataset Definition for.
     */
    dataset?: pulumi.Input<string>;
    /**
     * The name of the definition being set.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DatasetDefinition resource.
 */
export interface DatasetDefinitionArgs {
    /**
     * The column to set the definition to. Must be the name of an existing Column or the alias of an existing Derived Column.
     */
    column: pulumi.Input<string>;
    /**
     * The dataset to set the Dataset Definition for.
     */
    dataset: pulumi.Input<string>;
    /**
     * The name of the definition being set.
     */
    name?: pulumi.Input<string>;
}
