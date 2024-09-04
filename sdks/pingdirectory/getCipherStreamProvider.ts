// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCipherStreamProvider(args: GetCipherStreamProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetCipherStreamProviderResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getCipherStreamProvider:getCipherStreamProvider", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCipherStreamProvider.
 */
export interface GetCipherStreamProviderArgs {
    name: string;
}

/**
 * A collection of values returned by getCipherStreamProvider.
 */
export interface GetCipherStreamProviderResult {
    readonly awsAccessKeyId: string;
    readonly awsExternalServer: string;
    readonly awsRegionName: string;
    readonly awsSecretAccessKey: string;
    readonly azureAuthenticationMethod: string;
    readonly conjurExternalServer: string;
    readonly conjurSecretRelativePath: string;
    readonly description: string;
    readonly enabled: boolean;
    readonly encryptedPassphraseFile: string;
    readonly encryptionMetadataFile: string;
    readonly extensionArguments: string[];
    readonly extensionClass: string;
    readonly httpProxyExternalServer: string;
    readonly id: string;
    readonly iterationCount: number;
    readonly keyStorePin: string;
    readonly keyStorePinEnvironmentVariable: string;
    readonly keyStorePinFile: string;
    readonly keyVaultUri: string;
    readonly keyWrappingTransformation: string;
    readonly kmsEncryptionKeyArn: string;
    readonly name: string;
    readonly passwordFile: string;
    readonly pkcs11KeyStoreType: string;
    readonly pkcs11ProviderClass: string;
    readonly pkcs11ProviderConfigurationFile: string;
    readonly secretFieldName: string;
    readonly secretId: string;
    readonly secretName: string;
    readonly secretVersionId: string;
    readonly secretVersionStage: string;
    readonly sslCertNickname: string;
    readonly trustStoreFile: string;
    readonly trustStorePin: string;
    readonly trustStoreType: string;
    readonly type: string;
    readonly vaultAuthenticationMethod: string;
    readonly vaultEncryptionMetadataFile: string;
    readonly vaultExternalServer: string;
    readonly vaultSecretFieldName: string;
    readonly vaultSecretPath: string;
    readonly vaultServerBaseUris: string[];
    readonly waitForPasswordFile: boolean;
}
export function getCipherStreamProviderOutput(args: GetCipherStreamProviderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCipherStreamProviderResult> {
    return pulumi.output(args).apply((a: any) => getCipherStreamProvider(a, opts))
}

/**
 * A collection of arguments for invoking getCipherStreamProvider.
 */
export interface GetCipherStreamProviderOutputArgs {
    name: pulumi.Input<string>;
}
