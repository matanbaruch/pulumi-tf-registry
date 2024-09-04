// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class UrlFilteringRules extends pulumi.CustomResource {
    /**
     * Get an existing UrlFilteringRules resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UrlFilteringRulesState, opts?: pulumi.CustomResourceOptions): UrlFilteringRules {
        return new UrlFilteringRules(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zia:index/urlFilteringRules:UrlFilteringRules';

    /**
     * Returns true if the given object is an instance of UrlFilteringRules.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UrlFilteringRules {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UrlFilteringRules.__pulumiType;
    }

    /**
     * Action taken when traffic matches rule criteria
     */
    public readonly action!: pulumi.Output<string | undefined>;
    public readonly blockOverride!: pulumi.Output<boolean | undefined>;
    public readonly cbiProfiles!: pulumi.Output<outputs.UrlFilteringRulesCbiProfile[] | undefined>;
    /**
     * If set to true, the CIPA Compliance rule is enabled
     */
    public readonly ciparule!: pulumi.Output<boolean | undefined>;
    /**
     * Name-ID pairs of departments for which rule must be applied
     */
    public readonly departments!: pulumi.Output<outputs.UrlFilteringRulesDepartments | undefined>;
    /**
     * Additional information about the URL Filtering rule
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * This field is applicable for devices that are managed using Zscaler Client Connector.
     */
    public readonly deviceGroups!: pulumi.Output<outputs.UrlFilteringRulesDeviceGroups | undefined>;
    /**
     * List of device trust levels for which the rule must be applied. This field is applicable for devices that are managed
     * using Zscaler Client Connector. The trust levels are assigned to the devices based on your posture configurations in the
     * Zscaler Client Connector Portal. If no value is set, this field is ignored during the policy evaluation.
     */
    public readonly deviceTrustLevels!: pulumi.Output<string[] | undefined>;
    /**
     * Name-ID pairs of devices for which rule must be applied.
     */
    public readonly devices!: pulumi.Output<outputs.UrlFilteringRulesDevices | undefined>;
    /**
     * URL of end user notification page to be displayed when the rule is matched. Not applicable if either 'overrideUsers' or
     * 'overrideGroups' is specified.
     */
    public readonly endUserNotificationUrl!: pulumi.Output<string | undefined>;
    /**
     * Enforce a set a validity time period for the URL Filtering rule.
     */
    public readonly enforceTimeValidity!: pulumi.Output<boolean | undefined>;
    /**
     * Name-ID pairs of groups for which rule must be applied
     */
    public readonly groups!: pulumi.Output<outputs.UrlFilteringRulesGroups | undefined>;
    /**
     * The URL Filtering rule's label.
     */
    public readonly labels!: pulumi.Output<outputs.UrlFilteringRulesLabels | undefined>;
    /**
     * Name-ID pairs of the location groups to which the rule must be applied.
     */
    public readonly locationGroups!: pulumi.Output<outputs.UrlFilteringRulesLocationGroups | undefined>;
    /**
     * Name-ID pairs of locations for which rule must be applied
     */
    public readonly locations!: pulumi.Output<outputs.UrlFilteringRulesLocations | undefined>;
    /**
     * Rule Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Order of execution of rule with respect to other URL Filtering rules
     */
    public readonly order!: pulumi.Output<number>;
    /**
     * Name-ID pairs of groups for which this rule can be overridden.
     */
    public readonly overrideGroups!: pulumi.Output<outputs.UrlFilteringRulesOverrideGroups | undefined>;
    /**
     * Name-ID pairs of users for which this rule can be overridden.
     */
    public readonly overrideUsers!: pulumi.Output<outputs.UrlFilteringRulesOverrideUsers | undefined>;
    /**
     * Supported Protocol criteria
     */
    public readonly protocols!: pulumi.Output<string[]>;
    /**
     * Admin rank of the Firewall Filtering policy rule
     */
    public readonly rank!: pulumi.Output<number | undefined>;
    /**
     * Request method for which the rule must be applied. If not set, rule will be applied to all methods
     */
    public readonly requestMethods!: pulumi.Output<string[] | undefined>;
    /**
     * URL Filtering Rule ID
     */
    public /*out*/ readonly ruleId!: pulumi.Output<number>;
    /**
     * Size quota in KB beyond which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule
     * action is set to 'BLOCK', this field is not applicable.
     */
    public readonly sizeQuota!: pulumi.Output<number | undefined>;
    /**
     * list of source ip groups
     */
    public readonly sourceIpGroups!: pulumi.Output<outputs.UrlFilteringRulesSourceIpGroups | undefined>;
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * Time quota in minutes, after which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule
     * action is set to 'BLOCK', this field is not applicable.
     */
    public readonly timeQuota!: pulumi.Output<number | undefined>;
    /**
     * Name-ID pairs of time interval during which rule must be enforced.
     */
    public readonly timeWindows!: pulumi.Output<outputs.UrlFilteringRulesTimeWindows | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.UrlFilteringRulesTimeouts | undefined>;
    /**
     * List of URL categories for which rule must be applied
     */
    public readonly urlCategories!: pulumi.Output<string[] | undefined>;
    /**
     * Supported User Agent Types
     */
    public readonly userAgentTypes!: pulumi.Output<string[] | undefined>;
    public readonly userRiskScoreLevels!: pulumi.Output<string[] | undefined>;
    /**
     * Name-ID pairs of users for which rule must be applied
     */
    public readonly users!: pulumi.Output<outputs.UrlFilteringRulesUsers | undefined>;
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
     * The list of preconfigured workload groups to which the policy must be applied
     */
    public readonly workloadGroups!: pulumi.Output<outputs.UrlFilteringRulesWorkloadGroup[] | undefined>;

    /**
     * Create a UrlFilteringRules resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UrlFilteringRulesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UrlFilteringRulesArgs | UrlFilteringRulesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UrlFilteringRulesState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["blockOverride"] = state ? state.blockOverride : undefined;
            resourceInputs["cbiProfiles"] = state ? state.cbiProfiles : undefined;
            resourceInputs["ciparule"] = state ? state.ciparule : undefined;
            resourceInputs["departments"] = state ? state.departments : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceGroups"] = state ? state.deviceGroups : undefined;
            resourceInputs["deviceTrustLevels"] = state ? state.deviceTrustLevels : undefined;
            resourceInputs["devices"] = state ? state.devices : undefined;
            resourceInputs["endUserNotificationUrl"] = state ? state.endUserNotificationUrl : undefined;
            resourceInputs["enforceTimeValidity"] = state ? state.enforceTimeValidity : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["locationGroups"] = state ? state.locationGroups : undefined;
            resourceInputs["locations"] = state ? state.locations : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["order"] = state ? state.order : undefined;
            resourceInputs["overrideGroups"] = state ? state.overrideGroups : undefined;
            resourceInputs["overrideUsers"] = state ? state.overrideUsers : undefined;
            resourceInputs["protocols"] = state ? state.protocols : undefined;
            resourceInputs["rank"] = state ? state.rank : undefined;
            resourceInputs["requestMethods"] = state ? state.requestMethods : undefined;
            resourceInputs["ruleId"] = state ? state.ruleId : undefined;
            resourceInputs["sizeQuota"] = state ? state.sizeQuota : undefined;
            resourceInputs["sourceIpGroups"] = state ? state.sourceIpGroups : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeQuota"] = state ? state.timeQuota : undefined;
            resourceInputs["timeWindows"] = state ? state.timeWindows : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["urlCategories"] = state ? state.urlCategories : undefined;
            resourceInputs["userAgentTypes"] = state ? state.userAgentTypes : undefined;
            resourceInputs["userRiskScoreLevels"] = state ? state.userRiskScoreLevels : undefined;
            resourceInputs["users"] = state ? state.users : undefined;
            resourceInputs["validityEndTime"] = state ? state.validityEndTime : undefined;
            resourceInputs["validityStartTime"] = state ? state.validityStartTime : undefined;
            resourceInputs["validityTimeZoneId"] = state ? state.validityTimeZoneId : undefined;
            resourceInputs["workloadGroups"] = state ? state.workloadGroups : undefined;
        } else {
            const args = argsOrState as UrlFilteringRulesArgs | undefined;
            if ((!args || args.protocols === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocols'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["blockOverride"] = args ? args.blockOverride : undefined;
            resourceInputs["cbiProfiles"] = args ? args.cbiProfiles : undefined;
            resourceInputs["ciparule"] = args ? args.ciparule : undefined;
            resourceInputs["departments"] = args ? args.departments : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceGroups"] = args ? args.deviceGroups : undefined;
            resourceInputs["deviceTrustLevels"] = args ? args.deviceTrustLevels : undefined;
            resourceInputs["devices"] = args ? args.devices : undefined;
            resourceInputs["endUserNotificationUrl"] = args ? args.endUserNotificationUrl : undefined;
            resourceInputs["enforceTimeValidity"] = args ? args.enforceTimeValidity : undefined;
            resourceInputs["groups"] = args ? args.groups : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["locationGroups"] = args ? args.locationGroups : undefined;
            resourceInputs["locations"] = args ? args.locations : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["order"] = args ? args.order : undefined;
            resourceInputs["overrideGroups"] = args ? args.overrideGroups : undefined;
            resourceInputs["overrideUsers"] = args ? args.overrideUsers : undefined;
            resourceInputs["protocols"] = args ? args.protocols : undefined;
            resourceInputs["rank"] = args ? args.rank : undefined;
            resourceInputs["requestMethods"] = args ? args.requestMethods : undefined;
            resourceInputs["sizeQuota"] = args ? args.sizeQuota : undefined;
            resourceInputs["sourceIpGroups"] = args ? args.sourceIpGroups : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["timeQuota"] = args ? args.timeQuota : undefined;
            resourceInputs["timeWindows"] = args ? args.timeWindows : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["urlCategories"] = args ? args.urlCategories : undefined;
            resourceInputs["userAgentTypes"] = args ? args.userAgentTypes : undefined;
            resourceInputs["userRiskScoreLevels"] = args ? args.userRiskScoreLevels : undefined;
            resourceInputs["users"] = args ? args.users : undefined;
            resourceInputs["validityEndTime"] = args ? args.validityEndTime : undefined;
            resourceInputs["validityStartTime"] = args ? args.validityStartTime : undefined;
            resourceInputs["validityTimeZoneId"] = args ? args.validityTimeZoneId : undefined;
            resourceInputs["workloadGroups"] = args ? args.workloadGroups : undefined;
            resourceInputs["ruleId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UrlFilteringRules.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UrlFilteringRules resources.
 */
