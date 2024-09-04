// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRoute53ResolverFirewallConfig(args: GetRoute53ResolverFirewallConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetRoute53ResolverFirewallConfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getRoute53ResolverFirewallConfig:getRoute53ResolverFirewallConfig", {
        "id": args.id,
        "resourceId": args.resourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRoute53ResolverFirewallConfig.
 */
export interface GetRoute53ResolverFirewallConfigArgs {
    id?: string;
    resourceId: string;
}

/**
 * A collection of values returned by getRoute53ResolverFirewallConfig.
 */
export interface GetRoute53ResolverFirewallConfigResult {
    readonly firewallFailOpen: string;
    readonly id: string;
    readonly ownerId: string;
    readonly resourceId: string;
}
export function getRoute53ResolverFirewallConfigOutput(args: GetRoute53ResolverFirewallConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoute53ResolverFirewallConfigResult> {
    return pulumi.output(args).apply((a: any) => getRoute53ResolverFirewallConfig(a, opts))
}

/**
 * A collection of arguments for invoking getRoute53ResolverFirewallConfig.
 */
export interface GetRoute53ResolverFirewallConfigOutputArgs {
    id?: pulumi.Input<string>;
    resourceId: pulumi.Input<string>;
}
