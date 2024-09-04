// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class UserRole extends pulumi.CustomResource {
    /**
     * Get an existing UserRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserRoleState, opts?: pulumi.CustomResourceOptions): UserRole {
        return new UserRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prismacloud:index/userRole:UserRole';

    /**
     * Returns true if the given object is an instance of UserRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserRole.__pulumiType;
    }

    /**
     * Accessible account group IDs
     */
    public readonly accountGroupIds!: pulumi.Output<string[] | undefined>;
    /**
     * Associated account groups
     */
    public /*out*/ readonly accountGroups!: pulumi.Output<outputs.UserRoleAccountGroup[]>;
    /**
     * Additional Parameters
     */
    public readonly additionalAttributes!: pulumi.Output<outputs.UserRoleAdditionalAttributes | undefined>;
    /**
     * Associated application users which cannot exist in the system without the user role
     */
    public /*out*/ readonly associatedUsers!: pulumi.Output<string[]>;
    /**
     * Code repository IDs
     */
    public readonly codeRepositoryIds!: pulumi.Output<string[] | undefined>;
    /**
     * Delete any associated users on role deletion. This is use useful when SSO is enabled
     */
    public readonly deleteAssociatedUsers!: pulumi.Output<boolean | undefined>;
    /**
     * Description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Last modified by
     */
    public /*out*/ readonly lastModifiedBy!: pulumi.Output<string>;
    /**
     * Last modified timestamp
     */
    public /*out*/ readonly lastModifiedTs!: pulumi.Output<number>;
    /**
     * Name of the role
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Resource list IDs
     */
    public readonly resourceListIds!: pulumi.Output<string[] | undefined>;
    /**
     * Restrict dismissal access
     */
    public readonly restrictDismissalAccess!: pulumi.Output<boolean>;
    /**
     * Role UUID
     */
    public /*out*/ readonly roleId!: pulumi.Output<string>;
    /**
     * User role type
     */
    public readonly roleType!: pulumi.Output<string>;

    /**
     * Create a UserRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserRoleArgs | UserRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserRoleState | undefined;
            resourceInputs["accountGroupIds"] = state ? state.accountGroupIds : undefined;
            resourceInputs["accountGroups"] = state ? state.accountGroups : undefined;
            resourceInputs["additionalAttributes"] = state ? state.additionalAttributes : undefined;
            resourceInputs["associatedUsers"] = state ? state.associatedUsers : undefined;
            resourceInputs["codeRepositoryIds"] = state ? state.codeRepositoryIds : undefined;
            resourceInputs["deleteAssociatedUsers"] = state ? state.deleteAssociatedUsers : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["lastModifiedBy"] = state ? state.lastModifiedBy : undefined;
            resourceInputs["lastModifiedTs"] = state ? state.lastModifiedTs : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceListIds"] = state ? state.resourceListIds : undefined;
            resourceInputs["restrictDismissalAccess"] = state ? state.restrictDismissalAccess : undefined;
            resourceInputs["roleId"] = state ? state.roleId : undefined;
            resourceInputs["roleType"] = state ? state.roleType : undefined;
        } else {
            const args = argsOrState as UserRoleArgs | undefined;
            if ((!args || args.roleType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleType'");
            }
            resourceInputs["accountGroupIds"] = args ? args.accountGroupIds : undefined;
            resourceInputs["additionalAttributes"] = args ? args.additionalAttributes : undefined;
            resourceInputs["codeRepositoryIds"] = args ? args.codeRepositoryIds : undefined;
            resourceInputs["deleteAssociatedUsers"] = args ? args.deleteAssociatedUsers : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceListIds"] = args ? args.resourceListIds : undefined;
            resourceInputs["restrictDismissalAccess"] = args ? args.restrictDismissalAccess : undefined;
            resourceInputs["roleType"] = args ? args.roleType : undefined;
            resourceInputs["accountGroups"] = undefined /*out*/;
            resourceInputs["associatedUsers"] = undefined /*out*/;
            resourceInputs["lastModifiedBy"] = undefined /*out*/;
            resourceInputs["lastModifiedTs"] = undefined /*out*/;
            resourceInputs["roleId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserRole resources.
 */
export interface UserRoleState {
    /**
     * Accessible account group IDs
     */
    accountGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Associated account groups
     */
    accountGroups?: pulumi.Input<pulumi.Input<inputs.UserRoleAccountGroup>[]>;
    /**
     * Additional Parameters
     */
    additionalAttributes?: pulumi.Input<inputs.UserRoleAdditionalAttributes>;
    /**
     * Associated application users which cannot exist in the system without the user role
     */
    associatedUsers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Code repository IDs
     */
    codeRepositoryIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Delete any associated users on role deletion. This is use useful when SSO is enabled
     */
    deleteAssociatedUsers?: pulumi.Input<boolean>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * Last modified by
     */
    lastModifiedBy?: pulumi.Input<string>;
    /**
     * Last modified timestamp
     */
    lastModifiedTs?: pulumi.Input<number>;
    /**
     * Name of the role
     */
    name?: pulumi.Input<string>;
    /**
     * Resource list IDs
     */
    resourceListIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Restrict dismissal access
     */
    restrictDismissalAccess?: pulumi.Input<boolean>;
    /**
     * Role UUID
     */
    roleId?: pulumi.Input<string>;
    /**
     * User role type
     */
    roleType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserRole resource.
 */
export interface UserRoleArgs {
    /**
     * Accessible account group IDs
     */
    accountGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Additional Parameters
     */
    additionalAttributes?: pulumi.Input<inputs.UserRoleAdditionalAttributes>;
    /**
     * Code repository IDs
     */
    codeRepositoryIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Delete any associated users on role deletion. This is use useful when SSO is enabled
     */
    deleteAssociatedUsers?: pulumi.Input<boolean>;
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the role
     */
    name?: pulumi.Input<string>;
    /**
     * Resource list IDs
     */
    resourceListIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Restrict dismissal access
     */
    restrictDismissalAccess?: pulumi.Input<boolean>;
    /**
     * User role type
     */
    roleType: pulumi.Input<string>;
}
