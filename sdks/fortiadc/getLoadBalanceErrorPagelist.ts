// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalanceErrorPagelist(args?: GetLoadBalanceErrorPagelistArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalanceErrorPagelistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getLoadBalanceErrorPagelist:getLoadBalanceErrorPagelist", {
        "filter": args.filter,
        "id": args.id,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalanceErrorPagelist.
 */
export interface GetLoadBalanceErrorPagelistArgs {
    filter?: string;
    id?: string;
    vdom?: string;
}

/**
 * A collection of values returned by getLoadBalanceErrorPagelist.
 */
export interface GetLoadBalanceErrorPagelistResult {
    readonly filter?: string;
    readonly id: string;
    readonly mkeyLists: string[];
    readonly vdom?: string;
}
export function getLoadBalanceErrorPagelistOutput(args?: GetLoadBalanceErrorPagelistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalanceErrorPagelistResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalanceErrorPagelist(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalanceErrorPagelist.
 */
export interface GetLoadBalanceErrorPagelistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
