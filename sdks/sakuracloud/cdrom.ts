// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Cdrom extends pulumi.CustomResource {
    /**
     * Get an existing Cdrom resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CdromState, opts?: pulumi.CustomResourceOptions): Cdrom {
        return new Cdrom(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sakuracloud:index/cdrom:Cdrom';

    /**
     * Returns true if the given object is an instance of Cdrom.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cdrom {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cdrom.__pulumiType;
    }

    /**
     * The content to upload to as the CD-ROM. This conflicts with [`iso_image_file`]
     */
    public readonly content!: pulumi.Output<string | undefined>;
    /**
     * The name of content file to upload to as the CD-ROM. This is only used when `content` is specified. This conflicts with
     * [`iso_image_file`]
     */
    public readonly contentFileName!: pulumi.Output<string | undefined>;
    /**
     * The description of the CD-ROM. The length of this value must be in the range [`1`-`512`]
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The md5 checksum calculated from the base64 encoded file body
     */
    public readonly hash!: pulumi.Output<string>;
    /**
     * The icon id to attach to the CD-ROM
     */
    public readonly iconId!: pulumi.Output<string | undefined>;
    /**
     * The file path to upload to as the CD-ROM. This conflicts with [`content`]
     */
    public readonly isoImageFile!: pulumi.Output<string | undefined>;
    /**
     * The name of the CD-ROM. The length of this value must be in the range [`1`-`64`]
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The size of CD-ROM in GiB. This must be one of [`5`/`10`/`20`]
     */
    public readonly size!: pulumi.Output<number | undefined>;
    /**
     * Any tags to assign to the CD-ROM
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.CdromTimeouts | undefined>;
    /**
     * The name of zone that the CD-ROM will be created (e.g. `is1a`, `tk1a`)
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a Cdrom resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CdromArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CdromArgs | CdromState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CdromState | undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["contentFileName"] = state ? state.contentFileName : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["hash"] = state ? state.hash : undefined;
            resourceInputs["iconId"] = state ? state.iconId : undefined;
            resourceInputs["isoImageFile"] = state ? state.isoImageFile : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as CdromArgs | undefined;
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["contentFileName"] = args ? args.contentFileName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["hash"] = args ? args.hash : undefined;
            resourceInputs["iconId"] = args ? args.iconId : undefined;
            resourceInputs["isoImageFile"] = args ? args.isoImageFile : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cdrom.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cdrom resources.
 */
export interface CdromState {
    /**
     * The content to upload to as the CD-ROM. This conflicts with [`iso_image_file`]
     */
    content?: pulumi.Input<string>;
    /**
     * The name of content file to upload to as the CD-ROM. This is only used when `content` is specified. This conflicts with
     * [`iso_image_file`]
     */
    contentFileName?: pulumi.Input<string>;
    /**
     * The description of the CD-ROM. The length of this value must be in the range [`1`-`512`]
     */
    description?: pulumi.Input<string>;
    /**
     * The md5 checksum calculated from the base64 encoded file body
     */
    hash?: pulumi.Input<string>;
    /**
     * The icon id to attach to the CD-ROM
     */
    iconId?: pulumi.Input<string>;
    /**
     * The file path to upload to as the CD-ROM. This conflicts with [`content`]
     */
    isoImageFile?: pulumi.Input<string>;
    /**
     * The name of the CD-ROM. The length of this value must be in the range [`1`-`64`]
     */
    name?: pulumi.Input<string>;
    /**
     * The size of CD-ROM in GiB. This must be one of [`5`/`10`/`20`]
     */
    size?: pulumi.Input<number>;
    /**
     * Any tags to assign to the CD-ROM
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.CdromTimeouts>;
    /**
     * The name of zone that the CD-ROM will be created (e.g. `is1a`, `tk1a`)
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cdrom resource.
 */
export interface CdromArgs {
    /**
     * The content to upload to as the CD-ROM. This conflicts with [`iso_image_file`]
     */
    content?: pulumi.Input<string>;
    /**
     * The name of content file to upload to as the CD-ROM. This is only used when `content` is specified. This conflicts with
     * [`iso_image_file`]
     */
    contentFileName?: pulumi.Input<string>;
    /**
     * The description of the CD-ROM. The length of this value must be in the range [`1`-`512`]
     */
    description?: pulumi.Input<string>;
    /**
     * The md5 checksum calculated from the base64 encoded file body
     */
    hash?: pulumi.Input<string>;
    /**
     * The icon id to attach to the CD-ROM
     */
    iconId?: pulumi.Input<string>;
    /**
     * The file path to upload to as the CD-ROM. This conflicts with [`content`]
     */
    isoImageFile?: pulumi.Input<string>;
    /**
     * The name of the CD-ROM. The length of this value must be in the range [`1`-`64`]
     */
    name?: pulumi.Input<string>;
    /**
     * The size of CD-ROM in GiB. This must be one of [`5`/`10`/`20`]
     */
    size?: pulumi.Input<number>;
    /**
     * Any tags to assign to the CD-ROM
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.CdromTimeouts>;
    /**
     * The name of zone that the CD-ROM will be created (e.g. `is1a`, `tk1a`)
     */
    zone?: pulumi.Input<string>;
}
