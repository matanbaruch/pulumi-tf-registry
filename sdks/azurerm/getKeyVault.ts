// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKeyVault(args: GetKeyVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyVaultResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getKeyVault:getKeyVault", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKeyVault.
 */
export interface GetKeyVaultArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetKeyVaultTimeouts;
}

/**
 * A collection of values returned by getKeyVault.
 */
export interface GetKeyVaultResult {
    readonly accessPolicies: outputs.GetKeyVaultAccessPolicy[];
    readonly enableRbacAuthorization: boolean;
    readonly enabledForDeployment: boolean;
    readonly enabledForDiskEncryption: boolean;
    readonly enabledForTemplateDeployment: boolean;
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly networkAcls: outputs.GetKeyVaultNetworkAcl[];
    readonly publicNetworkAccessEnabled: boolean;
    readonly purgeProtectionEnabled: boolean;
    readonly resourceGroupName: string;
    readonly skuName: string;
    readonly tags: {[key: string]: string};
    readonly tenantId: string;
    readonly timeouts?: outputs.GetKeyVaultTimeouts;
    readonly vaultUri: string;
}
export function getKeyVaultOutput(args: GetKeyVaultOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKeyVaultResult> {
    return pulumi.output(args).apply((a: any) => getKeyVault(a, opts))
}

/**
 * A collection of arguments for invoking getKeyVault.
 */
export interface GetKeyVaultOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetKeyVaultTimeoutsArgs>;
}
