// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getObsBuckets(args?: GetObsBucketsArgs, opts?: pulumi.InvokeOptions): Promise<GetObsBucketsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getObsBuckets:getObsBuckets", {
        "createdBy": args.createdBy,
        "endModifiedDt": args.endModifiedDt,
        "id": args.id,
        "objectStorageBucketIds": args.objectStorageBucketIds,
        "objectStorageBucketName": args.objectStorageBucketName,
        "objectStorageBucketPurposes": args.objectStorageBucketPurposes,
        "objectStorageBucketState": args.objectStorageBucketState,
        "objectStorageBucketStates": args.objectStorageBucketStates,
        "objectStorageBucketUserPurpose": args.objectStorageBucketUserPurpose,
        "objectStorageId": args.objectStorageId,
        "objectStorageQuotaId": args.objectStorageQuotaId,
        "objectStorageSystemBucketEnabled": args.objectStorageSystemBucketEnabled,
        "page": args.page,
        "serviceZoneId": args.serviceZoneId,
        "size": args.size,
        "sorts": args.sorts,
        "startModifiedDt": args.startModifiedDt,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getObsBuckets.
 */
export interface GetObsBucketsArgs {
    createdBy?: string;
    endModifiedDt?: string;
    id?: string;
    objectStorageBucketIds?: string[];
    objectStorageBucketName?: string;
    objectStorageBucketPurposes?: string[];
    objectStorageBucketState?: string;
    objectStorageBucketStates?: string[];
    objectStorageBucketUserPurpose?: string;
    objectStorageId?: string;
    objectStorageQuotaId?: string;
    objectStorageSystemBucketEnabled?: boolean;
    page?: number;
    serviceZoneId?: string;
    size?: number;
    sorts?: string[];
    startModifiedDt?: string;
}

/**
 * A collection of values returned by getObsBuckets.
 */
export interface GetObsBucketsResult {
    readonly contents: outputs.GetObsBucketsContent[];
    readonly createdBy?: string;
    readonly endModifiedDt?: string;
    readonly id: string;
    readonly objectStorageBucketIds?: string[];
    readonly objectStorageBucketName?: string;
    readonly objectStorageBucketPurposes?: string[];
    readonly objectStorageBucketState?: string;
    readonly objectStorageBucketStates?: string[];
    readonly objectStorageBucketUserPurpose?: string;
    readonly objectStorageId?: string;
    readonly objectStorageQuotaId?: string;
    readonly objectStorageSystemBucketEnabled?: boolean;
    readonly page?: number;
    readonly serviceZoneId?: string;
    readonly size?: number;
    readonly sorts?: string[];
    readonly startModifiedDt?: string;
    readonly totalCount: number;
}
export function getObsBucketsOutput(args?: GetObsBucketsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetObsBucketsResult> {
    return pulumi.output(args).apply((a: any) => getObsBuckets(a, opts))
}

/**
 * A collection of arguments for invoking getObsBuckets.
 */
export interface GetObsBucketsOutputArgs {
    createdBy?: pulumi.Input<string>;
    endModifiedDt?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    objectStorageBucketIds?: pulumi.Input<pulumi.Input<string>[]>;
    objectStorageBucketName?: pulumi.Input<string>;
    objectStorageBucketPurposes?: pulumi.Input<pulumi.Input<string>[]>;
    objectStorageBucketState?: pulumi.Input<string>;
    objectStorageBucketStates?: pulumi.Input<pulumi.Input<string>[]>;
    objectStorageBucketUserPurpose?: pulumi.Input<string>;
    objectStorageId?: pulumi.Input<string>;
    objectStorageQuotaId?: pulumi.Input<string>;
    objectStorageSystemBucketEnabled?: pulumi.Input<boolean>;
    page?: pulumi.Input<number>;
    serviceZoneId?: pulumi.Input<string>;
    size?: pulumi.Input<number>;
    sorts?: pulumi.Input<pulumi.Input<string>[]>;
    startModifiedDt?: pulumi.Input<string>;
}
