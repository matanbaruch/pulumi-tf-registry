// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemResourcelimits(args?: GetSystemResourcelimitsArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemResourcelimitsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemResourcelimits:getSystemResourcelimits", {
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemResourcelimits.
 */
export interface GetSystemResourcelimitsArgs {
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemResourcelimits.
 */
export interface GetSystemResourcelimitsResult {
    readonly customService: number;
    readonly dialupTunnel: number;
    readonly firewallAddress: number;
    readonly firewallAddrgrp: number;
    readonly firewallPolicy: number;
    readonly id: string;
    readonly ipsecPhase1: number;
    readonly ipsecPhase1Interface: number;
    readonly ipsecPhase2: number;
    readonly ipsecPhase2Interface: number;
    readonly logDiskQuota: number;
    readonly onetimeSchedule: number;
    readonly proxy: number;
    readonly recurringSchedule: number;
    readonly serviceGroup: number;
    readonly session: number;
    readonly sslvpn: number;
    readonly user: number;
    readonly userGroup: number;
    readonly vdomparam?: string;
}
export function getSystemResourcelimitsOutput(args?: GetSystemResourcelimitsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemResourcelimitsResult> {
    return pulumi.output(args).apply((a: any) => getSystemResourcelimits(a, opts))
}

/**
 * A collection of arguments for invoking getSystemResourcelimits.
 */
export interface GetSystemResourcelimitsOutputArgs {
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
