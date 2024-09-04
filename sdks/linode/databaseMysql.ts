// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseMysql extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseMysql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseMysqlState, opts?: pulumi.CustomResourceOptions): DatabaseMysql {
        return new DatabaseMysql(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'linode:index/databaseMysql:DatabaseMysql';

    /**
     * Returns true if the given object is an instance of DatabaseMysql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseMysql {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseMysql.__pulumiType;
    }

    /**
     * A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR
     * format.
     */
    public readonly allowLists!: pulumi.Output<string[]>;
    /**
     * The base64-encoded SSL CA certificate for the Managed Database instance.
     */
    public /*out*/ readonly caCert!: pulumi.Output<string>;
    /**
     * The number of Linode Instance nodes deployed to the Managed Database. Defaults to 1.
     */
    public readonly clusterSize!: pulumi.Output<number | undefined>;
    /**
     * When this Managed Database was created.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Whether the Managed Databases is encrypted.
     */
    public readonly encrypted!: pulumi.Output<boolean | undefined>;
    /**
     * The Managed Database engine.
     */
    public /*out*/ readonly engine!: pulumi.Output<string>;
    /**
     * The Managed Database engine in engine/version format. (e.g. mysql/8.0.30)
     */
    public readonly engineId!: pulumi.Output<string>;
    /**
     * The primary host for the Managed Database.
     */
    public /*out*/ readonly hostPrimary!: pulumi.Output<string>;
    /**
     * The secondary host for the Managed Database.
     */
    public /*out*/ readonly hostSecondary!: pulumi.Output<string>;
    /**
     * A unique, user-defined string referring to the Managed Database.
     */
    public readonly label!: pulumi.Output<string>;
    /**
     * The region to use for the Managed Database.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The replication method used for the Managed Database.
     */
    public readonly replicationType!: pulumi.Output<string | undefined>;
    /**
     * The randomly-generated root password for the Managed Database instance.
     */
    public /*out*/ readonly rootPassword!: pulumi.Output<string>;
    /**
     * The root username for the Managed Database instance.
     */
    public /*out*/ readonly rootUsername!: pulumi.Output<string>;
    /**
     * Whether to require SSL credentials to establish a connection to the Managed Database.
     */
    public readonly sslConnection!: pulumi.Output<boolean | undefined>;
    /**
     * The operating status of the Managed Database.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatabaseMysqlTimeouts | undefined>;
    /**
     * The Linode Instance type used by the Managed Database for its nodes.
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * When this Managed Database was last updated.
     */
    public /*out*/ readonly updated!: pulumi.Output<string>;
    /**
     * Configuration settings for automated patch update maintenance for the Managed Database.
     */
    public readonly updates!: pulumi.Output<outputs.DatabaseMysqlUpdates | undefined>;
    /**
     * The Managed Database engine version.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a DatabaseMysql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseMysqlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseMysqlArgs | DatabaseMysqlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseMysqlState | undefined;
            resourceInputs["allowLists"] = state ? state.allowLists : undefined;
            resourceInputs["caCert"] = state ? state.caCert : undefined;
            resourceInputs["clusterSize"] = state ? state.clusterSize : undefined;
            resourceInputs["created"] = state ? state.created : undefined;
            resourceInputs["encrypted"] = state ? state.encrypted : undefined;
            resourceInputs["engine"] = state ? state.engine : undefined;
            resourceInputs["engineId"] = state ? state.engineId : undefined;
            resourceInputs["hostPrimary"] = state ? state.hostPrimary : undefined;
            resourceInputs["hostSecondary"] = state ? state.hostSecondary : undefined;
            resourceInputs["label"] = state ? state.label : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["replicationType"] = state ? state.replicationType : undefined;
            resourceInputs["rootPassword"] = state ? state.rootPassword : undefined;
            resourceInputs["rootUsername"] = state ? state.rootUsername : undefined;
            resourceInputs["sslConnection"] = state ? state.sslConnection : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["updated"] = state ? state.updated : undefined;
            resourceInputs["updates"] = state ? state.updates : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as DatabaseMysqlArgs | undefined;
            if ((!args || args.engineId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'engineId'");
            }
            if ((!args || args.label === undefined) && !opts.urn) {
                throw new Error("Missing required property 'label'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["allowLists"] = args ? args.allowLists : undefined;
            resourceInputs["clusterSize"] = args ? args.clusterSize : undefined;
            resourceInputs["encrypted"] = args ? args.encrypted : undefined;
            resourceInputs["engineId"] = args ? args.engineId : undefined;
            resourceInputs["label"] = args ? args.label : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["replicationType"] = args ? args.replicationType : undefined;
            resourceInputs["sslConnection"] = args ? args.sslConnection : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["updates"] = args ? args.updates : undefined;
            resourceInputs["caCert"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["engine"] = undefined /*out*/;
            resourceInputs["hostPrimary"] = undefined /*out*/;
            resourceInputs["hostSecondary"] = undefined /*out*/;
            resourceInputs["rootPassword"] = undefined /*out*/;
            resourceInputs["rootUsername"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["updated"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["caCert", "rootPassword", "rootUsername"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DatabaseMysql.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseMysql resources.
 */
export interface DatabaseMysqlState {
    /**
     * A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR
     * format.
     */
    allowLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The base64-encoded SSL CA certificate for the Managed Database instance.
     */
    caCert?: pulumi.Input<string>;
    /**
     * The number of Linode Instance nodes deployed to the Managed Database. Defaults to 1.
     */
    clusterSize?: pulumi.Input<number>;
    /**
     * When this Managed Database was created.
     */
    created?: pulumi.Input<string>;
    /**
     * Whether the Managed Databases is encrypted.
     */
    encrypted?: pulumi.Input<boolean>;
    /**
     * The Managed Database engine.
     */
    engine?: pulumi.Input<string>;
    /**
     * The Managed Database engine in engine/version format. (e.g. mysql/8.0.30)
     */
    engineId?: pulumi.Input<string>;
    /**
     * The primary host for the Managed Database.
     */
    hostPrimary?: pulumi.Input<string>;
    /**
     * The secondary host for the Managed Database.
     */
    hostSecondary?: pulumi.Input<string>;
    /**
     * A unique, user-defined string referring to the Managed Database.
     */
    label?: pulumi.Input<string>;
    /**
     * The region to use for the Managed Database.
     */
    region?: pulumi.Input<string>;
    /**
     * The replication method used for the Managed Database.
     */
    replicationType?: pulumi.Input<string>;
    /**
     * The randomly-generated root password for the Managed Database instance.
     */
    rootPassword?: pulumi.Input<string>;
    /**
     * The root username for the Managed Database instance.
     */
    rootUsername?: pulumi.Input<string>;
    /**
     * Whether to require SSL credentials to establish a connection to the Managed Database.
     */
    sslConnection?: pulumi.Input<boolean>;
    /**
     * The operating status of the Managed Database.
     */
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseMysqlTimeouts>;
    /**
     * The Linode Instance type used by the Managed Database for its nodes.
     */
    type?: pulumi.Input<string>;
    /**
     * When this Managed Database was last updated.
     */
    updated?: pulumi.Input<string>;
    /**
     * Configuration settings for automated patch update maintenance for the Managed Database.
     */
    updates?: pulumi.Input<inputs.DatabaseMysqlUpdates>;
    /**
     * The Managed Database engine version.
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DatabaseMysql resource.
 */
export interface DatabaseMysqlArgs {
    /**
     * A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR
     * format.
     */
    allowLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The number of Linode Instance nodes deployed to the Managed Database. Defaults to 1.
     */
    clusterSize?: pulumi.Input<number>;
    /**
     * Whether the Managed Databases is encrypted.
     */
    encrypted?: pulumi.Input<boolean>;
    /**
     * The Managed Database engine in engine/version format. (e.g. mysql/8.0.30)
     */
    engineId: pulumi.Input<string>;
    /**
     * A unique, user-defined string referring to the Managed Database.
     */
    label: pulumi.Input<string>;
    /**
     * The region to use for the Managed Database.
     */
    region: pulumi.Input<string>;
    /**
     * The replication method used for the Managed Database.
     */
    replicationType?: pulumi.Input<string>;
    /**
     * Whether to require SSL credentials to establish a connection to the Managed Database.
     */
    sslConnection?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.DatabaseMysqlTimeouts>;
    /**
     * The Linode Instance type used by the Managed Database for its nodes.
     */
    type: pulumi.Input<string>;
    /**
     * Configuration settings for automated patch update maintenance for the Managed Database.
     */
    updates?: pulumi.Input<inputs.DatabaseMysqlUpdates>;
}
