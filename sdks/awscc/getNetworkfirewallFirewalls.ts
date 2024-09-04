// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkfirewallFirewalls(opts?: pulumi.InvokeOptions): Promise<GetNetworkfirewallFirewallsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getNetworkfirewallFirewalls:getNetworkfirewallFirewalls", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getNetworkfirewallFirewalls.
 */
export interface GetNetworkfirewallFirewallsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getNetworkfirewallFirewallsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkfirewallFirewallsResult> {
    return pulumi.output(getNetworkfirewallFirewalls(opts))
}
