// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BigqueryRoutine extends pulumi.CustomResource {
    /**
     * Get an existing BigqueryRoutine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BigqueryRoutineState, opts?: pulumi.CustomResourceOptions): BigqueryRoutine {
        return new BigqueryRoutine(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/bigqueryRoutine:BigqueryRoutine';

    /**
     * Returns true if the given object is an instance of BigqueryRoutine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BigqueryRoutine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BigqueryRoutine.__pulumiType;
    }

    /**
     * Input/output argument of a function or a stored procedure.
     */
    public readonly arguments!: pulumi.Output<outputs.BigqueryRoutineArgument[] | undefined>;
    /**
     * The time when this routine was created, in milliseconds since the epoch.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<number>;
    /**
     * If set to DATA_MASKING, the function is validated and made available as a masking function. For more information, see
     * https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask Possible values: ["DATA_MASKING"]
     */
    public readonly dataGovernanceType!: pulumi.Output<string | undefined>;
    /**
     * The ID of the dataset containing this routine
     */
    public readonly datasetId!: pulumi.Output<string>;
    /**
     * The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the substring
     * inside (but excluding) the parentheses.
     */
    public readonly definitionBody!: pulumi.Output<string>;
    /**
     * The description of the routine if defined.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED",
     * "DETERMINISTIC", "NOT_DETERMINISTIC"]
     */
    public readonly determinismLevel!: pulumi.Output<string | undefined>;
    /**
     * Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.
     */
    public readonly importedLibraries!: pulumi.Output<string[] | undefined>;
    /**
     * The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"]
     */
    public readonly language!: pulumi.Output<string | undefined>;
    /**
     * The time when this routine was modified, in milliseconds since the epoch.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<number>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Remote function specific options.
     */
    public readonly remoteFunctionOptions!: pulumi.Output<outputs.BigqueryRoutineRemoteFunctionOptions | undefined>;
    /**
     * Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". If absent, the return table type is inferred from
     * definitionBody at query time in each query that references this routine. If present, then the columns in the evaluated
     * table result will be cast to match the column types specificed in return table type, at query time.
     */
    public readonly returnTableType!: pulumi.Output<string | undefined>;
    /**
     * A JSON schema for the return type. Optional if language = "SQL"; required otherwise. If absent, the return type is
     * inferred from definitionBody at query time in each query that references this routine. If present, then the evaluated
     * result will be cast to the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON string,
     * any changes to the string will create a diff, even if the JSON itself hasn't changed. If the API returns a different
     * value for the same schema, e.g. it switche d the order of values or replaced STRUCT field type with RECORD field type,
     * we currently cannot suppress the recurring diff this causes. As a workaround, we recommend using the schema as returned
     * by the API.
     */
    public readonly returnType!: pulumi.Output<string | undefined>;
    /**
     * The ID of the the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum
     * length is 256 characters.
     */
    public readonly routineId!: pulumi.Output<string>;
    /**
     * The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]
     */
    public readonly routineType!: pulumi.Output<string>;
    /**
     * Optional. If language is one of "PYTHON", "JAVA", "SCALA", this field stores the options for spark stored procedure.
     */
    public readonly sparkOptions!: pulumi.Output<outputs.BigqueryRoutineSparkOptions | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.BigqueryRoutineTimeouts | undefined>;

    /**
     * Create a BigqueryRoutine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BigqueryRoutineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BigqueryRoutineArgs | BigqueryRoutineState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BigqueryRoutineState | undefined;
            resourceInputs["arguments"] = state ? state.arguments : undefined;
            resourceInputs["creationTime"] = state ? state.creationTime : undefined;
            resourceInputs["dataGovernanceType"] = state ? state.dataGovernanceType : undefined;
            resourceInputs["datasetId"] = state ? state.datasetId : undefined;
            resourceInputs["definitionBody"] = state ? state.definitionBody : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["determinismLevel"] = state ? state.determinismLevel : undefined;
            resourceInputs["importedLibraries"] = state ? state.importedLibraries : undefined;
            resourceInputs["language"] = state ? state.language : undefined;
            resourceInputs["lastModifiedTime"] = state ? state.lastModifiedTime : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["remoteFunctionOptions"] = state ? state.remoteFunctionOptions : undefined;
            resourceInputs["returnTableType"] = state ? state.returnTableType : undefined;
            resourceInputs["returnType"] = state ? state.returnType : undefined;
            resourceInputs["routineId"] = state ? state.routineId : undefined;
            resourceInputs["routineType"] = state ? state.routineType : undefined;
            resourceInputs["sparkOptions"] = state ? state.sparkOptions : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as BigqueryRoutineArgs | undefined;
            if ((!args || args.datasetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'datasetId'");
            }
            if ((!args || args.definitionBody === undefined) && !opts.urn) {
                throw new Error("Missing required property 'definitionBody'");
            }
            if ((!args || args.routineId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routineId'");
            }
            if ((!args || args.routineType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routineType'");
            }
            resourceInputs["arguments"] = args ? args.arguments : undefined;
            resourceInputs["dataGovernanceType"] = args ? args.dataGovernanceType : undefined;
            resourceInputs["datasetId"] = args ? args.datasetId : undefined;
            resourceInputs["definitionBody"] = args ? args.definitionBody : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["determinismLevel"] = args ? args.determinismLevel : undefined;
            resourceInputs["importedLibraries"] = args ? args.importedLibraries : undefined;
            resourceInputs["language"] = args ? args.language : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["remoteFunctionOptions"] = args ? args.remoteFunctionOptions : undefined;
            resourceInputs["returnTableType"] = args ? args.returnTableType : undefined;
            resourceInputs["returnType"] = args ? args.returnType : undefined;
            resourceInputs["routineId"] = args ? args.routineId : undefined;
            resourceInputs["routineType"] = args ? args.routineType : undefined;
            resourceInputs["sparkOptions"] = args ? args.sparkOptions : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BigqueryRoutine.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BigqueryRoutine resources.
 */
