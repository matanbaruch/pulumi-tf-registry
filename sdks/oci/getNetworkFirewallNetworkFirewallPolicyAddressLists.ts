// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkFirewallNetworkFirewallPolicyAddressLists(args: GetNetworkFirewallNetworkFirewallPolicyAddressListsArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFirewallNetworkFirewallPolicyAddressListsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getNetworkFirewallNetworkFirewallPolicyAddressLists:getNetworkFirewallNetworkFirewallPolicyAddressLists", {
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "networkFirewallPolicyId": args.networkFirewallPolicyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkFirewallNetworkFirewallPolicyAddressLists.
 */
export interface GetNetworkFirewallNetworkFirewallPolicyAddressListsArgs {
    displayName?: string;
    filters?: inputs.GetNetworkFirewallNetworkFirewallPolicyAddressListsFilter[];
    id?: string;
    networkFirewallPolicyId: string;
}

/**
 * A collection of values returned by getNetworkFirewallNetworkFirewallPolicyAddressLists.
 */
export interface GetNetworkFirewallNetworkFirewallPolicyAddressListsResult {
    readonly addressListSummaryCollections: outputs.GetNetworkFirewallNetworkFirewallPolicyAddressListsAddressListSummaryCollection[];
    readonly displayName?: string;
    readonly filters?: outputs.GetNetworkFirewallNetworkFirewallPolicyAddressListsFilter[];
    readonly id: string;
    readonly networkFirewallPolicyId: string;
}
export function getNetworkFirewallNetworkFirewallPolicyAddressListsOutput(args: GetNetworkFirewallNetworkFirewallPolicyAddressListsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkFirewallNetworkFirewallPolicyAddressListsResult> {
    return pulumi.output(args).apply((a: any) => getNetworkFirewallNetworkFirewallPolicyAddressLists(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkFirewallNetworkFirewallPolicyAddressLists.
 */
export interface GetNetworkFirewallNetworkFirewallPolicyAddressListsOutputArgs {
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetNetworkFirewallNetworkFirewallPolicyAddressListsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    networkFirewallPolicyId: pulumi.Input<string>;
}
