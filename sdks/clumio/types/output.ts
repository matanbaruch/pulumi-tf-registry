// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface AwsManualConnectionAssetsEnabled {
    ddb: boolean;
    ebs: boolean;
    mssql: boolean;
    rds: boolean;
    s3: boolean;
}

export interface AwsManualConnectionResources {
    clumioEventPubArn: string;
    clumioIamRoleArn: string;
    clumioSupportRoleArn: string;
    eventRules: outputs.AwsManualConnectionResourcesEventRules;
    serviceRoles: outputs.AwsManualConnectionResourcesServiceRoles;
}

export interface AwsManualConnectionResourcesEventRules {
    cloudtrailRuleArn: string;
    cloudwatchRuleArn: string;
}

export interface AwsManualConnectionResourcesServiceRoles {
    mssql: outputs.AwsManualConnectionResourcesServiceRolesMssql;
    s3: outputs.AwsManualConnectionResourcesServiceRolesS3;
}

export interface AwsManualConnectionResourcesServiceRolesMssql {
    ec2SsmInstanceProfileArn: string;
    ssmNotificationRoleArn: string;
}

export interface AwsManualConnectionResourcesServiceRolesS3 {
    continuousBackupsRoleArn: string;
}

export interface GetAwsManualConnectionResourcesAssetTypesEnabled {
    ddb: boolean;
    ebs: boolean;
    mssql: boolean;
    rds: boolean;
    s3: boolean;
}

export interface GetDynamodbTablesDynamodbTable {
    /**
     * Unique identifier of the DynamoDB table.
     */
    id: string;
    /**
     * Name of the DynamoDB table.
     */
    name: string;
    /**
     * Native identifier of the DynamoDB table.
     */
    tableNativeId: string;
}

export interface GetOrganizationalUnitOrganizationalUnit {
    /**
     * List of all recursive descendent organizational units.
     */
    descendantIds: string[];
    /**
     * Brief description to denote details of the organizational unit.
     */
    description: string;
    /**
     * Unique identifier of the organizational unit.
     */
    id: string;
    /**
     * The name of the organizational unit.
     */
    name: string;
    /**
     * The identifier of the parent organizational unit under which the organizational unit was created.
     */
    parentId: string;
    /**
     * List of user ids, with role assigned to this organizational unit.
     */
    usersWithRoles: outputs.GetOrganizationalUnitOrganizationalUnitUsersWithRole[];
}

export interface GetOrganizationalUnitOrganizationalUnitUsersWithRole {
    /**
     * Identifier of the role associated with the user assigned to the organizational unit.
     */
    assignedRole: string;
    /**
     * Identifier of the user assigned to the organizational unit.
     */
    userId: string;
}

export interface GetPolicyPolicy {
    /**
     * Activation status of the policy.
     */
    activationStatus: string;
    /**
     * Unique identifier of the policy.
     */
    id: string;
    /**
     * The name of the policy.
     */
    name: string;
    /**
     * Operation types supported by the policy.
     */
    operationTypes: string[];
    /**
     * Identifier of the Clumio organizational unit associated with the policy.
     */
    organizationalUnitId: string;
    /**
     * The time zone for the policy, in IANA format.
     */
    timezone: string;
}

export interface GetPolicyRulePolicyRule {
    /**
     * The policy rule ID before which this policy rule should be executed.
     */
    beforeRuleId: string;
    /**
     * The condition of the policy rule. Possible conditions include: 1) `entity_type` is required and supports `$eq` and `$in` filters.2) `aws_account_native_id` and `aws_region` are optional and both support `$eq` and `$in` filters. 3) `aws_tag` is optional and supports `$eq`, `$in`, `$all`, and `$contains` filters.
     */
    condition: string;
    /**
     * Unique identifier of the policy rule.
     */
    id: string;
    /**
     * The name of the policy rule.
     */
    name: string;
    /**
     * Unique identifier of the policy associated with the policy rule.
     */
    policyId: string;
}

export interface GetRolePermission {
    /**
     * Brief description to denote details of the permission.
     */
    description: string;
    /**
     * Unique identifier for the permission.
     */
    id: string;
    /**
     * Name of the permission.
     */
    name: string;
}

