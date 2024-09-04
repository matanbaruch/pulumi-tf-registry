// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBackupBackupVault(args: GetBackupBackupVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupBackupVaultResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getBackupBackupVault:getBackupBackupVault", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBackupBackupVault.
 */
export interface GetBackupBackupVaultArgs {
    id: string;
}

/**
 * A collection of values returned by getBackupBackupVault.
 */
export interface GetBackupBackupVaultResult {
    readonly accessPolicy: string;
    readonly backupVaultArn: string;
    readonly backupVaultName: string;
    readonly backupVaultTags: {[key: string]: string};
    readonly encryptionKeyArn: string;
    readonly id: string;
    readonly lockConfiguration: outputs.GetBackupBackupVaultLockConfiguration;
    readonly notifications: outputs.GetBackupBackupVaultNotifications;
}
export function getBackupBackupVaultOutput(args: GetBackupBackupVaultOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupBackupVaultResult> {
    return pulumi.output(args).apply((a: any) => getBackupBackupVault(a, opts))
}

/**
 * A collection of arguments for invoking getBackupBackupVault.
 */
export interface GetBackupBackupVaultOutputArgs {
    id: pulumi.Input<string>;
}
