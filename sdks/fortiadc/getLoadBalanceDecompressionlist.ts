// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalanceDecompressionlist(args?: GetLoadBalanceDecompressionlistArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalanceDecompressionlistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getLoadBalanceDecompressionlist:getLoadBalanceDecompressionlist", {
        "filter": args.filter,
        "id": args.id,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalanceDecompressionlist.
 */
export interface GetLoadBalanceDecompressionlistArgs {
    filter?: string;
    id?: string;
    vdom?: string;
}

/**
 * A collection of values returned by getLoadBalanceDecompressionlist.
 */
export interface GetLoadBalanceDecompressionlistResult {
    readonly filter?: string;
    readonly id: string;
    readonly mkeyLists: string[];
    readonly vdom?: string;
}
export function getLoadBalanceDecompressionlistOutput(args?: GetLoadBalanceDecompressionlistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalanceDecompressionlistResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalanceDecompressionlist(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalanceDecompressionlist.
 */
export interface GetLoadBalanceDecompressionlistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
