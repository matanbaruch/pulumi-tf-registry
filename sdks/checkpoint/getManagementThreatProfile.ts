// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getManagementThreatProfile(args?: GetManagementThreatProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementThreatProfileResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementThreatProfile:getManagementThreatProfile", {
        "id": args.id,
        "name": args.name,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementThreatProfile.
 */
export interface GetManagementThreatProfileArgs {
    id?: string;
    name?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementThreatProfile.
 */
export interface GetManagementThreatProfileResult {
    readonly activateProtectionsByExtendedAttributes: outputs.GetManagementThreatProfileActivateProtectionsByExtendedAttribute[];
    readonly activeProtectionsPerformanceImpact: string;
    readonly activeProtectionsSeverity: string;
    readonly antiBot: boolean;
    readonly antiVirus: boolean;
    readonly color: string;
    readonly comments: string;
    readonly confidenceLevelHigh: string;
    readonly confidenceLevelLow: string;
    readonly confidenceLevelMedium: string;
    readonly deactivateProtectionsByExtendedAttributes: outputs.GetManagementThreatProfileDeactivateProtectionsByExtendedAttribute[];
    readonly id: string;
    readonly indicatorOverrides: outputs.GetManagementThreatProfileIndicatorOverride[];
    readonly ips: boolean;
    readonly ipsSettings: {[key: string]: string};
    readonly maliciousMailPolicySettings: {[key: string]: string};
    readonly name?: string;
    readonly overrides: outputs.GetManagementThreatProfileOverride[];
    readonly scanMaliciousLinks: {[key: string]: string};
    readonly tags: string[];
    readonly threatEmulation: boolean;
    readonly uid?: string;
    readonly useExtendedAttributes: boolean;
    readonly useIndicators: boolean;
}
export function getManagementThreatProfileOutput(args?: GetManagementThreatProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementThreatProfileResult> {
    return pulumi.output(args).apply((a: any) => getManagementThreatProfile(a, opts))
}

/**
 * A collection of arguments for invoking getManagementThreatProfile.
 */
export interface GetManagementThreatProfileOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
