// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BackupSchedule extends pulumi.CustomResource {
    /**
     * Get an existing BackupSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupScheduleState, opts?: pulumi.CustomResourceOptions): BackupSchedule {
        return new BackupSchedule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'couchbase-capella:index/backupSchedule:BackupSchedule';

    /**
     * Returns true if the given object is an instance of BackupSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupSchedule.__pulumiType;
    }

    public readonly bucketId!: pulumi.Output<string>;
    public readonly clusterId!: pulumi.Output<string>;
    public readonly organizationId!: pulumi.Output<string>;
    public readonly projectId!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;
    public readonly weeklySchedule!: pulumi.Output<outputs.BackupScheduleWeeklySchedule>;

    /**
     * Create a BackupSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupScheduleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackupScheduleArgs | BackupScheduleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackupScheduleState | undefined;
            resourceInputs["bucketId"] = state ? state.bucketId : undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["weeklySchedule"] = state ? state.weeklySchedule : undefined;
        } else {
            const args = argsOrState as BackupScheduleArgs | undefined;
            if ((!args || args.bucketId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucketId'");
            }
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.organizationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationId'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            if ((!args || args.weeklySchedule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'weeklySchedule'");
            }
            resourceInputs["bucketId"] = args ? args.bucketId : undefined;
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["weeklySchedule"] = args ? args.weeklySchedule : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BackupSchedule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BackupSchedule resources.
 */
export interface BackupScheduleState {
    bucketId?: pulumi.Input<string>;
    clusterId?: pulumi.Input<string>;
    organizationId?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    weeklySchedule?: pulumi.Input<inputs.BackupScheduleWeeklySchedule>;
}

/**
 * The set of arguments for constructing a BackupSchedule resource.
 */
export interface BackupScheduleArgs {
    bucketId: pulumi.Input<string>;
    clusterId: pulumi.Input<string>;
    organizationId: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
    type: pulumi.Input<string>;
    weeklySchedule: pulumi.Input<inputs.BackupScheduleWeeklySchedule>;
}
