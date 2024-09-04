// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getS3BucketPolicy(args: GetS3BucketPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetS3BucketPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ionoscloud:index/getS3BucketPolicy:getS3BucketPolicy", {
        "bucket": args.bucket,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getS3BucketPolicy.
 */
export interface GetS3BucketPolicyArgs {
    bucket: string;
}

/**
 * A collection of values returned by getS3BucketPolicy.
 */
export interface GetS3BucketPolicyResult {
    readonly bucket: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly policy: string;
}
export function getS3BucketPolicyOutput(args: GetS3BucketPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetS3BucketPolicyResult> {
    return pulumi.output(args).apply((a: any) => getS3BucketPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getS3BucketPolicy.
 */
export interface GetS3BucketPolicyOutputArgs {
    bucket: pulumi.Input<string>;
}
