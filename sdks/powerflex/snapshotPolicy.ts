// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SnapshotPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SnapshotPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnapshotPolicyState, opts?: pulumi.CustomResourceOptions): SnapshotPolicy {
        return new SnapshotPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'powerflex:index/snapshotPolicy:SnapshotPolicy';

    /**
     * Returns true if the given object is an instance of SnapshotPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SnapshotPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SnapshotPolicy.__pulumiType;
    }

    /**
     * The interval in minutes between two snapshots in the policy.
     */
    public readonly autoSnapshotCreationCadenceInMin!: pulumi.Output<number>;
    /**
     * Name of the Snapshot Policy
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List which represents the number of snapshots per retention level.
     */
    public readonly numOfRetainedSnapshotsPerLevels!: pulumi.Output<number[]>;
    /**
     * Indicates that the snapshot policy should paused or not. Default value is `false`.
     */
    public readonly paused!: pulumi.Output<boolean>;
    /**
     * When removing the source volume from the policy, user should choose how to handle the snapshots created by the policy.
     * Valid values are 'Remove' and 'Detach'. Default value is `Detach`.
     */
    public readonly removeMode!: pulumi.Output<string>;
    /**
     * The auto snapshots will be created as secure. They cannot be edited or removed prior to their policy expiration time.
     * Default value is `false`. Cannot be updated.
     */
    public readonly secureSnapshots!: pulumi.Output<boolean>;
    /**
     * The Access mode of auto snapshot. Valid values are 'ReadOnly' and 'ReadWrite'. Default value is `ReadOnly` Cannot be
     * updated.
     */
    public readonly snapshotAccessMode!: pulumi.Output<string>;
    /**
     * List which represents the volume ids which is to be assigned to the snapshot policy.
     */
    public readonly volumeIds!: pulumi.Output<string[] | undefined>;

    /**
     * Create a SnapshotPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnapshotPolicyArgs | SnapshotPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SnapshotPolicyState | undefined;
            resourceInputs["autoSnapshotCreationCadenceInMin"] = state ? state.autoSnapshotCreationCadenceInMin : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["numOfRetainedSnapshotsPerLevels"] = state ? state.numOfRetainedSnapshotsPerLevels : undefined;
            resourceInputs["paused"] = state ? state.paused : undefined;
            resourceInputs["removeMode"] = state ? state.removeMode : undefined;
            resourceInputs["secureSnapshots"] = state ? state.secureSnapshots : undefined;
            resourceInputs["snapshotAccessMode"] = state ? state.snapshotAccessMode : undefined;
            resourceInputs["volumeIds"] = state ? state.volumeIds : undefined;
        } else {
            const args = argsOrState as SnapshotPolicyArgs | undefined;
            if ((!args || args.autoSnapshotCreationCadenceInMin === undefined) && !opts.urn) {
                throw new Error("Missing required property 'autoSnapshotCreationCadenceInMin'");
            }
            if ((!args || args.numOfRetainedSnapshotsPerLevels === undefined) && !opts.urn) {
                throw new Error("Missing required property 'numOfRetainedSnapshotsPerLevels'");
            }
            resourceInputs["autoSnapshotCreationCadenceInMin"] = args ? args.autoSnapshotCreationCadenceInMin : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["numOfRetainedSnapshotsPerLevels"] = args ? args.numOfRetainedSnapshotsPerLevels : undefined;
            resourceInputs["paused"] = args ? args.paused : undefined;
            resourceInputs["removeMode"] = args ? args.removeMode : undefined;
            resourceInputs["secureSnapshots"] = args ? args.secureSnapshots : undefined;
            resourceInputs["snapshotAccessMode"] = args ? args.snapshotAccessMode : undefined;
            resourceInputs["volumeIds"] = args ? args.volumeIds : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SnapshotPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SnapshotPolicy resources.
 */
export interface SnapshotPolicyState {
    /**
     * The interval in minutes between two snapshots in the policy.
     */
    autoSnapshotCreationCadenceInMin?: pulumi.Input<number>;
    /**
     * Name of the Snapshot Policy
     */
    name?: pulumi.Input<string>;
    /**
     * List which represents the number of snapshots per retention level.
     */
    numOfRetainedSnapshotsPerLevels?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Indicates that the snapshot policy should paused or not. Default value is `false`.
     */
    paused?: pulumi.Input<boolean>;
    /**
     * When removing the source volume from the policy, user should choose how to handle the snapshots created by the policy.
     * Valid values are 'Remove' and 'Detach'. Default value is `Detach`.
     */
    removeMode?: pulumi.Input<string>;
    /**
     * The auto snapshots will be created as secure. They cannot be edited or removed prior to their policy expiration time.
     * Default value is `false`. Cannot be updated.
     */
    secureSnapshots?: pulumi.Input<boolean>;
    /**
     * The Access mode of auto snapshot. Valid values are 'ReadOnly' and 'ReadWrite'. Default value is `ReadOnly` Cannot be
     * updated.
     */
    snapshotAccessMode?: pulumi.Input<string>;
    /**
     * List which represents the volume ids which is to be assigned to the snapshot policy.
     */
    volumeIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SnapshotPolicy resource.
 */
export interface SnapshotPolicyArgs {
    /**
     * The interval in minutes between two snapshots in the policy.
     */
    autoSnapshotCreationCadenceInMin: pulumi.Input<number>;
    /**
     * Name of the Snapshot Policy
     */
    name?: pulumi.Input<string>;
    /**
     * List which represents the number of snapshots per retention level.
     */
    numOfRetainedSnapshotsPerLevels: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Indicates that the snapshot policy should paused or not. Default value is `false`.
     */
    paused?: pulumi.Input<boolean>;
    /**
     * When removing the source volume from the policy, user should choose how to handle the snapshots created by the policy.
     * Valid values are 'Remove' and 'Detach'. Default value is `Detach`.
     */
    removeMode?: pulumi.Input<string>;
    /**
     * The auto snapshots will be created as secure. They cannot be edited or removed prior to their policy expiration time.
     * Default value is `false`. Cannot be updated.
     */
    secureSnapshots?: pulumi.Input<boolean>;
    /**
     * The Access mode of auto snapshot. Valid values are 'ReadOnly' and 'ReadWrite'. Default value is `ReadOnly` Cannot be
     * updated.
     */
    snapshotAccessMode?: pulumi.Input<string>;
    /**
     * List which represents the volume ids which is to be assigned to the snapshot policy.
     */
    volumeIds?: pulumi.Input<pulumi.Input<string>[]>;
}
