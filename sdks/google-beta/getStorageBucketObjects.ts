// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageBucketObjects(args: GetStorageBucketObjectsArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageBucketObjectsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getStorageBucketObjects:getStorageBucketObjects", {
        "bucket": args.bucket,
        "id": args.id,
        "matchGlob": args.matchGlob,
        "prefix": args.prefix,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageBucketObjects.
 */
export interface GetStorageBucketObjectsArgs {
    bucket: string;
    id?: string;
    matchGlob?: string;
    prefix?: string;
}

/**
 * A collection of values returned by getStorageBucketObjects.
 */
export interface GetStorageBucketObjectsResult {
    readonly bucket: string;
    readonly bucketObjects: outputs.GetStorageBucketObjectsBucketObject[];
    readonly id: string;
    readonly matchGlob?: string;
    readonly prefix?: string;
}
export function getStorageBucketObjectsOutput(args: GetStorageBucketObjectsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageBucketObjectsResult> {
    return pulumi.output(args).apply((a: any) => getStorageBucketObjects(a, opts))
}

/**
 * A collection of arguments for invoking getStorageBucketObjects.
 */
export interface GetStorageBucketObjectsOutputArgs {
    bucket: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    matchGlob?: pulumi.Input<string>;
    prefix?: pulumi.Input<string>;
}
