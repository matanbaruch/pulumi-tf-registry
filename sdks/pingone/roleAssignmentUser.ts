// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RoleAssignmentUser extends pulumi.CustomResource {
    /**
     * Get an existing RoleAssignmentUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoleAssignmentUserState, opts?: pulumi.CustomResourceOptions): RoleAssignmentUser {
        return new RoleAssignmentUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/roleAssignmentUser:RoleAssignmentUser';

    /**
     * Returns true if the given object is an instance of RoleAssignmentUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoleAssignmentUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoleAssignmentUser.__pulumiType;
    }

    /**
     * The ID of the environment that contains the user to assign the admin role to. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * A flag to show whether the admin role assignment is read only or can be changed.
     */
    public /*out*/ readonly readOnly!: pulumi.Output<boolean>;
    /**
     * The ID of an admin role to assign to the user. Must be a valid PingOne resource ID. This field is immutable and will
     * trigger a replace plan if changed.
     */
    public readonly roleId!: pulumi.Output<string>;
    /**
     * Limit the scope of the admin role assignment to the specified application ID. Must be a valid PingOne resource ID. Some
     * roles cannot be scoped to the application. This field is immutable and will trigger a replace plan if changed. Exactly
     * one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`,
     * `scope_population_id`.
     */
    public readonly scopeApplicationId!: pulumi.Output<string | undefined>;
    /**
     * Limit the scope of the admin role assignment to the specified environment ID. Must be a valid PingOne resource ID. Some
     * roles cannot be scoped to the environment. This field is immutable and will trigger a replace plan if changed. Exactly
     * one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`,
     * `scope_population_id`.
     */
    public readonly scopeEnvironmentId!: pulumi.Output<string | undefined>;
    /**
     * Limit the scope of the admin role assignment to the specified organization ID. Must be a valid PingOne resource ID. Some
     * roles cannot be scoped to the organization. This field is immutable and will trigger a replace plan if changed. Exactly
     * one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`,
     * `scope_population_id`.
     */
    public readonly scopeOrganizationId!: pulumi.Output<string | undefined>;
    /**
     * Limit the scope of the admin role assignment to the specified population ID. Must be a valid PingOne resource ID. Some
     * roles cannot be scoped to the population. This field is immutable and will trigger a replace plan if changed. Exactly
     * one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`,
     * `scope_population_id`.
     */
    public readonly scopePopulationId!: pulumi.Output<string | undefined>;
    /**
     * The ID of an user to assign an admin role to. Must be a valid PingOne resource ID. This field is immutable and will
     * trigger a replace plan if changed.
     */
    public readonly userId!: pulumi.Output<string>;

    /**
     * Create a RoleAssignmentUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleAssignmentUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RoleAssignmentUserArgs | RoleAssignmentUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RoleAssignmentUserState | undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["readOnly"] = state ? state.readOnly : undefined;
            resourceInputs["roleId"] = state ? state.roleId : undefined;
            resourceInputs["scopeApplicationId"] = state ? state.scopeApplicationId : undefined;
            resourceInputs["scopeEnvironmentId"] = state ? state.scopeEnvironmentId : undefined;
            resourceInputs["scopeOrganizationId"] = state ? state.scopeOrganizationId : undefined;
            resourceInputs["scopePopulationId"] = state ? state.scopePopulationId : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
        } else {
            const args = argsOrState as RoleAssignmentUserArgs | undefined;
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            if ((!args || args.roleId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleId'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["roleId"] = args ? args.roleId : undefined;
            resourceInputs["scopeApplicationId"] = args ? args.scopeApplicationId : undefined;
            resourceInputs["scopeEnvironmentId"] = args ? args.scopeEnvironmentId : undefined;
            resourceInputs["scopeOrganizationId"] = args ? args.scopeOrganizationId : undefined;
            resourceInputs["scopePopulationId"] = args ? args.scopePopulationId : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["readOnly"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RoleAssignmentUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RoleAssignmentUser resources.
 */
