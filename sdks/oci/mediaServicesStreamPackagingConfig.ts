// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MediaServicesStreamPackagingConfig extends pulumi.CustomResource {
    /**
     * Get an existing MediaServicesStreamPackagingConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MediaServicesStreamPackagingConfigState, opts?: pulumi.CustomResourceOptions): MediaServicesStreamPackagingConfig {
        return new MediaServicesStreamPackagingConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/mediaServicesStreamPackagingConfig:MediaServicesStreamPackagingConfig';

    /**
     * Returns true if the given object is an instance of MediaServicesStreamPackagingConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MediaServicesStreamPackagingConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MediaServicesStreamPackagingConfig.__pulumiType;
    }

    public /*out*/ readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly distributionChannelId!: pulumi.Output<string>;
    public readonly encryption!: pulumi.Output<outputs.MediaServicesStreamPackagingConfigEncryption | undefined>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly isLockOverride!: pulumi.Output<boolean>;
    public readonly locks!: pulumi.Output<outputs.MediaServicesStreamPackagingConfigLock[] | undefined>;
    public readonly segmentTimeInSeconds!: pulumi.Output<number>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly streamPackagingFormat!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MediaServicesStreamPackagingConfigTimeouts | undefined>;

    /**
     * Create a MediaServicesStreamPackagingConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MediaServicesStreamPackagingConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MediaServicesStreamPackagingConfigArgs | MediaServicesStreamPackagingConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MediaServicesStreamPackagingConfigState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["distributionChannelId"] = state ? state.distributionChannelId : undefined;
            resourceInputs["encryption"] = state ? state.encryption : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["isLockOverride"] = state ? state.isLockOverride : undefined;
            resourceInputs["locks"] = state ? state.locks : undefined;
            resourceInputs["segmentTimeInSeconds"] = state ? state.segmentTimeInSeconds : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["streamPackagingFormat"] = state ? state.streamPackagingFormat : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as MediaServicesStreamPackagingConfigArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.distributionChannelId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'distributionChannelId'");
            }
            if ((!args || args.segmentTimeInSeconds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'segmentTimeInSeconds'");
            }
            if ((!args || args.streamPackagingFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'streamPackagingFormat'");
            }
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["distributionChannelId"] = args ? args.distributionChannelId : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["isLockOverride"] = args ? args.isLockOverride : undefined;
            resourceInputs["locks"] = args ? args.locks : undefined;
            resourceInputs["segmentTimeInSeconds"] = args ? args.segmentTimeInSeconds : undefined;
            resourceInputs["streamPackagingFormat"] = args ? args.streamPackagingFormat : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["compartmentId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MediaServicesStreamPackagingConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MediaServicesStreamPackagingConfig resources.
 */
export interface MediaServicesStreamPackagingConfigState {
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    distributionChannelId?: pulumi.Input<string>;
    encryption?: pulumi.Input<inputs.MediaServicesStreamPackagingConfigEncryption>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isLockOverride?: pulumi.Input<boolean>;
    locks?: pulumi.Input<pulumi.Input<inputs.MediaServicesStreamPackagingConfigLock>[]>;
    segmentTimeInSeconds?: pulumi.Input<number>;
    state?: pulumi.Input<string>;
    streamPackagingFormat?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MediaServicesStreamPackagingConfigTimeouts>;
}

/**
 * The set of arguments for constructing a MediaServicesStreamPackagingConfig resource.
 */
export interface MediaServicesStreamPackagingConfigArgs {
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName: pulumi.Input<string>;
    distributionChannelId: pulumi.Input<string>;
    encryption?: pulumi.Input<inputs.MediaServicesStreamPackagingConfigEncryption>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isLockOverride?: pulumi.Input<boolean>;
    locks?: pulumi.Input<pulumi.Input<inputs.MediaServicesStreamPackagingConfigLock>[]>;
    segmentTimeInSeconds: pulumi.Input<number>;
    streamPackagingFormat: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MediaServicesStreamPackagingConfigTimeouts>;
}
