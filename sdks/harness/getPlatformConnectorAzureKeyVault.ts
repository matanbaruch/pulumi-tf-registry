// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPlatformConnectorAzureKeyVault(args: GetPlatformConnectorAzureKeyVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetPlatformConnectorAzureKeyVaultResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getPlatformConnectorAzureKeyVault:getPlatformConnectorAzureKeyVault", {
        "id": args.id,
        "identifier": args.identifier,
        "name": args.name,
        "orgId": args.orgId,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlatformConnectorAzureKeyVault.
 */
export interface GetPlatformConnectorAzureKeyVaultArgs {
    id?: string;
    identifier: string;
    name?: string;
    orgId?: string;
    projectId?: string;
}

/**
 * A collection of values returned by getPlatformConnectorAzureKeyVault.
 */
export interface GetPlatformConnectorAzureKeyVaultResult {
    readonly azureEnvironmentType: string;
    readonly clientId: string;
    readonly delegateSelectors: string[];
    readonly description: string;
    readonly id: string;
    readonly identifier: string;
    readonly isDefault: boolean;
    readonly name?: string;
    readonly orgId?: string;
    readonly projectId?: string;
    readonly secretKey: string;
    readonly subscription: string;
    readonly tags: string[];
    readonly tenantId: string;
    readonly vaultName: string;
}
export function getPlatformConnectorAzureKeyVaultOutput(args: GetPlatformConnectorAzureKeyVaultOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlatformConnectorAzureKeyVaultResult> {
    return pulumi.output(args).apply((a: any) => getPlatformConnectorAzureKeyVault(a, opts))
}

/**
 * A collection of arguments for invoking getPlatformConnectorAzureKeyVault.
 */
export interface GetPlatformConnectorAzureKeyVaultOutputArgs {
    id?: pulumi.Input<string>;
    identifier: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}
