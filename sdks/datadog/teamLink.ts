// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TeamLink extends pulumi.CustomResource {
    /**
     * Get an existing TeamLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TeamLinkState, opts?: pulumi.CustomResourceOptions): TeamLink {
        return new TeamLink(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'datadog:index/teamLink:TeamLink';

    /**
     * Returns true if the given object is an instance of TeamLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TeamLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TeamLink.__pulumiType;
    }

    /**
     * The link's label.
     */
    public readonly label!: pulumi.Output<string>;
    /**
     * The link's position, used to sort links for the team.
     */
    public readonly position!: pulumi.Output<number>;
    /**
     * ID of the team the link is associated with.
     */
    public readonly teamId!: pulumi.Output<string>;
    /**
     * The URL for the link.
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a TeamLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TeamLinkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TeamLinkArgs | TeamLinkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TeamLinkState | undefined;
            resourceInputs["label"] = state ? state.label : undefined;
            resourceInputs["position"] = state ? state.position : undefined;
            resourceInputs["teamId"] = state ? state.teamId : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as TeamLinkArgs | undefined;
            if ((!args || args.label === undefined) && !opts.urn) {
                throw new Error("Missing required property 'label'");
            }
            if ((!args || args.teamId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'teamId'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["label"] = args ? args.label : undefined;
            resourceInputs["position"] = args ? args.position : undefined;
            resourceInputs["teamId"] = args ? args.teamId : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TeamLink.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TeamLink resources.
 */
export interface TeamLinkState {
    /**
     * The link's label.
     */
    label?: pulumi.Input<string>;
    /**
     * The link's position, used to sort links for the team.
     */
    position?: pulumi.Input<number>;
    /**
     * ID of the team the link is associated with.
     */
    teamId?: pulumi.Input<string>;
    /**
     * The URL for the link.
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TeamLink resource.
 */
export interface TeamLinkArgs {
    /**
     * The link's label.
     */
    label: pulumi.Input<string>;
    /**
     * The link's position, used to sort links for the team.
     */
    position?: pulumi.Input<number>;
    /**
     * ID of the team the link is associated with.
     */
    teamId: pulumi.Input<string>;
    /**
     * The URL for the link.
     */
    url: pulumi.Input<string>;
}
