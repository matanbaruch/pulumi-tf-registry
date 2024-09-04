// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseDbSystem extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseDbSystem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseDbSystemState, opts?: pulumi.CustomResourceOptions): DatabaseDbSystem {
        return new DatabaseDbSystem(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/databaseDbSystem:DatabaseDbSystem';

    /**
     * Returns true if the given object is an instance of DatabaseDbSystem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseDbSystem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseDbSystem.__pulumiType;
    }

    public readonly availabilityDomain!: pulumi.Output<string>;
    public readonly backupNetworkNsgIds!: pulumi.Output<string[] | undefined>;
    public readonly backupSubnetId!: pulumi.Output<string>;
    public readonly clusterName!: pulumi.Output<string>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly cpuCoreCount!: pulumi.Output<number>;
    public readonly dataCollectionOptions!: pulumi.Output<outputs.DatabaseDbSystemDataCollectionOptions | undefined>;
    public readonly dataStoragePercentage!: pulumi.Output<number>;
    public readonly dataStorageSizeInGb!: pulumi.Output<number>;
    public readonly databaseEdition!: pulumi.Output<string>;
    public readonly dbHome!: pulumi.Output<outputs.DatabaseDbSystemDbHome>;
    public readonly dbSystemOptions!: pulumi.Output<outputs.DatabaseDbSystemDbSystemOptions | undefined>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly diskRedundancy!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly domain!: pulumi.Output<string>;
    public readonly faultDomains!: pulumi.Output<string[]>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly hostname!: pulumi.Output<string>;
    public /*out*/ readonly iormConfigCaches!: pulumi.Output<outputs.DatabaseDbSystemIormConfigCach[]>;
    public readonly kmsKeyId!: pulumi.Output<string>;
    public readonly kmsKeyVersionId!: pulumi.Output<string>;
    public /*out*/ readonly lastMaintenanceRunId!: pulumi.Output<string>;
    public /*out*/ readonly lastPatchHistoryEntryId!: pulumi.Output<string>;
    public readonly licenseModel!: pulumi.Output<string>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public /*out*/ readonly listenerPort!: pulumi.Output<number>;
    public readonly maintenanceWindowDetails!: pulumi.Output<outputs.DatabaseDbSystemMaintenanceWindowDetails | undefined>;
    public /*out*/ readonly maintenanceWindows!: pulumi.Output<outputs.DatabaseDbSystemMaintenanceWindow[]>;
    public /*out*/ readonly memorySizeInGbs!: pulumi.Output<number>;
    public /*out*/ readonly nextMaintenanceRunId!: pulumi.Output<string>;
    public readonly nodeCount!: pulumi.Output<number>;
    public readonly nsgIds!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly osVersion!: pulumi.Output<string>;
    public /*out*/ readonly pointInTimeDataDiskCloneTimestamp!: pulumi.Output<string>;
    public readonly privateIp!: pulumi.Output<string>;
    public readonly recoStorageSizeInGb!: pulumi.Output<number>;
    public /*out*/ readonly scanDnsName!: pulumi.Output<string>;
    public /*out*/ readonly scanDnsRecordId!: pulumi.Output<string>;
    public /*out*/ readonly scanIpIds!: pulumi.Output<string[]>;
    public readonly shape!: pulumi.Output<string>;
    public readonly source!: pulumi.Output<string>;
    public readonly sourceDbSystemId!: pulumi.Output<string>;
    public readonly sparseDiskgroup!: pulumi.Output<boolean>;
    public readonly sshPublicKeys!: pulumi.Output<string[]>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly storageVolumePerformanceMode!: pulumi.Output<string>;
    public readonly subnetId!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeZone!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatabaseDbSystemTimeouts | undefined>;
    public /*out*/ readonly version!: pulumi.Output<string>;
    public /*out*/ readonly vipIds!: pulumi.Output<string[]>;
    public /*out*/ readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a DatabaseDbSystem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseDbSystemArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseDbSystemArgs | DatabaseDbSystemState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseDbSystemState | undefined;
            resourceInputs["availabilityDomain"] = state ? state.availabilityDomain : undefined;
            resourceInputs["backupNetworkNsgIds"] = state ? state.backupNetworkNsgIds : undefined;
            resourceInputs["backupSubnetId"] = state ? state.backupSubnetId : undefined;
            resourceInputs["clusterName"] = state ? state.clusterName : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["cpuCoreCount"] = state ? state.cpuCoreCount : undefined;
            resourceInputs["dataCollectionOptions"] = state ? state.dataCollectionOptions : undefined;
            resourceInputs["dataStoragePercentage"] = state ? state.dataStoragePercentage : undefined;
            resourceInputs["dataStorageSizeInGb"] = state ? state.dataStorageSizeInGb : undefined;
            resourceInputs["databaseEdition"] = state ? state.databaseEdition : undefined;
            resourceInputs["dbHome"] = state ? state.dbHome : undefined;
            resourceInputs["dbSystemOptions"] = state ? state.dbSystemOptions : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["diskRedundancy"] = state ? state.diskRedundancy : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["faultDomains"] = state ? state.faultDomains : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["iormConfigCaches"] = state ? state.iormConfigCaches : undefined;
            resourceInputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            resourceInputs["kmsKeyVersionId"] = state ? state.kmsKeyVersionId : undefined;
            resourceInputs["lastMaintenanceRunId"] = state ? state.lastMaintenanceRunId : undefined;
            resourceInputs["lastPatchHistoryEntryId"] = state ? state.lastPatchHistoryEntryId : undefined;
            resourceInputs["licenseModel"] = state ? state.licenseModel : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["listenerPort"] = state ? state.listenerPort : undefined;
            resourceInputs["maintenanceWindowDetails"] = state ? state.maintenanceWindowDetails : undefined;
            resourceInputs["maintenanceWindows"] = state ? state.maintenanceWindows : undefined;
            resourceInputs["memorySizeInGbs"] = state ? state.memorySizeInGbs : undefined;
            resourceInputs["nextMaintenanceRunId"] = state ? state.nextMaintenanceRunId : undefined;
            resourceInputs["nodeCount"] = state ? state.nodeCount : undefined;
            resourceInputs["nsgIds"] = state ? state.nsgIds : undefined;
            resourceInputs["osVersion"] = state ? state.osVersion : undefined;
            resourceInputs["pointInTimeDataDiskCloneTimestamp"] = state ? state.pointInTimeDataDiskCloneTimestamp : undefined;
            resourceInputs["privateIp"] = state ? state.privateIp : undefined;
            resourceInputs["recoStorageSizeInGb"] = state ? state.recoStorageSizeInGb : undefined;
            resourceInputs["scanDnsName"] = state ? state.scanDnsName : undefined;
            resourceInputs["scanDnsRecordId"] = state ? state.scanDnsRecordId : undefined;
            resourceInputs["scanIpIds"] = state ? state.scanIpIds : undefined;
            resourceInputs["shape"] = state ? state.shape : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["sourceDbSystemId"] = state ? state.sourceDbSystemId : undefined;
            resourceInputs["sparseDiskgroup"] = state ? state.sparseDiskgroup : undefined;
            resourceInputs["sshPublicKeys"] = state ? state.sshPublicKeys : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["storageVolumePerformanceMode"] = state ? state.storageVolumePerformanceMode : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeZone"] = state ? state.timeZone : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
            resourceInputs["vipIds"] = state ? state.vipIds : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as DatabaseDbSystemArgs | undefined;
            if ((!args || args.availabilityDomain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityDomain'");
            }
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.dbHome === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dbHome'");
            }
            if ((!args || args.hostname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostname'");
            }
            if ((!args || args.shape === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shape'");
            }
            if ((!args || args.sshPublicKeys === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sshPublicKeys'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            resourceInputs["availabilityDomain"] = args ? args.availabilityDomain : undefined;
            resourceInputs["backupNetworkNsgIds"] = args ? args.backupNetworkNsgIds : undefined;
            resourceInputs["backupSubnetId"] = args ? args.backupSubnetId : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["cpuCoreCount"] = args ? args.cpuCoreCount : undefined;
            resourceInputs["dataCollectionOptions"] = args ? args.dataCollectionOptions : undefined;
            resourceInputs["dataStoragePercentage"] = args ? args.dataStoragePercentage : undefined;
            resourceInputs["dataStorageSizeInGb"] = args ? args.dataStorageSizeInGb : undefined;
            resourceInputs["databaseEdition"] = args ? args.databaseEdition : undefined;
            resourceInputs["dbHome"] = args ? args.dbHome : undefined;
            resourceInputs["dbSystemOptions"] = args ? args.dbSystemOptions : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["diskRedundancy"] = args ? args.diskRedundancy : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["faultDomains"] = args ? args.faultDomains : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["kmsKeyId"] = args ? args.kmsKeyId : undefined;
            resourceInputs["kmsKeyVersionId"] = args ? args.kmsKeyVersionId : undefined;
            resourceInputs["licenseModel"] = args ? args.licenseModel : undefined;
            resourceInputs["maintenanceWindowDetails"] = args ? args.maintenanceWindowDetails : undefined;
            resourceInputs["nodeCount"] = args ? args.nodeCount : undefined;
            resourceInputs["nsgIds"] = args ? args.nsgIds : undefined;
            resourceInputs["privateIp"] = args ? args.privateIp : undefined;
            resourceInputs["recoStorageSizeInGb"] = args ? args.recoStorageSizeInGb : undefined;
            resourceInputs["shape"] = args ? args.shape : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["sourceDbSystemId"] = args ? args.sourceDbSystemId : undefined;
            resourceInputs["sparseDiskgroup"] = args ? args.sparseDiskgroup : undefined;
            resourceInputs["sshPublicKeys"] = args ? args.sshPublicKeys : undefined;
            resourceInputs["storageVolumePerformanceMode"] = args ? args.storageVolumePerformanceMode : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["timeZone"] = args ? args.timeZone : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["iormConfigCaches"] = undefined /*out*/;
            resourceInputs["lastMaintenanceRunId"] = undefined /*out*/;
            resourceInputs["lastPatchHistoryEntryId"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["listenerPort"] = undefined /*out*/;
            resourceInputs["maintenanceWindows"] = undefined /*out*/;
            resourceInputs["memorySizeInGbs"] = undefined /*out*/;
            resourceInputs["nextMaintenanceRunId"] = undefined /*out*/;
            resourceInputs["osVersion"] = undefined /*out*/;
            resourceInputs["pointInTimeDataDiskCloneTimestamp"] = undefined /*out*/;
            resourceInputs["scanDnsName"] = undefined /*out*/;
            resourceInputs["scanDnsRecordId"] = undefined /*out*/;
            resourceInputs["scanIpIds"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
            resourceInputs["vipIds"] = undefined /*out*/;
            resourceInputs["zoneId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatabaseDbSystem.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseDbSystem resources.
 */
export interface DatabaseDbSystemState {
    availabilityDomain?: pulumi.Input<string>;
    backupNetworkNsgIds?: pulumi.Input<pulumi.Input<string>[]>;
    backupSubnetId?: pulumi.Input<string>;
    clusterName?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    cpuCoreCount?: pulumi.Input<number>;
    dataCollectionOptions?: pulumi.Input<inputs.DatabaseDbSystemDataCollectionOptions>;
    dataStoragePercentage?: pulumi.Input<number>;
    dataStorageSizeInGb?: pulumi.Input<number>;
    databaseEdition?: pulumi.Input<string>;
    dbHome?: pulumi.Input<inputs.DatabaseDbSystemDbHome>;
    dbSystemOptions?: pulumi.Input<inputs.DatabaseDbSystemDbSystemOptions>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    diskRedundancy?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    domain?: pulumi.Input<string>;
    faultDomains?: pulumi.Input<pulumi.Input<string>[]>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    hostname?: pulumi.Input<string>;
    iormConfigCaches?: pulumi.Input<pulumi.Input<inputs.DatabaseDbSystemIormConfigCach>[]>;
    kmsKeyId?: pulumi.Input<string>;
    kmsKeyVersionId?: pulumi.Input<string>;
    lastMaintenanceRunId?: pulumi.Input<string>;
    lastPatchHistoryEntryId?: pulumi.Input<string>;
    licenseModel?: pulumi.Input<string>;
    lifecycleDetails?: pulumi.Input<string>;
    listenerPort?: pulumi.Input<number>;
    maintenanceWindowDetails?: pulumi.Input<inputs.DatabaseDbSystemMaintenanceWindowDetails>;
    maintenanceWindows?: pulumi.Input<pulumi.Input<inputs.DatabaseDbSystemMaintenanceWindow>[]>;
    memorySizeInGbs?: pulumi.Input<number>;
    nextMaintenanceRunId?: pulumi.Input<string>;
    nodeCount?: pulumi.Input<number>;
    nsgIds?: pulumi.Input<pulumi.Input<string>[]>;
    osVersion?: pulumi.Input<string>;
    pointInTimeDataDiskCloneTimestamp?: pulumi.Input<string>;
    privateIp?: pulumi.Input<string>;
    recoStorageSizeInGb?: pulumi.Input<number>;
    scanDnsName?: pulumi.Input<string>;
    scanDnsRecordId?: pulumi.Input<string>;
    scanIpIds?: pulumi.Input<pulumi.Input<string>[]>;
    shape?: pulumi.Input<string>;
    source?: pulumi.Input<string>;
    sourceDbSystemId?: pulumi.Input<string>;
    sparseDiskgroup?: pulumi.Input<boolean>;
    sshPublicKeys?: pulumi.Input<pulumi.Input<string>[]>;
    state?: pulumi.Input<string>;
    storageVolumePerformanceMode?: pulumi.Input<string>;
    subnetId?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeZone?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseDbSystemTimeouts>;
    version?: pulumi.Input<string>;
    vipIds?: pulumi.Input<pulumi.Input<string>[]>;
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DatabaseDbSystem resource.
 */
export interface DatabaseDbSystemArgs {
    availabilityDomain: pulumi.Input<string>;
    backupNetworkNsgIds?: pulumi.Input<pulumi.Input<string>[]>;
    backupSubnetId?: pulumi.Input<string>;
    clusterName?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    cpuCoreCount?: pulumi.Input<number>;
    dataCollectionOptions?: pulumi.Input<inputs.DatabaseDbSystemDataCollectionOptions>;
    dataStoragePercentage?: pulumi.Input<number>;
    dataStorageSizeInGb?: pulumi.Input<number>;
    databaseEdition?: pulumi.Input<string>;
    dbHome: pulumi.Input<inputs.DatabaseDbSystemDbHome>;
    dbSystemOptions?: pulumi.Input<inputs.DatabaseDbSystemDbSystemOptions>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    diskRedundancy?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    domain?: pulumi.Input<string>;
    faultDomains?: pulumi.Input<pulumi.Input<string>[]>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    hostname: pulumi.Input<string>;
    kmsKeyId?: pulumi.Input<string>;
    kmsKeyVersionId?: pulumi.Input<string>;
    licenseModel?: pulumi.Input<string>;
    maintenanceWindowDetails?: pulumi.Input<inputs.DatabaseDbSystemMaintenanceWindowDetails>;
    nodeCount?: pulumi.Input<number>;
    nsgIds?: pulumi.Input<pulumi.Input<string>[]>;
    privateIp?: pulumi.Input<string>;
    recoStorageSizeInGb?: pulumi.Input<number>;
    shape: pulumi.Input<string>;
    source?: pulumi.Input<string>;
    sourceDbSystemId?: pulumi.Input<string>;
    sparseDiskgroup?: pulumi.Input<boolean>;
    sshPublicKeys: pulumi.Input<pulumi.Input<string>[]>;
    storageVolumePerformanceMode?: pulumi.Input<string>;
    subnetId: pulumi.Input<string>;
    timeZone?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseDbSystemTimeouts>;
}
