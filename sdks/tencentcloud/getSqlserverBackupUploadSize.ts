// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSqlserverBackupUploadSize(args: GetSqlserverBackupUploadSizeArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlserverBackupUploadSizeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getSqlserverBackupUploadSize:getSqlserverBackupUploadSize", {
        "backupMigrationId": args.backupMigrationId,
        "id": args.id,
        "incrementalMigrationId": args.incrementalMigrationId,
        "instanceId": args.instanceId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSqlserverBackupUploadSize.
 */
export interface GetSqlserverBackupUploadSizeArgs {
    backupMigrationId: string;
    id?: string;
    incrementalMigrationId?: string;
    instanceId: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getSqlserverBackupUploadSize.
 */
export interface GetSqlserverBackupUploadSizeResult {
    readonly backupMigrationId: string;
    readonly cosUploadBackupFileSets: outputs.GetSqlserverBackupUploadSizeCosUploadBackupFileSet[];
    readonly id: string;
    readonly incrementalMigrationId?: string;
    readonly instanceId: string;
    readonly resultOutputFile?: string;
}
export function getSqlserverBackupUploadSizeOutput(args: GetSqlserverBackupUploadSizeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlserverBackupUploadSizeResult> {
    return pulumi.output(args).apply((a: any) => getSqlserverBackupUploadSize(a, opts))
}

/**
 * A collection of arguments for invoking getSqlserverBackupUploadSize.
 */
export interface GetSqlserverBackupUploadSizeOutputArgs {
    backupMigrationId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    incrementalMigrationId?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
