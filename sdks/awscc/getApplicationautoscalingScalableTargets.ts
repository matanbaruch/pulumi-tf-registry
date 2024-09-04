// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getApplicationautoscalingScalableTargets(opts?: pulumi.InvokeOptions): Promise<GetApplicationautoscalingScalableTargetsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getApplicationautoscalingScalableTargets:getApplicationautoscalingScalableTargets", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getApplicationautoscalingScalableTargets.
 */
export interface GetApplicationautoscalingScalableTargetsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getApplicationautoscalingScalableTargetsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationautoscalingScalableTargetsResult> {
    return pulumi.output(getApplicationautoscalingScalableTargets(opts))
}
