// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface BareMetalServerTimeouts {
    create?: string;
    update?: string;
}

export interface DatabaseReadReplica {
    clusterTimeZone: string;
    databaseEngine: string;
    databaseEngineVersion: string;
    dateCreated: string;
    dbname: string;
    ferretdbCredentials: {[key: string]: string};
    host: string;
    id: string;
    label: string;
    latestBackup: string;
    maintenanceDow: string;
    maintenanceTime: string;
    mysqlLongQueryTime: number;
    mysqlRequirePrimaryKey: boolean;
    mysqlSlowQueryLog: boolean;
    mysqlSqlModes: string[];
    password: string;
    plan: string;
    planDisk: number;
    planRam: number;
    planReplicas: number;
    planVcpus: number;
    port: string;
    publicHost: string;
    redisEvictionPolicy: string;
    region: string;
    status: string;
    tag: string;
    trustedIps: string[];
    user: string;
    vpcId: string;
}

export interface DatabaseReplicaTimeouts {
    create?: string;
    update?: string;
}

export interface DatabaseTimeouts {
    create?: string;
    update?: string;
}

export interface DatabaseUserAccessControl {
    redisAclCategories: string[];
    redisAclChannels: string[];
    redisAclCommands: string[];
    redisAclKeys: string[];
}

export interface GetApplicationFilter {
    name: string;
    values: string[];
}

export interface GetBackupFilter {
    name: string;
    values: string[];
}

export interface GetBareMetalPlanFilter {
    name: string;
    values: string[];
}

export interface GetBareMetalServerFilter {
    name: string;
    values: string[];
}

export interface GetBlockStorageFilter {
    name: string;
    values: string[];
}

export interface GetContainerRegistryFilter {
    name: string;
    values: string[];
}

export interface GetContainerRegistryRepository {
    artifactCount: number;
    dateCreated: string;
    dateModified: string;
    description: string;
    image: string;
    name: string;
    pullCount: number;
}

export interface GetDatabaseFilter {
    name: string;
    values: string[];
}

export interface GetDatabaseReadReplica {
    clusterTimeZone: string;
    databaseEngine: string;
    databaseEngineVersion: string;
    dateCreated: string;
    dbname: string;
    ferretdbCredentials: {[key: string]: string};
    host: string;
    id: string;
    label: string;
    latestBackup: string;
    maintenanceDow: string;
    maintenanceTime: string;
    mysqlLongQueryTime: number;
    mysqlRequirePrimaryKey: boolean;
    mysqlSlowQueryLog: boolean;
    mysqlSqlModes: string[];
    password: string;
    plan: string;
    planDisk: number;
    planRam: number;
    planReplicas: number;
    planVcpus: number;
    port: string;
    publicHost: string;
    redisEvictionPolicy: string;
    region: string;
    status: string;
    tag: string;
    trustedIps: string[];
    user: string;
    vpcId: string;
}

export interface GetFirewallGroupFilter {
    name: string;
    values: string[];
}

export interface GetInferenceFilter {
    name: string;
    values: string[];
}

export interface GetInstanceFilter {
    name: string;
    values: string[];
}

export interface GetInstanceIpv4Filter {
    name: string;
    values: string[];
}

export interface GetInstancesFilter {
    name: string;
    values: string[];
}

export interface GetInstancesInstance {
    allowedBandwidth: number;
    appId: number;
    backups: string;
    backupsSchedule: {[key: string]: string};
    dateCreated: string;
    disk: number;
    features: string[];
    firewallGroupId: string;
    gatewayV4: string;
    hostname: string;
    id: string;
    imageId: string;
    internalIp: string;
    kvm: string;
    label: string;
    location: string;
    mainIp: string;
    netmaskV4: string;
    os: string;
    osId: number;
    plan: string;
    powerStatus: string;
    privateNetworkIds: string[];
    ram: number;
    region: string;
    serverStatus: string;
    status: string;
    tags: string[];
    v6MainIp: string;
    v6Network: string;
    v6NetworkSize: number;
    vcpuCount: number;
    vpcIds: string[];
}

export interface GetIsoPrivateFilter {
    name: string;
    values: string[];
}

export interface GetIsoPublicFilter {
    name: string;
    values: string[];
}

export interface GetKubernetesFilter {
    name: string;
    values: string[];
}

export interface GetKubernetesNodePool {
    autoScaler: boolean;
    dateCreated: string;
    dateUpdated: string;
    id: string;
    label: string;
    maxNodes: number;
    minNodes: number;
    nodeQuantity: number;
    nodes: outputs.GetKubernetesNodePoolNode[];
    plan: string;
    status: string;
    tag: string;
}

export interface GetKubernetesNodePoolNode {
    dateCreated: string;
    id: string;
    label: string;
    status: string;
}

export interface GetLoadBalancerFilter {
    name: string;
    values: string[];
}

export interface GetObjectStorageClusterFilter {
    name: string;
    values: string[];
}

export interface GetObjectStorageFilter {
    name: string;
    values: string[];
}

export interface GetOsFilter {
    name: string;
    values: string[];
}

export interface GetPlanFilter {
    name: string;
    values: string[];
}

export interface GetRegionFilter {
    name: string;
    values: string[];
}

export interface GetReservedIpFilter {
    name: string;
    values: string[];
}

export interface GetReverseIpv4Filter {
    name: string;
    values: string[];
}

export interface GetReverseIpv6Filter {
    name: string;
    values: string[];
}

export interface GetSnapshotFilter {
    name: string;
    values: string[];
}

export interface GetSshKeyFilter {
    name: string;
    values: string[];
}

export interface GetStartupScriptFilter {
    name: string;
    values: string[];
}

export interface GetUserFilter {
    name: string;
    values: string[];
}

export interface GetVpc2Filter {
    name: string;
    values: string[];
}

export interface GetVpcFilter {
    name: string;
    values: string[];
}

export interface InferenceTimeouts {
    create?: string;
    update?: string;
}

export interface InstanceBackupsSchedule {
    dom: number;
    dow: number;
    hour: number;
    type: string;
}

export interface InstanceTimeouts {
    create?: string;
    update?: string;
}

export interface KubernetesNodePools {
    autoScaler?: boolean;
    dateCreated: string;
    dateUpdated: string;
    id: string;
    label: string;
    maxNodes?: number;
    minNodes?: number;
    nodeQuantity: number;
    nodes: outputs.KubernetesNodePoolsNode[];
    plan: string;
    status: string;
    tag: string;
}

export interface KubernetesNodePoolsNode {
    dateCreated: string;
    id: string;
    label: string;
    status: string;
}

export interface LoadBalancerFirewallRule {
    id: string;
    ipType: string;
    port: number;
    source: string;
}

export interface LoadBalancerForwardingRule {
    backendPort: number;
    backendProtocol: string;
    frontendPort: number;
    frontendProtocol: string;
    ruleId: string;
}

export interface LoadBalancerHealthCheck {
    checkInterval?: number;
    healthyThreshold?: number;
    path?: string;
    port: number;
    protocol: string;
    responseTimeout?: number;
    unhealthyThreshold?: number;
}

export interface LoadBalancerSsl {
    certificate: string;
    chain?: string;
    privateKey: string;
}

