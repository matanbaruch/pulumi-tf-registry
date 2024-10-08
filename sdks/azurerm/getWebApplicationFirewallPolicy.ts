// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWebApplicationFirewallPolicy(args: GetWebApplicationFirewallPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetWebApplicationFirewallPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getWebApplicationFirewallPolicy:getWebApplicationFirewallPolicy", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "tags": args.tags,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWebApplicationFirewallPolicy.
 */
export interface GetWebApplicationFirewallPolicyArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    tags?: {[key: string]: string};
    timeouts?: inputs.GetWebApplicationFirewallPolicyTimeouts;
}

/**
 * A collection of values returned by getWebApplicationFirewallPolicy.
 */
export interface GetWebApplicationFirewallPolicyResult {
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly tags?: {[key: string]: string};
    readonly timeouts?: outputs.GetWebApplicationFirewallPolicyTimeouts;
}
export function getWebApplicationFirewallPolicyOutput(args: GetWebApplicationFirewallPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebApplicationFirewallPolicyResult> {
    return pulumi.output(args).apply((a: any) => getWebApplicationFirewallPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getWebApplicationFirewallPolicy.
 */
export interface GetWebApplicationFirewallPolicyOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GetWebApplicationFirewallPolicyTimeoutsArgs>;
}
