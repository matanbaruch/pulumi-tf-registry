// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseAutonomousVmCluster(args: GetDatabaseAutonomousVmClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseAutonomousVmClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseAutonomousVmCluster:getDatabaseAutonomousVmCluster", {
        "autonomousVmClusterId": args.autonomousVmClusterId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseAutonomousVmCluster.
 */
export interface GetDatabaseAutonomousVmClusterArgs {
    autonomousVmClusterId: string;
}

/**
 * A collection of values returned by getDatabaseAutonomousVmCluster.
 */
export interface GetDatabaseAutonomousVmClusterResult {
    readonly autonomousDataStoragePercentage: number;
    readonly autonomousDataStorageSizeInTbs: number;
    readonly autonomousVmClusterId: string;
    readonly availableAutonomousDataStorageSizeInTbs: number;
    readonly availableContainerDatabases: number;
    readonly availableCpus: number;
    readonly availableDataStorageSizeInTbs: number;
    readonly compartmentId: string;
    readonly computeModel: string;
    readonly cpuCoreCountPerNode: number;
    readonly cpuPercentage: number;
    readonly cpusEnabled: number;
    readonly cpusLowestScaledValue: number;
    readonly dataStorageSizeInGb: number;
    readonly dataStorageSizeInTbs: number;
    readonly dbNodeStorageSizeInGbs: number;
    readonly dbServers: string[];
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly exadataInfrastructureId: string;
    readonly exadataStorageInTbsLowestScaledValue: number;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly isLocalBackupEnabled: boolean;
    readonly isMtlsEnabled: boolean;
    readonly lastMaintenanceRunId: string;
    readonly licenseModel: string;
    readonly lifecycleDetails: string;
    readonly maintenanceWindowDetails: outputs.GetDatabaseAutonomousVmClusterMaintenanceWindowDetail[];
    readonly maintenanceWindows: outputs.GetDatabaseAutonomousVmClusterMaintenanceWindow[];
    readonly maxAcdsLowestScaledValue: number;
    readonly memoryPerOracleComputeUnitInGbs: number;
    readonly memorySizeInGbs: number;
    readonly nextMaintenanceRunId: string;
    readonly nodeCount: number;
    readonly nonProvisionableAutonomousContainerDatabases: number;
    readonly ocpusEnabled: number;
    readonly provisionableAutonomousContainerDatabases: number;
    readonly provisionedAutonomousContainerDatabases: number;
    readonly provisionedCpus: number;
    readonly reclaimableCpus: number;
    readonly reservedCpus: number;
    readonly scanListenerPortNonTls: number;
    readonly scanListenerPortTls: number;
    readonly state: string;
    readonly timeCreated: string;
    readonly timeDatabaseSslCertificateExpires: string;
    readonly timeOrdsCertificateExpires: string;
    readonly timeZone: string;
    readonly totalAutonomousDataStorageInTbs: number;
    readonly totalContainerDatabases: number;
    readonly vmClusterNetworkId: string;
}
export function getDatabaseAutonomousVmClusterOutput(args: GetDatabaseAutonomousVmClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseAutonomousVmClusterResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseAutonomousVmCluster(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseAutonomousVmCluster.
 */
export interface GetDatabaseAutonomousVmClusterOutputArgs {
    autonomousVmClusterId: pulumi.Input<string>;
}
