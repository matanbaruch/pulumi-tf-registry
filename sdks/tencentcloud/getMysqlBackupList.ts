// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMysqlBackupList(args: GetMysqlBackupListArgs, opts?: pulumi.InvokeOptions): Promise<GetMysqlBackupListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getMysqlBackupList:getMysqlBackupList", {
        "id": args.id,
        "maxNumber": args.maxNumber,
        "mysqlId": args.mysqlId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMysqlBackupList.
 */
export interface GetMysqlBackupListArgs {
    id?: string;
    maxNumber?: number;
    mysqlId: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getMysqlBackupList.
 */
export interface GetMysqlBackupListResult {
    readonly id: string;
    readonly lists: outputs.GetMysqlBackupListList[];
    readonly maxNumber?: number;
    readonly mysqlId: string;
    readonly resultOutputFile?: string;
}
export function getMysqlBackupListOutput(args: GetMysqlBackupListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMysqlBackupListResult> {
    return pulumi.output(args).apply((a: any) => getMysqlBackupList(a, opts))
}

/**
 * A collection of arguments for invoking getMysqlBackupList.
 */
export interface GetMysqlBackupListOutputArgs {
    id?: pulumi.Input<string>;
    maxNumber?: pulumi.Input<number>;
    mysqlId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
