// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TeamAccess extends pulumi.CustomResource {
    /**
     * Get an existing TeamAccess resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TeamAccessState, opts?: pulumi.CustomResourceOptions): TeamAccess {
        return new TeamAccess(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tfe:index/teamAccess:TeamAccess';

    /**
     * Returns true if the given object is an instance of TeamAccess.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TeamAccess {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TeamAccess.__pulumiType;
    }

    public readonly access!: pulumi.Output<string>;
    public readonly permissions!: pulumi.Output<outputs.TeamAccessPermission[] | undefined>;
    public readonly teamId!: pulumi.Output<string>;
    public readonly workspaceId!: pulumi.Output<string>;

    /**
     * Create a TeamAccess resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TeamAccessArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TeamAccessArgs | TeamAccessState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TeamAccessState | undefined;
            resourceInputs["access"] = state ? state.access : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["teamId"] = state ? state.teamId : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
        } else {
            const args = argsOrState as TeamAccessArgs | undefined;
            if ((!args || args.teamId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'teamId'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["access"] = args ? args.access : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["teamId"] = args ? args.teamId : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TeamAccess.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TeamAccess resources.
 */
export interface TeamAccessState {
    access?: pulumi.Input<string>;
    permissions?: pulumi.Input<pulumi.Input<inputs.TeamAccessPermission>[]>;
    teamId?: pulumi.Input<string>;
    workspaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TeamAccess resource.
 */
export interface TeamAccessArgs {
    access?: pulumi.Input<string>;
    permissions?: pulumi.Input<pulumi.Input<inputs.TeamAccessPermission>[]>;
    teamId: pulumi.Input<string>;
    workspaceId: pulumi.Input<string>;
}
