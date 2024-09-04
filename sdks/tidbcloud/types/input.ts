// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ClusterConfig {
    /**
     * The components of the cluster.
     *   - For a Serverless Tier cluster, the components value can not be set.  - For a Dedicated Tier cluster, the components value must be set.
     */
    components?: pulumi.Input<inputs.ClusterConfigComponents>;
    /**
     * A list of IP addresses and Classless Inter-Domain Routing (CIDR) addresses that are allowed to access the TiDB Cloud cluster via [standard connection](https://docs.pingcap.com/tidbcloud/connect-to-tidb-cluster#connect-via-standard-connection).
     */
    ipAccessLists?: pulumi.Input<pulumi.Input<inputs.ClusterConfigIpAccessList>[]>;
    /**
     * lag that indicates whether the cluster is paused. true means to pause the cluster, and false means to resume the cluster.
     *   - The cluster can be paused only when the cluster_status is "AVAILABLE".  - The cluster can be resumed only when the cluster_status is "PAUSED".
     */
    paused?: pulumi.Input<boolean>;
    /**
     * The TiDB port for connection. The port must be in the range of 1024-65535 except 10080, 4000 in default.
     *   - For a Serverless Tier cluster, only port 4000 is available.
     */
    port?: pulumi.Input<number>;
    /**
     * The root password to access the cluster. It must be 8-64 characters.
     */
    rootPassword?: pulumi.Input<string>;
}

export interface ClusterConfigComponents {
    /**
     * The TiDB component of the cluster
     */
    tidb: pulumi.Input<inputs.ClusterConfigComponentsTidb>;
    /**
     * The TiFlash component of the cluster.
     */
    tiflash?: pulumi.Input<inputs.ClusterConfigComponentsTiflash>;
    /**
     * The TiKV component of the cluster
     */
    tikv: pulumi.Input<inputs.ClusterConfigComponentsTikv>;
}

export interface ClusterConfigComponentsTidb {
    /**
     * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the tidbcloud.getClusterSpecs datasource.
     */
    nodeQuantity: pulumi.Input<number>;
    /**
     * The size of the TiDB component in the cluster, You can get the available node size of each region from the tidbcloud.getClusterSpecs datasource.
     *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then their vCPUs need to be the same.
     *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then the cluster does not support TiFlash.
     *   - Can not modify node_size of an existing cluster.
     */
    nodeSize: pulumi.Input<string>;
}

export interface ClusterConfigComponentsTiflash {
    /**
     * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the tidbcloud.getClusterSpecs datasource.
     *   - TiFlash do not support decreasing node quantity.
     */
    nodeQuantity: pulumi.Input<number>;
    /**
     * The size of the TiFlash component in the cluster, You can get the available node size of each region from the tidbcloud.getClusterSpecs datasource.
     *   - Can not modify node_size of an existing cluster.
     */
    nodeSize: pulumi.Input<string>;
    /**
     * The storage size of a node in the cluster. You can get the minimum and maximum of storage size from the tidbcloud.getClusterSpecs datasource.
     *   - Can not modify storage_size_gib of an existing cluster.
     */
    storageSizeGib: pulumi.Input<number>;
}

export interface ClusterConfigComponentsTikv {
    /**
     * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the tidbcloud.getClusterSpecs datasource.
     *   - TiKV do not support decreasing node quantity.
     *   - The node_quantity of TiKV must be a multiple of 3.
     */
    nodeQuantity: pulumi.Input<number>;
    /**
     * The size of the TiKV component in the cluster, You can get the available node size of each region from the tidbcloud.getClusterSpecs datasource.
     *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then their vCPUs need to be the same.
     *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then the cluster does not support TiFlash.
     *   - Can not modify node_size of an existing cluster.
     */
    nodeSize: pulumi.Input<string>;
    /**
     * The storage size of a node in the cluster. You can get the minimum and maximum of storage size from the tidbcloud.getClusterSpecs datasource.
     *   - Can not modify storage_size_gib of an existing cluster.
     */
    storageSizeGib: pulumi.Input<number>;
}

export interface ClusterConfigIpAccessList {
    /**
     * The IP address or CIDR range that you want to add to the cluster's IP access list.
     */
    cidr: pulumi.Input<string>;
    /**
     * Description that explains the purpose of the entry.
     */
    description: pulumi.Input<string>;
}

export interface ClusterStatus {
    /**
     * Status of the cluster.
     */
    clusterStatus?: pulumi.Input<string>;
    /**
     * Connection strings.
     */
    connectionStrings?: pulumi.Input<inputs.ClusterStatusConnectionStrings>;
    /**
     * TiDB version.
     */
    tidbVersion?: pulumi.Input<string>;
}

export interface ClusterStatusConnectionStrings {
    /**
     * The default TiDB user for connection.
     */
    defaultUser?: pulumi.Input<string>;
    /**
     * Standard connection string.
     */
    standard?: pulumi.Input<inputs.ClusterStatusConnectionStringsStandard>;
    /**
     * VPC peering connection string.
     */
    vpcPeering?: pulumi.Input<inputs.ClusterStatusConnectionStringsVpcPeering>;
}

export interface ClusterStatusConnectionStringsStandard {
    /**
     * The host of standard connection.
     */
    host?: pulumi.Input<string>;
    /**
     * The TiDB port for connection. The port must be in the range of 1024-65535 except 10080.
     */
    port?: pulumi.Input<number>;
}

