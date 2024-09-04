// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTcrReplicationInstanceSyncStatus(args: GetTcrReplicationInstanceSyncStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetTcrReplicationInstanceSyncStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getTcrReplicationInstanceSyncStatus:getTcrReplicationInstanceSyncStatus", {
        "id": args.id,
        "registryId": args.registryId,
        "replicationRegionId": args.replicationRegionId,
        "replicationRegistryId": args.replicationRegistryId,
        "resultOutputFile": args.resultOutputFile,
        "showReplicationLog": args.showReplicationLog,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTcrReplicationInstanceSyncStatus.
 */
export interface GetTcrReplicationInstanceSyncStatusArgs {
    id?: string;
    registryId: string;
    replicationRegionId?: number;
    replicationRegistryId: string;
    resultOutputFile?: string;
    showReplicationLog?: boolean;
}

/**
 * A collection of values returned by getTcrReplicationInstanceSyncStatus.
 */
export interface GetTcrReplicationInstanceSyncStatusResult {
    readonly id: string;
    readonly registryId: string;
    readonly replicationLogs: outputs.GetTcrReplicationInstanceSyncStatusReplicationLog[];
    readonly replicationRegionId?: number;
    readonly replicationRegistryId: string;
    readonly replicationStatus: string;
    readonly replicationTime: string;
    readonly resultOutputFile?: string;
    readonly showReplicationLog?: boolean;
}
export function getTcrReplicationInstanceSyncStatusOutput(args: GetTcrReplicationInstanceSyncStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTcrReplicationInstanceSyncStatusResult> {
    return pulumi.output(args).apply((a: any) => getTcrReplicationInstanceSyncStatus(a, opts))
}

/**
 * A collection of arguments for invoking getTcrReplicationInstanceSyncStatus.
 */
export interface GetTcrReplicationInstanceSyncStatusOutputArgs {
    id?: pulumi.Input<string>;
    registryId: pulumi.Input<string>;
    replicationRegionId?: pulumi.Input<number>;
    replicationRegistryId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    showReplicationLog?: pulumi.Input<boolean>;
}
