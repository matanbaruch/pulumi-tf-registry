// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWafregionalRule(args: GetWafregionalRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetWafregionalRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getWafregionalRule:getWafregionalRule", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWafregionalRule.
 */
export interface GetWafregionalRuleArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getWafregionalRule.
 */
export interface GetWafregionalRuleResult {
    readonly id: string;
    readonly name: string;
}
export function getWafregionalRuleOutput(args: GetWafregionalRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWafregionalRuleResult> {
    return pulumi.output(args).apply((a: any) => getWafregionalRule(a, opts))
}

/**
 * A collection of arguments for invoking getWafregionalRule.
 */
export interface GetWafregionalRuleOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