export interface GetS3BucketS3Bucket {
    /**
     * The identifier of the AWS account under which the S3 bucket was created.
     */
    accountNativeId: string;
    /**
     * The AWS region associated with the S3 bucket.
     */
    awsRegion: string;
    /**
     * Determines if continuous backup is enabled for the S3 bucket.
     */
    eventBridgeEnabled: boolean;
    /**
     * Unique identifier of the s3 bucket.
     */
    id: string;
    /**
     * Time of the last backup in RFC-3339 format.
     */
    lastBackupTimestamp: string;
    /**
     * Time of the last continuous backup in RFC-3339 format.
     */
    lastContinuousBackupTimestamp: string;
    /**
     * The name of the s3 bucket.
     */
    name: string;
    /**
     * Protection group count reflects how many protection groups are linked to this bucket.
     */
    protectionGroupCount: number;
}

export interface GetUserUser {
    /**
     * Identifiers of the organizational units, along with the identifier of the role assigned to the user.
     */
    accessControlConfigurations: outputs.GetUserUserAccessControlConfiguration[];
    /**
     * The name of the user.
     */
    fullName: string;
    /**
     * Unique identifier of the user.
     */
    id: string;
}

export interface GetUserUserAccessControlConfiguration {
    /**
     * Identifiers of the organizational units assigned to the user.
     */
    organizationalUnitIds: string[];
    /**
     * Identifier of the role assigned to the user.
     */
    roleId: string;
}

export interface OrganizationalUnitUsersWithRole {
    /**
     * Identifier of the role to be associated with the user when assigned to the organizational unit.
     */
    assignedRole: string;
    /**
     * Identifier of the user to assign to the organizational unit.
     */
    userId: string;
}

export interface PolicyOperation {
    /**
     * Determines whether the policy should take action now or during the specified backup window. Valid values are: `immediate` and `window`. `immediate` starts the backup process immediately while `window` starts the backup in the specified window.
     */
    actionSetting: string;
    /**
     * Additional operation-specific policy settings.
     */
    advancedSettings?: outputs.PolicyOperationAdvancedSetting[];
    /**
     * The region in which this backup is stored. This might be used for cross-region backup. Possible values are AWS region string, for example: `us-east-1`, `us-west-2`, .... If no value is provided, it defaults to in-region (the asset's source region).
     */
    backupAwsRegion?: string;
    /**
     * The start and end times for the customized backup window that reflects the user-defined timezone.
     */
    backupWindowTzs?: outputs.PolicyOperationBackupWindowTz[];
    /**
     * The service level agreement (SLA) for the policy. A policy can include one or more SLAs. For example, a policy can retain daily backups for a month each, and monthly backups for a year each.
     */
    slas?: outputs.PolicyOperationSla[];
    /**
     * The time zone for the policy, in IANA format. For example: `America/Los_Angeles`, `America/New_York`, `Etc/UTC`, etc. For more information, see the Time Zone Database (https://www.iana.org/time-zones) on the IANA website.
     */
    timezone: string;
    /**
     * The type of operation to be performed. Depending on the type selected, `advanced_settings` may also be required. See the [API Documentation for List policies](https://help.clumio.com/reference/list-policy-definitions) for more information about the supported types.
     */
    type: string;
}

export interface PolicyOperationAdvancedSetting {
    /**
     * Optional configuration settings for the aws_ebs_volume_backup operation.
     */
    awsEbsVolumeBackups?: outputs.PolicyOperationAdvancedSettingAwsEbsVolumeBackup[];
    /**
     * Optional configuration settings for the aws_ec2_instance_backup operation.
     */
    awsEc2InstanceBackups?: outputs.PolicyOperationAdvancedSettingAwsEc2InstanceBackup[];
    /**
     * Optional configuration settings for the aws_rds_config_sync operation.
     */
    awsRdsConfigSyncs?: outputs.PolicyOperationAdvancedSettingAwsRdsConfigSync[];
    /**
     * Optional configuration settings for the aws_rds_resource_granular_backup operation.
     */
    awsRdsResourceGranularBackups?: outputs.PolicyOperationAdvancedSettingAwsRdsResourceGranularBackup[];
    /**
     * Additional policy configuration settings for the mssql_database_backup operation. If this operation is not of type mssql_database_backup, then this field is omitted from the response.
     */
    ec2MssqlDatabaseBackups?: outputs.PolicyOperationAdvancedSettingEc2MssqlDatabaseBackup[];
    /**
     * Additional policy configuration settings for the mssql_log_backup operation. If this operation is not of type mssql_log_backup, then this field is omitted from the response.
     */
    ec2MssqlLogBackups?: outputs.PolicyOperationAdvancedSettingEc2MssqlLogBackup[];
    /**
     * Additional policy configuration settings for the mssql_database_backup operation. If this operation is not of type mssql_database_backup, then this field is omitted from the response.
     */
    mssqlDatabaseBackups?: outputs.PolicyOperationAdvancedSettingMssqlDatabaseBackup[];
    /**
     * Additional policy configuration settings for the mssql_log_backup operation. If this operation is not of type mssql_log_backup, then this field is omitted from the response.
     */
    mssqlLogBackups?: outputs.PolicyOperationAdvancedSettingMssqlLogBackup[];
    /**
     * Additional policy configuration settings for the protection_group_backup operation. If this operation is not of type protection_group_backup, then this field is omitted from the response.
     */
    protectionGroupBackups?: outputs.PolicyOperationAdvancedSettingProtectionGroupBackup[];
}

