// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getComputeRegionDisk(args: GetComputeRegionDiskArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeRegionDiskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getComputeRegionDisk:getComputeRegionDisk", {
        "id": args.id,
        "name": args.name,
        "project": args.project,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComputeRegionDisk.
 */
export interface GetComputeRegionDiskArgs {
    id?: string;
    name: string;
    project?: string;
    region?: string;
}

/**
 * A collection of values returned by getComputeRegionDisk.
 */
export interface GetComputeRegionDiskResult {
    readonly asyncPrimaryDisks: outputs.GetComputeRegionDiskAsyncPrimaryDisk[];
    readonly creationTimestamp: string;
    readonly description: string;
    readonly diskEncryptionKeys: outputs.GetComputeRegionDiskDiskEncryptionKey[];
    readonly effectiveLabels: {[key: string]: string};
    readonly guestOsFeatures: outputs.GetComputeRegionDiskGuestOsFeature[];
    readonly id: string;
    readonly labelFingerprint: string;
    readonly labels: {[key: string]: string};
    readonly lastAttachTimestamp: string;
    readonly lastDetachTimestamp: string;
    readonly licenses: string[];
    readonly name: string;
    readonly physicalBlockSizeBytes: number;
    readonly project?: string;
    readonly region?: string;
    readonly replicaZones: string[];
    readonly selfLink: string;
    readonly size: number;
    readonly snapshot: string;
    readonly sourceDisk: string;
    readonly sourceDiskId: string;
    readonly sourceSnapshotEncryptionKeys: outputs.GetComputeRegionDiskSourceSnapshotEncryptionKey[];
    readonly sourceSnapshotId: string;
    readonly terraformLabels: {[key: string]: string};
    readonly type: string;
    readonly users: string[];
}
export function getComputeRegionDiskOutput(args: GetComputeRegionDiskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeRegionDiskResult> {
    return pulumi.output(args).apply((a: any) => getComputeRegionDisk(a, opts))
}

/**
 * A collection of arguments for invoking getComputeRegionDisk.
 */
export interface GetComputeRegionDiskOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
