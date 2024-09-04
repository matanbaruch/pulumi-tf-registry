// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSqsQueueInlinePolicy(args: GetSqsQueueInlinePolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetSqsQueueInlinePolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSqsQueueInlinePolicy:getSqsQueueInlinePolicy", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSqsQueueInlinePolicy.
 */
export interface GetSqsQueueInlinePolicyArgs {
    id: string;
}

/**
 * A collection of values returned by getSqsQueueInlinePolicy.
 */
export interface GetSqsQueueInlinePolicyResult {
    readonly id: string;
    readonly policyDocument: string;
    readonly queue: string;
}
export function getSqsQueueInlinePolicyOutput(args: GetSqsQueueInlinePolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqsQueueInlinePolicyResult> {
    return pulumi.output(args).apply((a: any) => getSqsQueueInlinePolicy(a, opts))
}

/**
 * A collection of arguments for invoking getSqsQueueInlinePolicy.
 */
export interface GetSqsQueueInlinePolicyOutputArgs {
    id: pulumi.Input<string>;
}
