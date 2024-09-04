// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFirewallFilteringDestinationGroups(args?: GetFirewallFilteringDestinationGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallFilteringDestinationGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zia:index/getFirewallFilteringDestinationGroups:getFirewallFilteringDestinationGroups", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewallFilteringDestinationGroups.
 */
export interface GetFirewallFilteringDestinationGroupsArgs {
    id?: number;
    name?: string;
}

/**
 * A collection of values returned by getFirewallFilteringDestinationGroups.
 */
export interface GetFirewallFilteringDestinationGroupsResult {
    readonly addresses: string[];
    readonly countries: string[];
    readonly description: string;
    readonly id: number;
    readonly ipCategories: string[];
    readonly name: string;
    readonly type: string;
}
export function getFirewallFilteringDestinationGroupsOutput(args?: GetFirewallFilteringDestinationGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallFilteringDestinationGroupsResult> {
    return pulumi.output(args).apply((a: any) => getFirewallFilteringDestinationGroups(a, opts))
}

/**
 * A collection of arguments for invoking getFirewallFilteringDestinationGroups.
 */
export interface GetFirewallFilteringDestinationGroupsOutputArgs {
    id?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}
