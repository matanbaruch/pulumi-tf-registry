// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MpsAdaptiveDynamicStreamingTemplate extends pulumi.CustomResource {
    /**
     * Get an existing MpsAdaptiveDynamicStreamingTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MpsAdaptiveDynamicStreamingTemplateState, opts?: pulumi.CustomResourceOptions): MpsAdaptiveDynamicStreamingTemplate {
        return new MpsAdaptiveDynamicStreamingTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/mpsAdaptiveDynamicStreamingTemplate:MpsAdaptiveDynamicStreamingTemplate';

    /**
     * Returns true if the given object is an instance of MpsAdaptiveDynamicStreamingTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MpsAdaptiveDynamicStreamingTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MpsAdaptiveDynamicStreamingTemplate.__pulumiType;
    }

    /**
     * Template description information, length limit: 256 characters.
     */
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Whether to prohibit video from low bit rate to high bit rate, value range:0: no.1: yes.Default value: 0.
     */
    public readonly disableHigherVideoBitrate!: pulumi.Output<number | undefined>;
    /**
     * Whether to prohibit the conversion of video resolution to high resolution, value range:0: no.1: yes.Default value: 0.
     */
    public readonly disableHigherVideoResolution!: pulumi.Output<number | undefined>;
    /**
     * Adaptive transcoding format, value range:HLS, MPEG-DASH.
     */
    public readonly format!: pulumi.Output<string>;
    /**
     * Template name, length limit: 64 characters.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Convert adaptive code stream to output sub-stream parameter information, and output up to 10 sub-streams.Note: The frame
     * rate of each sub-stream must be consistent; if not, the frame rate of the first sub-stream is used as the output frame
     * rate.
     */
    public readonly streamInfos!: pulumi.Output<outputs.MpsAdaptiveDynamicStreamingTemplateStreamInfo[]>;

    /**
     * Create a MpsAdaptiveDynamicStreamingTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MpsAdaptiveDynamicStreamingTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MpsAdaptiveDynamicStreamingTemplateArgs | MpsAdaptiveDynamicStreamingTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MpsAdaptiveDynamicStreamingTemplateState | undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disableHigherVideoBitrate"] = state ? state.disableHigherVideoBitrate : undefined;
            resourceInputs["disableHigherVideoResolution"] = state ? state.disableHigherVideoResolution : undefined;
            resourceInputs["format"] = state ? state.format : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["streamInfos"] = state ? state.streamInfos : undefined;
        } else {
            const args = argsOrState as MpsAdaptiveDynamicStreamingTemplateArgs | undefined;
            if ((!args || args.format === undefined) && !opts.urn) {
                throw new Error("Missing required property 'format'");
            }
            if ((!args || args.streamInfos === undefined) && !opts.urn) {
                throw new Error("Missing required property 'streamInfos'");
            }
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disableHigherVideoBitrate"] = args ? args.disableHigherVideoBitrate : undefined;
            resourceInputs["disableHigherVideoResolution"] = args ? args.disableHigherVideoResolution : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["streamInfos"] = args ? args.streamInfos : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MpsAdaptiveDynamicStreamingTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MpsAdaptiveDynamicStreamingTemplate resources.
 */
export interface MpsAdaptiveDynamicStreamingTemplateState {
    /**
     * Template description information, length limit: 256 characters.
     */
    comment?: pulumi.Input<string>;
    /**
     * Whether to prohibit video from low bit rate to high bit rate, value range:0: no.1: yes.Default value: 0.
     */
    disableHigherVideoBitrate?: pulumi.Input<number>;
    /**
     * Whether to prohibit the conversion of video resolution to high resolution, value range:0: no.1: yes.Default value: 0.
     */
    disableHigherVideoResolution?: pulumi.Input<number>;
    /**
     * Adaptive transcoding format, value range:HLS, MPEG-DASH.
     */
    format?: pulumi.Input<string>;
    /**
     * Template name, length limit: 64 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * Convert adaptive code stream to output sub-stream parameter information, and output up to 10 sub-streams.Note: The frame
     * rate of each sub-stream must be consistent; if not, the frame rate of the first sub-stream is used as the output frame
     * rate.
     */
    streamInfos?: pulumi.Input<pulumi.Input<inputs.MpsAdaptiveDynamicStreamingTemplateStreamInfo>[]>;
}

/**
 * The set of arguments for constructing a MpsAdaptiveDynamicStreamingTemplate resource.
 */
export interface MpsAdaptiveDynamicStreamingTemplateArgs {
    /**
     * Template description information, length limit: 256 characters.
     */
    comment?: pulumi.Input<string>;
    /**
     * Whether to prohibit video from low bit rate to high bit rate, value range:0: no.1: yes.Default value: 0.
     */
    disableHigherVideoBitrate?: pulumi.Input<number>;
    /**
     * Whether to prohibit the conversion of video resolution to high resolution, value range:0: no.1: yes.Default value: 0.
     */
    disableHigherVideoResolution?: pulumi.Input<number>;
    /**
     * Adaptive transcoding format, value range:HLS, MPEG-DASH.
     */
    format: pulumi.Input<string>;
    /**
     * Template name, length limit: 64 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * Convert adaptive code stream to output sub-stream parameter information, and output up to 10 sub-streams.Note: The frame
     * rate of each sub-stream must be consistent; if not, the frame rate of the first sub-stream is used as the output frame
     * rate.
     */
    streamInfos: pulumi.Input<pulumi.Input<inputs.MpsAdaptiveDynamicStreamingTemplateStreamInfo>[]>;
}
