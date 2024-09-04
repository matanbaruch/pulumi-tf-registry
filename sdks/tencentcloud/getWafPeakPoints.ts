// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWafPeakPoints(args: GetWafPeakPointsArgs, opts?: pulumi.InvokeOptions): Promise<GetWafPeakPointsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getWafPeakPoints:getWafPeakPoints", {
        "domain": args.domain,
        "edition": args.edition,
        "fromTime": args.fromTime,
        "id": args.id,
        "instanceId": args.instanceId,
        "metricName": args.metricName,
        "resultOutputFile": args.resultOutputFile,
        "toTime": args.toTime,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWafPeakPoints.
 */
export interface GetWafPeakPointsArgs {
    domain?: string;
    edition?: string;
    fromTime: string;
    id?: string;
    instanceId?: string;
    metricName?: string;
    resultOutputFile?: string;
    toTime: string;
}

/**
 * A collection of values returned by getWafPeakPoints.
 */
export interface GetWafPeakPointsResult {
    readonly domain?: string;
    readonly edition?: string;
    readonly fromTime: string;
    readonly id: string;
    readonly instanceId?: string;
    readonly metricName?: string;
    readonly points: outputs.GetWafPeakPointsPoint[];
    readonly resultOutputFile?: string;
    readonly toTime: string;
}
export function getWafPeakPointsOutput(args: GetWafPeakPointsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWafPeakPointsResult> {
    return pulumi.output(args).apply((a: any) => getWafPeakPoints(a, opts))
}

/**
 * A collection of arguments for invoking getWafPeakPoints.
 */
export interface GetWafPeakPointsOutputArgs {
    domain?: pulumi.Input<string>;
    edition?: pulumi.Input<string>;
    fromTime: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
    metricName?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    toTime: pulumi.Input<string>;
}
