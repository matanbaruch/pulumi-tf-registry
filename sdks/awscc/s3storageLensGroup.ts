// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class S3StorageLensGroup extends pulumi.CustomResource {
    /**
     * Get an existing S3StorageLensGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: S3StorageLensGroupState, opts?: pulumi.CustomResourceOptions): S3StorageLensGroup {
        return new S3StorageLensGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/s3StorageLensGroup:S3StorageLensGroup';

    /**
     * Returns true if the given object is an instance of S3StorageLensGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is S3StorageLensGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === S3StorageLensGroup.__pulumiType;
    }

    /**
     * Sets the Storage Lens Group filter.
     */
    public readonly filter!: pulumi.Output<outputs.S3StorageLensGroupFilter>;
    /**
     * The name that identifies the Amazon S3 Storage Lens Group.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ARN for the Amazon S3 Storage Lens Group.
     */
    public /*out*/ readonly storageLensGroupArn!: pulumi.Output<string>;
    /**
     * A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.
     */
    public readonly tags!: pulumi.Output<outputs.S3StorageLensGroupTag[]>;

    /**
     * Create a S3StorageLensGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: S3StorageLensGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: S3StorageLensGroupArgs | S3StorageLensGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as S3StorageLensGroupState | undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["storageLensGroupArn"] = state ? state.storageLensGroupArn : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as S3StorageLensGroupArgs | undefined;
            if ((!args || args.filter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filter'");
            }
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["storageLensGroupArn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(S3StorageLensGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering S3StorageLensGroup resources.
 */
export interface S3StorageLensGroupState {
    /**
     * Sets the Storage Lens Group filter.
     */
    filter?: pulumi.Input<inputs.S3StorageLensGroupFilter>;
    /**
     * The name that identifies the Amazon S3 Storage Lens Group.
     */
    name?: pulumi.Input<string>;
    /**
     * The ARN for the Amazon S3 Storage Lens Group.
     */
    storageLensGroupArn?: pulumi.Input<string>;
    /**
     * A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.S3StorageLensGroupTag>[]>;
}

/**
 * The set of arguments for constructing a S3StorageLensGroup resource.
 */
export interface S3StorageLensGroupArgs {
    /**
     * Sets the Storage Lens Group filter.
     */
    filter: pulumi.Input<inputs.S3StorageLensGroupFilter>;
    /**
     * The name that identifies the Amazon S3 Storage Lens Group.
     */
    name?: pulumi.Input<string>;
    /**
     * A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.S3StorageLensGroupTag>[]>;
}
