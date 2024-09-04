// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudAppControlRule extends pulumi.CustomResource {
    /**
     * Get an existing CloudAppControlRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudAppControlRuleState, opts?: pulumi.CustomResourceOptions): CloudAppControlRule {
        return new CloudAppControlRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zia:index/cloudAppControlRule:CloudAppControlRule';

    /**
     * Returns true if the given object is an instance of CloudAppControlRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudAppControlRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudAppControlRule.__pulumiType;
    }

    /**
     * Actions allowed for the specified type.
     */
    public readonly actions!: pulumi.Output<string[] | undefined>;
    /**
     * List of cloud applications for which rule will be applied
     */
    public readonly applications!: pulumi.Output<string[] | undefined>;
    /**
     * nforce the URL Filtering policy on a transaction, even after it is explicitly allowed by the Cloud App Control policy.
     */
    public readonly cascadingEnabled!: pulumi.Output<boolean | undefined>;
    public readonly cbiProfiles!: pulumi.Output<outputs.CloudAppControlRuleCbiProfile[] | undefined>;
    /**
     * The DLP server, using ICAP, to which the transaction content is forwarded.
     */
    public readonly cloudAppRiskProfiles!: pulumi.Output<outputs.CloudAppControlRuleCloudAppRiskProfile[] | undefined>;
    /**
     * Name-ID pairs of departments for which rule must be applied
     */
    public readonly departments!: pulumi.Output<outputs.CloudAppControlRuleDepartments | undefined>;
    /**
     * Additional information about the forwarding rule
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * This field is applicable for devices that are managed using Zscaler Client Connector.
     */
    public readonly deviceGroups!: pulumi.Output<outputs.CloudAppControlRuleDeviceGroups | undefined>;
    /**
     * List of device trust levels for which the rule must be applied. This field is applicable for devices that are managed
     * using Zscaler Client Connector. The trust levels are assigned to the devices based on your posture configurations in the
     * Zscaler Client Connector Portal. If no value is set, this field is ignored during the policy evaluation.
     */
    public readonly deviceTrustLevels!: pulumi.Output<string[] | undefined>;
    /**
     * Name-ID pairs of devices for which rule must be applied.
     */
    public readonly devices!: pulumi.Output<outputs.CloudAppControlRuleDevices | undefined>;
    /**
     * Enforce a set a validity time period for the URL Filtering rule.
     */
    public readonly enforceTimeValidity!: pulumi.Output<boolean | undefined>;
    /**
     * Name-ID pairs of groups for which rule must be applied
     */
    public readonly groups!: pulumi.Output<outputs.CloudAppControlRuleGroups | undefined>;
    /**
     * The URL Filtering rule's label.
     */
    public readonly labels!: pulumi.Output<outputs.CloudAppControlRuleLabels | undefined>;
    /**
     * Name-ID pairs of the location groups to which the rule must be applied.
     */
    public readonly locationGroups!: pulumi.Output<outputs.CloudAppControlRuleLocationGroups | undefined>;
    /**
     * Name-ID pairs of locations for which rule must be applied
     */
    public readonly locations!: pulumi.Output<outputs.CloudAppControlRuleLocations | undefined>;
    /**
     * The name of the forwarding rule
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The order of execution for the forwarding rule order
     */
    public readonly order!: pulumi.Output<number>;
    /**
     * Admin rank assigned to the forwarding rule
     */
    public readonly rank!: pulumi.Output<number | undefined>;
    /**
     * A unique identifier assigned to the forwarding rule
     */
    public /*out*/ readonly ruleId!: pulumi.Output<number>;
    /**
     * Size quota in KB beyond which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule
     * action is set to 'BLOCK', this field is not applicable.
     */
    public readonly sizeQuota!: pulumi.Output<number | undefined>;
    /**
     * Determines whether the Firewall Filtering policy rule is enabled or disabled
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * Name-ID pairs of groups for which rule must be applied
     */
    public readonly tenancyProfileIds!: pulumi.Output<outputs.CloudAppControlRuleTenancyProfileIds | undefined>;
    /**
     * Time quota in minutes, after which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule
     * action is set to 'BLOCK', this field is not applicable.
     */
    public readonly timeQuota!: pulumi.Output<number | undefined>;
    /**
     * Name-ID pairs of time interval during which rule must be enforced.
     */
    public readonly timeWindows!: pulumi.Output<outputs.CloudAppControlRuleTimeWindows | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.CloudAppControlRuleTimeouts | undefined>;
    /**
     * Supported App Control Types
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * Supported User Agent Types
     */
    public readonly userAgentTypes!: pulumi.Output<string[] | undefined>;
    public readonly userRiskScoreLevels!: pulumi.Output<string[] | undefined>;
    /**
     * Name-ID pairs of users for which rule must be applied
     */
    public readonly users!: pulumi.Output<outputs.CloudAppControlRuleUsers | undefined>;
    /**
     * If enforceTimeValidity is set to true, the URL Filtering rule ceases to be valid on this end date and time.
     */
    public readonly validityEndTime!: pulumi.Output<string | undefined>;
    /**
     * If enforceTimeValidity is set to true, the URL Filtering rule is valid starting on this date and time.
     */
    public readonly validityStartTime!: pulumi.Output<string | undefined>;
    /**
     * If enforceTimeValidity is set to true, the URL Filtering rule date and time is valid based on this time zone ID. Use
     * IANA Format TimeZone.
     */
    public readonly validityTimeZoneId!: pulumi.Output<string | undefined>;

    /**
     * Create a CloudAppControlRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudAppControlRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudAppControlRuleArgs | CloudAppControlRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudAppControlRuleState | undefined;
            resourceInputs["actions"] = state ? state.actions : undefined;
            resourceInputs["applications"] = state ? state.applications : undefined;
            resourceInputs["cascadingEnabled"] = state ? state.cascadingEnabled : undefined;
            resourceInputs["cbiProfiles"] = state ? state.cbiProfiles : undefined;
            resourceInputs["cloudAppRiskProfiles"] = state ? state.cloudAppRiskProfiles : undefined;
            resourceInputs["departments"] = state ? state.departments : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceGroups"] = state ? state.deviceGroups : undefined;
            resourceInputs["deviceTrustLevels"] = state ? state.deviceTrustLevels : undefined;
            resourceInputs["devices"] = state ? state.devices : undefined;
            resourceInputs["enforceTimeValidity"] = state ? state.enforceTimeValidity : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["locationGroups"] = state ? state.locationGroups : undefined;
            resourceInputs["locations"] = state ? state.locations : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["order"] = state ? state.order : undefined;
            resourceInputs["rank"] = state ? state.rank : undefined;
            resourceInputs["ruleId"] = state ? state.ruleId : undefined;
            resourceInputs["sizeQuota"] = state ? state.sizeQuota : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tenancyProfileIds"] = state ? state.tenancyProfileIds : undefined;
            resourceInputs["timeQuota"] = state ? state.timeQuota : undefined;
            resourceInputs["timeWindows"] = state ? state.timeWindows : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["userAgentTypes"] = state ? state.userAgentTypes : undefined;
            resourceInputs["userRiskScoreLevels"] = state ? state.userRiskScoreLevels : undefined;
            resourceInputs["users"] = state ? state.users : undefined;
            resourceInputs["validityEndTime"] = state ? state.validityEndTime : undefined;
            resourceInputs["validityStartTime"] = state ? state.validityStartTime : undefined;
            resourceInputs["validityTimeZoneId"] = state ? state.validityTimeZoneId : undefined;
        } else {
            const args = argsOrState as CloudAppControlRuleArgs | undefined;
            if ((!args || args.order === undefined) && !opts.urn) {
                throw new Error("Missing required property 'order'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["applications"] = args ? args.applications : undefined;
            resourceInputs["cascadingEnabled"] = args ? args.cascadingEnabled : undefined;
            resourceInputs["cbiProfiles"] = args ? args.cbiProfiles : undefined;
            resourceInputs["cloudAppRiskProfiles"] = args ? args.cloudAppRiskProfiles : undefined;
            resourceInputs["departments"] = args ? args.departments : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceGroups"] = args ? args.deviceGroups : undefined;
            resourceInputs["deviceTrustLevels"] = args ? args.deviceTrustLevels : undefined;
            resourceInputs["devices"] = args ? args.devices : undefined;
            resourceInputs["enforceTimeValidity"] = args ? args.enforceTimeValidity : undefined;
            resourceInputs["groups"] = args ? args.groups : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["locationGroups"] = args ? args.locationGroups : undefined;
            resourceInputs["locations"] = args ? args.locations : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["order"] = args ? args.order : undefined;
            resourceInputs["rank"] = args ? args.rank : undefined;
            resourceInputs["sizeQuota"] = args ? args.sizeQuota : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["tenancyProfileIds"] = args ? args.tenancyProfileIds : undefined;
            resourceInputs["timeQuota"] = args ? args.timeQuota : undefined;
            resourceInputs["timeWindows"] = args ? args.timeWindows : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["userAgentTypes"] = args ? args.userAgentTypes : undefined;
            resourceInputs["userRiskScoreLevels"] = args ? args.userRiskScoreLevels : undefined;
            resourceInputs["users"] = args ? args.users : undefined;
            resourceInputs["validityEndTime"] = args ? args.validityEndTime : undefined;
            resourceInputs["validityStartTime"] = args ? args.validityStartTime : undefined;
            resourceInputs["validityTimeZoneId"] = args ? args.validityTimeZoneId : undefined;
            resourceInputs["ruleId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudAppControlRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudAppControlRule resources.
 */
