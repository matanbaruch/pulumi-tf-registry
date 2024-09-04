// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MediaServicesAccountFilter extends pulumi.CustomResource {
    /**
     * Get an existing MediaServicesAccountFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MediaServicesAccountFilterState, opts?: pulumi.CustomResourceOptions): MediaServicesAccountFilter {
        return new MediaServicesAccountFilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/mediaServicesAccountFilter:MediaServicesAccountFilter';

    /**
     * Returns true if the given object is an instance of MediaServicesAccountFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MediaServicesAccountFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MediaServicesAccountFilter.__pulumiType;
    }

    public readonly firstQualityBitrate!: pulumi.Output<number | undefined>;
    public readonly mediaServicesAccountName!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly presentationTimeRange!: pulumi.Output<outputs.MediaServicesAccountFilterPresentationTimeRange | undefined>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MediaServicesAccountFilterTimeouts | undefined>;
    public readonly trackSelections!: pulumi.Output<outputs.MediaServicesAccountFilterTrackSelection[] | undefined>;

    /**
     * Create a MediaServicesAccountFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MediaServicesAccountFilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MediaServicesAccountFilterArgs | MediaServicesAccountFilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MediaServicesAccountFilterState | undefined;
            resourceInputs["firstQualityBitrate"] = state ? state.firstQualityBitrate : undefined;
            resourceInputs["mediaServicesAccountName"] = state ? state.mediaServicesAccountName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["presentationTimeRange"] = state ? state.presentationTimeRange : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["trackSelections"] = state ? state.trackSelections : undefined;
        } else {
            const args = argsOrState as MediaServicesAccountFilterArgs | undefined;
            if ((!args || args.mediaServicesAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mediaServicesAccountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["firstQualityBitrate"] = args ? args.firstQualityBitrate : undefined;
            resourceInputs["mediaServicesAccountName"] = args ? args.mediaServicesAccountName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["presentationTimeRange"] = args ? args.presentationTimeRange : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["trackSelections"] = args ? args.trackSelections : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MediaServicesAccountFilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MediaServicesAccountFilter resources.
 */
export interface MediaServicesAccountFilterState {
    firstQualityBitrate?: pulumi.Input<number>;
    mediaServicesAccountName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    presentationTimeRange?: pulumi.Input<inputs.MediaServicesAccountFilterPresentationTimeRange>;
    resourceGroupName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MediaServicesAccountFilterTimeouts>;
    trackSelections?: pulumi.Input<pulumi.Input<inputs.MediaServicesAccountFilterTrackSelection>[]>;
}

/**
 * The set of arguments for constructing a MediaServicesAccountFilter resource.
 */
export interface MediaServicesAccountFilterArgs {
    firstQualityBitrate?: pulumi.Input<number>;
    mediaServicesAccountName: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    presentationTimeRange?: pulumi.Input<inputs.MediaServicesAccountFilterPresentationTimeRange>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MediaServicesAccountFilterTimeouts>;
    trackSelections?: pulumi.Input<pulumi.Input<inputs.MediaServicesAccountFilterTrackSelection>[]>;
}
