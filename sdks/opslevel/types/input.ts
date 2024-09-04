// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface CheckAlertSourceUsageAlertNamePredicate {
    /**
     * A condition that should be satisfied.
     */
    type: pulumi.Input<string>;
    /**
     * The condition value used by the predicate.
     */
    value?: pulumi.Input<string>;
}

export interface CheckManualUpdateFrequency {
    /**
     * The date that the check will start to evaluate.
     */
    startingDate: pulumi.Input<string>;
    /**
     * The time scale type for the frequency. One of `day`, `week`, `month`, `year`
     */
    timeScale: pulumi.Input<string>;
    /**
     * The value to be used together with the frequency time_scale.
     */
    value: pulumi.Input<number>;
}

export interface CheckPackageVersionVersionConstraintPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: pulumi.Input<string>;
    /**
     * The condition value used by the predicate.
     */
    value?: pulumi.Input<string>;
}

export interface CheckRepositoryFileFileContentsPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: pulumi.Input<string>;
    /**
     * The condition value used by the predicate.
     */
    value?: pulumi.Input<string>;
}

export interface CheckRepositoryGrepFileContentsPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: pulumi.Input<string>;
    /**
     * The condition value used by the predicate.
     */
    value?: pulumi.Input<string>;
}

export interface CheckRepositorySearchFileContentsPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: pulumi.Input<string>;
    /**
     * The condition value used by the predicate.
     */
    value?: pulumi.Input<string>;
}

export interface CheckServiceOwnershipTagPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: pulumi.Input<string>;
    /**
     * The condition value used by the predicate.
     */
    value?: pulumi.Input<string>;
}

export interface CheckServicePropertyPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: pulumi.Input<string>;
    /**
     * The condition value used by the predicate.
     */
    value?: pulumi.Input<string>;
}

export interface CheckTagDefinedTagPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: pulumi.Input<string>;
    /**
     * The condition value used by the predicate.
     */
    value?: pulumi.Input<string>;
}

export interface CheckToolUsageEnvironmentPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: pulumi.Input<string>;
    /**
     * The condition value used by the predicate.
     */
    value?: pulumi.Input<string>;
}

export interface CheckToolUsageToolNamePredicate {
    /**
     * A condition that should be satisfied.
     */
    type: pulumi.Input<string>;
    /**
     * The condition value used by the predicate.
     */
    value?: pulumi.Input<string>;
}

export interface CheckToolUsageToolUrlPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: pulumi.Input<string>;
    /**
     * The condition value used by the predicate.
     */
    value?: pulumi.Input<string>;
}

export interface FilterPredicate {
    /**
     * Option for determining whether to compare strings case-sensitively. Not settable for all predicate types.
     *
     * @deprecated Deprecated
     */
    caseInsensitive?: pulumi.Input<boolean>;
    /**
     * Option for determining whether to compare strings case-sensitively. Not settable for all predicate types.
     */
    caseSensitive?: pulumi.Input<boolean>;
    /**
     * The condition key used by the predicate. Valid values are `tier_index`, `lifecycle_index`, `language`, `framework`, `product`, `name`, `tags`, `owner_id`, `group_ids`, `owner_ids`, `creation_source`, `repository_ids`, `filter_id`, `properties`, `aliases`, `domain_id`, `system_id`
     */
    key: pulumi.Input<string>;
    /**
     * Additional data used by the predicate. This field is used by predicates with key = 'tags' to specify the tag key. For example, to create a predicate for services containing the tag 'db:mysql', set key_data = 'db' and value = 'mysql'.
     */
    keyData?: pulumi.Input<string>;
    /**
     * The condition type used by the predicate. Valid values are `contains`, `does_not_contain`, `does_not_equal`, `does_not_exist`, `ends_with`, `equals`, `exists`, `greater_than_or_equal_to`, `less_than_or_equal_to`, `starts_with`, `satisfies_version_constraint`, `matches_regex`, `does_not_match_regex`, `belongs_to`, `matches`, `does_not_match`, `satisfies_jq_expression`
     */
    type: pulumi.Input<string>;
    /**
     * The condition value used by the predicate.
     */
    value?: pulumi.Input<string>;
}

export interface GetFilterFilter {
    /**
     * The field of the target resource to filter upon. One of `id`, `name`
     */
    field: string;
    /**
     * The field value of the target resource to match.
     */
    value: string;
}

export interface GetFilterFilterArgs {
    /**
     * The field of the target resource to filter upon. One of `id`, `name`
     */
    field: pulumi.Input<string>;
    /**
     * The field value of the target resource to match.
     */
    value: pulumi.Input<string>;
}

