// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSqlserverDescHaLog(args: GetSqlserverDescHaLogArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlserverDescHaLogResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getSqlserverDescHaLog:getSqlserverDescHaLog", {
        "endTime": args.endTime,
        "id": args.id,
        "instanceId": args.instanceId,
        "resultOutputFile": args.resultOutputFile,
        "startTime": args.startTime,
        "switchType": args.switchType,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSqlserverDescHaLog.
 */
export interface GetSqlserverDescHaLogArgs {
    endTime: string;
    id?: string;
    instanceId: string;
    resultOutputFile?: string;
    startTime: string;
    switchType?: number;
}

/**
 * A collection of values returned by getSqlserverDescHaLog.
 */
export interface GetSqlserverDescHaLogResult {
    readonly endTime: string;
    readonly id: string;
    readonly instanceId: string;
    readonly resultOutputFile?: string;
    readonly startTime: string;
    readonly switchLogs: outputs.GetSqlserverDescHaLogSwitchLog[];
    readonly switchType?: number;
}
export function getSqlserverDescHaLogOutput(args: GetSqlserverDescHaLogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlserverDescHaLogResult> {
    return pulumi.output(args).apply((a: any) => getSqlserverDescHaLog(a, opts))
}

/**
 * A collection of arguments for invoking getSqlserverDescHaLog.
 */
export interface GetSqlserverDescHaLogOutputArgs {
    endTime: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    startTime: pulumi.Input<string>;
    switchType?: pulumi.Input<number>;
}
