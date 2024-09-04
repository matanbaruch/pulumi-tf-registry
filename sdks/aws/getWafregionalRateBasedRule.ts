// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWafregionalRateBasedRule(args: GetWafregionalRateBasedRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetWafregionalRateBasedRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getWafregionalRateBasedRule:getWafregionalRateBasedRule", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWafregionalRateBasedRule.
 */
export interface GetWafregionalRateBasedRuleArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getWafregionalRateBasedRule.
 */
export interface GetWafregionalRateBasedRuleResult {
    readonly id: string;
    readonly name: string;
}
export function getWafregionalRateBasedRuleOutput(args: GetWafregionalRateBasedRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWafregionalRateBasedRuleResult> {
    return pulumi.output(args).apply((a: any) => getWafregionalRateBasedRule(a, opts))
}

/**
 * A collection of arguments for invoking getWafregionalRateBasedRule.
 */
export interface GetWafregionalRateBasedRuleOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
