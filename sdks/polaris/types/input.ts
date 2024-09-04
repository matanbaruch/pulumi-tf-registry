// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface AwsAccountCloudNativeProtection {
    /**
     * Permission groups to assign to the Cloud Native Protection feature. Possible values are `BASIC`, `EXPORT_AND_RESTORE`, `FILE_LEVEL_RECOVERY` and `SNAPSHOT_PRIVATE_ACCESS`.
     */
    permissionGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Regions that RSC will monitor for instances to automatically protect.
     */
    regions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Cloudformation stack ARN.
     */
    stackArn?: pulumi.Input<string>;
    /**
     * Status of the Cloud Native Protection feature.
     */
    status?: pulumi.Input<string>;
}

export interface AwsAccountExocompute {
    /**
     * Permission groups to assign to the Exocompute feature. Possible values are `BASIC`, `PRIVATE_ENDPOINT` and `RSC_MANAGED_CLUSTER`.
     */
    permissionGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Regions to enable the Exocompute feature in.
     */
    regions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Cloudformation stack ARN.
     */
    stackArn?: pulumi.Input<string>;
    /**
     * Status of the Exocompute feature.
     */
    status?: pulumi.Input<string>;
}

export interface AwsCnpAccountAttachmentsInstanceProfile {
    /**
     * RSC artifact key for the AWS instance profile.
     */
    key: pulumi.Input<string>;
    /**
     * AWS instance profile name.
     */
    name: pulumi.Input<string>;
}

export interface AwsCnpAccountAttachmentsRole {
    /**
     * AWS role ARN.
     */
    arn: pulumi.Input<string>;
    /**
     * RSC artifact key for the AWS role.
     */
    key: pulumi.Input<string>;
}

export interface AwsCnpAccountFeature {
    /**
     * RSC feature name. Possible values are `CLOUD_NATIVE_ARCHIVAL`, `CLOUD_NATIVE_PROTECTION`, `CLOUD_NATIVE_S3_PROTECTION`, `EXOCOMPUTE` and `RDS_PROTECTION`.
     */
    name: pulumi.Input<string>;
    /**
     * RSC permission groups for the feature. Possible values are `BASIC`, `EXPORT_AND_RESTORE`, `FILE_LEVEL_RECOVERY`, `SNAPSHOT_PRIVATE_ACCESS`, `PRIVATE_ENDPOINT` and `RSC_MANAGED_CLUSTER`. For backwards compatibility, `[]` is interpreted as all applicable permission groups.
     */
    permissionGroups: pulumi.Input<pulumi.Input<string>[]>;
}

export interface AzureArchivalLocationCustomerManagedKey {
    /**
     * Key name.
     */
    name: pulumi.Input<string>;
    /**
     * The region in which the key will be used. Regions without customer managed keys will use platform managed keys.
     */
    region: pulumi.Input<string>;
    /**
     * Key vault name.
     */
    vaultName: pulumi.Input<string>;
}

export interface AzureSubscriptionCloudNativeArchival {
    /**
     * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris.getAzurePermissions` data source.
     */
    permissions?: pulumi.Input<string>;
    /**
     * Azure regions to enable the Cloud Native Archival feature in. Should be specified in the standard Azure style, e.g. `eastus`.
     */
    regions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the Azure resource group where RSC places all resources created by the feature. RSC assumes the resource group already exists. Changing this forces the RSC feature to be re-onboarded.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Region of the Azure resource group. Should be specified in the standard Azure style, e.g. `eastus`. Changing this forces the RSC feature to be re-onboarded.
     */
    resourceGroupRegion?: pulumi.Input<string>;
    /**
     * Tags to add to the Azure resource group. Changing this forces the RSC feature to be re-onboarded.
     */
    resourceGroupTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Status of the Cloud Native Archival feature.
     */
    status?: pulumi.Input<string>;
}

