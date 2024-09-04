// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMatchingRule(args: GetMatchingRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetMatchingRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getMatchingRule:getMatchingRule", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMatchingRule.
 */
export interface GetMatchingRuleArgs {
    name: string;
}

/**
 * A collection of values returned by getMatchingRule.
 */
export interface GetMatchingRuleResult {
    readonly enabled: boolean;
    readonly id: string;
    readonly name: string;
    readonly type: string;
}
export function getMatchingRuleOutput(args: GetMatchingRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMatchingRuleResult> {
    return pulumi.output(args).apply((a: any) => getMatchingRule(a, opts))
}

/**
 * A collection of arguments for invoking getMatchingRule.
 */
export interface GetMatchingRuleOutputArgs {
    name: pulumi.Input<string>;
}
