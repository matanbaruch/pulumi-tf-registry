// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataSafeReportDefinitions(args: GetDataSafeReportDefinitionsArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSafeReportDefinitionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataSafeReportDefinitions:getDataSafeReportDefinitions", {
        "accessLevel": args.accessLevel,
        "category": args.category,
        "compartmentId": args.compartmentId,
        "compartmentIdInSubtree": args.compartmentIdInSubtree,
        "dataSource": args.dataSource,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "isSeeded": args.isSeeded,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataSafeReportDefinitions.
 */
export interface GetDataSafeReportDefinitionsArgs {
    accessLevel?: string;
    category?: string;
    compartmentId: string;
    compartmentIdInSubtree?: boolean;
    dataSource?: string;
    displayName?: string;
    filters?: inputs.GetDataSafeReportDefinitionsFilter[];
    id?: string;
    isSeeded?: boolean;
    state?: string;
}

/**
 * A collection of values returned by getDataSafeReportDefinitions.
 */
export interface GetDataSafeReportDefinitionsResult {
    readonly accessLevel?: string;
    readonly category?: string;
    readonly compartmentId: string;
    readonly compartmentIdInSubtree?: boolean;
    readonly dataSource?: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetDataSafeReportDefinitionsFilter[];
    readonly id: string;
    readonly isSeeded?: boolean;
    readonly reportDefinitionCollections: outputs.GetDataSafeReportDefinitionsReportDefinitionCollection[];
    readonly state?: string;
}
export function getDataSafeReportDefinitionsOutput(args: GetDataSafeReportDefinitionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataSafeReportDefinitionsResult> {
    return pulumi.output(args).apply((a: any) => getDataSafeReportDefinitions(a, opts))
}

/**
 * A collection of arguments for invoking getDataSafeReportDefinitions.
 */
export interface GetDataSafeReportDefinitionsOutputArgs {
    accessLevel?: pulumi.Input<string>;
    category?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    compartmentIdInSubtree?: pulumi.Input<boolean>;
    dataSource?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDataSafeReportDefinitionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    isSeeded?: pulumi.Input<boolean>;
    state?: pulumi.Input<string>;
}
