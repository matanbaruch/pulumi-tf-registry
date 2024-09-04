// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserState, opts?: pulumi.CustomResourceOptions): User {
        return new User(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rollbar:index/user:User';

    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is User {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === User.__pulumiType;
    }

    /**
     * The user's email address
     */
    public readonly email!: pulumi.Output<string>;
    /**
     * Status of the user. Either `invited` or `subscribed`
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * IDs of the teams to which this user belongs
     */
    public readonly teamIds!: pulumi.Output<number[]>;
    /**
     * The ID of the user
     */
    public /*out*/ readonly userId!: pulumi.Output<number>;
    /**
     * The user's username
     */
    public /*out*/ readonly username!: pulumi.Output<string>;

    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserArgs | UserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserState | undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["teamIds"] = state ? state.teamIds : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as UserArgs | undefined;
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            if ((!args || args.teamIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'teamIds'");
            }
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["teamIds"] = args ? args.teamIds : undefined;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["userId"] = undefined /*out*/;
            resourceInputs["username"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(User.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering User resources.
 */
export interface UserState {
    /**
     * The user's email address
     */
    email?: pulumi.Input<string>;
    /**
     * Status of the user. Either `invited` or `subscribed`
     */
    status?: pulumi.Input<string>;
    /**
     * IDs of the teams to which this user belongs
     */
    teamIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The ID of the user
     */
    userId?: pulumi.Input<number>;
    /**
     * The user's username
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * The user's email address
     */
    email: pulumi.Input<string>;
    /**
     * IDs of the teams to which this user belongs
     */
    teamIds: pulumi.Input<pulumi.Input<number>[]>;
}
