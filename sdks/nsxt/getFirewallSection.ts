// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFirewallSection(args?: GetFirewallSectionArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallSectionResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nsxt:index/getFirewallSection:getFirewallSection", {
        "description": args.description,
        "displayName": args.displayName,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirewallSection.
 */
export interface GetFirewallSectionArgs {
    description?: string;
    displayName?: string;
    id?: string;
}

/**
 * A collection of values returned by getFirewallSection.
 */
export interface GetFirewallSectionResult {
    readonly description: string;
    readonly displayName: string;
    readonly id: string;
}
export function getFirewallSectionOutput(args?: GetFirewallSectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallSectionResult> {
    return pulumi.output(args).apply((a: any) => getFirewallSection(a, opts))
}

/**
 * A collection of arguments for invoking getFirewallSection.
 */
export interface GetFirewallSectionOutputArgs {
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
