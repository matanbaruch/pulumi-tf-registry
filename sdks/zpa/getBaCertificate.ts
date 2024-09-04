// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBaCertificate(args?: GetBaCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetBaCertificateResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zpa:index/getBaCertificate:getBaCertificate", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBaCertificate.
 */
export interface GetBaCertificateArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getBaCertificate.
 */
export interface GetBaCertificateResult {
    readonly certChain: string;
    readonly certificate: string;
    readonly cname: string;
    readonly creationTime: string;
    readonly description: string;
    readonly id?: string;
    readonly issuedBy: string;
    readonly issuedTo: string;
    readonly microtenantId: string;
    readonly modifiedTime: string;
    readonly modifiedby: string;
    readonly name?: string;
    readonly publicKey: string;
    readonly sans: string[];
    readonly serialNo: string;
    readonly status: string;
    readonly validFromInEpochsec: string;
    readonly validToInEpochsec: string;
}
export function getBaCertificateOutput(args?: GetBaCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBaCertificateResult> {
    return pulumi.output(args).apply((a: any) => getBaCertificate(a, opts))
}

/**
 * A collection of arguments for invoking getBaCertificate.
 */
export interface GetBaCertificateOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
