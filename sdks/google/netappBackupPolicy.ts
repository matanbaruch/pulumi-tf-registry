// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetappBackupPolicy extends pulumi.CustomResource {
    /**
     * Get an existing NetappBackupPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetappBackupPolicyState, opts?: pulumi.CustomResourceOptions): NetappBackupPolicy {
        return new NetappBackupPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/netappBackupPolicy:NetappBackupPolicy';

    /**
     * Returns true if the given object is an instance of NetappBackupPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetappBackupPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetappBackupPolicy.__pulumiType;
    }

    /**
     * The total number of volumes assigned by this backup policy.
     */
    public /*out*/ readonly assignedVolumeCount!: pulumi.Output<number>;
    /**
     * Create time of the backup policy. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Number of daily backups to keep. Note that the minimum daily backup limit is 2.
     */
    public readonly dailyBackupLimit!: pulumi.Output<number>;
    /**
     * An optional description of this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * If enabled, make backups automatically according to the schedules. This will be applied to all volumes that have this
     * policy attached and enforced on volume level.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. **Note**: This
     * field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
     * 'effective_labels' for all of the labels present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Name of the region for the policy to apply to.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
     */
    public readonly monthlyBackupLimit!: pulumi.Output<number>;
    /**
     * The name of the backup policy. Needs to be unique per location.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The state of the backup policy.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.NetappBackupPolicyTimeouts | undefined>;
    /**
     * Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
     */
    public readonly weeklyBackupLimit!: pulumi.Output<number>;

    /**
     * Create a NetappBackupPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetappBackupPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetappBackupPolicyArgs | NetappBackupPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetappBackupPolicyState | undefined;
            resourceInputs["assignedVolumeCount"] = state ? state.assignedVolumeCount : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["dailyBackupLimit"] = state ? state.dailyBackupLimit : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["monthlyBackupLimit"] = state ? state.monthlyBackupLimit : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["weeklyBackupLimit"] = state ? state.weeklyBackupLimit : undefined;
        } else {
            const args = argsOrState as NetappBackupPolicyArgs | undefined;
            if ((!args || args.dailyBackupLimit === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dailyBackupLimit'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.monthlyBackupLimit === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monthlyBackupLimit'");
            }
            if ((!args || args.weeklyBackupLimit === undefined) && !opts.urn) {
                throw new Error("Missing required property 'weeklyBackupLimit'");
            }
            resourceInputs["dailyBackupLimit"] = args ? args.dailyBackupLimit : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["monthlyBackupLimit"] = args ? args.monthlyBackupLimit : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["weeklyBackupLimit"] = args ? args.weeklyBackupLimit : undefined;
            resourceInputs["assignedVolumeCount"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetappBackupPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetappBackupPolicy resources.
 */
export interface NetappBackupPolicyState {
    /**
     * The total number of volumes assigned by this backup policy.
     */
    assignedVolumeCount?: pulumi.Input<number>;
    /**
     * Create time of the backup policy. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
     */
    createTime?: pulumi.Input<string>;
    /**
     * Number of daily backups to keep. Note that the minimum daily backup limit is 2.
     */
    dailyBackupLimit?: pulumi.Input<number>;
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * If enabled, make backups automatically according to the schedules. This will be applied to all volumes that have this
     * policy attached and enforced on volume level.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. **Note**: This
     * field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
     * 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the region for the policy to apply to.
     */
    location?: pulumi.Input<string>;
    /**
     * Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
     */
    monthlyBackupLimit?: pulumi.Input<number>;
    /**
     * The name of the backup policy. Needs to be unique per location.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The state of the backup policy.
     */
    state?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NetappBackupPolicyTimeouts>;
    /**
     * Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
     */
    weeklyBackupLimit?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a NetappBackupPolicy resource.
 */
export interface NetappBackupPolicyArgs {
    /**
     * Number of daily backups to keep. Note that the minimum daily backup limit is 2.
     */
    dailyBackupLimit: pulumi.Input<number>;
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * If enabled, make backups automatically according to the schedules. This will be applied to all volumes that have this
     * policy attached and enforced on volume level.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. **Note**: This
     * field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field
     * 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the region for the policy to apply to.
     */
    location: pulumi.Input<string>;
    /**
     * Number of monthly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
     */
    monthlyBackupLimit: pulumi.Input<number>;
    /**
     * The name of the backup policy. Needs to be unique per location.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetappBackupPolicyTimeouts>;
    /**
     * Number of weekly backups to keep. Note that the sum of daily, weekly and monthly backups should be greater than 1.
     */
    weeklyBackupLimit: pulumi.Input<number>;
}
