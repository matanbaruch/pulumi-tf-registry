// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAntiddosOverviewDdosTrend(args: GetAntiddosOverviewDdosTrendArgs, opts?: pulumi.InvokeOptions): Promise<GetAntiddosOverviewDdosTrendResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getAntiddosOverviewDdosTrend:getAntiddosOverviewDdosTrend", {
        "business": args.business,
        "endTime": args.endTime,
        "id": args.id,
        "ipLists": args.ipLists,
        "metricName": args.metricName,
        "period": args.period,
        "resultOutputFile": args.resultOutputFile,
        "startTime": args.startTime,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAntiddosOverviewDdosTrend.
 */
export interface GetAntiddosOverviewDdosTrendArgs {
    business?: string;
    endTime: string;
    id?: string;
    ipLists?: string[];
    metricName: string;
    period: number;
    resultOutputFile?: string;
    startTime: string;
}

/**
 * A collection of values returned by getAntiddosOverviewDdosTrend.
 */
export interface GetAntiddosOverviewDdosTrendResult {
    readonly business?: string;
    readonly datas: number[];
    readonly endTime: string;
    readonly id: string;
    readonly ipLists?: string[];
    readonly metricName: string;
    readonly period: number;
    readonly resultOutputFile?: string;
    readonly startTime: string;
}
export function getAntiddosOverviewDdosTrendOutput(args: GetAntiddosOverviewDdosTrendOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAntiddosOverviewDdosTrendResult> {
    return pulumi.output(args).apply((a: any) => getAntiddosOverviewDdosTrend(a, opts))
}

/**
 * A collection of arguments for invoking getAntiddosOverviewDdosTrend.
 */
export interface GetAntiddosOverviewDdosTrendOutputArgs {
    business?: pulumi.Input<string>;
    endTime: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ipLists?: pulumi.Input<pulumi.Input<string>[]>;
    metricName: pulumi.Input<string>;
    period: pulumi.Input<number>;
    resultOutputFile?: pulumi.Input<string>;
    startTime: pulumi.Input<string>;
}
