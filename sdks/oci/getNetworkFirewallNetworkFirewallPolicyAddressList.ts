// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkFirewallNetworkFirewallPolicyAddressList(args: GetNetworkFirewallNetworkFirewallPolicyAddressListArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFirewallNetworkFirewallPolicyAddressListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getNetworkFirewallNetworkFirewallPolicyAddressList:getNetworkFirewallNetworkFirewallPolicyAddressList", {
        "name": args.name,
        "networkFirewallPolicyId": args.networkFirewallPolicyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkFirewallNetworkFirewallPolicyAddressList.
 */
export interface GetNetworkFirewallNetworkFirewallPolicyAddressListArgs {
    name: string;
    networkFirewallPolicyId: string;
}

/**
 * A collection of values returned by getNetworkFirewallNetworkFirewallPolicyAddressList.
 */
export interface GetNetworkFirewallNetworkFirewallPolicyAddressListResult {
    readonly addresses: string[];
    readonly id: string;
    readonly name: string;
    readonly networkFirewallPolicyId: string;
    readonly parentResourceId: string;
    readonly totalAddresses: number;
    readonly type: string;
}
export function getNetworkFirewallNetworkFirewallPolicyAddressListOutput(args: GetNetworkFirewallNetworkFirewallPolicyAddressListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkFirewallNetworkFirewallPolicyAddressListResult> {
    return pulumi.output(args).apply((a: any) => getNetworkFirewallNetworkFirewallPolicyAddressList(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkFirewallNetworkFirewallPolicyAddressList.
 */
export interface GetNetworkFirewallNetworkFirewallPolicyAddressListOutputArgs {
    name: pulumi.Input<string>;
    networkFirewallPolicyId: pulumi.Input<string>;
}
