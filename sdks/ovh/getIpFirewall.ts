// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIpFirewall(args: GetIpFirewallArgs, opts?: pulumi.InvokeOptions): Promise<GetIpFirewallResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ovh:index/getIpFirewall:getIpFirewall", {
        "ip": args.ip,
        "ipOnFirewall": args.ipOnFirewall,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIpFirewall.
 */
export interface GetIpFirewallArgs {
    ip: string;
    ipOnFirewall: string;
}

/**
 * A collection of values returned by getIpFirewall.
 */
export interface GetIpFirewallResult {
    readonly enabled: boolean;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly ip: string;
    readonly ipOnFirewall: string;
    readonly state: string;
}
export function getIpFirewallOutput(args: GetIpFirewallOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpFirewallResult> {
    return pulumi.output(args).apply((a: any) => getIpFirewall(a, opts))
}

/**
 * A collection of arguments for invoking getIpFirewall.
 */
export interface GetIpFirewallOutputArgs {
    ip: pulumi.Input<string>;
    ipOnFirewall: pulumi.Input<string>;
}
