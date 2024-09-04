// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPubsubTopicIamPolicy(args: GetPubsubTopicIamPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPubsubTopicIamPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getPubsubTopicIamPolicy:getPubsubTopicIamPolicy", {
        "id": args.id,
        "project": args.project,
        "topic": args.topic,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPubsubTopicIamPolicy.
 */
export interface GetPubsubTopicIamPolicyArgs {
    id?: string;
    project?: string;
    topic: string;
}

/**
 * A collection of values returned by getPubsubTopicIamPolicy.
 */
export interface GetPubsubTopicIamPolicyResult {
    readonly etag: string;
    readonly id: string;
    readonly policyData: string;
    readonly project: string;
    readonly topic: string;
}
export function getPubsubTopicIamPolicyOutput(args: GetPubsubTopicIamPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPubsubTopicIamPolicyResult> {
    return pulumi.output(args).apply((a: any) => getPubsubTopicIamPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getPubsubTopicIamPolicy.
 */
export interface GetPubsubTopicIamPolicyOutputArgs {
    id?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    topic: pulumi.Input<string>;
}
