// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPrometheusMonitorAttributeMetrics(args: GetPrometheusMonitorAttributeMetricsArgs, opts?: pulumi.InvokeOptions): Promise<GetPrometheusMonitorAttributeMetricsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getPrometheusMonitorAttributeMetrics:getPrometheusMonitorAttributeMetrics", {
        "filter": args.filter,
        "httpServletExtensionName": args.httpServletExtensionName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPrometheusMonitorAttributeMetrics.
 */
export interface GetPrometheusMonitorAttributeMetricsArgs {
    filter?: string;
    httpServletExtensionName: string;
}

/**
 * A collection of values returned by getPrometheusMonitorAttributeMetrics.
 */
export interface GetPrometheusMonitorAttributeMetricsResult {
    readonly filter?: string;
    readonly httpServletExtensionName: string;
    readonly id: string;
    readonly ids: string[];
}
export function getPrometheusMonitorAttributeMetricsOutput(args: GetPrometheusMonitorAttributeMetricsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrometheusMonitorAttributeMetricsResult> {
    return pulumi.output(args).apply((a: any) => getPrometheusMonitorAttributeMetrics(a, opts))
}

/**
 * A collection of arguments for invoking getPrometheusMonitorAttributeMetrics.
 */
export interface GetPrometheusMonitorAttributeMetricsOutputArgs {
    filter?: pulumi.Input<string>;
    httpServletExtensionName: pulumi.Input<string>;
}
