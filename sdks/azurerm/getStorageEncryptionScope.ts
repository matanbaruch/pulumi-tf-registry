// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageEncryptionScope(args: GetStorageEncryptionScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageEncryptionScopeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getStorageEncryptionScope:getStorageEncryptionScope", {
        "id": args.id,
        "name": args.name,
        "storageAccountId": args.storageAccountId,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageEncryptionScope.
 */
export interface GetStorageEncryptionScopeArgs {
    id?: string;
    name: string;
    storageAccountId: string;
    timeouts?: inputs.GetStorageEncryptionScopeTimeouts;
}

/**
 * A collection of values returned by getStorageEncryptionScope.
 */
export interface GetStorageEncryptionScopeResult {
    readonly id: string;
    readonly keyVaultKeyId: string;
    readonly name: string;
    readonly source: string;
    readonly storageAccountId: string;
    readonly timeouts?: outputs.GetStorageEncryptionScopeTimeouts;
}
export function getStorageEncryptionScopeOutput(args: GetStorageEncryptionScopeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageEncryptionScopeResult> {
    return pulumi.output(args).apply((a: any) => getStorageEncryptionScope(a, opts))
}

/**
 * A collection of arguments for invoking getStorageEncryptionScope.
 */
export interface GetStorageEncryptionScopeOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    storageAccountId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetStorageEncryptionScopeTimeoutsArgs>;
}
