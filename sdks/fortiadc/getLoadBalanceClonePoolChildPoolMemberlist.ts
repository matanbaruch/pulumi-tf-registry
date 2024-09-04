// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalanceClonePoolChildPoolMemberlist(args: GetLoadBalanceClonePoolChildPoolMemberlistArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalanceClonePoolChildPoolMemberlistResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getLoadBalanceClonePoolChildPoolMemberlist:getLoadBalanceClonePoolChildPoolMemberlist", {
        "filter": args.filter,
        "id": args.id,
        "pkey": args.pkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalanceClonePoolChildPoolMemberlist.
 */
export interface GetLoadBalanceClonePoolChildPoolMemberlistArgs {
    filter?: string;
    id?: string;
    pkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getLoadBalanceClonePoolChildPoolMemberlist.
 */
export interface GetLoadBalanceClonePoolChildPoolMemberlistResult {
    readonly filter?: string;
    readonly id: string;
    readonly mkeyLists: string[];
    readonly pkey: string;
    readonly vdom?: string;
}
export function getLoadBalanceClonePoolChildPoolMemberlistOutput(args: GetLoadBalanceClonePoolChildPoolMemberlistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalanceClonePoolChildPoolMemberlistResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalanceClonePoolChildPoolMemberlist(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalanceClonePoolChildPoolMemberlist.
 */
export interface GetLoadBalanceClonePoolChildPoolMemberlistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    pkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
