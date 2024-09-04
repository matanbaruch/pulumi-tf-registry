// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getS3objectlambdaAccessPointPolicy(args: GetS3objectlambdaAccessPointPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetS3objectlambdaAccessPointPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getS3objectlambdaAccessPointPolicy:getS3objectlambdaAccessPointPolicy", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getS3objectlambdaAccessPointPolicy.
 */
export interface GetS3objectlambdaAccessPointPolicyArgs {
    id: string;
}

/**
 * A collection of values returned by getS3objectlambdaAccessPointPolicy.
 */
export interface GetS3objectlambdaAccessPointPolicyResult {
    readonly id: string;
    readonly objectLambdaAccessPoint: string;
    readonly policyDocument: string;
}
export function getS3objectlambdaAccessPointPolicyOutput(args: GetS3objectlambdaAccessPointPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetS3objectlambdaAccessPointPolicyResult> {
    return pulumi.output(args).apply((a: any) => getS3objectlambdaAccessPointPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getS3objectlambdaAccessPointPolicy.
 */
export interface GetS3objectlambdaAccessPointPolicyOutputArgs {
    id: pulumi.Input<string>;
}
