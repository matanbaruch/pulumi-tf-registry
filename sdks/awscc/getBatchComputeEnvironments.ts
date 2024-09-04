// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBatchComputeEnvironments(opts?: pulumi.InvokeOptions): Promise<GetBatchComputeEnvironmentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getBatchComputeEnvironments:getBatchComputeEnvironments", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getBatchComputeEnvironments.
 */
export interface GetBatchComputeEnvironmentsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getBatchComputeEnvironmentsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetBatchComputeEnvironmentsResult> {
    return pulumi.output(getBatchComputeEnvironments(opts))
}
