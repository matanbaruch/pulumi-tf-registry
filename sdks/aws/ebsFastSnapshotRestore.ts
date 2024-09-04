// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EbsFastSnapshotRestore extends pulumi.CustomResource {
    /**
     * Get an existing EbsFastSnapshotRestore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EbsFastSnapshotRestoreState, opts?: pulumi.CustomResourceOptions): EbsFastSnapshotRestore {
        return new EbsFastSnapshotRestore(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/ebsFastSnapshotRestore:EbsFastSnapshotRestore';

    /**
     * Returns true if the given object is an instance of EbsFastSnapshotRestore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EbsFastSnapshotRestore {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EbsFastSnapshotRestore.__pulumiType;
    }

    public readonly availabilityZone!: pulumi.Output<string>;
    public readonly snapshotId!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.EbsFastSnapshotRestoreTimeouts | undefined>;

    /**
     * Create a EbsFastSnapshotRestore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EbsFastSnapshotRestoreArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EbsFastSnapshotRestoreArgs | EbsFastSnapshotRestoreState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EbsFastSnapshotRestoreState | undefined;
            resourceInputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            resourceInputs["snapshotId"] = state ? state.snapshotId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as EbsFastSnapshotRestoreArgs | undefined;
            if ((!args || args.availabilityZone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityZone'");
            }
            if ((!args || args.snapshotId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'snapshotId'");
            }
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["snapshotId"] = args ? args.snapshotId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EbsFastSnapshotRestore.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EbsFastSnapshotRestore resources.
 */
export interface EbsFastSnapshotRestoreState {
    availabilityZone?: pulumi.Input<string>;
    snapshotId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EbsFastSnapshotRestoreTimeouts>;
}

/**
 * The set of arguments for constructing a EbsFastSnapshotRestore resource.
 */
export interface EbsFastSnapshotRestoreArgs {
    availabilityZone: pulumi.Input<string>;
    snapshotId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EbsFastSnapshotRestoreTimeouts>;
}