export interface CloudAppControlRuleState {
    /**
     * Actions allowed for the specified type.
     */
    actions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of cloud applications for which rule will be applied
     */
    applications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * nforce the URL Filtering policy on a transaction, even after it is explicitly allowed by the Cloud App Control policy.
     */
    cascadingEnabled?: pulumi.Input<boolean>;
    cbiProfiles?: pulumi.Input<pulumi.Input<inputs.CloudAppControlRuleCbiProfile>[]>;
    /**
     * The DLP server, using ICAP, to which the transaction content is forwarded.
     */
    cloudAppRiskProfiles?: pulumi.Input<pulumi.Input<inputs.CloudAppControlRuleCloudAppRiskProfile>[]>;
    /**
     * Name-ID pairs of departments for which rule must be applied
     */
    departments?: pulumi.Input<inputs.CloudAppControlRuleDepartments>;
    /**
     * Additional information about the forwarding rule
     */
    description?: pulumi.Input<string>;
    /**
     * This field is applicable for devices that are managed using Zscaler Client Connector.
     */
    deviceGroups?: pulumi.Input<inputs.CloudAppControlRuleDeviceGroups>;
    /**
     * List of device trust levels for which the rule must be applied. This field is applicable for devices that are managed
     * using Zscaler Client Connector. The trust levels are assigned to the devices based on your posture configurations in the
     * Zscaler Client Connector Portal. If no value is set, this field is ignored during the policy evaluation.
     */
    deviceTrustLevels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name-ID pairs of devices for which rule must be applied.
     */
    devices?: pulumi.Input<inputs.CloudAppControlRuleDevices>;
    /**
     * Enforce a set a validity time period for the URL Filtering rule.
     */
    enforceTimeValidity?: pulumi.Input<boolean>;
    /**
     * Name-ID pairs of groups for which rule must be applied
     */
    groups?: pulumi.Input<inputs.CloudAppControlRuleGroups>;
    /**
     * The URL Filtering rule's label.
     */
    labels?: pulumi.Input<inputs.CloudAppControlRuleLabels>;
    /**
     * Name-ID pairs of the location groups to which the rule must be applied.
     */
    locationGroups?: pulumi.Input<inputs.CloudAppControlRuleLocationGroups>;
    /**
     * Name-ID pairs of locations for which rule must be applied
     */
    locations?: pulumi.Input<inputs.CloudAppControlRuleLocations>;
    /**
     * The name of the forwarding rule
     */
    name?: pulumi.Input<string>;
    /**
     * The order of execution for the forwarding rule order
     */
    order?: pulumi.Input<number>;
    /**
     * Admin rank assigned to the forwarding rule
     */
    rank?: pulumi.Input<number>;
    /**
     * A unique identifier assigned to the forwarding rule
     */
    ruleId?: pulumi.Input<number>;
    /**
     * Size quota in KB beyond which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule
     * action is set to 'BLOCK', this field is not applicable.
     */
    sizeQuota?: pulumi.Input<number>;
    /**
     * Determines whether the Firewall Filtering policy rule is enabled or disabled
     */
    state?: pulumi.Input<string>;
    /**
     * Name-ID pairs of groups for which rule must be applied
     */
    tenancyProfileIds?: pulumi.Input<inputs.CloudAppControlRuleTenancyProfileIds>;
    /**
     * Time quota in minutes, after which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule
     * action is set to 'BLOCK', this field is not applicable.
     */
    timeQuota?: pulumi.Input<number>;
    /**
     * Name-ID pairs of time interval during which rule must be enforced.
     */
    timeWindows?: pulumi.Input<inputs.CloudAppControlRuleTimeWindows>;
    timeouts?: pulumi.Input<inputs.CloudAppControlRuleTimeouts>;
    /**
     * Supported App Control Types
     */
    type?: pulumi.Input<string>;
    /**
     * Supported User Agent Types
     */
    userAgentTypes?: pulumi.Input<pulumi.Input<string>[]>;
    userRiskScoreLevels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name-ID pairs of users for which rule must be applied
     */
    users?: pulumi.Input<inputs.CloudAppControlRuleUsers>;
    /**
     * If enforceTimeValidity is set to true, the URL Filtering rule ceases to be valid on this end date and time.
     */
    validityEndTime?: pulumi.Input<string>;
    /**
     * If enforceTimeValidity is set to true, the URL Filtering rule is valid starting on this date and time.
     */
    validityStartTime?: pulumi.Input<string>;
    /**
     * If enforceTimeValidity is set to true, the URL Filtering rule date and time is valid based on this time zone ID. Use
     * IANA Format TimeZone.
     */
    validityTimeZoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudAppControlRule resource.
 */
export interface CloudAppControlRuleArgs {
    /**
     * Actions allowed for the specified type.
     */
    actions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of cloud applications for which rule will be applied
     */
    applications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * nforce the URL Filtering policy on a transaction, even after it is explicitly allowed by the Cloud App Control policy.
     */
    cascadingEnabled?: pulumi.Input<boolean>;
    cbiProfiles?: pulumi.Input<pulumi.Input<inputs.CloudAppControlRuleCbiProfile>[]>;
    /**
     * The DLP server, using ICAP, to which the transaction content is forwarded.
     */
    cloudAppRiskProfiles?: pulumi.Input<pulumi.Input<inputs.CloudAppControlRuleCloudAppRiskProfile>[]>;
    /**
     * Name-ID pairs of departments for which rule must be applied
     */
    departments?: pulumi.Input<inputs.CloudAppControlRuleDepartments>;
    /**
     * Additional information about the forwarding rule
     */
    description?: pulumi.Input<string>;
    /**
     * This field is applicable for devices that are managed using Zscaler Client Connector.
     */
    deviceGroups?: pulumi.Input<inputs.CloudAppControlRuleDeviceGroups>;
    /**
     * List of device trust levels for which the rule must be applied. This field is applicable for devices that are managed
     * using Zscaler Client Connector. The trust levels are assigned to the devices based on your posture configurations in the
     * Zscaler Client Connector Portal. If no value is set, this field is ignored during the policy evaluation.
     */
    deviceTrustLevels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name-ID pairs of devices for which rule must be applied.
     */
    devices?: pulumi.Input<inputs.CloudAppControlRuleDevices>;
    /**
     * Enforce a set a validity time period for the URL Filtering rule.
     */
    enforceTimeValidity?: pulumi.Input<boolean>;
    /**
     * Name-ID pairs of groups for which rule must be applied
     */
    groups?: pulumi.Input<inputs.CloudAppControlRuleGroups>;
    /**
     * The URL Filtering rule's label.
     */
    labels?: pulumi.Input<inputs.CloudAppControlRuleLabels>;
    /**
     * Name-ID pairs of the location groups to which the rule must be applied.
     */
    locationGroups?: pulumi.Input<inputs.CloudAppControlRuleLocationGroups>;
    /**
     * Name-ID pairs of locations for which rule must be applied
     */
    locations?: pulumi.Input<inputs.CloudAppControlRuleLocations>;
    /**
     * The name of the forwarding rule
     */
    name?: pulumi.Input<string>;
    /**
     * The order of execution for the forwarding rule order
     */
    order: pulumi.Input<number>;
    /**
     * Admin rank assigned to the forwarding rule
     */
    rank?: pulumi.Input<number>;
    /**
     * Size quota in KB beyond which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule
     * action is set to 'BLOCK', this field is not applicable.
     */
    sizeQuota?: pulumi.Input<number>;
    /**
     * Determines whether the Firewall Filtering policy rule is enabled or disabled
     */
    state?: pulumi.Input<string>;
    /**
     * Name-ID pairs of groups for which rule must be applied
     */
    tenancyProfileIds?: pulumi.Input<inputs.CloudAppControlRuleTenancyProfileIds>;
    /**
     * Time quota in minutes, after which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule
     * action is set to 'BLOCK', this field is not applicable.
     */
    timeQuota?: pulumi.Input<number>;
    /**
     * Name-ID pairs of time interval during which rule must be enforced.
     */
    timeWindows?: pulumi.Input<inputs.CloudAppControlRuleTimeWindows>;
    timeouts?: pulumi.Input<inputs.CloudAppControlRuleTimeouts>;
    /**
     * Supported App Control Types
     */
    type?: pulumi.Input<string>;
    /**
     * Supported User Agent Types
     */
    userAgentTypes?: pulumi.Input<pulumi.Input<string>[]>;
    userRiskScoreLevels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name-ID pairs of users for which rule must be applied
     */
    users?: pulumi.Input<inputs.CloudAppControlRuleUsers>;
    /**
     * If enforceTimeValidity is set to true, the URL Filtering rule ceases to be valid on this end date and time.
     */
    validityEndTime?: pulumi.Input<string>;
    /**
     * If enforceTimeValidity is set to true, the URL Filtering rule is valid starting on this date and time.
     */
    validityStartTime?: pulumi.Input<string>;
    /**
     * If enforceTimeValidity is set to true, the URL Filtering rule date and time is valid based on this time zone ID. Use
     * IANA Format TimeZone.
     */
    validityTimeZoneId?: pulumi.Input<string>;
}
