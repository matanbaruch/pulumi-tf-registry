// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TeamSyncGroupMapping extends pulumi.CustomResource {
    /**
     * Get an existing TeamSyncGroupMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TeamSyncGroupMappingState, opts?: pulumi.CustomResourceOptions): TeamSyncGroupMapping {
        return new TeamSyncGroupMapping(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'github:index/teamSyncGroupMapping:TeamSyncGroupMapping';

    /**
     * Returns true if the given object is an instance of TeamSyncGroupMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TeamSyncGroupMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TeamSyncGroupMapping.__pulumiType;
    }

    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * An Array of GitHub Identity Provider Groups (or empty []).
     */
    public readonly groups!: pulumi.Output<outputs.TeamSyncGroupMappingGroup[] | undefined>;
    /**
     * Slug of the team.
     */
    public readonly teamSlug!: pulumi.Output<string>;

    /**
     * Create a TeamSyncGroupMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TeamSyncGroupMappingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TeamSyncGroupMappingArgs | TeamSyncGroupMappingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TeamSyncGroupMappingState | undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["teamSlug"] = state ? state.teamSlug : undefined;
        } else {
            const args = argsOrState as TeamSyncGroupMappingArgs | undefined;
            if ((!args || args.teamSlug === undefined) && !opts.urn) {
                throw new Error("Missing required property 'teamSlug'");
            }
            resourceInputs["groups"] = args ? args.groups : undefined;
            resourceInputs["teamSlug"] = args ? args.teamSlug : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TeamSyncGroupMapping.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TeamSyncGroupMapping resources.
 */
export interface TeamSyncGroupMappingState {
    etag?: pulumi.Input<string>;
    /**
     * An Array of GitHub Identity Provider Groups (or empty []).
     */
    groups?: pulumi.Input<pulumi.Input<inputs.TeamSyncGroupMappingGroup>[]>;
    /**
     * Slug of the team.
     */
    teamSlug?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TeamSyncGroupMapping resource.
 */
export interface TeamSyncGroupMappingArgs {
    /**
     * An Array of GitHub Identity Provider Groups (or empty []).
     */
    groups?: pulumi.Input<pulumi.Input<inputs.TeamSyncGroupMappingGroup>[]>;
    /**
     * Slug of the team.
     */
    teamSlug: pulumi.Input<string>;
}
