// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CoreVolumeGroupBackup extends pulumi.CustomResource {
    /**
     * Get an existing CoreVolumeGroupBackup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CoreVolumeGroupBackupState, opts?: pulumi.CustomResourceOptions): CoreVolumeGroupBackup {
        return new CoreVolumeGroupBackup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/coreVolumeGroupBackup:CoreVolumeGroupBackup';

    /**
     * Returns true if the given object is an instance of CoreVolumeGroupBackup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CoreVolumeGroupBackup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CoreVolumeGroupBackup.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly expirationTime!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly sizeInGbs!: pulumi.Output<string>;
    public /*out*/ readonly sizeInMbs!: pulumi.Output<string>;
    public readonly sourceDetails!: pulumi.Output<outputs.CoreVolumeGroupBackupSourceDetails | undefined>;
    public /*out*/ readonly sourceType!: pulumi.Output<string>;
    public /*out*/ readonly sourceVolumeGroupBackupId!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeRequestReceived!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CoreVolumeGroupBackupTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;
    public /*out*/ readonly uniqueSizeInGbs!: pulumi.Output<string>;
    public /*out*/ readonly uniqueSizeInMbs!: pulumi.Output<string>;
    public /*out*/ readonly volumeBackupIds!: pulumi.Output<string[]>;
    public readonly volumeGroupId!: pulumi.Output<string>;

    /**
     * Create a CoreVolumeGroupBackup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CoreVolumeGroupBackupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CoreVolumeGroupBackupArgs | CoreVolumeGroupBackupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CoreVolumeGroupBackupState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["expirationTime"] = state ? state.expirationTime : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["sizeInGbs"] = state ? state.sizeInGbs : undefined;
            resourceInputs["sizeInMbs"] = state ? state.sizeInMbs : undefined;
            resourceInputs["sourceDetails"] = state ? state.sourceDetails : undefined;
            resourceInputs["sourceType"] = state ? state.sourceType : undefined;
            resourceInputs["sourceVolumeGroupBackupId"] = state ? state.sourceVolumeGroupBackupId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeRequestReceived"] = state ? state.timeRequestReceived : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["uniqueSizeInGbs"] = state ? state.uniqueSizeInGbs : undefined;
            resourceInputs["uniqueSizeInMbs"] = state ? state.uniqueSizeInMbs : undefined;
            resourceInputs["volumeBackupIds"] = state ? state.volumeBackupIds : undefined;
            resourceInputs["volumeGroupId"] = state ? state.volumeGroupId : undefined;
        } else {
            const args = argsOrState as CoreVolumeGroupBackupArgs | undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["sourceDetails"] = args ? args.sourceDetails : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["volumeGroupId"] = args ? args.volumeGroupId : undefined;
            resourceInputs["expirationTime"] = undefined /*out*/;
            resourceInputs["sizeInGbs"] = undefined /*out*/;
            resourceInputs["sizeInMbs"] = undefined /*out*/;
            resourceInputs["sourceType"] = undefined /*out*/;
            resourceInputs["sourceVolumeGroupBackupId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeRequestReceived"] = undefined /*out*/;
            resourceInputs["uniqueSizeInGbs"] = undefined /*out*/;
            resourceInputs["uniqueSizeInMbs"] = undefined /*out*/;
            resourceInputs["volumeBackupIds"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CoreVolumeGroupBackup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CoreVolumeGroupBackup resources.
 */
export interface CoreVolumeGroupBackupState {
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    expirationTime?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    sizeInGbs?: pulumi.Input<string>;
    sizeInMbs?: pulumi.Input<string>;
    sourceDetails?: pulumi.Input<inputs.CoreVolumeGroupBackupSourceDetails>;
    sourceType?: pulumi.Input<string>;
    sourceVolumeGroupBackupId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeRequestReceived?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreVolumeGroupBackupTimeouts>;
    type?: pulumi.Input<string>;
    uniqueSizeInGbs?: pulumi.Input<string>;
    uniqueSizeInMbs?: pulumi.Input<string>;
    volumeBackupIds?: pulumi.Input<pulumi.Input<string>[]>;
    volumeGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CoreVolumeGroupBackup resource.
 */
export interface CoreVolumeGroupBackupArgs {
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    sourceDetails?: pulumi.Input<inputs.CoreVolumeGroupBackupSourceDetails>;
    timeouts?: pulumi.Input<inputs.CoreVolumeGroupBackupTimeouts>;
    type?: pulumi.Input<string>;
    volumeGroupId?: pulumi.Input<string>;
}
