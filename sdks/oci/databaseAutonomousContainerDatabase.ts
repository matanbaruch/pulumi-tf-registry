// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseAutonomousContainerDatabase extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseAutonomousContainerDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseAutonomousContainerDatabaseState, opts?: pulumi.CustomResourceOptions): DatabaseAutonomousContainerDatabase {
        return new DatabaseAutonomousContainerDatabase(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/databaseAutonomousContainerDatabase:DatabaseAutonomousContainerDatabase';

    /**
     * Returns true if the given object is an instance of DatabaseAutonomousContainerDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseAutonomousContainerDatabase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseAutonomousContainerDatabase.__pulumiType;
    }

    public readonly autonomousExadataInfrastructureId!: pulumi.Output<string>;
    public readonly autonomousVmClusterId!: pulumi.Output<string>;
    public /*out*/ readonly availabilityDomain!: pulumi.Output<string>;
    public /*out*/ readonly availableCpus!: pulumi.Output<number>;
    public readonly backupConfig!: pulumi.Output<outputs.DatabaseAutonomousContainerDatabaseBackupConfig | undefined>;
    public readonly cloudAutonomousVmClusterId!: pulumi.Output<string>;
    public readonly compartmentId!: pulumi.Output<string>;
    public /*out*/ readonly computeModel!: pulumi.Output<string>;
    public readonly databaseSoftwareImageId!: pulumi.Output<string>;
    public readonly dbName!: pulumi.Output<string>;
    public readonly dbSplitThreshold!: pulumi.Output<number>;
    public readonly dbUniqueName!: pulumi.Output<string>;
    public readonly dbVersion!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly distributionAffinity!: pulumi.Output<string>;
    public /*out*/ readonly dstFileVersion!: pulumi.Output<string>;
    public readonly fastStartFailOverLagLimitInSeconds!: pulumi.Output<number>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly infrastructureType!: pulumi.Output<string>;
    public readonly isAutomaticFailoverEnabled!: pulumi.Output<boolean>;
    public readonly isDstFileUpdateEnabled!: pulumi.Output<boolean>;
    public /*out*/ readonly keyHistoryEntries!: pulumi.Output<outputs.DatabaseAutonomousContainerDatabaseKeyHistoryEntry[]>;
    public readonly keyStoreId!: pulumi.Output<string>;
    public /*out*/ readonly keyStoreWalletName!: pulumi.Output<string>;
    public readonly kmsKeyId!: pulumi.Output<string>;
    public /*out*/ readonly largestProvisionableAutonomousDatabaseInCpus!: pulumi.Output<number>;
    public /*out*/ readonly lastMaintenanceRunId!: pulumi.Output<string>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public /*out*/ readonly listOneOffPatches!: pulumi.Output<string[]>;
    public readonly maintenanceWindowDetails!: pulumi.Output<outputs.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails | undefined>;
    public /*out*/ readonly maintenanceWindows!: pulumi.Output<outputs.DatabaseAutonomousContainerDatabaseMaintenanceWindow[]>;
    public /*out*/ readonly memoryPerOracleComputeUnitInGbs!: pulumi.Output<number>;
    public readonly netServicesArchitecture!: pulumi.Output<string>;
    public /*out*/ readonly nextMaintenanceRunId!: pulumi.Output<string>;
    public /*out*/ readonly patchId!: pulumi.Output<string>;
    public readonly patchModel!: pulumi.Output<string>;
    public readonly peerAutonomousContainerDatabaseBackupConfig!: pulumi.Output<outputs.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig | undefined>;
    public readonly peerAutonomousContainerDatabaseCompartmentId!: pulumi.Output<string>;
    public readonly peerAutonomousContainerDatabaseDisplayName!: pulumi.Output<string>;
    public readonly peerAutonomousExadataInfrastructureId!: pulumi.Output<string>;
    public readonly peerAutonomousVmClusterId!: pulumi.Output<string>;
    public readonly peerCloudAutonomousVmClusterId!: pulumi.Output<string>;
    public readonly peerDbUniqueName!: pulumi.Output<string>;
    public readonly protectionMode!: pulumi.Output<string>;
    public /*out*/ readonly provisionableCpuses!: pulumi.Output<number[]>;
    public /*out*/ readonly provisionedCpus!: pulumi.Output<number>;
    public /*out*/ readonly reclaimableCpus!: pulumi.Output<number>;
    public /*out*/ readonly reservedCpus!: pulumi.Output<number>;
    public /*out*/ readonly role!: pulumi.Output<string>;
    public readonly rotateKeyTrigger!: pulumi.Output<boolean | undefined>;
    public readonly serviceLevelAgreementType!: pulumi.Output<string>;
    public readonly standbyMaintenanceBufferInDays!: pulumi.Output<number>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeOfLastBackup!: pulumi.Output<string>;
    public /*out*/ readonly timeSnapshotStandbyRevert!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatabaseAutonomousContainerDatabaseTimeouts | undefined>;
    public /*out*/ readonly totalCpus!: pulumi.Output<number>;
    public readonly vaultId!: pulumi.Output<string>;
    public readonly versionPreference!: pulumi.Output<string>;
    public readonly vmFailoverReservation!: pulumi.Output<number>;

    /**
     * Create a DatabaseAutonomousContainerDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseAutonomousContainerDatabaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseAutonomousContainerDatabaseArgs | DatabaseAutonomousContainerDatabaseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseAutonomousContainerDatabaseState | undefined;
            resourceInputs["autonomousExadataInfrastructureId"] = state ? state.autonomousExadataInfrastructureId : undefined;
            resourceInputs["autonomousVmClusterId"] = state ? state.autonomousVmClusterId : undefined;
            resourceInputs["availabilityDomain"] = state ? state.availabilityDomain : undefined;
            resourceInputs["availableCpus"] = state ? state.availableCpus : undefined;
            resourceInputs["backupConfig"] = state ? state.backupConfig : undefined;
            resourceInputs["cloudAutonomousVmClusterId"] = state ? state.cloudAutonomousVmClusterId : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["computeModel"] = state ? state.computeModel : undefined;
            resourceInputs["databaseSoftwareImageId"] = state ? state.databaseSoftwareImageId : undefined;
            resourceInputs["dbName"] = state ? state.dbName : undefined;
            resourceInputs["dbSplitThreshold"] = state ? state.dbSplitThreshold : undefined;
            resourceInputs["dbUniqueName"] = state ? state.dbUniqueName : undefined;
            resourceInputs["dbVersion"] = state ? state.dbVersion : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["distributionAffinity"] = state ? state.distributionAffinity : undefined;
            resourceInputs["dstFileVersion"] = state ? state.dstFileVersion : undefined;
            resourceInputs["fastStartFailOverLagLimitInSeconds"] = state ? state.fastStartFailOverLagLimitInSeconds : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["infrastructureType"] = state ? state.infrastructureType : undefined;
            resourceInputs["isAutomaticFailoverEnabled"] = state ? state.isAutomaticFailoverEnabled : undefined;
            resourceInputs["isDstFileUpdateEnabled"] = state ? state.isDstFileUpdateEnabled : undefined;
            resourceInputs["keyHistoryEntries"] = state ? state.keyHistoryEntries : undefined;
            resourceInputs["keyStoreId"] = state ? state.keyStoreId : undefined;
            resourceInputs["keyStoreWalletName"] = state ? state.keyStoreWalletName : undefined;
            resourceInputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            resourceInputs["largestProvisionableAutonomousDatabaseInCpus"] = state ? state.largestProvisionableAutonomousDatabaseInCpus : undefined;
            resourceInputs["lastMaintenanceRunId"] = state ? state.lastMaintenanceRunId : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["listOneOffPatches"] = state ? state.listOneOffPatches : undefined;
            resourceInputs["maintenanceWindowDetails"] = state ? state.maintenanceWindowDetails : undefined;
            resourceInputs["maintenanceWindows"] = state ? state.maintenanceWindows : undefined;
            resourceInputs["memoryPerOracleComputeUnitInGbs"] = state ? state.memoryPerOracleComputeUnitInGbs : undefined;
            resourceInputs["netServicesArchitecture"] = state ? state.netServicesArchitecture : undefined;
            resourceInputs["nextMaintenanceRunId"] = state ? state.nextMaintenanceRunId : undefined;
            resourceInputs["patchId"] = state ? state.patchId : undefined;
            resourceInputs["patchModel"] = state ? state.patchModel : undefined;
            resourceInputs["peerAutonomousContainerDatabaseBackupConfig"] = state ? state.peerAutonomousContainerDatabaseBackupConfig : undefined;
            resourceInputs["peerAutonomousContainerDatabaseCompartmentId"] = state ? state.peerAutonomousContainerDatabaseCompartmentId : undefined;
            resourceInputs["peerAutonomousContainerDatabaseDisplayName"] = state ? state.peerAutonomousContainerDatabaseDisplayName : undefined;
            resourceInputs["peerAutonomousExadataInfrastructureId"] = state ? state.peerAutonomousExadataInfrastructureId : undefined;
            resourceInputs["peerAutonomousVmClusterId"] = state ? state.peerAutonomousVmClusterId : undefined;
            resourceInputs["peerCloudAutonomousVmClusterId"] = state ? state.peerCloudAutonomousVmClusterId : undefined;
            resourceInputs["peerDbUniqueName"] = state ? state.peerDbUniqueName : undefined;
            resourceInputs["protectionMode"] = state ? state.protectionMode : undefined;
            resourceInputs["provisionableCpuses"] = state ? state.provisionableCpuses : undefined;
            resourceInputs["provisionedCpus"] = state ? state.provisionedCpus : undefined;
            resourceInputs["reclaimableCpus"] = state ? state.reclaimableCpus : undefined;
            resourceInputs["reservedCpus"] = state ? state.reservedCpus : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["rotateKeyTrigger"] = state ? state.rotateKeyTrigger : undefined;
            resourceInputs["serviceLevelAgreementType"] = state ? state.serviceLevelAgreementType : undefined;
            resourceInputs["standbyMaintenanceBufferInDays"] = state ? state.standbyMaintenanceBufferInDays : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeOfLastBackup"] = state ? state.timeOfLastBackup : undefined;
            resourceInputs["timeSnapshotStandbyRevert"] = state ? state.timeSnapshotStandbyRevert : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["totalCpus"] = state ? state.totalCpus : undefined;
            resourceInputs["vaultId"] = state ? state.vaultId : undefined;
            resourceInputs["versionPreference"] = state ? state.versionPreference : undefined;
            resourceInputs["vmFailoverReservation"] = state ? state.vmFailoverReservation : undefined;
        } else {
            const args = argsOrState as DatabaseAutonomousContainerDatabaseArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.patchModel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'patchModel'");
            }
            resourceInputs["autonomousExadataInfrastructureId"] = args ? args.autonomousExadataInfrastructureId : undefined;
            resourceInputs["autonomousVmClusterId"] = args ? args.autonomousVmClusterId : undefined;
            resourceInputs["backupConfig"] = args ? args.backupConfig : undefined;
            resourceInputs["cloudAutonomousVmClusterId"] = args ? args.cloudAutonomousVmClusterId : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["databaseSoftwareImageId"] = args ? args.databaseSoftwareImageId : undefined;
            resourceInputs["dbName"] = args ? args.dbName : undefined;
            resourceInputs["dbSplitThreshold"] = args ? args.dbSplitThreshold : undefined;
            resourceInputs["dbUniqueName"] = args ? args.dbUniqueName : undefined;
            resourceInputs["dbVersion"] = args ? args.dbVersion : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["distributionAffinity"] = args ? args.distributionAffinity : undefined;
            resourceInputs["fastStartFailOverLagLimitInSeconds"] = args ? args.fastStartFailOverLagLimitInSeconds : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["isAutomaticFailoverEnabled"] = args ? args.isAutomaticFailoverEnabled : undefined;
            resourceInputs["isDstFileUpdateEnabled"] = args ? args.isDstFileUpdateEnabled : undefined;
            resourceInputs["keyStoreId"] = args ? args.keyStoreId : undefined;
            resourceInputs["kmsKeyId"] = args ? args.kmsKeyId : undefined;
            resourceInputs["maintenanceWindowDetails"] = args ? args.maintenanceWindowDetails : undefined;
            resourceInputs["netServicesArchitecture"] = args ? args.netServicesArchitecture : undefined;
            resourceInputs["patchModel"] = args ? args.patchModel : undefined;
            resourceInputs["peerAutonomousContainerDatabaseBackupConfig"] = args ? args.peerAutonomousContainerDatabaseBackupConfig : undefined;
            resourceInputs["peerAutonomousContainerDatabaseCompartmentId"] = args ? args.peerAutonomousContainerDatabaseCompartmentId : undefined;
            resourceInputs["peerAutonomousContainerDatabaseDisplayName"] = args ? args.peerAutonomousContainerDatabaseDisplayName : undefined;
            resourceInputs["peerAutonomousExadataInfrastructureId"] = args ? args.peerAutonomousExadataInfrastructureId : undefined;
            resourceInputs["peerAutonomousVmClusterId"] = args ? args.peerAutonomousVmClusterId : undefined;
            resourceInputs["peerCloudAutonomousVmClusterId"] = args ? args.peerCloudAutonomousVmClusterId : undefined;
            resourceInputs["peerDbUniqueName"] = args ? args.peerDbUniqueName : undefined;
            resourceInputs["protectionMode"] = args ? args.protectionMode : undefined;
            resourceInputs["rotateKeyTrigger"] = args ? args.rotateKeyTrigger : undefined;
            resourceInputs["serviceLevelAgreementType"] = args ? args.serviceLevelAgreementType : undefined;
            resourceInputs["standbyMaintenanceBufferInDays"] = args ? args.standbyMaintenanceBufferInDays : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vaultId"] = args ? args.vaultId : undefined;
            resourceInputs["versionPreference"] = args ? args.versionPreference : undefined;
            resourceInputs["vmFailoverReservation"] = args ? args.vmFailoverReservation : undefined;
            resourceInputs["availabilityDomain"] = undefined /*out*/;
            resourceInputs["availableCpus"] = undefined /*out*/;
            resourceInputs["computeModel"] = undefined /*out*/;
            resourceInputs["dstFileVersion"] = undefined /*out*/;
            resourceInputs["infrastructureType"] = undefined /*out*/;
            resourceInputs["keyHistoryEntries"] = undefined /*out*/;
            resourceInputs["keyStoreWalletName"] = undefined /*out*/;
            resourceInputs["largestProvisionableAutonomousDatabaseInCpus"] = undefined /*out*/;
            resourceInputs["lastMaintenanceRunId"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["listOneOffPatches"] = undefined /*out*/;
            resourceInputs["maintenanceWindows"] = undefined /*out*/;
            resourceInputs["memoryPerOracleComputeUnitInGbs"] = undefined /*out*/;
            resourceInputs["nextMaintenanceRunId"] = undefined /*out*/;
            resourceInputs["patchId"] = undefined /*out*/;
            resourceInputs["provisionableCpuses"] = undefined /*out*/;
            resourceInputs["provisionedCpus"] = undefined /*out*/;
            resourceInputs["reclaimableCpus"] = undefined /*out*/;
            resourceInputs["reservedCpus"] = undefined /*out*/;
            resourceInputs["role"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeOfLastBackup"] = undefined /*out*/;
            resourceInputs["timeSnapshotStandbyRevert"] = undefined /*out*/;
            resourceInputs["totalCpus"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatabaseAutonomousContainerDatabase.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseAutonomousContainerDatabase resources.
 */
export interface DatabaseAutonomousContainerDatabaseState {
    autonomousExadataInfrastructureId?: pulumi.Input<string>;
    autonomousVmClusterId?: pulumi.Input<string>;
    availabilityDomain?: pulumi.Input<string>;
    availableCpus?: pulumi.Input<number>;
    backupConfig?: pulumi.Input<inputs.DatabaseAutonomousContainerDatabaseBackupConfig>;
    cloudAutonomousVmClusterId?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    computeModel?: pulumi.Input<string>;
    databaseSoftwareImageId?: pulumi.Input<string>;
    dbName?: pulumi.Input<string>;
    dbSplitThreshold?: pulumi.Input<number>;
    dbUniqueName?: pulumi.Input<string>;
    dbVersion?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    distributionAffinity?: pulumi.Input<string>;
    dstFileVersion?: pulumi.Input<string>;
    fastStartFailOverLagLimitInSeconds?: pulumi.Input<number>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    infrastructureType?: pulumi.Input<string>;
    isAutomaticFailoverEnabled?: pulumi.Input<boolean>;
    isDstFileUpdateEnabled?: pulumi.Input<boolean>;
    keyHistoryEntries?: pulumi.Input<pulumi.Input<inputs.DatabaseAutonomousContainerDatabaseKeyHistoryEntry>[]>;
    keyStoreId?: pulumi.Input<string>;
    keyStoreWalletName?: pulumi.Input<string>;
    kmsKeyId?: pulumi.Input<string>;
    largestProvisionableAutonomousDatabaseInCpus?: pulumi.Input<number>;
    lastMaintenanceRunId?: pulumi.Input<string>;
    lifecycleDetails?: pulumi.Input<string>;
    listOneOffPatches?: pulumi.Input<pulumi.Input<string>[]>;
    maintenanceWindowDetails?: pulumi.Input<inputs.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails>;
    maintenanceWindows?: pulumi.Input<pulumi.Input<inputs.DatabaseAutonomousContainerDatabaseMaintenanceWindow>[]>;
    memoryPerOracleComputeUnitInGbs?: pulumi.Input<number>;
    netServicesArchitecture?: pulumi.Input<string>;
    nextMaintenanceRunId?: pulumi.Input<string>;
    patchId?: pulumi.Input<string>;
    patchModel?: pulumi.Input<string>;
    peerAutonomousContainerDatabaseBackupConfig?: pulumi.Input<inputs.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig>;
    peerAutonomousContainerDatabaseCompartmentId?: pulumi.Input<string>;
    peerAutonomousContainerDatabaseDisplayName?: pulumi.Input<string>;
    peerAutonomousExadataInfrastructureId?: pulumi.Input<string>;
    peerAutonomousVmClusterId?: pulumi.Input<string>;
    peerCloudAutonomousVmClusterId?: pulumi.Input<string>;
    peerDbUniqueName?: pulumi.Input<string>;
    protectionMode?: pulumi.Input<string>;
    provisionableCpuses?: pulumi.Input<pulumi.Input<number>[]>;
    provisionedCpus?: pulumi.Input<number>;
    reclaimableCpus?: pulumi.Input<number>;
    reservedCpus?: pulumi.Input<number>;
    role?: pulumi.Input<string>;
    rotateKeyTrigger?: pulumi.Input<boolean>;
    serviceLevelAgreementType?: pulumi.Input<string>;
    standbyMaintenanceBufferInDays?: pulumi.Input<number>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeOfLastBackup?: pulumi.Input<string>;
    timeSnapshotStandbyRevert?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseAutonomousContainerDatabaseTimeouts>;
    totalCpus?: pulumi.Input<number>;
    vaultId?: pulumi.Input<string>;
    versionPreference?: pulumi.Input<string>;
    vmFailoverReservation?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a DatabaseAutonomousContainerDatabase resource.
 */
export interface DatabaseAutonomousContainerDatabaseArgs {
    autonomousExadataInfrastructureId?: pulumi.Input<string>;
    autonomousVmClusterId?: pulumi.Input<string>;
    backupConfig?: pulumi.Input<inputs.DatabaseAutonomousContainerDatabaseBackupConfig>;
    cloudAutonomousVmClusterId?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    databaseSoftwareImageId?: pulumi.Input<string>;
    dbName?: pulumi.Input<string>;
    dbSplitThreshold?: pulumi.Input<number>;
    dbUniqueName?: pulumi.Input<string>;
    dbVersion?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName: pulumi.Input<string>;
    distributionAffinity?: pulumi.Input<string>;
    fastStartFailOverLagLimitInSeconds?: pulumi.Input<number>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isAutomaticFailoverEnabled?: pulumi.Input<boolean>;
    isDstFileUpdateEnabled?: pulumi.Input<boolean>;
    keyStoreId?: pulumi.Input<string>;
    kmsKeyId?: pulumi.Input<string>;
    maintenanceWindowDetails?: pulumi.Input<inputs.DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails>;
    netServicesArchitecture?: pulumi.Input<string>;
    patchModel: pulumi.Input<string>;
    peerAutonomousContainerDatabaseBackupConfig?: pulumi.Input<inputs.DatabaseAutonomousContainerDatabasePeerAutonomousContainerDatabaseBackupConfig>;
    peerAutonomousContainerDatabaseCompartmentId?: pulumi.Input<string>;
    peerAutonomousContainerDatabaseDisplayName?: pulumi.Input<string>;
    peerAutonomousExadataInfrastructureId?: pulumi.Input<string>;
    peerAutonomousVmClusterId?: pulumi.Input<string>;
    peerCloudAutonomousVmClusterId?: pulumi.Input<string>;
    peerDbUniqueName?: pulumi.Input<string>;
    protectionMode?: pulumi.Input<string>;
    rotateKeyTrigger?: pulumi.Input<boolean>;
    serviceLevelAgreementType?: pulumi.Input<string>;
    standbyMaintenanceBufferInDays?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.DatabaseAutonomousContainerDatabaseTimeouts>;
    vaultId?: pulumi.Input<string>;
    versionPreference?: pulumi.Input<string>;
    vmFailoverReservation?: pulumi.Input<number>;
}
