// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemVirtualwanlink(args?: GetSystemVirtualwanlinkArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemVirtualwanlinkResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemVirtualwanlink:getSystemVirtualwanlink", {
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemVirtualwanlink.
 */
export interface GetSystemVirtualwanlinkArgs {
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemVirtualwanlink.
 */
export interface GetSystemVirtualwanlinkResult {
    readonly failAlertInterfaces: outputs.GetSystemVirtualwanlinkFailAlertInterface[];
    readonly failDetect: string;
    readonly healthChecks: outputs.GetSystemVirtualwanlinkHealthCheck[];
    readonly id: string;
    readonly loadBalanceMode: string;
    readonly members: outputs.GetSystemVirtualwanlinkMember[];
    readonly neighborHoldBootTime: number;
    readonly neighborHoldDown: string;
    readonly neighborHoldDownTime: number;
    readonly neighbors: outputs.GetSystemVirtualwanlinkNeighbor[];
    readonly services: outputs.GetSystemVirtualwanlinkService[];
    readonly status: string;
    readonly vdomparam?: string;
    readonly zones: outputs.GetSystemVirtualwanlinkZone[];
}
export function getSystemVirtualwanlinkOutput(args?: GetSystemVirtualwanlinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemVirtualwanlinkResult> {
    return pulumi.output(args).apply((a: any) => getSystemVirtualwanlink(a, opts))
}

/**
 * A collection of arguments for invoking getSystemVirtualwanlink.
 */
export interface GetSystemVirtualwanlinkOutputArgs {
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
