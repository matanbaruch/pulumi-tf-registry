// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ReportRule extends pulumi.CustomResource {
    /**
     * Get an existing ReportRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReportRuleState, opts?: pulumi.CustomResourceOptions): ReportRule {
        return new ReportRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lacework:index/reportRule:ReportRule';

    /**
     * Returns true if the given object is an instance of ReportRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReportRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReportRule.__pulumiType;
    }

    public readonly awsComplianceReports!: pulumi.Output<outputs.ReportRuleAwsComplianceReports | undefined>;
    public readonly azureComplianceReports!: pulumi.Output<outputs.ReportRuleAzureComplianceReports | undefined>;
    public /*out*/ readonly createdOrUpdatedBy!: pulumi.Output<string>;
    public /*out*/ readonly createdOrUpdatedTime!: pulumi.Output<string>;
    public readonly dailyComplianceReports!: pulumi.Output<outputs.ReportRuleDailyComplianceReports | undefined>;
    /**
     * The description of the report rule
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * List of email alert channels for the report rule
     */
    public readonly emailAlertChannels!: pulumi.Output<string[]>;
    /**
     * The state of the report rule
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly gcpComplianceReports!: pulumi.Output<outputs.ReportRuleGcpComplianceReports | undefined>;
    public /*out*/ readonly guid!: pulumi.Output<string>;
    /**
     * The name of the report rule
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of resource groups for the report rule
     */
    public readonly resourceGroups!: pulumi.Output<string[] | undefined>;
    /**
     * List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info
     */
    public readonly severities!: pulumi.Output<string[]>;
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Weekly Snapshot Compliance Report type
     */
    public readonly weeklySnapshot!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ReportRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReportRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ReportRuleArgs | ReportRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ReportRuleState | undefined;
            resourceInputs["awsComplianceReports"] = state ? state.awsComplianceReports : undefined;
            resourceInputs["azureComplianceReports"] = state ? state.azureComplianceReports : undefined;
            resourceInputs["createdOrUpdatedBy"] = state ? state.createdOrUpdatedBy : undefined;
            resourceInputs["createdOrUpdatedTime"] = state ? state.createdOrUpdatedTime : undefined;
            resourceInputs["dailyComplianceReports"] = state ? state.dailyComplianceReports : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["emailAlertChannels"] = state ? state.emailAlertChannels : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["gcpComplianceReports"] = state ? state.gcpComplianceReports : undefined;
            resourceInputs["guid"] = state ? state.guid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroups"] = state ? state.resourceGroups : undefined;
            resourceInputs["severities"] = state ? state.severities : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["weeklySnapshot"] = state ? state.weeklySnapshot : undefined;
        } else {
            const args = argsOrState as ReportRuleArgs | undefined;
            if ((!args || args.emailAlertChannels === undefined) && !opts.urn) {
                throw new Error("Missing required property 'emailAlertChannels'");
            }
            if ((!args || args.severities === undefined) && !opts.urn) {
                throw new Error("Missing required property 'severities'");
            }
            resourceInputs["awsComplianceReports"] = args ? args.awsComplianceReports : undefined;
            resourceInputs["azureComplianceReports"] = args ? args.azureComplianceReports : undefined;
            resourceInputs["dailyComplianceReports"] = args ? args.dailyComplianceReports : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["emailAlertChannels"] = args ? args.emailAlertChannels : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["gcpComplianceReports"] = args ? args.gcpComplianceReports : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroups"] = args ? args.resourceGroups : undefined;
            resourceInputs["severities"] = args ? args.severities : undefined;
            resourceInputs["weeklySnapshot"] = args ? args.weeklySnapshot : undefined;
            resourceInputs["createdOrUpdatedBy"] = undefined /*out*/;
            resourceInputs["createdOrUpdatedTime"] = undefined /*out*/;
            resourceInputs["guid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ReportRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ReportRule resources.
 */
export interface ReportRuleState {
    awsComplianceReports?: pulumi.Input<inputs.ReportRuleAwsComplianceReports>;
    azureComplianceReports?: pulumi.Input<inputs.ReportRuleAzureComplianceReports>;
    createdOrUpdatedBy?: pulumi.Input<string>;
    createdOrUpdatedTime?: pulumi.Input<string>;
    dailyComplianceReports?: pulumi.Input<inputs.ReportRuleDailyComplianceReports>;
    /**
     * The description of the report rule
     */
    description?: pulumi.Input<string>;
    /**
     * List of email alert channels for the report rule
     */
    emailAlertChannels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The state of the report rule
     */
    enabled?: pulumi.Input<boolean>;
    gcpComplianceReports?: pulumi.Input<inputs.ReportRuleGcpComplianceReports>;
    guid?: pulumi.Input<string>;
    /**
     * The name of the report rule
     */
    name?: pulumi.Input<string>;
    /**
     * List of resource groups for the report rule
     */
    resourceGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info
     */
    severities?: pulumi.Input<pulumi.Input<string>[]>;
    type?: pulumi.Input<string>;
    /**
     * Weekly Snapshot Compliance Report type
     */
    weeklySnapshot?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ReportRule resource.
 */
export interface ReportRuleArgs {
    awsComplianceReports?: pulumi.Input<inputs.ReportRuleAwsComplianceReports>;
    azureComplianceReports?: pulumi.Input<inputs.ReportRuleAzureComplianceReports>;
    dailyComplianceReports?: pulumi.Input<inputs.ReportRuleDailyComplianceReports>;
    /**
     * The description of the report rule
     */
    description?: pulumi.Input<string>;
    /**
     * List of email alert channels for the report rule
     */
    emailAlertChannels: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The state of the report rule
     */
    enabled?: pulumi.Input<boolean>;
    gcpComplianceReports?: pulumi.Input<inputs.ReportRuleGcpComplianceReports>;
    /**
     * The name of the report rule
     */
    name?: pulumi.Input<string>;
    /**
     * List of resource groups for the report rule
     */
    resourceGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of severities for the report rule. Valid severities are: Critical, High, Medium, Low, Info
     */
    severities: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Weekly Snapshot Compliance Report type
     */
    weeklySnapshot?: pulumi.Input<boolean>;
}
