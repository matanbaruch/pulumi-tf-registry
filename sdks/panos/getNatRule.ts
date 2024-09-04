// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNatRule(args: GetNatRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNatRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getNatRule:getNatRule", {
        "deviceGroup": args.deviceGroup,
        "id": args.id,
        "name": args.name,
        "rulebase": args.rulebase,
        "vsys": args.vsys,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNatRule.
 */
export interface GetNatRuleArgs {
    deviceGroup?: string;
    id?: string;
    name: string;
    rulebase?: string;
    vsys?: string;
}

/**
 * A collection of values returned by getNatRule.
 */
export interface GetNatRuleResult {
    readonly deviceGroup?: string;
    readonly id: string;
    readonly name: string;
    readonly rulebase?: string;
    readonly rules: outputs.GetNatRuleRule[];
    readonly vsys?: string;
}
export function getNatRuleOutput(args: GetNatRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNatRuleResult> {
    return pulumi.output(args).apply((a: any) => getNatRule(a, opts))
}

/**
 * A collection of arguments for invoking getNatRule.
 */
export interface GetNatRuleOutputArgs {
    deviceGroup?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    rulebase?: pulumi.Input<string>;
    vsys?: pulumi.Input<string>;
}
