// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CbsSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing CbsSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CbsSnapshotState, opts?: pulumi.CustomResourceOptions): CbsSnapshot {
        return new CbsSnapshot(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cbsSnapshot:CbsSnapshot';

    /**
     * Returns true if the given object is an instance of CbsSnapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CbsSnapshot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CbsSnapshot.__pulumiType;
    }

    /**
     * Creation time of snapshot.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Types of CBS which this snapshot created from.
     */
    public /*out*/ readonly diskType!: pulumi.Output<string>;
    /**
     * Snapshot creation progress percentage. If the snapshot has created successfully, the constant value is 100.
     */
    public /*out*/ readonly percent!: pulumi.Output<number>;
    /**
     * Name of the snapshot.
     */
    public readonly snapshotName!: pulumi.Output<string>;
    /**
     * Status of the snapshot.
     */
    public /*out*/ readonly snapshotStatus!: pulumi.Output<string>;
    /**
     * ID of the the CBS which this snapshot created from.
     */
    public readonly storageId!: pulumi.Output<string>;
    /**
     * Volume of storage which this snapshot created from.
     */
    public /*out*/ readonly storageSize!: pulumi.Output<number>;
    /**
     * The available tags within this CBS Snapshot.
     *
     * @deprecated Deprecated
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a CbsSnapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CbsSnapshotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CbsSnapshotArgs | CbsSnapshotState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CbsSnapshotState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["diskType"] = state ? state.diskType : undefined;
            resourceInputs["percent"] = state ? state.percent : undefined;
            resourceInputs["snapshotName"] = state ? state.snapshotName : undefined;
            resourceInputs["snapshotStatus"] = state ? state.snapshotStatus : undefined;
            resourceInputs["storageId"] = state ? state.storageId : undefined;
            resourceInputs["storageSize"] = state ? state.storageSize : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as CbsSnapshotArgs | undefined;
            if ((!args || args.snapshotName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'snapshotName'");
            }
            if ((!args || args.storageId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageId'");
            }
            resourceInputs["snapshotName"] = args ? args.snapshotName : undefined;
            resourceInputs["storageId"] = args ? args.storageId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["diskType"] = undefined /*out*/;
            resourceInputs["percent"] = undefined /*out*/;
            resourceInputs["snapshotStatus"] = undefined /*out*/;
            resourceInputs["storageSize"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CbsSnapshot.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CbsSnapshot resources.
 */
export interface CbsSnapshotState {
    /**
     * Creation time of snapshot.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Types of CBS which this snapshot created from.
     */
    diskType?: pulumi.Input<string>;
    /**
     * Snapshot creation progress percentage. If the snapshot has created successfully, the constant value is 100.
     */
    percent?: pulumi.Input<number>;
    /**
     * Name of the snapshot.
     */
    snapshotName?: pulumi.Input<string>;
    /**
     * Status of the snapshot.
     */
    snapshotStatus?: pulumi.Input<string>;
    /**
     * ID of the the CBS which this snapshot created from.
     */
    storageId?: pulumi.Input<string>;
    /**
     * Volume of storage which this snapshot created from.
     */
    storageSize?: pulumi.Input<number>;
    /**
     * The available tags within this CBS Snapshot.
     *
     * @deprecated Deprecated
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a CbsSnapshot resource.
 */
export interface CbsSnapshotArgs {
    /**
     * Name of the snapshot.
     */
    snapshotName: pulumi.Input<string>;
    /**
     * ID of the the CBS which this snapshot created from.
     */
    storageId: pulumi.Input<string>;
    /**
     * The available tags within this CBS Snapshot.
     *
     * @deprecated Deprecated
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
