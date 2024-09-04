// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ComplexPolicyBenchmarks {
    cisAwsV12s?: pulumi.Input<pulumi.Input<string>[]>;
    cisAwsV13s?: pulumi.Input<pulumi.Input<string>[]>;
    cisAzureV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisAzureV12s?: pulumi.Input<pulumi.Input<string>[]>;
    cisAzureV13s?: pulumi.Input<pulumi.Input<string>[]>;
    cisDockerV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisEksV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisGcpV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisGkeV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisKubernetesV15s?: pulumi.Input<pulumi.Input<string>[]>;
    cisKubernetesV16s?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ComplexPolicyConditionquery {
    /**
     * Conditions captures the actual check logic. Do not add resource_types and an or statement in the same block
     */
    ands: pulumi.Input<pulumi.Input<inputs.ComplexPolicyConditionqueryAnd>[]>;
}

export interface ComplexPolicyConditionqueryAnd {
    /**
     * The field that you want the condition on
     */
    attribute?: pulumi.Input<string>;
    condType?: pulumi.Input<string>;
    /**
     * The logic operator
     */
    operator?: pulumi.Input<string>;
    /**
     * Conditions captures the actual check logic
     */
    ors?: pulumi.Input<pulumi.Input<inputs.ComplexPolicyConditionqueryAndOr>[]>;
    /**
     * The resource type
     */
    resourceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The value to check against
     */
    value?: pulumi.Input<string>;
}

export interface ComplexPolicyConditionqueryAndOr {
    /**
     * The field that you want the condition on
     */
    attribute: pulumi.Input<string>;
    condType: pulumi.Input<string>;
    /**
     * The logic operator
     */
    operator: pulumi.Input<string>;
    /**
     * The resource type
     */
    resourceTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Value to check
     */
    value: pulumi.Input<string>;
}

export interface EnforcementRuleCodeCategory {
    iacs: pulumi.Input<pulumi.Input<inputs.EnforcementRuleCodeCategoryIac>[]>;
    images: pulumi.Input<pulumi.Input<inputs.EnforcementRuleCodeCategoryImage>[]>;
    openSources: pulumi.Input<pulumi.Input<inputs.EnforcementRuleCodeCategoryOpenSource>[]>;
    secrets: pulumi.Input<pulumi.Input<inputs.EnforcementRuleCodeCategorySecret>[]>;
    supplyChains: pulumi.Input<pulumi.Input<inputs.EnforcementRuleCodeCategorySupplyChain>[]>;
}

export interface EnforcementRuleCodeCategoryIac {
    commentsBotThreshold: pulumi.Input<string>;
    hardFailThreshold: pulumi.Input<string>;
    softFailThreshold: pulumi.Input<string>;
}

export interface EnforcementRuleCodeCategoryImage {
    commentsBotThreshold: pulumi.Input<string>;
    hardFailThreshold: pulumi.Input<string>;
    softFailThreshold: pulumi.Input<string>;
}

export interface EnforcementRuleCodeCategoryOpenSource {
    commentsBotThreshold: pulumi.Input<string>;
    hardFailThreshold: pulumi.Input<string>;
    softFailThreshold: pulumi.Input<string>;
}

export interface EnforcementRuleCodeCategorySecret {
    commentsBotThreshold: pulumi.Input<string>;
    hardFailThreshold: pulumi.Input<string>;
    softFailThreshold: pulumi.Input<string>;
}

export interface EnforcementRuleCodeCategorySupplyChain {
    commentsBotThreshold: pulumi.Input<string>;
    hardFailThreshold: pulumi.Input<string>;
    softFailThreshold: pulumi.Input<string>;
}

export interface EnforcementRuleRepository {
    accountId: pulumi.Input<string>;
    accountName: pulumi.Input<string>;
}

export interface GetEnforcementRulesAccountsnotinmainrule {
    accountId: string;
    accountName: string;
}

export interface GetEnforcementRulesAccountsnotinmainruleArgs {
    accountId: pulumi.Input<string>;
    accountName: pulumi.Input<string>;
}

export interface GetMappingsGuideline {
    check: string;
    guideline: string;
}

export interface GetMappingsGuidelineArgs {
    check: pulumi.Input<string>;
    guideline: pulumi.Input<string>;
}

export interface GetMappingsIdmapping {
    bcid: string;
    checkovid: string;
}

export interface GetMappingsIdmappingArgs {
    bcid: pulumi.Input<string>;
    checkovid: pulumi.Input<string>;
}

export interface PolicyBenchmarks {
    cisAwsV12s?: pulumi.Input<pulumi.Input<string>[]>;
    cisAwsV13s?: pulumi.Input<pulumi.Input<string>[]>;
    cisAzureV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisAzureV12s?: pulumi.Input<pulumi.Input<string>[]>;
    cisAzureV13s?: pulumi.Input<pulumi.Input<string>[]>;
    cisDockerV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisEksV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisGcpV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisGkeV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisKubernetesV15s?: pulumi.Input<pulumi.Input<string>[]>;
    cisKubernetesV16s?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface SimplePolicyBenchmarks {
    cisAwsV12s?: pulumi.Input<pulumi.Input<string>[]>;
    cisAwsV13s?: pulumi.Input<pulumi.Input<string>[]>;
    cisAzureV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisAzureV12s?: pulumi.Input<pulumi.Input<string>[]>;
    cisAzureV13s?: pulumi.Input<pulumi.Input<string>[]>;
    cisDockerV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisEksV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisGcpV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisGkeV11s?: pulumi.Input<pulumi.Input<string>[]>;
    cisKubernetesV15s?: pulumi.Input<pulumi.Input<string>[]>;
    cisKubernetesV16s?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface SimplePolicyConditions {
    /**
     * The field that you want the condition on
     */
    attribute: pulumi.Input<string>;
    condType: pulumi.Input<string>;
    /**
     * The logic Operator
     */
    operator: pulumi.Input<string>;
    /**
     * The resource type
     */
    resourceTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Value to Check
     */
    value: pulumi.Input<string>;
}

export interface TagDefinition {
    /**
     * Tag group
     */
    tagGroups: pulumi.Input<pulumi.Input<inputs.TagDefinitionTagGroup>[]>;
}

export interface TagDefinitionTagGroup {
    /**
     * Tag group name
     */
    name: pulumi.Input<string>;
    tags: pulumi.Input<inputs.TagDefinitionTagGroupTags>;
}

export interface TagDefinitionTagGroupTags {
    name: pulumi.Input<string>;
    value: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
