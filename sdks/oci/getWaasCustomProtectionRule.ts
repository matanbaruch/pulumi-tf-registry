// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWaasCustomProtectionRule(args: GetWaasCustomProtectionRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetWaasCustomProtectionRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getWaasCustomProtectionRule:getWaasCustomProtectionRule", {
        "customProtectionRuleId": args.customProtectionRuleId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWaasCustomProtectionRule.
 */
export interface GetWaasCustomProtectionRuleArgs {
    customProtectionRuleId: string;
}

/**
 * A collection of values returned by getWaasCustomProtectionRule.
 */
export interface GetWaasCustomProtectionRuleResult {
    readonly compartmentId: string;
    readonly customProtectionRuleId: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly modSecurityRuleIds: string[];
    readonly state: string;
    readonly template: string;
    readonly timeCreated: string;
}
export function getWaasCustomProtectionRuleOutput(args: GetWaasCustomProtectionRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWaasCustomProtectionRuleResult> {
    return pulumi.output(args).apply((a: any) => getWaasCustomProtectionRule(a, opts))
}

/**
 * A collection of arguments for invoking getWaasCustomProtectionRule.
 */
export interface GetWaasCustomProtectionRuleOutputArgs {
    customProtectionRuleId: pulumi.Input<string>;
}
