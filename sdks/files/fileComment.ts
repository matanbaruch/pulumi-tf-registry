// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FileComment extends pulumi.CustomResource {
    /**
     * Get an existing FileComment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FileCommentState, opts?: pulumi.CustomResourceOptions): FileComment {
        return new FileComment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'files:index/fileComment:FileComment';

    /**
     * Returns true if the given object is an instance of FileComment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FileComment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FileComment.__pulumiType;
    }

    /**
     * Comment body.
     */
    public readonly body!: pulumi.Output<string>;
    /**
     * File path.
     */
    public readonly path!: pulumi.Output<string>;
    /**
     * Reactions to this comment.
     */
    public /*out*/ readonly reactions!: pulumi.Output<any>;

    /**
     * Create a FileComment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileCommentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FileCommentArgs | FileCommentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FileCommentState | undefined;
            resourceInputs["body"] = state ? state.body : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["reactions"] = state ? state.reactions : undefined;
        } else {
            const args = argsOrState as FileCommentArgs | undefined;
            if ((!args || args.body === undefined) && !opts.urn) {
                throw new Error("Missing required property 'body'");
            }
            if ((!args || args.path === undefined) && !opts.urn) {
                throw new Error("Missing required property 'path'");
            }
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["reactions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FileComment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FileComment resources.
 */
export interface FileCommentState {
    /**
     * Comment body.
     */
    body?: pulumi.Input<string>;
    /**
     * File path.
     */
    path?: pulumi.Input<string>;
    /**
     * Reactions to this comment.
     */
    reactions?: any;
}

/**
 * The set of arguments for constructing a FileComment resource.
 */
export interface FileCommentArgs {
    /**
     * Comment body.
     */
    body: pulumi.Input<string>;
    /**
     * File path.
     */
    path: pulumi.Input<string>;
}
