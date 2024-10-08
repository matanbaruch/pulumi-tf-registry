// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalanceSchedulePoollist(args?: GetLoadBalanceSchedulePoollistArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalanceSchedulePoollistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getLoadBalanceSchedulePoollist:getLoadBalanceSchedulePoollist", {
        "filter": args.filter,
        "id": args.id,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalanceSchedulePoollist.
 */
export interface GetLoadBalanceSchedulePoollistArgs {
    filter?: string;
    id?: string;
    vdom?: string;
}

/**
 * A collection of values returned by getLoadBalanceSchedulePoollist.
 */
export interface GetLoadBalanceSchedulePoollistResult {
    readonly filter?: string;
    readonly id: string;
    readonly mkeyLists: string[];
    readonly vdom?: string;
}
export function getLoadBalanceSchedulePoollistOutput(args?: GetLoadBalanceSchedulePoollistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalanceSchedulePoollistResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalanceSchedulePoollist(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalanceSchedulePoollist.
 */
export interface GetLoadBalanceSchedulePoollistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
