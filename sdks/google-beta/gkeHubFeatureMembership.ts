// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GkeHubFeatureMembership extends pulumi.CustomResource {
    /**
     * Get an existing GkeHubFeatureMembership resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GkeHubFeatureMembershipState, opts?: pulumi.CustomResourceOptions): GkeHubFeatureMembership {
        return new GkeHubFeatureMembership(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/gkeHubFeatureMembership:GkeHubFeatureMembership';

    /**
     * Returns true if the given object is an instance of GkeHubFeatureMembership.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GkeHubFeatureMembership {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GkeHubFeatureMembership.__pulumiType;
    }

    /**
     * Config Management-specific spec.
     */
    public readonly configmanagement!: pulumi.Output<outputs.GkeHubFeatureMembershipConfigmanagement | undefined>;
    /**
     * The name of the feature
     */
    public readonly feature!: pulumi.Output<string>;
    /**
     * The location of the feature
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the membership
     */
    public readonly membership!: pulumi.Output<string>;
    /**
     * The location of the membership
     */
    public readonly membershipLocation!: pulumi.Output<string | undefined>;
    /**
     * Manage Mesh Features
     */
    public readonly mesh!: pulumi.Output<outputs.GkeHubFeatureMembershipMesh | undefined>;
    /**
     * Policy Controller-specific spec.
     */
    public readonly policycontroller!: pulumi.Output<outputs.GkeHubFeatureMembershipPolicycontroller | undefined>;
    /**
     * The project of the feature
     */
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.GkeHubFeatureMembershipTimeouts | undefined>;

    /**
     * Create a GkeHubFeatureMembership resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GkeHubFeatureMembershipArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GkeHubFeatureMembershipArgs | GkeHubFeatureMembershipState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GkeHubFeatureMembershipState | undefined;
            resourceInputs["configmanagement"] = state ? state.configmanagement : undefined;
            resourceInputs["feature"] = state ? state.feature : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["membership"] = state ? state.membership : undefined;
            resourceInputs["membershipLocation"] = state ? state.membershipLocation : undefined;
            resourceInputs["mesh"] = state ? state.mesh : undefined;
            resourceInputs["policycontroller"] = state ? state.policycontroller : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as GkeHubFeatureMembershipArgs | undefined;
            if ((!args || args.feature === undefined) && !opts.urn) {
                throw new Error("Missing required property 'feature'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.membership === undefined) && !opts.urn) {
                throw new Error("Missing required property 'membership'");
            }
            resourceInputs["configmanagement"] = args ? args.configmanagement : undefined;
            resourceInputs["feature"] = args ? args.feature : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["membership"] = args ? args.membership : undefined;
            resourceInputs["membershipLocation"] = args ? args.membershipLocation : undefined;
            resourceInputs["mesh"] = args ? args.mesh : undefined;
            resourceInputs["policycontroller"] = args ? args.policycontroller : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GkeHubFeatureMembership.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GkeHubFeatureMembership resources.
 */
export interface GkeHubFeatureMembershipState {
    /**
     * Config Management-specific spec.
     */
    configmanagement?: pulumi.Input<inputs.GkeHubFeatureMembershipConfigmanagement>;
    /**
     * The name of the feature
     */
    feature?: pulumi.Input<string>;
    /**
     * The location of the feature
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the membership
     */
    membership?: pulumi.Input<string>;
    /**
     * The location of the membership
     */
    membershipLocation?: pulumi.Input<string>;
    /**
     * Manage Mesh Features
     */
    mesh?: pulumi.Input<inputs.GkeHubFeatureMembershipMesh>;
    /**
     * Policy Controller-specific spec.
     */
    policycontroller?: pulumi.Input<inputs.GkeHubFeatureMembershipPolicycontroller>;
    /**
     * The project of the feature
     */
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GkeHubFeatureMembershipTimeouts>;
}

/**
 * The set of arguments for constructing a GkeHubFeatureMembership resource.
 */
export interface GkeHubFeatureMembershipArgs {
    /**
     * Config Management-specific spec.
     */
    configmanagement?: pulumi.Input<inputs.GkeHubFeatureMembershipConfigmanagement>;
    /**
     * The name of the feature
     */
    feature: pulumi.Input<string>;
    /**
     * The location of the feature
     */
    location: pulumi.Input<string>;
    /**
     * The name of the membership
     */
    membership: pulumi.Input<string>;
    /**
     * The location of the membership
     */
    membershipLocation?: pulumi.Input<string>;
    /**
     * Manage Mesh Features
     */
    mesh?: pulumi.Input<inputs.GkeHubFeatureMembershipMesh>;
    /**
     * Policy Controller-specific spec.
     */
    policycontroller?: pulumi.Input<inputs.GkeHubFeatureMembershipPolicycontroller>;
    /**
     * The project of the feature
     */
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GkeHubFeatureMembershipTimeouts>;
}
