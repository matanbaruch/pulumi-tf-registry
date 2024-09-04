// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface SettingValuePercentageItem {
    /**
     * Any [number](https://configcat.com/docs/advanced/targeting/#-value) between 0 and 100 that represents a randomly allocated fraction of your users.
     */
    percentage: pulumi.Input<string>;
    /**
     * The exact [value](https://configcat.com/docs/advanced/targeting/#served-value-1) that will be served to the users that fall into that fraction. Type: `string`. It must be compatible with the `setting_type`.
     */
    value: pulumi.Input<string>;
}

export interface SettingValueRolloutRule {
    /**
     * The [comparator](https://configcat.com/docs/advanced/targeting/#comparator).
     */
    comparator?: pulumi.Input<string>;
    /**
     * The [comparison attribute](https://configcat.com/docs/advanced/targeting/#comparison-attribute).
     */
    comparisonAttribute?: pulumi.Input<string>;
    /**
     * The [comparison value](https://configcat.com/docs/advanced/targeting/#comparison-value).
     */
    comparisonValue?: pulumi.Input<string>;
    /**
     * The segment_comparator. Possible values: isIn, isNotIn.
     */
    segmentComparator?: pulumi.Input<string>;
    /**
     * The [Segment's](https://configcat.com/docs/advanced/segments) unique identifier.
     */
    segmentId?: pulumi.Input<string>;
    /**
     * The exact [value](https://configcat.com/docs/advanced/targeting/#served-value) that will be served to the users who match the targeting rule. Type: `string`. It must be compatible with the `setting_type`.
     */
    value: pulumi.Input<string>;
}

export interface SettingValueV2TargetingRule {
    /**
     * The conditions that are combined with the AND logical operator.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.SettingValueV2TargetingRuleCondition>[]>;
    /**
     * The percentage options from where the evaluation process will choose a value based on the flag's percentage evaluation attribute.
     */
    percentageOptions?: pulumi.Input<pulumi.Input<inputs.SettingValueV2TargetingRulePercentageOption>[]>;
    /**
     * Represents the value of a Feature Flag or Setting.
     */
    value?: pulumi.Input<inputs.SettingValueV2TargetingRuleValue>;
}

export interface SettingValueV2TargetingRuleCondition {
    /**
     * Describes a condition that is based on a prerequisite flag.
     */
    prerequisiteFlagCondition?: pulumi.Input<inputs.SettingValueV2TargetingRuleConditionPrerequisiteFlagCondition>;
    /**
     * Describes a condition that is based on a segment.
     */
    segmentCondition?: pulumi.Input<inputs.SettingValueV2TargetingRuleConditionSegmentCondition>;
    /**
     * Describes a condition that is based on user attributes.
     */
    userCondition?: pulumi.Input<inputs.SettingValueV2TargetingRuleConditionUserCondition>;
}

export interface SettingValueV2TargetingRuleConditionPrerequisiteFlagCondition {
    /**
     * Prerequisite flag comparison operator used during the evaluation process. Possible values: `equals`,`doesNotEqual`
     */
    comparator: pulumi.Input<string>;
    /**
     * Represents the value of a Feature Flag or Setting.
     */
    comparisonValue: pulumi.Input<inputs.SettingValueV2TargetingRuleConditionPrerequisiteFlagConditionComparisonValue>;
    /**
     * The prerequisite flag's identifier.
     */
    prerequisiteSettingId: pulumi.Input<string>;
}

export interface SettingValueV2TargetingRuleConditionPrerequisiteFlagConditionComparisonValue {
    /**
     * The boolean representation of the value.
     */
    boolValue?: pulumi.Input<boolean>;
    /**
     * The decimal number representation of the value.
     */
    doubleValue?: pulumi.Input<number>;
    /**
     * The whole number representation of the value.
     */
    intValue?: pulumi.Input<number>;
    /**
     * The string representation of the value.
     */
    stringValue?: pulumi.Input<string>;
}

