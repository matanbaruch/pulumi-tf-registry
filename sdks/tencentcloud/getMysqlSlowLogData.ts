// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMysqlSlowLogData(args: GetMysqlSlowLogDataArgs, opts?: pulumi.InvokeOptions): Promise<GetMysqlSlowLogDataResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getMysqlSlowLogData:getMysqlSlowLogData", {
        "dataBases": args.dataBases,
        "endTime": args.endTime,
        "id": args.id,
        "instType": args.instType,
        "instanceId": args.instanceId,
        "orderBy": args.orderBy,
        "resultOutputFile": args.resultOutputFile,
        "sortBy": args.sortBy,
        "startTime": args.startTime,
        "userHosts": args.userHosts,
        "userNames": args.userNames,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMysqlSlowLogData.
 */
export interface GetMysqlSlowLogDataArgs {
    dataBases?: string[];
    endTime: number;
    id?: string;
    instType?: string;
    instanceId: string;
    orderBy?: string;
    resultOutputFile?: string;
    sortBy?: string;
    startTime: number;
    userHosts?: string[];
    userNames?: string[];
}

/**
 * A collection of values returned by getMysqlSlowLogData.
 */
export interface GetMysqlSlowLogDataResult {
    readonly dataBases?: string[];
    readonly endTime: number;
    readonly id: string;
    readonly instType?: string;
    readonly instanceId: string;
    readonly items: outputs.GetMysqlSlowLogDataItem[];
    readonly orderBy?: string;
    readonly resultOutputFile?: string;
    readonly sortBy?: string;
    readonly startTime: number;
    readonly userHosts?: string[];
    readonly userNames?: string[];
}
export function getMysqlSlowLogDataOutput(args: GetMysqlSlowLogDataOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMysqlSlowLogDataResult> {
    return pulumi.output(args).apply((a: any) => getMysqlSlowLogData(a, opts))
}

/**
 * A collection of arguments for invoking getMysqlSlowLogData.
 */
export interface GetMysqlSlowLogDataOutputArgs {
    dataBases?: pulumi.Input<pulumi.Input<string>[]>;
    endTime: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    instType?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    orderBy?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    sortBy?: pulumi.Input<string>;
    startTime: pulumi.Input<number>;
    userHosts?: pulumi.Input<pulumi.Input<string>[]>;
    userNames?: pulumi.Input<pulumi.Input<string>[]>;
}