export interface GetIntegrationFilter {
    /**
     * The field of the target resource to filter upon. One of `id`, `name`
     */
    field: string;
    /**
     * The field value of the target resource to match.
     */
    value: string;
}

export interface GetIntegrationFilterArgs {
    /**
     * The field of the target resource to filter upon. One of `id`, `name`
     */
    field: pulumi.Input<string>;
    /**
     * The field value of the target resource to match.
     */
    value: pulumi.Input<string>;
}

export interface GetLifecycleFilter {
    /**
     * The field of the target resource to filter upon. One of `alias`, `id`, `index`, `name`
     */
    field: string;
    /**
     * The field value of the target resource to match.
     */
    value: string;
}

export interface GetLifecycleFilterArgs {
    /**
     * The field of the target resource to filter upon. One of `alias`, `id`, `index`, `name`
     */
    field: pulumi.Input<string>;
    /**
     * The field value of the target resource to match.
     */
    value: pulumi.Input<string>;
}

export interface GetRepositoriesFilter {
    /**
     * The field of the target resource to filter upon. One of `tier`
     */
    field: string;
    /**
     * The field value of the target resource to match.
     */
    value: string;
}

export interface GetRepositoriesFilterArgs {
    /**
     * The field of the target resource to filter upon. One of `tier`
     */
    field: pulumi.Input<string>;
    /**
     * The field value of the target resource to match.
     */
    value: pulumi.Input<string>;
}

export interface GetRubricCategoryFilter {
    /**
     * The field of the target resource to filter upon. One of `id`, `name`
     */
    field: string;
    /**
     * The field value of the target resource to match.
     */
    value: string;
}

export interface GetRubricCategoryFilterArgs {
    /**
     * The field of the target resource to filter upon. One of `id`, `name`
     */
    field: pulumi.Input<string>;
    /**
     * The field value of the target resource to match.
     */
    value: pulumi.Input<string>;
}

export interface GetRubricLevelFilter {
    /**
     * The field of the target resource to filter upon. One of `alias`, `id`, `index`, `name`
     */
    field: string;
    /**
     * The field value of the target resource to match.
     */
    value: string;
}

export interface GetRubricLevelFilterArgs {
    /**
     * The field of the target resource to filter upon. One of `alias`, `id`, `index`, `name`
     */
    field: pulumi.Input<string>;
    /**
     * The field value of the target resource to match.
     */
    value: pulumi.Input<string>;
}

export interface GetServicesFilter {
    /**
     * The field of the target resource to filter upon. One of `filter`, `framework`, `language`, `lifecycle`, `owner`, `product`, `tag`, `tier`
     */
    field: string;
    /**
     * The field value of the target resource to match.
     */
    value: string;
}

export interface GetServicesFilterArgs {
    /**
     * The field of the target resource to filter upon. One of `filter`, `framework`, `language`, `lifecycle`, `owner`, `product`, `tag`, `tier`
     */
    field: pulumi.Input<string>;
    /**
     * The field value of the target resource to match.
     */
    value: pulumi.Input<string>;
}

export interface GetTierFilter {
    /**
     * The field of the target resource to filter upon. One of `alias`, `id`, `index`, `name`
     */
    field: string;
    /**
     * The field value of the target resource to match.
     */
    value: string;
}

export interface GetTierFilterArgs {
    /**
     * The field of the target resource to filter upon. One of `alias`, `id`, `index`, `name`
     */
    field: pulumi.Input<string>;
    /**
     * The field value of the target resource to match.
     */
    value: pulumi.Input<string>;
}

export interface InfrastructureProviderData {
    /**
     * The canonical account name for the provider of the infrastructure resource.
     */
    account: pulumi.Input<string>;
    /**
     * The name of the provider of the infrastructure resource. (eg. AWS, GCP, Azure)
     */
    name?: pulumi.Input<string>;
    /**
     * The type of the infrastructure resource as defined by its provider.
     */
    type?: pulumi.Input<string>;
    /**
     * The url for the provider of the infrastructure resource.
     */
    url?: pulumi.Input<string>;
}

export interface IntegrationGoogleCloudProject {
    id: pulumi.Input<string>;
    name: pulumi.Input<string>;
    url: pulumi.Input<string>;
}

export interface TeamMember {
    /**
     * The email address of the team member. Must be sorted by email address.
     */
    email: pulumi.Input<string>;
    /**
     * The role of the team member.
     */
    role: pulumi.Input<string>;
}
