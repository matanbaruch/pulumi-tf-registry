// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SnapshotExportTask extends pulumi.CustomResource {
    /**
     * Get an existing SnapshotExportTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnapshotExportTaskState, opts?: pulumi.CustomResourceOptions): SnapshotExportTask {
        return new SnapshotExportTask(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'outscale:index/snapshotExportTask:SnapshotExportTask';

    /**
     * Returns true if the given object is an instance of SnapshotExportTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SnapshotExportTask {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SnapshotExportTask.__pulumiType;
    }

    public /*out*/ readonly comment!: pulumi.Output<string>;
    public readonly osuExports!: pulumi.Output<outputs.SnapshotExportTaskOsuExport[]>;
    public /*out*/ readonly progress!: pulumi.Output<number>;
    public /*out*/ readonly requestId!: pulumi.Output<string>;
    public readonly snapshotId!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.SnapshotExportTaskTag[] | undefined>;
    public /*out*/ readonly taskId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SnapshotExportTaskTimeouts | undefined>;

    /**
     * Create a SnapshotExportTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotExportTaskArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnapshotExportTaskArgs | SnapshotExportTaskState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SnapshotExportTaskState | undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["osuExports"] = state ? state.osuExports : undefined;
            resourceInputs["progress"] = state ? state.progress : undefined;
            resourceInputs["requestId"] = state ? state.requestId : undefined;
            resourceInputs["snapshotId"] = state ? state.snapshotId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["taskId"] = state ? state.taskId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SnapshotExportTaskArgs | undefined;
            if ((!args || args.osuExports === undefined) && !opts.urn) {
                throw new Error("Missing required property 'osuExports'");
            }
            if ((!args || args.snapshotId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'snapshotId'");
            }
            resourceInputs["osuExports"] = args ? args.osuExports : undefined;
            resourceInputs["snapshotId"] = args ? args.snapshotId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["comment"] = undefined /*out*/;
            resourceInputs["progress"] = undefined /*out*/;
            resourceInputs["requestId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["taskId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SnapshotExportTask.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SnapshotExportTask resources.
 */
export interface SnapshotExportTaskState {
    comment?: pulumi.Input<string>;
    osuExports?: pulumi.Input<pulumi.Input<inputs.SnapshotExportTaskOsuExport>[]>;
    progress?: pulumi.Input<number>;
    requestId?: pulumi.Input<string>;
    snapshotId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.SnapshotExportTaskTag>[]>;
    taskId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SnapshotExportTaskTimeouts>;
}

/**
 * The set of arguments for constructing a SnapshotExportTask resource.
 */
export interface SnapshotExportTaskArgs {
    osuExports: pulumi.Input<pulumi.Input<inputs.SnapshotExportTaskOsuExport>[]>;
    snapshotId: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.SnapshotExportTaskTag>[]>;
    timeouts?: pulumi.Input<inputs.SnapshotExportTaskTimeouts>;
}
