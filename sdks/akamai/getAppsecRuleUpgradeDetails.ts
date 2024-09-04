// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAppsecRuleUpgradeDetails(args: GetAppsecRuleUpgradeDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetAppsecRuleUpgradeDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getAppsecRuleUpgradeDetails:getAppsecRuleUpgradeDetails", {
        "configId": args.configId,
        "id": args.id,
        "securityPolicyId": args.securityPolicyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppsecRuleUpgradeDetails.
 */
export interface GetAppsecRuleUpgradeDetailsArgs {
    configId: number;
    id?: string;
    securityPolicyId: string;
}

/**
 * A collection of values returned by getAppsecRuleUpgradeDetails.
 */
export interface GetAppsecRuleUpgradeDetailsResult {
    readonly configId: number;
    readonly id: string;
    readonly json: string;
    readonly outputText: string;
    readonly securityPolicyId: string;
}
export function getAppsecRuleUpgradeDetailsOutput(args: GetAppsecRuleUpgradeDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppsecRuleUpgradeDetailsResult> {
    return pulumi.output(args).apply((a: any) => getAppsecRuleUpgradeDetails(a, opts))
}

/**
 * A collection of arguments for invoking getAppsecRuleUpgradeDetails.
 */
export interface GetAppsecRuleUpgradeDetailsOutputArgs {
    configId: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    securityPolicyId: pulumi.Input<string>;
}
