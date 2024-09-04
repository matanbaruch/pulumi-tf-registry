// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBackupList(args: GetBackupListArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gridscale:index/getBackupList:getBackupList", {
        "id": args.id,
        "storageUuid": args.storageUuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBackupList.
 */
export interface GetBackupListArgs {
    id?: string;
    storageUuid: string;
}

/**
 * A collection of values returned by getBackupList.
 */
export interface GetBackupListResult {
    readonly id: string;
    readonly storageBackups: outputs.GetBackupListStorageBackup[];
    readonly storageUuid: string;
}
export function getBackupListOutput(args: GetBackupListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupListResult> {
    return pulumi.output(args).apply((a: any) => getBackupList(a, opts))
}

/**
 * A collection of arguments for invoking getBackupList.
 */
export interface GetBackupListOutputArgs {
    id?: pulumi.Input<string>;
    storageUuid: pulumi.Input<string>;
}