export interface AzureSubscriptionCloudNativeArchivalEncryption {
    /**
     * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris.getAzurePermissions` data source.
     */
    permissions?: pulumi.Input<string>;
    /**
     * Azure regions to enable the Cloud Native Archival Encryption feature in. Should be specified in the standard Azure style, e.g. `eastus`.
     */
    regions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the Azure resource group where RSC places all resources created by the feature. RSC assumes the resource group already exists. Changing this forces the RSC feature to be re-onboarded.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Region of the Azure resource group. Should be specified in the standard Azure style, e.g. `eastus`. Changing this forces the RSC feature to be re-onboarded.
     */
    resourceGroupRegion?: pulumi.Input<string>;
    /**
     * Tags to add to the Azure resource group. Changing this forces the RSC feature to be re-onboarded.
     */
    resourceGroupTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Status of the Cloud Native Archival Encryption feature.
     */
    status?: pulumi.Input<string>;
    /**
     * User-assigned managed identity name.
     */
    userAssignedManagedIdentityName: pulumi.Input<string>;
    /**
     * ID of the service principal object associated with the user-assigned managed identity.
     */
    userAssignedManagedIdentityPrincipalId: pulumi.Input<string>;
    /**
     * User-assigned managed identity region. Should be specified in the standard Azure style, e.g. `eastus`.
     */
    userAssignedManagedIdentityRegion: pulumi.Input<string>;
    /**
     * User-assigned managed identity resource group name.
     */
    userAssignedManagedIdentityResourceGroupName: pulumi.Input<string>;
}

export interface AzureSubscriptionCloudNativeProtection {
    /**
     * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris.getAzurePermissions` data source.
     */
    permissions?: pulumi.Input<string>;
    /**
     * Azure regions that RSC will monitor for resources to protect according to SLA Domains. Should be specified in the standard Azure style, e.g. `eastus`.
     */
    regions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the Azure resource group where RSC places all resources created by the feature. RSC assumes the resource group already exists. Changing this forces the RSC feature to be re-onboarded.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Region of the Azure resource group. Should be specified in the standard Azure style, e.g. `eastus`. Changing this forces the RSC feature to be re-onboarded.
     */
    resourceGroupRegion?: pulumi.Input<string>;
    /**
     * Tags to add to the Azure resource group. Changing this forces the RSC feature to be re-onboarded.
     */
    resourceGroupTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Status of the Cloud Native Protection feature.
     */
    status?: pulumi.Input<string>;
}

export interface AzureSubscriptionExocompute {
    /**
     * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris.getAzurePermissions` data source.
     */
    permissions?: pulumi.Input<string>;
    /**
     * Azure regions to enable the Exocompute feature in. Should be specified in the standard Azure style, e.g. `eastus`.
     */
    regions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the Azure resource group where RSC places all resources created by the feature. RSC assumes the resource group already exists. Changing this forces the RSC feature to be re-onboarded.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Region of the Azure resource group. Should be specified in the standard Azure style, e.g. `eastus`. Changing this forces the RSC feature to be re-onboarded.
     */
    resourceGroupRegion?: pulumi.Input<string>;
    /**
     * Tags to add to the Azure resource group. Changing this forces the RSC feature to be re-onboarded.
     */
    resourceGroupTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Status of the Exocompute feature.
     */
    status?: pulumi.Input<string>;
}

export interface AzureSubscriptionSqlDbProtection {
    /**
     * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris.getAzurePermissions` data source.
     */
    permissions?: pulumi.Input<string>;
    /**
     * Azure regions to enable the SQL DB Protection feature in. Should be specified in the standard Azure style, e.g. `eastus`.
     */
    regions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Status of the SQL DB Protection feature.
     */
    status?: pulumi.Input<string>;
}

export interface AzureSubscriptionSqlMiProtection {
    /**
     * Permissions updated signal. When this field changes, the provider will notify RSC that the permissions for the feature has been updated. Use this field with the `polaris.getAzurePermissions` data source.
     */
    permissions?: pulumi.Input<string>;
    /**
     * Azure regions to enable the SQL MI Protection feature in. Should be specified in the standard Azure style, e.g. `eastus`.
     */
    regions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Status of the SQL MI Protection feature.
     */
    status?: pulumi.Input<string>;
}

export interface CdmBootstrapCcesAwsTimeouts {
    create?: pulumi.Input<string>;
    default?: pulumi.Input<string>;
    read?: pulumi.Input<string>;
}

export interface CdmBootstrapCcesAzureTimeouts {
    create?: pulumi.Input<string>;
    default?: pulumi.Input<string>;
    read?: pulumi.Input<string>;
}

