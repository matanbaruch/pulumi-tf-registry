// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LighthouseSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing LighthouseSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LighthouseSnapshotState, opts?: pulumi.CustomResourceOptions): LighthouseSnapshot {
        return new LighthouseSnapshot(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/lighthouseSnapshot:LighthouseSnapshot';

    /**
     * Returns true if the given object is an instance of LighthouseSnapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LighthouseSnapshot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LighthouseSnapshot.__pulumiType;
    }

    /**
     * ID of the instance for which to create a snapshot.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * Snapshot name, which can contain up to 60 characters.
     */
    public readonly snapshotName!: pulumi.Output<string | undefined>;

    /**
     * Create a LighthouseSnapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LighthouseSnapshotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LighthouseSnapshotArgs | LighthouseSnapshotState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LighthouseSnapshotState | undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["snapshotName"] = state ? state.snapshotName : undefined;
        } else {
            const args = argsOrState as LighthouseSnapshotArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["snapshotName"] = args ? args.snapshotName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LighthouseSnapshot.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LighthouseSnapshot resources.
 */
export interface LighthouseSnapshotState {
    /**
     * ID of the instance for which to create a snapshot.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Snapshot name, which can contain up to 60 characters.
     */
    snapshotName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LighthouseSnapshot resource.
 */
export interface LighthouseSnapshotArgs {
    /**
     * ID of the instance for which to create a snapshot.
     */
    instanceId: pulumi.Input<string>;
    /**
     * Snapshot name, which can contain up to 60 characters.
     */
    snapshotName?: pulumi.Input<string>;
}
