// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface DatabaseAws {
    dbInstanceId: pulumi.Input<string>;
    dbSubnetGroupId: pulumi.Input<string>;
    defaultNetworkSecurityGroupId: pulumi.Input<string>;
}

export interface DatabaseAzure {
    databaseServerId: pulumi.Input<string>;
}

export interface DatabaseGcp {
    sqlDatabaseInstanceId: pulumi.Input<string>;
}

export interface DatabaseGcpOverrides {
    /**
     * The project to use for this resource.
     */
    project?: pulumi.Input<string>;
}

export interface KubernetesClusterAws {
    eksClusterId: pulumi.Input<string>;
    iamRoleArn: pulumi.Input<string>;
}

export interface KubernetesClusterAzure {
    aksClusterId: pulumi.Input<string>;
}

export interface KubernetesClusterDefaultNodePool {
    /**
     * Zones to place nodes in. If not set, they will be spread across multiple zones selected by the cloud provider.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * AWS-specific ids of the underlying generated resources
     */
    aws?: pulumi.Input<inputs.KubernetesClusterDefaultNodePoolAws>;
    /**
     * AWS-specific attributes that will be set if this resource is deployed in AWS
     */
    awsOverrides?: pulumi.Input<inputs.KubernetesClusterDefaultNodePoolAwsOverrides>;
    /**
     * Azure-specific ids of the underlying generated resources
     */
    azure?: pulumi.Input<inputs.KubernetesClusterDefaultNodePoolAzure>;
    /**
     * Azure-specific attributes that will be set if this resource is deployed in Azure
     */
    azureOverrides?: pulumi.Input<inputs.KubernetesClusterDefaultNodePoolAzureOverrides>;
    /**
     * Id of the multy kubernetes cluster
     */
    clusterId?: pulumi.Input<string>;
    /**
     * Disk size used for each node.
     */
    diskSizeGb: pulumi.Input<number>;
    /**
     * GCP-specific ids of the underlying generated resources
     */
    gcp?: pulumi.Input<inputs.KubernetesClusterDefaultNodePoolGcp>;
    id?: pulumi.Input<string>;
    /**
     * Labels to be applied to each node.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Maximum number of nodes.
     */
    maxNodeCount: pulumi.Input<number>;
    /**
     * Minimum number of nodes.
     */
    minNodeCount: pulumi.Input<number>;
    /**
     * Name of kubernetes node pool
     */
    name: pulumi.Input<string>;
    /**
     * Statuses of underlying created resources
     */
    resourceStatus?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Number of initial nodes. Defaults to the minimum number of nodes.
     */
    startingNodeCount?: pulumi.Input<number>;
    /**
     * Subnet to place the node and pods in. Must have access to the Internet to connect with the control plane.
     */
    subnetId: pulumi.Input<string>;
    /**
     * Size of Virtual Machine used for the nodes. Accepted values are `general_micro`, `general_medium`, `general_large`, `general_nano`, `general_small`, `general_xlarge`, `general_2xlarge`, `compute_large`, `compute_xlarge`, `compute_2xlarge`, `compute_4xlarge`, `compute_8xlarge`, `memory_large`, `memory_xlarge`, `memory_2xlarge`, `memory_4xlarge`, `memory_8xlarge`, `memory_12xlarge` or `memory_16xlarge`
     */
    vmSize: pulumi.Input<string>;
}

export interface KubernetesClusterDefaultNodePoolAws {
    eksNodePoolId: pulumi.Input<string>;
    iamRoleArn: pulumi.Input<string>;
}

