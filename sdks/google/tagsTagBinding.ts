// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TagsTagBinding extends pulumi.CustomResource {
    /**
     * Get an existing TagsTagBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TagsTagBindingState, opts?: pulumi.CustomResourceOptions): TagsTagBinding {
        return new TagsTagBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/tagsTagBinding:TagsTagBinding';

    /**
     * Returns true if the given object is an instance of TagsTagBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TagsTagBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TagsTagBinding.__pulumiType;
    }

    /**
     * The generated id for the TagBinding. This is a string of the form: 'tagBindings/{full-resource-name}/{tag-value-name}'
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123
     */
    public readonly parent!: pulumi.Output<string>;
    /**
     * The TagValue of the TagBinding. Must be of the form tagValues/456.
     */
    public readonly tagValue!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.TagsTagBindingTimeouts | undefined>;

    /**
     * Create a TagsTagBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagsTagBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TagsTagBindingArgs | TagsTagBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TagsTagBindingState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parent"] = state ? state.parent : undefined;
            resourceInputs["tagValue"] = state ? state.tagValue : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as TagsTagBindingArgs | undefined;
            if ((!args || args.parent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parent'");
            }
            if ((!args || args.tagValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tagValue'");
            }
            resourceInputs["parent"] = args ? args.parent : undefined;
            resourceInputs["tagValue"] = args ? args.tagValue : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TagsTagBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TagsTagBinding resources.
 */
export interface TagsTagBindingState {
    /**
     * The generated id for the TagBinding. This is a string of the form: 'tagBindings/{full-resource-name}/{tag-value-name}'
     */
    name?: pulumi.Input<string>;
    /**
     * The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123
     */
    parent?: pulumi.Input<string>;
    /**
     * The TagValue of the TagBinding. Must be of the form tagValues/456.
     */
    tagValue?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.TagsTagBindingTimeouts>;
}

/**
 * The set of arguments for constructing a TagsTagBinding resource.
 */
export interface TagsTagBindingArgs {
    /**
     * The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123
     */
    parent: pulumi.Input<string>;
    /**
     * The TagValue of the TagBinding. Must be of the form tagValues/456.
     */
    tagValue: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.TagsTagBindingTimeouts>;
}
