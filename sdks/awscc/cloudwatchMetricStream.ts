// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudwatchMetricStream extends pulumi.CustomResource {
    /**
     * Get an existing CloudwatchMetricStream resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudwatchMetricStreamState, opts?: pulumi.CustomResourceOptions): CloudwatchMetricStream {
        return new CloudwatchMetricStream(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/cloudwatchMetricStream:CloudwatchMetricStream';

    /**
     * Returns true if the given object is an instance of CloudwatchMetricStream.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudwatchMetricStream {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudwatchMetricStream.__pulumiType;
    }

    /**
     * Amazon Resource Name of the metric stream.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The date of creation of the metric stream.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * Define which metrics will be not streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with
     * an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be
     * streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
     */
    public readonly excludeFilters!: pulumi.Output<outputs.CloudwatchMetricStreamExcludeFilter[]>;
    /**
     * The ARN of the Kinesis Firehose where to stream the data.
     */
    public readonly firehoseArn!: pulumi.Output<string>;
    /**
     * Define which metrics will be streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR
     * operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be
     * streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
     */
    public readonly includeFilters!: pulumi.Output<outputs.CloudwatchMetricStreamIncludeFilter[]>;
    /**
     * If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that
     * are linked to this monitoring account, in the metric stream. The default is false.
     */
    public readonly includeLinkedAccountsMetrics!: pulumi.Output<boolean>;
    /**
     * The date of the last update of the metric stream.
     */
    public /*out*/ readonly lastUpdateDate!: pulumi.Output<string>;
    /**
     * Name of the metric stream.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The output format of the data streamed to the Kinesis Firehose.
     */
    public readonly outputFormat!: pulumi.Output<string>;
    /**
     * The ARN of the role that provides access to the Kinesis Firehose.
     */
    public readonly roleArn!: pulumi.Output<string>;
    /**
     * Displays the state of the Metric Stream.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed.
     * You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have
     * up to 100 members.
     */
    public readonly statisticsConfigurations!: pulumi.Output<outputs.CloudwatchMetricStreamStatisticsConfiguration[]>;
    /**
     * A set of tags to assign to the delivery stream.
     */
    public readonly tags!: pulumi.Output<outputs.CloudwatchMetricStreamTag[]>;

    /**
     * Create a CloudwatchMetricStream resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CloudwatchMetricStreamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudwatchMetricStreamArgs | CloudwatchMetricStreamState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudwatchMetricStreamState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["creationDate"] = state ? state.creationDate : undefined;
            resourceInputs["excludeFilters"] = state ? state.excludeFilters : undefined;
            resourceInputs["firehoseArn"] = state ? state.firehoseArn : undefined;
            resourceInputs["includeFilters"] = state ? state.includeFilters : undefined;
            resourceInputs["includeLinkedAccountsMetrics"] = state ? state.includeLinkedAccountsMetrics : undefined;
            resourceInputs["lastUpdateDate"] = state ? state.lastUpdateDate : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outputFormat"] = state ? state.outputFormat : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["statisticsConfigurations"] = state ? state.statisticsConfigurations : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as CloudwatchMetricStreamArgs | undefined;
            resourceInputs["excludeFilters"] = args ? args.excludeFilters : undefined;
            resourceInputs["firehoseArn"] = args ? args.firehoseArn : undefined;
            resourceInputs["includeFilters"] = args ? args.includeFilters : undefined;
            resourceInputs["includeLinkedAccountsMetrics"] = args ? args.includeLinkedAccountsMetrics : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outputFormat"] = args ? args.outputFormat : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
            resourceInputs["statisticsConfigurations"] = args ? args.statisticsConfigurations : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["lastUpdateDate"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudwatchMetricStream.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudwatchMetricStream resources.
 */
export interface CloudwatchMetricStreamState {
    /**
     * Amazon Resource Name of the metric stream.
     */
    arn?: pulumi.Input<string>;
    /**
     * The date of creation of the metric stream.
     */
    creationDate?: pulumi.Input<string>;
    /**
     * Define which metrics will be not streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with
     * an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be
     * streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
     */
    excludeFilters?: pulumi.Input<pulumi.Input<inputs.CloudwatchMetricStreamExcludeFilter>[]>;
    /**
     * The ARN of the Kinesis Firehose where to stream the data.
     */
    firehoseArn?: pulumi.Input<string>;
    /**
     * Define which metrics will be streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR
     * operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be
     * streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
     */
    includeFilters?: pulumi.Input<pulumi.Input<inputs.CloudwatchMetricStreamIncludeFilter>[]>;
    /**
     * If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that
     * are linked to this monitoring account, in the metric stream. The default is false.
     */
    includeLinkedAccountsMetrics?: pulumi.Input<boolean>;
    /**
     * The date of the last update of the metric stream.
     */
    lastUpdateDate?: pulumi.Input<string>;
    /**
     * Name of the metric stream.
     */
    name?: pulumi.Input<string>;
    /**
     * The output format of the data streamed to the Kinesis Firehose.
     */
    outputFormat?: pulumi.Input<string>;
    /**
     * The ARN of the role that provides access to the Kinesis Firehose.
     */
    roleArn?: pulumi.Input<string>;
    /**
     * Displays the state of the Metric Stream.
     */
    state?: pulumi.Input<string>;
    /**
     * By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed.
     * You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have
     * up to 100 members.
     */
    statisticsConfigurations?: pulumi.Input<pulumi.Input<inputs.CloudwatchMetricStreamStatisticsConfiguration>[]>;
    /**
     * A set of tags to assign to the delivery stream.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.CloudwatchMetricStreamTag>[]>;
}

/**
 * The set of arguments for constructing a CloudwatchMetricStream resource.
 */
export interface CloudwatchMetricStreamArgs {
    /**
     * Define which metrics will be not streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with
     * an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be
     * streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
     */
    excludeFilters?: pulumi.Input<pulumi.Input<inputs.CloudwatchMetricStreamExcludeFilter>[]>;
    /**
     * The ARN of the Kinesis Firehose where to stream the data.
     */
    firehoseArn?: pulumi.Input<string>;
    /**
     * Define which metrics will be streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR
     * operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be
     * streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
     */
    includeFilters?: pulumi.Input<pulumi.Input<inputs.CloudwatchMetricStreamIncludeFilter>[]>;
    /**
     * If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that
     * are linked to this monitoring account, in the metric stream. The default is false.
     */
    includeLinkedAccountsMetrics?: pulumi.Input<boolean>;
    /**
     * Name of the metric stream.
     */
    name?: pulumi.Input<string>;
    /**
     * The output format of the data streamed to the Kinesis Firehose.
     */
    outputFormat?: pulumi.Input<string>;
    /**
     * The ARN of the role that provides access to the Kinesis Firehose.
     */
    roleArn?: pulumi.Input<string>;
    /**
     * By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed.
     * You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have
     * up to 100 members.
     */
    statisticsConfigurations?: pulumi.Input<pulumi.Input<inputs.CloudwatchMetricStreamStatisticsConfiguration>[]>;
    /**
     * A set of tags to assign to the delivery stream.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.CloudwatchMetricStreamTag>[]>;
}
