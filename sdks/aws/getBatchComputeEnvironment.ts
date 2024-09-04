// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBatchComputeEnvironment(args: GetBatchComputeEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetBatchComputeEnvironmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getBatchComputeEnvironment:getBatchComputeEnvironment", {
        "computeEnvironmentName": args.computeEnvironmentName,
        "id": args.id,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBatchComputeEnvironment.
 */
export interface GetBatchComputeEnvironmentArgs {
    computeEnvironmentName: string;
    id?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getBatchComputeEnvironment.
 */
export interface GetBatchComputeEnvironmentResult {
    readonly arn: string;
    readonly computeEnvironmentName: string;
    readonly ecsClusterArn: string;
    readonly id: string;
    readonly serviceRole: string;
    readonly state: string;
    readonly status: string;
    readonly statusReason: string;
    readonly tags: {[key: string]: string};
    readonly type: string;
    readonly updatePolicies: outputs.GetBatchComputeEnvironmentUpdatePolicy[];
}
export function getBatchComputeEnvironmentOutput(args: GetBatchComputeEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBatchComputeEnvironmentResult> {
    return pulumi.output(args).apply((a: any) => getBatchComputeEnvironment(a, opts))
}

/**
 * A collection of arguments for invoking getBatchComputeEnvironment.
 */
export interface GetBatchComputeEnvironmentOutputArgs {
    computeEnvironmentName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
