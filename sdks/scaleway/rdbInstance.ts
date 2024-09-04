// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RdbInstance extends pulumi.CustomResource {
    /**
     * Get an existing RdbInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RdbInstanceState, opts?: pulumi.CustomResourceOptions): RdbInstance {
        return new RdbInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/rdbInstance:RdbInstance';

    /**
     * Returns true if the given object is an instance of RdbInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RdbInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RdbInstance.__pulumiType;
    }

    /**
     * Boolean to store logical backups in the same region as the database instance
     */
    public readonly backupSameRegion!: pulumi.Output<boolean>;
    /**
     * Backup schedule frequency in hours
     */
    public readonly backupScheduleFrequency!: pulumi.Output<number>;
    /**
     * Backup schedule retention in days
     */
    public readonly backupScheduleRetention!: pulumi.Output<number>;
    /**
     * Certificate of the database instance
     */
    public /*out*/ readonly certificate!: pulumi.Output<string>;
    /**
     * Disable automated backup for the database instance
     */
    public readonly disableBackup!: pulumi.Output<boolean | undefined>;
    /**
     * Enable or disable encryption at rest for the database instance
     */
    public readonly encryptionAtRest!: pulumi.Output<boolean | undefined>;
    /**
     * Endpoint IP of the database instance
     *
     * @deprecated Deprecated
     */
    public /*out*/ readonly endpointIp!: pulumi.Output<string>;
    /**
     * Endpoint port of the database instance
     */
    public /*out*/ readonly endpointPort!: pulumi.Output<number>;
    /**
     * Database's engine version id
     */
    public readonly engine!: pulumi.Output<string>;
    /**
     * Map of engine settings to be set at database initialisation.
     */
    public readonly initSettings!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Enable or disable high availability for the database instance
     */
    public readonly isHaCluster!: pulumi.Output<boolean | undefined>;
    /**
     * Load balancer of the database instance
     */
    public readonly loadBalancers!: pulumi.Output<outputs.RdbInstanceLoadBalancer[] | undefined>;
    /**
     * Logs policy configuration
     */
    public readonly logsPolicy!: pulumi.Output<outputs.RdbInstanceLogsPolicy | undefined>;
    /**
     * Name of the database instance
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The type of database instance you want to create
     */
    public readonly nodeType!: pulumi.Output<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * Password for the first user of the database instance
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * List of private network to expose your database instance
     */
    public readonly privateNetwork!: pulumi.Output<outputs.RdbInstancePrivateNetwork | undefined>;
    /**
     * The project_id you want to attach the resource to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Read replicas of the database instance
     */
    public /*out*/ readonly readReplicas!: pulumi.Output<outputs.RdbInstanceReadReplica[]>;
    /**
     * The region you want to attach the resource to
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * Map of engine settings to be set on a running instance.
     */
    public readonly settings!: pulumi.Output<{[key: string]: string}>;
    /**
     * List of tags ["tag1", "tag2", ...] attached to a database instance
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.RdbInstanceTimeouts | undefined>;
    /**
     * Identifier for the first user of the database instance
     */
    public readonly userName!: pulumi.Output<string>;
    /**
     * Volume size (in GB) when volume_type is not lssd
     */
    public readonly volumeSizeInGb!: pulumi.Output<number>;
    /**
     * Type of volume where data are stored
     */
    public readonly volumeType!: pulumi.Output<string | undefined>;

    /**
     * Create a RdbInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RdbInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RdbInstanceArgs | RdbInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RdbInstanceState | undefined;
            resourceInputs["backupSameRegion"] = state ? state.backupSameRegion : undefined;
            resourceInputs["backupScheduleFrequency"] = state ? state.backupScheduleFrequency : undefined;
            resourceInputs["backupScheduleRetention"] = state ? state.backupScheduleRetention : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["disableBackup"] = state ? state.disableBackup : undefined;
            resourceInputs["encryptionAtRest"] = state ? state.encryptionAtRest : undefined;
            resourceInputs["endpointIp"] = state ? state.endpointIp : undefined;
            resourceInputs["endpointPort"] = state ? state.endpointPort : undefined;
            resourceInputs["engine"] = state ? state.engine : undefined;
            resourceInputs["initSettings"] = state ? state.initSettings : undefined;
            resourceInputs["isHaCluster"] = state ? state.isHaCluster : undefined;
            resourceInputs["loadBalancers"] = state ? state.loadBalancers : undefined;
            resourceInputs["logsPolicy"] = state ? state.logsPolicy : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nodeType"] = state ? state.nodeType : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["privateNetwork"] = state ? state.privateNetwork : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["readReplicas"] = state ? state.readReplicas : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["settings"] = state ? state.settings : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userName"] = state ? state.userName : undefined;
            resourceInputs["volumeSizeInGb"] = state ? state.volumeSizeInGb : undefined;
            resourceInputs["volumeType"] = state ? state.volumeType : undefined;
        } else {
            const args = argsOrState as RdbInstanceArgs | undefined;
            if ((!args || args.engine === undefined) && !opts.urn) {
                throw new Error("Missing required property 'engine'");
            }
            if ((!args || args.nodeType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nodeType'");
            }
            resourceInputs["backupSameRegion"] = args ? args.backupSameRegion : undefined;
            resourceInputs["backupScheduleFrequency"] = args ? args.backupScheduleFrequency : undefined;
            resourceInputs["backupScheduleRetention"] = args ? args.backupScheduleRetention : undefined;
            resourceInputs["disableBackup"] = args ? args.disableBackup : undefined;
            resourceInputs["encryptionAtRest"] = args ? args.encryptionAtRest : undefined;
            resourceInputs["engine"] = args ? args.engine : undefined;
            resourceInputs["initSettings"] = args ? args.initSettings : undefined;
            resourceInputs["isHaCluster"] = args ? args.isHaCluster : undefined;
            resourceInputs["loadBalancers"] = args ? args.loadBalancers : undefined;
            resourceInputs["logsPolicy"] = args ? args.logsPolicy : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nodeType"] = args ? args.nodeType : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["privateNetwork"] = args ? args.privateNetwork : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["settings"] = args ? args.settings : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["volumeSizeInGb"] = args ? args.volumeSizeInGb : undefined;
            resourceInputs["volumeType"] = args ? args.volumeType : undefined;
            resourceInputs["certificate"] = undefined /*out*/;
            resourceInputs["endpointIp"] = undefined /*out*/;
            resourceInputs["endpointPort"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["readReplicas"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(RdbInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RdbInstance resources.
 */
export interface RdbInstanceState {
    /**
     * Boolean to store logical backups in the same region as the database instance
     */
    backupSameRegion?: pulumi.Input<boolean>;
    /**
     * Backup schedule frequency in hours
     */
    backupScheduleFrequency?: pulumi.Input<number>;
    /**
     * Backup schedule retention in days
     */
    backupScheduleRetention?: pulumi.Input<number>;
    /**
     * Certificate of the database instance
     */
    certificate?: pulumi.Input<string>;
    /**
     * Disable automated backup for the database instance
     */
    disableBackup?: pulumi.Input<boolean>;
    /**
     * Enable or disable encryption at rest for the database instance
     */
    encryptionAtRest?: pulumi.Input<boolean>;
    /**
     * Endpoint IP of the database instance
     *
     * @deprecated Deprecated
     */
    endpointIp?: pulumi.Input<string>;
    /**
     * Endpoint port of the database instance
     */
    endpointPort?: pulumi.Input<number>;
    /**
     * Database's engine version id
     */
    engine?: pulumi.Input<string>;
    /**
     * Map of engine settings to be set at database initialisation.
     */
    initSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Enable or disable high availability for the database instance
     */
    isHaCluster?: pulumi.Input<boolean>;
    /**
     * Load balancer of the database instance
     */
    loadBalancers?: pulumi.Input<pulumi.Input<inputs.RdbInstanceLoadBalancer>[]>;
    /**
     * Logs policy configuration
     */
    logsPolicy?: pulumi.Input<inputs.RdbInstanceLogsPolicy>;
    /**
     * Name of the database instance
     */
    name?: pulumi.Input<string>;
    /**
     * The type of database instance you want to create
     */
    nodeType?: pulumi.Input<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    organizationId?: pulumi.Input<string>;
    /**
     * Password for the first user of the database instance
     */
    password?: pulumi.Input<string>;
    /**
     * List of private network to expose your database instance
     */
    privateNetwork?: pulumi.Input<inputs.RdbInstancePrivateNetwork>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * Read replicas of the database instance
     */
    readReplicas?: pulumi.Input<pulumi.Input<inputs.RdbInstanceReadReplica>[]>;
    /**
     * The region you want to attach the resource to
     */
    region?: pulumi.Input<string>;
    /**
     * Map of engine settings to be set on a running instance.
     */
    settings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of tags ["tag1", "tag2", ...] attached to a database instance
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.RdbInstanceTimeouts>;
    /**
     * Identifier for the first user of the database instance
     */
    userName?: pulumi.Input<string>;
    /**
     * Volume size (in GB) when volume_type is not lssd
     */
    volumeSizeInGb?: pulumi.Input<number>;
    /**
     * Type of volume where data are stored
     */
    volumeType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RdbInstance resource.
 */
export interface RdbInstanceArgs {
    /**
     * Boolean to store logical backups in the same region as the database instance
     */
    backupSameRegion?: pulumi.Input<boolean>;
    /**
     * Backup schedule frequency in hours
     */
    backupScheduleFrequency?: pulumi.Input<number>;
    /**
     * Backup schedule retention in days
     */
    backupScheduleRetention?: pulumi.Input<number>;
    /**
     * Disable automated backup for the database instance
     */
    disableBackup?: pulumi.Input<boolean>;
    /**
     * Enable or disable encryption at rest for the database instance
     */
    encryptionAtRest?: pulumi.Input<boolean>;
    /**
     * Database's engine version id
     */
    engine: pulumi.Input<string>;
    /**
     * Map of engine settings to be set at database initialisation.
     */
    initSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Enable or disable high availability for the database instance
     */
    isHaCluster?: pulumi.Input<boolean>;
    /**
     * Load balancer of the database instance
     */
    loadBalancers?: pulumi.Input<pulumi.Input<inputs.RdbInstanceLoadBalancer>[]>;
    /**
     * Logs policy configuration
     */
    logsPolicy?: pulumi.Input<inputs.RdbInstanceLogsPolicy>;
    /**
     * Name of the database instance
     */
    name?: pulumi.Input<string>;
    /**
     * The type of database instance you want to create
     */
    nodeType: pulumi.Input<string>;
    /**
     * Password for the first user of the database instance
     */
    password?: pulumi.Input<string>;
    /**
     * List of private network to expose your database instance
     */
    privateNetwork?: pulumi.Input<inputs.RdbInstancePrivateNetwork>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * The region you want to attach the resource to
     */
    region?: pulumi.Input<string>;
    /**
     * Map of engine settings to be set on a running instance.
     */
    settings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of tags ["tag1", "tag2", ...] attached to a database instance
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.RdbInstanceTimeouts>;
    /**
     * Identifier for the first user of the database instance
     */
    userName?: pulumi.Input<string>;
    /**
     * Volume size (in GB) when volume_type is not lssd
     */
    volumeSizeInGb?: pulumi.Input<number>;
    /**
     * Type of volume where data are stored
     */
    volumeType?: pulumi.Input<string>;
}
