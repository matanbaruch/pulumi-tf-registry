// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface EmailIntegrationAcknowledgedAlertIdField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface EmailIntegrationAcknowledgedRule {
    /**
     * The content we should match to satisfy the rule. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * The type of the rule. Can be any of the following: contains, contains_not, matches_regex, matches_regex_not, equals, or equals_not.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The target of the rule. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    ruleTarget?: pulumi.Input<string>;
    /**
     * The target field within the content of the rule_target. Should be a JSON key when rule_target is json, a CSS selector when rule_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface EmailIntegrationCauseField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface EmailIntegrationOtherAcknowledgedField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface EmailIntegrationOtherResolvedField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface EmailIntegrationOtherStartedField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface EmailIntegrationResolvedAlertIdField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface EmailIntegrationResolvedRule {
    /**
     * The content we should match to satisfy the rule. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * The type of the rule. Can be any of the following: contains, contains_not, matches_regex, matches_regex_not, equals, or equals_not.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The target of the rule. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    ruleTarget?: pulumi.Input<string>;
    /**
     * The target field within the content of the rule_target. Should be a JSON key when rule_target is json, a CSS selector when rule_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface EmailIntegrationStartedAlertIdField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface EmailIntegrationStartedRule {
    /**
     * The content we should match to satisfy the rule. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * The type of the rule. Can be any of the following: contains, contains_not, matches_regex, matches_regex_not, equals, or equals_not.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The target of the rule. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    ruleTarget?: pulumi.Input<string>;
    /**
     * The target field within the content of the rule_target. Should be a JSON key when rule_target is json, a CSS selector when rule_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface IncomingWebhookAcknowledgedAlertIdField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface IncomingWebhookAcknowledgedRule {
    /**
     * The content we should match to satisfy the rule. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * The type of the rule. Can be any of the following: contains, contains_not, matches_regex, matches_regex_not, equals, or equals_not.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The target of the rule. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    ruleTarget?: pulumi.Input<string>;
    /**
     * The target field within the content of the rule_target. Should be a JSON key when rule_target is json, a CSS selector when rule_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface IncomingWebhookCauseField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface IncomingWebhookOtherAcknowledgedField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface IncomingWebhookOtherResolvedField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface IncomingWebhookOtherStartedField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface IncomingWebhookResolvedAlertIdField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface IncomingWebhookResolvedRule {
    /**
     * The content we should match to satisfy the rule. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * The type of the rule. Can be any of the following: contains, contains_not, matches_regex, matches_regex_not, equals, or equals_not.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The target of the rule. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    ruleTarget?: pulumi.Input<string>;
    /**
     * The target field within the content of the rule_target. Should be a JSON key when rule_target is json, a CSS selector when rule_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface IncomingWebhookStartedAlertIdField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface IncomingWebhookStartedRule {
    /**
     * The content we should match to satisfy the rule. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * The type of the rule. Can be any of the following: contains, contains_not, matches_regex, matches_regex_not, equals, or equals_not.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The target of the rule. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    ruleTarget?: pulumi.Input<string>;
    /**
     * The target field within the content of the rule_target. Should be a JSON key when rule_target is json, a CSS selector when rule_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface IncomingWebhookTitleField {
    /**
     * How should we extract content the field. Should be a valid Regex when match_type is match_regex.
     */
    content?: pulumi.Input<string>;
    /**
     * When should we start extracting content for the field. Should be present when match_type is either match_between or match_after.
     */
    contentAfter?: pulumi.Input<string>;
    /**
     * When should we stop extracting content for the field. Should be present when match_type is either match_between or match_before.
     */
    contentBefore?: pulumi.Input<string>;
    /**
     * The target of the field. Can be any of the following: from_email, subject, or body for email integrations or query_string, header, body, json and xml for incoming webhooks.
     */
    fieldTarget?: pulumi.Input<string>;
    /**
     * The match type of the field. Can be any of the following: match_before, match_after, match_between, match_regex, or match_everything.
     */
    matchType?: pulumi.Input<string>;
    /**
     * The name of the field.
     */
    name?: pulumi.Input<string>;
    /**
     * A special type of the field. Can be alert_id or cause or otherwise null for a custom field.
     */
    specialType?: pulumi.Input<string>;
    /**
     * The target field within the content of the field_target. Should be a JSON key when field_target is json, a CSS selector when field_target is XML, name of the header for headers or a parameter name for query parameters
     */
    targetField?: pulumi.Input<string>;
}

export interface PolicyStep {
    /**
     * An array of days during which the branching rule will be executed. Valid values are ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]. Used when step type is branching.
     */
    days?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A metadata field key to check. Used when step type is metadata_branching.
     */
    metadataKey?: pulumi.Input<string>;
    /**
     * An array of metadata values which will cause the branching rule to be executed. Used when step type is metadata_branching.
     */
    metadataValues?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A policy to executed if the branching rule matches the time of an incident. Used when step type is time_branching or metadata_branching.
     */
    policyId?: pulumi.Input<number>;
    /**
     * An array of escalation policy steps members. Used when step type is escalation.
     */
    stepMembers?: pulumi.Input<pulumi.Input<inputs.PolicyStepStepMember>[]>;
    /**
     * A time from which the branching rule will be executed. Use HH:MM format. Used when step type is time_branching.
     */
    timeFrom?: pulumi.Input<string>;
    /**
     * A time at which the branching rule will step being executed. Use HH:MM format. Used when step type is time_branching.
     */
    timeTo?: pulumi.Input<string>;
    /**
     * What timezone to use when evaluating time based branching rules. Used when step type is time_branching. The accepted values can be found in the Rails TimeZone documentation. https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html
     */
    timezone?: pulumi.Input<string>;
    /**
     * The type of the step. Can be either escalation, time_branching, or metadata_branching.
     */
    type: pulumi.Input<string>;
    /**
     * Which severity to use for this step. Used when step type is escalation.
     */
    urgencyId?: pulumi.Input<number>;
    /**
     * How long to wait before executing this step since previous step.
     */
    waitBefore: pulumi.Input<number>;
}

export interface PolicyStepStepMember {
    /**
     * The ID of the resource to notify during an incident. Required for user, webhook, slack_integration, microsoft_teams_integration and zapier_webhook member types. This is e.g. the ID of the user to notify when member type is user, or on-call calendar ID of when member type is current_on_call.
     */
    id?: pulumi.Input<number>;
    /**
     * The ID of the team to notify when member team is entire_team. When left empty, the default team for the incident is used. This field is deprecated, use id instead.
     *
     * @deprecated Deprecated
     */
    teamId?: pulumi.Input<number>;
    /**
     * Type type of the member to notify during an incident. Can be one of current_on_call, entire_team, all_slack_integrations, all_microsoft_teams_integrations, all_zapier_integrations, all_webhook_integrations, all_splunk_on_call_integrations, user, webhook, slack_integration, microsoft_teams_integration, zapier_webhook, pagerduty_integration.
     */
    type: pulumi.Input<string>;
}

export interface StatusPageResourceStatusHistory {
    day: pulumi.Input<string>;
    downtimeDuration: pulumi.Input<number>;
    maintenanceDuration: pulumi.Input<number>;
    status: pulumi.Input<string>;
}
