// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMariadbSlowLogs(args: GetMariadbSlowLogsArgs, opts?: pulumi.InvokeOptions): Promise<GetMariadbSlowLogsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getMariadbSlowLogs:getMariadbSlowLogs", {
        "db": args.db,
        "endTime": args.endTime,
        "id": args.id,
        "instanceId": args.instanceId,
        "orderBy": args.orderBy,
        "orderByType": args.orderByType,
        "resultOutputFile": args.resultOutputFile,
        "slave": args.slave,
        "startTime": args.startTime,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMariadbSlowLogs.
 */
export interface GetMariadbSlowLogsArgs {
    db?: string;
    endTime?: string;
    id?: string;
    instanceId: string;
    orderBy?: string;
    orderByType?: string;
    resultOutputFile?: string;
    slave?: number;
    startTime: string;
}

/**
 * A collection of values returned by getMariadbSlowLogs.
 */
export interface GetMariadbSlowLogsResult {
    readonly datas: outputs.GetMariadbSlowLogsData[];
    readonly db?: string;
    readonly endTime?: string;
    readonly id: string;
    readonly instanceId: string;
    readonly lockTimeSum: number;
    readonly orderBy?: string;
    readonly orderByType?: string;
    readonly queryCount: number;
    readonly queryTimeSum: number;
    readonly resultOutputFile?: string;
    readonly slave?: number;
    readonly startTime: string;
}
export function getMariadbSlowLogsOutput(args: GetMariadbSlowLogsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMariadbSlowLogsResult> {
    return pulumi.output(args).apply((a: any) => getMariadbSlowLogs(a, opts))
}

/**
 * A collection of arguments for invoking getMariadbSlowLogs.
 */
export interface GetMariadbSlowLogsOutputArgs {
    db?: pulumi.Input<string>;
    endTime?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    orderBy?: pulumi.Input<string>;
    orderByType?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    slave?: pulumi.Input<number>;
    startTime: pulumi.Input<string>;
}