export interface PolicyOperationAdvancedSettingAwsEbsVolumeBackup {
    /**
     * Backup tier to store the backup in. Valid values are: `standard` and `lite`. If not provided, the default is `standard`.
     * 	- `standard` = Clumio SecureVault Standard
     * 	- `lite` = Clumio SecureVault Lite
     */
    backupTier?: string;
}

export interface PolicyOperationAdvancedSettingAwsEc2InstanceBackup {
    /**
     * Backup tier to store the backup in. Valid values are: `standard` and `lite`. If not provided, the default is `standard`.
     * 	- `standard` = Clumio SecureVault Standard
     * 	- `lite` = Clumio SecureVault Lite
     */
    backupTier?: string;
}

export interface PolicyOperationAdvancedSettingAwsRdsConfigSync {
    /**
     * Additional policy configuration for syncing the configuration of Pitr in aws. Possible values include "immediate" and "maintenance_window". If "immediate" is provided, then configuration sync will be kicked in immediately. Otherwise configuration sync will be executed in a specific time user has provided.
     */
    apply?: string;
}

export interface PolicyOperationAdvancedSettingAwsRdsResourceGranularBackup {
    /**
     * Backup tier to store the RDS backup in. Valid values are: `frozen` and `standard`. For new policies, the only supported value is `frozen`. `standard` is supported for existing policies for a limited period of time.
     * 	- `frozen` = Clumio SecureVault Archive
     * 	- `standard` = Clumio SecureVault record
     */
    backupTier?: string;
}

export interface PolicyOperationAdvancedSettingEc2MssqlDatabaseBackup {
    /**
     * The alternative replica for MSSQL database backups. This setting only applies to Availability Group databases. Possible values include "primary", "sync_secondary", and "stop". If "stop" is provided, then backups will not attempt to switch to a different replica when the preferred replica is unavailable. Otherwise, recurring backups will attempt to use either the primary replica or the secondary replica accordingly.
     */
    alternativeReplica?: string;
    /**
     * The primary preferred replica for MSSQL database backups. This setting only applies to Availability Group databases. Possible values include "primary" and "sync_secondary". Recurring backup will first attempt to use either the primary replica or the secondary replica accordingly.
     */
    preferredReplica?: string;
}

export interface PolicyOperationAdvancedSettingEc2MssqlLogBackup {
    /**
     * The alternative replica for MSSQL log backups. This setting only applies to Availability Group databases. Possible values include "primary", "sync_secondary", and "stop". If "stop" is provided, then backups will not attempt to switch to a different replica when the preferred replica is unavailable. Otherwise, recurring backups will attempt to use either the primary replica or the secondary replica accordingly.
     */
    alternativeReplica?: string;
    /**
     * The primary preferred replica for MSSQL log backups. This setting only applies to Availability Group databases. Possible values include "primary" and "sync_secondary". Recurring backup will first attempt to use either the primary replica or the secondary replica accordingly.
     */
    preferredReplica?: string;
}

export interface PolicyOperationAdvancedSettingMssqlDatabaseBackup {
    /**
     * The alternative replica for MSSQL database backups. This setting only applies to Availability Group databases. Possible values include "primary", "sync_secondary", and "stop". If "stop" is provided, then backups will not attempt to switch to a different replica when the preferred replica is unavailable. Otherwise, recurring backups will attempt to use either the primary replica or the secondary replica accordingly.
     */
    alternativeReplica?: string;
    /**
     * The primary preferred replica for MSSQL database backups. This setting only applies to Availability Group databases. Possible values include "primary" and "sync_secondary". Recurring backup will first attempt to use either the primary replica or the secondary replica accordingly.
     */
    preferredReplica?: string;
}

