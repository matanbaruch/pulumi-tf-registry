// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface AssessmentDataSyncStatus {
    entitiesWithPermissionIssues: pulumi.Input<pulumi.Input<inputs.AssessmentDataSyncStatusEntitiesWithPermissionIssue>[]>;
    entityType: pulumi.Input<string>;
    generalFetchPermissionIssues: pulumi.Input<boolean>;
    recentlySuccessfulSync: pulumi.Input<boolean>;
}

export interface AssessmentDataSyncStatusEntitiesWithPermissionIssue {
    cloudVendorIdentifier: pulumi.Input<string>;
    externalId: pulumi.Input<string>;
    name: pulumi.Input<string>;
}

export interface AssessmentExclusion {
    cloudAccountIds: pulumi.Input<pulumi.Input<string>[]>;
    comment: pulumi.Input<string>;
    dateRanges: pulumi.Input<pulumi.Input<inputs.AssessmentExclusionDateRange>[]>;
    id: pulumi.Input<number>;
    logicExpressions: pulumi.Input<pulumi.Input<string>[]>;
    organizationalUnitIds: pulumi.Input<pulumi.Input<string>[]>;
    platform: pulumi.Input<string>;
    rules: pulumi.Input<pulumi.Input<inputs.AssessmentExclusionRule>[]>;
    rulesetId: pulumi.Input<number>;
}

