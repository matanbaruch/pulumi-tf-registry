// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCryptoManager(opts?: pulumi.InvokeOptions): Promise<GetCryptoManagerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getCryptoManager:getCryptoManager", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getCryptoManager.
 */
export interface GetCryptoManagerResult {
    readonly cipherKeyLength: number;
    readonly cipherTransformation: string;
    readonly digestAlgorithm: string;
    readonly enableRsaKeyExchangeCipherSuites: boolean;
    readonly enableSha1CipherSuites: boolean;
    readonly id: string;
    readonly keyWrappingTransformation: string;
    readonly macAlgorithm: string;
    readonly macKeyLength: number;
    readonly outboundSslCipherSuites: string[];
    readonly outboundSslProtocols: string[];
    readonly signingEncryptionSettingsId: string;
    readonly sslCertNickname: string;
    readonly sslCipherSuites: string[];
    readonly sslProtocols: string[];
    readonly type: string;
}
export function getCryptoManagerOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetCryptoManagerResult> {
    return pulumi.output(getCryptoManager(opts))
}
