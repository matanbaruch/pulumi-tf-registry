// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDlcDescribeDataEngineImageVersions(args: GetDlcDescribeDataEngineImageVersionsArgs, opts?: pulumi.InvokeOptions): Promise<GetDlcDescribeDataEngineImageVersionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getDlcDescribeDataEngineImageVersions:getDlcDescribeDataEngineImageVersions", {
        "engineType": args.engineType,
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDlcDescribeDataEngineImageVersions.
 */
export interface GetDlcDescribeDataEngineImageVersionsArgs {
    engineType: string;
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getDlcDescribeDataEngineImageVersions.
 */
export interface GetDlcDescribeDataEngineImageVersionsResult {
    readonly engineType: string;
    readonly id: string;
    readonly imageParentVersions: outputs.GetDlcDescribeDataEngineImageVersionsImageParentVersion[];
    readonly resultOutputFile?: string;
}
export function getDlcDescribeDataEngineImageVersionsOutput(args: GetDlcDescribeDataEngineImageVersionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDlcDescribeDataEngineImageVersionsResult> {
    return pulumi.output(args).apply((a: any) => getDlcDescribeDataEngineImageVersions(a, opts))
}

/**
 * A collection of arguments for invoking getDlcDescribeDataEngineImageVersions.
 */
export interface GetDlcDescribeDataEngineImageVersionsOutputArgs {
    engineType: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
