// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ElastictranscoderPreset extends pulumi.CustomResource {
    /**
     * Get an existing ElastictranscoderPreset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ElastictranscoderPresetState, opts?: pulumi.CustomResourceOptions): ElastictranscoderPreset {
        return new ElastictranscoderPreset(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/elastictranscoderPreset:ElastictranscoderPreset';

    /**
     * Returns true if the given object is an instance of ElastictranscoderPreset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ElastictranscoderPreset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ElastictranscoderPreset.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly audio!: pulumi.Output<outputs.ElastictranscoderPresetAudio | undefined>;
    public readonly audioCodecOptions!: pulumi.Output<outputs.ElastictranscoderPresetAudioCodecOptions | undefined>;
    public readonly container!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly thumbnails!: pulumi.Output<outputs.ElastictranscoderPresetThumbnails | undefined>;
    public readonly type!: pulumi.Output<string>;
    public readonly video!: pulumi.Output<outputs.ElastictranscoderPresetVideo | undefined>;
    public readonly videoCodecOptions!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly videoWatermarks!: pulumi.Output<outputs.ElastictranscoderPresetVideoWatermark[] | undefined>;

    /**
     * Create a ElastictranscoderPreset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ElastictranscoderPresetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ElastictranscoderPresetArgs | ElastictranscoderPresetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ElastictranscoderPresetState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["audio"] = state ? state.audio : undefined;
            resourceInputs["audioCodecOptions"] = state ? state.audioCodecOptions : undefined;
            resourceInputs["container"] = state ? state.container : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["thumbnails"] = state ? state.thumbnails : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["video"] = state ? state.video : undefined;
            resourceInputs["videoCodecOptions"] = state ? state.videoCodecOptions : undefined;
            resourceInputs["videoWatermarks"] = state ? state.videoWatermarks : undefined;
        } else {
            const args = argsOrState as ElastictranscoderPresetArgs | undefined;
            if ((!args || args.container === undefined) && !opts.urn) {
                throw new Error("Missing required property 'container'");
            }
            resourceInputs["audio"] = args ? args.audio : undefined;
            resourceInputs["audioCodecOptions"] = args ? args.audioCodecOptions : undefined;
            resourceInputs["container"] = args ? args.container : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["thumbnails"] = args ? args.thumbnails : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["video"] = args ? args.video : undefined;
            resourceInputs["videoCodecOptions"] = args ? args.videoCodecOptions : undefined;
            resourceInputs["videoWatermarks"] = args ? args.videoWatermarks : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ElastictranscoderPreset.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ElastictranscoderPreset resources.
 */
export interface ElastictranscoderPresetState {
    arn?: pulumi.Input<string>;
    audio?: pulumi.Input<inputs.ElastictranscoderPresetAudio>;
    audioCodecOptions?: pulumi.Input<inputs.ElastictranscoderPresetAudioCodecOptions>;
    container?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    thumbnails?: pulumi.Input<inputs.ElastictranscoderPresetThumbnails>;
    type?: pulumi.Input<string>;
    video?: pulumi.Input<inputs.ElastictranscoderPresetVideo>;
    videoCodecOptions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    videoWatermarks?: pulumi.Input<pulumi.Input<inputs.ElastictranscoderPresetVideoWatermark>[]>;
}

/**
 * The set of arguments for constructing a ElastictranscoderPreset resource.
 */
export interface ElastictranscoderPresetArgs {
    audio?: pulumi.Input<inputs.ElastictranscoderPresetAudio>;
    audioCodecOptions?: pulumi.Input<inputs.ElastictranscoderPresetAudioCodecOptions>;
    container: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    thumbnails?: pulumi.Input<inputs.ElastictranscoderPresetThumbnails>;
    type?: pulumi.Input<string>;
    video?: pulumi.Input<inputs.ElastictranscoderPresetVideo>;
    videoCodecOptions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    videoWatermarks?: pulumi.Input<pulumi.Input<inputs.ElastictranscoderPresetVideoWatermark>[]>;
}
