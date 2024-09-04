// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIdentityOidcPublicKeys(args: GetIdentityOidcPublicKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityOidcPublicKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vault:index/getIdentityOidcPublicKeys:getIdentityOidcPublicKeys", {
        "id": args.id,
        "name": args.name,
        "namespace": args.namespace,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityOidcPublicKeys.
 */
export interface GetIdentityOidcPublicKeysArgs {
    id?: string;
    name: string;
    namespace?: string;
}

/**
 * A collection of values returned by getIdentityOidcPublicKeys.
 */
export interface GetIdentityOidcPublicKeysResult {
    readonly id: string;
    readonly keys: {[key: string]: string}[];
    readonly name: string;
    readonly namespace?: string;
}
export function getIdentityOidcPublicKeysOutput(args: GetIdentityOidcPublicKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityOidcPublicKeysResult> {
    return pulumi.output(args).apply((a: any) => getIdentityOidcPublicKeys(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityOidcPublicKeys.
 */
export interface GetIdentityOidcPublicKeysOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
}
