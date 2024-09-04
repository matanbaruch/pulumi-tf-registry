// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFirewallCentralsnatmap(args: GetFirewallCentralsnatmapArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallCentralsnatmapResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getFirewallCentralsnatmap:getFirewallCentralsnatmap", {
        "id": args.id,
        "policyid": args.policyid,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewallCentralsnatmap.
 */
export interface GetFirewallCentralsnatmapArgs {
    id?: string;
    policyid: number;
    vdomparam?: string;
}

/**
 * A collection of values returned by getFirewallCentralsnatmap.
 */
export interface GetFirewallCentralsnatmapResult {
    readonly comments: string;
    readonly dstAddr6s: outputs.GetFirewallCentralsnatmapDstAddr6[];
    readonly dstAddrs: outputs.GetFirewallCentralsnatmapDstAddr[];
    readonly dstPort: string;
    readonly dstintfs: outputs.GetFirewallCentralsnatmapDstintf[];
    readonly id: string;
    readonly nat: string;
    readonly nat46: string;
    readonly nat64: string;
    readonly natIppool6s: outputs.GetFirewallCentralsnatmapNatIppool6[];
    readonly natIppools: outputs.GetFirewallCentralsnatmapNatIppool[];
    readonly natPort: string;
    readonly origAddr6s: outputs.GetFirewallCentralsnatmapOrigAddr6[];
    readonly origAddrs: outputs.GetFirewallCentralsnatmapOrigAddr[];
    readonly origPort: string;
    readonly policyid: number;
    readonly portPreserve: string;
    readonly protocol: number;
    readonly srcintfs: outputs.GetFirewallCentralsnatmapSrcintf[];
    readonly status: string;
    readonly type: string;
    readonly uuid: string;
    readonly vdomparam?: string;
}
export function getFirewallCentralsnatmapOutput(args: GetFirewallCentralsnatmapOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallCentralsnatmapResult> {
    return pulumi.output(args).apply((a: any) => getFirewallCentralsnatmap(a, opts))
}

/**
 * A collection of arguments for invoking getFirewallCentralsnatmap.
 */
export interface GetFirewallCentralsnatmapOutputArgs {
    id?: pulumi.Input<string>;
    policyid: pulumi.Input<number>;
    vdomparam?: pulumi.Input<string>;
}
