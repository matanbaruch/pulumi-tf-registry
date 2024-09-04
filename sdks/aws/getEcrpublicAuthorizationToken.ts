// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEcrpublicAuthorizationToken(args?: GetEcrpublicAuthorizationTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetEcrpublicAuthorizationTokenResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getEcrpublicAuthorizationToken:getEcrpublicAuthorizationToken", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEcrpublicAuthorizationToken.
 */
export interface GetEcrpublicAuthorizationTokenArgs {
    id?: string;
}

/**
 * A collection of values returned by getEcrpublicAuthorizationToken.
 */
export interface GetEcrpublicAuthorizationTokenResult {
    readonly authorizationToken: string;
    readonly expiresAt: string;
    readonly id: string;
    readonly password: string;
    readonly userName: string;
}
export function getEcrpublicAuthorizationTokenOutput(args?: GetEcrpublicAuthorizationTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEcrpublicAuthorizationTokenResult> {
    return pulumi.output(args).apply((a: any) => getEcrpublicAuthorizationToken(a, opts))
}

/**
 * A collection of arguments for invoking getEcrpublicAuthorizationToken.
 */
export interface GetEcrpublicAuthorizationTokenOutputArgs {
    id?: pulumi.Input<string>;
}
