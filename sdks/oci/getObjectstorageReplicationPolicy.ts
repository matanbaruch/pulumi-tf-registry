// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getObjectstorageReplicationPolicy(args: GetObjectstorageReplicationPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetObjectstorageReplicationPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getObjectstorageReplicationPolicy:getObjectstorageReplicationPolicy", {
        "bucket": args.bucket,
        "namespace": args.namespace,
        "replicationId": args.replicationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getObjectstorageReplicationPolicy.
 */
export interface GetObjectstorageReplicationPolicyArgs {
    bucket: string;
    namespace: string;
    replicationId: string;
}

/**
 * A collection of values returned by getObjectstorageReplicationPolicy.
 */
export interface GetObjectstorageReplicationPolicyResult {
    readonly bucket: string;
    /**
     * @deprecated Deprecated
     */
    readonly deleteObjectInDestinationBucket: string;
    readonly destinationBucketName: string;
    readonly destinationRegionName: string;
    readonly id: string;
    readonly name: string;
    readonly namespace: string;
    readonly replicationId: string;
    readonly status: string;
    readonly statusMessage: string;
    readonly timeCreated: string;
    readonly timeLastSync: string;
}
export function getObjectstorageReplicationPolicyOutput(args: GetObjectstorageReplicationPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetObjectstorageReplicationPolicyResult> {
    return pulumi.output(args).apply((a: any) => getObjectstorageReplicationPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getObjectstorageReplicationPolicy.
 */
export interface GetObjectstorageReplicationPolicyOutputArgs {
    bucket: pulumi.Input<string>;
    namespace: pulumi.Input<string>;
    replicationId: pulumi.Input<string>;
}
