// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class StoragePool extends pulumi.CustomResource {
    /**
     * Get an existing StoragePool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StoragePoolState, opts?: pulumi.CustomResourceOptions): StoragePool {
        return new StoragePool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'powerflex:index/storagePool:StoragePool';

    /**
     * Returns true if the given object is an instance of StoragePool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StoragePool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StoragePool.__pulumiType;
    }

    /**
     * Set the threshold for triggering capacity usage critical-priority alert.
     */
    public readonly capacityAlertCriticalThreshold!: pulumi.Output<number>;
    /**
     * Set the threshold for triggering capacity usage high-priority alert.
     */
    public readonly capacityAlertHighThreshold!: pulumi.Output<number>;
    /**
     * Enable or disable fragmentation in the Storage Pool
     */
    public readonly fragmentation!: pulumi.Output<boolean>;
    /**
     * Media Type of the storage pool. Valid values are `HDD`, `SSD` and `Transitional`
     */
    public readonly mediaType!: pulumi.Output<string>;
    /**
     * Name of the Storage pool
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The maximum bandwidth of protected maintenance mode migration I/Os, in KB per second, per device
     */
    public readonly protectedMaintenanceModeBwLimitPerDeviceInKbps!: pulumi.Output<number>;
    /**
     * Set the I/O priority policy for protected maintenance mode for a specific Storage Pool. Valid values are `unlimited`,
     * `limitNumOfConcurrentIos` and `favorAppIos`
     */
    public readonly protectedMaintenanceModeIoPriorityPolicy!: pulumi.Output<string>;
    /**
     * The maximum number of concurrent protected maintenance mode migration I/Os per device
     */
    public readonly protectedMaintenanceModeNumOfConcurrentIosPerDevice!: pulumi.Output<number>;
    /**
     * ID of the Protection Domain under which the storage pool will be created. Conflicts with `protection_domain_name`.
     * Cannot be updated.
     */
    public readonly protectionDomainId!: pulumi.Output<string>;
    /**
     * Name of the Protection Domain under which the storage pool will be created. Conflicts with `protection_domain_id`.
     * Cannot be updated.
     */
    public readonly protectionDomainName!: pulumi.Output<string | undefined>;
    /**
     * The maximum bandwidth of rebalance I/Os, in KB/s, per device
     */
    public readonly rebalanceBwLimitPerDeviceInKbps!: pulumi.Output<number>;
    /**
     * Enable or disable rebalancing in the specified Storage Pool
     */
    public readonly rebalanceEnabled!: pulumi.Output<boolean>;
    /**
     * Policy to use for rebalance I/O priority. Valid values are `unlimited`, `limitNumOfConcurrentIos` and `favorAppIos`
     */
    public readonly rebalanceIoPriorityPolicy!: pulumi.Output<string>;
    /**
     * The maximum number of concurrent rebalance I/Os per device
     */
    public readonly rebalanceNumOfConcurrentIosPerDevice!: pulumi.Output<number>;
    /**
     * Enable or disable rebuilds in the specified Storage Pool
     */
    public readonly rebuildEnabled!: pulumi.Output<boolean>;
    /**
     * Maximum number of concurrent rebuild and rebalance activities on SDSs in the Storage Pool
     */
    public readonly rebuildRebalanceParallelism!: pulumi.Output<number>;
    /**
     * This defines the maximum percentage of Storage Pool capacity that can be used by replication for the journal. Before
     * deleting the storage pool, this has to be set to 0.
     */
    public readonly replicationJournalCapacity!: pulumi.Output<number>;
    /**
     * Sets the Read RAM Cache write handling mode of the specified Storage Pool
     */
    public readonly rmCacheWriteHandlingMode!: pulumi.Output<string>;
    /**
     * Sets the spare capacity reservation policy
     */
    public readonly sparePercentage!: pulumi.Output<number>;
    /**
     * Enable/Disable RFcache on a specific storage pool
     */
    public readonly useRfcache!: pulumi.Output<boolean>;
    /**
     * Enable/Disable RMcache on a specific storage pool
     */
    public readonly useRmcache!: pulumi.Output<boolean>;
    /**
     * The maximum bandwidth of V-Tree migration IOs, in KB per second, per device
     */
    public readonly vtreeMigrationBwLimitPerDeviceInKbps!: pulumi.Output<number>;
    /**
     * Set the I/O priority policy for V-Tree migration for a specific Storage Pool. Valid values are `limitNumOfConcurrentIos`
     * and `favorAppIos`
     */
    public readonly vtreeMigrationIoPriorityPolicy!: pulumi.Output<string>;
    /**
     * The maximum number of concurrent V-Tree migration I/Os per device
     */
    public readonly vtreeMigrationNumOfConcurrentIosPerDevice!: pulumi.Output<number>;
    /**
     * Enable/Disable padding policy on a specific storage pool
     */
    public readonly zeroPaddingEnabled!: pulumi.Output<boolean>;

    /**
     * Create a StoragePool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StoragePoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StoragePoolArgs | StoragePoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StoragePoolState | undefined;
            resourceInputs["capacityAlertCriticalThreshold"] = state ? state.capacityAlertCriticalThreshold : undefined;
            resourceInputs["capacityAlertHighThreshold"] = state ? state.capacityAlertHighThreshold : undefined;
            resourceInputs["fragmentation"] = state ? state.fragmentation : undefined;
            resourceInputs["mediaType"] = state ? state.mediaType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["protectedMaintenanceModeBwLimitPerDeviceInKbps"] = state ? state.protectedMaintenanceModeBwLimitPerDeviceInKbps : undefined;
            resourceInputs["protectedMaintenanceModeIoPriorityPolicy"] = state ? state.protectedMaintenanceModeIoPriorityPolicy : undefined;
            resourceInputs["protectedMaintenanceModeNumOfConcurrentIosPerDevice"] = state ? state.protectedMaintenanceModeNumOfConcurrentIosPerDevice : undefined;
            resourceInputs["protectionDomainId"] = state ? state.protectionDomainId : undefined;
            resourceInputs["protectionDomainName"] = state ? state.protectionDomainName : undefined;
            resourceInputs["rebalanceBwLimitPerDeviceInKbps"] = state ? state.rebalanceBwLimitPerDeviceInKbps : undefined;
            resourceInputs["rebalanceEnabled"] = state ? state.rebalanceEnabled : undefined;
            resourceInputs["rebalanceIoPriorityPolicy"] = state ? state.rebalanceIoPriorityPolicy : undefined;
            resourceInputs["rebalanceNumOfConcurrentIosPerDevice"] = state ? state.rebalanceNumOfConcurrentIosPerDevice : undefined;
            resourceInputs["rebuildEnabled"] = state ? state.rebuildEnabled : undefined;
            resourceInputs["rebuildRebalanceParallelism"] = state ? state.rebuildRebalanceParallelism : undefined;
            resourceInputs["replicationJournalCapacity"] = state ? state.replicationJournalCapacity : undefined;
            resourceInputs["rmCacheWriteHandlingMode"] = state ? state.rmCacheWriteHandlingMode : undefined;
            resourceInputs["sparePercentage"] = state ? state.sparePercentage : undefined;
            resourceInputs["useRfcache"] = state ? state.useRfcache : undefined;
            resourceInputs["useRmcache"] = state ? state.useRmcache : undefined;
            resourceInputs["vtreeMigrationBwLimitPerDeviceInKbps"] = state ? state.vtreeMigrationBwLimitPerDeviceInKbps : undefined;
            resourceInputs["vtreeMigrationIoPriorityPolicy"] = state ? state.vtreeMigrationIoPriorityPolicy : undefined;
            resourceInputs["vtreeMigrationNumOfConcurrentIosPerDevice"] = state ? state.vtreeMigrationNumOfConcurrentIosPerDevice : undefined;
            resourceInputs["zeroPaddingEnabled"] = state ? state.zeroPaddingEnabled : undefined;
        } else {
            const args = argsOrState as StoragePoolArgs | undefined;
            if ((!args || args.mediaType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mediaType'");
            }
            resourceInputs["capacityAlertCriticalThreshold"] = args ? args.capacityAlertCriticalThreshold : undefined;
            resourceInputs["capacityAlertHighThreshold"] = args ? args.capacityAlertHighThreshold : undefined;
            resourceInputs["fragmentation"] = args ? args.fragmentation : undefined;
            resourceInputs["mediaType"] = args ? args.mediaType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["protectedMaintenanceModeBwLimitPerDeviceInKbps"] = args ? args.protectedMaintenanceModeBwLimitPerDeviceInKbps : undefined;
            resourceInputs["protectedMaintenanceModeIoPriorityPolicy"] = args ? args.protectedMaintenanceModeIoPriorityPolicy : undefined;
            resourceInputs["protectedMaintenanceModeNumOfConcurrentIosPerDevice"] = args ? args.protectedMaintenanceModeNumOfConcurrentIosPerDevice : undefined;
            resourceInputs["protectionDomainId"] = args ? args.protectionDomainId : undefined;
            resourceInputs["protectionDomainName"] = args ? args.protectionDomainName : undefined;
            resourceInputs["rebalanceBwLimitPerDeviceInKbps"] = args ? args.rebalanceBwLimitPerDeviceInKbps : undefined;
            resourceInputs["rebalanceEnabled"] = args ? args.rebalanceEnabled : undefined;
            resourceInputs["rebalanceIoPriorityPolicy"] = args ? args.rebalanceIoPriorityPolicy : undefined;
            resourceInputs["rebalanceNumOfConcurrentIosPerDevice"] = args ? args.rebalanceNumOfConcurrentIosPerDevice : undefined;
            resourceInputs["rebuildEnabled"] = args ? args.rebuildEnabled : undefined;
            resourceInputs["rebuildRebalanceParallelism"] = args ? args.rebuildRebalanceParallelism : undefined;
            resourceInputs["replicationJournalCapacity"] = args ? args.replicationJournalCapacity : undefined;
            resourceInputs["rmCacheWriteHandlingMode"] = args ? args.rmCacheWriteHandlingMode : undefined;
            resourceInputs["sparePercentage"] = args ? args.sparePercentage : undefined;
            resourceInputs["useRfcache"] = args ? args.useRfcache : undefined;
            resourceInputs["useRmcache"] = args ? args.useRmcache : undefined;
            resourceInputs["vtreeMigrationBwLimitPerDeviceInKbps"] = args ? args.vtreeMigrationBwLimitPerDeviceInKbps : undefined;
            resourceInputs["vtreeMigrationIoPriorityPolicy"] = args ? args.vtreeMigrationIoPriorityPolicy : undefined;
            resourceInputs["vtreeMigrationNumOfConcurrentIosPerDevice"] = args ? args.vtreeMigrationNumOfConcurrentIosPerDevice : undefined;
            resourceInputs["zeroPaddingEnabled"] = args ? args.zeroPaddingEnabled : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StoragePool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StoragePool resources.
 */
