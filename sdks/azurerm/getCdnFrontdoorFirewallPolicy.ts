// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCdnFrontdoorFirewallPolicy(args: GetCdnFrontdoorFirewallPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetCdnFrontdoorFirewallPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getCdnFrontdoorFirewallPolicy:getCdnFrontdoorFirewallPolicy", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCdnFrontdoorFirewallPolicy.
 */
export interface GetCdnFrontdoorFirewallPolicyArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetCdnFrontdoorFirewallPolicyTimeouts;
}

/**
 * A collection of values returned by getCdnFrontdoorFirewallPolicy.
 */
export interface GetCdnFrontdoorFirewallPolicyResult {
    readonly enabled: boolean;
    readonly frontendEndpointIds: string[];
    readonly id: string;
    readonly mode: string;
    readonly name: string;
    readonly redirectUrl: string;
    readonly resourceGroupName: string;
    readonly skuName: string;
    readonly timeouts?: outputs.GetCdnFrontdoorFirewallPolicyTimeouts;
}
export function getCdnFrontdoorFirewallPolicyOutput(args: GetCdnFrontdoorFirewallPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCdnFrontdoorFirewallPolicyResult> {
    return pulumi.output(args).apply((a: any) => getCdnFrontdoorFirewallPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getCdnFrontdoorFirewallPolicy.
 */
export interface GetCdnFrontdoorFirewallPolicyOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetCdnFrontdoorFirewallPolicyTimeoutsArgs>;
}