export interface KubernetesClusterDefaultNodePoolAwsOverrides {
    /**
     * The instance type to use for nodes.
     */
    instanceTypes?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubernetesClusterDefaultNodePoolAzure {
    aksNodePoolId: pulumi.Input<string>;
}

export interface KubernetesClusterDefaultNodePoolAzureOverrides {
    /**
     * The size to use for nodes.
     */
    vmSize?: pulumi.Input<string>;
}

export interface KubernetesClusterDefaultNodePoolGcp {
    gkeNodePoolId: pulumi.Input<string>;
}

export interface KubernetesClusterGcp {
    gkeClusterId: pulumi.Input<string>;
    serviceAccountEmail: pulumi.Input<string>;
}

export interface KubernetesClusterGcpOverrides {
    /**
     * The project to use for this resource.
     */
    project?: pulumi.Input<string>;
}

export interface KubernetesNodePoolAws {
    eksNodePoolId: pulumi.Input<string>;
    iamRoleArn: pulumi.Input<string>;
}

export interface KubernetesNodePoolAwsOverrides {
    /**
     * The instance type to use for nodes.
     */
    instanceTypes?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface KubernetesNodePoolAzure {
    aksNodePoolId: pulumi.Input<string>;
}

export interface KubernetesNodePoolAzureOverrides {
    /**
     * The size to use for nodes.
     */
    vmSize?: pulumi.Input<string>;
}

export interface KubernetesNodePoolGcp {
    gkeNodePoolId: pulumi.Input<string>;
}

export interface NetworkInterfaceAws {
    eipAssociationId: pulumi.Input<string>;
    networkInterfaceId: pulumi.Input<string>;
}

export interface NetworkInterfaceAzure {
    networkInterfaceId: pulumi.Input<string>;
}

export interface NetworkSecurityGroupAws {
    securityGroupId: pulumi.Input<string>;
}

export interface NetworkSecurityGroupAzure {
    networkSecurityGroupId: pulumi.Input<string>;
}

export interface NetworkSecurityGroupGcp {
    computeFirewallIds: pulumi.Input<pulumi.Input<string>[]>;
}

export interface NetworkSecurityGroupGcpOverrides {
    /**
     * The project to use for this resource.
     */
    project?: pulumi.Input<string>;
}

export interface NetworkSecurityGroupRule {
    /**
     * CIDR block of network rule
     */
    cidrBlock: pulumi.Input<string>;
    /**
     * Direction of network rule. Accepted values are `ingress`, `egress` or `both`
     */
    direction: pulumi.Input<string>;
    /**
     * From port of network rule port range. Value must be in between 0 and 65535
     */
    fromPort: pulumi.Input<number>;
    /**
     * Priority of network rule. Value must be in between 0 and 0
     */
    priority: pulumi.Input<number>;
    /**
     * Protocol of network rule. Accepted values are `tcp`, `udp` or `icmp`
     */
    protocol: pulumi.Input<string>;
    /**
     * To port of network rule port range. Value must be in between 0 and 65535
     */
    toPort: pulumi.Input<number>;
}

export interface ObjectStorageAws {
    s3BucketArn: pulumi.Input<string>;
}

export interface ObjectStorageAzure {
    privateStorageContainerId: pulumi.Input<string>;
    publicStorageContainerId: pulumi.Input<string>;
    storageAccountId: pulumi.Input<string>;
}

export interface ObjectStorageGcp {
    storageBucketId: pulumi.Input<string>;
}

export interface ObjectStorageGcpOverrides {
    /**
     * The project to use for this resource.
     */
    project?: pulumi.Input<string>;
}

export interface ObjectStorageObjectAws {
    s3BucketObjectId: pulumi.Input<string>;
}

export interface ObjectStorageObjectAzure {
    storageBlobId: pulumi.Input<string>;
}

export interface ObjectStorageObjectGcp {
    storageBucketObjectId: pulumi.Input<string>;
    storageObjectAccessControl: pulumi.Input<string>;
}

export interface ProviderAws {
    /**
     * AWS Access Key ID. Can be provided via the `AWS_ACCESS_KEY_ID` environment variable
     */
    accessKeyId?: pulumi.Input<string>;
    /**
     * AWS Secret Access Key. Can be provided via the `AWS_SECRET_ACCESS_KEY` environment variable
     */
    accessKeySecret?: pulumi.Input<string>;
    /**
     * Optional AWS session token. Used to authenticate  Can be provided via the `AWS_SESSION_TOKEN` environment variable
     */
    sessionToken?: pulumi.Input<string>;
}

export interface ProviderAzure {
    /**
     * Azure Client ID Can be provided via the `ARM_CLIENT_ID` environment variable
     */
    clientId?: pulumi.Input<string>;
    /**
     * Azure Client Secret Can be provided via the `ARM_CLIENT_SECRET` environment variable
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Azure Subscription ID. Can be provided via the `ARM_SUBSCRIPTION_ID` environment variable
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * Azure Tenant ID Can be provided via the `ARM_TENANT_ID` environment variable
     */
    tenantId?: pulumi.Input<string>;
}

export interface ProviderGcp {
    /**
     * Either the path to or the contents of a service account key file in JSON format. Can be provided via the `GOOGLE_APPLICATION_CREDENTIALS` environment variable
     */
    credentials?: pulumi.Input<string>;
    /**
     * The project to manage resources in. Can be provided via the `GOOGLE_CREDENTIALS` environment variable
     */
    project?: pulumi.Input<string>;
}

export interface PublicIpAws {
    publicIpId: pulumi.Input<string>;
}

export interface PublicIpAzure {
    publicIpId: pulumi.Input<string>;
}

export interface PublicIpGcp {
    computeAddressId: pulumi.Input<string>;
}

export interface PublicIpGcpOverrides {
    /**
     * The project to use for this resource.
     */
    project?: pulumi.Input<string>;
}

export interface RouteTableAssociationAws {
    routeTableAssociationIdByAvailabilityZone: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface RouteTableAws {
    routeTableId: pulumi.Input<string>;
}

export interface RouteTableAzure {
    routeTableId: pulumi.Input<string>;
}

export interface RouteTableGcp {
    computeRouteIds: pulumi.Input<pulumi.Input<string>[]>;
}

export interface RouteTableRoute {
    /**
     * CIDR block of network rule
     */
    cidrBlock: pulumi.Input<string>;
    /**
     * Destination of route. Accepted values are `internet`
     */
    destination: pulumi.Input<string>;
}

export interface SubnetAws {
    subnetIdByAvailabilityZone: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface SubnetAzure {
    subnetId: pulumi.Input<string>;
}

export interface SubnetGcp {
    computeSubnetworkId: pulumi.Input<string>;
}

export interface VaultAccessPolicyAws {
    iamPolicyArn: pulumi.Input<string>;
}

export interface VaultAccessPolicyAzure {
    keyVaultAccessPolicyId: pulumi.Input<string>;
}

export interface VaultAccessPolicyGcp {
    secretManagerSecretIamMembershipIds: pulumi.Input<pulumi.Input<string>[]>;
}

export interface VaultAzure {
    keyVaultId: pulumi.Input<string>;
}

export interface VaultGcpOverrides {
    /**
     * The project to use for this resource.
     */
    project?: pulumi.Input<string>;
}

export interface VaultSecretAws {
    ssmParameterArn: pulumi.Input<string>;
}

export interface VaultSecretAzure {
    keyVaultSecretId: pulumi.Input<string>;
}

export interface VaultSecretGcp {
    secretManagerSecretId: pulumi.Input<string>;
    secretManagerSecretVersionId: pulumi.Input<string>;
}

export interface VirtualMachineAwsOverrides {
    /**
     * The instance type to use for the instance.
     */
    instanceType?: pulumi.Input<string>;
}

export interface VirtualMachineAzureOverrides {
    /**
     * The size to use for the instance.
     */
    size?: pulumi.Input<string>;
}

export interface VirtualMachineGcpOverrides {
    /**
     * The project to use for this resource.
     */
    project?: pulumi.Input<string>;
}

export interface VirtualMachineImageReference {
    /**
     * Operating System of Virtual Machine. Accepted values are `ubuntu`, `debian` or `cent_os`
     */
    os: pulumi.Input<string>;
    /**
     * OS Version
     */
    version: pulumi.Input<string>;
}

export interface VirtualNetworkAws {
    defaultSecurityGroupId: pulumi.Input<string>;
    internetGatewayId: pulumi.Input<string>;
    vpcId: pulumi.Input<string>;
}

export interface VirtualNetworkAzure {
    localRouteTableId: pulumi.Input<string>;
    virtualNetworkId: pulumi.Input<string>;
}

export interface VirtualNetworkGcp {
    computeNetworkId: pulumi.Input<string>;
    defaultComputeFirewallId: pulumi.Input<string>;
}

export interface VirtualNetworkGcpOverrides {
    /**
     * The project to use for this resource.
     */
    project?: pulumi.Input<string>;
}
export namespace config {
}