export interface UrlFilteringRulesState {
    /**
     * Action taken when traffic matches rule criteria
     */
    action?: pulumi.Input<string>;
    blockOverride?: pulumi.Input<boolean>;
    cbiProfiles?: pulumi.Input<pulumi.Input<inputs.UrlFilteringRulesCbiProfile>[]>;
    /**
     * If set to true, the CIPA Compliance rule is enabled
     */
    ciparule?: pulumi.Input<boolean>;
    /**
     * Name-ID pairs of departments for which rule must be applied
     */
    departments?: pulumi.Input<inputs.UrlFilteringRulesDepartments>;
    /**
     * Additional information about the URL Filtering rule
     */
    description?: pulumi.Input<string>;
    /**
     * This field is applicable for devices that are managed using Zscaler Client Connector.
     */
    deviceGroups?: pulumi.Input<inputs.UrlFilteringRulesDeviceGroups>;
    /**
     * List of device trust levels for which the rule must be applied. This field is applicable for devices that are managed
     * using Zscaler Client Connector. The trust levels are assigned to the devices based on your posture configurations in the
     * Zscaler Client Connector Portal. If no value is set, this field is ignored during the policy evaluation.
     */
    deviceTrustLevels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name-ID pairs of devices for which rule must be applied.
     */
    devices?: pulumi.Input<inputs.UrlFilteringRulesDevices>;
    /**
     * URL of end user notification page to be displayed when the rule is matched. Not applicable if either 'overrideUsers' or
     * 'overrideGroups' is specified.
     */
    endUserNotificationUrl?: pulumi.Input<string>;
    /**
     * Enforce a set a validity time period for the URL Filtering rule.
     */
    enforceTimeValidity?: pulumi.Input<boolean>;
    /**
     * Name-ID pairs of groups for which rule must be applied
     */
    groups?: pulumi.Input<inputs.UrlFilteringRulesGroups>;
    /**
     * The URL Filtering rule's label.
     */
    labels?: pulumi.Input<inputs.UrlFilteringRulesLabels>;
    /**
     * Name-ID pairs of the location groups to which the rule must be applied.
     */
    locationGroups?: pulumi.Input<inputs.UrlFilteringRulesLocationGroups>;
    /**
     * Name-ID pairs of locations for which rule must be applied
     */
    locations?: pulumi.Input<inputs.UrlFilteringRulesLocations>;
    /**
     * Rule Name
     */
    name?: pulumi.Input<string>;
    /**
     * Order of execution of rule with respect to other URL Filtering rules
     */
    order?: pulumi.Input<number>;
    /**
     * Name-ID pairs of groups for which this rule can be overridden.
     */
    overrideGroups?: pulumi.Input<inputs.UrlFilteringRulesOverrideGroups>;
    /**
     * Name-ID pairs of users for which this rule can be overridden.
     */
    overrideUsers?: pulumi.Input<inputs.UrlFilteringRulesOverrideUsers>;
    /**
     * Supported Protocol criteria
     */
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Admin rank of the Firewall Filtering policy rule
     */
    rank?: pulumi.Input<number>;
    /**
     * Request method for which the rule must be applied. If not set, rule will be applied to all methods
     */
    requestMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * URL Filtering Rule ID
     */
    ruleId?: pulumi.Input<number>;
    /**
     * Size quota in KB beyond which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule
     * action is set to 'BLOCK', this field is not applicable.
     */
    sizeQuota?: pulumi.Input<number>;
    /**
     * list of source ip groups
     */
    sourceIpGroups?: pulumi.Input<inputs.UrlFilteringRulesSourceIpGroups>;
    state?: pulumi.Input<string>;
    /**
     * Time quota in minutes, after which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule
     * action is set to 'BLOCK', this field is not applicable.
     */
    timeQuota?: pulumi.Input<number>;
    /**
     * Name-ID pairs of time interval during which rule must be enforced.
     */
    timeWindows?: pulumi.Input<inputs.UrlFilteringRulesTimeWindows>;
    timeouts?: pulumi.Input<inputs.UrlFilteringRulesTimeouts>;
    /**
     * List of URL categories for which rule must be applied
     */
    urlCategories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Supported User Agent Types
     */
    userAgentTypes?: pulumi.Input<pulumi.Input<string>[]>;
    userRiskScoreLevels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name-ID pairs of users for which rule must be applied
     */
    users?: pulumi.Input<inputs.UrlFilteringRulesUsers>;
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
    /**
     * The list of preconfigured workload groups to which the policy must be applied
     */
    workloadGroups?: pulumi.Input<pulumi.Input<inputs.UrlFilteringRulesWorkloadGroup>[]>;
}

