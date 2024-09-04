// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SqlDatabaseInstance extends pulumi.CustomResource {
    /**
     * Get an existing SqlDatabaseInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlDatabaseInstanceState, opts?: pulumi.CustomResourceOptions): SqlDatabaseInstance {
        return new SqlDatabaseInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/sqlDatabaseInstance:SqlDatabaseInstance';

    /**
     * Returns true if the given object is an instance of SqlDatabaseInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqlDatabaseInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqlDatabaseInstance.__pulumiType;
    }

    /**
     * Available Maintenance versions.
     */
    public /*out*/ readonly availableMaintenanceVersions!: pulumi.Output<string[]>;
    /**
     * Configuration for creating a new instance as a clone of another instance.
     */
    public readonly clone!: pulumi.Output<outputs.SqlDatabaseInstanceClone | undefined>;
    /**
     * The connection name of the instance to be used in connection strings. For example, when connecting with Cloud SQL Proxy.
     */
    public /*out*/ readonly connectionName!: pulumi.Output<string>;
    /**
     * The MySQL, PostgreSQL or SQL Server (beta) version to use. Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0,
     * POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, SQLSERVER_2017_STANDARD,
     * SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date
     * reference of supported versions.
     */
    public readonly databaseVersion!: pulumi.Output<string>;
    public readonly deletionProtection!: pulumi.Output<boolean | undefined>;
    /**
     * The dns name of the instance.
     */
    public /*out*/ readonly dnsName!: pulumi.Output<string>;
    public readonly encryptionKeyName!: pulumi.Output<string>;
    public /*out*/ readonly firstIpAddress!: pulumi.Output<string>;
    /**
     * The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE',
     * 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.
     */
    public readonly instanceType!: pulumi.Output<string>;
    public /*out*/ readonly ipAddresses!: pulumi.Output<outputs.SqlDatabaseInstanceIpAddress[]>;
    /**
     * Maintenance version.
     */
    public readonly maintenanceVersion!: pulumi.Output<string>;
    /**
     * The name of the instance that will act as the master in the replication setup. Note, this requires the master to have
     * binary_log_enabled set, as well as existing backups.
     */
    public readonly masterInstanceName!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly privateIpAddress!: pulumi.Output<string>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * The link to service attachment of PSC instance.
     */
    public /*out*/ readonly pscServiceAttachmentLink!: pulumi.Output<string>;
    public /*out*/ readonly publicIpAddress!: pulumi.Output<string>;
    /**
     * The region the instance will sit in. Note, Cloud SQL is not available in all regions. A valid region must be provided to
     * use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but
     * this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not
     * to provide the region argument for this resource, make sure you understand this.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The configuration for replication.
     */
    public readonly replicaConfiguration!: pulumi.Output<outputs.SqlDatabaseInstanceReplicaConfiguration | undefined>;
    public readonly restoreBackupContext!: pulumi.Output<outputs.SqlDatabaseInstanceRestoreBackupContext | undefined>;
    /**
     * Initial root password. Required for MS SQL Server.
     */
    public readonly rootPassword!: pulumi.Output<string | undefined>;
    /**
     * The URI of the created resource.
     */
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    public /*out*/ readonly serverCaCerts!: pulumi.Output<outputs.SqlDatabaseInstanceServerCaCert[]>;
    /**
     * The service account email address assigned to the instance.
     */
    public /*out*/ readonly serviceAccountEmailAddress!: pulumi.Output<string>;
    /**
     * The settings to use for the database. The configuration is detailed below.
     */
    public readonly settings!: pulumi.Output<outputs.SqlDatabaseInstanceSettings | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.SqlDatabaseInstanceTimeouts | undefined>;

    /**
     * Create a SqlDatabaseInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlDatabaseInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SqlDatabaseInstanceArgs | SqlDatabaseInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SqlDatabaseInstanceState | undefined;
            resourceInputs["availableMaintenanceVersions"] = state ? state.availableMaintenanceVersions : undefined;
            resourceInputs["clone"] = state ? state.clone : undefined;
            resourceInputs["connectionName"] = state ? state.connectionName : undefined;
            resourceInputs["databaseVersion"] = state ? state.databaseVersion : undefined;
            resourceInputs["deletionProtection"] = state ? state.deletionProtection : undefined;
            resourceInputs["dnsName"] = state ? state.dnsName : undefined;
            resourceInputs["encryptionKeyName"] = state ? state.encryptionKeyName : undefined;
            resourceInputs["firstIpAddress"] = state ? state.firstIpAddress : undefined;
            resourceInputs["instanceType"] = state ? state.instanceType : undefined;
            resourceInputs["ipAddresses"] = state ? state.ipAddresses : undefined;
            resourceInputs["maintenanceVersion"] = state ? state.maintenanceVersion : undefined;
            resourceInputs["masterInstanceName"] = state ? state.masterInstanceName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateIpAddress"] = state ? state.privateIpAddress : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["pscServiceAttachmentLink"] = state ? state.pscServiceAttachmentLink : undefined;
            resourceInputs["publicIpAddress"] = state ? state.publicIpAddress : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["replicaConfiguration"] = state ? state.replicaConfiguration : undefined;
            resourceInputs["restoreBackupContext"] = state ? state.restoreBackupContext : undefined;
            resourceInputs["rootPassword"] = state ? state.rootPassword : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["serverCaCerts"] = state ? state.serverCaCerts : undefined;
            resourceInputs["serviceAccountEmailAddress"] = state ? state.serviceAccountEmailAddress : undefined;
            resourceInputs["settings"] = state ? state.settings : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SqlDatabaseInstanceArgs | undefined;
            if ((!args || args.databaseVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseVersion'");
            }
            resourceInputs["clone"] = args ? args.clone : undefined;
            resourceInputs["databaseVersion"] = args ? args.databaseVersion : undefined;
            resourceInputs["deletionProtection"] = args ? args.deletionProtection : undefined;
            resourceInputs["encryptionKeyName"] = args ? args.encryptionKeyName : undefined;
            resourceInputs["instanceType"] = args ? args.instanceType : undefined;
            resourceInputs["maintenanceVersion"] = args ? args.maintenanceVersion : undefined;
            resourceInputs["masterInstanceName"] = args ? args.masterInstanceName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["replicaConfiguration"] = args ? args.replicaConfiguration : undefined;
            resourceInputs["restoreBackupContext"] = args ? args.restoreBackupContext : undefined;
            resourceInputs["rootPassword"] = args?.rootPassword ? pulumi.secret(args.rootPassword) : undefined;
            resourceInputs["settings"] = args ? args.settings : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["availableMaintenanceVersions"] = undefined /*out*/;
            resourceInputs["connectionName"] = undefined /*out*/;
            resourceInputs["dnsName"] = undefined /*out*/;
            resourceInputs["firstIpAddress"] = undefined /*out*/;
            resourceInputs["ipAddresses"] = undefined /*out*/;
            resourceInputs["privateIpAddress"] = undefined /*out*/;
            resourceInputs["pscServiceAttachmentLink"] = undefined /*out*/;
            resourceInputs["publicIpAddress"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
            resourceInputs["serverCaCerts"] = undefined /*out*/;
            resourceInputs["serviceAccountEmailAddress"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["rootPassword", "serverCaCerts"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SqlDatabaseInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SqlDatabaseInstance resources.
 */
export interface SqlDatabaseInstanceState {
    /**
     * Available Maintenance versions.
     */
    availableMaintenanceVersions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Configuration for creating a new instance as a clone of another instance.
     */
    clone?: pulumi.Input<inputs.SqlDatabaseInstanceClone>;
    /**
     * The connection name of the instance to be used in connection strings. For example, when connecting with Cloud SQL Proxy.
     */
    connectionName?: pulumi.Input<string>;
    /**
     * The MySQL, PostgreSQL or SQL Server (beta) version to use. Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0,
     * POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, SQLSERVER_2017_STANDARD,
     * SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date
     * reference of supported versions.
     */
    databaseVersion?: pulumi.Input<string>;
    deletionProtection?: pulumi.Input<boolean>;
    /**
     * The dns name of the instance.
     */
    dnsName?: pulumi.Input<string>;
    encryptionKeyName?: pulumi.Input<string>;
    firstIpAddress?: pulumi.Input<string>;
    /**
     * The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE',
     * 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.
     */
    instanceType?: pulumi.Input<string>;
    ipAddresses?: pulumi.Input<pulumi.Input<inputs.SqlDatabaseInstanceIpAddress>[]>;
    /**
     * Maintenance version.
     */
    maintenanceVersion?: pulumi.Input<string>;
    /**
     * The name of the instance that will act as the master in the replication setup. Note, this requires the master to have
     * binary_log_enabled set, as well as existing backups.
     */
    masterInstanceName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    privateIpAddress?: pulumi.Input<string>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    project?: pulumi.Input<string>;
    /**
     * The link to service attachment of PSC instance.
     */
    pscServiceAttachmentLink?: pulumi.Input<string>;
    publicIpAddress?: pulumi.Input<string>;
    /**
     * The region the instance will sit in. Note, Cloud SQL is not available in all regions. A valid region must be provided to
     * use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but
     * this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not
     * to provide the region argument for this resource, make sure you understand this.
     */
    region?: pulumi.Input<string>;
    /**
     * The configuration for replication.
     */
    replicaConfiguration?: pulumi.Input<inputs.SqlDatabaseInstanceReplicaConfiguration>;
    restoreBackupContext?: pulumi.Input<inputs.SqlDatabaseInstanceRestoreBackupContext>;
    /**
     * Initial root password. Required for MS SQL Server.
     */
    rootPassword?: pulumi.Input<string>;
    /**
     * The URI of the created resource.
     */
    selfLink?: pulumi.Input<string>;
    serverCaCerts?: pulumi.Input<pulumi.Input<inputs.SqlDatabaseInstanceServerCaCert>[]>;
    /**
     * The service account email address assigned to the instance.
     */
    serviceAccountEmailAddress?: pulumi.Input<string>;
    /**
     * The settings to use for the database. The configuration is detailed below.
     */
    settings?: pulumi.Input<inputs.SqlDatabaseInstanceSettings>;
    timeouts?: pulumi.Input<inputs.SqlDatabaseInstanceTimeouts>;
}

/**
 * The set of arguments for constructing a SqlDatabaseInstance resource.
 */
export interface SqlDatabaseInstanceArgs {
    /**
     * Configuration for creating a new instance as a clone of another instance.
     */
    clone?: pulumi.Input<inputs.SqlDatabaseInstanceClone>;
    /**
     * The MySQL, PostgreSQL or SQL Server (beta) version to use. Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0,
     * POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, POSTGRES_15, SQLSERVER_2017_STANDARD,
     * SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date
     * reference of supported versions.
     */
    databaseVersion: pulumi.Input<string>;
    deletionProtection?: pulumi.Input<boolean>;
    encryptionKeyName?: pulumi.Input<string>;
    /**
     * The type of the instance. The valid values are:- 'SQL_INSTANCE_TYPE_UNSPECIFIED', 'CLOUD_SQL_INSTANCE',
     * 'ON_PREMISES_INSTANCE' and 'READ_REPLICA_INSTANCE'.
     */
    instanceType?: pulumi.Input<string>;
    /**
     * Maintenance version.
     */
    maintenanceVersion?: pulumi.Input<string>;
    /**
     * The name of the instance that will act as the master in the replication setup. Note, this requires the master to have
     * binary_log_enabled set, as well as existing backups.
     */
    masterInstanceName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    project?: pulumi.Input<string>;
    /**
     * The region the instance will sit in. Note, Cloud SQL is not available in all regions. A valid region must be provided to
     * use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but
     * this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not
     * to provide the region argument for this resource, make sure you understand this.
     */
    region?: pulumi.Input<string>;
    /**
     * The configuration for replication.
     */
    replicaConfiguration?: pulumi.Input<inputs.SqlDatabaseInstanceReplicaConfiguration>;
    restoreBackupContext?: pulumi.Input<inputs.SqlDatabaseInstanceRestoreBackupContext>;
    /**
     * Initial root password. Required for MS SQL Server.
     */
    rootPassword?: pulumi.Input<string>;
    /**
     * The settings to use for the database. The configuration is detailed below.
     */
    settings?: pulumi.Input<inputs.SqlDatabaseInstanceSettings>;
    timeouts?: pulumi.Input<inputs.SqlDatabaseInstanceTimeouts>;
}
