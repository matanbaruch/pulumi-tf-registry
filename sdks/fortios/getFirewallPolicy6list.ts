// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFirewallPolicy6list(args?: GetFirewallPolicy6listArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallPolicy6listResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getFirewallPolicy6list:getFirewallPolicy6list", {
        "filter": args.filter,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewallPolicy6list.
 */
export interface GetFirewallPolicy6listArgs {
    filter?: string;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getFirewallPolicy6list.
 */
export interface GetFirewallPolicy6listResult {
    readonly filter?: string;
    readonly id: string;
    readonly policyidlists: number[];
    readonly vdomparam?: string;
}
export function getFirewallPolicy6listOutput(args?: GetFirewallPolicy6listOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallPolicy6listResult> {
    return pulumi.output(args).apply((a: any) => getFirewallPolicy6list(a, opts))
}

/**
 * A collection of arguments for invoking getFirewallPolicy6list.
 */
export interface GetFirewallPolicy6listOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