/**
 * The set of arguments for constructing a UrlFilteringRules resource.
 */
export interface UrlFilteringRulesArgs {
    /**
     * Action taken when traffic matches rule criteria
     */
    action?: pulumi.Input<string>;
    blockOverride?: pulumi.Input<boolean>;
    cbiProfiles?: pulumi.Input<pulumi.Input<inputs.UrlFilteringRulesCbiProfile>[]>;
    /**
     * If set to true, the CIPA Compliance rule is enabled
     */
    ciparule?: pulumi.Input<boolean>;
    /**
     * Name-ID pairs of departments for which rule must be applied
     */
    departments?: pulumi.Input<inputs.UrlFilteringRulesDepartments>;
    /**
     * Additional information about the URL Filtering rule
     */
    description?: pulumi.Input<string>;
    /**
     * This field is applicable for devices that are managed using Zscaler Client Connector.
     */
    deviceGroups?: pulumi.Input<inputs.UrlFilteringRulesDeviceGroups>;
    /**
     * List of device trust levels for which the rule must be applied. This field is applicable for devices that are managed
     * using Zscaler Client Connector. The trust levels are assigned to the devices based on your posture configurations in the
     * Zscaler Client Connector Portal. If no value is set, this field is ignored during the policy evaluation.
     */
    deviceTrustLevels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name-ID pairs of devices for which rule must be applied.
     */
    devices?: pulumi.Input<inputs.UrlFilteringRulesDevices>;
    /**
     * URL of end user notification page to be displayed when the rule is matched. Not applicable if either 'overrideUsers' or
     * 'overrideGroups' is specified.
     */
    endUserNotificationUrl?: pulumi.Input<string>;
    /**
     * Enforce a set a validity time period for the URL Filtering rule.
     */
    enforceTimeValidity?: pulumi.Input<boolean>;
    /**
     * Name-ID pairs of groups for which rule must be applied
     */
    groups?: pulumi.Input<inputs.UrlFilteringRulesGroups>;
    /**
     * The URL Filtering rule's label.
     */
    labels?: pulumi.Input<inputs.UrlFilteringRulesLabels>;
    /**
     * Name-ID pairs of the location groups to which the rule must be applied.
     */
    locationGroups?: pulumi.Input<inputs.UrlFilteringRulesLocationGroups>;
    /**
     * Name-ID pairs of locations for which rule must be applied
     */
    locations?: pulumi.Input<inputs.UrlFilteringRulesLocations>;
    /**
     * Rule Name
     */
    name?: pulumi.Input<string>;
    /**
     * Order of execution of rule with respect to other URL Filtering rules
     */
    order?: pulumi.Input<number>;
    /**
     * Name-ID pairs of groups for which this rule can be overridden.
     */
    overrideGroups?: pulumi.Input<inputs.UrlFilteringRulesOverrideGroups>;
    /**
     * Name-ID pairs of users for which this rule can be overridden.
     */
    overrideUsers?: pulumi.Input<inputs.UrlFilteringRulesOverrideUsers>;
    /**
     * Supported Protocol criteria
     */
    protocols: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Admin rank of the Firewall Filtering policy rule
     */
    rank?: pulumi.Input<number>;
    /**
     * Request method for which the rule must be applied. If not set, rule will be applied to all methods
     */
    requestMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Size quota in KB beyond which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule
     * action is set to 'BLOCK', this field is not applicable.
     */
    sizeQuota?: pulumi.Input<number>;
    /**
     * list of source ip groups
     */
    sourceIpGroups?: pulumi.Input<inputs.UrlFilteringRulesSourceIpGroups>;
    state?: pulumi.Input<string>;
    /**
     * Time quota in minutes, after which the URL Filtering rule is applied. If not set, no quota is enforced. If a policy rule
     * action is set to 'BLOCK', this field is not applicable.
     */
    timeQuota?: pulumi.Input<number>;
    /**
     * Name-ID pairs of time interval during which rule must be enforced.
     */
    timeWindows?: pulumi.Input<inputs.UrlFilteringRulesTimeWindows>;
    timeouts?: pulumi.Input<inputs.UrlFilteringRulesTimeouts>;
    /**
     * List of URL categories for which rule must be applied
     */
    urlCategories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Supported User Agent Types
     */
    userAgentTypes?: pulumi.Input<pulumi.Input<string>[]>;
    userRiskScoreLevels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name-ID pairs of users for which rule must be applied
     */
    users?: pulumi.Input<inputs.UrlFilteringRulesUsers>;
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
    /**
     * The list of preconfigured workload groups to which the policy must be applied
     */
    workloadGroups?: pulumi.Input<pulumi.Input<inputs.UrlFilteringRulesWorkloadGroup>[]>;
}
