// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MediaServicesStreamCdnConfig extends pulumi.CustomResource {
    /**
     * Get an existing MediaServicesStreamCdnConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MediaServicesStreamCdnConfigState, opts?: pulumi.CustomResourceOptions): MediaServicesStreamCdnConfig {
        return new MediaServicesStreamCdnConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/mediaServicesStreamCdnConfig:MediaServicesStreamCdnConfig';

    /**
     * Returns true if the given object is an instance of MediaServicesStreamCdnConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MediaServicesStreamCdnConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MediaServicesStreamCdnConfig.__pulumiType;
    }

    public /*out*/ readonly compartmentId!: pulumi.Output<string>;
    public readonly config!: pulumi.Output<outputs.MediaServicesStreamCdnConfigConfig>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly distributionChannelId!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly isEnabled!: pulumi.Output<boolean>;
    public readonly isLockOverride!: pulumi.Output<boolean>;
    public /*out*/ readonly lifecyleDetails!: pulumi.Output<string>;
    public readonly locks!: pulumi.Output<outputs.MediaServicesStreamCdnConfigLock[] | undefined>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MediaServicesStreamCdnConfigTimeouts | undefined>;

    /**
     * Create a MediaServicesStreamCdnConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MediaServicesStreamCdnConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MediaServicesStreamCdnConfigArgs | MediaServicesStreamCdnConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MediaServicesStreamCdnConfigState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["config"] = state ? state.config : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["distributionChannelId"] = state ? state.distributionChannelId : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["isEnabled"] = state ? state.isEnabled : undefined;
            resourceInputs["isLockOverride"] = state ? state.isLockOverride : undefined;
            resourceInputs["lifecyleDetails"] = state ? state.lifecyleDetails : undefined;
            resourceInputs["locks"] = state ? state.locks : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as MediaServicesStreamCdnConfigArgs | undefined;
            if ((!args || args.config === undefined) && !opts.urn) {
                throw new Error("Missing required property 'config'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.distributionChannelId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'distributionChannelId'");
            }
            resourceInputs["config"] = args ? args.config : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["distributionChannelId"] = args ? args.distributionChannelId : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["isEnabled"] = args ? args.isEnabled : undefined;
            resourceInputs["isLockOverride"] = args ? args.isLockOverride : undefined;
            resourceInputs["locks"] = args ? args.locks : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["compartmentId"] = undefined /*out*/;
            resourceInputs["lifecyleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MediaServicesStreamCdnConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MediaServicesStreamCdnConfig resources.
 */
export interface MediaServicesStreamCdnConfigState {
    compartmentId?: pulumi.Input<string>;
    config?: pulumi.Input<inputs.MediaServicesStreamCdnConfigConfig>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    distributionChannelId?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isEnabled?: pulumi.Input<boolean>;
    isLockOverride?: pulumi.Input<boolean>;
    lifecyleDetails?: pulumi.Input<string>;
    locks?: pulumi.Input<pulumi.Input<inputs.MediaServicesStreamCdnConfigLock>[]>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MediaServicesStreamCdnConfigTimeouts>;
}

/**
 * The set of arguments for constructing a MediaServicesStreamCdnConfig resource.
 */
export interface MediaServicesStreamCdnConfigArgs {
    config: pulumi.Input<inputs.MediaServicesStreamCdnConfigConfig>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName: pulumi.Input<string>;
    distributionChannelId: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isEnabled?: pulumi.Input<boolean>;
    isLockOverride?: pulumi.Input<boolean>;
    locks?: pulumi.Input<pulumi.Input<inputs.MediaServicesStreamCdnConfigLock>[]>;
    timeouts?: pulumi.Input<inputs.MediaServicesStreamCdnConfigTimeouts>;
}
