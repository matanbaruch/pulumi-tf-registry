// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIotCustomMetric(args: GetIotCustomMetricArgs, opts?: pulumi.InvokeOptions): Promise<GetIotCustomMetricResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotCustomMetric:getIotCustomMetric", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIotCustomMetric.
 */
export interface GetIotCustomMetricArgs {
    id: string;
}

/**
 * A collection of values returned by getIotCustomMetric.
 */
export interface GetIotCustomMetricResult {
    readonly displayName: string;
    readonly id: string;
    readonly metricArn: string;
    readonly metricName: string;
    readonly metricType: string;
    readonly tags: outputs.GetIotCustomMetricTag[];
}
export function getIotCustomMetricOutput(args: GetIotCustomMetricOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotCustomMetricResult> {
    return pulumi.output(args).apply((a: any) => getIotCustomMetric(a, opts))
}

/**
 * A collection of arguments for invoking getIotCustomMetric.
 */
export interface GetIotCustomMetricOutputArgs {
    id: pulumi.Input<string>;
}
