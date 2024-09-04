// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MongodbShardingInstance extends pulumi.CustomResource {
    /**
     * Get an existing MongodbShardingInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MongodbShardingInstanceState, opts?: pulumi.CustomResourceOptions): MongodbShardingInstance {
        return new MongodbShardingInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/mongodbShardingInstance:MongodbShardingInstance';

    /**
     * Returns true if the given object is an instance of MongodbShardingInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MongodbShardingInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MongodbShardingInstance.__pulumiType;
    }

    public readonly accountPassword!: pulumi.Output<string | undefined>;
    public readonly autoRenew!: pulumi.Output<boolean | undefined>;
    public readonly backupPeriods!: pulumi.Output<string[]>;
    public readonly backupTime!: pulumi.Output<string>;
    public readonly configServerList!: pulumi.Output<outputs.MongodbShardingInstanceConfigServerList | undefined>;
    public readonly engineVersion!: pulumi.Output<string>;
    public readonly instanceChargeType!: pulumi.Output<string>;
    public readonly kmsEncryptedPassword!: pulumi.Output<string | undefined>;
    public readonly kmsEncryptionContext!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly mongoLists!: pulumi.Output<outputs.MongodbShardingInstanceMongoList[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly networkType!: pulumi.Output<string>;
    public readonly orderType!: pulumi.Output<string | undefined>;
    public readonly period!: pulumi.Output<number>;
    public readonly protocolType!: pulumi.Output<string>;
    public readonly provisionedIops!: pulumi.Output<number | undefined>;
    public readonly resourceGroupId!: pulumi.Output<string>;
    public /*out*/ readonly retentionPeriod!: pulumi.Output<number>;
    public readonly securityGroupId!: pulumi.Output<string>;
    public readonly securityIpLists!: pulumi.Output<string[]>;
    public readonly shardLists!: pulumi.Output<outputs.MongodbShardingInstanceShardList[]>;
    public readonly storageEngine!: pulumi.Output<string>;
    public readonly storageType!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tdeStatus!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MongodbShardingInstanceTimeouts | undefined>;
    public readonly vpcId!: pulumi.Output<string>;
    public readonly vswitchId!: pulumi.Output<string>;
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a MongodbShardingInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MongodbShardingInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MongodbShardingInstanceArgs | MongodbShardingInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MongodbShardingInstanceState | undefined;
            resourceInputs["accountPassword"] = state ? state.accountPassword : undefined;
            resourceInputs["autoRenew"] = state ? state.autoRenew : undefined;
            resourceInputs["backupPeriods"] = state ? state.backupPeriods : undefined;
            resourceInputs["backupTime"] = state ? state.backupTime : undefined;
            resourceInputs["configServerList"] = state ? state.configServerList : undefined;
            resourceInputs["engineVersion"] = state ? state.engineVersion : undefined;
            resourceInputs["instanceChargeType"] = state ? state.instanceChargeType : undefined;
            resourceInputs["kmsEncryptedPassword"] = state ? state.kmsEncryptedPassword : undefined;
            resourceInputs["kmsEncryptionContext"] = state ? state.kmsEncryptionContext : undefined;
            resourceInputs["mongoLists"] = state ? state.mongoLists : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkType"] = state ? state.networkType : undefined;
            resourceInputs["orderType"] = state ? state.orderType : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["protocolType"] = state ? state.protocolType : undefined;
            resourceInputs["provisionedIops"] = state ? state.provisionedIops : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["retentionPeriod"] = state ? state.retentionPeriod : undefined;
            resourceInputs["securityGroupId"] = state ? state.securityGroupId : undefined;
            resourceInputs["securityIpLists"] = state ? state.securityIpLists : undefined;
            resourceInputs["shardLists"] = state ? state.shardLists : undefined;
            resourceInputs["storageEngine"] = state ? state.storageEngine : undefined;
            resourceInputs["storageType"] = state ? state.storageType : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tdeStatus"] = state ? state.tdeStatus : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
            resourceInputs["vswitchId"] = state ? state.vswitchId : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as MongodbShardingInstanceArgs | undefined;
            if ((!args || args.engineVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'engineVersion'");
            }
            if ((!args || args.mongoLists === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mongoLists'");
            }
            if ((!args || args.shardLists === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shardLists'");
            }
            resourceInputs["accountPassword"] = args?.accountPassword ? pulumi.secret(args.accountPassword) : undefined;
            resourceInputs["autoRenew"] = args ? args.autoRenew : undefined;
            resourceInputs["backupPeriods"] = args ? args.backupPeriods : undefined;
            resourceInputs["backupTime"] = args ? args.backupTime : undefined;
            resourceInputs["configServerList"] = args ? args.configServerList : undefined;
            resourceInputs["engineVersion"] = args ? args.engineVersion : undefined;
            resourceInputs["instanceChargeType"] = args ? args.instanceChargeType : undefined;
            resourceInputs["kmsEncryptedPassword"] = args ? args.kmsEncryptedPassword : undefined;
            resourceInputs["kmsEncryptionContext"] = args ? args.kmsEncryptionContext : undefined;
            resourceInputs["mongoLists"] = args ? args.mongoLists : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkType"] = args ? args.networkType : undefined;
            resourceInputs["orderType"] = args ? args.orderType : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["protocolType"] = args ? args.protocolType : undefined;
            resourceInputs["provisionedIops"] = args ? args.provisionedIops : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["securityGroupId"] = args ? args.securityGroupId : undefined;
            resourceInputs["securityIpLists"] = args ? args.securityIpLists : undefined;
            resourceInputs["shardLists"] = args ? args.shardLists : undefined;
            resourceInputs["storageEngine"] = args ? args.storageEngine : undefined;
            resourceInputs["storageType"] = args ? args.storageType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tdeStatus"] = args ? args.tdeStatus : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["vswitchId"] = args ? args.vswitchId : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
            resourceInputs["retentionPeriod"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accountPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(MongodbShardingInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MongodbShardingInstance resources.
 */
export interface MongodbShardingInstanceState {
    accountPassword?: pulumi.Input<string>;
    autoRenew?: pulumi.Input<boolean>;
    backupPeriods?: pulumi.Input<pulumi.Input<string>[]>;
    backupTime?: pulumi.Input<string>;
    configServerList?: pulumi.Input<inputs.MongodbShardingInstanceConfigServerList>;
    engineVersion?: pulumi.Input<string>;
    instanceChargeType?: pulumi.Input<string>;
    kmsEncryptedPassword?: pulumi.Input<string>;
    kmsEncryptionContext?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    mongoLists?: pulumi.Input<pulumi.Input<inputs.MongodbShardingInstanceMongoList>[]>;
    name?: pulumi.Input<string>;
    networkType?: pulumi.Input<string>;
    orderType?: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    protocolType?: pulumi.Input<string>;
    provisionedIops?: pulumi.Input<number>;
    resourceGroupId?: pulumi.Input<string>;
    retentionPeriod?: pulumi.Input<number>;
    securityGroupId?: pulumi.Input<string>;
    securityIpLists?: pulumi.Input<pulumi.Input<string>[]>;
    shardLists?: pulumi.Input<pulumi.Input<inputs.MongodbShardingInstanceShardList>[]>;
    storageEngine?: pulumi.Input<string>;
    storageType?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tdeStatus?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MongodbShardingInstanceTimeouts>;
    vpcId?: pulumi.Input<string>;
    vswitchId?: pulumi.Input<string>;
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MongodbShardingInstance resource.
 */
export interface MongodbShardingInstanceArgs {
    accountPassword?: pulumi.Input<string>;
    autoRenew?: pulumi.Input<boolean>;
    backupPeriods?: pulumi.Input<pulumi.Input<string>[]>;
    backupTime?: pulumi.Input<string>;
    configServerList?: pulumi.Input<inputs.MongodbShardingInstanceConfigServerList>;
    engineVersion: pulumi.Input<string>;
    instanceChargeType?: pulumi.Input<string>;
    kmsEncryptedPassword?: pulumi.Input<string>;
    kmsEncryptionContext?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    mongoLists: pulumi.Input<pulumi.Input<inputs.MongodbShardingInstanceMongoList>[]>;
    name?: pulumi.Input<string>;
    networkType?: pulumi.Input<string>;
    orderType?: pulumi.Input<string>;
    period?: pulumi.Input<number>;
    protocolType?: pulumi.Input<string>;
    provisionedIops?: pulumi.Input<number>;
    resourceGroupId?: pulumi.Input<string>;
    securityGroupId?: pulumi.Input<string>;
    securityIpLists?: pulumi.Input<pulumi.Input<string>[]>;
    shardLists: pulumi.Input<pulumi.Input<inputs.MongodbShardingInstanceShardList>[]>;
    storageEngine?: pulumi.Input<string>;
    storageType?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tdeStatus?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MongodbShardingInstanceTimeouts>;
    vpcId?: pulumi.Input<string>;
    vswitchId?: pulumi.Input<string>;
    zoneId?: pulumi.Input<string>;
}
