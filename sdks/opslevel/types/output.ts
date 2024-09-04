// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface CheckAlertSourceUsageAlertNamePredicate {
    /**
     * A condition that should be satisfied.
     */
    type: string;
    /**
     * The condition value used by the predicate.
     */
    value?: string;
}

export interface CheckManualUpdateFrequency {
    /**
     * The date that the check will start to evaluate.
     */
    startingDate: string;
    /**
     * The time scale type for the frequency. One of `day`, `week`, `month`, `year`
     */
    timeScale: string;
    /**
     * The value to be used together with the frequency time_scale.
     */
    value: number;
}

export interface CheckPackageVersionVersionConstraintPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: string;
    /**
     * The condition value used by the predicate.
     */
    value?: string;
}

export interface CheckRepositoryFileFileContentsPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: string;
    /**
     * The condition value used by the predicate.
     */
    value?: string;
}

export interface CheckRepositoryGrepFileContentsPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: string;
    /**
     * The condition value used by the predicate.
     */
    value?: string;
}

export interface CheckRepositorySearchFileContentsPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: string;
    /**
     * The condition value used by the predicate.
     */
    value?: string;
}

export interface CheckServiceOwnershipTagPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: string;
    /**
     * The condition value used by the predicate.
     */
    value?: string;
}

export interface CheckServicePropertyPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: string;
    /**
     * The condition value used by the predicate.
     */
    value?: string;
}

export interface CheckTagDefinedTagPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: string;
    /**
     * The condition value used by the predicate.
     */
    value?: string;
}

export interface CheckToolUsageEnvironmentPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: string;
    /**
     * The condition value used by the predicate.
     */
    value?: string;
}

export interface CheckToolUsageToolNamePredicate {
    /**
     * A condition that should be satisfied.
     */
    type: string;
    /**
     * The condition value used by the predicate.
     */
    value?: string;
}

export interface CheckToolUsageToolUrlPredicate {
    /**
     * A condition that should be satisfied.
     */
    type: string;
    /**
     * The condition value used by the predicate.
     */
    value?: string;
}

export interface FilterPredicate {
    /**
     * Option for determining whether to compare strings case-sensitively. Not settable for all predicate types.
     *
     * @deprecated Deprecated
     */
    caseInsensitive: boolean;
    /**
     * Option for determining whether to compare strings case-sensitively. Not settable for all predicate types.
     */
    caseSensitive: boolean;
    /**
     * The condition key used by the predicate. Valid values are `tier_index`, `lifecycle_index`, `language`, `framework`, `product`, `name`, `tags`, `owner_id`, `group_ids`, `owner_ids`, `creation_source`, `repository_ids`, `filter_id`, `properties`, `aliases`, `domain_id`, `system_id`
     */
    key: string;
    /**
     * Additional data used by the predicate. This field is used by predicates with key = 'tags' to specify the tag key. For example, to create a predicate for services containing the tag 'db:mysql', set key_data = 'db' and value = 'mysql'.
     */
    keyData?: string;
    /**
     * The condition type used by the predicate. Valid values are `contains`, `does_not_contain`, `does_not_equal`, `does_not_exist`, `ends_with`, `equals`, `exists`, `greater_than_or_equal_to`, `less_than_or_equal_to`, `starts_with`, `satisfies_version_constraint`, `matches_regex`, `does_not_match_regex`, `belongs_to`, `matches`, `does_not_match`, `satisfies_jq_expression`
     */
    type: string;
    /**
     * The condition value used by the predicate.
     */
    value?: string;
}

