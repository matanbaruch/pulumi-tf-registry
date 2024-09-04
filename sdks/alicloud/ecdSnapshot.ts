// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EcdSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing EcdSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EcdSnapshotState, opts?: pulumi.CustomResourceOptions): EcdSnapshot {
        return new EcdSnapshot(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/ecdSnapshot:EcdSnapshot';

    /**
     * Returns true if the given object is an instance of EcdSnapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EcdSnapshot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EcdSnapshot.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly desktopId!: pulumi.Output<string>;
    public readonly snapshotName!: pulumi.Output<string>;
    public readonly sourceDiskType!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.EcdSnapshotTimeouts | undefined>;

    /**
     * Create a EcdSnapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EcdSnapshotArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EcdSnapshotArgs | EcdSnapshotState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EcdSnapshotState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["desktopId"] = state ? state.desktopId : undefined;
            resourceInputs["snapshotName"] = state ? state.snapshotName : undefined;
            resourceInputs["sourceDiskType"] = state ? state.sourceDiskType : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as EcdSnapshotArgs | undefined;
            if ((!args || args.desktopId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'desktopId'");
            }
            if ((!args || args.snapshotName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'snapshotName'");
            }
            if ((!args || args.sourceDiskType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceDiskType'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["desktopId"] = args ? args.desktopId : undefined;
            resourceInputs["snapshotName"] = args ? args.snapshotName : undefined;
            resourceInputs["sourceDiskType"] = args ? args.sourceDiskType : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EcdSnapshot.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EcdSnapshot resources.
 */
export interface EcdSnapshotState {
    description?: pulumi.Input<string>;
    desktopId?: pulumi.Input<string>;
    snapshotName?: pulumi.Input<string>;
    sourceDiskType?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EcdSnapshotTimeouts>;
}

/**
 * The set of arguments for constructing a EcdSnapshot resource.
 */
export interface EcdSnapshotArgs {
    description?: pulumi.Input<string>;
    desktopId: pulumi.Input<string>;
    snapshotName: pulumi.Input<string>;
    sourceDiskType: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EcdSnapshotTimeouts>;
}