export interface StoragePoolState {
    /**
     * Set the threshold for triggering capacity usage critical-priority alert.
     */
    capacityAlertCriticalThreshold?: pulumi.Input<number>;
    /**
     * Set the threshold for triggering capacity usage high-priority alert.
     */
    capacityAlertHighThreshold?: pulumi.Input<number>;
    /**
     * Enable or disable fragmentation in the Storage Pool
     */
    fragmentation?: pulumi.Input<boolean>;
    /**
     * Media Type of the storage pool. Valid values are `HDD`, `SSD` and `Transitional`
     */
    mediaType?: pulumi.Input<string>;
    /**
     * Name of the Storage pool
     */
    name?: pulumi.Input<string>;
    /**
     * The maximum bandwidth of protected maintenance mode migration I/Os, in KB per second, per device
     */
    protectedMaintenanceModeBwLimitPerDeviceInKbps?: pulumi.Input<number>;
    /**
     * Set the I/O priority policy for protected maintenance mode for a specific Storage Pool. Valid values are `unlimited`,
     * `limitNumOfConcurrentIos` and `favorAppIos`
     */
    protectedMaintenanceModeIoPriorityPolicy?: pulumi.Input<string>;
    /**
     * The maximum number of concurrent protected maintenance mode migration I/Os per device
     */
    protectedMaintenanceModeNumOfConcurrentIosPerDevice?: pulumi.Input<number>;
    /**
     * ID of the Protection Domain under which the storage pool will be created. Conflicts with `protection_domain_name`.
     * Cannot be updated.
     */
    protectionDomainId?: pulumi.Input<string>;
    /**
     * Name of the Protection Domain under which the storage pool will be created. Conflicts with `protection_domain_id`.
     * Cannot be updated.
     */
    protectionDomainName?: pulumi.Input<string>;
    /**
     * The maximum bandwidth of rebalance I/Os, in KB/s, per device
     */
    rebalanceBwLimitPerDeviceInKbps?: pulumi.Input<number>;
    /**
     * Enable or disable rebalancing in the specified Storage Pool
     */
    rebalanceEnabled?: pulumi.Input<boolean>;
    /**
     * Policy to use for rebalance I/O priority. Valid values are `unlimited`, `limitNumOfConcurrentIos` and `favorAppIos`
     */
    rebalanceIoPriorityPolicy?: pulumi.Input<string>;
    /**
     * The maximum number of concurrent rebalance I/Os per device
     */
    rebalanceNumOfConcurrentIosPerDevice?: pulumi.Input<number>;
    /**
     * Enable or disable rebuilds in the specified Storage Pool
     */
    rebuildEnabled?: pulumi.Input<boolean>;
    /**
     * Maximum number of concurrent rebuild and rebalance activities on SDSs in the Storage Pool
     */
    rebuildRebalanceParallelism?: pulumi.Input<number>;
    /**
     * This defines the maximum percentage of Storage Pool capacity that can be used by replication for the journal. Before
     * deleting the storage pool, this has to be set to 0.
     */
    replicationJournalCapacity?: pulumi.Input<number>;
    /**
     * Sets the Read RAM Cache write handling mode of the specified Storage Pool
     */
    rmCacheWriteHandlingMode?: pulumi.Input<string>;
    /**
     * Sets the spare capacity reservation policy
     */
    sparePercentage?: pulumi.Input<number>;
    /**
     * Enable/Disable RFcache on a specific storage pool
     */
    useRfcache?: pulumi.Input<boolean>;
    /**
     * Enable/Disable RMcache on a specific storage pool
     */
    useRmcache?: pulumi.Input<boolean>;
    /**
     * The maximum bandwidth of V-Tree migration IOs, in KB per second, per device
     */
    vtreeMigrationBwLimitPerDeviceInKbps?: pulumi.Input<number>;
    /**
     * Set the I/O priority policy for V-Tree migration for a specific Storage Pool. Valid values are `limitNumOfConcurrentIos`
     * and `favorAppIos`
     */
    vtreeMigrationIoPriorityPolicy?: pulumi.Input<string>;
    /**
     * The maximum number of concurrent V-Tree migration I/Os per device
     */
    vtreeMigrationNumOfConcurrentIosPerDevice?: pulumi.Input<number>;
    /**
     * Enable/Disable padding policy on a specific storage pool
     */
    zeroPaddingEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a StoragePool resource.
 */
export interface StoragePoolArgs {
    /**
     * Set the threshold for triggering capacity usage critical-priority alert.
     */
    capacityAlertCriticalThreshold?: pulumi.Input<number>;
    /**
     * Set the threshold for triggering capacity usage high-priority alert.
     */
    capacityAlertHighThreshold?: pulumi.Input<number>;
    /**
     * Enable or disable fragmentation in the Storage Pool
     */
    fragmentation?: pulumi.Input<boolean>;
    /**
     * Media Type of the storage pool. Valid values are `HDD`, `SSD` and `Transitional`
     */
    mediaType: pulumi.Input<string>;
    /**
     * Name of the Storage pool
     */
    name?: pulumi.Input<string>;
    /**
     * The maximum bandwidth of protected maintenance mode migration I/Os, in KB per second, per device
     */
    protectedMaintenanceModeBwLimitPerDeviceInKbps?: pulumi.Input<number>;
    /**
     * Set the I/O priority policy for protected maintenance mode for a specific Storage Pool. Valid values are `unlimited`,
     * `limitNumOfConcurrentIos` and `favorAppIos`
     */
    protectedMaintenanceModeIoPriorityPolicy?: pulumi.Input<string>;
    /**
     * The maximum number of concurrent protected maintenance mode migration I/Os per device
     */
    protectedMaintenanceModeNumOfConcurrentIosPerDevice?: pulumi.Input<number>;
    /**
     * ID of the Protection Domain under which the storage pool will be created. Conflicts with `protection_domain_name`.
     * Cannot be updated.
     */
    protectionDomainId?: pulumi.Input<string>;
    /**
     * Name of the Protection Domain under which the storage pool will be created. Conflicts with `protection_domain_id`.
     * Cannot be updated.
     */
    protectionDomainName?: pulumi.Input<string>;
    /**
     * The maximum bandwidth of rebalance I/Os, in KB/s, per device
     */
    rebalanceBwLimitPerDeviceInKbps?: pulumi.Input<number>;
    /**
     * Enable or disable rebalancing in the specified Storage Pool
     */
    rebalanceEnabled?: pulumi.Input<boolean>;
    /**
     * Policy to use for rebalance I/O priority. Valid values are `unlimited`, `limitNumOfConcurrentIos` and `favorAppIos`
     */
    rebalanceIoPriorityPolicy?: pulumi.Input<string>;
    /**
     * The maximum number of concurrent rebalance I/Os per device
     */
    rebalanceNumOfConcurrentIosPerDevice?: pulumi.Input<number>;
    /**
     * Enable or disable rebuilds in the specified Storage Pool
     */
    rebuildEnabled?: pulumi.Input<boolean>;
    /**
     * Maximum number of concurrent rebuild and rebalance activities on SDSs in the Storage Pool
     */
    rebuildRebalanceParallelism?: pulumi.Input<number>;
    /**
     * This defines the maximum percentage of Storage Pool capacity that can be used by replication for the journal. Before
     * deleting the storage pool, this has to be set to 0.
     */
    replicationJournalCapacity?: pulumi.Input<number>;
    /**
     * Sets the Read RAM Cache write handling mode of the specified Storage Pool
     */
    rmCacheWriteHandlingMode?: pulumi.Input<string>;
    /**
     * Sets the spare capacity reservation policy
     */
    sparePercentage?: pulumi.Input<number>;
    /**
     * Enable/Disable RFcache on a specific storage pool
     */
    useRfcache?: pulumi.Input<boolean>;
    /**
     * Enable/Disable RMcache on a specific storage pool
     */
    useRmcache?: pulumi.Input<boolean>;
    /**
     * The maximum bandwidth of V-Tree migration IOs, in KB per second, per device
     */
    vtreeMigrationBwLimitPerDeviceInKbps?: pulumi.Input<number>;
    /**
     * Set the I/O priority policy for V-Tree migration for a specific Storage Pool. Valid values are `limitNumOfConcurrentIos`
     * and `favorAppIos`
     */
    vtreeMigrationIoPriorityPolicy?: pulumi.Input<string>;
    /**
     * The maximum number of concurrent V-Tree migration I/Os per device
     */
    vtreeMigrationNumOfConcurrentIosPerDevice?: pulumi.Input<number>;
    /**
     * Enable/Disable padding policy on a specific storage pool
     */
    zeroPaddingEnabled?: pulumi.Input<boolean>;
}
