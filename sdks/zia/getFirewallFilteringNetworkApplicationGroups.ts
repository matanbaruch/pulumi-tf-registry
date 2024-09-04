// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFirewallFilteringNetworkApplicationGroups(args?: GetFirewallFilteringNetworkApplicationGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallFilteringNetworkApplicationGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zia:index/getFirewallFilteringNetworkApplicationGroups:getFirewallFilteringNetworkApplicationGroups", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewallFilteringNetworkApplicationGroups.
 */
export interface GetFirewallFilteringNetworkApplicationGroupsArgs {
    id?: number;
    name?: string;
}

/**
 * A collection of values returned by getFirewallFilteringNetworkApplicationGroups.
 */
export interface GetFirewallFilteringNetworkApplicationGroupsResult {
    readonly description: string;
    readonly id: number;
    readonly name: string;
    readonly networkApplications: string[];
}
export function getFirewallFilteringNetworkApplicationGroupsOutput(args?: GetFirewallFilteringNetworkApplicationGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallFilteringNetworkApplicationGroupsResult> {
    return pulumi.output(args).apply((a: any) => getFirewallFilteringNetworkApplicationGroups(a, opts))
}

/**
 * A collection of arguments for invoking getFirewallFilteringNetworkApplicationGroups.
 */
export interface GetFirewallFilteringNetworkApplicationGroupsOutputArgs {
    id?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}
