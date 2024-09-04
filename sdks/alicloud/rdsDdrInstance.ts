// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RdsDdrInstance extends pulumi.CustomResource {
    /**
     * Get an existing RdsDdrInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RdsDdrInstanceState, opts?: pulumi.CustomResourceOptions): RdsDdrInstance {
        return new RdsDdrInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/rdsDdrInstance:RdsDdrInstance';

    /**
     * Returns true if the given object is an instance of RdsDdrInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RdsDdrInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RdsDdrInstance.__pulumiType;
    }

    public readonly acl!: pulumi.Output<string>;
    public readonly autoRenew!: pulumi.Output<boolean>;
    public readonly autoRenewPeriod!: pulumi.Output<number>;
    public readonly autoUpgradeMinorVersion!: pulumi.Output<string>;
    public readonly backupSetId!: pulumi.Output<string | undefined>;
    public readonly caType!: pulumi.Output<string>;
    public /*out*/ readonly category!: pulumi.Output<string>;
    public readonly clientCaCert!: pulumi.Output<string | undefined>;
    public readonly clientCaEnabled!: pulumi.Output<number | undefined>;
    public readonly clientCertRevocationList!: pulumi.Output<string | undefined>;
    public readonly clientCrlEnabled!: pulumi.Output<number | undefined>;
    public /*out*/ readonly connectionString!: pulumi.Output<string>;
    public readonly connectionStringPrefix!: pulumi.Output<string>;
    public readonly dbInstanceIpArrayAttribute!: pulumi.Output<string | undefined>;
    public readonly dbInstanceIpArrayName!: pulumi.Output<string | undefined>;
    public readonly dbInstanceStorageType!: pulumi.Output<string>;
    public readonly deletionProtection!: pulumi.Output<boolean>;
    public readonly effectiveTime!: pulumi.Output<string | undefined>;
    public readonly encryptionKey!: pulumi.Output<string | undefined>;
    public readonly engine!: pulumi.Output<string>;
    public readonly engineVersion!: pulumi.Output<string>;
    public readonly forceRestart!: pulumi.Output<boolean>;
    public readonly freshWhiteListReadins!: pulumi.Output<string | undefined>;
    public readonly haConfig!: pulumi.Output<string>;
    public readonly instanceName!: pulumi.Output<string | undefined>;
    public readonly instanceStorage!: pulumi.Output<number>;
    public readonly instanceType!: pulumi.Output<string>;
    public readonly maintainTime!: pulumi.Output<string>;
    public readonly manualHaTime!: pulumi.Output<string | undefined>;
    public readonly modifyMode!: pulumi.Output<string | undefined>;
    public readonly monitoringPeriod!: pulumi.Output<number>;
    public readonly parameters!: pulumi.Output<outputs.RdsDdrInstanceParameter[] | undefined>;
    public readonly paymentType!: pulumi.Output<string>;
    public readonly period!: pulumi.Output<number | undefined>;
    public readonly pgHbaConfs!: pulumi.Output<outputs.RdsDdrInstancePgHbaConf[] | undefined>;
    public readonly port!: pulumi.Output<string>;
    public readonly privateIpAddress!: pulumi.Output<string>;
    public readonly releasedKeepPolicy!: pulumi.Output<string | undefined>;
    public readonly replicationAcl!: pulumi.Output<string>;
    public readonly resourceGroupId!: pulumi.Output<string>;
    public readonly restoreTime!: pulumi.Output<string | undefined>;
    public readonly restoreType!: pulumi.Output<string>;
    public readonly securityGroupIds!: pulumi.Output<string[]>;
    public readonly securityIpMode!: pulumi.Output<string>;
    public readonly securityIpType!: pulumi.Output<string | undefined>;
    public readonly securityIps!: pulumi.Output<string[]>;
    public readonly serverCert!: pulumi.Output<string>;
    public readonly serverKey!: pulumi.Output<string>;
    public readonly sourceDbInstanceName!: pulumi.Output<string | undefined>;
    public readonly sourceRegion!: pulumi.Output<string | undefined>;
    public readonly sqlCollectorConfigValue!: pulumi.Output<number>;
    public readonly sqlCollectorStatus!: pulumi.Output<string>;
    public readonly sslAction!: pulumi.Output<string>;
    public /*out*/ readonly sslStatus!: pulumi.Output<string>;
    public readonly storageAutoScale!: pulumi.Output<string | undefined>;
    public readonly storageThreshold!: pulumi.Output<number | undefined>;
    public readonly storageUpperBound!: pulumi.Output<number | undefined>;
    public readonly switchTime!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly targetMinorVersion!: pulumi.Output<string>;
    public readonly tcpConnectionType!: pulumi.Output<string>;
    public readonly tdeStatus!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.RdsDdrInstanceTimeouts | undefined>;
    public readonly upgradeDbInstanceKernelVersion!: pulumi.Output<boolean | undefined>;
    public readonly upgradeTime!: pulumi.Output<string | undefined>;
    public readonly vpcId!: pulumi.Output<string>;
    public readonly vswitchId!: pulumi.Output<string | undefined>;
    public readonly whitelistNetworkType!: pulumi.Output<string | undefined>;
    public readonly zoneId!: pulumi.Output<string>;
    public /*out*/ readonly zoneIdSlaveA!: pulumi.Output<string>;
    public /*out*/ readonly zoneIdSlaveB!: pulumi.Output<string>;

    /**
     * Create a RdsDdrInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RdsDdrInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RdsDdrInstanceArgs | RdsDdrInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RdsDdrInstanceState | undefined;
            resourceInputs["acl"] = state ? state.acl : undefined;
            resourceInputs["autoRenew"] = state ? state.autoRenew : undefined;
            resourceInputs["autoRenewPeriod"] = state ? state.autoRenewPeriod : undefined;
            resourceInputs["autoUpgradeMinorVersion"] = state ? state.autoUpgradeMinorVersion : undefined;
            resourceInputs["backupSetId"] = state ? state.backupSetId : undefined;
            resourceInputs["caType"] = state ? state.caType : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["clientCaCert"] = state ? state.clientCaCert : undefined;
            resourceInputs["clientCaEnabled"] = state ? state.clientCaEnabled : undefined;
            resourceInputs["clientCertRevocationList"] = state ? state.clientCertRevocationList : undefined;
            resourceInputs["clientCrlEnabled"] = state ? state.clientCrlEnabled : undefined;
            resourceInputs["connectionString"] = state ? state.connectionString : undefined;
            resourceInputs["connectionStringPrefix"] = state ? state.connectionStringPrefix : undefined;
            resourceInputs["dbInstanceIpArrayAttribute"] = state ? state.dbInstanceIpArrayAttribute : undefined;
            resourceInputs["dbInstanceIpArrayName"] = state ? state.dbInstanceIpArrayName : undefined;
            resourceInputs["dbInstanceStorageType"] = state ? state.dbInstanceStorageType : undefined;
            resourceInputs["deletionProtection"] = state ? state.deletionProtection : undefined;
            resourceInputs["effectiveTime"] = state ? state.effectiveTime : undefined;
            resourceInputs["encryptionKey"] = state ? state.encryptionKey : undefined;
            resourceInputs["engine"] = state ? state.engine : undefined;
            resourceInputs["engineVersion"] = state ? state.engineVersion : undefined;
            resourceInputs["forceRestart"] = state ? state.forceRestart : undefined;
            resourceInputs["freshWhiteListReadins"] = state ? state.freshWhiteListReadins : undefined;
            resourceInputs["haConfig"] = state ? state.haConfig : undefined;
            resourceInputs["instanceName"] = state ? state.instanceName : undefined;
            resourceInputs["instanceStorage"] = state ? state.instanceStorage : undefined;
            resourceInputs["instanceType"] = state ? state.instanceType : undefined;
            resourceInputs["maintainTime"] = state ? state.maintainTime : undefined;
            resourceInputs["manualHaTime"] = state ? state.manualHaTime : undefined;
            resourceInputs["modifyMode"] = state ? state.modifyMode : undefined;
            resourceInputs["monitoringPeriod"] = state ? state.monitoringPeriod : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["paymentType"] = state ? state.paymentType : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["pgHbaConfs"] = state ? state.pgHbaConfs : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["privateIpAddress"] = state ? state.privateIpAddress : undefined;
            resourceInputs["releasedKeepPolicy"] = state ? state.releasedKeepPolicy : undefined;
            resourceInputs["replicationAcl"] = state ? state.replicationAcl : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["restoreTime"] = state ? state.restoreTime : undefined;
            resourceInputs["restoreType"] = state ? state.restoreType : undefined;
            resourceInputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            resourceInputs["securityIpMode"] = state ? state.securityIpMode : undefined;
            resourceInputs["securityIpType"] = state ? state.securityIpType : undefined;
            resourceInputs["securityIps"] = state ? state.securityIps : undefined;
            resourceInputs["serverCert"] = state ? state.serverCert : undefined;
            resourceInputs["serverKey"] = state ? state.serverKey : undefined;
            resourceInputs["sourceDbInstanceName"] = state ? state.sourceDbInstanceName : undefined;
            resourceInputs["sourceRegion"] = state ? state.sourceRegion : undefined;
            resourceInputs["sqlCollectorConfigValue"] = state ? state.sqlCollectorConfigValue : undefined;
            resourceInputs["sqlCollectorStatus"] = state ? state.sqlCollectorStatus : undefined;
            resourceInputs["sslAction"] = state ? state.sslAction : undefined;
            resourceInputs["sslStatus"] = state ? state.sslStatus : undefined;
            resourceInputs["storageAutoScale"] = state ? state.storageAutoScale : undefined;
            resourceInputs["storageThreshold"] = state ? state.storageThreshold : undefined;
            resourceInputs["storageUpperBound"] = state ? state.storageUpperBound : undefined;
            resourceInputs["switchTime"] = state ? state.switchTime : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["targetMinorVersion"] = state ? state.targetMinorVersion : undefined;
            resourceInputs["tcpConnectionType"] = state ? state.tcpConnectionType : undefined;
            resourceInputs["tdeStatus"] = state ? state.tdeStatus : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["upgradeDbInstanceKernelVersion"] = state ? state.upgradeDbInstanceKernelVersion : undefined;
            resourceInputs["upgradeTime"] = state ? state.upgradeTime : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
            resourceInputs["vswitchId"] = state ? state.vswitchId : undefined;
            resourceInputs["whitelistNetworkType"] = state ? state.whitelistNetworkType : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
            resourceInputs["zoneIdSlaveA"] = state ? state.zoneIdSlaveA : undefined;
            resourceInputs["zoneIdSlaveB"] = state ? state.zoneIdSlaveB : undefined;
        } else {
            const args = argsOrState as RdsDdrInstanceArgs | undefined;
            if ((!args || args.engine === undefined) && !opts.urn) {
                throw new Error("Missing required property 'engine'");
            }
            if ((!args || args.engineVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'engineVersion'");
            }
            if ((!args || args.instanceStorage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceStorage'");
            }
            if ((!args || args.instanceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceType'");
            }
            if ((!args || args.paymentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'paymentType'");
            }
            if ((!args || args.restoreType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restoreType'");
            }
            resourceInputs["acl"] = args ? args.acl : undefined;
            resourceInputs["autoRenew"] = args ? args.autoRenew : undefined;
            resourceInputs["autoRenewPeriod"] = args ? args.autoRenewPeriod : undefined;
            resourceInputs["autoUpgradeMinorVersion"] = args ? args.autoUpgradeMinorVersion : undefined;
            resourceInputs["backupSetId"] = args ? args.backupSetId : undefined;
            resourceInputs["caType"] = args ? args.caType : undefined;
            resourceInputs["clientCaCert"] = args ? args.clientCaCert : undefined;
            resourceInputs["clientCaEnabled"] = args ? args.clientCaEnabled : undefined;
            resourceInputs["clientCertRevocationList"] = args ? args.clientCertRevocationList : undefined;
            resourceInputs["clientCrlEnabled"] = args ? args.clientCrlEnabled : undefined;
            resourceInputs["connectionStringPrefix"] = args ? args.connectionStringPrefix : undefined;
            resourceInputs["dbInstanceIpArrayAttribute"] = args ? args.dbInstanceIpArrayAttribute : undefined;
            resourceInputs["dbInstanceIpArrayName"] = args ? args.dbInstanceIpArrayName : undefined;
            resourceInputs["dbInstanceStorageType"] = args ? args.dbInstanceStorageType : undefined;
            resourceInputs["deletionProtection"] = args ? args.deletionProtection : undefined;
            resourceInputs["effectiveTime"] = args ? args.effectiveTime : undefined;
            resourceInputs["encryptionKey"] = args ? args.encryptionKey : undefined;
            resourceInputs["engine"] = args ? args.engine : undefined;
            resourceInputs["engineVersion"] = args ? args.engineVersion : undefined;
            resourceInputs["forceRestart"] = args ? args.forceRestart : undefined;
            resourceInputs["freshWhiteListReadins"] = args ? args.freshWhiteListReadins : undefined;
            resourceInputs["haConfig"] = args ? args.haConfig : undefined;
            resourceInputs["instanceName"] = args ? args.instanceName : undefined;
            resourceInputs["instanceStorage"] = args ? args.instanceStorage : undefined;
            resourceInputs["instanceType"] = args ? args.instanceType : undefined;
            resourceInputs["maintainTime"] = args ? args.maintainTime : undefined;
            resourceInputs["manualHaTime"] = args ? args.manualHaTime : undefined;
            resourceInputs["modifyMode"] = args ? args.modifyMode : undefined;
            resourceInputs["monitoringPeriod"] = args ? args.monitoringPeriod : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["paymentType"] = args ? args.paymentType : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["pgHbaConfs"] = args ? args.pgHbaConfs : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["privateIpAddress"] = args ? args.privateIpAddress : undefined;
            resourceInputs["releasedKeepPolicy"] = args ? args.releasedKeepPolicy : undefined;
            resourceInputs["replicationAcl"] = args ? args.replicationAcl : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["restoreTime"] = args ? args.restoreTime : undefined;
            resourceInputs["restoreType"] = args ? args.restoreType : undefined;
            resourceInputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            resourceInputs["securityIpMode"] = args ? args.securityIpMode : undefined;
            resourceInputs["securityIpType"] = args ? args.securityIpType : undefined;
            resourceInputs["securityIps"] = args ? args.securityIps : undefined;
            resourceInputs["serverCert"] = args ? args.serverCert : undefined;
            resourceInputs["serverKey"] = args ? args.serverKey : undefined;
            resourceInputs["sourceDbInstanceName"] = args ? args.sourceDbInstanceName : undefined;
            resourceInputs["sourceRegion"] = args ? args.sourceRegion : undefined;
            resourceInputs["sqlCollectorConfigValue"] = args ? args.sqlCollectorConfigValue : undefined;
            resourceInputs["sqlCollectorStatus"] = args ? args.sqlCollectorStatus : undefined;
            resourceInputs["sslAction"] = args ? args.sslAction : undefined;
            resourceInputs["storageAutoScale"] = args ? args.storageAutoScale : undefined;
            resourceInputs["storageThreshold"] = args ? args.storageThreshold : undefined;
            resourceInputs["storageUpperBound"] = args ? args.storageUpperBound : undefined;
            resourceInputs["switchTime"] = args ? args.switchTime : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetMinorVersion"] = args ? args.targetMinorVersion : undefined;
            resourceInputs["tcpConnectionType"] = args ? args.tcpConnectionType : undefined;
            resourceInputs["tdeStatus"] = args ? args.tdeStatus : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["upgradeDbInstanceKernelVersion"] = args ? args.upgradeDbInstanceKernelVersion : undefined;
            resourceInputs["upgradeTime"] = args ? args.upgradeTime : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["vswitchId"] = args ? args.vswitchId : undefined;
            resourceInputs["whitelistNetworkType"] = args ? args.whitelistNetworkType : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
            resourceInputs["category"] = undefined /*out*/;
            resourceInputs["connectionString"] = undefined /*out*/;
            resourceInputs["sslStatus"] = undefined /*out*/;
            resourceInputs["zoneIdSlaveA"] = undefined /*out*/;
            resourceInputs["zoneIdSlaveB"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RdsDdrInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RdsDdrInstance resources.
 */
export interface RdsDdrInstanceState {
    acl?: pulumi.Input<string>;
    autoRenew?: pulumi.Input<boolean>;
    autoRenewPeriod?: pulumi.Input<number>;
    autoUpgradeMinorVersion?: pulumi.Input<string>;
    backupSetId?: pulumi.Input<string>;
    caType?: pulumi.Input<string>;
    category?: pulumi.Input<string>;
    clientCaCert?: pulumi.Input<string>;
    clientCaEnabled?: pulumi.Input<number>;
    clientCertRevocationList?: pulumi.Input<string>;
    clientCrlEnabled?: pulumi.Input<number>;
    connectionString?: pulumi.Input<string>;
    connectionStringPrefix?: pulumi.Input<string>;
    dbInstanceIpArrayAttribute?: pulumi.Input<string>;
    dbInstanceIpArrayName?: pulumi.Input<string>;
    dbInstanceStorageType?: pulumi.Input<string>;
    deletionProtection?: pulumi.Input<boolean>;
    effectiveTime?: pulumi.Input<string>;
    encryptionKey?: pulumi.Input<string>;
    engine?: pulumi.Input<string>;
    engineVersion?: pulumi.Input<string>;
    forceRestart?: pulumi.Input<boolean>;
    freshWhiteListReadins?: pulumi.Input<string>;
    haConfig?: pulumi.Input<string>;
    instanceName?: pulumi.Input<string>;
    instanceStorage?: pulumi.Input<number>;
    instanceType?: pulumi.Input<string>;
    maintainTime?: pulumi.Input<string>;
    manualHaTime?: pulumi.Input<string>;
    modifyMode?: pulumi.Input<string>;
    monitoringPeriod?: pulumi.Input<number>;
    parameters?: pulumi.Input<pulumi.Input<inputs.RdsDdrInstanceParameter>[]>;
    paymentType?: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    pgHbaConfs?: pulumi.Input<pulumi.Input<inputs.RdsDdrInstancePgHbaConf>[]>;
    port?: pulumi.Input<string>;
    privateIpAddress?: pulumi.Input<string>;
    releasedKeepPolicy?: pulumi.Input<string>;
    replicationAcl?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    restoreTime?: pulumi.Input<string>;
    restoreType?: pulumi.Input<string>;
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    securityIpMode?: pulumi.Input<string>;
    securityIpType?: pulumi.Input<string>;
    securityIps?: pulumi.Input<pulumi.Input<string>[]>;
    serverCert?: pulumi.Input<string>;
    serverKey?: pulumi.Input<string>;
    sourceDbInstanceName?: pulumi.Input<string>;
    sourceRegion?: pulumi.Input<string>;
    sqlCollectorConfigValue?: pulumi.Input<number>;
    sqlCollectorStatus?: pulumi.Input<string>;
    sslAction?: pulumi.Input<string>;
    sslStatus?: pulumi.Input<string>;
    storageAutoScale?: pulumi.Input<string>;
    storageThreshold?: pulumi.Input<number>;
    storageUpperBound?: pulumi.Input<number>;
    switchTime?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    targetMinorVersion?: pulumi.Input<string>;
    tcpConnectionType?: pulumi.Input<string>;
    tdeStatus?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.RdsDdrInstanceTimeouts>;
    upgradeDbInstanceKernelVersion?: pulumi.Input<boolean>;
    upgradeTime?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
    vswitchId?: pulumi.Input<string>;
    whitelistNetworkType?: pulumi.Input<string>;
    zoneId?: pulumi.Input<string>;
    zoneIdSlaveA?: pulumi.Input<string>;
    zoneIdSlaveB?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RdsDdrInstance resource.
 */
export interface RdsDdrInstanceArgs {
    acl?: pulumi.Input<string>;
    autoRenew?: pulumi.Input<boolean>;
    autoRenewPeriod?: pulumi.Input<number>;
    autoUpgradeMinorVersion?: pulumi.Input<string>;
    backupSetId?: pulumi.Input<string>;
    caType?: pulumi.Input<string>;
    clientCaCert?: pulumi.Input<string>;
    clientCaEnabled?: pulumi.Input<number>;
    clientCertRevocationList?: pulumi.Input<string>;
    clientCrlEnabled?: pulumi.Input<number>;
    connectionStringPrefix?: pulumi.Input<string>;
    dbInstanceIpArrayAttribute?: pulumi.Input<string>;
    dbInstanceIpArrayName?: pulumi.Input<string>;
    dbInstanceStorageType?: pulumi.Input<string>;
    deletionProtection?: pulumi.Input<boolean>;
    effectiveTime?: pulumi.Input<string>;
    encryptionKey?: pulumi.Input<string>;
    engine: pulumi.Input<string>;
    engineVersion: pulumi.Input<string>;
    forceRestart?: pulumi.Input<boolean>;
    freshWhiteListReadins?: pulumi.Input<string>;
    haConfig?: pulumi.Input<string>;
    instanceName?: pulumi.Input<string>;
    instanceStorage: pulumi.Input<number>;
    instanceType: pulumi.Input<string>;
    maintainTime?: pulumi.Input<string>;
    manualHaTime?: pulumi.Input<string>;
    modifyMode?: pulumi.Input<string>;
    monitoringPeriod?: pulumi.Input<number>;
    parameters?: pulumi.Input<pulumi.Input<inputs.RdsDdrInstanceParameter>[]>;
    paymentType: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    pgHbaConfs?: pulumi.Input<pulumi.Input<inputs.RdsDdrInstancePgHbaConf>[]>;
    port?: pulumi.Input<string>;
    privateIpAddress?: pulumi.Input<string>;
    releasedKeepPolicy?: pulumi.Input<string>;
    replicationAcl?: pulumi.Input<string>;
    resourceGroupId?: pulumi.Input<string>;
    restoreTime?: pulumi.Input<string>;
    restoreType: pulumi.Input<string>;
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    securityIpMode?: pulumi.Input<string>;
    securityIpType?: pulumi.Input<string>;
    securityIps?: pulumi.Input<pulumi.Input<string>[]>;
    serverCert?: pulumi.Input<string>;
    serverKey?: pulumi.Input<string>;
    sourceDbInstanceName?: pulumi.Input<string>;
    sourceRegion?: pulumi.Input<string>;
    sqlCollectorConfigValue?: pulumi.Input<number>;
    sqlCollectorStatus?: pulumi.Input<string>;
    sslAction?: pulumi.Input<string>;
    storageAutoScale?: pulumi.Input<string>;
    storageThreshold?: pulumi.Input<number>;
    storageUpperBound?: pulumi.Input<number>;
    switchTime?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    targetMinorVersion?: pulumi.Input<string>;
    tcpConnectionType?: pulumi.Input<string>;
    tdeStatus?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.RdsDdrInstanceTimeouts>;
    upgradeDbInstanceKernelVersion?: pulumi.Input<boolean>;
    upgradeTime?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
    vswitchId?: pulumi.Input<string>;
    whitelistNetworkType?: pulumi.Input<string>;
    zoneId?: pulumi.Input<string>;
}
