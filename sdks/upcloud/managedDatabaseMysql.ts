// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ManagedDatabaseMysql extends pulumi.CustomResource {
    /**
     * Get an existing ManagedDatabaseMysql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagedDatabaseMysqlState, opts?: pulumi.CustomResourceOptions): ManagedDatabaseMysql {
        return new ManagedDatabaseMysql(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'upcloud:index/managedDatabaseMysql:ManagedDatabaseMysql';

    /**
     * Returns true if the given object is an instance of ManagedDatabaseMysql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedDatabaseMysql {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedDatabaseMysql.__pulumiType;
    }

    /**
     * Service component information
     */
    public /*out*/ readonly components!: pulumi.Output<outputs.ManagedDatabaseMysqlComponent[]>;
    /**
     * User defined key-value pairs to classify the managed database.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Maintenance window day of week. Lower case weekday name (monday, tuesday, ...)
     */
    public readonly maintenanceWindowDow!: pulumi.Output<string>;
    /**
     * Maintenance window UTC time in hh:mm:ss format
     */
    public readonly maintenanceWindowTime!: pulumi.Output<string>;
    /**
     * Name of the service. The name is used as a prefix for the logical hostname. Must be unique within an account
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Private networks attached to the managed database
     */
    public readonly networks!: pulumi.Output<outputs.ManagedDatabaseMysqlNetwork[] | undefined>;
    /**
     * Information about nodes providing the managed service
     */
    public /*out*/ readonly nodeStates!: pulumi.Output<outputs.ManagedDatabaseMysqlNodeState[]>;
    /**
     * Service plan to use. This determines how much resources the instance will have. You can list available plans with `upctl
     * database plans <type>`.
     */
    public readonly plan!: pulumi.Output<string>;
    /**
     * The administrative power state of the service
     */
    public readonly powered!: pulumi.Output<boolean | undefined>;
    /**
     * Primary database name
     */
    public /*out*/ readonly primaryDatabase!: pulumi.Output<string>;
    /**
     * Database Engine properties for MySQL
     */
    public readonly properties!: pulumi.Output<outputs.ManagedDatabaseMysqlProperties | undefined>;
    /**
     * Hostname to the service instance
     */
    public /*out*/ readonly serviceHost!: pulumi.Output<string>;
    /**
     * Primary username's password to the service instance
     */
    public /*out*/ readonly servicePassword!: pulumi.Output<string>;
    /**
     * Port to the service instance
     */
    public /*out*/ readonly servicePort!: pulumi.Output<string>;
    /**
     * URI to the service instance
     */
    public /*out*/ readonly serviceUri!: pulumi.Output<string>;
    /**
     * Primary username to the service instance
     */
    public /*out*/ readonly serviceUsername!: pulumi.Output<string>;
    /**
     * State of the service
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Title of a managed database instance
     */
    public readonly title!: pulumi.Output<string>;
    /**
     * Type of the service
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a ManagedDatabaseMysql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedDatabaseMysqlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagedDatabaseMysqlArgs | ManagedDatabaseMysqlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagedDatabaseMysqlState | undefined;
            resourceInputs["components"] = state ? state.components : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["maintenanceWindowDow"] = state ? state.maintenanceWindowDow : undefined;
            resourceInputs["maintenanceWindowTime"] = state ? state.maintenanceWindowTime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networks"] = state ? state.networks : undefined;
            resourceInputs["nodeStates"] = state ? state.nodeStates : undefined;
            resourceInputs["plan"] = state ? state.plan : undefined;
            resourceInputs["powered"] = state ? state.powered : undefined;
            resourceInputs["primaryDatabase"] = state ? state.primaryDatabase : undefined;
            resourceInputs["properties"] = state ? state.properties : undefined;
            resourceInputs["serviceHost"] = state ? state.serviceHost : undefined;
            resourceInputs["servicePassword"] = state ? state.servicePassword : undefined;
            resourceInputs["servicePort"] = state ? state.servicePort : undefined;
            resourceInputs["serviceUri"] = state ? state.serviceUri : undefined;
            resourceInputs["serviceUsername"] = state ? state.serviceUsername : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as ManagedDatabaseMysqlArgs | undefined;
            if ((!args || args.plan === undefined) && !opts.urn) {
                throw new Error("Missing required property 'plan'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            if ((!args || args.zone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zone'");
            }
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["maintenanceWindowDow"] = args ? args.maintenanceWindowDow : undefined;
            resourceInputs["maintenanceWindowTime"] = args ? args.maintenanceWindowTime : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networks"] = args ? args.networks : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["powered"] = args ? args.powered : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["components"] = undefined /*out*/;
            resourceInputs["nodeStates"] = undefined /*out*/;
            resourceInputs["primaryDatabase"] = undefined /*out*/;
            resourceInputs["serviceHost"] = undefined /*out*/;
            resourceInputs["servicePassword"] = undefined /*out*/;
            resourceInputs["servicePort"] = undefined /*out*/;
            resourceInputs["serviceUri"] = undefined /*out*/;
            resourceInputs["serviceUsername"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["servicePassword", "serviceUri"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ManagedDatabaseMysql.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagedDatabaseMysql resources.
 */
export interface ManagedDatabaseMysqlState {
    /**
     * Service component information
     */
    components?: pulumi.Input<pulumi.Input<inputs.ManagedDatabaseMysqlComponent>[]>;
    /**
     * User defined key-value pairs to classify the managed database.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Maintenance window day of week. Lower case weekday name (monday, tuesday, ...)
     */
    maintenanceWindowDow?: pulumi.Input<string>;
    /**
     * Maintenance window UTC time in hh:mm:ss format
     */
    maintenanceWindowTime?: pulumi.Input<string>;
    /**
     * Name of the service. The name is used as a prefix for the logical hostname. Must be unique within an account
     */
    name?: pulumi.Input<string>;
    /**
     * Private networks attached to the managed database
     */
    networks?: pulumi.Input<pulumi.Input<inputs.ManagedDatabaseMysqlNetwork>[]>;
    /**
     * Information about nodes providing the managed service
     */
    nodeStates?: pulumi.Input<pulumi.Input<inputs.ManagedDatabaseMysqlNodeState>[]>;
    /**
     * Service plan to use. This determines how much resources the instance will have. You can list available plans with `upctl
     * database plans <type>`.
     */
    plan?: pulumi.Input<string>;
    /**
     * The administrative power state of the service
     */
    powered?: pulumi.Input<boolean>;
    /**
     * Primary database name
     */
    primaryDatabase?: pulumi.Input<string>;
    /**
     * Database Engine properties for MySQL
     */
    properties?: pulumi.Input<inputs.ManagedDatabaseMysqlProperties>;
    /**
     * Hostname to the service instance
     */
    serviceHost?: pulumi.Input<string>;
    /**
     * Primary username's password to the service instance
     */
    servicePassword?: pulumi.Input<string>;
    /**
     * Port to the service instance
     */
    servicePort?: pulumi.Input<string>;
    /**
     * URI to the service instance
     */
    serviceUri?: pulumi.Input<string>;
    /**
     * Primary username to the service instance
     */
    serviceUsername?: pulumi.Input<string>;
    /**
     * State of the service
     */
    state?: pulumi.Input<string>;
    /**
     * Title of a managed database instance
     */
    title?: pulumi.Input<string>;
    /**
     * Type of the service
     */
    type?: pulumi.Input<string>;
    /**
     * Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ManagedDatabaseMysql resource.
 */
export interface ManagedDatabaseMysqlArgs {
    /**
     * User defined key-value pairs to classify the managed database.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Maintenance window day of week. Lower case weekday name (monday, tuesday, ...)
     */
    maintenanceWindowDow?: pulumi.Input<string>;
    /**
     * Maintenance window UTC time in hh:mm:ss format
     */
    maintenanceWindowTime?: pulumi.Input<string>;
    /**
     * Name of the service. The name is used as a prefix for the logical hostname. Must be unique within an account
     */
    name?: pulumi.Input<string>;
    /**
     * Private networks attached to the managed database
     */
    networks?: pulumi.Input<pulumi.Input<inputs.ManagedDatabaseMysqlNetwork>[]>;
    /**
     * Service plan to use. This determines how much resources the instance will have. You can list available plans with `upctl
     * database plans <type>`.
     */
    plan: pulumi.Input<string>;
    /**
     * The administrative power state of the service
     */
    powered?: pulumi.Input<boolean>;
    /**
     * Database Engine properties for MySQL
     */
    properties?: pulumi.Input<inputs.ManagedDatabaseMysqlProperties>;
    /**
     * Title of a managed database instance
     */
    title: pulumi.Input<string>;
    /**
     * Zone where the instance resides, e.g. `de-fra1`. You can list available zones with `upctl zone list`.
     */
    zone: pulumi.Input<string>;
}
