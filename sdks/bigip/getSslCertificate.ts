// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSslCertificate(args: GetSslCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetSslCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("bigip:index/getSslCertificate:getSslCertificate", {
        "id": args.id,
        "name": args.name,
        "partition": args.partition,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSslCertificate.
 */
export interface GetSslCertificateArgs {
    id?: string;
    name: string;
    partition: string;
}

/**
 * A collection of values returned by getSslCertificate.
 */
export interface GetSslCertificateResult {
    readonly certificate: string;
    readonly id: string;
    readonly name: string;
    readonly partition: string;
}
export function getSslCertificateOutput(args: GetSslCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSslCertificateResult> {
    return pulumi.output(args).apply((a: any) => getSslCertificate(a, opts))
}

/**
 * A collection of arguments for invoking getSslCertificate.
 */
export interface GetSslCertificateOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    partition: pulumi.Input<string>;
}
