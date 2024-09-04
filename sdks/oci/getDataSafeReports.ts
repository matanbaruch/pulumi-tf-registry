// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataSafeReports(args: GetDataSafeReportsArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSafeReportsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataSafeReports:getDataSafeReports", {
        "accessLevel": args.accessLevel,
        "compartmentId": args.compartmentId,
        "compartmentIdInSubtree": args.compartmentIdInSubtree,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "reportDefinitionId": args.reportDefinitionId,
        "state": args.state,
        "timeGeneratedGreaterThanOrEqualTo": args.timeGeneratedGreaterThanOrEqualTo,
        "timeGeneratedLessThan": args.timeGeneratedLessThan,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataSafeReports.
 */
export interface GetDataSafeReportsArgs {
    accessLevel?: string;
    compartmentId: string;
    compartmentIdInSubtree?: boolean;
    displayName?: string;
    filters?: inputs.GetDataSafeReportsFilter[];
    id?: string;
    reportDefinitionId?: string;
    state?: string;
    timeGeneratedGreaterThanOrEqualTo?: string;
    timeGeneratedLessThan?: string;
    type?: string;
}

/**
 * A collection of values returned by getDataSafeReports.
 */
export interface GetDataSafeReportsResult {
    readonly accessLevel?: string;
    readonly compartmentId: string;
    readonly compartmentIdInSubtree?: boolean;
    readonly displayName?: string;
    readonly filters?: outputs.GetDataSafeReportsFilter[];
    readonly id: string;
    readonly reportCollections: outputs.GetDataSafeReportsReportCollection[];
    readonly reportDefinitionId?: string;
    readonly state?: string;
    readonly timeGeneratedGreaterThanOrEqualTo?: string;
    readonly timeGeneratedLessThan?: string;
    readonly type?: string;
}
export function getDataSafeReportsOutput(args: GetDataSafeReportsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataSafeReportsResult> {
    return pulumi.output(args).apply((a: any) => getDataSafeReports(a, opts))
}

/**
 * A collection of arguments for invoking getDataSafeReports.
 */
export interface GetDataSafeReportsOutputArgs {
    accessLevel?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    compartmentIdInSubtree?: pulumi.Input<boolean>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDataSafeReportsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    reportDefinitionId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeGeneratedGreaterThanOrEqualTo?: pulumi.Input<string>;
    timeGeneratedLessThan?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
