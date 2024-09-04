// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFirewallProxypolicylist(args?: GetFirewallProxypolicylistArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallProxypolicylistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getFirewallProxypolicylist:getFirewallProxypolicylist", {
        "filter": args.filter,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewallProxypolicylist.
 */
export interface GetFirewallProxypolicylistArgs {
    filter?: string;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getFirewallProxypolicylist.
 */
export interface GetFirewallProxypolicylistResult {
    readonly filter?: string;
    readonly id: string;
    readonly policyidlists: number[];
    readonly vdomparam?: string;
}
export function getFirewallProxypolicylistOutput(args?: GetFirewallProxypolicylistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallProxypolicylistResult> {
    return pulumi.output(args).apply((a: any) => getFirewallProxypolicylist(a, opts))
}

/**
 * A collection of arguments for invoking getFirewallProxypolicylist.
 */
export interface GetFirewallProxypolicylistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
