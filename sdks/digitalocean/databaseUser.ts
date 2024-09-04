// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseUser extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseUserState, opts?: pulumi.CustomResourceOptions): DatabaseUser {
        return new DatabaseUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'digitalocean:index/databaseUser:DatabaseUser';

    /**
     * Returns true if the given object is an instance of DatabaseUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseUser.__pulumiType;
    }

    public /*out*/ readonly accessCert!: pulumi.Output<string>;
    public /*out*/ readonly accessKey!: pulumi.Output<string>;
    public readonly clusterId!: pulumi.Output<string>;
    public readonly mysqlAuthPlugin!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly password!: pulumi.Output<string>;
    public /*out*/ readonly role!: pulumi.Output<string>;
    public readonly settings!: pulumi.Output<outputs.DatabaseUserSetting[] | undefined>;

    /**
     * Create a DatabaseUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseUserArgs | DatabaseUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseUserState | undefined;
            resourceInputs["accessCert"] = state ? state.accessCert : undefined;
            resourceInputs["accessKey"] = state ? state.accessKey : undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["mysqlAuthPlugin"] = state ? state.mysqlAuthPlugin : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["settings"] = state ? state.settings : undefined;
        } else {
            const args = argsOrState as DatabaseUserArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["mysqlAuthPlugin"] = args ? args.mysqlAuthPlugin : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["settings"] = args ? args.settings : undefined;
            resourceInputs["accessCert"] = undefined /*out*/;
            resourceInputs["accessKey"] = undefined /*out*/;
            resourceInputs["password"] = undefined /*out*/;
            resourceInputs["role"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessCert", "accessKey", "password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DatabaseUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseUser resources.
 */
export interface DatabaseUserState {
    accessCert?: pulumi.Input<string>;
    accessKey?: pulumi.Input<string>;
    clusterId?: pulumi.Input<string>;
    mysqlAuthPlugin?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    settings?: pulumi.Input<pulumi.Input<inputs.DatabaseUserSetting>[]>;
}

/**
 * The set of arguments for constructing a DatabaseUser resource.
 */
export interface DatabaseUserArgs {
    clusterId: pulumi.Input<string>;
    mysqlAuthPlugin?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    settings?: pulumi.Input<pulumi.Input<inputs.DatabaseUserSetting>[]>;
}
