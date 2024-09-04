// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSqlserverUploadIncrementalInfo(args: GetSqlserverUploadIncrementalInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlserverUploadIncrementalInfoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getSqlserverUploadIncrementalInfo:getSqlserverUploadIncrementalInfo", {
        "backupMigrationId": args.backupMigrationId,
        "id": args.id,
        "incrementalMigrationId": args.incrementalMigrationId,
        "instanceId": args.instanceId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSqlserverUploadIncrementalInfo.
 */
export interface GetSqlserverUploadIncrementalInfoArgs {
    backupMigrationId: string;
    id?: string;
    incrementalMigrationId: string;
    instanceId: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getSqlserverUploadIncrementalInfo.
 */
export interface GetSqlserverUploadIncrementalInfoResult {
    readonly backupMigrationId: string;
    readonly bucketName: string;
    readonly expiredTime: string;
    readonly id: string;
    readonly incrementalMigrationId: string;
    readonly instanceId: string;
    readonly path: string;
    readonly region: string;
    readonly resultOutputFile?: string;
    readonly startTime: string;
    readonly tmpSecretId: string;
    readonly tmpSecretKey: string;
    readonly xCosSecurityToken: string;
}
export function getSqlserverUploadIncrementalInfoOutput(args: GetSqlserverUploadIncrementalInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlserverUploadIncrementalInfoResult> {
    return pulumi.output(args).apply((a: any) => getSqlserverUploadIncrementalInfo(a, opts))
}

/**
 * A collection of arguments for invoking getSqlserverUploadIncrementalInfo.
 */
export interface GetSqlserverUploadIncrementalInfoOutputArgs {
    backupMigrationId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    incrementalMigrationId: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
