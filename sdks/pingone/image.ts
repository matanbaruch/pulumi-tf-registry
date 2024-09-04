// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Image extends pulumi.CustomResource {
    /**
     * Get an existing Image resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ImageState, opts?: pulumi.CustomResourceOptions): Image {
        return new Image(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/image:Image';

    /**
     * Returns true if the given object is an instance of Image.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Image {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Image.__pulumiType;
    }

    /**
     * The ID of the environment to create the image in. Must be a valid PingOne resource ID. This field is immutable and will
     * trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * A base64 encoded image file to import. Only PNG, GIF and JPG images are supported. This field is immutable and will
     * trigger a replace plan if changed.
     */
    public readonly imageFileBase64!: pulumi.Output<string>;
    /**
     * A single object that specifies the processed image details.
     */
    public /*out*/ readonly uploadedImage!: pulumi.Output<outputs.ImageUploadedImage>;

    /**
     * Create a Image resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ImageArgs | ImageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ImageState | undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["imageFileBase64"] = state ? state.imageFileBase64 : undefined;
            resourceInputs["uploadedImage"] = state ? state.uploadedImage : undefined;
        } else {
            const args = argsOrState as ImageArgs | undefined;
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            if ((!args || args.imageFileBase64 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'imageFileBase64'");
            }
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["imageFileBase64"] = args ? args.imageFileBase64 : undefined;
            resourceInputs["uploadedImage"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Image.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Image resources.
 */
export interface ImageState {
    /**
     * The ID of the environment to create the image in. Must be a valid PingOne resource ID. This field is immutable and will
     * trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * A base64 encoded image file to import. Only PNG, GIF and JPG images are supported. This field is immutable and will
     * trigger a replace plan if changed.
     */
    imageFileBase64?: pulumi.Input<string>;
    /**
     * A single object that specifies the processed image details.
     */
    uploadedImage?: pulumi.Input<inputs.ImageUploadedImage>;
}

/**
 * The set of arguments for constructing a Image resource.
 */
export interface ImageArgs {
    /**
     * The ID of the environment to create the image in. Must be a valid PingOne resource ID. This field is immutable and will
     * trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
    /**
     * A base64 encoded image file to import. Only PNG, GIF and JPG images are supported. This field is immutable and will
     * trigger a replace plan if changed.
     */
    imageFileBase64: pulumi.Input<string>;
}
