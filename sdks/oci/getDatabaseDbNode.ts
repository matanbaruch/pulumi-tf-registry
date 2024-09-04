// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDatabaseDbNode(args: GetDatabaseDbNodeArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseDbNodeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseDbNode:getDatabaseDbNode", {
        "dbNodeId": args.dbNodeId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseDbNode.
 */
export interface GetDatabaseDbNodeArgs {
    dbNodeId: string;
}

/**
 * A collection of values returned by getDatabaseDbNode.
 */
export interface GetDatabaseDbNodeResult {
    readonly additionalDetails: string;
    readonly backupIpId: string;
    readonly backupVnic2id: string;
    readonly backupVnicId: string;
    readonly cpuCoreCount: number;
    readonly dbNodeId: string;
    readonly dbNodeStorageSizeInGbs: number;
    readonly dbServerId: string;
    readonly dbSystemId: string;
    readonly definedTags: {[key: string]: string};
    readonly faultDomain: string;
    readonly freeformTags: {[key: string]: string};
    readonly hostIpId: string;
    readonly hostname: string;
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly maintenanceType: string;
    readonly memorySizeInGbs: number;
    readonly softwareStorageSizeInGb: number;
    readonly state: string;
    readonly timeCreated: string;
    readonly timeMaintenanceWindowEnd: string;
    readonly timeMaintenanceWindowStart: string;
    readonly totalCpuCoreCount: number;
    readonly vnic2id: string;
    readonly vnicId: string;
}
export function getDatabaseDbNodeOutput(args: GetDatabaseDbNodeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseDbNodeResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseDbNode(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseDbNode.
 */
export interface GetDatabaseDbNodeOutputArgs {
    dbNodeId: pulumi.Input<string>;
}
