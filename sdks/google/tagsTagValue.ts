// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TagsTagValue extends pulumi.CustomResource {
    /**
     * Get an existing TagsTagValue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TagsTagValueState, opts?: pulumi.CustomResourceOptions): TagsTagValue {
        return new TagsTagValue(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/tagsTagValue:TagsTagValue';

    /**
     * Returns true if the given object is an instance of TagsTagValue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TagsTagValue {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TagsTagValue.__pulumiType;
    }

    /**
     * Output only. Creation time. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
     * fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * User-assigned description of the TagValue. Must not exceed 256 characters.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The generated numeric id for the TagValue.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Output only. Namespaced name of the TagValue. Will be in the format {parentNamespace}/{tagKeyShortName}/{shortName}.
     */
    public /*out*/ readonly namespacedName!: pulumi.Output<string>;
    /**
     * Input only. The resource name of the new TagValue's parent. Must be of the form tagKeys/{tag_key_id}.
     */
    public readonly parent!: pulumi.Output<string>;
    /**
     * Input only. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent
     * TagKey. The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z])
     * with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    public readonly shortName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.TagsTagValueTimeouts | undefined>;
    /**
     * Output only. Update time. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional
     * digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a TagsTagValue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagsTagValueArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TagsTagValueArgs | TagsTagValueState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TagsTagValueState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespacedName"] = state ? state.namespacedName : undefined;
            resourceInputs["parent"] = state ? state.parent : undefined;
            resourceInputs["shortName"] = state ? state.shortName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as TagsTagValueArgs | undefined;
            if ((!args || args.parent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parent'");
            }
            if ((!args || args.shortName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shortName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["parent"] = args ? args.parent : undefined;
            resourceInputs["shortName"] = args ? args.shortName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["namespacedName"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TagsTagValue.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TagsTagValue resources.
 */
export interface TagsTagValueState {
    /**
     * Output only. Creation time. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
     * fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    createTime?: pulumi.Input<string>;
    /**
     * User-assigned description of the TagValue. Must not exceed 256 characters.
     */
    description?: pulumi.Input<string>;
    /**
     * The generated numeric id for the TagValue.
     */
    name?: pulumi.Input<string>;
    /**
     * Output only. Namespaced name of the TagValue. Will be in the format {parentNamespace}/{tagKeyShortName}/{shortName}.
     */
    namespacedName?: pulumi.Input<string>;
    /**
     * Input only. The resource name of the new TagValue's parent. Must be of the form tagKeys/{tag_key_id}.
     */
    parent?: pulumi.Input<string>;
    /**
     * Input only. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent
     * TagKey. The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z])
     * with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    shortName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.TagsTagValueTimeouts>;
    /**
     * Output only. Update time. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional
     * digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TagsTagValue resource.
 */
export interface TagsTagValueArgs {
    /**
     * User-assigned description of the TagValue. Must not exceed 256 characters.
     */
    description?: pulumi.Input<string>;
    /**
     * Input only. The resource name of the new TagValue's parent. Must be of the form tagKeys/{tag_key_id}.
     */
    parent: pulumi.Input<string>;
    /**
     * Input only. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent
     * TagKey. The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z])
     * with dashes (-), underscores (_), dots (.), and alphanumerics between.
     */
    shortName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.TagsTagValueTimeouts>;
}
