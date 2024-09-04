// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ListChart extends pulumi.CustomResource {
    /**
     * Get an existing ListChart resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ListChartState, opts?: pulumi.CustomResourceOptions): ListChart {
        return new ListChart(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'signalfx:index/listChart:ListChart';

    /**
     * Returns true if the given object is an instance of ListChart.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ListChart {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ListChart.__pulumiType;
    }

    /**
     * (Metric by default) Must be "Scale", "Metric" or "Dimension"
     */
    public readonly colorBy!: pulumi.Output<string | undefined>;
    /**
     * Single color range including both the color to display for that range and the borders of the range
     */
    public readonly colorScales!: pulumi.Output<outputs.ListChartColorScale[] | undefined>;
    /**
     * Description of the chart (Optional)
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * (false by default) If false, samples a subset of the output MTS, which improves UI performance
     */
    public readonly disableSampling!: pulumi.Output<boolean | undefined>;
    /**
     * Seconds since epoch to end the visualization
     */
    public readonly endTime!: pulumi.Output<number | undefined>;
    /**
     * (false by default) If `true`, missing data points in the chart would be hidden
     */
    public readonly hideMissingValues!: pulumi.Output<boolean | undefined>;
    /**
     * List of properties that shouldn't be displayed in the chart legend (i.e. dimension names)
     *
     * @deprecated Deprecated
     */
    public readonly legendFieldsToHides!: pulumi.Output<string[] | undefined>;
    /**
     * List of property and enabled flags to control the order and presence of datatable labels in a chart.
     */
    public readonly legendOptionsFields!: pulumi.Output<outputs.ListChartLegendOptionsField[] | undefined>;
    /**
     * How long (in seconds) to wait for late datapoints
     */
    public readonly maxDelay!: pulumi.Output<number | undefined>;
    /**
     * Maximum number of digits to display when rounding values up or down
     */
    public readonly maxPrecision!: pulumi.Output<number | undefined>;
    /**
     * Name of the chart
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Signalflow program text for the chart. More info at "https://developers.signalfx.com/docs/signalflow-overview"
     */
    public readonly programText!: pulumi.Output<string>;
    /**
     * How often (in seconds) to refresh the values of the list
     */
    public readonly refreshInterval!: pulumi.Output<number | undefined>;
    /**
     * (false by default) What kind of secondary visualization to show (None, Radial, Linear, Sparkline)
     */
    public readonly secondaryVisualization!: pulumi.Output<string | undefined>;
    /**
     * The property to use when sorting the elements. Use 'value' if you want to sort by value. Must be prepended with + for
     * ascending or - for descending (e.g. -foo)
     */
    public readonly sortBy!: pulumi.Output<string | undefined>;
    /**
     * Seconds since epoch to start the visualization
     */
    public readonly startTime!: pulumi.Output<number | undefined>;
    /**
     * Seconds to display in the visualization. This is a rolling range from the current time. Example: 3600 = `-1h`
     */
    public readonly timeRange!: pulumi.Output<number | undefined>;
    /**
     * The property value is a string that denotes the geographic region associated with the time zone, (e.g. Australia/Sydney)
     */
    public readonly timezone!: pulumi.Output<string | undefined>;
    /**
     * (Metric by default) Must be "Metric" or "Binary"
     */
    public readonly unitPrefix!: pulumi.Output<string | undefined>;
    /**
     * URL of the chart
     */
    public /*out*/ readonly url!: pulumi.Output<string>;
    /**
     * Plot-level customization options, associated with a publish statement
     */
    public readonly vizOptions!: pulumi.Output<outputs.ListChartVizOption[] | undefined>;

    /**
     * Create a ListChart resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ListChartArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ListChartArgs | ListChartState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ListChartState | undefined;
            resourceInputs["colorBy"] = state ? state.colorBy : undefined;
            resourceInputs["colorScales"] = state ? state.colorScales : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disableSampling"] = state ? state.disableSampling : undefined;
            resourceInputs["endTime"] = state ? state.endTime : undefined;
            resourceInputs["hideMissingValues"] = state ? state.hideMissingValues : undefined;
            resourceInputs["legendFieldsToHides"] = state ? state.legendFieldsToHides : undefined;
            resourceInputs["legendOptionsFields"] = state ? state.legendOptionsFields : undefined;
            resourceInputs["maxDelay"] = state ? state.maxDelay : undefined;
            resourceInputs["maxPrecision"] = state ? state.maxPrecision : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["programText"] = state ? state.programText : undefined;
            resourceInputs["refreshInterval"] = state ? state.refreshInterval : undefined;
            resourceInputs["secondaryVisualization"] = state ? state.secondaryVisualization : undefined;
            resourceInputs["sortBy"] = state ? state.sortBy : undefined;
            resourceInputs["startTime"] = state ? state.startTime : undefined;
            resourceInputs["timeRange"] = state ? state.timeRange : undefined;
            resourceInputs["timezone"] = state ? state.timezone : undefined;
            resourceInputs["unitPrefix"] = state ? state.unitPrefix : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["vizOptions"] = state ? state.vizOptions : undefined;
        } else {
            const args = argsOrState as ListChartArgs | undefined;
            if ((!args || args.programText === undefined) && !opts.urn) {
                throw new Error("Missing required property 'programText'");
            }
            resourceInputs["colorBy"] = args ? args.colorBy : undefined;
            resourceInputs["colorScales"] = args ? args.colorScales : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disableSampling"] = args ? args.disableSampling : undefined;
            resourceInputs["endTime"] = args ? args.endTime : undefined;
            resourceInputs["hideMissingValues"] = args ? args.hideMissingValues : undefined;
            resourceInputs["legendFieldsToHides"] = args ? args.legendFieldsToHides : undefined;
            resourceInputs["legendOptionsFields"] = args ? args.legendOptionsFields : undefined;
            resourceInputs["maxDelay"] = args ? args.maxDelay : undefined;
            resourceInputs["maxPrecision"] = args ? args.maxPrecision : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["programText"] = args ? args.programText : undefined;
            resourceInputs["refreshInterval"] = args ? args.refreshInterval : undefined;
            resourceInputs["secondaryVisualization"] = args ? args.secondaryVisualization : undefined;
            resourceInputs["sortBy"] = args ? args.sortBy : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["timeRange"] = args ? args.timeRange : undefined;
            resourceInputs["timezone"] = args ? args.timezone : undefined;
            resourceInputs["unitPrefix"] = args ? args.unitPrefix : undefined;
            resourceInputs["vizOptions"] = args ? args.vizOptions : undefined;
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ListChart.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ListChart resources.
 */
