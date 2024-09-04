// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVaultAuthenticationMethod(args: GetVaultAuthenticationMethodArgs, opts?: pulumi.InvokeOptions): Promise<GetVaultAuthenticationMethodResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getVaultAuthenticationMethod:getVaultAuthenticationMethod", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVaultAuthenticationMethod.
 */
export interface GetVaultAuthenticationMethodArgs {
    name: string;
}

/**
 * A collection of values returned by getVaultAuthenticationMethod.
 */
export interface GetVaultAuthenticationMethodResult {
    readonly description: string;
    readonly id: string;
    readonly loginMechanismName: string;
    readonly name: string;
    readonly password: string;
    readonly type: string;
    readonly username: string;
    readonly vaultAccessToken: string;
    readonly vaultRoleId: string;
    readonly vaultSecretId: string;
}
export function getVaultAuthenticationMethodOutput(args: GetVaultAuthenticationMethodOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVaultAuthenticationMethodResult> {
    return pulumi.output(args).apply((a: any) => getVaultAuthenticationMethod(a, opts))
}

/**
 * A collection of arguments for invoking getVaultAuthenticationMethod.
 */
export interface GetVaultAuthenticationMethodOutputArgs {
    name: pulumi.Input<string>;
}
