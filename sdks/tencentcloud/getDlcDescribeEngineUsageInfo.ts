// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDlcDescribeEngineUsageInfo(args: GetDlcDescribeEngineUsageInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetDlcDescribeEngineUsageInfoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getDlcDescribeEngineUsageInfo:getDlcDescribeEngineUsageInfo", {
        "dataEngineId": args.dataEngineId,
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDlcDescribeEngineUsageInfo.
 */
export interface GetDlcDescribeEngineUsageInfoArgs {
    dataEngineId: string;
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getDlcDescribeEngineUsageInfo.
 */
export interface GetDlcDescribeEngineUsageInfoResult {
    readonly available: number;
    readonly dataEngineId: string;
    readonly id: string;
    readonly resultOutputFile?: string;
    readonly used: number;
}
export function getDlcDescribeEngineUsageInfoOutput(args: GetDlcDescribeEngineUsageInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDlcDescribeEngineUsageInfoResult> {
    return pulumi.output(args).apply((a: any) => getDlcDescribeEngineUsageInfo(a, opts))
}

/**
 * A collection of arguments for invoking getDlcDescribeEngineUsageInfo.
 */
export interface GetDlcDescribeEngineUsageInfoOutputArgs {
    dataEngineId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
