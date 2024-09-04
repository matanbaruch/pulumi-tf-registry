// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Database extends pulumi.CustomResource {
    /**
     * Get an existing Database resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseState, opts?: pulumi.CustomResourceOptions): Database {
        return new Database(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sakuracloud:index/database:Database';

    /**
     * Returns true if the given object is an instance of Database.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Database {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Database.__pulumiType;
    }

    public readonly backup!: pulumi.Output<outputs.DatabaseBackup | undefined>;
    /**
     * The type of the database. This must be one of [`mariadb`/`postgres`]
     */
    public readonly databaseType!: pulumi.Output<string | undefined>;
    /**
     * The version of the database
     */
    public readonly databaseVersion!: pulumi.Output<string>;
    /**
     * The description of the Database. The length of this value must be in the range [`1`-`512`]
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The icon id to attach to the Database
     */
    public readonly iconId!: pulumi.Output<string | undefined>;
    /**
     * The name of the Database. The length of this value must be in the range [`1`-`64`]
     */
    public readonly name!: pulumi.Output<string>;
    public readonly networkInterface!: pulumi.Output<outputs.DatabaseNetworkInterface>;
    /**
     * The map for setting RDBMS-specific parameters. Valid keys can be found with the `usacloud database list-parameters`
     * command
     */
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The password of default user on the database
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * The plan name of the Database. This must be one of [`10g`/`30g`/`90g`/`240g`/`500g`/`1t`]
     */
    public readonly plan!: pulumi.Output<string | undefined>;
    /**
     * The password of user that processing a replication
     */
    public readonly replicaPassword!: pulumi.Output<string | undefined>;
    /**
     * The name of user that processing a replication
     */
    public readonly replicaUser!: pulumi.Output<string | undefined>;
    /**
     * Any tags to assign to the Database
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.DatabaseTimeouts | undefined>;
    /**
     * The name of default user on the database. The length of this value must be in the range [`3`-`20`]
     */
    public readonly username!: pulumi.Output<string>;
    /**
     * The name of zone that the Database will be created (e.g. `is1a`, `tk1a`)
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a Database resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseArgs | DatabaseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseState | undefined;
            resourceInputs["backup"] = state ? state.backup : undefined;
            resourceInputs["databaseType"] = state ? state.databaseType : undefined;
            resourceInputs["databaseVersion"] = state ? state.databaseVersion : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["iconId"] = state ? state.iconId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkInterface"] = state ? state.networkInterface : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["plan"] = state ? state.plan : undefined;
            resourceInputs["replicaPassword"] = state ? state.replicaPassword : undefined;
            resourceInputs["replicaUser"] = state ? state.replicaUser : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as DatabaseArgs | undefined;
            if ((!args || args.networkInterface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkInterface'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["backup"] = args ? args.backup : undefined;
            resourceInputs["databaseType"] = args ? args.databaseType : undefined;
            resourceInputs["databaseVersion"] = args ? args.databaseVersion : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["iconId"] = args ? args.iconId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkInterface"] = args ? args.networkInterface : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["plan"] = args ? args.plan : undefined;
            resourceInputs["replicaPassword"] = args?.replicaPassword ? pulumi.secret(args.replicaPassword) : undefined;
            resourceInputs["replicaUser"] = args ? args.replicaUser : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password", "replicaPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Database.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Database resources.
 */
export interface DatabaseState {
    backup?: pulumi.Input<inputs.DatabaseBackup>;
    /**
     * The type of the database. This must be one of [`mariadb`/`postgres`]
     */
    databaseType?: pulumi.Input<string>;
    /**
     * The version of the database
     */
    databaseVersion?: pulumi.Input<string>;
    /**
     * The description of the Database. The length of this value must be in the range [`1`-`512`]
     */
    description?: pulumi.Input<string>;
    /**
     * The icon id to attach to the Database
     */
    iconId?: pulumi.Input<string>;
    /**
     * The name of the Database. The length of this value must be in the range [`1`-`64`]
     */
    name?: pulumi.Input<string>;
    networkInterface?: pulumi.Input<inputs.DatabaseNetworkInterface>;
    /**
     * The map for setting RDBMS-specific parameters. Valid keys can be found with the `usacloud database list-parameters`
     * command
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The password of default user on the database
     */
    password?: pulumi.Input<string>;
    /**
     * The plan name of the Database. This must be one of [`10g`/`30g`/`90g`/`240g`/`500g`/`1t`]
     */
    plan?: pulumi.Input<string>;
    /**
     * The password of user that processing a replication
     */
    replicaPassword?: pulumi.Input<string>;
    /**
     * The name of user that processing a replication
     */
    replicaUser?: pulumi.Input<string>;
    /**
     * Any tags to assign to the Database
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.DatabaseTimeouts>;
    /**
     * The name of default user on the database. The length of this value must be in the range [`3`-`20`]
     */
    username?: pulumi.Input<string>;
    /**
     * The name of zone that the Database will be created (e.g. `is1a`, `tk1a`)
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Database resource.
 */
export interface DatabaseArgs {
    backup?: pulumi.Input<inputs.DatabaseBackup>;
    /**
     * The type of the database. This must be one of [`mariadb`/`postgres`]
     */
    databaseType?: pulumi.Input<string>;
    /**
     * The version of the database
     */
    databaseVersion?: pulumi.Input<string>;
    /**
     * The description of the Database. The length of this value must be in the range [`1`-`512`]
     */
    description?: pulumi.Input<string>;
    /**
     * The icon id to attach to the Database
     */
    iconId?: pulumi.Input<string>;
    /**
     * The name of the Database. The length of this value must be in the range [`1`-`64`]
     */
    name?: pulumi.Input<string>;
    networkInterface: pulumi.Input<inputs.DatabaseNetworkInterface>;
    /**
     * The map for setting RDBMS-specific parameters. Valid keys can be found with the `usacloud database list-parameters`
     * command
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The password of default user on the database
     */
    password: pulumi.Input<string>;
    /**
     * The plan name of the Database. This must be one of [`10g`/`30g`/`90g`/`240g`/`500g`/`1t`]
     */
    plan?: pulumi.Input<string>;
    /**
     * The password of user that processing a replication
     */
    replicaPassword?: pulumi.Input<string>;
    /**
     * The name of user that processing a replication
     */
    replicaUser?: pulumi.Input<string>;
    /**
     * Any tags to assign to the Database
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.DatabaseTimeouts>;
    /**
     * The name of default user on the database. The length of this value must be in the range [`3`-`20`]
     */
    username: pulumi.Input<string>;
    /**
     * The name of zone that the Database will be created (e.g. `is1a`, `tk1a`)
     */
    zone?: pulumi.Input<string>;
}
