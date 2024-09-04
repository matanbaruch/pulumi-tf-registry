// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TagGroup extends pulumi.CustomResource {
    /**
     * Get an existing TagGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TagGroupState, opts?: pulumi.CustomResourceOptions): TagGroup {
        return new TagGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rafay:index/tagGroup:TagGroup';

    /**
     * Returns true if the given object is an instance of TagGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TagGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TagGroup.__pulumiType;
    }

    /**
     * Metadata of the tag group resource
     */
    public readonly metadata!: pulumi.Output<outputs.TagGroupMetadata | undefined>;
    /**
     * Specification of the tag group resource
     */
    public readonly spec!: pulumi.Output<outputs.TagGroupSpec | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.TagGroupTimeouts | undefined>;

    /**
     * Create a TagGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TagGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TagGroupArgs | TagGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TagGroupState | undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as TagGroupArgs | undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TagGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TagGroup resources.
 */
export interface TagGroupState {
    /**
     * Metadata of the tag group resource
     */
    metadata?: pulumi.Input<inputs.TagGroupMetadata>;
    /**
     * Specification of the tag group resource
     */
    spec?: pulumi.Input<inputs.TagGroupSpec>;
    timeouts?: pulumi.Input<inputs.TagGroupTimeouts>;
}

/**
 * The set of arguments for constructing a TagGroup resource.
 */
export interface TagGroupArgs {
    /**
     * Metadata of the tag group resource
     */
    metadata?: pulumi.Input<inputs.TagGroupMetadata>;
    /**
     * Specification of the tag group resource
     */
    spec?: pulumi.Input<inputs.TagGroupSpec>;
    timeouts?: pulumi.Input<inputs.TagGroupTimeouts>;
}
