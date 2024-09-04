// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemDnsVdom(args?: GetSystemDnsVdomArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemDnsVdomResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSystemDnsVdom:getSystemDnsVdom", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemDnsVdom.
 */
export interface GetSystemDnsVdomArgs {
    id?: string;
}

/**
 * A collection of values returned by getSystemDnsVdom.
 */
export interface GetSystemDnsVdomResult {
    readonly dnsOveride: string;
    readonly id: string;
    readonly ipPrimary: string;
    readonly ipSecond: string;
}
export function getSystemDnsVdomOutput(args?: GetSystemDnsVdomOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemDnsVdomResult> {
    return pulumi.output(args).apply((a: any) => getSystemDnsVdom(a, opts))
}

/**
 * A collection of arguments for invoking getSystemDnsVdom.
 */
export interface GetSystemDnsVdomOutputArgs {
    id?: pulumi.Input<string>;
}
