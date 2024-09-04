// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFirewallFilteringNetworkService(args?: GetFirewallFilteringNetworkServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallFilteringNetworkServiceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zia:index/getFirewallFilteringNetworkService:getFirewallFilteringNetworkService", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewallFilteringNetworkService.
 */
export interface GetFirewallFilteringNetworkServiceArgs {
    id?: number;
    name?: string;
}

/**
 * A collection of values returned by getFirewallFilteringNetworkService.
 */
export interface GetFirewallFilteringNetworkServiceResult {
    readonly description: string;
    readonly destTcpPorts: outputs.GetFirewallFilteringNetworkServiceDestTcpPort[];
    readonly destUdpPorts: outputs.GetFirewallFilteringNetworkServiceDestUdpPort[];
    readonly id: number;
    readonly isNameL10nTag: boolean;
    readonly name: string;
    readonly srcTcpPorts: outputs.GetFirewallFilteringNetworkServiceSrcTcpPort[];
    readonly srcUdpPorts: outputs.GetFirewallFilteringNetworkServiceSrcUdpPort[];
    readonly tag: string;
    readonly type: string;
}
export function getFirewallFilteringNetworkServiceOutput(args?: GetFirewallFilteringNetworkServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallFilteringNetworkServiceResult> {
    return pulumi.output(args).apply((a: any) => getFirewallFilteringNetworkService(a, opts))
}

/**
 * A collection of arguments for invoking getFirewallFilteringNetworkService.
 */
export interface GetFirewallFilteringNetworkServiceOutputArgs {
    id?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}
