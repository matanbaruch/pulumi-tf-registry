// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKmsVault(args: GetKmsVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetKmsVaultResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getKmsVault:getKmsVault", {
        "vaultId": args.vaultId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKmsVault.
 */
export interface GetKmsVaultArgs {
    vaultId: string;
}

/**
 * A collection of values returned by getKmsVault.
 */
export interface GetKmsVaultResult {
    readonly compartmentId: string;
    readonly cryptoEndpoint: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly externalKeyManagerMetadataSummaries: outputs.GetKmsVaultExternalKeyManagerMetadataSummary[];
    readonly externalKeyManagerMetadatas: outputs.GetKmsVaultExternalKeyManagerMetadata[];
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly isPrimary: boolean;
    readonly isVaultReplicable: boolean;
    readonly managementEndpoint: string;
    readonly replicaDetails: outputs.GetKmsVaultReplicaDetail[];
    readonly restoreFromFiles: outputs.GetKmsVaultRestoreFromFile[];
    readonly restoreFromObjectStores: outputs.GetKmsVaultRestoreFromObjectStore[];
    readonly restoreTrigger: boolean;
    readonly restoredFromVaultId: string;
    readonly state: string;
    readonly timeCreated: string;
    readonly timeOfDeletion: string;
    readonly vaultId: string;
    readonly vaultType: string;
}
export function getKmsVaultOutput(args: GetKmsVaultOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKmsVaultResult> {
    return pulumi.output(args).apply((a: any) => getKmsVault(a, opts))
}

/**
 * A collection of arguments for invoking getKmsVault.
 */
export interface GetKmsVaultOutputArgs {
    vaultId: pulumi.Input<string>;
}
