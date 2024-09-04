// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPrometheusMonitorAttributeMetric(args: GetPrometheusMonitorAttributeMetricArgs, opts?: pulumi.InvokeOptions): Promise<GetPrometheusMonitorAttributeMetricResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getPrometheusMonitorAttributeMetric:getPrometheusMonitorAttributeMetric", {
        "httpServletExtensionName": args.httpServletExtensionName,
        "metricName": args.metricName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPrometheusMonitorAttributeMetric.
 */
export interface GetPrometheusMonitorAttributeMetricArgs {
    httpServletExtensionName: string;
    metricName: string;
}

/**
 * A collection of values returned by getPrometheusMonitorAttributeMetric.
 */
export interface GetPrometheusMonitorAttributeMetricResult {
    readonly filter: string;
    readonly httpServletExtensionName: string;
    readonly id: string;
    readonly labelNameValuePairs: string[];
    readonly metricDescription: string;
    readonly metricName: string;
    readonly metricType: string;
    readonly monitorAttributeName: string;
    readonly monitorObjectClassName: string;
    readonly type: string;
}
export function getPrometheusMonitorAttributeMetricOutput(args: GetPrometheusMonitorAttributeMetricOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrometheusMonitorAttributeMetricResult> {
    return pulumi.output(args).apply((a: any) => getPrometheusMonitorAttributeMetric(a, opts))
}

/**
 * A collection of arguments for invoking getPrometheusMonitorAttributeMetric.
 */
export interface GetPrometheusMonitorAttributeMetricOutputArgs {
    httpServletExtensionName: pulumi.Input<string>;
    metricName: pulumi.Input<string>;
}