export interface ClusterStatusConnectionStringsVpcPeering {
    /**
     * The host of VPC peering connection.
     */
    host?: pulumi.Input<string>;
    /**
     * The TiDB port for connection. The port must be in the range of 1024-65535 except 10080.
     */
    port?: pulumi.Input<number>;
}

export interface ImportAllCompletedTable {
    message: pulumi.Input<string>;
    result: pulumi.Input<string>;
    tableName: pulumi.Input<string>;
}

export interface ImportCsvFormat {
    /**
     * In CSV file whether to parse backslash inside fields as escape characters (default true).
     */
    backslashEscape?: pulumi.Input<boolean>;
    /**
     * The delimiter used for quoting of CSV file (default "\"").
     */
    delimiter?: pulumi.Input<string>;
    /**
     * In CSV file whether regard the first row as header (default true).
     */
    header?: pulumi.Input<boolean>;
    /**
     * The field separator of CSV file (default ",").
     */
    separator?: pulumi.Input<string>;
    /**
     * In CSV file whether to treat Separator as the line terminator and trim all trailing separators (default false).
     */
    trimLastSeparator?: pulumi.Input<boolean>;
}

export interface ImportTargetTable {
    /**
     * The database of your cluster.
     */
    database?: pulumi.Input<string>;
    /**
     * The table of your cluster.
     */
    table?: pulumi.Input<string>;
}

export interface RestoreCluster {
    /**
     * The ID of the restored cluster. The restored cluster is the new cluster your backup data is restored to.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the restored cluster. The restored cluster is the new cluster your backup data is restored to.
     */
    name?: pulumi.Input<string>;
    /**
     * The status of the restored cluster. Possible values are "AVAILABLE", "CREATING", "MODIFYING", "PAUSED", "RESUMING","UNAVAILABLE", "IMPORTING" and "CLEARED".
     */
    status?: pulumi.Input<string>;
}

export interface RestoreConfig {
    /**
     * The components of the cluster.
     *   - For a Serverless Tier cluster, the components value can not be set.  - For a Dedicated Tier cluster, the components value must be set.
     */
    components: pulumi.Input<inputs.RestoreConfigComponents>;
    /**
     * A list of IP addresses and Classless Inter-Domain Routing (CIDR) addresses that are allowed to access the TiDB Cloud cluster via [standard connection](https://docs.pingcap.com/tidbcloud/connect-to-tidb-cluster#connect-via-standard-connection).
     */
    ipAccessLists?: pulumi.Input<pulumi.Input<inputs.RestoreConfigIpAccessList>[]>;
    /**
     * The TiDB port for connection. The port must be in the range of 1024-65535 except 10080, 4000 in default.
     *   - For a Serverless Tier cluster, only port 4000 is available.
     */
    port?: pulumi.Input<number>;
    /**
     * The root password to access the cluster. It must be 8-64 characters.
     */
    rootPassword: pulumi.Input<string>;
}

export interface RestoreConfigComponents {
    tidb: pulumi.Input<inputs.RestoreConfigComponentsTidb>;
    tiflash?: pulumi.Input<inputs.RestoreConfigComponentsTiflash>;
    tikv: pulumi.Input<inputs.RestoreConfigComponentsTikv>;
}

export interface RestoreConfigComponentsTidb {
    /**
     * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the tidbcloud.getClusterSpecs datasource.
     */
    nodeQuantity: pulumi.Input<number>;
    /**
     * The size of the TiDB component in the cluster, You can get the available node size of each region from the tidbcloud.getClusterSpecs datasource.
     *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then their vCPUs need to be the same.
     *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then the cluster does not support TiFlash.
     *   - Can not modify node_size of an existing cluster.
     */
    nodeSize: pulumi.Input<string>;
}

export interface RestoreConfigComponentsTiflash {
    /**
     * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the tidbcloud.getClusterSpecs datasource.
     */
    nodeQuantity: pulumi.Input<number>;
    /**
     * The size of the TiFlash component in the cluster, You can get the available node size of each region from the tidbcloud.getClusterSpecs datasource.
     *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then their vCPUs need to be the same.
     *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then the cluster does not support TiFlash.
     *   - Can not modify node_size of an existing cluster.
     */
    nodeSize: pulumi.Input<string>;
    /**
     * The storage size of a node in the cluster. You can get the minimum and maximum of storage size from the tidbcloud.getClusterSpecs datasource.
     *   - Can not modify storage_size_gib of an existing cluster.
     */
    storageSizeGib: pulumi.Input<number>;
}

export interface RestoreConfigComponentsTikv {
    /**
     * The number of nodes in the cluster. You can get the minimum and step of a node quantity from the tidbcloud.getClusterSpecs datasource.
     */
    nodeQuantity: pulumi.Input<number>;
    /**
     * The size of the TiKV component in the cluster, You can get the available node size of each region from the tidbcloud.getClusterSpecs datasource.
     *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then their vCPUs need to be the same.
     *   - If the vCPUs of TiDB or TiKV component is 2 or 4, then the cluster does not support TiFlash.
     *   - Can not modify node_size of an existing cluster.
     */
    nodeSize: pulumi.Input<string>;
    /**
     * The storage size of a node in the cluster. You can get the minimum and maximum of storage size from the tidbcloud.getClusterSpecs datasource.
     *   - Can not modify storage_size_gib of an existing cluster.
     */
    storageSizeGib: pulumi.Input<number>;
}

export interface RestoreConfigIpAccessList {
    /**
     * The IP address or CIDR range that you want to add to the cluster's IP access list.
     */
    cidr: pulumi.Input<string>;
    /**
     * Description that explains the purpose of the entry.
     */
    description: pulumi.Input<string>;
}
