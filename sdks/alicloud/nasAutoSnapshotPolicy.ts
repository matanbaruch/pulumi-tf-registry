// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NasAutoSnapshotPolicy extends pulumi.CustomResource {
    /**
     * Get an existing NasAutoSnapshotPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NasAutoSnapshotPolicyState, opts?: pulumi.CustomResourceOptions): NasAutoSnapshotPolicy {
        return new NasAutoSnapshotPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/nasAutoSnapshotPolicy:NasAutoSnapshotPolicy';

    /**
     * Returns true if the given object is an instance of NasAutoSnapshotPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NasAutoSnapshotPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NasAutoSnapshotPolicy.__pulumiType;
    }

    public readonly autoSnapshotPolicyName!: pulumi.Output<string | undefined>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly fileSystemType!: pulumi.Output<string>;
    public readonly repeatWeekdays!: pulumi.Output<string[]>;
    public readonly retentionDays!: pulumi.Output<number>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timePoints!: pulumi.Output<string[]>;
    public readonly timeouts!: pulumi.Output<outputs.NasAutoSnapshotPolicyTimeouts | undefined>;

    /**
     * Create a NasAutoSnapshotPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NasAutoSnapshotPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NasAutoSnapshotPolicyArgs | NasAutoSnapshotPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NasAutoSnapshotPolicyState | undefined;
            resourceInputs["autoSnapshotPolicyName"] = state ? state.autoSnapshotPolicyName : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["fileSystemType"] = state ? state.fileSystemType : undefined;
            resourceInputs["repeatWeekdays"] = state ? state.repeatWeekdays : undefined;
            resourceInputs["retentionDays"] = state ? state.retentionDays : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timePoints"] = state ? state.timePoints : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NasAutoSnapshotPolicyArgs | undefined;
            if ((!args || args.repeatWeekdays === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repeatWeekdays'");
            }
            if ((!args || args.timePoints === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timePoints'");
            }
            resourceInputs["autoSnapshotPolicyName"] = args ? args.autoSnapshotPolicyName : undefined;
            resourceInputs["fileSystemType"] = args ? args.fileSystemType : undefined;
            resourceInputs["repeatWeekdays"] = args ? args.repeatWeekdays : undefined;
            resourceInputs["retentionDays"] = args ? args.retentionDays : undefined;
            resourceInputs["timePoints"] = args ? args.timePoints : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NasAutoSnapshotPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NasAutoSnapshotPolicy resources.
 */
export interface NasAutoSnapshotPolicyState {
    autoSnapshotPolicyName?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    fileSystemType?: pulumi.Input<string>;
    repeatWeekdays?: pulumi.Input<pulumi.Input<string>[]>;
    retentionDays?: pulumi.Input<number>;
    status?: pulumi.Input<string>;
    timePoints?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.NasAutoSnapshotPolicyTimeouts>;
}

/**
 * The set of arguments for constructing a NasAutoSnapshotPolicy resource.
 */
export interface NasAutoSnapshotPolicyArgs {
    autoSnapshotPolicyName?: pulumi.Input<string>;
    fileSystemType?: pulumi.Input<string>;
    repeatWeekdays: pulumi.Input<pulumi.Input<string>[]>;
    retentionDays?: pulumi.Input<number>;
    timePoints: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.NasAutoSnapshotPolicyTimeouts>;
}
