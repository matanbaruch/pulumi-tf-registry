// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMysqlErrorLog(args: GetMysqlErrorLogArgs, opts?: pulumi.InvokeOptions): Promise<GetMysqlErrorLogResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getMysqlErrorLog:getMysqlErrorLog", {
        "endTime": args.endTime,
        "id": args.id,
        "instType": args.instType,
        "instanceId": args.instanceId,
        "keyWords": args.keyWords,
        "resultOutputFile": args.resultOutputFile,
        "startTime": args.startTime,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMysqlErrorLog.
 */
export interface GetMysqlErrorLogArgs {
    endTime: number;
    id?: string;
    instType?: string;
    instanceId: string;
    keyWords?: string[];
    resultOutputFile?: string;
    startTime: number;
}

/**
 * A collection of values returned by getMysqlErrorLog.
 */
export interface GetMysqlErrorLogResult {
    readonly endTime: number;
    readonly id: string;
    readonly instType?: string;
    readonly instanceId: string;
    readonly items: outputs.GetMysqlErrorLogItem[];
    readonly keyWords?: string[];
    readonly resultOutputFile?: string;
    readonly startTime: number;
}
export function getMysqlErrorLogOutput(args: GetMysqlErrorLogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMysqlErrorLogResult> {
    return pulumi.output(args).apply((a: any) => getMysqlErrorLog(a, opts))
}

/**
 * A collection of arguments for invoking getMysqlErrorLog.
 */
export interface GetMysqlErrorLogOutputArgs {
    endTime: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    instType?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    keyWords?: pulumi.Input<pulumi.Input<string>[]>;
    resultOutputFile?: pulumi.Input<string>;
    startTime: pulumi.Input<number>;
}
