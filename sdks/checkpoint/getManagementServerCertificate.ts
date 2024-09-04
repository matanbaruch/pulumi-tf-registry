// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagementServerCertificate(args?: GetManagementServerCertificateArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementServerCertificateResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementServerCertificate:getManagementServerCertificate", {
        "id": args.id,
        "name": args.name,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementServerCertificate.
 */
export interface GetManagementServerCertificateArgs {
    id?: string;
    name?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementServerCertificate.
 */
export interface GetManagementServerCertificateResult {
    readonly comments: string;
    readonly id: string;
    readonly name?: string;
    readonly subject: string;
    readonly uid?: string;
    readonly validFrom: string;
    readonly validTo: string;
}
export function getManagementServerCertificateOutput(args?: GetManagementServerCertificateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementServerCertificateResult> {
    return pulumi.output(args).apply((a: any) => getManagementServerCertificate(a, opts))
}

/**
 * A collection of arguments for invoking getManagementServerCertificate.
 */
export interface GetManagementServerCertificateOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
