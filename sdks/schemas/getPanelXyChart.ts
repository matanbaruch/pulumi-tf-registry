// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPanelXyChart(args?: GetPanelXyChartArgs, opts?: pulumi.InvokeOptions): Promise<GetPanelXyChartResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("schemas:index/getPanelXyChart:getPanelXyChart", {
        "datasource": args.datasource,
        "description": args.description,
        "fieldConfig": args.fieldConfig,
        "gridPos": args.gridPos,
        "interval": args.interval,
        "libraryPanel": args.libraryPanel,
        "links": args.links,
        "maxDataPoints": args.maxDataPoints,
        "options": args.options,
        "pluginVersion": args.pluginVersion,
        "repeat": args.repeat,
        "repeatDirection": args.repeatDirection,
        "repeatPanelId": args.repeatPanelId,
        "tags": args.tags,
        "targets": args.targets,
        "timeFrom": args.timeFrom,
        "timeShift": args.timeShift,
        "title": args.title,
        "transformations": args.transformations,
        "transparent": args.transparent,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPanelXyChart.
 */
export interface GetPanelXyChartArgs {
    datasource?: inputs.GetPanelXyChartDatasource;
    description?: string;
    fieldConfig?: inputs.GetPanelXyChartFieldConfig;
    gridPos?: inputs.GetPanelXyChartGridPos;
    interval?: string;
    libraryPanel?: inputs.GetPanelXyChartLibraryPanel;
    links?: inputs.GetPanelXyChartLink[];
    maxDataPoints?: number;
    options?: inputs.GetPanelXyChartOptions;
    pluginVersion?: string;
    repeat?: string;
    repeatDirection?: string;
    repeatPanelId?: number;
    tags?: string[];
    targets?: string[];
    timeFrom?: string;
    timeShift?: string;
    title?: string;
    transformations?: inputs.GetPanelXyChartTransformation[];
    transparent?: boolean;
    type?: string;
}

/**
 * A collection of values returned by getPanelXyChart.
 */
export interface GetPanelXyChartResult {
    readonly datasource: outputs.GetPanelXyChartDatasource;
    readonly description?: string;
    readonly fieldConfig: outputs.GetPanelXyChartFieldConfig;
    readonly gridPos: outputs.GetPanelXyChartGridPos;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly interval?: string;
    readonly libraryPanel: outputs.GetPanelXyChartLibraryPanel;
    readonly links?: outputs.GetPanelXyChartLink[];
    readonly maxDataPoints?: number;
    readonly options: outputs.GetPanelXyChartOptions;
    readonly pluginVersion?: string;
    readonly renderedJson: string;
    readonly repeat?: string;
    readonly repeatDirection: string;
    readonly repeatPanelId?: number;
    readonly tags?: string[];
    readonly targets?: string[];
    readonly timeFrom?: string;
    readonly timeShift?: string;
    readonly title?: string;
    readonly transformations?: outputs.GetPanelXyChartTransformation[];
    readonly transparent: boolean;
    readonly type: string;
}
export function getPanelXyChartOutput(args?: GetPanelXyChartOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPanelXyChartResult> {
    return pulumi.output(args).apply((a: any) => getPanelXyChart(a, opts))
}

/**
 * A collection of arguments for invoking getPanelXyChart.
 */
export interface GetPanelXyChartOutputArgs {
    datasource?: pulumi.Input<inputs.GetPanelXyChartDatasourceArgs>;
    description?: pulumi.Input<string>;
    fieldConfig?: pulumi.Input<inputs.GetPanelXyChartFieldConfigArgs>;
    gridPos?: pulumi.Input<inputs.GetPanelXyChartGridPosArgs>;
    interval?: pulumi.Input<string>;
    libraryPanel?: pulumi.Input<inputs.GetPanelXyChartLibraryPanelArgs>;
    links?: pulumi.Input<pulumi.Input<inputs.GetPanelXyChartLinkArgs>[]>;
    maxDataPoints?: pulumi.Input<number>;
    options?: pulumi.Input<inputs.GetPanelXyChartOptionsArgs>;
    pluginVersion?: pulumi.Input<string>;
    repeat?: pulumi.Input<string>;
    repeatDirection?: pulumi.Input<string>;
    repeatPanelId?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    targets?: pulumi.Input<pulumi.Input<string>[]>;
    timeFrom?: pulumi.Input<string>;
    timeShift?: pulumi.Input<string>;
    title?: pulumi.Input<string>;
    transformations?: pulumi.Input<pulumi.Input<inputs.GetPanelXyChartTransformationArgs>[]>;
    transparent?: pulumi.Input<boolean>;
    type?: pulumi.Input<string>;
}
