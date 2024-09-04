// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NimblestudioStreamingImage extends pulumi.CustomResource {
    /**
     * Get an existing NimblestudioStreamingImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NimblestudioStreamingImageState, opts?: pulumi.CustomResourceOptions): NimblestudioStreamingImage {
        return new NimblestudioStreamingImage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/nimblestudioStreamingImage:NimblestudioStreamingImage';

    /**
     * Returns true if the given object is an instance of NimblestudioStreamingImage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NimblestudioStreamingImage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NimblestudioStreamingImage.__pulumiType;
    }

    /**
     * <p>A human-readable description of the streaming image.</p>
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * <p>The ID of an EC2 machine image with which to create this streaming image.</p>
     */
    public readonly ec2ImageId!: pulumi.Output<string>;
    /**
     * <p>TODO</p>
     */
    public /*out*/ readonly encryptionConfiguration!: pulumi.Output<outputs.NimblestudioStreamingImageEncryptionConfiguration>;
    /**
     * <p>The list of EULAs that must be accepted before a Streaming Session can be started using this streaming image.</p>
     */
    public /*out*/ readonly eulaIds!: pulumi.Output<string[]>;
    /**
     * <p>A friendly name for a streaming image resource.</p>
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * <p>The owner of the streaming image, either the studioId that contains the streaming image, or 'amazon' for images that
     * are provided by Amazon Nimble Studio.</p>
     */
    public /*out*/ readonly owner!: pulumi.Output<string>;
    /**
     * <p>The platform of the streaming image, either WINDOWS or LINUX.</p>
     */
    public /*out*/ readonly platform!: pulumi.Output<string>;
    public /*out*/ readonly streamingImageId!: pulumi.Output<string>;
    /**
     * <p>The studioId. </p>
     */
    public readonly studioId!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a NimblestudioStreamingImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NimblestudioStreamingImageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NimblestudioStreamingImageArgs | NimblestudioStreamingImageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NimblestudioStreamingImageState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ec2ImageId"] = state ? state.ec2ImageId : undefined;
            resourceInputs["encryptionConfiguration"] = state ? state.encryptionConfiguration : undefined;
            resourceInputs["eulaIds"] = state ? state.eulaIds : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["platform"] = state ? state.platform : undefined;
            resourceInputs["streamingImageId"] = state ? state.streamingImageId : undefined;
            resourceInputs["studioId"] = state ? state.studioId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as NimblestudioStreamingImageArgs | undefined;
            if ((!args || args.ec2ImageId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ec2ImageId'");
            }
            if ((!args || args.studioId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'studioId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ec2ImageId"] = args ? args.ec2ImageId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["studioId"] = args ? args.studioId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["encryptionConfiguration"] = undefined /*out*/;
            resourceInputs["eulaIds"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["platform"] = undefined /*out*/;
            resourceInputs["streamingImageId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NimblestudioStreamingImage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NimblestudioStreamingImage resources.
 */
export interface NimblestudioStreamingImageState {
    /**
     * <p>A human-readable description of the streaming image.</p>
     */
    description?: pulumi.Input<string>;
    /**
     * <p>The ID of an EC2 machine image with which to create this streaming image.</p>
     */
    ec2ImageId?: pulumi.Input<string>;
    /**
     * <p>TODO</p>
     */
    encryptionConfiguration?: pulumi.Input<inputs.NimblestudioStreamingImageEncryptionConfiguration>;
    /**
     * <p>The list of EULAs that must be accepted before a Streaming Session can be started using this streaming image.</p>
     */
    eulaIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * <p>A friendly name for a streaming image resource.</p>
     */
    name?: pulumi.Input<string>;
    /**
     * <p>The owner of the streaming image, either the studioId that contains the streaming image, or 'amazon' for images that
     * are provided by Amazon Nimble Studio.</p>
     */
    owner?: pulumi.Input<string>;
    /**
     * <p>The platform of the streaming image, either WINDOWS or LINUX.</p>
     */
    platform?: pulumi.Input<string>;
    streamingImageId?: pulumi.Input<string>;
    /**
     * <p>The studioId. </p>
     */
    studioId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a NimblestudioStreamingImage resource.
 */
export interface NimblestudioStreamingImageArgs {
    /**
     * <p>A human-readable description of the streaming image.</p>
     */
    description?: pulumi.Input<string>;
    /**
     * <p>The ID of an EC2 machine image with which to create this streaming image.</p>
     */
    ec2ImageId: pulumi.Input<string>;
    /**
     * <p>A friendly name for a streaming image resource.</p>
     */
    name?: pulumi.Input<string>;
    /**
     * <p>The studioId. </p>
     */
    studioId: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
