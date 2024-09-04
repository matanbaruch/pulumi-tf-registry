// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPanelAnnotationsList(args?: GetPanelAnnotationsListArgs, opts?: pulumi.InvokeOptions): Promise<GetPanelAnnotationsListResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("schemas:index/getPanelAnnotationsList:getPanelAnnotationsList", {
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
 * A collection of arguments for invoking getPanelAnnotationsList.
 */
export interface GetPanelAnnotationsListArgs {
    datasource?: inputs.GetPanelAnnotationsListDatasource;
    description?: string;
    fieldConfig?: inputs.GetPanelAnnotationsListFieldConfig;
    gridPos?: inputs.GetPanelAnnotationsListGridPos;
    interval?: string;
    libraryPanel?: inputs.GetPanelAnnotationsListLibraryPanel;
    links?: inputs.GetPanelAnnotationsListLink[];
    maxDataPoints?: number;
    options?: inputs.GetPanelAnnotationsListOptions;
    pluginVersion?: string;
    repeat?: string;
    repeatDirection?: string;
    repeatPanelId?: number;
    tags?: string[];
    targets?: string[];
    timeFrom?: string;
    timeShift?: string;
    title?: string;
    transformations?: inputs.GetPanelAnnotationsListTransformation[];
    transparent?: boolean;
    type?: string;
}

/**
 * A collection of values returned by getPanelAnnotationsList.
 */
export interface GetPanelAnnotationsListResult {
    readonly datasource: outputs.GetPanelAnnotationsListDatasource;
    readonly description?: string;
    readonly fieldConfig: outputs.GetPanelAnnotationsListFieldConfig;
    readonly gridPos: outputs.GetPanelAnnotationsListGridPos;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly interval?: string;
    readonly libraryPanel: outputs.GetPanelAnnotationsListLibraryPanel;
    readonly links?: outputs.GetPanelAnnotationsListLink[];
    readonly maxDataPoints?: number;
    readonly options: outputs.GetPanelAnnotationsListOptions;
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
    readonly transformations?: outputs.GetPanelAnnotationsListTransformation[];
    readonly transparent: boolean;
    readonly type: string;
}
export function getPanelAnnotationsListOutput(args?: GetPanelAnnotationsListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPanelAnnotationsListResult> {
    return pulumi.output(args).apply((a: any) => getPanelAnnotationsList(a, opts))
}

/**
 * A collection of arguments for invoking getPanelAnnotationsList.
 */
export interface GetPanelAnnotationsListOutputArgs {
    datasource?: pulumi.Input<inputs.GetPanelAnnotationsListDatasourceArgs>;
    description?: pulumi.Input<string>;
    fieldConfig?: pulumi.Input<inputs.GetPanelAnnotationsListFieldConfigArgs>;
    gridPos?: pulumi.Input<inputs.GetPanelAnnotationsListGridPosArgs>;
    interval?: pulumi.Input<string>;
    libraryPanel?: pulumi.Input<inputs.GetPanelAnnotationsListLibraryPanelArgs>;
    links?: pulumi.Input<pulumi.Input<inputs.GetPanelAnnotationsListLinkArgs>[]>;
    maxDataPoints?: pulumi.Input<number>;
    options?: pulumi.Input<inputs.GetPanelAnnotationsListOptionsArgs>;
    pluginVersion?: pulumi.Input<string>;
    repeat?: pulumi.Input<string>;
    repeatDirection?: pulumi.Input<string>;
    repeatPanelId?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    targets?: pulumi.Input<pulumi.Input<string>[]>;
    timeFrom?: pulumi.Input<string>;
    timeShift?: pulumi.Input<string>;
    title?: pulumi.Input<string>;
    transformations?: pulumi.Input<pulumi.Input<inputs.GetPanelAnnotationsListTransformationArgs>[]>;
    transparent?: pulumi.Input<boolean>;
    type?: pulumi.Input<string>;
}
