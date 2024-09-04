// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalanceProfileChildServerResponseHeaderInsertlist(args: GetLoadBalanceProfileChildServerResponseHeaderInsertlistArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalanceProfileChildServerResponseHeaderInsertlistResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getLoadBalanceProfileChildServerResponseHeaderInsertlist:getLoadBalanceProfileChildServerResponseHeaderInsertlist", {
        "filter": args.filter,
        "id": args.id,
        "pkey": args.pkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalanceProfileChildServerResponseHeaderInsertlist.
 */
export interface GetLoadBalanceProfileChildServerResponseHeaderInsertlistArgs {
    filter?: string;
    id?: string;
    pkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getLoadBalanceProfileChildServerResponseHeaderInsertlist.
 */
export interface GetLoadBalanceProfileChildServerResponseHeaderInsertlistResult {
    readonly filter?: string;
    readonly id: string;
    readonly mkeyLists: string[];
    readonly pkey: string;
    readonly vdom?: string;
}
export function getLoadBalanceProfileChildServerResponseHeaderInsertlistOutput(args: GetLoadBalanceProfileChildServerResponseHeaderInsertlistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalanceProfileChildServerResponseHeaderInsertlistResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalanceProfileChildServerResponseHeaderInsertlist(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalanceProfileChildServerResponseHeaderInsertlist.
 */
export interface GetLoadBalanceProfileChildServerResponseHeaderInsertlistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    pkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
