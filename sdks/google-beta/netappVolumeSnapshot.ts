// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetappVolumeSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing NetappVolumeSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetappVolumeSnapshotState, opts?: pulumi.CustomResourceOptions): NetappVolumeSnapshot {
        return new NetappVolumeSnapshot(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/netappVolumeSnapshot:NetappVolumeSnapshot';

    /**
     * Returns true if the given object is an instance of NetappVolumeSnapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetappVolumeSnapshot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetappVolumeSnapshot.__pulumiType;
    }

    /**
     * Description for the snapshot.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. **Note**: This
     * field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
     * 'effective_labels' for all of the labels present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Name of the snapshot location. Snapshots are child resources of volumes and live in the same location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the snapshot.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.NetappVolumeSnapshotTimeouts | undefined>;
    /**
     * Storage used to store blocks unique to this snapshot.
     */
    public /*out*/ readonly usedBytes!: pulumi.Output<number>;
    /**
     * The name of the volume to create the snapshot in.
     */
    public readonly volumeName!: pulumi.Output<string>;

    /**
     * Create a NetappVolumeSnapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetappVolumeSnapshotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetappVolumeSnapshotArgs | NetappVolumeSnapshotState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetappVolumeSnapshotState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["usedBytes"] = state ? state.usedBytes : undefined;
            resourceInputs["volumeName"] = state ? state.volumeName : undefined;
        } else {
            const args = argsOrState as NetappVolumeSnapshotArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.volumeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["volumeName"] = args ? args.volumeName : undefined;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["usedBytes"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetappVolumeSnapshot.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetappVolumeSnapshot resources.
 */
export interface NetappVolumeSnapshotState {
    /**
     * Description for the snapshot.
     */
    description?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. **Note**: This
     * field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
     * 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the snapshot location. Snapshots are child resources of volumes and live in the same location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the snapshot.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NetappVolumeSnapshotTimeouts>;
    /**
     * Storage used to store blocks unique to this snapshot.
     */
    usedBytes?: pulumi.Input<number>;
    /**
     * The name of the volume to create the snapshot in.
     */
    volumeName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetappVolumeSnapshot resource.
 */
export interface NetappVolumeSnapshotArgs {
    /**
     * Description for the snapshot.
     */
    description?: pulumi.Input<string>;
    /**
     * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. **Note**: This
     * field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
     * 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the snapshot location. Snapshots are child resources of volumes and live in the same location.
     */
    location: pulumi.Input<string>;
    /**
     * The name of the snapshot.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetappVolumeSnapshotTimeouts>;
    /**
     * The name of the volume to create the snapshot in.
     */
    volumeName: pulumi.Input<string>;
}
