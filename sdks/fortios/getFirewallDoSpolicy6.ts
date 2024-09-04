// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFirewallDoSpolicy6(args: GetFirewallDoSpolicy6Args, opts?: pulumi.InvokeOptions): Promise<GetFirewallDoSpolicy6Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getFirewallDoSpolicy6:getFirewallDoSpolicy6", {
        "id": args.id,
        "policyid": args.policyid,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewallDoSpolicy6.
 */
export interface GetFirewallDoSpolicy6Args {
    id?: string;
    policyid: number;
    vdomparam?: string;
}

/**
 * A collection of values returned by getFirewallDoSpolicy6.
 */
export interface GetFirewallDoSpolicy6Result {
    readonly anomalies: outputs.GetFirewallDoSpolicy6Anomaly[];
    readonly comments: string;
    readonly dstaddrs: outputs.GetFirewallDoSpolicy6Dstaddr[];
    readonly id: string;
    readonly interface: string;
    readonly name: string;
    readonly policyid: number;
    readonly services: outputs.GetFirewallDoSpolicy6Service[];
    readonly srcaddrs: outputs.GetFirewallDoSpolicy6Srcaddr[];
    readonly status: string;
    readonly vdomparam?: string;
}
export function getFirewallDoSpolicy6Output(args: GetFirewallDoSpolicy6OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallDoSpolicy6Result> {
    return pulumi.output(args).apply((a: any) => getFirewallDoSpolicy6(a, opts))
}

/**
 * A collection of arguments for invoking getFirewallDoSpolicy6.
 */
export interface GetFirewallDoSpolicy6OutputArgs {
    id?: pulumi.Input<string>;
    policyid: pulumi.Input<number>;
    vdomparam?: pulumi.Input<string>;
}
