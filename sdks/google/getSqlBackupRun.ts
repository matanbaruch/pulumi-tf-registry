// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSqlBackupRun(args: GetSqlBackupRunArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlBackupRunResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getSqlBackupRun:getSqlBackupRun", {
        "backupId": args.backupId,
        "id": args.id,
        "instance": args.instance,
        "mostRecent": args.mostRecent,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSqlBackupRun.
 */
export interface GetSqlBackupRunArgs {
    backupId?: number;
    id?: string;
    instance: string;
    mostRecent?: boolean;
    project?: string;
}

/**
 * A collection of values returned by getSqlBackupRun.
 */
export interface GetSqlBackupRunResult {
    readonly backupId: number;
    readonly id: string;
    readonly instance: string;
    readonly location: string;
    readonly mostRecent?: boolean;
    readonly project: string;
    readonly startTime: string;
    readonly status: string;
}
export function getSqlBackupRunOutput(args: GetSqlBackupRunOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlBackupRunResult> {
    return pulumi.output(args).apply((a: any) => getSqlBackupRun(a, opts))
}

/**
 * A collection of arguments for invoking getSqlBackupRun.
 */
export interface GetSqlBackupRunOutputArgs {
    backupId?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    instance: pulumi.Input<string>;
    mostRecent?: pulumi.Input<boolean>;
    project?: pulumi.Input<string>;
}
