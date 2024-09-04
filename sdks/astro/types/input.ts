// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ApiTokenCreatedBy {
    apiTokenName?: pulumi.Input<string>;
    avatarUrl?: pulumi.Input<string>;
    fullName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    subjectType?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface ApiTokenRole {
    /**
     * The ID of the entity to assign the role to
     */
    entityId: pulumi.Input<string>;
    /**
     * The type of entity to assign the role to
     */
    entityType: pulumi.Input<string>;
    /**
     * The role to assign to the entity
     */
    role: pulumi.Input<string>;
}

export interface ApiTokenUpdatedBy {
    apiTokenName?: pulumi.Input<string>;
    avatarUrl?: pulumi.Input<string>;
    fullName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    subjectType?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface ClusterHealthStatus {
    /**
     * Cluster health status details
     */
    details?: pulumi.Input<pulumi.Input<inputs.ClusterHealthStatusDetail>[]>;
    /**
     * Cluster health status value
     */
    value?: pulumi.Input<string>;
}

export interface ClusterHealthStatusDetail {
    /**
     * Cluster health status detail code
     */
    code?: pulumi.Input<string>;
    /**
     * Cluster health status detail description
     */
    description?: pulumi.Input<string>;
    /**
     * Cluster health status detail severity
     */
    severity?: pulumi.Input<string>;
}

export interface ClusterMetadata {
    /**
     * Cluster external IPs
     */
    externalIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Cluster kube DNS IP
     */
    kubeDnsIp?: pulumi.Input<string>;
    /**
     * Cluster OIDC issuer URL
     */
    oidcIssuerUrl?: pulumi.Input<string>;
}

export interface ClusterNodePool {
    /**
     * Node pool cloud provider
     */
    cloudProvider?: pulumi.Input<string>;
    /**
     * Node pool cluster identifier
     */
    clusterId?: pulumi.Input<string>;
    /**
     * Node pool creation timestamp
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Node pool identifier
     */
    id?: pulumi.Input<string>;
    /**
     * Whether the node pool is the default node pool of the cluster
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * Node pool maximum node count
     */
    maxNodeCount?: pulumi.Input<number>;
    /**
     * Node pool name
     */
    name?: pulumi.Input<string>;
    /**
     * Node pool node instance type
     */
    nodeInstanceType?: pulumi.Input<string>;
    /**
     * Node pool supported Astro machines
     */
    supportedAstroMachines?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Node pool last updated timestamp
     */
    updatedAt?: pulumi.Input<string>;
}

export interface ClusterTimeouts {
    /**
     * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
     */
    create?: pulumi.Input<string>;
    /**
     * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
     */
    delete?: pulumi.Input<string>;
    /**
     * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
     */
    update?: pulumi.Input<string>;
}

export interface DeploymentCreatedBy {
    apiTokenName?: pulumi.Input<string>;
    avatarUrl?: pulumi.Input<string>;
    fullName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    subjectType?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface DeploymentEnvironmentVariable {
    /**
     * Whether Environment variable is a secret
     */
    isSecret: pulumi.Input<boolean>;
    /**
     * Environment variable key
     */
    key: pulumi.Input<string>;
    /**
     * Environment variable last updated timestamp
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * Environment variable value
     */
    value?: pulumi.Input<string>;
}

export interface DeploymentScalingSpec {
    /**
     * Hibernation configuration for the deployment. The deployment will hibernate according to the schedules defined in this configuration. To remove the hibernation configuration, set scaling_spec to null.
     */
    hibernationSpec: pulumi.Input<inputs.DeploymentScalingSpecHibernationSpec>;
}

export interface DeploymentScalingSpecHibernationSpec {
    /**
     * Hibernation override configuration. Set to null to remove the override.
     */
    override?: pulumi.Input<inputs.DeploymentScalingSpecHibernationSpecOverride>;
    /**
     * List of hibernation schedules. Set to null to remove all schedules.
     */
    schedules?: pulumi.Input<pulumi.Input<inputs.DeploymentScalingSpecHibernationSpecSchedule>[]>;
}

export interface DeploymentScalingSpecHibernationSpecOverride {
    isActive?: pulumi.Input<boolean>;
    isHibernating: pulumi.Input<boolean>;
    overrideUntil?: pulumi.Input<string>;
}

export interface DeploymentScalingSpecHibernationSpecSchedule {
    description?: pulumi.Input<string>;
    hibernateAtCron: pulumi.Input<string>;
    isEnabled: pulumi.Input<boolean>;
    wakeAtCron: pulumi.Input<string>;
}

export interface DeploymentScalingStatus {
    hibernationStatus?: pulumi.Input<inputs.DeploymentScalingStatusHibernationStatus>;
}

export interface DeploymentScalingStatusHibernationStatus {
    isHibernating?: pulumi.Input<boolean>;
    nextEventAt?: pulumi.Input<string>;
    nextEventType?: pulumi.Input<string>;
    reason?: pulumi.Input<string>;
}

export interface DeploymentUpdatedBy {
    apiTokenName?: pulumi.Input<string>;
    avatarUrl?: pulumi.Input<string>;
    fullName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    subjectType?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface DeploymentWorkerQueue {
    /**
     * Worker queue Astro machine value - required for 'STANDARD' and 'DEDICATED' deployments
     */
    astroMachine?: pulumi.Input<string>;
    /**
     * Worker queue default
     */
    isDefault: pulumi.Input<boolean>;
    /**
     * Worker queue max worker count
     */
    maxWorkerCount: pulumi.Input<number>;
    /**
     * Worker queue min worker count
     */
    minWorkerCount: pulumi.Input<number>;
    /**
     * Worker queue name
     */
    name: pulumi.Input<string>;
    /**
     * Worker queue Node pool identifier - required for 'HYBRID' deployments
     */
    nodePoolId?: pulumi.Input<string>;
    /**
     * Worker queue pod CPU
     */
    podCpu?: pulumi.Input<string>;
    /**
     * Worker queue pod memory
     */
    podMemory?: pulumi.Input<string>;
    /**
     * Worker queue worker concurrency
     */
    workerConcurrency: pulumi.Input<number>;
}

export interface TeamCreatedBy {
    apiTokenName?: pulumi.Input<string>;
    avatarUrl?: pulumi.Input<string>;
    fullName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    subjectType?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface TeamDeploymentRole {
    /**
     * The ID of the deployment to assign the role to
     */
    deploymentId: pulumi.Input<string>;
    /**
     * The role to assign to the deployment
     */
    role: pulumi.Input<string>;
}

export interface TeamRolesDeploymentRole {
    /**
     * The ID of the deployment to assign the role to
     */
    deploymentId: pulumi.Input<string>;
    /**
     * The role to assign to the deployment
     */
    role: pulumi.Input<string>;
}

export interface TeamRolesWorkspaceRole {
    /**
     * The role to assign to the workspace
     */
    role: pulumi.Input<string>;
    /**
     * The ID of the workspace to assign the role to
     */
    workspaceId: pulumi.Input<string>;
}

export interface TeamUpdatedBy {
    apiTokenName?: pulumi.Input<string>;
    avatarUrl?: pulumi.Input<string>;
    fullName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    subjectType?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface TeamWorkspaceRole {
    /**
     * The role to assign to the workspace
     */
    role: pulumi.Input<string>;
    /**
     * The ID of the workspace to assign the role to
     */
    workspaceId: pulumi.Input<string>;
}

export interface UserInviteInvitee {
    apiTokenName?: pulumi.Input<string>;
    avatarUrl?: pulumi.Input<string>;
    fullName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    subjectType?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface UserInviteInviter {
    apiTokenName?: pulumi.Input<string>;
    avatarUrl?: pulumi.Input<string>;
    fullName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    subjectType?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface UserRolesDeploymentRole {
    /**
     * The ID of the deployment to assign the role to
     */
    deploymentId: pulumi.Input<string>;
    /**
     * The role to assign to the deployment
     */
    role: pulumi.Input<string>;
}

export interface UserRolesWorkspaceRole {
    /**
     * The role to assign to the workspace
     */
    role: pulumi.Input<string>;
    /**
     * The ID of the workspace to assign the role to
     */
    workspaceId: pulumi.Input<string>;
}

export interface WorkspaceCreatedBy {
    apiTokenName?: pulumi.Input<string>;
    avatarUrl?: pulumi.Input<string>;
    fullName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    subjectType?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface WorkspaceUpdatedBy {
    apiTokenName?: pulumi.Input<string>;
    avatarUrl?: pulumi.Input<string>;
    fullName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    subjectType?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}
