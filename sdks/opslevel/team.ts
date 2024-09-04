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
    public static readonly __pulumiType = 'opslevel:index/team:Team';

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
     * A list of human-friendly, unique identifiers for the team.
     */
    public readonly aliases!: pulumi.Output<string[] | undefined>;
    public readonly members!: pulumi.Output<outputs.TeamMember[] | undefined>;
    /**
     * The team's display name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The id or alias of the parent team.
     */
    public readonly parent!: pulumi.Output<string | undefined>;
    /**
     * A description of what the team is responsible for.
     */
    public readonly responsibilities!: pulumi.Output<string | undefined>;

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
            resourceInputs["aliases"] = state ? state.aliases : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parent"] = state ? state.parent : undefined;
            resourceInputs["responsibilities"] = state ? state.responsibilities : undefined;
        } else {
            const args = argsOrState as TeamArgs | undefined;
            resourceInputs["aliases"] = args ? args.aliases : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parent"] = args ? args.parent : undefined;
            resourceInputs["responsibilities"] = args ? args.responsibilities : undefined;
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
     * A list of human-friendly, unique identifiers for the team.
     */
    aliases?: pulumi.Input<pulumi.Input<string>[]>;
    members?: pulumi.Input<pulumi.Input<inputs.TeamMember>[]>;
    /**
     * The team's display name.
     */
    name?: pulumi.Input<string>;
    /**
     * The id or alias of the parent team.
     */
    parent?: pulumi.Input<string>;
    /**
     * A description of what the team is responsible for.
     */
    responsibilities?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Team resource.
 */
export interface TeamArgs {
    /**
     * A list of human-friendly, unique identifiers for the team.
     */
    aliases?: pulumi.Input<pulumi.Input<string>[]>;
    members?: pulumi.Input<pulumi.Input<inputs.TeamMember>[]>;
    /**
     * The team's display name.
     */
    name?: pulumi.Input<string>;
    /**
     * The id or alias of the parent team.
     */
    parent?: pulumi.Input<string>;
    /**
     * A description of what the team is responsible for.
     */
    responsibilities?: pulumi.Input<string>;
}
