// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageBucketObject(args?: GetStorageBucketObjectArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageBucketObjectResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getStorageBucketObject:getStorageBucketObject", {
        "bucket": args.bucket,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageBucketObject.
 */
export interface GetStorageBucketObjectArgs {
    bucket?: string;
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getStorageBucketObject.
 */
export interface GetStorageBucketObjectResult {
    readonly bucket?: string;
    readonly cacheControl: string;
    readonly content: string;
    readonly contentDisposition: string;
    readonly contentEncoding: string;
    readonly contentLanguage: string;
    readonly contentType: string;
    readonly crc32c: string;
    readonly customerEncryptions: outputs.GetStorageBucketObjectCustomerEncryption[];
    readonly detectMd5hash: string;
    readonly eventBasedHold: boolean;
    readonly generation: number;
    readonly id: string;
    readonly kmsKeyName: string;
    readonly md5hash: string;
    readonly mediaLink: string;
    readonly metadata: {[key: string]: string};
    readonly name?: string;
    readonly outputName: string;
    readonly retentions: outputs.GetStorageBucketObjectRetention[];
    readonly selfLink: string;
    readonly source: string;
    readonly storageClass: string;
    readonly temporaryHold: boolean;
}
export function getStorageBucketObjectOutput(args?: GetStorageBucketObjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageBucketObjectResult> {
    return pulumi.output(args).apply((a: any) => getStorageBucketObject(a, opts))
}

/**
 * A collection of arguments for invoking getStorageBucketObject.
 */
export interface GetStorageBucketObjectOutputArgs {
    bucket?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
