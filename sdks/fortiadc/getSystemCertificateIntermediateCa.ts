// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemCertificateIntermediateCa(args: GetSystemCertificateIntermediateCaArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemCertificateIntermediateCaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSystemCertificateIntermediateCa:getSystemCertificateIntermediateCa", {
        "id": args.id,
        "mkey": args.mkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemCertificateIntermediateCa.
 */
export interface GetSystemCertificateIntermediateCaArgs {
    id?: string;
    mkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getSystemCertificateIntermediateCa.
 */
export interface GetSystemCertificateIntermediateCaResult {
    readonly id: string;
    readonly mkey: string;
    readonly vdom?: string;
}
export function getSystemCertificateIntermediateCaOutput(args: GetSystemCertificateIntermediateCaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemCertificateIntermediateCaResult> {
    return pulumi.output(args).apply((a: any) => getSystemCertificateIntermediateCa(a, opts))
}

/**
 * A collection of arguments for invoking getSystemCertificateIntermediateCa.
 */
export interface GetSystemCertificateIntermediateCaOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
