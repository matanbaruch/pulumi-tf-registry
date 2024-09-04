// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAutoScalingGroupPolicy(args: GetAutoScalingGroupPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetAutoScalingGroupPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getAutoScalingGroupPolicy:getAutoScalingGroupPolicy", {
        "asgId": args.asgId,
        "id": args.id,
        "policyId": args.policyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAutoScalingGroupPolicy.
 */
export interface GetAutoScalingGroupPolicyArgs {
    asgId: string;
    id?: string;
    policyId: string;
}

/**
 * A collection of values returned by getAutoScalingGroupPolicy.
 */
export interface GetAutoScalingGroupPolicyResult {
    readonly asgId: string;
    readonly blockId: string;
    readonly comparisonOperator: string;
    readonly cooldownSeconds: number;
    readonly createdBy: string;
    readonly createdDt: string;
    readonly evaluationMinutes: number;
    readonly id: string;
    readonly metricMethod: string;
    readonly metricType: string;
    readonly modifiedBy: string;
    readonly modifiedDt: string;
    readonly policyId: string;
    readonly policyName: string;
    readonly policyState: string;
    readonly projectId: string;
    readonly scaleMethod: string;
    readonly scaleType: string;
    readonly scaleValue: number;
    readonly serviceZoneId: string;
    readonly threshold: string;
    readonly thresholdUnit: string;
}
export function getAutoScalingGroupPolicyOutput(args: GetAutoScalingGroupPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAutoScalingGroupPolicyResult> {
    return pulumi.output(args).apply((a: any) => getAutoScalingGroupPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getAutoScalingGroupPolicy.
 */
export interface GetAutoScalingGroupPolicyOutputArgs {
    asgId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    policyId: pulumi.Input<string>;
}
