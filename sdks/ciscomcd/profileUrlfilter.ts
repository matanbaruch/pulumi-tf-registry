// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ProfileUrlfilter extends pulumi.CustomResource {
    /**
     * Get an existing ProfileUrlfilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProfileUrlfilterState, opts?: pulumi.CustomResourceOptions): ProfileUrlfilter {
        return new ProfileUrlfilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ciscomcd:index/profileUrlfilter:ProfileUrlfilter';

    /**
     * Returns true if the given object is an instance of ProfileUrlfilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProfileUrlfilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProfileUrlfilter.__pulumiType;
    }

    public readonly defaultUrlFilter!: pulumi.Output<outputs.ProfileUrlfilterDefaultUrlFilter>;
    public readonly denyResponse!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly profileId!: pulumi.Output<number>;
    public readonly uncategorizedUrlFilter!: pulumi.Output<outputs.ProfileUrlfilterUncategorizedUrlFilter>;
    public readonly urlFilterLists!: pulumi.Output<outputs.ProfileUrlfilterUrlFilterList[]>;

    /**
     * Create a ProfileUrlfilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProfileUrlfilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProfileUrlfilterArgs | ProfileUrlfilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProfileUrlfilterState | undefined;
            resourceInputs["defaultUrlFilter"] = state ? state.defaultUrlFilter : undefined;
            resourceInputs["denyResponse"] = state ? state.denyResponse : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["profileId"] = state ? state.profileId : undefined;
            resourceInputs["uncategorizedUrlFilter"] = state ? state.uncategorizedUrlFilter : undefined;
            resourceInputs["urlFilterLists"] = state ? state.urlFilterLists : undefined;
        } else {
            const args = argsOrState as ProfileUrlfilterArgs | undefined;
            if ((!args || args.defaultUrlFilter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultUrlFilter'");
            }
            if ((!args || args.uncategorizedUrlFilter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'uncategorizedUrlFilter'");
            }
            if ((!args || args.urlFilterLists === undefined) && !opts.urn) {
                throw new Error("Missing required property 'urlFilterLists'");
            }
            resourceInputs["defaultUrlFilter"] = args ? args.defaultUrlFilter : undefined;
            resourceInputs["denyResponse"] = args ? args.denyResponse : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["uncategorizedUrlFilter"] = args ? args.uncategorizedUrlFilter : undefined;
            resourceInputs["urlFilterLists"] = args ? args.urlFilterLists : undefined;
            resourceInputs["profileId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ProfileUrlfilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ProfileUrlfilter resources.
 */
export interface ProfileUrlfilterState {
    defaultUrlFilter?: pulumi.Input<inputs.ProfileUrlfilterDefaultUrlFilter>;
    denyResponse?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    profileId?: pulumi.Input<number>;
    uncategorizedUrlFilter?: pulumi.Input<inputs.ProfileUrlfilterUncategorizedUrlFilter>;
    urlFilterLists?: pulumi.Input<pulumi.Input<inputs.ProfileUrlfilterUrlFilterList>[]>;
}

/**
 * The set of arguments for constructing a ProfileUrlfilter resource.
 */
export interface ProfileUrlfilterArgs {
    defaultUrlFilter: pulumi.Input<inputs.ProfileUrlfilterDefaultUrlFilter>;
    denyResponse?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uncategorizedUrlFilter: pulumi.Input<inputs.ProfileUrlfilterUncategorizedUrlFilter>;
    urlFilterLists: pulumi.Input<pulumi.Input<inputs.ProfileUrlfilterUrlFilterList>[]>;
}
