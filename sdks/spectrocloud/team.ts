// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Team extends pulumi.CustomResource {
    /**
     * Get an existing Team resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TeamState, opts?: pulumi.CustomResourceOptions): Team {
        return new Team(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'spectrocloud:index/team:Team';

    /**
     * Returns true if the given object is an instance of Team.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Team {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Team.__pulumiType;
    }

    /**
     * Name of the team.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of project roles to be associated with the team.
     */
    public readonly projectRoleMappings!: pulumi.Output<outputs.TeamProjectRoleMapping[] | undefined>;
    /**
     * List of tenant role ids to be associated with the team.
     */
    public readonly tenantRoleMappings!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.TeamTimeouts | undefined>;
    /**
     * List of user ids to be associated with the team.
     */
    public readonly users!: pulumi.Output<string[] | undefined>;
    /**
     * List of workspace roles to be associated with the team.
     */
    public readonly workspaceRoleMappings!: pulumi.Output<outputs.TeamWorkspaceRoleMapping[] | undefined>;

    /**
     * Create a Team resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TeamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TeamArgs | TeamState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TeamState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["projectRoleMappings"] = state ? state.projectRoleMappings : undefined;
            resourceInputs["tenantRoleMappings"] = state ? state.tenantRoleMappings : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["users"] = state ? state.users : undefined;
            resourceInputs["workspaceRoleMappings"] = state ? state.workspaceRoleMappings : undefined;
        } else {
            const args = argsOrState as TeamArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectRoleMappings"] = args ? args.projectRoleMappings : undefined;
            resourceInputs["tenantRoleMappings"] = args ? args.tenantRoleMappings : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["users"] = args ? args.users : undefined;
            resourceInputs["workspaceRoleMappings"] = args ? args.workspaceRoleMappings : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Team.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Team resources.
 */
export interface TeamState {
    /**
     * Name of the team.
     */
    name?: pulumi.Input<string>;
    /**
     * List of project roles to be associated with the team.
     */
    projectRoleMappings?: pulumi.Input<pulumi.Input<inputs.TeamProjectRoleMapping>[]>;
    /**
     * List of tenant role ids to be associated with the team.
     */
    tenantRoleMappings?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.TeamTimeouts>;
    /**
     * List of user ids to be associated with the team.
     */
    users?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of workspace roles to be associated with the team.
     */
    workspaceRoleMappings?: pulumi.Input<pulumi.Input<inputs.TeamWorkspaceRoleMapping>[]>;
}

/**
 * The set of arguments for constructing a Team resource.
 */
export interface TeamArgs {
    /**
     * Name of the team.
     */
    name?: pulumi.Input<string>;
    /**
     * List of project roles to be associated with the team.
     */
    projectRoleMappings?: pulumi.Input<pulumi.Input<inputs.TeamProjectRoleMapping>[]>;
    /**
     * List of tenant role ids to be associated with the team.
     */
    tenantRoleMappings?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.TeamTimeouts>;
    /**
     * List of user ids to be associated with the team.
     */
    users?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of workspace roles to be associated with the team.
     */
    workspaceRoleMappings?: pulumi.Input<pulumi.Input<inputs.TeamWorkspaceRoleMapping>[]>;
}
