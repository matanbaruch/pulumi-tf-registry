// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRedisInstanceNodeInfo(args: GetRedisInstanceNodeInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetRedisInstanceNodeInfoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getRedisInstanceNodeInfo:getRedisInstanceNodeInfo", {
        "id": args.id,
        "instanceId": args.instanceId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRedisInstanceNodeInfo.
 */
export interface GetRedisInstanceNodeInfoArgs {
    id?: string;
    instanceId: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getRedisInstanceNodeInfo.
 */
export interface GetRedisInstanceNodeInfoResult {
    readonly id: string;
    readonly instanceId: string;
    readonly proxies: outputs.GetRedisInstanceNodeInfoProxy[];
    readonly proxyCount: number;
    readonly redis: outputs.GetRedisInstanceNodeInfoRedi[];
    readonly redisCount: number;
    readonly resultOutputFile?: string;
}
export function getRedisInstanceNodeInfoOutput(args: GetRedisInstanceNodeInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRedisInstanceNodeInfoResult> {
    return pulumi.output(args).apply((a: any) => getRedisInstanceNodeInfo(a, opts))
}

/**
 * A collection of arguments for invoking getRedisInstanceNodeInfo.
 */
export interface GetRedisInstanceNodeInfoOutputArgs {
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
