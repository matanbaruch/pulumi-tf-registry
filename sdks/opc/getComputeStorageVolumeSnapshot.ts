// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getComputeStorageVolumeSnapshot(args: GetComputeStorageVolumeSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeStorageVolumeSnapshotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("opc:index/getComputeStorageVolumeSnapshot:getComputeStorageVolumeSnapshot", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComputeStorageVolumeSnapshot.
 */
export interface GetComputeStorageVolumeSnapshotArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getComputeStorageVolumeSnapshot.
 */
export interface GetComputeStorageVolumeSnapshotResult {
    readonly account: string;
    readonly collocated: boolean;
    readonly description: string;
    readonly id: string;
    readonly machineImageName: string;
    readonly name: string;
    readonly parentVolumeBootable: boolean;
    readonly platform: string;
    readonly property: string;
    readonly size: string;
    readonly snapshotId: string;
    readonly snapshotTimestamp: string;
    readonly startTimestamp: string;
    readonly status: string;
    readonly statusDetail: string;
    readonly statusTimestamp: string;
    readonly tags: string[];
    readonly uri: string;
    readonly volumeName: string;
}
export function getComputeStorageVolumeSnapshotOutput(args: GetComputeStorageVolumeSnapshotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeStorageVolumeSnapshotResult> {
    return pulumi.output(args).apply((a: any) => getComputeStorageVolumeSnapshot(a, opts))
}

/**
 * A collection of arguments for invoking getComputeStorageVolumeSnapshot.
 */
export interface GetComputeStorageVolumeSnapshotOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
