// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BackupReportPlan extends pulumi.CustomResource {
    /**
     * Get an existing BackupReportPlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupReportPlanState, opts?: pulumi.CustomResourceOptions): BackupReportPlan {
        return new BackupReportPlan(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/backupReportPlan:BackupReportPlan';

    /**
     * Returns true if the given object is an instance of BackupReportPlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupReportPlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupReportPlan.__pulumiType;
    }

    /**
     * A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket
     * name, S3 key prefix, and the formats of your reports.
     */
    public readonly reportDeliveryChannel!: pulumi.Output<outputs.BackupReportPlanReportDeliveryChannel>;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
     */
    public /*out*/ readonly reportPlanArn!: pulumi.Output<string>;
    /**
     * An optional description of the report plan with a maximum of 1,024 characters.
     */
    public readonly reportPlanDescription!: pulumi.Output<string>;
    /**
     * The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and
     * consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
     */
    public readonly reportPlanName!: pulumi.Output<string>;
    /**
     * Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.
     */
    public readonly reportPlanTags!: pulumi.Output<outputs.BackupReportPlanReportPlanTag[]>;
    /**
     * Identifies the report template for the report. Reports are built using a report template.
     */
    public readonly reportSetting!: pulumi.Output<outputs.BackupReportPlanReportSetting>;

    /**
     * Create a BackupReportPlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupReportPlanArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BackupReportPlanArgs | BackupReportPlanState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BackupReportPlanState | undefined;
            resourceInputs["reportDeliveryChannel"] = state ? state.reportDeliveryChannel : undefined;
            resourceInputs["reportPlanArn"] = state ? state.reportPlanArn : undefined;
            resourceInputs["reportPlanDescription"] = state ? state.reportPlanDescription : undefined;
            resourceInputs["reportPlanName"] = state ? state.reportPlanName : undefined;
            resourceInputs["reportPlanTags"] = state ? state.reportPlanTags : undefined;
            resourceInputs["reportSetting"] = state ? state.reportSetting : undefined;
        } else {
            const args = argsOrState as BackupReportPlanArgs | undefined;
            if ((!args || args.reportDeliveryChannel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reportDeliveryChannel'");
            }
            if ((!args || args.reportSetting === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reportSetting'");
            }
            resourceInputs["reportDeliveryChannel"] = args ? args.reportDeliveryChannel : undefined;
            resourceInputs["reportPlanDescription"] = args ? args.reportPlanDescription : undefined;
            resourceInputs["reportPlanName"] = args ? args.reportPlanName : undefined;
            resourceInputs["reportPlanTags"] = args ? args.reportPlanTags : undefined;
            resourceInputs["reportSetting"] = args ? args.reportSetting : undefined;
            resourceInputs["reportPlanArn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BackupReportPlan.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BackupReportPlan resources.
 */
export interface BackupReportPlanState {
    /**
     * A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket
     * name, S3 key prefix, and the formats of your reports.
     */
    reportDeliveryChannel?: pulumi.Input<inputs.BackupReportPlanReportDeliveryChannel>;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
     */
    reportPlanArn?: pulumi.Input<string>;
    /**
     * An optional description of the report plan with a maximum of 1,024 characters.
     */
    reportPlanDescription?: pulumi.Input<string>;
    /**
     * The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and
     * consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
     */
    reportPlanName?: pulumi.Input<string>;
    /**
     * Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.
     */
    reportPlanTags?: pulumi.Input<pulumi.Input<inputs.BackupReportPlanReportPlanTag>[]>;
    /**
     * Identifies the report template for the report. Reports are built using a report template.
     */
    reportSetting?: pulumi.Input<inputs.BackupReportPlanReportSetting>;
}

/**
 * The set of arguments for constructing a BackupReportPlan resource.
 */
export interface BackupReportPlanArgs {
    /**
     * A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket
     * name, S3 key prefix, and the formats of your reports.
     */
    reportDeliveryChannel: pulumi.Input<inputs.BackupReportPlanReportDeliveryChannel>;
    /**
     * An optional description of the report plan with a maximum of 1,024 characters.
     */
    reportPlanDescription?: pulumi.Input<string>;
    /**
     * The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and
     * consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
     */
    reportPlanName?: pulumi.Input<string>;
    /**
     * Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.
     */
    reportPlanTags?: pulumi.Input<pulumi.Input<inputs.BackupReportPlanReportPlanTag>[]>;
    /**
     * Identifies the report template for the report. Reports are built using a report template.
     */
    reportSetting: pulumi.Input<inputs.BackupReportPlanReportSetting>;
}
