// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ApiOidcConfigIdentityMap {
    /**
     * The username (email or service account id) of the CC user that the token should map to.
     */
    ccIdentity: string;
    /**
     * Indicates that the token_principal field is a regex value.
     */
    isRegex: boolean;
    /**
     * The token value that needs to be mapped.
     */
    tokenIdentity: string;
}

export interface ClusterDedicated {
    /**
     * Number of disk I/O operations per second that are permitted on each node in the cluster. Zero indicates the cloud provider-specific default.
     */
    diskIops: number;
    /**
     * Machine type identifier within the given cloud provider, e.g., m6.xlarge, n2-standard-4.
     */
    machineType: string;
    /**
     * Memory per node in GiB.
     */
    memoryGib: number;
    /**
     * Number of virtual CPUs per node in the cluster.
     */
    numVirtualCpus: number;
    /**
     * Set to true to assign private IP addresses to nodes. Required for CMEK and other advanced networking features.
     */
    privateNetworkVisibility: boolean;
    /**
     * Storage amount per node in GiB.
     */
    storageGib: number;
}

export interface ClusterRegion {
    /**
     * Internal DNS name of the cluster within the cloud provider's network. Used to connect to the cluster with PrivateLink or VPC peering.
     */
    internalDns: string;
    /**
     * Name of the region. Should match the region code used by the cluster's cloud provider.
     */
    name: string;
    /**
     * Number of nodes in the region. Will always be 0 for serverless clusters.
     */
    nodeCount: number;
    /**
     * Set to true to mark this region as the primary for a Serverless cluster. Exactly one region must be primary. Dedicated clusters expect to have no primary region.
     */
    primary: boolean;
    /**
     * DNS name of the cluster's SQL interface. Used to connect to the cluster with IP allowlisting.
     */
    sqlDns: string;
    /**
     * DNS name used when connecting to the DB Console for the cluster.
     */
    uiDns: string;
}

export interface ClusterServerless {
    /**
     * Cluster identifier in a connection string.
     */
    routingId: string;
    /**
     * Spend limit in US cents.
     */
    spendLimit?: number;
    usageLimits?: outputs.ClusterServerlessUsageLimits;
}

export interface ClusterServerlessUsageLimits {
    /**
     * Maximum number of Request Units that the cluster can consume during the month.
     */
    requestUnitLimit: number;
    /**
     * Maximum amount of storage (in MiB) that the cluster can have at any time during the month.
     */
    storageMibLimit: number;
}

export interface CmekAdditionalRegion {
    /**
     * Internal DNS name of the cluster within the cloud provider's network. Used to connect to the cluster with PrivateLink or VPC peering.
     */
    internalDns: string;
    /**
     * Name of the region. Should match the region code used by the cluster's cloud provider.
     */
    name: string;
    /**
     * Number of nodes in the region. Will always be 0 for serverless clusters.
     */
    nodeCount: number;
    /**
     * Set to true to mark this region as the primary for a Serverless cluster. Exactly one region must be primary. Dedicated clusters expect to have no primary region.
     */
    primary: boolean;
    /**
     * DNS name of the cluster's SQL interface. Used to connect to the cluster with IP allowlisting.
     */
    sqlDns: string;
    /**
     * DNS name used when connecting to the DB Console for the cluster.
     */
    uiDns: string;
}

export interface CmekRegion {
    key: outputs.CmekRegionKey;
    /**
     * Cloud provider region code.
     */
    region: string;
    /**
     * Describes the status of the current encryption key within the region.
     */
    status: string;
}

export interface CmekRegionKey {
    /**
     * Principal to authenticate as in order to access the key.
     */
    authPrincipal: string;
    /**
     * Indicates when the key was created.
     */
    createdAt: string;
    /**
     * Current status of this key.
     */
    status: string;
    /**
     * Type of encryption key. Current allowed values are:
     *   * AWS_KMS
     *   * GCP_CLOUD_KMS
     *   * NULL_KMS
     */
    type: string;
    /**
     * Indicates when the key was last updated.
     */
    updatedAt: string;
    /**
     * Provider-specific URI pointing to the encryption key.
     */
    uri: string;
    /**
     * Elaborates on the key's status and hints at how to fix issues that may have occurred during asynchronous key operations.
     */
    userMessage: string;
}

export interface GetClusterDedicated {
    /**
     * Number of disk I/O operations per second that are permitted on each node in the cluster. Zero indicates the cloud provider-specific default.
     */
    diskIops: number;
    /**
     * Machine type identifier within the given cloud provider, ex. m6.xlarge, n2-standard-4.
     */
    machineType: string;
    /**
     * Memory per node in GiB.
     */
    memoryGib: number;
    /**
     * Number of virtual CPUs per node in the cluster.
     */
    numVirtualCpus: number;
    /**
     * Indicates whether private IP addresses are assigned to nodes. Required for CMEK and other advanced networking features.
     */
    privateNetworkVisibility: boolean;
    /**
     * Storage amount per node in GiB.
     */
    storageGib: number;
}

export interface GetClusterRegion {
    /**
     * Internal DNS name of the cluster within the cloud provider's network. Used to connect to the cluster with PrivateLink or VPC peering.
     */
    internalDns: string;
    /**
     * Region code used by the cluster's cloud provider.
     */
    name: string;
    /**
     * Number of nodes in the region. Will always be 0 for serverless clusters.
     */
    nodeCount: number;
    /**
     * Denotes whether this is the primary region in a serverless cluster. Dedicated clusters don't have a primary region.
     */
    primary: boolean;
    /**
     * DNS name of the cluster's SQL interface. Used to connect to the cluster with IP allowlisting.
     */
    sqlDns: string;
    /**
     * DNS name used when connecting to the DB Console for the cluster.
     */
    uiDns: string;
}

