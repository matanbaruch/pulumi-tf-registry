// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemCertificateIntermediateCalist(args?: GetSystemCertificateIntermediateCalistArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemCertificateIntermediateCalistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSystemCertificateIntermediateCalist:getSystemCertificateIntermediateCalist", {
        "filter": args.filter,
        "id": args.id,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemCertificateIntermediateCalist.
 */
export interface GetSystemCertificateIntermediateCalistArgs {
    filter?: string;
    id?: string;
    vdom?: string;
}

/**
 * A collection of values returned by getSystemCertificateIntermediateCalist.
 */
export interface GetSystemCertificateIntermediateCalistResult {
    readonly filter?: string;
    readonly id: string;
    readonly mkeyLists: string[];
    readonly vdom?: string;
}
export function getSystemCertificateIntermediateCalistOutput(args?: GetSystemCertificateIntermediateCalistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemCertificateIntermediateCalistResult> {
    return pulumi.output(args).apply((a: any) => getSystemCertificateIntermediateCalist(a, opts))
}

/**
 * A collection of arguments for invoking getSystemCertificateIntermediateCalist.
 */
export interface GetSystemCertificateIntermediateCalistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
