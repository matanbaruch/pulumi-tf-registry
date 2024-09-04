// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Grant extends pulumi.CustomResource {
    /**
     * Get an existing Grant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GrantState, opts?: pulumi.CustomResourceOptions): Grant {
        return new Grant(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'postgresql:index/grant:Grant';

    /**
     * Returns true if the given object is an instance of Grant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Grant {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Grant.__pulumiType;
    }

    /**
     * The specific columns to grant privileges on for this role
     */
    public readonly columns!: pulumi.Output<string[] | undefined>;
    /**
     * The database to grant privileges on for this role
     */
    public readonly database!: pulumi.Output<string>;
    /**
     * The PostgreSQL object type to grant the privileges on (one of: database, function, procedure, routine, schema, sequence,
     * table, foreign_data_wrapper, foreign_server, column)
     */
    public readonly objectType!: pulumi.Output<string>;
    /**
     * The specific objects to grant privileges on for this role (empty means all objects of the requested type)
     */
    public readonly objects!: pulumi.Output<string[] | undefined>;
    /**
     * The list of privileges to grant
     */
    public readonly privileges!: pulumi.Output<string[]>;
    /**
     * The name of the role to grant privileges on
     */
    public readonly role!: pulumi.Output<string>;
    /**
     * The database schema to grant privileges on for this role
     */
    public readonly schema!: pulumi.Output<string | undefined>;
    /**
     * Permit the grant recipient to grant it to others
     */
    public readonly withGrantOption!: pulumi.Output<boolean | undefined>;

    /**
     * Create a Grant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GrantArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GrantArgs | GrantState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GrantState | undefined;
            resourceInputs["columns"] = state ? state.columns : undefined;
            resourceInputs["database"] = state ? state.database : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["objects"] = state ? state.objects : undefined;
            resourceInputs["privileges"] = state ? state.privileges : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["schema"] = state ? state.schema : undefined;
            resourceInputs["withGrantOption"] = state ? state.withGrantOption : undefined;
        } else {
            const args = argsOrState as GrantArgs | undefined;
            if ((!args || args.database === undefined) && !opts.urn) {
                throw new Error("Missing required property 'database'");
            }
            if ((!args || args.objectType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'objectType'");
            }
            if ((!args || args.privileges === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privileges'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["columns"] = args ? args.columns : undefined;
            resourceInputs["database"] = args ? args.database : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["objects"] = args ? args.objects : undefined;
            resourceInputs["privileges"] = args ? args.privileges : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["schema"] = args ? args.schema : undefined;
            resourceInputs["withGrantOption"] = args ? args.withGrantOption : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Grant.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Grant resources.
 */
export interface GrantState {
    /**
     * The specific columns to grant privileges on for this role
     */
    columns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The database to grant privileges on for this role
     */
    database?: pulumi.Input<string>;
    /**
     * The PostgreSQL object type to grant the privileges on (one of: database, function, procedure, routine, schema, sequence,
     * table, foreign_data_wrapper, foreign_server, column)
     */
    objectType?: pulumi.Input<string>;
    /**
     * The specific objects to grant privileges on for this role (empty means all objects of the requested type)
     */
    objects?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of privileges to grant
     */
    privileges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the role to grant privileges on
     */
    role?: pulumi.Input<string>;
    /**
     * The database schema to grant privileges on for this role
     */
    schema?: pulumi.Input<string>;
    /**
     * Permit the grant recipient to grant it to others
     */
    withGrantOption?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Grant resource.
 */
export interface GrantArgs {
    /**
     * The specific columns to grant privileges on for this role
     */
    columns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The database to grant privileges on for this role
     */
    database: pulumi.Input<string>;
    /**
     * The PostgreSQL object type to grant the privileges on (one of: database, function, procedure, routine, schema, sequence,
     * table, foreign_data_wrapper, foreign_server, column)
     */
    objectType: pulumi.Input<string>;
    /**
     * The specific objects to grant privileges on for this role (empty means all objects of the requested type)
     */
    objects?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of privileges to grant
     */
    privileges: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the role to grant privileges on
     */
    role: pulumi.Input<string>;
    /**
     * The database schema to grant privileges on for this role
     */
    schema?: pulumi.Input<string>;
    /**
     * Permit the grant recipient to grant it to others
     */
    withGrantOption?: pulumi.Input<boolean>;
}