export interface CdmBootstrapTimeouts {
    create?: pulumi.Input<string>;
    default?: pulumi.Input<string>;
    read?: pulumi.Input<string>;
}

export interface CustomRolePermission {
    /**
     * Snappable hierarchy.
     */
    hierarchies: pulumi.Input<pulumi.Input<inputs.CustomRolePermissionHierarchy>[]>;
    /**
     * Operation to allow on object IDs under the snappable hierarchy.
     */
    operation: pulumi.Input<string>;
}

export interface CustomRolePermissionHierarchy {
    /**
     * Object/workload identifiers.
     */
    objectIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Snappable/workload type.
     */
    snappableType: pulumi.Input<string>;
}

export interface GcpProjectCloudNativeProtection {
    /**
     * Status of the Cloud Native Protection feature.
     */
    status?: pulumi.Input<string>;
}

export interface GetAwsCnpArtifactsFeature {
    /**
     * RSC feature name. Possible values are `CLOUD_NATIVE_ARCHIVAL`, `CLOUD_NATIVE_PROTECTION`, `CLOUD_NATIVE_S3_PROTECTION`, `EXOCOMPUTE` and `RDS_PROTECTION`.
     */
    name: string;
    /**
     * RSC permission groups for the feature. Possible values are `BASIC`, `EXPORT_AND_RESTORE`, `FILE_LEVEL_RECOVERY`, `SNAPSHOT_PRIVATE_ACCESS`, `PRIVATE_ENDPOINT` and `RSC_MANAGED_CLUSTER`. For backwards compatibility, `[]` is interpreted as all applicable permission groups.
     */
    permissionGroups: string[];
}

export interface GetAwsCnpArtifactsFeatureArgs {
    /**
     * RSC feature name. Possible values are `CLOUD_NATIVE_ARCHIVAL`, `CLOUD_NATIVE_PROTECTION`, `CLOUD_NATIVE_S3_PROTECTION`, `EXOCOMPUTE` and `RDS_PROTECTION`.
     */
    name: pulumi.Input<string>;
    /**
     * RSC permission groups for the feature. Possible values are `BASIC`, `EXPORT_AND_RESTORE`, `FILE_LEVEL_RECOVERY`, `SNAPSHOT_PRIVATE_ACCESS`, `PRIVATE_ENDPOINT` and `RSC_MANAGED_CLUSTER`. For backwards compatibility, `[]` is interpreted as all applicable permission groups.
     */
    permissionGroups: pulumi.Input<pulumi.Input<string>[]>;
}

export interface GetAwsCnpPermissionsFeature {
    /**
     * RSC feature name. Possible values are `CLOUD_NATIVE_ARCHIVAL`, `CLOUD_NATIVE_PROTECTION`, `CLOUD_NATIVE_S3_PROTECTION`, `EXOCOMPUTE` and `RDS_PROTECTION`.
     */
    name: string;
    /**
     * RSC permission groups for the feature. Possible values are `BASIC`, `EXPORT_AND_RESTORE`, `FILE_LEVEL_RECOVERY`, `SNAPSHOT_PRIVATE_ACCESS`, `PRIVATE_ENDPOINT` and `RSC_MANAGED_CLUSTER`. For backwards compatibility, `[]` is interpreted as all applicable permission groups.
     */
    permissionGroups: string[];
}

export interface GetAwsCnpPermissionsFeatureArgs {
    /**
     * RSC feature name. Possible values are `CLOUD_NATIVE_ARCHIVAL`, `CLOUD_NATIVE_PROTECTION`, `CLOUD_NATIVE_S3_PROTECTION`, `EXOCOMPUTE` and `RDS_PROTECTION`.
     */
    name: pulumi.Input<string>;
    /**
     * RSC permission groups for the feature. Possible values are `BASIC`, `EXPORT_AND_RESTORE`, `FILE_LEVEL_RECOVERY`, `SNAPSHOT_PRIVATE_ACCESS`, `PRIVATE_ENDPOINT` and `RSC_MANAGED_CLUSTER`. For backwards compatibility, `[]` is interpreted as all applicable permission groups.
     */
    permissionGroups: pulumi.Input<pulumi.Input<string>[]>;
}