export interface GetClusterServerless {
    /**
     * Cluster identifier in a connection string.
     */
    routingId: string;
    /**
     * Spend limit in US cents.
     */
    spendLimit: number;
    usageLimits: outputs.GetClusterServerlessUsageLimits;
}

export interface GetClusterServerlessUsageLimits {
    /**
     * Maximum number of Request Units that the cluster can consume during the month.
     */
    requestUnitLimit: number;
    /**
     * Maximum amount of storage (in MiB) that the cluster can have at any time during the month.
     */
    storageMibLimit: number;
}

export interface GetConnectionStringConnectionParams {
    /**
     * Database value to use in a connection URL.
     */
    database: string;
    /**
     * Host value to use in a connection URL.
     */
    host: string;
    /**
     * Password value to use in a connection URL.
     */
    password: string;
    /**
     * Port value to use in a connection URL.
     */
    port: string;
    /**
     * Username value to use in a connection URL.
     */
    username: string;
}

export interface LogExportConfigGroup {
    /**
     * A list of CockroachDB log channels to include in this group.
     */
    channels: string[];
    /**
     * The name of the group, reflected in the log sink.
     */
    logName: string;
    /**
     * The minimum log level to filter to this log group.
     */
    minLevel?: string;
    /**
     * Governs whether this log group should aggregate redacted logs if unset.
     */
    redact?: boolean;
}

export interface PrivateEndpointServicesService {
    /**
     * Availability Zone IDs of the private endpoint service. It is recommended, for cost optimization purposes, to create the private endpoint spanning these same availability zones. For more information, see data transfer cost information for your cloud provider.
     */
    availabilityZoneIds: string[];
    /**
     * @deprecated Deprecated
     */
    aws: outputs.PrivateEndpointServicesServiceAws;
    /**
     * Cloud provider associated with this service.
     */
    cloudProvider: string;
    /**
     * Server side ID of the private endpoint connection.
     */
    endpointServiceId: string;
    /**
     * Name of the endpoint service.
     */
    name: string;
    /**
     * Cloud provider region code associated with this service.
     */
    regionName: string;
    /**
     * Operation status of the service.
     */
    status: string;
}

export interface PrivateEndpointServicesServiceAws {
    /**
     * AZ IDs users should create their VPCs in to minimize their cost.
     */
    availabilityZoneIds: string[];
    /**
     * Server side ID of the PrivateLink connection.
     */
    serviceId: string;
    /**
     * AWS service name used to create endpoints.
     */
    serviceName: string;
}

export interface PrivateEndpointServicesServicesMap {
    /**
     * Availability Zone IDs of the private endpoint service. It is recommended, for cost optimization purposes, to create the private endpoint spanning these same availability zones. For more information, see data transfer cost information for your cloud provider.
     */
    availabilityZoneIds: string[];
    /**
     * @deprecated Deprecated
     */
    aws: outputs.PrivateEndpointServicesServicesMapAws;
    /**
     * Cloud provider associated with this service.
     */
    cloudProvider: string;
    /**
     * Server side ID of the private endpoint connection.
     */
    endpointServiceId: string;
    /**
     * Name of the endpoint service.
     */
    name: string;
    /**
     * Cloud provider region code associated with this service.
     */
    regionName: string;
    /**
     * Operation status of the service.
     */
    status: string;
}

export interface PrivateEndpointServicesServicesMapAws {
    /**
     * AZ IDs users should create their VPCs in to minimize their cost.
     */
    availabilityZoneIds: string[];
    /**
     * Server side ID of the PrivateLink connection.
     */
    serviceId: string;
    /**
     * AWS service name used to create endpoints.
     */
    serviceName: string;
}

export interface UserRoleGrantRole {
    /**
     * ID of the resource. Required if the resource_type is 'FOLDER' or 'CLUSTER'. It should be omitted otherwise.
     */
    resourceId?: string;
    /**
     * Type of resource. Allowed values are:
     *   * ORGANIZATION
     *   * CLUSTER
     *   * FOLDER
     */
    resourceType: string;
    /**
     * Name of the role to grant. Allowed values are:
     *   * BILLING_COORDINATOR
     *   * ORG_ADMIN
     *   * ORG_MEMBER
     *   * CLUSTER_ADMIN
     *   * CLUSTER_OPERATOR_WRITER
     *   * CLUSTER_DEVELOPER
     *   * CLUSTER_CREATOR
     *   * FOLDER_ADMIN
     *   * FOLDER_MOVER
     */
    roleName: string;
}

export interface UserRoleGrantsRole {
    /**
     * ID of the resource. Required if the resource_type is 'FOLDER' or 'CLUSTER'. It should be omitted otherwise.
     */
    resourceId?: string;
    /**
     * Type of resource. Allowed values are: 
     *   * ORGANIZATION
     *   * CLUSTER
     *   * FOLDER
     */
    resourceType: string;
    /**
     * Name of the role to grant. Allowed values are:
     *   * BILLING_COORDINATOR
     *   * ORG_ADMIN
     *   * ORG_MEMBER
     *   * CLUSTER_ADMIN
     *   * CLUSTER_OPERATOR_WRITER
     *   * CLUSTER_DEVELOPER
     *   * CLUSTER_CREATOR
     *   * FOLDER_ADMIN
     *   * FOLDER_MOVER
     */
    roleName: string;
}

