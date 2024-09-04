// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TeamOrganizationMembers extends pulumi.CustomResource {
    /**
     * Get an existing TeamOrganizationMembers resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TeamOrganizationMembersState, opts?: pulumi.CustomResourceOptions): TeamOrganizationMembers {
        return new TeamOrganizationMembers(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tfe:index/teamOrganizationMembers:TeamOrganizationMembers';

    /**
     * Returns true if the given object is an instance of TeamOrganizationMembers.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TeamOrganizationMembers {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TeamOrganizationMembers.__pulumiType;
    }

    public readonly organizationMembershipIds!: pulumi.Output<string[]>;
    public readonly teamId!: pulumi.Output<string>;

    /**
     * Create a TeamOrganizationMembers resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TeamOrganizationMembersArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TeamOrganizationMembersArgs | TeamOrganizationMembersState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TeamOrganizationMembersState | undefined;
            resourceInputs["organizationMembershipIds"] = state ? state.organizationMembershipIds : undefined;
            resourceInputs["teamId"] = state ? state.teamId : undefined;
        } else {
            const args = argsOrState as TeamOrganizationMembersArgs | undefined;
            if ((!args || args.organizationMembershipIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationMembershipIds'");
            }
            if ((!args || args.teamId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'teamId'");
            }
            resourceInputs["organizationMembershipIds"] = args ? args.organizationMembershipIds : undefined;
            resourceInputs["teamId"] = args ? args.teamId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TeamOrganizationMembers.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TeamOrganizationMembers resources.
 */
export interface TeamOrganizationMembersState {
    organizationMembershipIds?: pulumi.Input<pulumi.Input<string>[]>;
    teamId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TeamOrganizationMembers resource.
 */
export interface TeamOrganizationMembersArgs {
    organizationMembershipIds: pulumi.Input<pulumi.Input<string>[]>;
    teamId: pulumi.Input<string>;
}