export interface RoleAssignmentUserState {
    /**
     * The ID of the environment that contains the user to assign the admin role to. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * A flag to show whether the admin role assignment is read only or can be changed.
     */
    readOnly?: pulumi.Input<boolean>;
    /**
     * The ID of an admin role to assign to the user. Must be a valid PingOne resource ID. This field is immutable and will
     * trigger a replace plan if changed.
     */
    roleId?: pulumi.Input<string>;
    /**
     * Limit the scope of the admin role assignment to the specified application ID. Must be a valid PingOne resource ID. Some
     * roles cannot be scoped to the application. This field is immutable and will trigger a replace plan if changed. Exactly
     * one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`,
     * `scope_population_id`.
     */
    scopeApplicationId?: pulumi.Input<string>;
    /**
     * Limit the scope of the admin role assignment to the specified environment ID. Must be a valid PingOne resource ID. Some
     * roles cannot be scoped to the environment. This field is immutable and will trigger a replace plan if changed. Exactly
     * one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`,
     * `scope_population_id`.
     */
    scopeEnvironmentId?: pulumi.Input<string>;
    /**
     * Limit the scope of the admin role assignment to the specified organization ID. Must be a valid PingOne resource ID. Some
     * roles cannot be scoped to the organization. This field is immutable and will trigger a replace plan if changed. Exactly
     * one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`,
     * `scope_population_id`.
     */
    scopeOrganizationId?: pulumi.Input<string>;
    /**
     * Limit the scope of the admin role assignment to the specified population ID. Must be a valid PingOne resource ID. Some
     * roles cannot be scoped to the population. This field is immutable and will trigger a replace plan if changed. Exactly
     * one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`,
     * `scope_population_id`.
     */
    scopePopulationId?: pulumi.Input<string>;
    /**
     * The ID of an user to assign an admin role to. Must be a valid PingOne resource ID. This field is immutable and will
     * trigger a replace plan if changed.
     */
    userId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RoleAssignmentUser resource.
 */
export interface RoleAssignmentUserArgs {
    /**
     * The ID of the environment that contains the user to assign the admin role to. Must be a valid PingOne resource ID. This
     * field is immutable and will trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
    /**
     * The ID of an admin role to assign to the user. Must be a valid PingOne resource ID. This field is immutable and will
     * trigger a replace plan if changed.
     */
    roleId: pulumi.Input<string>;
    /**
     * Limit the scope of the admin role assignment to the specified application ID. Must be a valid PingOne resource ID. Some
     * roles cannot be scoped to the application. This field is immutable and will trigger a replace plan if changed. Exactly
     * one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`,
     * `scope_population_id`.
     */
    scopeApplicationId?: pulumi.Input<string>;
    /**
     * Limit the scope of the admin role assignment to the specified environment ID. Must be a valid PingOne resource ID. Some
     * roles cannot be scoped to the environment. This field is immutable and will trigger a replace plan if changed. Exactly
     * one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`,
     * `scope_population_id`.
     */
    scopeEnvironmentId?: pulumi.Input<string>;
    /**
     * Limit the scope of the admin role assignment to the specified organization ID. Must be a valid PingOne resource ID. Some
     * roles cannot be scoped to the organization. This field is immutable and will trigger a replace plan if changed. Exactly
     * one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`,
     * `scope_population_id`.
     */
    scopeOrganizationId?: pulumi.Input<string>;
    /**
     * Limit the scope of the admin role assignment to the specified population ID. Must be a valid PingOne resource ID. Some
     * roles cannot be scoped to the population. This field is immutable and will trigger a replace plan if changed. Exactly
     * one of the following must be defined: `scope_application_id`, `scope_organization_id`, `scope_environment_id`,
     * `scope_population_id`.
     */
    scopePopulationId?: pulumi.Input<string>;
    /**
     * The ID of an user to assign an admin role to. Must be a valid PingOne resource ID. This field is immutable and will
     * trigger a replace plan if changed.
     */
    userId: pulumi.Input<string>;
}
