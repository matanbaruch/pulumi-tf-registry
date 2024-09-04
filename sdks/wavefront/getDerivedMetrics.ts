// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDerivedMetrics(args?: GetDerivedMetricsArgs, opts?: pulumi.InvokeOptions): Promise<GetDerivedMetricsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("wavefront:index/getDerivedMetrics:getDerivedMetrics", {
        "id": args.id,
        "limit": args.limit,
        "offset": args.offset,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDerivedMetrics.
 */
export interface GetDerivedMetricsArgs {
    id?: string;
    limit?: number;
    offset?: number;
}

/**
 * A collection of values returned by getDerivedMetrics.
 */
export interface GetDerivedMetricsResult {
    readonly derivedMetrics: outputs.GetDerivedMetricsDerivedMetric[];
    readonly id: string;
    readonly limit?: number;
    readonly offset?: number;
}
export function getDerivedMetricsOutput(args?: GetDerivedMetricsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDerivedMetricsResult> {
    return pulumi.output(args).apply((a: any) => getDerivedMetrics(a, opts))
}

/**
 * A collection of arguments for invoking getDerivedMetrics.
 */
export interface GetDerivedMetricsOutputArgs {
    id?: pulumi.Input<string>;
    limit?: pulumi.Input<number>;
    offset?: pulumi.Input<number>;
}
