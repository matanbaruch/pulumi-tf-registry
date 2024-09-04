// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNdbSnapshot(args: GetNdbSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetNdbSnapshotResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nutanix:index/getNdbSnapshot:getNdbSnapshot", {
        "filters": args.filters,
        "snapshotId": args.snapshotId,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNdbSnapshot.
 */
export interface GetNdbSnapshotArgs {
    filters?: inputs.GetNdbSnapshotFilter[];
    snapshotId: string;
    tags?: inputs.GetNdbSnapshotTag[];
}

/**
 * A collection of values returned by getNdbSnapshot.
 */
export interface GetNdbSnapshotResult {
    readonly appInfoVersion: string;
    readonly applicableTypes: string[];
    readonly databaseNodeId: string;
    readonly databaseSnapshot: boolean;
    readonly dateCreated: string;
    readonly dateModified: string;
    readonly dbserverId: string;
    readonly dbserverIp: string;
    readonly dbserverName: string;
    readonly dbserverStorageMetadataVersion: number;
    readonly description: string;
    readonly filters?: outputs.GetNdbSnapshotFilter[];
    readonly fromTimestamp: string;
    readonly id: string;
    readonly lcmConfigs: outputs.GetNdbSnapshotLcmConfig[];
    readonly name: string;
    readonly nxClusterId: string;
    readonly parentSnapshot: boolean;
    readonly parentSnapshotId: string;
    readonly processed: boolean;
    readonly properties: outputs.GetNdbSnapshotProperty[];
    readonly protectionDomainId: string;
    readonly replicatedSnapshots: string[];
    readonly santized: boolean;
    readonly santizedFromSnapshotId: string;
    readonly santizedSnapshots: string;
    readonly snapshotFamily: string;
    readonly snapshotId: string;
    readonly snapshotSize: number;
    readonly snapshotTimestamp: string;
    readonly snapshotTimestampDate: number;
    readonly snapshotUuid: string;
    readonly softwareDatabaseSnapshot: boolean;
    readonly softwareSnapshot: string;
    readonly softwareSnapshotId: string;
    readonly status: string;
    readonly tags?: outputs.GetNdbSnapshotTag[];
    readonly timeMachineId: string;
    readonly timezone: string;
    readonly toTimestamp: string;
    readonly type: string;
}
export function getNdbSnapshotOutput(args: GetNdbSnapshotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNdbSnapshotResult> {
    return pulumi.output(args).apply((a: any) => getNdbSnapshot(a, opts))
}

/**
 * A collection of arguments for invoking getNdbSnapshot.
 */
export interface GetNdbSnapshotOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetNdbSnapshotFilterArgs>[]>;
    snapshotId: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNdbSnapshotTagArgs>[]>;
}
