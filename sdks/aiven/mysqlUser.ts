// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MysqlUser extends pulumi.CustomResource {
    /**
     * Get an existing MysqlUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MysqlUserState, opts?: pulumi.CustomResourceOptions): MysqlUser {
        return new MysqlUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aiven:index/mysqlUser:MysqlUser';

    /**
     * Returns true if the given object is an instance of MysqlUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MysqlUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MysqlUser.__pulumiType;
    }

    /**
     * Access certificate for the user
     */
    public /*out*/ readonly accessCert!: pulumi.Output<string>;
    /**
     * Access certificate key for the user
     */
    public /*out*/ readonly accessKey!: pulumi.Output<string>;
    /**
     * Authentication details. The possible values are `null`, `caching_sha2_password` and `mysql_native_password`.
     */
    public readonly authentication!: pulumi.Output<string | undefined>;
    /**
     * The password of the MySQL User ( not applicable for all services ).
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a
     * reference. Changing this property forces recreation of the resource.
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * The name of the service that this resource belongs to. To set up proper dependencies please refer to this variable as a
     * reference. Changing this property forces recreation of the resource.
     */
    public readonly serviceName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MysqlUserTimeouts | undefined>;
    /**
     * Type of the user account. Tells whether the user is the primary account or a regular account.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The actual name of the MySQL User. To set up proper dependencies please refer to this variable as a reference. Changing
     * this property forces recreation of the resource.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a MysqlUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MysqlUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MysqlUserArgs | MysqlUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MysqlUserState | undefined;
            resourceInputs["accessCert"] = state ? state.accessCert : undefined;
            resourceInputs["accessKey"] = state ? state.accessKey : undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as MysqlUserArgs | undefined;
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["accessCert"] = undefined /*out*/;
            resourceInputs["accessKey"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessCert", "accessKey", "password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(MysqlUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MysqlUser resources.
 */
export interface MysqlUserState {
    /**
     * Access certificate for the user
     */
    accessCert?: pulumi.Input<string>;
    /**
     * Access certificate key for the user
     */
    accessKey?: pulumi.Input<string>;
    /**
     * Authentication details. The possible values are `null`, `caching_sha2_password` and `mysql_native_password`.
     */
    authentication?: pulumi.Input<string>;
    /**
     * The password of the MySQL User ( not applicable for all services ).
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a
     * reference. Changing this property forces recreation of the resource.
     */
    project?: pulumi.Input<string>;
    /**
     * The name of the service that this resource belongs to. To set up proper dependencies please refer to this variable as a
     * reference. Changing this property forces recreation of the resource.
     */
    serviceName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MysqlUserTimeouts>;
    /**
     * Type of the user account. Tells whether the user is the primary account or a regular account.
     */
    type?: pulumi.Input<string>;
    /**
     * The actual name of the MySQL User. To set up proper dependencies please refer to this variable as a reference. Changing
     * this property forces recreation of the resource.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MysqlUser resource.
 */
export interface MysqlUserArgs {
    /**
     * Authentication details. The possible values are `null`, `caching_sha2_password` and `mysql_native_password`.
     */
    authentication?: pulumi.Input<string>;
    /**
     * The password of the MySQL User ( not applicable for all services ).
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a
     * reference. Changing this property forces recreation of the resource.
     */
    project: pulumi.Input<string>;
    /**
     * The name of the service that this resource belongs to. To set up proper dependencies please refer to this variable as a
     * reference. Changing this property forces recreation of the resource.
     */
    serviceName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MysqlUserTimeouts>;
    /**
     * The actual name of the MySQL User. To set up proper dependencies please refer to this variable as a reference. Changing
     * this property forces recreation of the resource.
     */
    username: pulumi.Input<string>;
}
