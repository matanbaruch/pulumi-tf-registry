// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkFirewallNetworkFirewallPolicyDecryptionProfiles(args: GetNetworkFirewallNetworkFirewallPolicyDecryptionProfilesArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFirewallNetworkFirewallPolicyDecryptionProfilesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getNetworkFirewallNetworkFirewallPolicyDecryptionProfiles:getNetworkFirewallNetworkFirewallPolicyDecryptionProfiles", {
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "networkFirewallPolicyId": args.networkFirewallPolicyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.
 */
export interface GetNetworkFirewallNetworkFirewallPolicyDecryptionProfilesArgs {
    displayName?: string;
    filters?: inputs.GetNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter[];
    id?: string;
    networkFirewallPolicyId: string;
}

/**
 * A collection of values returned by getNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.
 */
export interface GetNetworkFirewallNetworkFirewallPolicyDecryptionProfilesResult {
    readonly decryptionProfileSummaryCollections: outputs.GetNetworkFirewallNetworkFirewallPolicyDecryptionProfilesDecryptionProfileSummaryCollection[];
    readonly displayName?: string;
    readonly filters?: outputs.GetNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilter[];
    readonly id: string;
    readonly networkFirewallPolicyId: string;
}
export function getNetworkFirewallNetworkFirewallPolicyDecryptionProfilesOutput(args: GetNetworkFirewallNetworkFirewallPolicyDecryptionProfilesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkFirewallNetworkFirewallPolicyDecryptionProfilesResult> {
    return pulumi.output(args).apply((a: any) => getNetworkFirewallNetworkFirewallPolicyDecryptionProfiles(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkFirewallNetworkFirewallPolicyDecryptionProfiles.
 */
export interface GetNetworkFirewallNetworkFirewallPolicyDecryptionProfilesOutputArgs {
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetNetworkFirewallNetworkFirewallPolicyDecryptionProfilesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    networkFirewallPolicyId: pulumi.Input<string>;
}
