// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AdminRoleTargets extends pulumi.CustomResource {
    /**
     * Get an existing AdminRoleTargets resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AdminRoleTargetsState, opts?: pulumi.CustomResourceOptions): AdminRoleTargets {
        return new AdminRoleTargets(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'okta:index/adminRoleTargets:AdminRoleTargets';

    /**
     * Returns true if the given object is an instance of AdminRoleTargets.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AdminRoleTargets {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AdminRoleTargets.__pulumiType;
    }

    /**
     * List of app names (name represents set of app instances) or a combination of app name and app instance ID (like
     * 'salesforce' or 'facebook.0oapsqQ6dv19pqyEo0g3')
     */
    public readonly apps!: pulumi.Output<string[] | undefined>;
    /**
     * List of group IDs. Conflicts with apps
     */
    public readonly groups!: pulumi.Output<string[] | undefined>;
    /**
     * ID of a role
     */
    public /*out*/ readonly roleId!: pulumi.Output<string>;
    /**
     * Type of the role that is assigned to the user and supports optional targets. See [API
     * Docs](https://developer.okta.com/docs/reference/api/roles/#role-types)
     */
    public readonly roleType!: pulumi.Output<string>;
    /**
     * User associated with the role
     */
    public readonly userId!: pulumi.Output<string>;

    /**
     * Create a AdminRoleTargets resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AdminRoleTargetsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AdminRoleTargetsArgs | AdminRoleTargetsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AdminRoleTargetsState | undefined;
            resourceInputs["apps"] = state ? state.apps : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["roleId"] = state ? state.roleId : undefined;
            resourceInputs["roleType"] = state ? state.roleType : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
        } else {
            const args = argsOrState as AdminRoleTargetsArgs | undefined;
            if ((!args || args.roleType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleType'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["apps"] = args ? args.apps : undefined;
            resourceInputs["groups"] = args ? args.groups : undefined;
            resourceInputs["roleType"] = args ? args.roleType : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["roleId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AdminRoleTargets.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AdminRoleTargets resources.
 */
export interface AdminRoleTargetsState {
    /**
     * List of app names (name represents set of app instances) or a combination of app name and app instance ID (like
     * 'salesforce' or 'facebook.0oapsqQ6dv19pqyEo0g3')
     */
    apps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of group IDs. Conflicts with apps
     */
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of a role
     */
    roleId?: pulumi.Input<string>;
    /**
     * Type of the role that is assigned to the user and supports optional targets. See [API
     * Docs](https://developer.okta.com/docs/reference/api/roles/#role-types)
     */
    roleType?: pulumi.Input<string>;
    /**
     * User associated with the role
     */
    userId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AdminRoleTargets resource.
 */
export interface AdminRoleTargetsArgs {
    /**
     * List of app names (name represents set of app instances) or a combination of app name and app instance ID (like
     * 'salesforce' or 'facebook.0oapsqQ6dv19pqyEo0g3')
     */
    apps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of group IDs. Conflicts with apps
     */
    groups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Type of the role that is assigned to the user and supports optional targets. See [API
     * Docs](https://developer.okta.com/docs/reference/api/roles/#role-types)
     */
    roleType: pulumi.Input<string>;
    /**
     * User associated with the role
     */
    userId: pulumi.Input<string>;
}