export interface ListChartState {
    /**
     * (Metric by default) Must be "Scale", "Metric" or "Dimension"
     */
    colorBy?: pulumi.Input<string>;
    /**
     * Single color range including both the color to display for that range and the borders of the range
     */
    colorScales?: pulumi.Input<pulumi.Input<inputs.ListChartColorScale>[]>;
    /**
     * Description of the chart (Optional)
     */
    description?: pulumi.Input<string>;
    /**
     * (false by default) If false, samples a subset of the output MTS, which improves UI performance
     */
    disableSampling?: pulumi.Input<boolean>;
    /**
     * Seconds since epoch to end the visualization
     */
    endTime?: pulumi.Input<number>;
    /**
     * (false by default) If `true`, missing data points in the chart would be hidden
     */
    hideMissingValues?: pulumi.Input<boolean>;
    /**
     * List of properties that shouldn't be displayed in the chart legend (i.e. dimension names)
     *
     * @deprecated Deprecated
     */
    legendFieldsToHides?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of property and enabled flags to control the order and presence of datatable labels in a chart.
     */
    legendOptionsFields?: pulumi.Input<pulumi.Input<inputs.ListChartLegendOptionsField>[]>;
    /**
     * How long (in seconds) to wait for late datapoints
     */
    maxDelay?: pulumi.Input<number>;
    /**
     * Maximum number of digits to display when rounding values up or down
     */
    maxPrecision?: pulumi.Input<number>;
    /**
     * Name of the chart
     */
    name?: pulumi.Input<string>;
    /**
     * Signalflow program text for the chart. More info at "https://developers.signalfx.com/docs/signalflow-overview"
     */
    programText?: pulumi.Input<string>;
    /**
     * How often (in seconds) to refresh the values of the list
     */
    refreshInterval?: pulumi.Input<number>;
    /**
     * (false by default) What kind of secondary visualization to show (None, Radial, Linear, Sparkline)
     */
    secondaryVisualization?: pulumi.Input<string>;
    /**
     * The property to use when sorting the elements. Use 'value' if you want to sort by value. Must be prepended with + for
     * ascending or - for descending (e.g. -foo)
     */
    sortBy?: pulumi.Input<string>;
    /**
     * Seconds since epoch to start the visualization
     */
    startTime?: pulumi.Input<number>;
    /**
     * Seconds to display in the visualization. This is a rolling range from the current time. Example: 3600 = `-1h`
     */
    timeRange?: pulumi.Input<number>;
    /**
     * The property value is a string that denotes the geographic region associated with the time zone, (e.g. Australia/Sydney)
     */
    timezone?: pulumi.Input<string>;
    /**
     * (Metric by default) Must be "Metric" or "Binary"
     */
    unitPrefix?: pulumi.Input<string>;
    /**
     * URL of the chart
     */
    url?: pulumi.Input<string>;
    /**
     * Plot-level customization options, associated with a publish statement
     */
    vizOptions?: pulumi.Input<pulumi.Input<inputs.ListChartVizOption>[]>;
}

