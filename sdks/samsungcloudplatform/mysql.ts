// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Mysql extends pulumi.CustomResource {
    /**
     * Get an existing Mysql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MysqlState, opts?: pulumi.CustomResourceOptions): Mysql {
        return new Mysql(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'samsungcloudplatform:index/mysql:Mysql';

    /**
     * Returns true if the given object is an instance of Mysql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Mysql {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Mysql.__pulumiType;
    }

    public readonly backup!: pulumi.Output<outputs.MysqlBackup | undefined>;
    /**
     * block storage.
     */
    public readonly blockStorages!: pulumi.Output<outputs.MysqlBlockStorage[]>;
    /**
     * Contract (None|1 Year|3 Year)
     */
    public readonly contractPeriod!: pulumi.Output<string>;
    /**
     * Mysql database case sensitivity.
     */
    public readonly databaseCaseSensitivity!: pulumi.Output<boolean>;
    /**
     * Mysql encoding. (utf8mb3|utf8mb4)
     */
    public readonly databaseCharacterSet!: pulumi.Output<string>;
    /**
     * Name of database. (only English alphabets or numbers between 3 and 20 characters)
     */
    public readonly databaseName!: pulumi.Output<string>;
    /**
     * Port number of database. (1024 to 65535)
     */
    public readonly databasePort!: pulumi.Output<number>;
    /**
     * User account id of database. (2 to 20 lowercase alphabets)
     */
    public readonly databaseUserName!: pulumi.Output<string>;
    /**
     * User account password of database.
     */
    public readonly databaseUserPassword!: pulumi.Output<string>;
    /**
     * Whether to use storage encryption.
     */
    public readonly encryptionEnabled!: pulumi.Output<boolean>;
    /**
     * Mysql virtual server image id.
     */
    public readonly imageId!: pulumi.Output<string>;
    /**
     * Name of database cluster. (3 to 20 characters only)
     */
    public readonly mysqlClusterName!: pulumi.Output<string>;
    /**
     * Mysql cluster state (RUNNING|STOPPED)
     */
    public readonly mysqlClusterState!: pulumi.Output<string>;
    /**
     * Mysql servers (HA configuration when entering two server specifications)
     */
    public readonly mysqlServers!: pulumi.Output<outputs.MysqlMysqlServer[]>;
    /**
     * Whether to use nat.
     */
    public readonly natEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * nat ip address
     */
    public /*out*/ readonly natIpAddress!: pulumi.Output<string>;
    /**
     * Public IP for NAT. If it is null, it is automatically allocated.
     */
    public readonly natPublicIpId!: pulumi.Output<string | undefined>;
    /**
     * Next contract (None|1 Year|3 Year)
     */
    public readonly nextContractPeriod!: pulumi.Output<string | undefined>;
    /**
     * Security-Group ids of this Mysql DB. Each security-group must be a valid security-group resource which is attached to
     * the VPC.
     */
    public readonly securityGroupIds!: pulumi.Output<string[]>;
    /**
     * Server type
     */
    public readonly serverType!: pulumi.Output<string>;
    /**
     * Service Zone Id
     */
    public readonly serviceZoneId!: pulumi.Output<string>;
    /**
     * Subnet id of this database server. Subnet must be a valid subnet resource which is attached to the VPC.
     */
    public readonly subnetId!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.MysqlTimeouts | undefined>;
    /**
     * Timezone setting of this database.
     */
    public readonly timezone!: pulumi.Output<string>;
    /**
     * virtual ip address
     */
    public /*out*/ readonly virtualIpAddress!: pulumi.Output<string>;
    /**
     * vpc id
     */
    public /*out*/ readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a Mysql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MysqlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MysqlArgs | MysqlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MysqlState | undefined;
            resourceInputs["backup"] = state ? state.backup : undefined;
            resourceInputs["blockStorages"] = state ? state.blockStorages : undefined;
            resourceInputs["contractPeriod"] = state ? state.contractPeriod : undefined;
            resourceInputs["databaseCaseSensitivity"] = state ? state.databaseCaseSensitivity : undefined;
            resourceInputs["databaseCharacterSet"] = state ? state.databaseCharacterSet : undefined;
            resourceInputs["databaseName"] = state ? state.databaseName : undefined;
            resourceInputs["databasePort"] = state ? state.databasePort : undefined;
            resourceInputs["databaseUserName"] = state ? state.databaseUserName : undefined;
            resourceInputs["databaseUserPassword"] = state ? state.databaseUserPassword : undefined;
            resourceInputs["encryptionEnabled"] = state ? state.encryptionEnabled : undefined;
            resourceInputs["imageId"] = state ? state.imageId : undefined;
            resourceInputs["mysqlClusterName"] = state ? state.mysqlClusterName : undefined;
            resourceInputs["mysqlClusterState"] = state ? state.mysqlClusterState : undefined;
            resourceInputs["mysqlServers"] = state ? state.mysqlServers : undefined;
            resourceInputs["natEnabled"] = state ? state.natEnabled : undefined;
            resourceInputs["natIpAddress"] = state ? state.natIpAddress : undefined;
            resourceInputs["natPublicIpId"] = state ? state.natPublicIpId : undefined;
            resourceInputs["nextContractPeriod"] = state ? state.nextContractPeriod : undefined;
            resourceInputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            resourceInputs["serverType"] = state ? state.serverType : undefined;
            resourceInputs["serviceZoneId"] = state ? state.serviceZoneId : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["timezone"] = state ? state.timezone : undefined;
            resourceInputs["virtualIpAddress"] = state ? state.virtualIpAddress : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as MysqlArgs | undefined;
            if ((!args || args.blockStorages === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blockStorages'");
            }
            if ((!args || args.contractPeriod === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contractPeriod'");
            }
            if ((!args || args.databaseCaseSensitivity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseCaseSensitivity'");
            }
            if ((!args || args.databaseCharacterSet === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseCharacterSet'");
            }
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.databasePort === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databasePort'");
            }
            if ((!args || args.databaseUserName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseUserName'");
            }
            if ((!args || args.databaseUserPassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseUserPassword'");
            }
            if ((!args || args.encryptionEnabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'encryptionEnabled'");
            }
            if ((!args || args.imageId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'imageId'");
            }
            if ((!args || args.mysqlClusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mysqlClusterName'");
            }
            if ((!args || args.mysqlClusterState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mysqlClusterState'");
            }
            if ((!args || args.mysqlServers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mysqlServers'");
            }
            if ((!args || args.securityGroupIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityGroupIds'");
            }
            if ((!args || args.serverType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverType'");
            }
            if ((!args || args.serviceZoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceZoneId'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            if ((!args || args.timezone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timezone'");
            }
            resourceInputs["backup"] = args ? args.backup : undefined;
            resourceInputs["blockStorages"] = args ? args.blockStorages : undefined;
            resourceInputs["contractPeriod"] = args ? args.contractPeriod : undefined;
            resourceInputs["databaseCaseSensitivity"] = args ? args.databaseCaseSensitivity : undefined;
            resourceInputs["databaseCharacterSet"] = args ? args.databaseCharacterSet : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["databasePort"] = args ? args.databasePort : undefined;
            resourceInputs["databaseUserName"] = args ? args.databaseUserName : undefined;
            resourceInputs["databaseUserPassword"] = args?.databaseUserPassword ? pulumi.secret(args.databaseUserPassword) : undefined;
            resourceInputs["encryptionEnabled"] = args ? args.encryptionEnabled : undefined;
            resourceInputs["imageId"] = args ? args.imageId : undefined;
            resourceInputs["mysqlClusterName"] = args ? args.mysqlClusterName : undefined;
            resourceInputs["mysqlClusterState"] = args ? args.mysqlClusterState : undefined;
            resourceInputs["mysqlServers"] = args ? args.mysqlServers : undefined;
            resourceInputs["natEnabled"] = args ? args.natEnabled : undefined;
            resourceInputs["natPublicIpId"] = args ? args.natPublicIpId : undefined;
            resourceInputs["nextContractPeriod"] = args ? args.nextContractPeriod : undefined;
            resourceInputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            resourceInputs["serverType"] = args ? args.serverType : undefined;
            resourceInputs["serviceZoneId"] = args ? args.serviceZoneId : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["timezone"] = args ? args.timezone : undefined;
            resourceInputs["natIpAddress"] = undefined /*out*/;
            resourceInputs["virtualIpAddress"] = undefined /*out*/;
            resourceInputs["vpcId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["databaseUserPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Mysql.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Mysql resources.
 */
export interface MysqlState {
    backup?: pulumi.Input<inputs.MysqlBackup>;
    /**
     * block storage.
     */
    blockStorages?: pulumi.Input<pulumi.Input<inputs.MysqlBlockStorage>[]>;
    /**
     * Contract (None|1 Year|3 Year)
     */
    contractPeriod?: pulumi.Input<string>;
    /**
     * Mysql database case sensitivity.
     */
    databaseCaseSensitivity?: pulumi.Input<boolean>;
    /**
     * Mysql encoding. (utf8mb3|utf8mb4)
     */
    databaseCharacterSet?: pulumi.Input<string>;
    /**
     * Name of database. (only English alphabets or numbers between 3 and 20 characters)
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Port number of database. (1024 to 65535)
     */
    databasePort?: pulumi.Input<number>;
    /**
     * User account id of database. (2 to 20 lowercase alphabets)
     */
    databaseUserName?: pulumi.Input<string>;
    /**
     * User account password of database.
     */
    databaseUserPassword?: pulumi.Input<string>;
    /**
     * Whether to use storage encryption.
     */
    encryptionEnabled?: pulumi.Input<boolean>;
    /**
     * Mysql virtual server image id.
     */
    imageId?: pulumi.Input<string>;
    /**
     * Name of database cluster. (3 to 20 characters only)
     */
    mysqlClusterName?: pulumi.Input<string>;
    /**
     * Mysql cluster state (RUNNING|STOPPED)
     */
    mysqlClusterState?: pulumi.Input<string>;
    /**
     * Mysql servers (HA configuration when entering two server specifications)
     */
    mysqlServers?: pulumi.Input<pulumi.Input<inputs.MysqlMysqlServer>[]>;
    /**
     * Whether to use nat.
     */
    natEnabled?: pulumi.Input<boolean>;
    /**
     * nat ip address
     */
    natIpAddress?: pulumi.Input<string>;
    /**
     * Public IP for NAT. If it is null, it is automatically allocated.
     */
    natPublicIpId?: pulumi.Input<string>;
    /**
     * Next contract (None|1 Year|3 Year)
     */
    nextContractPeriod?: pulumi.Input<string>;
    /**
     * Security-Group ids of this Mysql DB. Each security-group must be a valid security-group resource which is attached to
     * the VPC.
     */
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Server type
     */
    serverType?: pulumi.Input<string>;
    /**
     * Service Zone Id
     */
    serviceZoneId?: pulumi.Input<string>;
    /**
     * Subnet id of this database server. Subnet must be a valid subnet resource which is attached to the VPC.
     */
    subnetId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.MysqlTimeouts>;
    /**
     * Timezone setting of this database.
     */
    timezone?: pulumi.Input<string>;
    /**
     * virtual ip address
     */
    virtualIpAddress?: pulumi.Input<string>;
    /**
     * vpc id
     */
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Mysql resource.
 */
export interface MysqlArgs {
    backup?: pulumi.Input<inputs.MysqlBackup>;
    /**
     * block storage.
     */
    blockStorages: pulumi.Input<pulumi.Input<inputs.MysqlBlockStorage>[]>;
    /**
     * Contract (None|1 Year|3 Year)
     */
    contractPeriod: pulumi.Input<string>;
    /**
     * Mysql database case sensitivity.
     */
    databaseCaseSensitivity: pulumi.Input<boolean>;
    /**
     * Mysql encoding. (utf8mb3|utf8mb4)
     */
    databaseCharacterSet: pulumi.Input<string>;
    /**
     * Name of database. (only English alphabets or numbers between 3 and 20 characters)
     */
    databaseName: pulumi.Input<string>;
    /**
     * Port number of database. (1024 to 65535)
     */
    databasePort: pulumi.Input<number>;
    /**
     * User account id of database. (2 to 20 lowercase alphabets)
     */
    databaseUserName: pulumi.Input<string>;
    /**
     * User account password of database.
     */
    databaseUserPassword: pulumi.Input<string>;
    /**
     * Whether to use storage encryption.
     */
    encryptionEnabled: pulumi.Input<boolean>;
    /**
     * Mysql virtual server image id.
     */
    imageId: pulumi.Input<string>;
    /**
     * Name of database cluster. (3 to 20 characters only)
     */
    mysqlClusterName: pulumi.Input<string>;
    /**
     * Mysql cluster state (RUNNING|STOPPED)
     */
    mysqlClusterState: pulumi.Input<string>;
    /**
     * Mysql servers (HA configuration when entering two server specifications)
     */
    mysqlServers: pulumi.Input<pulumi.Input<inputs.MysqlMysqlServer>[]>;
    /**
     * Whether to use nat.
     */
    natEnabled?: pulumi.Input<boolean>;
    /**
     * Public IP for NAT. If it is null, it is automatically allocated.
     */
    natPublicIpId?: pulumi.Input<string>;
    /**
     * Next contract (None|1 Year|3 Year)
     */
    nextContractPeriod?: pulumi.Input<string>;
    /**
     * Security-Group ids of this Mysql DB. Each security-group must be a valid security-group resource which is attached to
     * the VPC.
     */
    securityGroupIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Server type
     */
    serverType: pulumi.Input<string>;
    /**
     * Service Zone Id
     */
    serviceZoneId: pulumi.Input<string>;
    /**
     * Subnet id of this database server. Subnet must be a valid subnet resource which is attached to the VPC.
     */
    subnetId: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.MysqlTimeouts>;
    /**
     * Timezone setting of this database.
     */
    timezone: pulumi.Input<string>;
}
