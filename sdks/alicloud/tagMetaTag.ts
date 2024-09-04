// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TagMetaTag extends pulumi.CustomResource {
    /**
     * Get an existing TagMetaTag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TagMetaTagState, opts?: pulumi.CustomResourceOptions): TagMetaTag {
        return new TagMetaTag(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/tagMetaTag:TagMetaTag';

    /**
     * Returns true if the given object is an instance of TagMetaTag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TagMetaTag {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TagMetaTag.__pulumiType;
    }

    public readonly key!: pulumi.Output<string>;
    public readonly values!: pulumi.Output<string[]>;

    /**
     * Create a TagMetaTag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TagMetaTagArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TagMetaTagArgs | TagMetaTagState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TagMetaTagState | undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["values"] = state ? state.values : undefined;
        } else {
            const args = argsOrState as TagMetaTagArgs | undefined;
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.values === undefined) && !opts.urn) {
                throw new Error("Missing required property 'values'");
            }
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["values"] = args ? args.values : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TagMetaTag.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TagMetaTag resources.
 */
export interface TagMetaTagState {
    key?: pulumi.Input<string>;
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a TagMetaTag resource.
 */
export interface TagMetaTagArgs {
    key: pulumi.Input<string>;
    values: pulumi.Input<pulumi.Input<string>[]>;
}
