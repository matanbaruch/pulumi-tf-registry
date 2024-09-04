// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TagsTagValueIamBinding extends pulumi.CustomResource {
    /**
     * Get an existing TagsTagValueIamBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TagsTagValueIamBindingState, opts?: pulumi.CustomResourceOptions): TagsTagValueIamBinding {
        return new TagsTagValueIamBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/tagsTagValueIamBinding:TagsTagValueIamBinding';

    /**
     * Returns true if the given object is an instance of TagsTagValueIamBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TagsTagValueIamBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TagsTagValueIamBinding.__pulumiType;
    }

    public readonly condition!: pulumi.Output<outputs.TagsTagValueIamBindingCondition | undefined>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly members!: pulumi.Output<string[]>;
    public readonly role!: pulumi.Output<string>;
    public readonly tagValue!: pulumi.Output<string>;

    /**
     * Create a TagsTagValueIamBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagsTagValueIamBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TagsTagValueIamBindingArgs | TagsTagValueIamBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TagsTagValueIamBindingState | undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["tagValue"] = state ? state.tagValue : undefined;
        } else {
            const args = argsOrState as TagsTagValueIamBindingArgs | undefined;
            if ((!args || args.members === undefined) && !opts.urn) {
                throw new Error("Missing required property 'members'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            if ((!args || args.tagValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tagValue'");
            }
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["tagValue"] = args ? args.tagValue : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TagsTagValueIamBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TagsTagValueIamBinding resources.
 */
export interface TagsTagValueIamBindingState {
    condition?: pulumi.Input<inputs.TagsTagValueIamBindingCondition>;
    etag?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    role?: pulumi.Input<string>;
    tagValue?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TagsTagValueIamBinding resource.
 */
export interface TagsTagValueIamBindingArgs {
    condition?: pulumi.Input<inputs.TagsTagValueIamBindingCondition>;
    members: pulumi.Input<pulumi.Input<string>[]>;
    role: pulumi.Input<string>;
    tagValue: pulumi.Input<string>;
}
