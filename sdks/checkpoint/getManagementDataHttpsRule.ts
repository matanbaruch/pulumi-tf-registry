// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagementDataHttpsRule(args: GetManagementDataHttpsRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementDataHttpsRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementDataHttpsRule:getManagementDataHttpsRule", {
        "id": args.id,
        "layer": args.layer,
        "ruleNumber": args.ruleNumber,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementDataHttpsRule.
 */
export interface GetManagementDataHttpsRuleArgs {
    id?: string;
    layer: string;
    ruleNumber?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementDataHttpsRule.
 */
export interface GetManagementDataHttpsRuleResult {
    readonly action: string;
    readonly blades: string[];
    readonly certificate: string;
    readonly comments: string;
    readonly destinationNegate: boolean;
    readonly destinations: string[];
    readonly enabled: boolean;
    readonly id: string;
    readonly installOns: string[];
    readonly layer: string;
    readonly name: string;
    readonly ruleNumber?: string;
    readonly serviceNegate: boolean;
    readonly services: string[];
    readonly siteCategories: string[];
    readonly siteCategoryNegate: boolean;
    readonly sourceNegate: boolean;
    readonly sources: string[];
    readonly track: string;
    readonly uid?: string;
}
export function getManagementDataHttpsRuleOutput(args: GetManagementDataHttpsRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementDataHttpsRuleResult> {
    return pulumi.output(args).apply((a: any) => getManagementDataHttpsRule(a, opts))
}

/**
 * A collection of arguments for invoking getManagementDataHttpsRule.
 */
export interface GetManagementDataHttpsRuleOutputArgs {
    id?: pulumi.Input<string>;
    layer: pulumi.Input<string>;
    ruleNumber?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
