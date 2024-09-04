// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getS3outpostsBucketPolicy(args: GetS3outpostsBucketPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetS3outpostsBucketPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getS3outpostsBucketPolicy:getS3outpostsBucketPolicy", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getS3outpostsBucketPolicy.
 */
export interface GetS3outpostsBucketPolicyArgs {
    id: string;
}

/**
 * A collection of values returned by getS3outpostsBucketPolicy.
 */
export interface GetS3outpostsBucketPolicyResult {
    readonly bucket: string;
    readonly id: string;
    readonly policyDocument: string;
}
export function getS3outpostsBucketPolicyOutput(args: GetS3outpostsBucketPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetS3outpostsBucketPolicyResult> {
    return pulumi.output(args).apply((a: any) => getS3outpostsBucketPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getS3outpostsBucketPolicy.
 */
export interface GetS3outpostsBucketPolicyOutputArgs {
    id: pulumi.Input<string>;
}
