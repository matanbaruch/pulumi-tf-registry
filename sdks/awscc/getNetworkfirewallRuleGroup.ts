// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkfirewallRuleGroup(args: GetNetworkfirewallRuleGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkfirewallRuleGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getNetworkfirewallRuleGroup:getNetworkfirewallRuleGroup", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkfirewallRuleGroup.
 */
export interface GetNetworkfirewallRuleGroupArgs {
    id: string;
}

/**
 * A collection of values returned by getNetworkfirewallRuleGroup.
 */
export interface GetNetworkfirewallRuleGroupResult {
    readonly capacity: number;
    readonly description: string;
    readonly id: string;
    readonly ruleGroup: outputs.GetNetworkfirewallRuleGroupRuleGroup;
    readonly ruleGroupArn: string;
    readonly ruleGroupId: string;
    readonly ruleGroupName: string;
    readonly tags: outputs.GetNetworkfirewallRuleGroupTag[];
    readonly type: string;
}
export function getNetworkfirewallRuleGroupOutput(args: GetNetworkfirewallRuleGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkfirewallRuleGroupResult> {
    return pulumi.output(args).apply((a: any) => getNetworkfirewallRuleGroup(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkfirewallRuleGroup.
 */
export interface GetNetworkfirewallRuleGroupOutputArgs {
    id: pulumi.Input<string>;
}
