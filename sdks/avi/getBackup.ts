// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBackup(args?: GetBackupArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getBackup:getBackup", {
        "id": args.id,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBackup.
 */
export interface GetBackupArgs {
    id?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getBackup.
 */
export interface GetBackupResult {
    readonly backupConfigRef: string;
    readonly fileName: string;
    readonly id: string;
    readonly localFileUrl: string;
    readonly remoteFileUrl: string;
    readonly schedulerRef: string;
    readonly tenantRef: string;
    readonly timestamp: string;
    readonly uuid: string;
}
export function getBackupOutput(args?: GetBackupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupResult> {
    return pulumi.output(args).apply((a: any) => getBackup(a, opts))
}

/**
 * A collection of arguments for invoking getBackup.
 */
export interface GetBackupOutputArgs {
    id?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