export interface AssessmentExclusionDateRange {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface AssessmentExclusionRule {
    id: pulumi.Input<number>;
    logicHash: pulumi.Input<string>;
    name: pulumi.Input<string>;
}

export interface AssessmentRemediation {
    cloudAccountIds: pulumi.Input<pulumi.Input<string>[]>;
    cloudBots: pulumi.Input<pulumi.Input<string>[]>;
    comment: pulumi.Input<string>;
    dateRanges: pulumi.Input<pulumi.Input<inputs.AssessmentRemediationDateRange>[]>;
    id: pulumi.Input<number>;
    logicExpressions: pulumi.Input<pulumi.Input<string>[]>;
    organizationalUnitIds: pulumi.Input<pulumi.Input<string>[]>;
    platform: pulumi.Input<string>;
    rules: pulumi.Input<pulumi.Input<inputs.AssessmentRemediationRule>[]>;
    rulesetId: pulumi.Input<number>;
}

export interface AssessmentRemediationDateRange {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface AssessmentRemediationRule {
    id: pulumi.Input<number>;
    logicHash: pulumi.Input<string>;
    name: pulumi.Input<string>;
}

export interface AssessmentRequest {
    cloudAccountId: pulumi.Input<string>;
    cloudAccountType: pulumi.Input<string>;
    description: pulumi.Input<string>;
    dome9CloudAccountId: pulumi.Input<string>;
    externalCloudAccountId: pulumi.Input<string>;
    id: pulumi.Input<number>;
    isTemplate: pulumi.Input<boolean>;
    name: pulumi.Input<string>;
    requestId: pulumi.Input<string>;
    shouldMinimizeResult: pulumi.Input<boolean>;
}

export interface AssessmentStat {
    error: pulumi.Input<number>;
    excludedFailedTests: pulumi.Input<number>;
    excludedRules: pulumi.Input<number>;
    excludedRulesBySeverities: pulumi.Input<pulumi.Input<inputs.AssessmentStatExcludedRulesBySeverity>[]>;
    excludedTests: pulumi.Input<number>;
    failed: pulumi.Input<number>;
    failedEntities: pulumi.Input<number>;
    failedRulesBySeverities: pulumi.Input<pulumi.Input<inputs.AssessmentStatFailedRulesBySeverity>[]>;
    failedTests: pulumi.Input<number>;
    logicallyTested: pulumi.Input<number>;
    passed: pulumi.Input<number>;
    passedRulesBySeverities: pulumi.Input<pulumi.Input<inputs.AssessmentStatPassedRulesBySeverity>[]>;
}

export interface AssessmentStatExcludedRulesBySeverity {
    critical: pulumi.Input<number>;
    high: pulumi.Input<number>;
    informational: pulumi.Input<number>;
    low: pulumi.Input<number>;
    medium: pulumi.Input<number>;
}

export interface AssessmentStatFailedRulesBySeverity {
    critical: pulumi.Input<number>;
    high: pulumi.Input<number>;
    informational: pulumi.Input<number>;
    low: pulumi.Input<number>;
    medium: pulumi.Input<number>;
}

export interface AssessmentStatPassedRulesBySeverity {
    critical: pulumi.Input<number>;
    high: pulumi.Input<number>;
    informational: pulumi.Input<number>;
    low: pulumi.Input<number>;
    medium: pulumi.Input<number>;
}

export interface AssessmentTest {
    entityResults: pulumi.Input<pulumi.Input<inputs.AssessmentTestEntityResult>[]>;
    error: pulumi.Input<string>;
    exclusionStats: pulumi.Input<pulumi.Input<inputs.AssessmentTestExclusionStat>[]>;
    nonComplyingCount: pulumi.Input<number>;
    relevantCount: pulumi.Input<number>;
    rules: pulumi.Input<pulumi.Input<inputs.AssessmentTestRule>[]>;
    testPassed: pulumi.Input<boolean>;
    testedCount: pulumi.Input<number>;
}

export interface AssessmentTestEntityResult {
    error: pulumi.Input<string>;
    exclusionId: pulumi.Input<string>;
    isExcluded: pulumi.Input<boolean>;
    isRelevant: pulumi.Input<boolean>;
    isValid: pulumi.Input<boolean>;
    remediationId: pulumi.Input<string>;
    testObjs: pulumi.Input<pulumi.Input<inputs.AssessmentTestEntityResultTestObj>[]>;
    validationStatus: pulumi.Input<string>;
}

export interface AssessmentTestEntityResultTestObj {
    customEntityComparisonHash: pulumi.Input<string>;
    dome9Id: pulumi.Input<string>;
    entityIndex: pulumi.Input<number>;
    entityType: pulumi.Input<string>;
    id: pulumi.Input<string>;
}

export interface AssessmentTestExclusionStat {
    nonComplyingCount: pulumi.Input<number>;
    relevantCount: pulumi.Input<number>;
    testedCount: pulumi.Input<number>;
}

export interface AssessmentTestRule {
    category: pulumi.Input<string>;
    cloudbots: pulumi.Input<string>;
    complianceTag: pulumi.Input<string>;
    controlTitle: pulumi.Input<string>;
    description: pulumi.Input<string>;
    domain: pulumi.Input<string>;
    isDefault: pulumi.Input<boolean>;
    labels: pulumi.Input<pulumi.Input<string>[]>;
    logic: pulumi.Input<string>;
    logicHash: pulumi.Input<string>;
    name: pulumi.Input<string>;
    priority: pulumi.Input<string>;
    remediation: pulumi.Input<string>;
    ruleId: pulumi.Input<string>;
    severity: pulumi.Input<string>;
}

export interface AwpAwsOnboardingAgentlessAccountSettings {
    customTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    disabledRegions?: pulumi.Input<pulumi.Input<string>[]>;
    inAccountScannerVpc?: pulumi.Input<string>;
    maxConcurrentScansPerRegion?: pulumi.Input<number>;
    scanMachineIntervalInHours?: pulumi.Input<number>;
}

export interface AwpAzureOnboardingAgentlessAccountSettings {
    customTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    disabledRegions?: pulumi.Input<pulumi.Input<string>[]>;
    inAccountScannerVpc?: pulumi.Input<string>;
    maxConcurrentScansPerRegion?: pulumi.Input<number>;
    scanMachineIntervalInHours?: pulumi.Input<number>;
    skipFunctionAppsScan?: pulumi.Input<boolean>;
}

export interface AwsSecurityGroupService {
    inbounds?: pulumi.Input<pulumi.Input<inputs.AwsSecurityGroupServiceInbound>[]>;
    outbounds?: pulumi.Input<pulumi.Input<inputs.AwsSecurityGroupServiceOutbound>[]>;
}

export interface AwsSecurityGroupServiceInbound {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    openForAll?: pulumi.Input<boolean>;
    port?: pulumi.Input<string>;
    protocolType?: pulumi.Input<string>;
    scopes?: pulumi.Input<pulumi.Input<inputs.AwsSecurityGroupServiceInboundScope>[]>;
}

export interface AwsSecurityGroupServiceInboundScope {
    data: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}

export interface AwsSecurityGroupServiceOutbound {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    openForAll?: pulumi.Input<boolean>;
    port?: pulumi.Input<string>;
    protocolType?: pulumi.Input<string>;
    scopes?: pulumi.Input<pulumi.Input<inputs.AwsSecurityGroupServiceOutboundScope>[]>;
}

export interface AwsSecurityGroupServiceOutboundScope {
    data?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type?: pulumi.Input<string>;
}

export interface AzureOrganizationOnboardingActiveBlades {
    awp: pulumi.Input<inputs.AzureOrganizationOnboardingActiveBladesAwp>;
    cdr: pulumi.Input<inputs.AzureOrganizationOnboardingActiveBladesCdr>;
    postureManagement: pulumi.Input<inputs.AzureOrganizationOnboardingActiveBladesPostureManagement>;
    serverless: pulumi.Input<inputs.AzureOrganizationOnboardingActiveBladesServerless>;
}

export interface AzureOrganizationOnboardingActiveBladesAwp {
    centralizedSubscriptionId?: pulumi.Input<string>;
    isEnabled?: pulumi.Input<boolean>;
    onboardingMode?: pulumi.Input<string>;
    withFunctionAppsScan?: pulumi.Input<boolean>;
}

export interface AzureOrganizationOnboardingActiveBladesCdr {
    accounts?: pulumi.Input<pulumi.Input<inputs.AzureOrganizationOnboardingActiveBladesCdrAccount>[]>;
    isEnabled?: pulumi.Input<boolean>;
}

export interface AzureOrganizationOnboardingActiveBladesCdrAccount {
    logTypes?: pulumi.Input<pulumi.Input<string>[]>;
    storageId?: pulumi.Input<string>;
}

export interface AzureOrganizationOnboardingActiveBladesPostureManagement {
    onboardingMode?: pulumi.Input<string>;
}

export interface AzureOrganizationOnboardingActiveBladesServerless {
    isEnabled?: pulumi.Input<boolean>;
}

export interface AzureSecurityGroupInbound {
    access?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destinationPortRanges: pulumi.Input<pulumi.Input<string>[]>;
    destinationScopes: pulumi.Input<pulumi.Input<inputs.AzureSecurityGroupInboundDestinationScope>[]>;
    direction?: pulumi.Input<string>;
    isDefault?: pulumi.Input<boolean>;
    name: pulumi.Input<string>;
    priority: pulumi.Input<number>;
    protocol: pulumi.Input<string>;
    sourcePortRanges: pulumi.Input<pulumi.Input<string>[]>;
    sourceScopes: pulumi.Input<pulumi.Input<inputs.AzureSecurityGroupInboundSourceScope>[]>;
}

export interface AzureSecurityGroupInboundDestinationScope {
    data: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}

export interface AzureSecurityGroupInboundSourceScope {
    data: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}

export interface AzureSecurityGroupOutbound {
    access?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destinationPortRanges: pulumi.Input<pulumi.Input<string>[]>;
    destinationScopes: pulumi.Input<pulumi.Input<inputs.AzureSecurityGroupOutboundDestinationScope>[]>;
    direction?: pulumi.Input<string>;
    isDefault?: pulumi.Input<boolean>;
    name: pulumi.Input<string>;
    priority: pulumi.Input<number>;
    protocol: pulumi.Input<string>;
    sourcePortRanges: pulumi.Input<pulumi.Input<string>[]>;
    sourceScopes: pulumi.Input<pulumi.Input<inputs.AzureSecurityGroupOutboundSourceScope>[]>;
}

export interface AzureSecurityGroupOutboundDestinationScope {
    data: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}

export interface AzureSecurityGroupOutboundSourceScope {
    data: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}

export interface AzureSecurityGroupTag {
    key: pulumi.Input<string>;
    value: pulumi.Input<string>;
}

export interface CloudSecurityGroupRuleService {
    inbounds?: pulumi.Input<pulumi.Input<inputs.CloudSecurityGroupRuleServiceInbound>[]>;
    outbounds?: pulumi.Input<pulumi.Input<inputs.CloudSecurityGroupRuleServiceOutbound>[]>;
}

export interface CloudSecurityGroupRuleServiceInbound {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    openForAll?: pulumi.Input<boolean>;
    port?: pulumi.Input<string>;
    protocolType?: pulumi.Input<string>;
    scopes?: pulumi.Input<pulumi.Input<inputs.CloudSecurityGroupRuleServiceInboundScope>[]>;
}

export interface CloudSecurityGroupRuleServiceInboundScope {
    data: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}

export interface CloudSecurityGroupRuleServiceOutbound {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    openForAll?: pulumi.Input<boolean>;
    port?: pulumi.Input<string>;
    protocolType?: pulumi.Input<string>;
    scopes?: pulumi.Input<pulumi.Input<inputs.CloudSecurityGroupRuleServiceOutboundScope>[]>;
}

export interface CloudSecurityGroupRuleServiceOutboundScope {
    data?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type?: pulumi.Input<string>;
}

export interface CloudaccountAwsCredentials {
    apiKey?: pulumi.Input<string>;
    arn?: pulumi.Input<string>;
    iamUser?: pulumi.Input<string>;
    isReadOnly?: pulumi.Input<boolean>;
    secret: pulumi.Input<string>;
    /**
     * The cloud account onboarding method. Should be set to 'RoleBased' for aws and 'UserBased' for awsGov and awsChina
     */
    type: pulumi.Input<string>;
}

export interface CloudaccountAwsIamSafe {
    awsGroupArn: pulumi.Input<string>;
    awsPolicyArn: pulumi.Input<string>;
    mode: pulumi.Input<string>;
    restrictedIamEntities: pulumi.Input<pulumi.Input<inputs.CloudaccountAwsIamSafeRestrictedIamEntity>[]>;
}

export interface CloudaccountAwsIamSafeRestrictedIamEntity {
    rolesArns: pulumi.Input<pulumi.Input<string>[]>;
    usersArns: pulumi.Input<pulumi.Input<string>[]>;
}

export interface CloudaccountAwsNetSec {
    regions: pulumi.Input<pulumi.Input<inputs.CloudaccountAwsNetSecRegion>[]>;
}

export interface CloudaccountAwsNetSecRegion {
    hidden?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    newGroupBehavior?: pulumi.Input<string>;
    region: pulumi.Input<string>;
}

export interface CloudaccountKubernetesAdmissionControl {
    enabled: pulumi.Input<boolean>;
}

export interface CloudaccountKubernetesImageAssurance {
    enabled: pulumi.Input<boolean>;
}

export interface CloudaccountKubernetesRuntimeProtection {
    enabled: pulumi.Input<boolean>;
}

export interface CloudaccountKubernetesThreatIntelligence {
    enabled: pulumi.Input<boolean>;
}

export interface ContinuousComplianceNotificationChangeDetection {
    awsSecurityHubIntegrationState?: pulumi.Input<string>;
    awsSecurityHubIntegrations?: pulumi.Input<pulumi.Input<inputs.ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration>[]>;
    emailDatas?: pulumi.Input<pulumi.Input<inputs.ContinuousComplianceNotificationChangeDetectionEmailData>[]>;
    emailPerFindingDatas?: pulumi.Input<pulumi.Input<inputs.ContinuousComplianceNotificationChangeDetectionEmailPerFindingData>[]>;
    emailPerFindingSendingState?: pulumi.Input<string>;
    emailSendingState?: pulumi.Input<string>;
    externalTicketCreatingState?: pulumi.Input<string>;
    slackDatas?: pulumi.Input<pulumi.Input<inputs.ContinuousComplianceNotificationChangeDetectionSlackData>[]>;
    slackIntegrationState?: pulumi.Input<string>;
    snsDatas?: pulumi.Input<pulumi.Input<inputs.ContinuousComplianceNotificationChangeDetectionSnsData>[]>;
    snsSendingState?: pulumi.Input<string>;
    teamsDatas?: pulumi.Input<pulumi.Input<inputs.ContinuousComplianceNotificationChangeDetectionTeamsData>[]>;
    teamsIntegrationState?: pulumi.Input<string>;
    ticketingSystemDatas?: pulumi.Input<pulumi.Input<inputs.ContinuousComplianceNotificationChangeDetectionTicketingSystemData>[]>;
    webhookDatas?: pulumi.Input<pulumi.Input<inputs.ContinuousComplianceNotificationChangeDetectionWebhookData>[]>;
    webhookIntegrationState?: pulumi.Input<string>;
}

export interface ContinuousComplianceNotificationChangeDetectionAwsSecurityHubIntegration {
    externalAccountId: pulumi.Input<string>;
    region: pulumi.Input<string>;
}

export interface ContinuousComplianceNotificationChangeDetectionEmailData {
    recipients: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ContinuousComplianceNotificationChangeDetectionEmailPerFindingData {
    notificationOutputFormat?: pulumi.Input<string>;
    recipients: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ContinuousComplianceNotificationChangeDetectionSlackData {
    url: pulumi.Input<string>;
}

export interface ContinuousComplianceNotificationChangeDetectionSnsData {
    snsOutputFormat: pulumi.Input<string>;
    snsTopicArn: pulumi.Input<string>;
}

export interface ContinuousComplianceNotificationChangeDetectionTeamsData {
    url: pulumi.Input<string>;
}

export interface ContinuousComplianceNotificationChangeDetectionTicketingSystemData {
    domain?: pulumi.Input<string>;
    issueType?: pulumi.Input<string>;
    pass: pulumi.Input<string>;
    projectKey?: pulumi.Input<string>;
    shouldCloseTickets?: pulumi.Input<boolean>;
    systemType?: pulumi.Input<string>;
    user?: pulumi.Input<string>;
}

export interface ContinuousComplianceNotificationChangeDetectionWebhookData {
    advancedUrl?: pulumi.Input<boolean>;
    authMethod?: pulumi.Input<string>;
    formatType?: pulumi.Input<string>;
    httpMethod?: pulumi.Input<string>;
    ignoreCertificate?: pulumi.Input<boolean>;
    password?: pulumi.Input<string>;
    payloadFormat?: pulumi.Input<string>;
    url: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface ContinuousComplianceNotificationGcpSecurityCommandCenterIntegration {
    projectId?: pulumi.Input<string>;
    sourceId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}

export interface ContinuousComplianceNotificationScheduledReport {
    emailSendingState?: pulumi.Input<string>;
    scheduleDatas?: pulumi.Input<pulumi.Input<inputs.ContinuousComplianceNotificationScheduledReportScheduleData>[]>;
}

export interface ContinuousComplianceNotificationScheduledReportScheduleData {
    cronExpression: pulumi.Input<string>;
    recipients: pulumi.Input<pulumi.Input<string>[]>;
    type: pulumi.Input<string>;
}

export interface GetIplistItem {
    comment?: string;
    ip?: string;
}

export interface GetIplistItemArgs {
    comment?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
}

export interface IplistItem {
    comment?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
}

export interface NotificationIntegrationSettings {
    reportsIntegrationSettings?: pulumi.Input<pulumi.Input<inputs.NotificationIntegrationSettingsReportsIntegrationSetting>[]>;
    scheduledIntegrationSettings?: pulumi.Input<pulumi.Input<inputs.NotificationIntegrationSettingsScheduledIntegrationSetting>[]>;
    singleNotificationIntegrationSettings?: pulumi.Input<pulumi.Input<inputs.NotificationIntegrationSettingsSingleNotificationIntegrationSetting>[]>;
}

export interface NotificationIntegrationSettingsReportsIntegrationSetting {
    integrationId?: pulumi.Input<string>;
    outputType?: pulumi.Input<string>;
}

export interface NotificationIntegrationSettingsScheduledIntegrationSetting {
    cronExpression?: pulumi.Input<string>;
    integrationId?: pulumi.Input<string>;
    outputType?: pulumi.Input<string>;
}

export interface NotificationIntegrationSettingsSingleNotificationIntegrationSetting {
    integrationId?: pulumi.Input<string>;
    outputType?: pulumi.Input<string>;
    payload?: pulumi.Input<string>;
}

export interface RoleAccess {
    mainId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    securityGroupId?: pulumi.Input<string>;
    traffic?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

export interface RoleManage {
    mainId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    securityGroupId?: pulumi.Input<string>;
    traffic?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

export interface RoleView {
    mainId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    securityGroupId?: pulumi.Input<string>;
    traffic?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

export interface RulesetRule {
    category?: pulumi.Input<string>;
    complianceTag?: pulumi.Input<string>;
    controlTitle?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domain?: pulumi.Input<string>;
    isDefault?: pulumi.Input<boolean>;
    logic: pulumi.Input<string>;
    logicHash?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    priority?: pulumi.Input<string>;
    remediation?: pulumi.Input<string>;
    ruleId?: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
}

export interface UserAccess {
    mainId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    securityGroupId?: pulumi.Input<string>;
    traffic?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

export interface UserIamSafe {
    cloudAccounts: pulumi.Input<pulumi.Input<inputs.UserIamSafeCloudAccount>[]>;
}

export interface UserIamSafeCloudAccount {
    cloudAccountId: pulumi.Input<string>;
    cloudAccountState: pulumi.Input<string>;
    externalAccountNumber: pulumi.Input<string>;
    iamEntities: pulumi.Input<pulumi.Input<string>[]>;
    iamEntitiesLastLeaseTimes: pulumi.Input<pulumi.Input<inputs.UserIamSafeCloudAccountIamEntitiesLastLeaseTime>[]>;
    iamEntity: pulumi.Input<string>;
    lastLeaseTime: pulumi.Input<string>;
    name: pulumi.Input<string>;
    state: pulumi.Input<boolean>;
}

export interface UserIamSafeCloudAccountIamEntitiesLastLeaseTime {
    iamEntity: pulumi.Input<string>;
    lastLeaseTime: pulumi.Input<string>;
}

export interface UserManage {
    mainId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    securityGroupId?: pulumi.Input<string>;
    traffic?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

export interface UserView {
    mainId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    securityGroupId?: pulumi.Input<string>;
    traffic?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
