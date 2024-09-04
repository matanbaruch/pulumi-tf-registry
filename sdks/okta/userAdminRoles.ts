// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserAdminRoles extends pulumi.CustomResource {
    /**
     * Get an existing UserAdminRoles resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserAdminRolesState, opts?: pulumi.CustomResourceOptions): UserAdminRoles {
        return new UserAdminRoles(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'okta:index/userAdminRoles:UserAdminRoles';

    /**
     * Returns true if the given object is an instance of UserAdminRoles.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserAdminRoles {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserAdminRoles.__pulumiType;
    }

    /**
     * The list of Okta user admin roles, e.g. `['APP_ADMIN', 'USER_ADMIN']` See [API
     * Docs](https://developer.okta.com/docs/reference/api/roles/#role-types).
     */
    public readonly adminRoles!: pulumi.Output<string[]>;
    /**
     * When this setting is enabled, the admins won't receive any of the default Okta administrator emails. These admins also
     * won't have access to contact Okta Support and open support cases on behalf of your org.
     */
    public readonly disableNotifications!: pulumi.Output<boolean | undefined>;
    /**
     * ID of a Okta User
     */
    public readonly userId!: pulumi.Output<string>;

    /**
     * Create a UserAdminRoles resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserAdminRolesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserAdminRolesArgs | UserAdminRolesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserAdminRolesState | undefined;
            resourceInputs["adminRoles"] = state ? state.adminRoles : undefined;
            resourceInputs["disableNotifications"] = state ? state.disableNotifications : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
        } else {
            const args = argsOrState as UserAdminRolesArgs | undefined;
            if ((!args || args.adminRoles === undefined) && !opts.urn) {
                throw new Error("Missing required property 'adminRoles'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["adminRoles"] = args ? args.adminRoles : undefined;
            resourceInputs["disableNotifications"] = args ? args.disableNotifications : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserAdminRoles.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserAdminRoles resources.
 */
export interface UserAdminRolesState {
    /**
     * The list of Okta user admin roles, e.g. `['APP_ADMIN', 'USER_ADMIN']` See [API
     * Docs](https://developer.okta.com/docs/reference/api/roles/#role-types).
     */
    adminRoles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * When this setting is enabled, the admins won't receive any of the default Okta administrator emails. These admins also
     * won't have access to contact Okta Support and open support cases on behalf of your org.
     */
    disableNotifications?: pulumi.Input<boolean>;
    /**
     * ID of a Okta User
     */
    userId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserAdminRoles resource.
 */
export interface UserAdminRolesArgs {
    /**
     * The list of Okta user admin roles, e.g. `['APP_ADMIN', 'USER_ADMIN']` See [API
     * Docs](https://developer.okta.com/docs/reference/api/roles/#role-types).
     */
    adminRoles: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * When this setting is enabled, the admins won't receive any of the default Okta administrator emails. These admins also
     * won't have access to contact Okta Support and open support cases on behalf of your org.
     */
    disableNotifications?: pulumi.Input<boolean>;
    /**
     * ID of a Okta User
     */
    userId: pulumi.Input<string>;
}
