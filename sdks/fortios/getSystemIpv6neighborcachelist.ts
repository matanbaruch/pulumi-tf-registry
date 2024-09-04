// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemIpv6neighborcachelist(args?: GetSystemIpv6neighborcachelistArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemIpv6neighborcachelistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemIpv6neighborcachelist:getSystemIpv6neighborcachelist", {
        "filter": args.filter,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemIpv6neighborcachelist.
 */
export interface GetSystemIpv6neighborcachelistArgs {
    filter?: string;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemIpv6neighborcachelist.
 */
export interface GetSystemIpv6neighborcachelistResult {
    readonly filter?: string;
    readonly fosidlists: number[];
    readonly id: string;
    readonly vdomparam?: string;
}
export function getSystemIpv6neighborcachelistOutput(args?: GetSystemIpv6neighborcachelistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemIpv6neighborcachelistResult> {
    return pulumi.output(args).apply((a: any) => getSystemIpv6neighborcachelist(a, opts))
}

/**
 * A collection of arguments for invoking getSystemIpv6neighborcachelist.
 */
export interface GetSystemIpv6neighborcachelistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
