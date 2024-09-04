// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AdministrativeAccount extends pulumi.CustomResource {
    /**
     * Get an existing AdministrativeAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AdministrativeAccountState, opts?: pulumi.CustomResourceOptions): AdministrativeAccount {
        return new AdministrativeAccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/administrativeAccount:AdministrativeAccount';

    /**
     * Returns true if the given object is an instance of AdministrativeAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AdministrativeAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AdministrativeAccount.__pulumiType;
    }

    /**
     * Indicates whether the account is active or not. Default value is `false`.
     */
    public readonly active!: pulumi.Output<boolean>;
    /**
     * Indicates whether the account belongs to an Auditor. An Auditor has View-only permissions for all administrative
     * functions. An Auditor cannot have any administrative roles. Default value is `false`.
     */
    public readonly auditor!: pulumi.Output<boolean>;
    /**
     * The Department name of the account user.
     */
    public readonly department!: pulumi.Output<string | undefined>;
    /**
     * Description of the account.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Email address associated with the account.
     */
    public readonly emailAddress!: pulumi.Output<string | undefined>;
    /**
     * Read-only attribute. This field holds the value returned from PingFederate and used for updating an existing
     * Administrative Account.
     *
     * @deprecated Deprecated
     */
    public /*out*/ readonly encryptedPassword!: pulumi.Output<string>;
    /**
     * Password for the Account. This field is immutable.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Phone number associated with the account.
     */
    public readonly phoneNumber!: pulumi.Output<string | undefined>;
    /**
     * Roles available for an administrator. `USER_ADMINISTRATOR` - Can create, deactivate or delete accounts and reset
     * passwords. Additionally, install replacement license keys. `CRYPTO_ADMINISTRATOR` - Can manage local keys and
     * certificates. `ADMINISTRATOR` - Can configure partner connections and most system settings (except the management of
     * native accounts and the handling of local keys and certificates. `EXPRESSION_ADMINISTRATOR` - Can add and update OGNL
     * expressions.
     */
    public readonly roles!: pulumi.Output<string[]>;
    /**
     * Username for the Administrative Account.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a AdministrativeAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AdministrativeAccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AdministrativeAccountArgs | AdministrativeAccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AdministrativeAccountState | undefined;
            resourceInputs["active"] = state ? state.active : undefined;
            resourceInputs["auditor"] = state ? state.auditor : undefined;
            resourceInputs["department"] = state ? state.department : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["emailAddress"] = state ? state.emailAddress : undefined;
            resourceInputs["encryptedPassword"] = state ? state.encryptedPassword : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["phoneNumber"] = state ? state.phoneNumber : undefined;
            resourceInputs["roles"] = state ? state.roles : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as AdministrativeAccountArgs | undefined;
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.roles === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roles'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["active"] = args ? args.active : undefined;
            resourceInputs["auditor"] = args ? args.auditor : undefined;
            resourceInputs["department"] = args ? args.department : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["emailAddress"] = args ? args.emailAddress : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["phoneNumber"] = args ? args.phoneNumber : undefined;
            resourceInputs["roles"] = args ? args.roles : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["encryptedPassword"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["encryptedPassword", "password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(AdministrativeAccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AdministrativeAccount resources.
 */
export interface AdministrativeAccountState {
    /**
     * Indicates whether the account is active or not. Default value is `false`.
     */
    active?: pulumi.Input<boolean>;
    /**
     * Indicates whether the account belongs to an Auditor. An Auditor has View-only permissions for all administrative
     * functions. An Auditor cannot have any administrative roles. Default value is `false`.
     */
    auditor?: pulumi.Input<boolean>;
    /**
     * The Department name of the account user.
     */
    department?: pulumi.Input<string>;
    /**
     * Description of the account.
     */
    description?: pulumi.Input<string>;
    /**
     * Email address associated with the account.
     */
    emailAddress?: pulumi.Input<string>;
    /**
     * Read-only attribute. This field holds the value returned from PingFederate and used for updating an existing
     * Administrative Account.
     *
     * @deprecated Deprecated
     */
    encryptedPassword?: pulumi.Input<string>;
    /**
     * Password for the Account. This field is immutable.
     */
    password?: pulumi.Input<string>;
    /**
     * Phone number associated with the account.
     */
    phoneNumber?: pulumi.Input<string>;
    /**
     * Roles available for an administrator. `USER_ADMINISTRATOR` - Can create, deactivate or delete accounts and reset
     * passwords. Additionally, install replacement license keys. `CRYPTO_ADMINISTRATOR` - Can manage local keys and
     * certificates. `ADMINISTRATOR` - Can configure partner connections and most system settings (except the management of
     * native accounts and the handling of local keys and certificates. `EXPRESSION_ADMINISTRATOR` - Can add and update OGNL
     * expressions.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Username for the Administrative Account.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AdministrativeAccount resource.
 */
export interface AdministrativeAccountArgs {
    /**
     * Indicates whether the account is active or not. Default value is `false`.
     */
    active?: pulumi.Input<boolean>;
    /**
     * Indicates whether the account belongs to an Auditor. An Auditor has View-only permissions for all administrative
     * functions. An Auditor cannot have any administrative roles. Default value is `false`.
     */
    auditor?: pulumi.Input<boolean>;
    /**
     * The Department name of the account user.
     */
    department?: pulumi.Input<string>;
    /**
     * Description of the account.
     */
    description?: pulumi.Input<string>;
    /**
     * Email address associated with the account.
     */
    emailAddress?: pulumi.Input<string>;
    /**
     * Password for the Account. This field is immutable.
     */
    password: pulumi.Input<string>;
    /**
     * Phone number associated with the account.
     */
    phoneNumber?: pulumi.Input<string>;
    /**
     * Roles available for an administrator. `USER_ADMINISTRATOR` - Can create, deactivate or delete accounts and reset
     * passwords. Additionally, install replacement license keys. `CRYPTO_ADMINISTRATOR` - Can manage local keys and
     * certificates. `ADMINISTRATOR` - Can configure partner connections and most system settings (except the management of
     * native accounts and the handling of local keys and certificates. `EXPRESSION_ADMINISTRATOR` - Can add and update OGNL
     * expressions.
     */
    roles: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Username for the Administrative Account.
     */
    username: pulumi.Input<string>;
}
