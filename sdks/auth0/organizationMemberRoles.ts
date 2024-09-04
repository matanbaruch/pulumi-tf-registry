// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class OrganizationMemberRoles extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationMemberRoles resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationMemberRolesState, opts?: pulumi.CustomResourceOptions): OrganizationMemberRoles {
        return new OrganizationMemberRoles(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'auth0:index/organizationMemberRoles:OrganizationMemberRoles';

    /**
     * Returns true if the given object is an instance of OrganizationMemberRoles.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationMemberRoles {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationMemberRoles.__pulumiType;
    }

    /**
     * The ID of the organization.
     */
    public readonly organizationId!: pulumi.Output<string>;
    /**
     * The role ID(s) to assign to the organization member.
     */
    public readonly roles!: pulumi.Output<string[]>;
    /**
     * The user ID of the organization member.
     */
    public readonly userId!: pulumi.Output<string>;

    /**
     * Create a OrganizationMemberRoles resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationMemberRolesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationMemberRolesArgs | OrganizationMemberRolesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationMemberRolesState | undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["roles"] = state ? state.roles : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
        } else {
            const args = argsOrState as OrganizationMemberRolesArgs | undefined;
            if ((!args || args.organizationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationId'");
            }
            if ((!args || args.roles === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roles'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
            resourceInputs["roles"] = args ? args.roles : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrganizationMemberRoles.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationMemberRoles resources.
 */
export interface OrganizationMemberRolesState {
    /**
     * The ID of the organization.
     */
    organizationId?: pulumi.Input<string>;
    /**
     * The role ID(s) to assign to the organization member.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user ID of the organization member.
     */
    userId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrganizationMemberRoles resource.
 */
export interface OrganizationMemberRolesArgs {
    /**
     * The ID of the organization.
     */
    organizationId: pulumi.Input<string>;
    /**
     * The role ID(s) to assign to the organization member.
     */
    roles: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user ID of the organization member.
     */
    userId: pulumi.Input<string>;
}
