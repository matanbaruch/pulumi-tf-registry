// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserGroupMembership extends pulumi.CustomResource {
    /**
     * Get an existing UserGroupMembership resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserGroupMembershipState, opts?: pulumi.CustomResourceOptions): UserGroupMembership {
        return new UserGroupMembership(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'freeipa:index/userGroupMembership:UserGroupMembership';

    /**
     * Returns true if the given object is an instance of UserGroupMembership.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserGroupMembership {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserGroupMembership.__pulumiType;
    }

    /**
     * Group to add
     */
    public readonly group!: pulumi.Output<string | undefined>;
    /**
     * Group name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * User to add
     */
    public readonly user!: pulumi.Output<string | undefined>;

    /**
     * Create a UserGroupMembership resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserGroupMembershipArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserGroupMembershipArgs | UserGroupMembershipState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserGroupMembershipState | undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as UserGroupMembershipArgs | undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserGroupMembership.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserGroupMembership resources.
 */
export interface UserGroupMembershipState {
    /**
     * Group to add
     */
    group?: pulumi.Input<string>;
    /**
     * Group name
     */
    name?: pulumi.Input<string>;
    /**
     * User to add
     */
    user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserGroupMembership resource.
 */
export interface UserGroupMembershipArgs {
    /**
     * Group to add
     */
    group?: pulumi.Input<string>;
    /**
     * Group name
     */
    name?: pulumi.Input<string>;
    /**
     * User to add
     */
    user?: pulumi.Input<string>;
}
