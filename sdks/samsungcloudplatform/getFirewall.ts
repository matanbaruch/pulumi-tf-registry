// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFirewall(args?: GetFirewallArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getFirewall:getFirewall", {
        "filters": args.filters,
        "targetId": args.targetId,
        "vpcId": args.vpcId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewall.
 */
export interface GetFirewallArgs {
    filters?: inputs.GetFirewallFilter[];
    targetId?: string;
    vpcId?: string;
}

/**
 * A collection of values returned by getFirewall.
 */
export interface GetFirewallResult {
    readonly filters?: outputs.GetFirewallFilter[];
    readonly id: string;
    readonly name: string;
    readonly state: string;
    readonly targetId: string;
    readonly targetType: string;
    readonly vpcId: string;
}
export function getFirewallOutput(args?: GetFirewallOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallResult> {
    return pulumi.output(args).apply((a: any) => getFirewall(a, opts))
}

/**
 * A collection of arguments for invoking getFirewall.
 */
export interface GetFirewallOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetFirewallFilterArgs>[]>;
    targetId?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
}
