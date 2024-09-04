// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getComputeSslCertificate(args: GetComputeSslCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeSslCertificateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getComputeSslCertificate:getComputeSslCertificate", {
        "id": args.id,
        "name": args.name,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComputeSslCertificate.
 */
export interface GetComputeSslCertificateArgs {
    id?: string;
    name: string;
    project?: string;
}

/**
 * A collection of values returned by getComputeSslCertificate.
 */
export interface GetComputeSslCertificateResult {
    readonly certificate: string;
    readonly certificateId: number;
    readonly creationTimestamp: string;
    readonly description: string;
    readonly expireTime: string;
    readonly id: string;
    readonly name: string;
    readonly namePrefix: string;
    readonly privateKey: string;
    readonly project?: string;
    readonly selfLink: string;
}
export function getComputeSslCertificateOutput(args: GetComputeSslCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeSslCertificateResult> {
    return pulumi.output(args).apply((a: any) => getComputeSslCertificate(a, opts))
}

/**
 * A collection of arguments for invoking getComputeSslCertificate.
 */
export interface GetComputeSslCertificateOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
