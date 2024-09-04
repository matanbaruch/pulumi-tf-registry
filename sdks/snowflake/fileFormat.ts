// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FileFormat extends pulumi.CustomResource {
    /**
     * Get an existing FileFormat resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FileFormatState, opts?: pulumi.CustomResourceOptions): FileFormat {
        return new FileFormat(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'snowflake:index/fileFormat:FileFormat';

    /**
     * Returns true if the given object is an instance of FileFormat.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FileFormat {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FileFormat.__pulumiType;
    }

    /**
     * Boolean that specifies to allow duplicate object field names (only the last one will be preserved).
     */
    public readonly allowDuplicate!: pulumi.Output<boolean | undefined>;
    /**
     * Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.
     */
    public readonly binaryAsText!: pulumi.Output<boolean | undefined>;
    /**
     * Defines the encoding format for binary input or output.
     */
    public readonly binaryFormat!: pulumi.Output<string>;
    /**
     * Specifies a comment for the file format.
     */
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Specifies the current compression algorithm for the data file.
     */
    public readonly compression!: pulumi.Output<string>;
    /**
     * The database in which to create the file format.
     */
    public readonly database!: pulumi.Output<string>;
    /**
     * Defines the format of date values in the data files (data loading) or table (data unloading).
     */
    public readonly dateFormat!: pulumi.Output<string>;
    /**
     * Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to
     * native representation.
     */
    public readonly disableAutoConvert!: pulumi.Output<boolean | undefined>;
    /**
     * Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags.
     */
    public readonly disableSnowflakeData!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive
     * delimiters.
     */
    public readonly emptyFieldAsNull!: pulumi.Output<boolean | undefined>;
    /**
     * Boolean that enables parsing of octal numbers.
     */
    public readonly enableOctal!: pulumi.Output<boolean | undefined>;
    /**
     * String (constant) that specifies the character set of the source data when loading data into a table.
     */
    public readonly encoding!: pulumi.Output<string>;
    /**
     * Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input
     * file does not match the number of columns in the corresponding table.
     */
    public readonly errorOnColumnCountMismatch!: pulumi.Output<boolean | undefined>;
    /**
     * Single character string used as the escape character for field values.
     */
    public readonly escape!: pulumi.Output<string>;
    /**
     * Single character string used as the escape character for unenclosed field values only.
     */
    public readonly escapeUnenclosedField!: pulumi.Output<string>;
    /**
     * Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or
     * unloaded file (data unloading).
     */
    public readonly fieldDelimiter!: pulumi.Output<string>;
    /**
     * Character used to enclose strings.
     */
    public readonly fieldOptionallyEnclosedBy!: pulumi.Output<string>;
    /**
     * Specifies the extension for files unloaded to a stage.
     */
    public readonly fileExtension!: pulumi.Output<string | undefined>;
    /**
     * Specifies the format of the input files (for data loading) or output files (for data unloading).
     */
    public readonly formatType!: pulumi.Output<string>;
    /**
     * Fully qualified name of the resource. For more information, see [object name
     * resolution](https://docs.snowflake.com/en/sql-reference/name-resolution).
     */
    public /*out*/ readonly fullyQualifiedName!: pulumi.Output<string>;
    /**
     * Boolean that specifies whether UTF-8 encoding errors produce error conditions.
     */
    public readonly ignoreUtf8Errors!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the identifier for the file format; must be unique for the database and schema in which the file format is
     * created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * String used to convert to and from SQL NULL.
     */
    public readonly nullIfs!: pulumi.Output<string[]>;
    /**
     * Boolean that specifies whether to use the first row headers in the data files to determine column names.
     */
    public readonly parseHeader!: pulumi.Output<boolean | undefined>;
    /**
     * Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.
     */
    public readonly preserveSpace!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or
     * unloaded file (data unloading).
     */
    public readonly recordDelimiter!: pulumi.Output<string>;
    /**
     * Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�).
     */
    public readonly replaceInvalidCharacters!: pulumi.Output<boolean | undefined>;
    /**
     * The schema in which to create the file format.
     */
    public readonly schema!: pulumi.Output<string>;
    /**
     * Boolean that specifies to skip any blank lines encountered in the data files.
     */
    public readonly skipBlankLines!: pulumi.Output<boolean | undefined>;
    /**
     * Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file.
     */
    public readonly skipByteOrderMark!: pulumi.Output<boolean | undefined>;
    /**
     * Number of lines at the start of the file to skip.
     */
    public readonly skipHeader!: pulumi.Output<number | undefined>;
    /**
     * Boolean that instructs the JSON parser to remove object fields or array elements containing null values.
     */
    public readonly stripNullValues!: pulumi.Output<boolean | undefined>;
    /**
     * Boolean that instructs the JSON parser to remove outer brackets.
     */
    public readonly stripOuterArray!: pulumi.Output<boolean | undefined>;
    /**
     * Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate
     * documents.
     */
    public readonly stripOuterElement!: pulumi.Output<boolean | undefined>;
    /**
     * Defines the format of time values in the data files (data loading) or table (data unloading).
     */
    public readonly timeFormat!: pulumi.Output<string>;
    /**
     * Defines the format of timestamp values in the data files (data loading) or table (data unloading).
     */
    public readonly timestampFormat!: pulumi.Output<string>;
    /**
     * Boolean that specifies whether to remove white space from fields.
     */
    public readonly trimSpace!: pulumi.Output<boolean | undefined>;

    /**
     * Create a FileFormat resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileFormatArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FileFormatArgs | FileFormatState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FileFormatState | undefined;
            resourceInputs["allowDuplicate"] = state ? state.allowDuplicate : undefined;
            resourceInputs["binaryAsText"] = state ? state.binaryAsText : undefined;
            resourceInputs["binaryFormat"] = state ? state.binaryFormat : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["compression"] = state ? state.compression : undefined;
            resourceInputs["database"] = state ? state.database : undefined;
            resourceInputs["dateFormat"] = state ? state.dateFormat : undefined;
            resourceInputs["disableAutoConvert"] = state ? state.disableAutoConvert : undefined;
            resourceInputs["disableSnowflakeData"] = state ? state.disableSnowflakeData : undefined;
            resourceInputs["emptyFieldAsNull"] = state ? state.emptyFieldAsNull : undefined;
            resourceInputs["enableOctal"] = state ? state.enableOctal : undefined;
            resourceInputs["encoding"] = state ? state.encoding : undefined;
            resourceInputs["errorOnColumnCountMismatch"] = state ? state.errorOnColumnCountMismatch : undefined;
            resourceInputs["escape"] = state ? state.escape : undefined;
            resourceInputs["escapeUnenclosedField"] = state ? state.escapeUnenclosedField : undefined;
            resourceInputs["fieldDelimiter"] = state ? state.fieldDelimiter : undefined;
            resourceInputs["fieldOptionallyEnclosedBy"] = state ? state.fieldOptionallyEnclosedBy : undefined;
            resourceInputs["fileExtension"] = state ? state.fileExtension : undefined;
            resourceInputs["formatType"] = state ? state.formatType : undefined;
            resourceInputs["fullyQualifiedName"] = state ? state.fullyQualifiedName : undefined;
            resourceInputs["ignoreUtf8Errors"] = state ? state.ignoreUtf8Errors : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nullIfs"] = state ? state.nullIfs : undefined;
            resourceInputs["parseHeader"] = state ? state.parseHeader : undefined;
            resourceInputs["preserveSpace"] = state ? state.preserveSpace : undefined;
            resourceInputs["recordDelimiter"] = state ? state.recordDelimiter : undefined;
            resourceInputs["replaceInvalidCharacters"] = state ? state.replaceInvalidCharacters : undefined;
            resourceInputs["schema"] = state ? state.schema : undefined;
            resourceInputs["skipBlankLines"] = state ? state.skipBlankLines : undefined;
            resourceInputs["skipByteOrderMark"] = state ? state.skipByteOrderMark : undefined;
            resourceInputs["skipHeader"] = state ? state.skipHeader : undefined;
            resourceInputs["stripNullValues"] = state ? state.stripNullValues : undefined;
            resourceInputs["stripOuterArray"] = state ? state.stripOuterArray : undefined;
            resourceInputs["stripOuterElement"] = state ? state.stripOuterElement : undefined;
            resourceInputs["timeFormat"] = state ? state.timeFormat : undefined;
            resourceInputs["timestampFormat"] = state ? state.timestampFormat : undefined;
            resourceInputs["trimSpace"] = state ? state.trimSpace : undefined;
        } else {
            const args = argsOrState as FileFormatArgs | undefined;
            if ((!args || args.database === undefined) && !opts.urn) {
                throw new Error("Missing required property 'database'");
            }
            if ((!args || args.formatType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'formatType'");
            }
            if ((!args || args.schema === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schema'");
            }
            resourceInputs["allowDuplicate"] = args ? args.allowDuplicate : undefined;
            resourceInputs["binaryAsText"] = args ? args.binaryAsText : undefined;
            resourceInputs["binaryFormat"] = args ? args.binaryFormat : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["compression"] = args ? args.compression : undefined;
            resourceInputs["database"] = args ? args.database : undefined;
            resourceInputs["dateFormat"] = args ? args.dateFormat : undefined;
            resourceInputs["disableAutoConvert"] = args ? args.disableAutoConvert : undefined;
            resourceInputs["disableSnowflakeData"] = args ? args.disableSnowflakeData : undefined;
            resourceInputs["emptyFieldAsNull"] = args ? args.emptyFieldAsNull : undefined;
            resourceInputs["enableOctal"] = args ? args.enableOctal : undefined;
            resourceInputs["encoding"] = args ? args.encoding : undefined;
            resourceInputs["errorOnColumnCountMismatch"] = args ? args.errorOnColumnCountMismatch : undefined;
            resourceInputs["escape"] = args ? args.escape : undefined;
            resourceInputs["escapeUnenclosedField"] = args ? args.escapeUnenclosedField : undefined;
            resourceInputs["fieldDelimiter"] = args ? args.fieldDelimiter : undefined;
            resourceInputs["fieldOptionallyEnclosedBy"] = args ? args.fieldOptionallyEnclosedBy : undefined;
            resourceInputs["fileExtension"] = args ? args.fileExtension : undefined;
            resourceInputs["formatType"] = args ? args.formatType : undefined;
            resourceInputs["ignoreUtf8Errors"] = args ? args.ignoreUtf8Errors : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nullIfs"] = args ? args.nullIfs : undefined;
            resourceInputs["parseHeader"] = args ? args.parseHeader : undefined;
            resourceInputs["preserveSpace"] = args ? args.preserveSpace : undefined;
            resourceInputs["recordDelimiter"] = args ? args.recordDelimiter : undefined;
            resourceInputs["replaceInvalidCharacters"] = args ? args.replaceInvalidCharacters : undefined;
            resourceInputs["schema"] = args ? args.schema : undefined;
            resourceInputs["skipBlankLines"] = args ? args.skipBlankLines : undefined;
            resourceInputs["skipByteOrderMark"] = args ? args.skipByteOrderMark : undefined;
            resourceInputs["skipHeader"] = args ? args.skipHeader : undefined;
            resourceInputs["stripNullValues"] = args ? args.stripNullValues : undefined;
            resourceInputs["stripOuterArray"] = args ? args.stripOuterArray : undefined;
            resourceInputs["stripOuterElement"] = args ? args.stripOuterElement : undefined;
            resourceInputs["timeFormat"] = args ? args.timeFormat : undefined;
            resourceInputs["timestampFormat"] = args ? args.timestampFormat : undefined;
            resourceInputs["trimSpace"] = args ? args.trimSpace : undefined;
            resourceInputs["fullyQualifiedName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FileFormat.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FileFormat resources.
 */
