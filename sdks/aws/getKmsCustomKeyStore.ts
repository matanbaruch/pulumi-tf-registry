// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getKmsCustomKeyStore(args?: GetKmsCustomKeyStoreArgs, opts?: pulumi.InvokeOptions): Promise<GetKmsCustomKeyStoreResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getKmsCustomKeyStore:getKmsCustomKeyStore", {
        "customKeyStoreId": args.customKeyStoreId,
        "customKeyStoreName": args.customKeyStoreName,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKmsCustomKeyStore.
 */
export interface GetKmsCustomKeyStoreArgs {
    customKeyStoreId?: string;
    customKeyStoreName?: string;
    id?: string;
}

/**
 * A collection of values returned by getKmsCustomKeyStore.
 */
export interface GetKmsCustomKeyStoreResult {
    readonly cloudHsmClusterId: string;
    readonly connectionState: string;
    readonly creationDate: string;
    readonly customKeyStoreId: string;
    readonly customKeyStoreName: string;
    readonly id: string;
    readonly trustAnchorCertificate: string;
}
export function getKmsCustomKeyStoreOutput(args?: GetKmsCustomKeyStoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKmsCustomKeyStoreResult> {
    return pulumi.output(args).apply((a: any) => getKmsCustomKeyStore(a, opts))
}

/**
 * A collection of arguments for invoking getKmsCustomKeyStore.
 */
export interface GetKmsCustomKeyStoreOutputArgs {
    customKeyStoreId?: pulumi.Input<string>;
    customKeyStoreName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
