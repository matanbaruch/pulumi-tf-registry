// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface IntegrationAwsCredentials {
    key?: pulumi.Input<inputs.IntegrationAwsCredentialsKey>;
    role?: pulumi.Input<inputs.IntegrationAwsCredentialsRole>;
}

export interface IntegrationAwsCredentialsKey {
    accessKey: pulumi.Input<string>;
    secretKey: pulumi.Input<string>;
}

export interface IntegrationAwsCredentialsRole {
    externalId?: pulumi.Input<string>;
    roleArn: pulumi.Input<string>;
}

export interface IntegrationAwsServerlessScanConfiguration {
    /**
     * Cron scan in hours.
     */
    cronScanInHours?: pulumi.Input<number>;
    /**
     * Enable EC2 scan.
     */
    ec2Scan?: pulumi.Input<boolean>;
    ec2ScanOptions: pulumi.Input<inputs.IntegrationAwsServerlessScanConfigurationEc2ScanOptions>;
    /**
     * Enable ECR scan.
     */
    ecrScan?: pulumi.Input<boolean>;
    /**
     * Enable ECS scan.
     */
    ecsScan?: pulumi.Input<boolean>;
    eventScanTriggers?: pulumi.Input<inputs.IntegrationAwsServerlessScanConfigurationEventScanTriggers>;
}

export interface IntegrationAwsServerlessScanConfigurationEc2ScanOptions {
    ebsScanOptions: pulumi.Input<inputs.IntegrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptions>;
    /**
     * Enable EBS volume scan.
     */
    ebsVolumeScan?: pulumi.Input<boolean>;
    /**
     * Enable instance connect.
     */
    instanceConnect?: pulumi.Input<boolean>;
    /**
     * List of instance IDs filter.
     */
    instanceIdsFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of regions filter.
     */
    regionsFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Enable SSM.
     */
    ssm?: pulumi.Input<boolean>;
    /**
     * Tags filter.
     */
    tagsFilter?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface IntegrationAwsServerlessScanConfigurationEc2ScanOptionsEbsScanOptions {
    /**
     * Max ASG instances.
     */
    maxAsgInstances?: pulumi.Input<number>;
    /**
     * Target instances per scanner.
     */
    targetInstancesPerScanner?: pulumi.Input<number>;
}

export interface IntegrationAwsServerlessScanConfigurationEventScanTriggers {
    /**
     * Event detail type.
     */
    eventDetailType?: pulumi.Input<string>;
    /**
     * Event source.
     */
    eventSource?: pulumi.Input<string>;
    /**
     * Scan type.
     */
    scanType?: pulumi.Input<string>;
}

export interface IntegrationAzureCredentials {
    /**
     * PEM file for Azure integration.
     */
    pemFile: pulumi.Input<string>;
}

export interface IntegrationGcpCredentials {
    privateKey: pulumi.Input<string>;
}

export interface IntegrationGithubCredentials {
    /**
     * Token for GitHub integration.
     */
    token: pulumi.Input<string>;
}

export interface IntegrationMs365Credentials {
    /**
     * PEM file for Ms365 integration.
     */
    pemFile: pulumi.Input<string>;
}

export interface IntegrationOciTenantCredentials {
    fingerprint: pulumi.Input<string>;
    privateKey: pulumi.Input<string>;
}

export interface ScimGroupMappingMapping {
    iamRole: pulumi.Input<string>;
    orgMrn?: pulumi.Input<string>;
    spaceMrn?: pulumi.Input<string>;
}
