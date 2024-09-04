// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemCertificateIntermediateCaGrouplist(args?: GetSystemCertificateIntermediateCaGrouplistArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemCertificateIntermediateCaGrouplistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSystemCertificateIntermediateCaGrouplist:getSystemCertificateIntermediateCaGrouplist", {
        "filter": args.filter,
        "id": args.id,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemCertificateIntermediateCaGrouplist.
 */
export interface GetSystemCertificateIntermediateCaGrouplistArgs {
    filter?: string;
    id?: string;
    vdom?: string;
}

/**
 * A collection of values returned by getSystemCertificateIntermediateCaGrouplist.
 */
export interface GetSystemCertificateIntermediateCaGrouplistResult {
    readonly filter?: string;
    readonly id: string;
    readonly mkeyLists: string[];
    readonly vdom?: string;
}
export function getSystemCertificateIntermediateCaGrouplistOutput(args?: GetSystemCertificateIntermediateCaGrouplistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemCertificateIntermediateCaGrouplistResult> {
    return pulumi.output(args).apply((a: any) => getSystemCertificateIntermediateCaGrouplist(a, opts))
}

/**
 * A collection of arguments for invoking getSystemCertificateIntermediateCaGrouplist.
 */
export interface GetSystemCertificateIntermediateCaGrouplistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