export interface GetDomainsDomain {
    /**
     * The aliases of the domain.
     */
    aliases: string[];
    /**
     * The description of the domain.
     */
    description: string;
    /**
     * The ID of this Doamin
     */
    id: string;
    /**
     * The name of the domain.
     */
    name: string;
    /**
     * The id of the domain owner (team)
     */
    owner: string;
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

export interface GetFiltersFilter {
    /**
     * The ID of this filter.
     */
    id: string;
    /**
     * The name of the filter.
     */
    name: string;
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

export interface GetIntegrationsIntegration {
    /**
     * The ID of this Integration.
     */
    id: string;
    /**
     * The name of the Integration.
     */
    name: string;
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

export interface GetLifecyclesLifecycle {
    /**
     * The alias attached to the Lifecycle.
     */
    alias: string;
    /**
     * The unique identifier for the Lifecycle.
     */
    id: string;
    /**
     * The numerical representation of the Lifecycle.
     */
    index: number;
    /**
     * The name of the Lifecycle.
     */
    name: string;
}

export interface GetPropertyDefinitionsPropertyDefinition {
    /**
     * The description of the property definition.
     */
    description: string;
    /**
     * The ID of this resource.
     */
    id: string;
    /**
     * The display name of the property definition.
     */
    name: string;
    /**
     * The display status of a custom property on service pages. (Options: 'visible' or 'hidden')
     */
    propertyDisplayStatus: string;
    /**
     * The schema of the property definition.
     */
    schema: string;
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

export interface GetRepositoriesRepository {
    /**
     * The human-friendly, unique identifier for the repository.
     */
    alias: string;
    /**
     * The unique identifier for the repository.
     */
    id: string;
    /**
     * The list of programming languages used in the repository.
     */
    languages: outputs.GetRepositoriesRepositoryLanguage[];
    /**
     * The display name of the repository.
     */
    name: string;
    /**
     * The url of the the repository.
     */
    url: string;
}

export interface GetRepositoriesRepositoryLanguage {
    name?: string;
    usage?: number;
}

export interface GetRepositoryLanguage {
    name?: string;
    usage?: number;
}

export interface GetRubricCategoriesRubricCategory {
    /**
     * The ID of this resource.
     */
    id: string;
    /**
     * The name of the rubric category.
     */
    name: string;
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

export interface GetRubricLevelsRubricLevel {
    /**
     * An alias of the rubric level to find by.
     */
    alias: string;
    /**
     * The ID of this resource.
     */
    id: string;
    /**
     * An integer allowing this level to be inserted between others.
     */
    index: number;
    /**
     * The display name of the rubric level.
     */
    name: string;
}

export interface GetScorecardCategory {
    /**
     * The ID of this resource.
     */
    id: string;
    /**
     * The name of the rubric category.
     */
    name: string;
}

export interface GetScorecardsScorecard {
    /**
     * Specifies whether the checks on this scorecard affect services' overall maturity level.
     */
    affectsOverallServiceLevels: boolean;
    /**
     * The scorecard's aliases.
     */
    aliases: string[];
    /**
     * The scorecard's rubric categories.
     */
    categories: outputs.GetScorecardsScorecardCategory[];
    /**
     * The scorecard's description.
     */
    description: string;
    /**
     * The scorecard's filter.
     */
    filterId: string;
    /**
     * The ID of this resource.
     */
    id: string;
    /**
     * The scorecard's name.
     */
    name: string;
    /**
     * The scorecard's owner id.
     */
    ownerId: string;
    /**
     * The scorecard's number of checks that are passing.
     */
    passingChecks: number;
    /**
     * The scorecard's number of services matched.
     */
    serviceCount: number;
    /**
     * The scorecard's total number of checks.
     */
    totalChecks: number;
}

export interface GetScorecardsScorecardCategory {
    /**
     * The ID of this resource.
     */
    id: string;
    /**
     * The name of the rubric category.
     */
    name: string;
}

export interface GetServiceDependenciesDependency {
    /**
     * The ID of the service dependency.
     */
    id: string;
    /**
     * Is the dependency locked by a service config?
     */
    locked: boolean;
    /**
     * Notes for service dependency.
     */
    notes?: string;
}

export interface GetServiceDependenciesDependent {
    /**
     * The ID of the service dependency.
     */
    id: string;
    /**
     * Is the dependency locked by a service config?
     */
    locked: boolean;
    /**
     * Notes for service dependency.
     */
    notes?: string;
}

export interface GetServiceProperty {
    definition: outputs.GetServicePropertyDefinition;
    /**
     * The value of the custom property.
     */
    value: string;
}

export interface GetServicePropertyDefinition {
    /**
     * A list of human-friendly, unique identifiers of the property definition.
     */
    aliases: string[];
    /**
     * The id of the property definition.
     */
    id: string;
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

export interface GetServicesService {
    /**
     * The id of the service
     */
    id: string;
    /**
     * The display name of the service.
     */
    name: string;
    /**
     * A link to the HTML page for the resource
     */
    url: string;
}

export interface GetSystemsSystem {
    /**
     * All of the aliases attached to the System.
     */
    aliases: string[];
    /**
     * The description of the System.
     */
    description: string;
    /**
     * ID of the parent domain of the System.
     */
    domain: string;
    /**
     * The ID of this System.
     */
    id: string;
    /**
     * The name of the System.
     */
    name: string;
    /**
     * The id of the team that owns the System.
     */
    owner: string;
}

export interface GetTeamContact {
    /**
     * The contact address. Examples: 'support@company.com' for type email, 'https://opslevel.com' for type web.
     */
    address: string;
    /**
     * The name shown in the UI for the contact.
     */
    displayName: string;
    /**
     * The type shown in the UI for the contact.
     */
    displayType: string;
    /**
     * The remote identifier of the contact method.
     */
    externalId: string;
    /**
     * The unique identifier for the contact.
     */
    id: string;
    /**
     * Indicates if this address is a team's default for the given type.
     */
    isDefault: boolean;
    /**
     * The method of contact. One of [`slack`, `slack_handle`, `email`, `web`, `github`].
     */
    type: string;
}

export interface GetTeamMember {
    /**
     * The email address of the team member.
     */
    email: string;
    /**
     * The role of the team member.
     */
    role: string;
}

export interface GetTeamsTeam {
    /**
     * The alias attached to the Team.
     */
    alias: string;
    /**
     * The contacts for the team.
     */
    contacts: outputs.GetTeamsTeamContact[];
    /**
     * The ID of this Team.
     */
    id: string;
    /**
     * List of team members on the team with email address and role.
     */
    members: outputs.GetTeamsTeamMember[];
    /**
     * The name of the Team.
     */
    name: string;
    /**
     * The alias of the parent team.
     */
    parentAlias: string;
    /**
     * The id of the parent team.
     */
    parentId: string;
}

export interface GetTeamsTeamContact {
    /**
     * The contact address. Examples: 'support@company.com' for type email, 'https://opslevel.com' for type web.
     */
    address: string;
    /**
     * The name shown in the UI for the contact.
     */
    displayName: string;
    /**
     * The type shown in the UI for the contact.
     */
    displayType: string;
    /**
     * The remote identifier of the contact method.
     */
    externalId: string;
    /**
     * The unique identifier for the contact.
     */
    id: string;
    /**
     * Indicates if this address is a team's default for the given type.
     */
    isDefault: boolean;
    /**
     * The method of contact. One of [`slack`, `slack_handle`, `email`, `web`, `github`].
     */
    type: string;
}

export interface GetTeamsTeamMember {
    /**
     * The email address of the team member.
     */
    email: string;
    /**
     * The role of the team member.
     */
    role: string;
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

export interface GetTiersTier {
    /**
     * The human-friendly, unique identifier for the tier.
     */
    alias: string;
    /**
     * The unique identifier for the tier.
     */
    id: string;
    /**
     * The numerical representation of the tier.
     */
    index: number;
    /**
     * The display name of the tier.
     */
    name: string;
}

export interface GetUsersUser {
    /**
     * The email of the user.
     */
    email: string;
    /**
     * The unique identifier for the user.
     */
    id: string;
    /**
     * The name of the user.
     */
    name: string;
    /**
     * The user's assigned role.
     */
    role: string;
}

export interface GetWebhookActionsWebhookAction {
    /**
     * The aliases of the Webhook Action.
     */
    aliases: string[];
    /**
     * The description of the Webhook Action.
     */
    description: string;
    /**
     * HTTP headers to be passed along with your webhook when triggered.
     */
    headers: {[key: string]: string};
    /**
     * The ID of the Webhook Action.
     */
    id: string;
    /**
     * The http method used to call the Webhook Action.
     */
    method: string;
    /**
     * The name of the Webhook Action.
     */
    name: string;
    /**
     * Template that can be used to generate a webhook payload.
     */
    payload: string;
    /**
     * The URL of the Webhook Action.
     */
    url: string;
}

export interface InfrastructureProviderData {
    /**
     * The canonical account name for the provider of the infrastructure resource.
     */
    account: string;
    /**
     * The name of the provider of the infrastructure resource. (eg. AWS, GCP, Azure)
     */
    name?: string;
    /**
     * The type of the infrastructure resource as defined by its provider.
     */
    type?: string;
    /**
     * The url for the provider of the infrastructure resource.
     */
    url?: string;
}

export interface IntegrationGoogleCloudProject {
    id: string;
    name: string;
    url: string;
}

export interface TeamMember {
    /**
     * The email address of the team member. Must be sorted by email address.
     */
    email: string;
    /**
     * The role of the team member.
     */
    role: string;
}