export interface PolicyOperationAdvancedSettingMssqlLogBackup {
    /**
     * The alternative replica for MSSQL log backups. This setting only applies to Availability Group databases. Possible values include "primary", "sync_secondary", and "stop". If "stop" is provided, then backups will not attempt to switch to a different replica when the preferred replica is unavailable. Otherwise, recurring backups will attempt to use either the primary replica or the secondary replica accordingly.
     */
    alternativeReplica?: string;
    /**
     * The primary preferred replica for MSSQL log backups. This setting only applies to Availability Group databases. Possible values include "primary" and "sync_secondary". Recurring backup will first attempt to use either the primary replica or the secondary replica accordingly.
     */
    preferredReplica?: string;
}

export interface PolicyOperationAdvancedSettingProtectionGroupBackup {
    /**
     * Backup tier to store the backup in. Valid values are: `cold` and `frozen`.
     * 	- `cold` = Clumio SecureVault Standard
     * 	- `frozen` = Clumio SecureVault Archive
     */
    backupTier?: string;
}

export interface PolicyOperationBackupWindowTz {
    /**
     * The time when the backup window closes. Specify the end time in the format `hh:mm`, where `hh` represents the hour of the day and `mm` represents the minute of the day based on the 24 hour clock. Leave empty if you do not want to specify an end time. If the backup window closes while a backup is in progress, the entire backup process is aborted. The next backup will be performed when the  backup window re-opens.
     */
    endTime: string;
    /**
     * The time when the backup window opens. Specify the start time in the format `hh:mm`, where `hh` represents the hour of the day and `mm` represents the minute of the day based on the 24 hour clock.
     */
    startTime?: string;
}

export interface PolicyOperationSla {
    /**
     * The retention time for this SLA. For example, to retain the backup for 1 month, set unit=months and value=1.
     */
    retentionDurations?: outputs.PolicyOperationSlaRetentionDuration[];
    /**
     * The minimum frequency between backups for this SLA. Also known as the recovery point objective (RPO) interval. For example, to configure the minimum frequency between backups to be every 2 days, set unit=days and value=2. To configure the SLA for on-demand backups, set unit=on_demand and leave the value field empty. Also you can specify a day of week for Weekly SLA. For example, set offsets=[1] will trigger backup on every Monday.
     */
    rpoFrequencies?: outputs.PolicyOperationSlaRpoFrequency[];
}

export interface PolicyOperationSlaRetentionDuration {
    /**
     * The measurement unit of the SLA parameter. Values include days, weeks, months and years.
     */
    unit: string;
    /**
     * The measurement value of the SLA parameter.
     */
    value: number;
}

export interface PolicyOperationSlaRpoFrequency {
    /**
     * The offset values of the SLA parameter.
     */
    offsets?: number[];
    /**
     * The measurement unit of the SLA parameter. Values include minutes, hours, days, weeks, months and years.
     */
    unit: string;
    /**
     * The measurement value of the SLA parameter.
     */
    value: number;
}

export interface ProtectionGroupObjectFilter {
    /**
     * Whether to back up only the latest object version.
     */
    latestVersionOnly: boolean;
    /**
     * Prefix Filters.
     */
    prefixFilters?: outputs.ProtectionGroupObjectFilterPrefixFilter[];
    /**
     * Storage class to include in the backup. Valid values are: S3 Standard, S3 Standard-IA, S3 Intelligent-Tiering, and S3 One Zone-IA.
     */
    storageClasses: string[];
}

export interface ProtectionGroupObjectFilterPrefixFilter {
    /**
     * List of subprefixes to exclude from the prefix.
     */
    excludedSubPrefixes?: string[];
    /**
     * Prefix to include. To include all objects in the bucket specify empty string "".
     */
    prefix: string;
}

export interface ProtectionGroupProtectionInfo {
    /**
     * The identifier of the entity from which protection was inherited.
     */
    inheritingEntityId: string;
    /**
     * The type of the entity from which protection was inherited.
     */
    inheritingEntityType: string;
    /**
     * Identifier of the policy to apply on Protection Group
     */
    policyId: string;
}

export interface UserAccessControlConfiguration {
    /**
     * Identifiers of the organizational units to be assigned to the user.The Global Organizational Unit ID is "00000000-0000-0000-0000-000000000000"
     */
    organizationalUnitIds: string[];
    /**
     * Identifier of the role to assign to the user.
     */
    roleId: string;
}

