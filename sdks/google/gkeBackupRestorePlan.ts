// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GkeBackupRestorePlan extends pulumi.CustomResource {
    /**
     * Get an existing GkeBackupRestorePlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GkeBackupRestorePlanState, opts?: pulumi.CustomResourceOptions): GkeBackupRestorePlan {
        return new GkeBackupRestorePlan(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/gkeBackupRestorePlan:GkeBackupRestorePlan';

    /**
     * Returns true if the given object is an instance of GkeBackupRestorePlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GkeBackupRestorePlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GkeBackupRestorePlan.__pulumiType;
    }

    /**
     * A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan.
     */
    public readonly backupPlan!: pulumi.Output<string>;
    /**
     * The source cluster from which Restores will be created via this RestorePlan.
     */
    public readonly cluster!: pulumi.Output<string>;
    /**
     * User specified descriptive string for this RestorePlan.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Description: A set of custom labels supplied by the user. A list of key->value pairs. Example: { "name": "wrench",
     * "mass": "1.3kg", "count": "3" }. **Note**: This field is non-authoritative, and will only manage the labels present in
     * your configuration. Please refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The region of the Restore Plan.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The full name of the BackupPlan Resource.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Defines the configuration of Restores created via this RestorePlan.
     */
    public readonly restoreConfig!: pulumi.Output<outputs.GkeBackupRestorePlanRestoreConfig>;
    /**
     * The State of the RestorePlan.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Detailed description of why RestorePlan is in its current state.
     */
    public /*out*/ readonly stateReason!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.GkeBackupRestorePlanTimeouts | undefined>;
    /**
     * Server generated, unique identifier of UUID format.
     */
    public /*out*/ readonly uid!: pulumi.Output<string>;

    /**
     * Create a GkeBackupRestorePlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GkeBackupRestorePlanArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GkeBackupRestorePlanArgs | GkeBackupRestorePlanState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GkeBackupRestorePlanState | undefined;
            resourceInputs["backupPlan"] = state ? state.backupPlan : undefined;
            resourceInputs["cluster"] = state ? state.cluster : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["restoreConfig"] = state ? state.restoreConfig : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["stateReason"] = state ? state.stateReason : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
        } else {
            const args = argsOrState as GkeBackupRestorePlanArgs | undefined;
            if ((!args || args.backupPlan === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backupPlan'");
            }
            if ((!args || args.cluster === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cluster'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.restoreConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restoreConfig'");
            }
            resourceInputs["backupPlan"] = args ? args.backupPlan : undefined;
            resourceInputs["cluster"] = args ? args.cluster : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["restoreConfig"] = args ? args.restoreConfig : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["stateReason"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["uid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GkeBackupRestorePlan.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GkeBackupRestorePlan resources.
 */
export interface GkeBackupRestorePlanState {
    /**
     * A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan.
     */
    backupPlan?: pulumi.Input<string>;
    /**
     * The source cluster from which Restores will be created via this RestorePlan.
     */
    cluster?: pulumi.Input<string>;
    /**
     * User specified descriptive string for this RestorePlan.
     */
    description?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Description: A set of custom labels supplied by the user. A list of key->value pairs. Example: { "name": "wrench",
     * "mass": "1.3kg", "count": "3" }. **Note**: This field is non-authoritative, and will only manage the labels present in
     * your configuration. Please refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The region of the Restore Plan.
     */
    location?: pulumi.Input<string>;
    /**
     * The full name of the BackupPlan Resource.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Defines the configuration of Restores created via this RestorePlan.
     */
    restoreConfig?: pulumi.Input<inputs.GkeBackupRestorePlanRestoreConfig>;
    /**
     * The State of the RestorePlan.
     */
    state?: pulumi.Input<string>;
    /**
     * Detailed description of why RestorePlan is in its current state.
     */
    stateReason?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GkeBackupRestorePlanTimeouts>;
    /**
     * Server generated, unique identifier of UUID format.
     */
    uid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GkeBackupRestorePlan resource.
 */
export interface GkeBackupRestorePlanArgs {
    /**
     * A reference to the BackupPlan from which Backups may be used as the source for Restores created via this RestorePlan.
     */
    backupPlan: pulumi.Input<string>;
    /**
     * The source cluster from which Restores will be created via this RestorePlan.
     */
    cluster: pulumi.Input<string>;
    /**
     * User specified descriptive string for this RestorePlan.
     */
    description?: pulumi.Input<string>;
    /**
     * Description: A set of custom labels supplied by the user. A list of key->value pairs. Example: { "name": "wrench",
     * "mass": "1.3kg", "count": "3" }. **Note**: This field is non-authoritative, and will only manage the labels present in
     * your configuration. Please refer to the field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The region of the Restore Plan.
     */
    location: pulumi.Input<string>;
    /**
     * The full name of the BackupPlan Resource.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Defines the configuration of Restores created via this RestorePlan.
     */
    restoreConfig: pulumi.Input<inputs.GkeBackupRestorePlanRestoreConfig>;
    timeouts?: pulumi.Input<inputs.GkeBackupRestorePlanTimeouts>;
}
