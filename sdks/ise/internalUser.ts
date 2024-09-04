// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InternalUser extends pulumi.CustomResource {
    /**
     * Get an existing InternalUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InternalUserState, opts?: pulumi.CustomResourceOptions): InternalUser {
        return new InternalUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ise:index/internalUser:InternalUser';

    /**
     * Returns true if the given object is an instance of InternalUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InternalUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InternalUser.__pulumiType;
    }

    /**
     * The Account Name Alias will be used to send email notifications about password expiration. This field is only supported
     * from ISE 3.2.
     */
    public readonly accountNameAlias!: pulumi.Output<string | undefined>;
    /**
     * Requires the user to change the password - Default value: `true`
     */
    public readonly changePassword!: pulumi.Output<boolean>;
    /**
     * Key value map
     */
    public readonly customAttributes!: pulumi.Output<string | undefined>;
    /**
     * Description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Email address
     */
    public readonly email!: pulumi.Output<string | undefined>;
    /**
     * This field is added in ISE 2.0 to support TACACS+
     */
    public readonly enablePassword!: pulumi.Output<string | undefined>;
    /**
     * Whether the user is enabled/disabled
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * First name of the internal user
     */
    public readonly firstName!: pulumi.Output<string | undefined>;
    /**
     * Comma separated list of identity group IDs.
     */
    public readonly identityGroups!: pulumi.Output<string | undefined>;
    /**
     * Last name of the internal user
     */
    public readonly lastName!: pulumi.Output<string | undefined>;
    /**
     * The name of the internal user
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The password of the internal user
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * The ID store where the internal user's password is kept - Default value: `Internal Users`
     */
    public readonly passwordIdStore!: pulumi.Output<string>;
    /**
     * Set to `true` to indicate the user password never expires. This will not apply to Users who are also ISE Admins. This
     * field is only supported from ISE 3.2. - Default value: `false`
     */
    public readonly passwordNeverExpires!: pulumi.Output<boolean>;

    /**
     * Create a InternalUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InternalUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InternalUserArgs | InternalUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InternalUserState | undefined;
            resourceInputs["accountNameAlias"] = state ? state.accountNameAlias : undefined;
            resourceInputs["changePassword"] = state ? state.changePassword : undefined;
            resourceInputs["customAttributes"] = state ? state.customAttributes : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["enablePassword"] = state ? state.enablePassword : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["firstName"] = state ? state.firstName : undefined;
            resourceInputs["identityGroups"] = state ? state.identityGroups : undefined;
            resourceInputs["lastName"] = state ? state.lastName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["passwordIdStore"] = state ? state.passwordIdStore : undefined;
            resourceInputs["passwordNeverExpires"] = state ? state.passwordNeverExpires : undefined;
        } else {
            const args = argsOrState as InternalUserArgs | undefined;
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            resourceInputs["accountNameAlias"] = args ? args.accountNameAlias : undefined;
            resourceInputs["changePassword"] = args ? args.changePassword : undefined;
            resourceInputs["customAttributes"] = args ? args.customAttributes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["enablePassword"] = args ? args.enablePassword : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["firstName"] = args ? args.firstName : undefined;
            resourceInputs["identityGroups"] = args ? args.identityGroups : undefined;
            resourceInputs["lastName"] = args ? args.lastName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["passwordIdStore"] = args ? args.passwordIdStore : undefined;
            resourceInputs["passwordNeverExpires"] = args ? args.passwordNeverExpires : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InternalUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InternalUser resources.
 */
export interface InternalUserState {
    /**
     * The Account Name Alias will be used to send email notifications about password expiration. This field is only supported
     * from ISE 3.2.
     */
    accountNameAlias?: pulumi.Input<string>;
    /**
     * Requires the user to change the password - Default value: `true`
     */
    changePassword?: pulumi.Input<boolean>;
    /**
     * Key value map
     */
    customAttributes?: pulumi.Input<string>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * Email address
     */
    email?: pulumi.Input<string>;
    /**
     * This field is added in ISE 2.0 to support TACACS+
     */
    enablePassword?: pulumi.Input<string>;
    /**
     * Whether the user is enabled/disabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * First name of the internal user
     */
    firstName?: pulumi.Input<string>;
    /**
     * Comma separated list of identity group IDs.
     */
    identityGroups?: pulumi.Input<string>;
    /**
     * Last name of the internal user
     */
    lastName?: pulumi.Input<string>;
    /**
     * The name of the internal user
     */
    name?: pulumi.Input<string>;
    /**
     * The password of the internal user
     */
    password?: pulumi.Input<string>;
    /**
     * The ID store where the internal user's password is kept - Default value: `Internal Users`
     */
    passwordIdStore?: pulumi.Input<string>;
    /**
     * Set to `true` to indicate the user password never expires. This will not apply to Users who are also ISE Admins. This
     * field is only supported from ISE 3.2. - Default value: `false`
     */
    passwordNeverExpires?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a InternalUser resource.
 */
export interface InternalUserArgs {
    /**
     * The Account Name Alias will be used to send email notifications about password expiration. This field is only supported
     * from ISE 3.2.
     */
    accountNameAlias?: pulumi.Input<string>;
    /**
     * Requires the user to change the password - Default value: `true`
     */
    changePassword?: pulumi.Input<boolean>;
    /**
     * Key value map
     */
    customAttributes?: pulumi.Input<string>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * Email address
     */
    email?: pulumi.Input<string>;
    /**
     * This field is added in ISE 2.0 to support TACACS+
     */
    enablePassword?: pulumi.Input<string>;
    /**
     * Whether the user is enabled/disabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * First name of the internal user
     */
    firstName?: pulumi.Input<string>;
    /**
     * Comma separated list of identity group IDs.
     */
    identityGroups?: pulumi.Input<string>;
    /**
     * Last name of the internal user
     */
    lastName?: pulumi.Input<string>;
    /**
     * The name of the internal user
     */
    name?: pulumi.Input<string>;
    /**
     * The password of the internal user
     */
    password: pulumi.Input<string>;
    /**
     * The ID store where the internal user's password is kept - Default value: `Internal Users`
     */
    passwordIdStore?: pulumi.Input<string>;
    /**
     * Set to `true` to indicate the user password never expires. This will not apply to Users who are also ISE Admins. This
     * field is only supported from ISE 3.2. - Default value: `false`
     */
    passwordNeverExpires?: pulumi.Input<boolean>;
}
