// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseVmCluster(args: GetDatabaseVmClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseVmClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseVmCluster:getDatabaseVmCluster", {
        "vmClusterId": args.vmClusterId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseVmCluster.
 */
export interface GetDatabaseVmClusterArgs {
    vmClusterId: string;
}

/**
 * A collection of values returned by getDatabaseVmCluster.
 */
export interface GetDatabaseVmClusterResult {
    readonly availabilityDomain: string;
    readonly compartmentId: string;
    readonly cpuCoreCount: number;
    readonly cpusEnabled: number;
    readonly dataCollectionOptions: outputs.GetDatabaseVmClusterDataCollectionOption[];
    readonly dataStorageSizeInGb: number;
    readonly dataStorageSizeInTbs: number;
    readonly dbNodeStorageSizeInGbs: number;
    readonly dbServers: string[];
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly exadataInfrastructureId: string;
    readonly fileSystemConfigurationDetails: outputs.GetDatabaseVmClusterFileSystemConfigurationDetail[];
    readonly freeformTags: {[key: string]: string};
    readonly giVersion: string;
    readonly id: string;
    readonly isLocalBackupEnabled: boolean;
    readonly isSparseDiskgroupEnabled: boolean;
    readonly lastPatchHistoryEntryId: string;
    readonly licenseModel: string;
    readonly lifecycleDetails: string;
    readonly memorySizeInGbs: number;
    readonly ocpuCount: number;
    readonly ocpusEnabled: number;
    readonly shape: string;
    readonly sshPublicKeys: string[];
    readonly state: string;
    readonly systemVersion: string;
    readonly timeCreated: string;
    readonly timeZone: string;
    readonly vmClusterId: string;
    readonly vmClusterNetworkId: string;
}
export function getDatabaseVmClusterOutput(args: GetDatabaseVmClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseVmClusterResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseVmCluster(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseVmCluster.
 */
export interface GetDatabaseVmClusterOutputArgs {
    vmClusterId: pulumi.Input<string>;
}
