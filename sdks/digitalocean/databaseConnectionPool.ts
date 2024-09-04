// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DatabaseConnectionPool extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseConnectionPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseConnectionPoolState, opts?: pulumi.CustomResourceOptions): DatabaseConnectionPool {
        return new DatabaseConnectionPool(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'digitalocean:index/databaseConnectionPool:DatabaseConnectionPool';

    /**
     * Returns true if the given object is an instance of DatabaseConnectionPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseConnectionPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseConnectionPool.__pulumiType;
    }

    public readonly clusterId!: pulumi.Output<string>;
    public readonly dbName!: pulumi.Output<string>;
    public /*out*/ readonly host!: pulumi.Output<string>;
    public readonly mode!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly password!: pulumi.Output<string>;
    public /*out*/ readonly port!: pulumi.Output<number>;
    public /*out*/ readonly privateHost!: pulumi.Output<string>;
    public /*out*/ readonly privateUri!: pulumi.Output<string>;
    public readonly size!: pulumi.Output<number>;
    public /*out*/ readonly uri!: pulumi.Output<string>;
    public readonly user!: pulumi.Output<string | undefined>;

    /**
     * Create a DatabaseConnectionPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseConnectionPoolArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseConnectionPoolArgs | DatabaseConnectionPoolState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseConnectionPoolState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["dbName"] = state ? state.dbName : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["privateHost"] = state ? state.privateHost : undefined;
            resourceInputs["privateUri"] = state ? state.privateUri : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["uri"] = state ? state.uri : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as DatabaseConnectionPoolArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.dbName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dbName'");
            }
            if ((!args || args.mode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mode'");
            }
            if ((!args || args.size === undefined) && !opts.urn) {
                throw new Error("Missing required property 'size'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["dbName"] = args ? args.dbName : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["host"] = undefined /*out*/;
            resourceInputs["password"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["privateHost"] = undefined /*out*/;
            resourceInputs["privateUri"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password", "privateUri", "uri"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DatabaseConnectionPool.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseConnectionPool resources.
 */
export interface DatabaseConnectionPoolState {
    clusterId?: pulumi.Input<string>;
    dbName?: pulumi.Input<string>;
    host?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    privateHost?: pulumi.Input<string>;
    privateUri?: pulumi.Input<string>;
    size?: pulumi.Input<number>;
    uri?: pulumi.Input<string>;
    user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DatabaseConnectionPool resource.
 */
export interface DatabaseConnectionPoolArgs {
    clusterId: pulumi.Input<string>;
    dbName: pulumi.Input<string>;
    mode: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    size: pulumi.Input<number>;
    user?: pulumi.Input<string>;
}