export interface FileFormatState {
    /**
     * Boolean that specifies to allow duplicate object field names (only the last one will be preserved).
     */
    allowDuplicate?: pulumi.Input<boolean>;
    /**
     * Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.
     */
    binaryAsText?: pulumi.Input<boolean>;
    /**
     * Defines the encoding format for binary input or output.
     */
    binaryFormat?: pulumi.Input<string>;
    /**
     * Specifies a comment for the file format.
     */
    comment?: pulumi.Input<string>;
    /**
     * Specifies the current compression algorithm for the data file.
     */
    compression?: pulumi.Input<string>;
    /**
     * The database in which to create the file format.
     */
    database?: pulumi.Input<string>;
    /**
     * Defines the format of date values in the data files (data loading) or table (data unloading).
     */
    dateFormat?: pulumi.Input<string>;
    /**
     * Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to
     * native representation.
     */
    disableAutoConvert?: pulumi.Input<boolean>;
    /**
     * Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags.
     */
    disableSnowflakeData?: pulumi.Input<boolean>;
    /**
     * Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive
     * delimiters.
     */
    emptyFieldAsNull?: pulumi.Input<boolean>;
    /**
     * Boolean that enables parsing of octal numbers.
     */
    enableOctal?: pulumi.Input<boolean>;
    /**
     * String (constant) that specifies the character set of the source data when loading data into a table.
     */
    encoding?: pulumi.Input<string>;
    /**
     * Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input
     * file does not match the number of columns in the corresponding table.
     */
    errorOnColumnCountMismatch?: pulumi.Input<boolean>;
    /**
     * Single character string used as the escape character for field values.
     */
    escape?: pulumi.Input<string>;
    /**
     * Single character string used as the escape character for unenclosed field values only.
     */
    escapeUnenclosedField?: pulumi.Input<string>;
    /**
     * Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or
     * unloaded file (data unloading).
     */
    fieldDelimiter?: pulumi.Input<string>;
    /**
     * Character used to enclose strings.
     */
    fieldOptionallyEnclosedBy?: pulumi.Input<string>;
    /**
     * Specifies the extension for files unloaded to a stage.
     */
    fileExtension?: pulumi.Input<string>;
    /**
     * Specifies the format of the input files (for data loading) or output files (for data unloading).
     */
    formatType?: pulumi.Input<string>;
    /**
     * Fully qualified name of the resource. For more information, see [object name
     * resolution](https://docs.snowflake.com/en/sql-reference/name-resolution).
     */
    fullyQualifiedName?: pulumi.Input<string>;
    /**
     * Boolean that specifies whether UTF-8 encoding errors produce error conditions.
     */
    ignoreUtf8Errors?: pulumi.Input<boolean>;
    /**
     * Specifies the identifier for the file format; must be unique for the database and schema in which the file format is
     * created.
     */
    name?: pulumi.Input<string>;
    /**
     * String used to convert to and from SQL NULL.
     */
    nullIfs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Boolean that specifies whether to use the first row headers in the data files to determine column names.
     */
    parseHeader?: pulumi.Input<boolean>;
    /**
     * Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.
     */
    preserveSpace?: pulumi.Input<boolean>;
    /**
     * Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or
     * unloaded file (data unloading).
     */
    recordDelimiter?: pulumi.Input<string>;
    /**
     * Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�).
     */
    replaceInvalidCharacters?: pulumi.Input<boolean>;
    /**
     * The schema in which to create the file format.
     */
    schema?: pulumi.Input<string>;
    /**
     * Boolean that specifies to skip any blank lines encountered in the data files.
     */
    skipBlankLines?: pulumi.Input<boolean>;
    /**
     * Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file.
     */
    skipByteOrderMark?: pulumi.Input<boolean>;
    /**
     * Number of lines at the start of the file to skip.
     */
    skipHeader?: pulumi.Input<number>;
    /**
     * Boolean that instructs the JSON parser to remove object fields or array elements containing null values.
     */
    stripNullValues?: pulumi.Input<boolean>;
    /**
     * Boolean that instructs the JSON parser to remove outer brackets.
     */
    stripOuterArray?: pulumi.Input<boolean>;
    /**
     * Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate
     * documents.
     */
    stripOuterElement?: pulumi.Input<boolean>;
    /**
     * Defines the format of time values in the data files (data loading) or table (data unloading).
     */
    timeFormat?: pulumi.Input<string>;
    /**
     * Defines the format of timestamp values in the data files (data loading) or table (data unloading).
     */
    timestampFormat?: pulumi.Input<string>;
    /**
     * Boolean that specifies whether to remove white space from fields.
     */
    trimSpace?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a FileFormat resource.
 */
export interface FileFormatArgs {
    /**
     * Boolean that specifies to allow duplicate object field names (only the last one will be preserved).
     */
    allowDuplicate?: pulumi.Input<boolean>;
    /**
     * Boolean that specifies whether to interpret columns with no defined logical data type as UTF-8 text.
     */
    binaryAsText?: pulumi.Input<boolean>;
    /**
     * Defines the encoding format for binary input or output.
     */
    binaryFormat?: pulumi.Input<string>;
    /**
     * Specifies a comment for the file format.
     */
    comment?: pulumi.Input<string>;
    /**
     * Specifies the current compression algorithm for the data file.
     */
    compression?: pulumi.Input<string>;
    /**
     * The database in which to create the file format.
     */
    database: pulumi.Input<string>;
    /**
     * Defines the format of date values in the data files (data loading) or table (data unloading).
     */
    dateFormat?: pulumi.Input<string>;
    /**
     * Boolean that specifies whether the XML parser disables automatic conversion of numeric and Boolean values from text to
     * native representation.
     */
    disableAutoConvert?: pulumi.Input<boolean>;
    /**
     * Boolean that specifies whether the XML parser disables recognition of Snowflake semi-structured data tags.
     */
    disableSnowflakeData?: pulumi.Input<boolean>;
    /**
     * Specifies whether to insert SQL NULL for empty fields in an input file, which are represented by two successive
     * delimiters.
     */
    emptyFieldAsNull?: pulumi.Input<boolean>;
    /**
     * Boolean that enables parsing of octal numbers.
     */
    enableOctal?: pulumi.Input<boolean>;
    /**
     * String (constant) that specifies the character set of the source data when loading data into a table.
     */
    encoding?: pulumi.Input<string>;
    /**
     * Boolean that specifies whether to generate a parsing error if the number of delimited columns (i.e. fields) in an input
     * file does not match the number of columns in the corresponding table.
     */
    errorOnColumnCountMismatch?: pulumi.Input<boolean>;
    /**
     * Single character string used as the escape character for field values.
     */
    escape?: pulumi.Input<string>;
    /**
     * Single character string used as the escape character for unenclosed field values only.
     */
    escapeUnenclosedField?: pulumi.Input<string>;
    /**
     * Specifies one or more singlebyte or multibyte characters that separate fields in an input file (data loading) or
     * unloaded file (data unloading).
     */
    fieldDelimiter?: pulumi.Input<string>;
    /**
     * Character used to enclose strings.
     */
    fieldOptionallyEnclosedBy?: pulumi.Input<string>;
    /**
     * Specifies the extension for files unloaded to a stage.
     */
    fileExtension?: pulumi.Input<string>;
    /**
     * Specifies the format of the input files (for data loading) or output files (for data unloading).
     */
    formatType: pulumi.Input<string>;
    /**
     * Boolean that specifies whether UTF-8 encoding errors produce error conditions.
     */
    ignoreUtf8Errors?: pulumi.Input<boolean>;
    /**
     * Specifies the identifier for the file format; must be unique for the database and schema in which the file format is
     * created.
     */
    name?: pulumi.Input<string>;
    /**
     * String used to convert to and from SQL NULL.
     */
    nullIfs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Boolean that specifies whether to use the first row headers in the data files to determine column names.
     */
    parseHeader?: pulumi.Input<boolean>;
    /**
     * Boolean that specifies whether the XML parser preserves leading and trailing spaces in element content.
     */
    preserveSpace?: pulumi.Input<boolean>;
    /**
     * Specifies one or more singlebyte or multibyte characters that separate records in an input file (data loading) or
     * unloaded file (data unloading).
     */
    recordDelimiter?: pulumi.Input<string>;
    /**
     * Boolean that specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�).
     */
    replaceInvalidCharacters?: pulumi.Input<boolean>;
    /**
     * The schema in which to create the file format.
     */
    schema: pulumi.Input<string>;
    /**
     * Boolean that specifies to skip any blank lines encountered in the data files.
     */
    skipBlankLines?: pulumi.Input<boolean>;
    /**
     * Boolean that specifies whether to skip the BOM (byte order mark), if present in a data file.
     */
    skipByteOrderMark?: pulumi.Input<boolean>;
    /**
     * Number of lines at the start of the file to skip.
     */
    skipHeader?: pulumi.Input<number>;
    /**
     * Boolean that instructs the JSON parser to remove object fields or array elements containing null values.
     */
    stripNullValues?: pulumi.Input<boolean>;
    /**
     * Boolean that instructs the JSON parser to remove outer brackets.
     */
    stripOuterArray?: pulumi.Input<boolean>;
    /**
     * Boolean that specifies whether the XML parser strips out the outer XML element, exposing 2nd level elements as separate
     * documents.
     */
    stripOuterElement?: pulumi.Input<boolean>;
    /**
     * Defines the format of time values in the data files (data loading) or table (data unloading).
     */
    timeFormat?: pulumi.Input<string>;
    /**
     * Defines the format of timestamp values in the data files (data loading) or table (data unloading).
     */
    timestampFormat?: pulumi.Input<string>;
    /**
     * Boolean that specifies whether to remove white space from fields.
     */
    trimSpace?: pulumi.Input<boolean>;
}
