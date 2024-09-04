// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemGretunnellist(args?: GetSystemGretunnellistArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemGretunnellistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemGretunnellist:getSystemGretunnellist", {
        "filter": args.filter,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemGretunnellist.
 */
export interface GetSystemGretunnellistArgs {
    filter?: string;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemGretunnellist.
 */
export interface GetSystemGretunnellistResult {
    readonly filter?: string;
    readonly id: string;
    readonly namelists: string[];
    readonly vdomparam?: string;
}
export function getSystemGretunnellistOutput(args?: GetSystemGretunnellistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemGretunnellistResult> {
    return pulumi.output(args).apply((a: any) => getSystemGretunnellist(a, opts))
}

/**
 * A collection of arguments for invoking getSystemGretunnellist.
 */
export interface GetSystemGretunnellistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
