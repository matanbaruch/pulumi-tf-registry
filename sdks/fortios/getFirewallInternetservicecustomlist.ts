// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFirewallInternetservicecustomlist(args?: GetFirewallInternetservicecustomlistArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallInternetservicecustomlistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getFirewallInternetservicecustomlist:getFirewallInternetservicecustomlist", {
        "filter": args.filter,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewallInternetservicecustomlist.
 */
export interface GetFirewallInternetservicecustomlistArgs {
    filter?: string;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getFirewallInternetservicecustomlist.
 */
export interface GetFirewallInternetservicecustomlistResult {
    readonly filter?: string;
    readonly id: string;
    readonly namelists: string[];
    readonly vdomparam?: string;
}
export function getFirewallInternetservicecustomlistOutput(args?: GetFirewallInternetservicecustomlistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallInternetservicecustomlistResult> {
    return pulumi.output(args).apply((a: any) => getFirewallInternetservicecustomlist(a, opts))
}

/**
 * A collection of arguments for invoking getFirewallInternetservicecustomlist.
 */
export interface GetFirewallInternetservicecustomlistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
