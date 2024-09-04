// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DasbUser extends pulumi.CustomResource {
    /**
     * Get an existing DasbUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DasbUserState, opts?: pulumi.CustomResourceOptions): DasbUser {
        return new DasbUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dasbUser:DasbUser';

    /**
     * Returns true if the given object is an instance of DasbUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DasbUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DasbUser.__pulumiType;
    }

    /**
     * Authentication method, 0 - local, 1 - LDAP, 2 - OAuth. If not passed, the default is 0.
     */
    public readonly authType!: pulumi.Output<number | undefined>;
    /**
     * Department ID, such as: 1.2.3.
     */
    public readonly departmentId!: pulumi.Output<string | undefined>;
    /**
     * Email. Please provide at least one of `phone` or `email`.
     */
    public readonly email!: pulumi.Output<string | undefined>;
    /**
     * The set of user group IDs to which it belongs.
     */
    public readonly groupIdSets!: pulumi.Output<number[]>;
    /**
     * Enter it in the format of country area code|mobile phone number. For example: +86|***********, +852|xxxxxxxx. Please
     * provide at least one of `phone` or `email`.
     */
    public readonly phone!: pulumi.Output<string | undefined>;
    /**
     * Real name, maximum length 20 characters, cannot contain blank characters.
     */
    public readonly realName!: pulumi.Output<string>;
    /**
     * Username, 3-20 characters, must start with an English letter and cannot contain characters other than letters, numbers,
     * '.', '_', '-'.
     */
    public readonly userName!: pulumi.Output<string>;
    /**
     * User effective time, such as: 2021-09-22T00:00:00+00:00If the effective and expiry time are not filled in, the user will
     * be valid for a long time.
     */
    public readonly validateFrom!: pulumi.Output<string>;
    /**
     * Access time period limit, a string composed of 0 and 1, length 168 (7 * 24), representing the time period the user is
     * allowed to access in a week. The Nth character in the string represents the Nth hour of the week, 0 - means access is
     * not allowed, 1 - means access is allowed.
     */
    public readonly validateTime!: pulumi.Output<string | undefined>;
    /**
     * User expiration time, such as: 2021-09-23T00:00:00+00:00If the effective and expiry time are not filled in, the user
     * will be valid for a long time.
     */
    public readonly validateTo!: pulumi.Output<string>;

    /**
     * Create a DasbUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DasbUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DasbUserArgs | DasbUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DasbUserState | undefined;
            resourceInputs["authType"] = state ? state.authType : undefined;
            resourceInputs["departmentId"] = state ? state.departmentId : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["groupIdSets"] = state ? state.groupIdSets : undefined;
            resourceInputs["phone"] = state ? state.phone : undefined;
            resourceInputs["realName"] = state ? state.realName : undefined;
            resourceInputs["userName"] = state ? state.userName : undefined;
            resourceInputs["validateFrom"] = state ? state.validateFrom : undefined;
            resourceInputs["validateTime"] = state ? state.validateTime : undefined;
            resourceInputs["validateTo"] = state ? state.validateTo : undefined;
        } else {
            const args = argsOrState as DasbUserArgs | undefined;
            if ((!args || args.realName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'realName'");
            }
            if ((!args || args.userName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userName'");
            }
            resourceInputs["authType"] = args ? args.authType : undefined;
            resourceInputs["departmentId"] = args ? args.departmentId : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["groupIdSets"] = args ? args.groupIdSets : undefined;
            resourceInputs["phone"] = args ? args.phone : undefined;
            resourceInputs["realName"] = args ? args.realName : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["validateFrom"] = args ? args.validateFrom : undefined;
            resourceInputs["validateTime"] = args ? args.validateTime : undefined;
            resourceInputs["validateTo"] = args ? args.validateTo : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DasbUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DasbUser resources.
 */
export interface DasbUserState {
    /**
     * Authentication method, 0 - local, 1 - LDAP, 2 - OAuth. If not passed, the default is 0.
     */
    authType?: pulumi.Input<number>;
    /**
     * Department ID, such as: 1.2.3.
     */
    departmentId?: pulumi.Input<string>;
    /**
     * Email. Please provide at least one of `phone` or `email`.
     */
    email?: pulumi.Input<string>;
    /**
     * The set of user group IDs to which it belongs.
     */
    groupIdSets?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Enter it in the format of country area code|mobile phone number. For example: +86|***********, +852|xxxxxxxx. Please
     * provide at least one of `phone` or `email`.
     */
    phone?: pulumi.Input<string>;
    /**
     * Real name, maximum length 20 characters, cannot contain blank characters.
     */
    realName?: pulumi.Input<string>;
    /**
     * Username, 3-20 characters, must start with an English letter and cannot contain characters other than letters, numbers,
     * '.', '_', '-'.
     */
    userName?: pulumi.Input<string>;
    /**
     * User effective time, such as: 2021-09-22T00:00:00+00:00If the effective and expiry time are not filled in, the user will
     * be valid for a long time.
     */
    validateFrom?: pulumi.Input<string>;
    /**
     * Access time period limit, a string composed of 0 and 1, length 168 (7 * 24), representing the time period the user is
     * allowed to access in a week. The Nth character in the string represents the Nth hour of the week, 0 - means access is
     * not allowed, 1 - means access is allowed.
     */
    validateTime?: pulumi.Input<string>;
    /**
     * User expiration time, such as: 2021-09-23T00:00:00+00:00If the effective and expiry time are not filled in, the user
     * will be valid for a long time.
     */
    validateTo?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DasbUser resource.
 */
export interface DasbUserArgs {
    /**
     * Authentication method, 0 - local, 1 - LDAP, 2 - OAuth. If not passed, the default is 0.
     */
    authType?: pulumi.Input<number>;
    /**
     * Department ID, such as: 1.2.3.
     */
    departmentId?: pulumi.Input<string>;
    /**
     * Email. Please provide at least one of `phone` or `email`.
     */
    email?: pulumi.Input<string>;
    /**
     * The set of user group IDs to which it belongs.
     */
    groupIdSets?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Enter it in the format of country area code|mobile phone number. For example: +86|***********, +852|xxxxxxxx. Please
     * provide at least one of `phone` or `email`.
     */
    phone?: pulumi.Input<string>;
    /**
     * Real name, maximum length 20 characters, cannot contain blank characters.
     */
    realName: pulumi.Input<string>;
    /**
     * Username, 3-20 characters, must start with an English letter and cannot contain characters other than letters, numbers,
     * '.', '_', '-'.
     */
    userName: pulumi.Input<string>;
    /**
     * User effective time, such as: 2021-09-22T00:00:00+00:00If the effective and expiry time are not filled in, the user will
     * be valid for a long time.
     */
    validateFrom?: pulumi.Input<string>;
    /**
     * Access time period limit, a string composed of 0 and 1, length 168 (7 * 24), representing the time period the user is
     * allowed to access in a week. The Nth character in the string represents the Nth hour of the week, 0 - means access is
     * not allowed, 1 - means access is allowed.
     */
    validateTime?: pulumi.Input<string>;
    /**
     * User expiration time, such as: 2021-09-23T00:00:00+00:00If the effective and expiry time are not filled in, the user
     * will be valid for a long time.
     */
    validateTo?: pulumi.Input<string>;
}
