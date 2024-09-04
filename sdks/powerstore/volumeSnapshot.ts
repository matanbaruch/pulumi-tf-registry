// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VolumeSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing VolumeSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumeSnapshotState, opts?: pulumi.CustomResourceOptions): VolumeSnapshot {
        return new VolumeSnapshot(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'powerstore:index/volumeSnapshot:VolumeSnapshot';

    /**
     * Returns true if the given object is an instance of VolumeSnapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VolumeSnapshot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VolumeSnapshot.__pulumiType;
    }

    /**
     * Creator Type of the volume snapshot.
     */
    public readonly creatorType!: pulumi.Output<string>;
    /**
     * Description of the volume snapshot.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Expiration Timestamp of the volume snapshot.Only UTC (+Z) format is allowed.
     */
    public readonly expirationTimestamp!: pulumi.Output<string>;
    /**
     * Name of the volume snapshot.The default name of the volume snapshot is the date and time when the snapshot is taken.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Performance Policy id of the volume snapshot. Valid values are default_medium, default_low, default_high.
     */
    public readonly performancePolicyId!: pulumi.Output<string>;
    /**
     * ID of the volume to take snapshot. Conflicts with `volume_name`. Cannot be updated.
     */
    public readonly volumeId!: pulumi.Output<string>;
    /**
     * Name of the volume to take snapshot. Conflicts with `volume_id`. Cannot be updated.
     */
    public readonly volumeName!: pulumi.Output<string | undefined>;

    /**
     * Create a VolumeSnapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VolumeSnapshotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VolumeSnapshotArgs | VolumeSnapshotState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VolumeSnapshotState | undefined;
            resourceInputs["creatorType"] = state ? state.creatorType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["expirationTimestamp"] = state ? state.expirationTimestamp : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["performancePolicyId"] = state ? state.performancePolicyId : undefined;
            resourceInputs["volumeId"] = state ? state.volumeId : undefined;
            resourceInputs["volumeName"] = state ? state.volumeName : undefined;
        } else {
            const args = argsOrState as VolumeSnapshotArgs | undefined;
            resourceInputs["creatorType"] = args ? args.creatorType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["expirationTimestamp"] = args ? args.expirationTimestamp : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["performancePolicyId"] = args ? args.performancePolicyId : undefined;
            resourceInputs["volumeId"] = args ? args.volumeId : undefined;
            resourceInputs["volumeName"] = args ? args.volumeName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VolumeSnapshot.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VolumeSnapshot resources.
 */
export interface VolumeSnapshotState {
    /**
     * Creator Type of the volume snapshot.
     */
    creatorType?: pulumi.Input<string>;
    /**
     * Description of the volume snapshot.
     */
    description?: pulumi.Input<string>;
    /**
     * Expiration Timestamp of the volume snapshot.Only UTC (+Z) format is allowed.
     */
    expirationTimestamp?: pulumi.Input<string>;
    /**
     * Name of the volume snapshot.The default name of the volume snapshot is the date and time when the snapshot is taken.
     */
    name?: pulumi.Input<string>;
    /**
     * Performance Policy id of the volume snapshot. Valid values are default_medium, default_low, default_high.
     */
    performancePolicyId?: pulumi.Input<string>;
    /**
     * ID of the volume to take snapshot. Conflicts with `volume_name`. Cannot be updated.
     */
    volumeId?: pulumi.Input<string>;
    /**
     * Name of the volume to take snapshot. Conflicts with `volume_id`. Cannot be updated.
     */
    volumeName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VolumeSnapshot resource.
 */
export interface VolumeSnapshotArgs {
    /**
     * Creator Type of the volume snapshot.
     */
    creatorType?: pulumi.Input<string>;
    /**
     * Description of the volume snapshot.
     */
    description?: pulumi.Input<string>;
    /**
     * Expiration Timestamp of the volume snapshot.Only UTC (+Z) format is allowed.
     */
    expirationTimestamp?: pulumi.Input<string>;
    /**
     * Name of the volume snapshot.The default name of the volume snapshot is the date and time when the snapshot is taken.
     */
    name?: pulumi.Input<string>;
    /**
     * Performance Policy id of the volume snapshot. Valid values are default_medium, default_low, default_high.
     */
    performancePolicyId?: pulumi.Input<string>;
    /**
     * ID of the volume to take snapshot. Conflicts with `volume_name`. Cannot be updated.
     */
    volumeId?: pulumi.Input<string>;
    /**
     * Name of the volume to take snapshot. Conflicts with `volume_id`. Cannot be updated.
     */
    volumeName?: pulumi.Input<string>;
}