export interface BigqueryRoutineState {
    /**
     * Input/output argument of a function or a stored procedure.
     */
    arguments?: pulumi.Input<pulumi.Input<inputs.BigqueryRoutineArgument>[]>;
    /**
     * The time when this routine was created, in milliseconds since the epoch.
     */
    creationTime?: pulumi.Input<number>;
    /**
     * If set to DATA_MASKING, the function is validated and made available as a masking function. For more information, see
     * https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask Possible values: ["DATA_MASKING"]
     */
    dataGovernanceType?: pulumi.Input<string>;
    /**
     * The ID of the dataset containing this routine
     */
    datasetId?: pulumi.Input<string>;
    /**
     * The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the substring
     * inside (but excluding) the parentheses.
     */
    definitionBody?: pulumi.Input<string>;
    /**
     * The description of the routine if defined.
     */
    description?: pulumi.Input<string>;
    /**
     * The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED",
     * "DETERMINISTIC", "NOT_DETERMINISTIC"]
     */
    determinismLevel?: pulumi.Input<string>;
    /**
     * Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.
     */
    importedLibraries?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"]
     */
    language?: pulumi.Input<string>;
    /**
     * The time when this routine was modified, in milliseconds since the epoch.
     */
    lastModifiedTime?: pulumi.Input<number>;
    project?: pulumi.Input<string>;
    /**
     * Remote function specific options.
     */
    remoteFunctionOptions?: pulumi.Input<inputs.BigqueryRoutineRemoteFunctionOptions>;
    /**
     * Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". If absent, the return table type is inferred from
     * definitionBody at query time in each query that references this routine. If present, then the columns in the evaluated
     * table result will be cast to match the column types specificed in return table type, at query time.
     */
    returnTableType?: pulumi.Input<string>;
    /**
     * A JSON schema for the return type. Optional if language = "SQL"; required otherwise. If absent, the return type is
     * inferred from definitionBody at query time in each query that references this routine. If present, then the evaluated
     * result will be cast to the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON string,
     * any changes to the string will create a diff, even if the JSON itself hasn't changed. If the API returns a different
     * value for the same schema, e.g. it switche d the order of values or replaced STRUCT field type with RECORD field type,
     * we currently cannot suppress the recurring diff this causes. As a workaround, we recommend using the schema as returned
     * by the API.
     */
    returnType?: pulumi.Input<string>;
    /**
     * The ID of the the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum
     * length is 256 characters.
     */
    routineId?: pulumi.Input<string>;
    /**
     * The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]
     */
    routineType?: pulumi.Input<string>;
    /**
     * Optional. If language is one of "PYTHON", "JAVA", "SCALA", this field stores the options for spark stored procedure.
     */
    sparkOptions?: pulumi.Input<inputs.BigqueryRoutineSparkOptions>;
    timeouts?: pulumi.Input<inputs.BigqueryRoutineTimeouts>;
}

/**
 * The set of arguments for constructing a BigqueryRoutine resource.
 */
export interface BigqueryRoutineArgs {
    /**
     * Input/output argument of a function or a stored procedure.
     */
    arguments?: pulumi.Input<pulumi.Input<inputs.BigqueryRoutineArgument>[]>;
    /**
     * If set to DATA_MASKING, the function is validated and made available as a masking function. For more information, see
     * https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask Possible values: ["DATA_MASKING"]
     */
    dataGovernanceType?: pulumi.Input<string>;
    /**
     * The ID of the dataset containing this routine
     */
    datasetId: pulumi.Input<string>;
    /**
     * The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the substring
     * inside (but excluding) the parentheses.
     */
    definitionBody: pulumi.Input<string>;
    /**
     * The description of the routine if defined.
     */
    description?: pulumi.Input<string>;
    /**
     * The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED",
     * "DETERMINISTIC", "NOT_DETERMINISTIC"]
     */
    determinismLevel?: pulumi.Input<string>;
    /**
     * Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.
     */
    importedLibraries?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"]
     */
    language?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Remote function specific options.
     */
    remoteFunctionOptions?: pulumi.Input<inputs.BigqueryRoutineRemoteFunctionOptions>;
    /**
     * Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". If absent, the return table type is inferred from
     * definitionBody at query time in each query that references this routine. If present, then the columns in the evaluated
     * table result will be cast to match the column types specificed in return table type, at query time.
     */
    returnTableType?: pulumi.Input<string>;
    /**
     * A JSON schema for the return type. Optional if language = "SQL"; required otherwise. If absent, the return type is
     * inferred from definitionBody at query time in each query that references this routine. If present, then the evaluated
     * result will be cast to the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON string,
     * any changes to the string will create a diff, even if the JSON itself hasn't changed. If the API returns a different
     * value for the same schema, e.g. it switche d the order of values or replaced STRUCT field type with RECORD field type,
     * we currently cannot suppress the recurring diff this causes. As a workaround, we recommend using the schema as returned
     * by the API.
     */
    returnType?: pulumi.Input<string>;
    /**
     * The ID of the the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum
     * length is 256 characters.
     */
    routineId: pulumi.Input<string>;
    /**
     * The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]
     */
    routineType: pulumi.Input<string>;
    /**
     * Optional. If language is one of "PYTHON", "JAVA", "SCALA", this field stores the options for spark stored procedure.
     */
    sparkOptions?: pulumi.Input<inputs.BigqueryRoutineSparkOptions>;
    timeouts?: pulumi.Input<inputs.BigqueryRoutineTimeouts>;
}
