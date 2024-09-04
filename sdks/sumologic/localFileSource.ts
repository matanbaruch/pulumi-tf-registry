// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LocalFileSource extends pulumi.CustomResource {
    /**
     * Get an existing LocalFileSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LocalFileSourceState, opts?: pulumi.CustomResourceOptions): LocalFileSource {
        return new LocalFileSource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sumologic:index/localFileSource:LocalFileSource';

    /**
     * Returns true if the given object is an instance of LocalFileSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LocalFileSource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LocalFileSource.__pulumiType;
    }

    public readonly automaticDateParsing!: pulumi.Output<boolean | undefined>;
    public readonly category!: pulumi.Output<string | undefined>;
    public readonly collectorId!: pulumi.Output<number>;
    public readonly contentType!: pulumi.Output<string | undefined>;
    public readonly cutoffRelativeTime!: pulumi.Output<string | undefined>;
    public readonly cutoffTimestamp!: pulumi.Output<number | undefined>;
    public readonly defaultDateFormats!: pulumi.Output<outputs.LocalFileSourceDefaultDateFormat[] | undefined>;
    public readonly denyLists!: pulumi.Output<string[] | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly encoding!: pulumi.Output<string | undefined>;
    public readonly fields!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly filters!: pulumi.Output<outputs.LocalFileSourceFilter[] | undefined>;
    public readonly forceTimezone!: pulumi.Output<boolean | undefined>;
    public readonly hostName!: pulumi.Output<string | undefined>;
    public readonly manualPrefixRegexp!: pulumi.Output<string | undefined>;
    public readonly multilineProcessingEnabled!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly pathExpression!: pulumi.Output<string>;
    public readonly timezone!: pulumi.Output<string | undefined>;
    public readonly useAutolineMatching!: pulumi.Output<boolean | undefined>;

    /**
     * Create a LocalFileSource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LocalFileSourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LocalFileSourceArgs | LocalFileSourceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LocalFileSourceState | undefined;
            resourceInputs["automaticDateParsing"] = state ? state.automaticDateParsing : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["collectorId"] = state ? state.collectorId : undefined;
            resourceInputs["contentType"] = state ? state.contentType : undefined;
            resourceInputs["cutoffRelativeTime"] = state ? state.cutoffRelativeTime : undefined;
            resourceInputs["cutoffTimestamp"] = state ? state.cutoffTimestamp : undefined;
            resourceInputs["defaultDateFormats"] = state ? state.defaultDateFormats : undefined;
            resourceInputs["denyLists"] = state ? state.denyLists : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["encoding"] = state ? state.encoding : undefined;
            resourceInputs["fields"] = state ? state.fields : undefined;
            resourceInputs["filters"] = state ? state.filters : undefined;
            resourceInputs["forceTimezone"] = state ? state.forceTimezone : undefined;
            resourceInputs["hostName"] = state ? state.hostName : undefined;
            resourceInputs["manualPrefixRegexp"] = state ? state.manualPrefixRegexp : undefined;
            resourceInputs["multilineProcessingEnabled"] = state ? state.multilineProcessingEnabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["pathExpression"] = state ? state.pathExpression : undefined;
            resourceInputs["timezone"] = state ? state.timezone : undefined;
            resourceInputs["useAutolineMatching"] = state ? state.useAutolineMatching : undefined;
        } else {
            const args = argsOrState as LocalFileSourceArgs | undefined;
            if ((!args || args.collectorId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'collectorId'");
            }
            if ((!args || args.pathExpression === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pathExpression'");
            }
            resourceInputs["automaticDateParsing"] = args ? args.automaticDateParsing : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["collectorId"] = args ? args.collectorId : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["cutoffRelativeTime"] = args ? args.cutoffRelativeTime : undefined;
            resourceInputs["cutoffTimestamp"] = args ? args.cutoffTimestamp : undefined;
            resourceInputs["defaultDateFormats"] = args ? args.defaultDateFormats : undefined;
            resourceInputs["denyLists"] = args ? args.denyLists : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["encoding"] = args ? args.encoding : undefined;
            resourceInputs["fields"] = args ? args.fields : undefined;
            resourceInputs["filters"] = args ? args.filters : undefined;
            resourceInputs["forceTimezone"] = args ? args.forceTimezone : undefined;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["manualPrefixRegexp"] = args ? args.manualPrefixRegexp : undefined;
            resourceInputs["multilineProcessingEnabled"] = args ? args.multilineProcessingEnabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pathExpression"] = args ? args.pathExpression : undefined;
            resourceInputs["timezone"] = args ? args.timezone : undefined;
            resourceInputs["useAutolineMatching"] = args ? args.useAutolineMatching : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LocalFileSource.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LocalFileSource resources.
 */
export interface LocalFileSourceState {
    automaticDateParsing?: pulumi.Input<boolean>;
    category?: pulumi.Input<string>;
    collectorId?: pulumi.Input<number>;
    contentType?: pulumi.Input<string>;
    cutoffRelativeTime?: pulumi.Input<string>;
    cutoffTimestamp?: pulumi.Input<number>;
    defaultDateFormats?: pulumi.Input<pulumi.Input<inputs.LocalFileSourceDefaultDateFormat>[]>;
    denyLists?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    encoding?: pulumi.Input<string>;
    fields?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    filters?: pulumi.Input<pulumi.Input<inputs.LocalFileSourceFilter>[]>;
    forceTimezone?: pulumi.Input<boolean>;
    hostName?: pulumi.Input<string>;
    manualPrefixRegexp?: pulumi.Input<string>;
    multilineProcessingEnabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    pathExpression?: pulumi.Input<string>;
    timezone?: pulumi.Input<string>;
    useAutolineMatching?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a LocalFileSource resource.
 */
export interface LocalFileSourceArgs {
    automaticDateParsing?: pulumi.Input<boolean>;
    category?: pulumi.Input<string>;
    collectorId: pulumi.Input<number>;
    contentType?: pulumi.Input<string>;
    cutoffRelativeTime?: pulumi.Input<string>;
    cutoffTimestamp?: pulumi.Input<number>;
    defaultDateFormats?: pulumi.Input<pulumi.Input<inputs.LocalFileSourceDefaultDateFormat>[]>;
    denyLists?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    encoding?: pulumi.Input<string>;
    fields?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    filters?: pulumi.Input<pulumi.Input<inputs.LocalFileSourceFilter>[]>;
    forceTimezone?: pulumi.Input<boolean>;
    hostName?: pulumi.Input<string>;
    manualPrefixRegexp?: pulumi.Input<string>;
    multilineProcessingEnabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    pathExpression: pulumi.Input<string>;
    timezone?: pulumi.Input<string>;
    useAutolineMatching?: pulumi.Input<boolean>;
}
