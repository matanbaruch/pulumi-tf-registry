// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadbalancerVip(args?: GetLoadbalancerVipArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadbalancerVipResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ecloud:index/getLoadbalancerVip:getLoadbalancerVip", {
        "id": args.id,
        "loadBalancerId": args.loadBalancerId,
        "loadBalancerVipId": args.loadBalancerVipId,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadbalancerVip.
 */
export interface GetLoadbalancerVipArgs {
    id?: string;
    loadBalancerId?: string;
    loadBalancerVipId?: string;
    name?: string;
}

/**
 * A collection of values returned by getLoadbalancerVip.
 */
export interface GetLoadbalancerVipResult {
    readonly id: string;
    readonly loadBalancerId?: string;
    readonly loadBalancerVipId?: string;
    readonly name?: string;
}
export function getLoadbalancerVipOutput(args?: GetLoadbalancerVipOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadbalancerVipResult> {
    return pulumi.output(args).apply((a: any) => getLoadbalancerVip(a, opts))
}

/**
 * A collection of arguments for invoking getLoadbalancerVip.
 */
export interface GetLoadbalancerVipOutputArgs {
    id?: pulumi.Input<string>;
    loadBalancerId?: pulumi.Input<string>;
    loadBalancerVipId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
