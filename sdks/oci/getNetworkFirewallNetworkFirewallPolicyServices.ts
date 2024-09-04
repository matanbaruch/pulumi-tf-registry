// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkFirewallNetworkFirewallPolicyServices(args: GetNetworkFirewallNetworkFirewallPolicyServicesArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFirewallNetworkFirewallPolicyServicesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getNetworkFirewallNetworkFirewallPolicyServices:getNetworkFirewallNetworkFirewallPolicyServices", {
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "networkFirewallPolicyId": args.networkFirewallPolicyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkFirewallNetworkFirewallPolicyServices.
 */
export interface GetNetworkFirewallNetworkFirewallPolicyServicesArgs {
    displayName?: string;
    filters?: inputs.GetNetworkFirewallNetworkFirewallPolicyServicesFilter[];
    id?: string;
    networkFirewallPolicyId: string;
}

/**
 * A collection of values returned by getNetworkFirewallNetworkFirewallPolicyServices.
 */
export interface GetNetworkFirewallNetworkFirewallPolicyServicesResult {
    readonly displayName?: string;
    readonly filters?: outputs.GetNetworkFirewallNetworkFirewallPolicyServicesFilter[];
    readonly id: string;
    readonly networkFirewallPolicyId: string;
    readonly serviceSummaryCollections: outputs.GetNetworkFirewallNetworkFirewallPolicyServicesServiceSummaryCollection[];
}
export function getNetworkFirewallNetworkFirewallPolicyServicesOutput(args: GetNetworkFirewallNetworkFirewallPolicyServicesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkFirewallNetworkFirewallPolicyServicesResult> {
    return pulumi.output(args).apply((a: any) => getNetworkFirewallNetworkFirewallPolicyServices(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkFirewallNetworkFirewallPolicyServices.
 */
export interface GetNetworkFirewallNetworkFirewallPolicyServicesOutputArgs {
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetNetworkFirewallNetworkFirewallPolicyServicesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    networkFirewallPolicyId: pulumi.Input<string>;
}
