// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDmrClusterCertMatchingRuleCondition(args: GetDmrClusterCertMatchingRuleConditionArgs, opts?: pulumi.InvokeOptions): Promise<GetDmrClusterCertMatchingRuleConditionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebrokerappliance:index/getDmrClusterCertMatchingRuleCondition:getDmrClusterCertMatchingRuleCondition", {
        "dmrClusterName": args.dmrClusterName,
        "ruleName": args.ruleName,
        "source": args.source,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDmrClusterCertMatchingRuleCondition.
 */
export interface GetDmrClusterCertMatchingRuleConditionArgs {
    dmrClusterName: string;
    ruleName: string;
    source: string;
}

/**
 * A collection of values returned by getDmrClusterCertMatchingRuleCondition.
 */
export interface GetDmrClusterCertMatchingRuleConditionResult {
    readonly attribute: string;
    readonly dmrClusterName: string;
    readonly expression: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly ruleName: string;
    readonly source: string;
}
export function getDmrClusterCertMatchingRuleConditionOutput(args: GetDmrClusterCertMatchingRuleConditionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDmrClusterCertMatchingRuleConditionResult> {
    return pulumi.output(args).apply((a: any) => getDmrClusterCertMatchingRuleCondition(a, opts))
}

/**
 * A collection of arguments for invoking getDmrClusterCertMatchingRuleCondition.
 */
export interface GetDmrClusterCertMatchingRuleConditionOutputArgs {
    dmrClusterName: pulumi.Input<string>;
    ruleName: pulumi.Input<string>;
    source: pulumi.Input<string>;
}
