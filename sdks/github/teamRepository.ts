// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TeamRepository extends pulumi.CustomResource {
    /**
     * Get an existing TeamRepository resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TeamRepositoryState, opts?: pulumi.CustomResourceOptions): TeamRepository {
        return new TeamRepository(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'github:index/teamRepository:TeamRepository';

    /**
     * Returns true if the given object is an instance of TeamRepository.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TeamRepository {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TeamRepository.__pulumiType;
    }

    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The permissions of team members regarding the repository. Must be one of 'pull', 'triage', 'push', 'maintain', 'admin'
     * or the name of an existing custom repository role within the organisation.
     */
    public readonly permission!: pulumi.Output<string | undefined>;
    /**
     * The repository to add to the team.
     */
    public readonly repository!: pulumi.Output<string>;
    /**
     * ID or slug of team
     */
    public readonly teamId!: pulumi.Output<string>;

    /**
     * Create a TeamRepository resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TeamRepositoryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TeamRepositoryArgs | TeamRepositoryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TeamRepositoryState | undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["permission"] = state ? state.permission : undefined;
            resourceInputs["repository"] = state ? state.repository : undefined;
            resourceInputs["teamId"] = state ? state.teamId : undefined;
        } else {
            const args = argsOrState as TeamRepositoryArgs | undefined;
            if ((!args || args.repository === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repository'");
            }
            if ((!args || args.teamId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'teamId'");
            }
            resourceInputs["permission"] = args ? args.permission : undefined;
            resourceInputs["repository"] = args ? args.repository : undefined;
            resourceInputs["teamId"] = args ? args.teamId : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TeamRepository.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TeamRepository resources.
 */
export interface TeamRepositoryState {
    etag?: pulumi.Input<string>;
    /**
     * The permissions of team members regarding the repository. Must be one of 'pull', 'triage', 'push', 'maintain', 'admin'
     * or the name of an existing custom repository role within the organisation.
     */
    permission?: pulumi.Input<string>;
    /**
     * The repository to add to the team.
     */
    repository?: pulumi.Input<string>;
    /**
     * ID or slug of team
     */
    teamId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TeamRepository resource.
 */
export interface TeamRepositoryArgs {
    /**
     * The permissions of team members regarding the repository. Must be one of 'pull', 'triage', 'push', 'maintain', 'admin'
     * or the name of an existing custom repository role within the organisation.
     */
    permission?: pulumi.Input<string>;
    /**
     * The repository to add to the team.
     */
    repository: pulumi.Input<string>;
    /**
     * ID or slug of team
     */
    teamId: pulumi.Input<string>;
}
