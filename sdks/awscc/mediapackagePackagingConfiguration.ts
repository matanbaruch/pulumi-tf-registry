// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MediapackagePackagingConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing MediapackagePackagingConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MediapackagePackagingConfigurationState, opts?: pulumi.CustomResourceOptions): MediapackagePackagingConfiguration {
        return new MediapackagePackagingConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/mediapackagePackagingConfiguration:MediapackagePackagingConfiguration';

    /**
     * Returns true if the given object is an instance of MediapackagePackagingConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MediapackagePackagingConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MediapackagePackagingConfiguration.__pulumiType;
    }

    /**
     * The ARN of the PackagingConfiguration.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * A CMAF packaging configuration.
     */
    public readonly cmafPackage!: pulumi.Output<outputs.MediapackagePackagingConfigurationCmafPackage>;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    public readonly dashPackage!: pulumi.Output<outputs.MediapackagePackagingConfigurationDashPackage>;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    public readonly hlsPackage!: pulumi.Output<outputs.MediapackagePackagingConfigurationHlsPackage>;
    /**
     * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
     */
    public readonly mssPackage!: pulumi.Output<outputs.MediapackagePackagingConfigurationMssPackage>;
    /**
     * The ID of the PackagingConfiguration.
     */
    public readonly packagingConfigurationId!: pulumi.Output<string>;
    /**
     * The ID of a PackagingGroup.
     */
    public readonly packagingGroupId!: pulumi.Output<string>;
    /**
     * A collection of tags associated with a resource
     */
    public readonly tags!: pulumi.Output<outputs.MediapackagePackagingConfigurationTag[]>;

    /**
     * Create a MediapackagePackagingConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MediapackagePackagingConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MediapackagePackagingConfigurationArgs | MediapackagePackagingConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MediapackagePackagingConfigurationState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["cmafPackage"] = state ? state.cmafPackage : undefined;
            resourceInputs["dashPackage"] = state ? state.dashPackage : undefined;
            resourceInputs["hlsPackage"] = state ? state.hlsPackage : undefined;
            resourceInputs["mssPackage"] = state ? state.mssPackage : undefined;
            resourceInputs["packagingConfigurationId"] = state ? state.packagingConfigurationId : undefined;
            resourceInputs["packagingGroupId"] = state ? state.packagingGroupId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as MediapackagePackagingConfigurationArgs | undefined;
            if ((!args || args.packagingConfigurationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packagingConfigurationId'");
            }
            if ((!args || args.packagingGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packagingGroupId'");
            }
            resourceInputs["cmafPackage"] = args ? args.cmafPackage : undefined;
            resourceInputs["dashPackage"] = args ? args.dashPackage : undefined;
            resourceInputs["hlsPackage"] = args ? args.hlsPackage : undefined;
            resourceInputs["mssPackage"] = args ? args.mssPackage : undefined;
            resourceInputs["packagingConfigurationId"] = args ? args.packagingConfigurationId : undefined;
            resourceInputs["packagingGroupId"] = args ? args.packagingGroupId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MediapackagePackagingConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MediapackagePackagingConfiguration resources.
 */
export interface MediapackagePackagingConfigurationState {
    /**
     * The ARN of the PackagingConfiguration.
     */
    arn?: pulumi.Input<string>;
    /**
     * A CMAF packaging configuration.
     */
    cmafPackage?: pulumi.Input<inputs.MediapackagePackagingConfigurationCmafPackage>;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    dashPackage?: pulumi.Input<inputs.MediapackagePackagingConfigurationDashPackage>;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    hlsPackage?: pulumi.Input<inputs.MediapackagePackagingConfigurationHlsPackage>;
    /**
     * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
     */
    mssPackage?: pulumi.Input<inputs.MediapackagePackagingConfigurationMssPackage>;
    /**
     * The ID of the PackagingConfiguration.
     */
    packagingConfigurationId?: pulumi.Input<string>;
    /**
     * The ID of a PackagingGroup.
     */
    packagingGroupId?: pulumi.Input<string>;
    /**
     * A collection of tags associated with a resource
     */
    tags?: pulumi.Input<pulumi.Input<inputs.MediapackagePackagingConfigurationTag>[]>;
}

/**
 * The set of arguments for constructing a MediapackagePackagingConfiguration resource.
 */
export interface MediapackagePackagingConfigurationArgs {
    /**
     * A CMAF packaging configuration.
     */
    cmafPackage?: pulumi.Input<inputs.MediapackagePackagingConfigurationCmafPackage>;
    /**
     * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
     */
    dashPackage?: pulumi.Input<inputs.MediapackagePackagingConfigurationDashPackage>;
    /**
     * An HTTP Live Streaming (HLS) packaging configuration.
     */
    hlsPackage?: pulumi.Input<inputs.MediapackagePackagingConfigurationHlsPackage>;
    /**
     * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
     */
    mssPackage?: pulumi.Input<inputs.MediapackagePackagingConfigurationMssPackage>;
    /**
     * The ID of the PackagingConfiguration.
     */
    packagingConfigurationId: pulumi.Input<string>;
    /**
     * The ID of a PackagingGroup.
     */
    packagingGroupId: pulumi.Input<string>;
    /**
     * A collection of tags associated with a resource
     */
    tags?: pulumi.Input<pulumi.Input<inputs.MediapackagePackagingConfigurationTag>[]>;
}
