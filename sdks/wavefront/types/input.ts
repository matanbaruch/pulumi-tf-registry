// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface AlertAlertTriageDashboard {
    /**
     * Dashboard ID
     */
    dashboardId: pulumi.Input<string>;
    /**
     * Dashboard Description
     */
    description: pulumi.Input<string>;
    parameters?: pulumi.Input<inputs.AlertAlertTriageDashboardParameters>;
}

export interface AlertAlertTriageDashboardParameters {
    constants?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface AlertTargetRoute {
    filter?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    method: pulumi.Input<string>;
    target: pulumi.Input<string>;
}

export interface CloudIntegrationNewrelicMetricFilter {
    appName: pulumi.Input<string>;
    metricFilterRegex: pulumi.Input<string>;
}

export interface DashboardParameterDetail {
    defaultValue: pulumi.Input<string>;
    dynamicFieldType?: pulumi.Input<string>;
    hideFromView: pulumi.Input<boolean>;
    label: pulumi.Input<string>;
    name: pulumi.Input<string>;
    parameterType: pulumi.Input<string>;
    queryValue?: pulumi.Input<string>;
    tagKey?: pulumi.Input<string>;
    /**
     * Map of [string]string. At least one of the keys must match the value of default_value.
     */
    valuesToReadableStrings: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface DashboardSection {
    /**
     * Name of the Sections
     */
    name: pulumi.Input<string>;
    /**
     * Rows containing chart. Rows belong in Sections
     */
    rows: pulumi.Input<pulumi.Input<inputs.DashboardSectionRow>[]>;
}

export interface DashboardSectionRow {
    /**
     * A collection of chart
     */
    charts: pulumi.Input<pulumi.Input<inputs.DashboardSectionRowChart>[]>;
}

export interface DashboardSectionRowChart {
    /**
     * Base of logarithmic scale, default is 0 for linear scale
     */
    base?: pulumi.Input<number>;
    chartAttribute?: pulumi.Input<string>;
    /**
     * Chart settings. Defaults to line charts
     */
    chartSetting: pulumi.Input<inputs.DashboardSectionRowChartChartSetting>;
    /**
     * Description of the chart
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the Chart
     */
    name: pulumi.Input<string>;
    /**
     * Show events related to the sources included in queries
     */
    noDefaultEvents?: pulumi.Input<boolean>;
    /**
     * A collection of Sources for a Chart
     */
    sources: pulumi.Input<pulumi.Input<inputs.DashboardSectionRowChartSource>[]>;
    /**
     * Summarization strategy for the chart. MEAN is default = ['MEAN', 'MEDIAN', 'MIN', 'MAX', 'SUM', 'COUNT', 'LAST', 'FIRST']
     */
    summarization: pulumi.Input<string>;
    /**
     * Units of measurements for the chart
     */
    units: pulumi.Input<string>;
}

export interface DashboardSectionRowChartChartSetting {
    /**
     * deprecated
     */
    autoColumnTags?: pulumi.Input<boolean>;
    /**
     * deprecated
     */
    columnTags?: pulumi.Input<string>;
    /**
     * For the tabular view, a list of point tags to display when using the custom tag display mode
     */
    customTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Threshold (in seconds) for time delta between consecutive points in a series above which a dotted line will replace a solid line in line plots. Default: 60s
     */
    expectedDataSpacing?: pulumi.Input<number>;
    /**
     * For a chart with a fixed legend, a list of statistics to display in the legend
     */
    fixedLegendDisplayStats?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to enable a fixed tabular legend adjacent to the chart
     */
    fixedLegendEnabled?: pulumi.Input<boolean>;
    /**
     * Statistic to use for determining whether a series is displayed on the fixed legend = ['CURRENT', 'MEAN', 'MEDIAN', 'SUM', 'MIN', 'MAX', 'COUNT']
     */
    fixedLegendFilterField?: pulumi.Input<string>;
    /**
     * Number of series to include in the fixed legend
     */
    fixedLegendFilterLimit?: pulumi.Input<number>;
    /**
     * Whether to display Top- or Bottom-ranked series in the fixed legend = ['TOP', 'BOTTOM']
     */
    fixedLegendFilterSort?: pulumi.Input<string>;
    /**
     * deprecated
     */
    fixedLegendHideLabel?: pulumi.Input<boolean>;
    /**
     * Where the fixed legend should be displayed with respect to the chart = ['RIGHT', 'TOP', 'LEFT', 'BOTTOM']
     */
    fixedLegendPosition?: pulumi.Input<string>;
    /**
     * If true, the legend uses non-summarized stats instead of summarized
     */
    fixedLegendUseRawStats?: pulumi.Input<boolean>;
    /**
     * For the tabular view, whether to group multi metrics into a single row by a common source. If false, each metric for each source is displayed in its own row. If true, multiple metrics for the same host will be displayed as different columns in the same row
     */
    groupBySource?: pulumi.Input<boolean>;
    /**
     * Whether to disable the display of the floating legend (but reenable it when the ctrl-key is pressed)
     */
    invertDynamicLegendHoverControl?: pulumi.Input<boolean>;
    /**
     * Plot interpolation type. linear is default = ['linear', 'step-before', 'step-after', 'basis', 'cardinal', 'monotone']
     */
    lineType?: pulumi.Input<string>;
    /**
     * Max value of Y-axis. Set to null or leave blank for auto
     */
    max?: pulumi.Input<number>;
    /**
     * Min value of Y-axis. Set to null or leave blank for auto
     */
    min?: pulumi.Input<number>;
    /**
     * For the tabular view, how many point tags to display
     */
    numTags?: pulumi.Input<number>;
    /**
     * The Markdown content for a Markdown display, in plain text. Use this field instead of markdownContent
     */
    plainMarkdownContent?: pulumi.Input<string>;
    /**
     * For the tabular view, whether to display sources. Default: true
     */
    showHosts?: pulumi.Input<boolean>;
    /**
     * For the tabular view, whether to display labels. Default: true
     */
    showLabels?: pulumi.Input<boolean>;
    /**
     * For the tabular view, whether to display raw values. Default: false
     */
    showRawValues?: pulumi.Input<boolean>;
    /**
     * For the tabular view, whether to display display values in descending order. Default: false
     */
    sortValuesDescending?: pulumi.Input<boolean>;
    /**
     * For the single stat view, the decimal precision of the displayed number
     */
    sparklineDecimalPrecision?: pulumi.Input<number>;
    /**
     * For the single stat view, the color of the displayed text (when not dynamically determined). Values should be in rgba(, , ,  format
     */
    sparklineDisplayColor?: pulumi.Input<string>;
    /**
     * For the single stat view, the font size of the displayed text, in percent
     */
    sparklineDisplayFontSize?: pulumi.Input<string>;
    /**
     * For the single stat view, the horizontal position of the displayed text = ['MIDDLE', 'LEFT', 'RIGHT']
     */
    sparklineDisplayHorizontalPosition?: pulumi.Input<string>;
    /**
     * For the single stat view, a string to append to the displayed text
     */
    sparklineDisplayPostfix?: pulumi.Input<string>;
    /**
     * For the single stat view, a string to add before the displayed text
     */
    sparklineDisplayPrefix?: pulumi.Input<string>;
    /**
     * For the single stat view, whether to display the name of the query or the value of query = ['VALUE', 'LABEL']
     */
    sparklineDisplayValueType?: pulumi.Input<string>;
    /**
     * deprecated
     */
    sparklineDisplayVerticalPosition?: pulumi.Input<string>;
    /**
     * For the single stat view, the color of the background fill. Values should be in rgba(, , ,  format
     */
    sparklineFillColor?: pulumi.Input<string>;
    /**
     * For the single stat view, the color of the line. Values should be in rgba(, , ,  format
     */
    sparklineLineColor?: pulumi.Input<string>;
    /**
     * For the single stat view, a misleadingly named property. This determines whether the sparkline of the statistic is displayed in the chart BACKGROUND, BOTTOM, or NONE = ['BACKGROUND', 'BOTTOM', 'NONE']
     */
    sparklineSize?: pulumi.Input<string>;
    /**
     * For the single stat view, whether to apply dynamic color settings to the displayed TEXT or BACKGROUND = ['TEXT', 'BACKGROUND']
     */
    sparklineValueColorMapApplyTo?: pulumi.Input<string>;
    /**
     * For the single stat view, a list of colors that differing query values map to. Must contain one more element than sparklineValueColorMapValuesV2. Values should be in rgba(, , ,  format
     */
    sparklineValueColorMapColors?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * deprecated
     */
    sparklineValueColorMapValues?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * deprecated
     */
    sparklineValueColorMapValuesV2s?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * For the single stat view, a list of display text values that different query values map to. Must contain one more element than sparklineValueTextMapThresholds
     */
    sparklineValueTextMapTexts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * For the single stat view, a list of threshold boundaries for mapping different query values to display text. Must contain one less element than sparklineValueTextMapText
     */
    sparklineValueTextMapThresholds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Type of stacked chart (applicable only if chart type is stacked). zero (default) means stacked from y=0. expand means Normalized from 0 to 1. wiggle means Minimize weighted changes. silhouette means to Center the Stream = ['zero', 'expand', 'wiggle', 'silhouette']
     */
    stackType?: pulumi.Input<string>;
    /**
     * For the tabular view, which mode to use to determine which point tags to display = ['all', 'top', 'custom']
     */
    tagMode?: pulumi.Input<string>;
    /**
     * Fox x-y scatterplots, whether to color more recent points as darker than older points. Default: false
     */
    timeBasedColoring?: pulumi.Input<boolean>;
    /**
     * Chart Type. 'line' refers to the Line Plot, 'scatter' to the Point Plot, 'stacked-area' to the Stacked Area plot, 'table' to the Tabular View, 'scatterploy-xy' to Scatter Plot, 'markdown-widget' to the Markdown display, and 'sparkline' to the Single Stat view = ['line', 'scatterplot', 'stacked-area', 'table', 'scatterplot-xy', 'markdown-widget', 'sparkline']
     */
    type: pulumi.Input<string>;
    /**
     * Width, in minutes, of the time window to use for last windowing
     */
    windowSize?: pulumi.Input<number>;
    /**
     * For the tabular view, whether to use the full time window for the query or the last X minutes = ['full', 'last']
     */
    windowing?: pulumi.Input<string>;
    /**
     * For x-y scatterplots, max value for X-axis. Set null for auto
     */
    xmax?: pulumi.Input<number>;
    /**
     * For x-y scatterplots, min value for X-axis. Set null for auto
     */
    xmin?: pulumi.Input<number>;
    /**
     * Default: false. Whether to scale numerical magnitude labels for left Y-axis by 1024 in the IEC/Binary manner (instead of by 1000 like SI) ,
     */
    y0ScaleSiBy1024?: pulumi.Input<boolean>;
    /**
     * Default: false. Whether to automatically adjust magnitude labels and units for the left Y-axis to favor smaller magnitudes and larger units
     */
    y0UnitAutoscaling?: pulumi.Input<boolean>;
    /**
     * Default: false. Whether to scale numerical magnitude labels for right Y-axis by 1024 in the IEC/Binary manner (instead of by 1000 like SI)
     */
    y1ScaleSiBy1024?: pulumi.Input<boolean>;
    /**
     * Default: false. Whether to automatically adjust magnitude labels and units for the right Y-axis to favor smaller magnitudes and larger units
     */
    y1UnitAutoscaling?: pulumi.Input<boolean>;
    /**
     * For plots with multiple Y-axes, units for right-side Y-axis
     */
    y1Units?: pulumi.Input<string>;
    /**
     * For plots with multiple Y-axes, max value for right-side Y-axis. Set null for auto
     */
    y1max?: pulumi.Input<number>;
    /**
     * For plots with multiple Y-axes, min value for right-side Y-axis. Set null for auto
     */
    y1min?: pulumi.Input<number>;
    /**
     * For x-y scatterplots, max value for Y-axis. Set null for auto
     */
    ymax?: pulumi.Input<number>;
    /**
     * For x-y scatterplots, min value for Y-axis. Set null for auto
     */
    ymin?: pulumi.Input<number>;
}

export interface DashboardSectionRowChartSource {
    /**
     * Whether to disabled the source from being displayed
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the Source
     */
    name: pulumi.Input<string>;
    /**
     * Query for the Source
     */
    query: pulumi.Input<string>;
    /**
     * Whether the query builder should be enabled
     */
    queryBuilderEnabled?: pulumi.Input<boolean>;
    scatterPlotSource?: pulumi.Input<string>;
    /**
     * Description of the source
     */
    sourceDescription?: pulumi.Input<string>;
}

export interface IngestionPolicyTag {
    key: pulumi.Input<string>;
    value: pulumi.Input<string>;
}

export interface MetricsPolicyPolicyRule {
    accessType: pulumi.Input<string>;
    accountIds?: pulumi.Input<pulumi.Input<string>[]>;
    description: pulumi.Input<string>;
    name: pulumi.Input<string>;
    prefixes: pulumi.Input<pulumi.Input<string>[]>;
    roleIds?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.MetricsPolicyPolicyRuleTag>[]>;
    tagsAnded: pulumi.Input<boolean>;
    userGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface MetricsPolicyPolicyRuleTag {
    key: pulumi.Input<string>;
    value: pulumi.Input<string>;
}