export interface SettingValueV2TargetingRuleConditionSegmentCondition {
    /**
     * The segment comparison operator used during the evaluation process. Possible values: `isIn`,`isNotIn`
     */
    comparator: pulumi.Input<string>;
    /**
     * The segment's identifier.
     */
    segmentId: pulumi.Input<string>;
}

export interface SettingValueV2TargetingRuleConditionUserCondition {
    /**
     * The comparison operator which defines the relation between the comparison attribute and the comparison value. For possible values check the [documentation](https://api.configcat.com/docs/index.html#tag/Feature-Flag-and-Setting-values-V2/operation/replace-setting-value-v2).
     */
    comparator: pulumi.Input<string>;
    /**
     * The User Object attribute that the condition is based on.
     */
    comparisonAttribute: pulumi.Input<string>;
    /**
     * The value that the user object's attribute is compared to.
     */
    comparisonValue: pulumi.Input<inputs.SettingValueV2TargetingRuleConditionUserConditionComparisonValue>;
}

export interface SettingValueV2TargetingRuleConditionUserConditionComparisonValue {
    /**
     * The number representation of the comparison value.
     */
    doubleValue?: pulumi.Input<number>;
    /**
     * The list representation of the comparison value.
     */
    listValues?: pulumi.Input<pulumi.Input<inputs.SettingValueV2TargetingRuleConditionUserConditionComparisonValueListValue>[]>;
    /**
     * The string representation of the comparison value.
     */
    stringValue?: pulumi.Input<string>;
}

export interface SettingValueV2TargetingRuleConditionUserConditionComparisonValueListValue {
    /**
     * An optional hint for the comparison value.
     */
    hint?: pulumi.Input<string>;
    /**
     * The actual comparison value.
     */
    value: pulumi.Input<string>;
}

export interface SettingValueV2TargetingRulePercentageOption {
    /**
     * A number between 0 and 100 that represents a randomly allocated fraction of the users.
     */
    percentage: pulumi.Input<number>;
    /**
     * Represents the value of a Feature Flag or Setting.
     */
    value: pulumi.Input<inputs.SettingValueV2TargetingRulePercentageOptionValue>;
}

export interface SettingValueV2TargetingRulePercentageOptionValue {
    /**
     * The boolean representation of the value.
     */
    boolValue?: pulumi.Input<boolean>;
    /**
     * The decimal number representation of the value.
     */
    doubleValue?: pulumi.Input<number>;
    /**
     * The whole number representation of the value.
     */
    intValue?: pulumi.Input<number>;
    /**
     * The string representation of the value.
     */
    stringValue?: pulumi.Input<string>;
}

export interface SettingValueV2TargetingRuleValue {
    /**
     * The boolean representation of the value.
     */
    boolValue?: pulumi.Input<boolean>;
    /**
     * The decimal number representation of the value.
     */
    doubleValue?: pulumi.Input<number>;
    /**
     * The whole number representation of the value.
     */
    intValue?: pulumi.Input<number>;
    /**
     * The string representation of the value.
     */
    stringValue?: pulumi.Input<string>;
}

export interface SettingValueV2Value {
    /**
     * The boolean representation of the value.
     */
    boolValue?: pulumi.Input<boolean>;
    /**
     * The decimal number representation of the value.
     */
    doubleValue?: pulumi.Input<number>;
    /**
     * The whole number representation of the value.
     */
    intValue?: pulumi.Input<number>;
    /**
     * The string representation of the value.
     */
    stringValue?: pulumi.Input<string>;
}

export interface WebhookSecureWebhookHeader {
    /**
     * The HTTP header key.
     */
    key: pulumi.Input<string>;
    /**
     * The HTTP header value.
     */
    value: pulumi.Input<string>;
}

export interface WebhookWebhookHeader {
    /**
     * The HTTP header key.
     */
    key: pulumi.Input<string>;
    /**
     * The HTTP header value.
     */
    value: pulumi.Input<string>;
}
