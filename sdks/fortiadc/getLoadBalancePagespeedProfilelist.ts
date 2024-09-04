// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalancePagespeedProfilelist(args?: GetLoadBalancePagespeedProfilelistArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalancePagespeedProfilelistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getLoadBalancePagespeedProfilelist:getLoadBalancePagespeedProfilelist", {
        "filter": args.filter,
        "id": args.id,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalancePagespeedProfilelist.
 */
export interface GetLoadBalancePagespeedProfilelistArgs {
    filter?: string;
    id?: string;
    vdom?: string;
}

/**
 * A collection of values returned by getLoadBalancePagespeedProfilelist.
 */
export interface GetLoadBalancePagespeedProfilelistResult {
    readonly filter?: string;
    readonly id: string;
    readonly mkeyLists: string[];
    readonly vdom?: string;
}
export function getLoadBalancePagespeedProfilelistOutput(args?: GetLoadBalancePagespeedProfilelistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalancePagespeedProfilelistResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalancePagespeedProfilelist(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalancePagespeedProfilelist.
 */
export interface GetLoadBalancePagespeedProfilelistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