/**
 * The set of arguments for constructing a ListChart resource.
 */
export interface ListChartArgs {
    /**
     * (Metric by default) Must be "Scale", "Metric" or "Dimension"
     */
    colorBy?: pulumi.Input<string>;
    /**
     * Single color range including both the color to display for that range and the borders of the range
     */
    colorScales?: pulumi.Input<pulumi.Input<inputs.ListChartColorScale>[]>;
    /**
     * Description of the chart (Optional)
     */
    description?: pulumi.Input<string>;
    /**
     * (false by default) If false, samples a subset of the output MTS, which improves UI performance
     */
    disableSampling?: pulumi.Input<boolean>;
    /**
     * Seconds since epoch to end the visualization
     */
    endTime?: pulumi.Input<number>;
    /**
     * (false by default) If `true`, missing data points in the chart would be hidden
     */
    hideMissingValues?: pulumi.Input<boolean>;
    /**
     * List of properties that shouldn't be displayed in the chart legend (i.e. dimension names)
     *
     * @deprecated Deprecated
     */
    legendFieldsToHides?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of property and enabled flags to control the order and presence of datatable labels in a chart.
     */
    legendOptionsFields?: pulumi.Input<pulumi.Input<inputs.ListChartLegendOptionsField>[]>;
    /**
     * How long (in seconds) to wait for late datapoints
     */
    maxDelay?: pulumi.Input<number>;
    /**
     * Maximum number of digits to display when rounding values up or down
     */
    maxPrecision?: pulumi.Input<number>;
    /**
     * Name of the chart
     */
    name?: pulumi.Input<string>;
    /**
     * Signalflow program text for the chart. More info at "https://developers.signalfx.com/docs/signalflow-overview"
     */
    programText: pulumi.Input<string>;
    /**
     * How often (in seconds) to refresh the values of the list
     */
    refreshInterval?: pulumi.Input<number>;
    /**
     * (false by default) What kind of secondary visualization to show (None, Radial, Linear, Sparkline)
     */
    secondaryVisualization?: pulumi.Input<string>;
    /**
     * The property to use when sorting the elements. Use 'value' if you want to sort by value. Must be prepended with + for
     * ascending or - for descending (e.g. -foo)
     */
    sortBy?: pulumi.Input<string>;
    /**
     * Seconds since epoch to start the visualization
     */
    startTime?: pulumi.Input<number>;
    /**
     * Seconds to display in the visualization. This is a rolling range from the current time. Example: 3600 = `-1h`
     */
    timeRange?: pulumi.Input<number>;
    /**
     * The property value is a string that denotes the geographic region associated with the time zone, (e.g. Australia/Sydney)
     */
    timezone?: pulumi.Input<string>;
    /**
     * (Metric by default) Must be "Metric" or "Binary"
     */
    unitPrefix?: pulumi.Input<string>;
    /**
     * Plot-level customization options, associated with a publish statement
     */
    vizOptions?: pulumi.Input<pulumi.Input<inputs.ListChartVizOption>[]>;
}
