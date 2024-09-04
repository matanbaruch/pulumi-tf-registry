// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFirewallserviceCategorylist(args?: GetFirewallserviceCategorylistArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallserviceCategorylistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getFirewallserviceCategorylist:getFirewallserviceCategorylist", {
        "filter": args.filter,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewallserviceCategorylist.
 */
export interface GetFirewallserviceCategorylistArgs {
    filter?: string;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getFirewallserviceCategorylist.
 */
export interface GetFirewallserviceCategorylistResult {
    readonly filter?: string;
    readonly id: string;
    readonly namelists: string[];
    readonly vdomparam?: string;
}
export function getFirewallserviceCategorylistOutput(args?: GetFirewallserviceCategorylistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallserviceCategorylistResult> {
    return pulumi.output(args).apply((a: any) => getFirewallserviceCategorylist(a, opts))
}

/**
 * A collection of arguments for invoking getFirewallserviceCategorylist.
 */
export interface GetFirewallserviceCategorylistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
