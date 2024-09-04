// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWebApplicationExtension(args: GetWebApplicationExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebApplicationExtensionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getWebApplicationExtension:getWebApplicationExtension", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWebApplicationExtension.
 */
export interface GetWebApplicationExtensionArgs {
    name: string;
}

/**
 * A collection of values returned by getWebApplicationExtension.
 */
export interface GetWebApplicationExtensionResult {
    readonly baseContextPath: string;
    readonly complexity: string;
    readonly deploymentDescriptorFile: string;
    readonly description: string;
    readonly documentRootDirectory: string;
    readonly id: string;
    readonly initParameters: string[];
    readonly ldapServer: string;
    readonly logFile: string;
    readonly name: string;
    readonly oidcClientId: string;
    readonly oidcClientSecret: string;
    readonly oidcClientSecretPassphraseProvider: string;
    readonly oidcIssuerUrl: string;
    readonly oidcStrictHostnameVerification: boolean;
    readonly oidcTrustAll: boolean;
    readonly oidcTrustStoreFile: string;
    readonly oidcTrustStorePinPassphraseProvider: string;
    readonly oidcTrustStoreType: string;
    readonly ssoEnabled: boolean;
    readonly temporaryDirectory: string;
    readonly trustStoreFile: string;
    readonly trustStorePinPassphraseProvider: string;
    readonly trustStoreType: string;
    readonly type: string;
    readonly warFile: string;
}
export function getWebApplicationExtensionOutput(args: GetWebApplicationExtensionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebApplicationExtensionResult> {
    return pulumi.output(args).apply((a: any) => getWebApplicationExtension(a, opts))
}

/**
 * A collection of arguments for invoking getWebApplicationExtension.
 */
export interface GetWebApplicationExtensionOutputArgs {
    name: pulumi.Input<string>;
}
