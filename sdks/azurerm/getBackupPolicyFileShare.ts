// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBackupPolicyFileShare(args: GetBackupPolicyFileShareArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupPolicyFileShareResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getBackupPolicyFileShare:getBackupPolicyFileShare", {
        "id": args.id,
        "name": args.name,
        "recoveryVaultName": args.recoveryVaultName,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBackupPolicyFileShare.
 */
export interface GetBackupPolicyFileShareArgs {
    id?: string;
    name: string;
    recoveryVaultName: string;
    resourceGroupName: string;
    timeouts?: inputs.GetBackupPolicyFileShareTimeouts;
}

/**
 * A collection of values returned by getBackupPolicyFileShare.
 */
export interface GetBackupPolicyFileShareResult {
    readonly id: string;
    readonly name: string;
    readonly recoveryVaultName: string;
    readonly resourceGroupName: string;
    readonly timeouts?: outputs.GetBackupPolicyFileShareTimeouts;
}
export function getBackupPolicyFileShareOutput(args: GetBackupPolicyFileShareOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupPolicyFileShareResult> {
    return pulumi.output(args).apply((a: any) => getBackupPolicyFileShare(a, opts))
}

/**
 * A collection of arguments for invoking getBackupPolicyFileShare.
 */
export interface GetBackupPolicyFileShareOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    recoveryVaultName: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetBackupPolicyFileShareTimeoutsArgs>;
}
