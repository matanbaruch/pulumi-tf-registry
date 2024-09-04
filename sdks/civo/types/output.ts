// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface DatabaseTimeouts {
    create?: string;
    delete?: string;
    update?: string;
}

export interface FirewallEgressRule {
    /**
     * The action of the rule can be allow or deny. When we set the `action = 'allow'`, this is going to add a rule to allow traffic. Similarly, setting `action = 'deny'` will deny the traffic.
     */
    action: string;
    /**
     * The CIDR notation of the other end to affect, or a valid network CIDR (e.g. 0.0.0.0/0 to open for everyone or 1.2.3.4/32 to open just for a specific IP address)
     */
    cidrs: string[];
    id: string;
    /**
     * A string that will be the displayed name/reference for this rule
     */
    label?: string;
    /**
     * The port or port range to open, can be a single port or a range separated by a dash (`-`), e.g. `80` or `80-443`
     */
    portRange?: string;
    /**
     * The protocol choice from `tcp`, `udp` or `icmp` (the default if unspecified is `tcp`)
     */
    protocol?: string;
}

export interface FirewallIngressRule {
    /**
     * The action of the rule can be allow or deny. When we set the `action = 'allow'`, this is going to add a rule to allow traffic. Similarly, setting `action = 'deny'` will deny the traffic.
     */
    action: string;
    /**
     * The CIDR notation of the other end to affect, or a valid network CIDR (e.g. 0.0.0.0/0 to open for everyone or 1.2.3.4/32 to open just for a specific IP address)
     */
    cidrs: string[];
    id: string;
    /**
     * A string that will be the displayed name/reference for this rule
     */
    label?: string;
    /**
     * The port or port range to open, can be a single port or a range separated by a dash (`-`), e.g. `80` or `80-443`
     */
    portRange?: string;
    /**
     * The protocol choice from `tcp`, `udp` or `icmp` (the default if unspecified is `tcp`)
     */
    protocol?: string;
}

export interface FirewallTimeouts {
    create?: string;
    delete?: string;
    update?: string;
}

export interface GetDatabaseVersionFilter {
    /**
     * Set to `true` to require that a field match all of the `values` instead of just one or more of them. This is useful when matching against multi-valued fields such as lists or sets where you want to ensure that all of the `values` are present in the list or set.
     */
    all?: boolean;
    /**
     * Filter versions by this key. This may be one of `default`, `engine`, `version`.
     */
    key: string;
    /**
     * One of `exact` (default), `re`, or `substring`. For string-typed fields, specify `re` to match by using the `values` as regular expressions, or specify `substring` to match by treating the `values` as substrings to find within the string field.
     */
    matchBy?: string;
    /**
     * Only retrieves `versions` which keys has value that matches one of the values provided here
     */
    values: string[];
}

export interface GetDatabaseVersionSort {
    /**
     * The sort direction. This may be either `asc` or `desc`.
     */
    direction?: string;
    /**
     * Sort versions by this key. This may be one of `default`, `engine`, `version`.
     */
    key: string;
}

export interface GetDatabaseVersionVersion {
    default: boolean;
    engine: string;
    version: string;
}

export interface GetDiskImageDiskimage {
    id: string;
    label: string;
    name: string;
    version: string;
}

export interface GetDiskImageFilter {
    /**
     * Set to `true` to require that a field match all of the `values` instead of just one or more of them. This is useful when matching against multi-valued fields such as lists or sets where you want to ensure that all of the `values` are present in the list or set.
     */
    all?: boolean;
    /**
     * Filter diskimages by this key. This may be one of `id`, `label`, `name`, `version`.
     */
    key: string;
    /**
     * One of `exact` (default), `re`, or `substring`. For string-typed fields, specify `re` to match by using the `values` as regular expressions, or specify `substring` to match by treating the `values` as substrings to find within the string field.
     */
    matchBy?: string;
    /**
     * Only retrieves `diskimages` which keys has value that matches one of the values provided here
     */
    values: string[];
}

export interface GetDiskImageSort {
    /**
     * The sort direction. This may be either `asc` or `desc`.
     */
    direction?: string;
    /**
     * Sort diskimages by this key. This may be one of `id`, `label`, `name`, `version`.
     */
    key: string;
}

export interface GetInstancesFilter {
    /**
     * Set to `true` to require that a field match all of the `values` instead of just one or more of them. This is useful when matching against multi-valued fields such as lists or sets where you want to ensure that all of the `values` are present in the list or set.
     */
    all?: boolean;
    /**
     * Filter instances by this key. This may be one of `cpu_cores`, `created_at`, `disk_gb`, `firewall_id`, `hostname`, `id`, `initial_password`, `initial_user`, `network_id`, `notes`, `private_ip`, `pseudo_ip`, `public_ip`, `ram_mb`, `region`, `reverse_dns`, `script`, `size`, `sshkey_id`, `status`, `tags`, `template`.
     */
    key: string;
    /**
     * One of `exact` (default), `re`, or `substring`. For string-typed fields, specify `re` to match by using the `values` as regular expressions, or specify `substring` to match by treating the `values` as substrings to find within the string field.
     */
    matchBy?: string;
    /**
     * Only retrieves `instances` which keys has value that matches one of the values provided here
     */
    values: string[];
}

export interface GetInstancesInstance {
    cpuCores: number;
    createdAt: string;
    diskGb: number;
    firewallId: string;
    hostname: string;
    id: string;
    initialPassword: string;
    initialUser: string;
    networkId: string;
    notes: string;
    privateIp: string;
    pseudoIp: string;
    publicIp: string;
    ramMb: number;
    region: string;
    reverseDns: string;
    script: string;
    size: string;
    sshkeyId: string;
    status: string;
    tags: string[];
    template: string;
}

export interface GetInstancesSort {
    /**
     * The sort direction. This may be either `asc` or `desc`.
     */
    direction?: string;
    /**
     * Sort instances by this key. This may be one of `cpu_cores`, `created_at`, `disk_gb`, `firewall_id`, `hostname`, `id`, `initial_password`, `initial_user`, `network_id`, `notes`, `private_ip`, `pseudo_ip`, `public_ip`, `ram_mb`, `region`, `reverse_dns`, `script`, `size`, `sshkey_id`, `status`, `template`.
     */
    key: string;
}

export interface GetKubernetesClusterInstalledApplication {
    application: string;
    category: string;
    installed: boolean;
    version: string;
}

export interface GetKubernetesClusterPool {
    instanceNames: string[];
    label: string;
    labels: {[key: string]: string};
    nodeCount: number;
    publicIpNodePool: boolean;
    size: string;
    taints: outputs.GetKubernetesClusterPoolTaint[];
}

export interface GetKubernetesClusterPoolTaint {
    effect: string;
    key: string;
    value: string;
}

export interface GetKubernetesVersionFilter {
    /**
     * Set to `true` to require that a field match all of the `values` instead of just one or more of them. This is useful when matching against multi-valued fields such as lists or sets where you want to ensure that all of the `values` are present in the list or set.
     */
    all?: boolean;
    /**
     * Filter versions by this key. This may be one of `default`, `label`, `type`, `version`.
     */
    key: string;
    /**
     * One of `exact` (default), `re`, or `substring`. For string-typed fields, specify `re` to match by using the `values` as regular expressions, or specify `substring` to match by treating the `values` as substrings to find within the string field.
     */
    matchBy?: string;
    /**
     * Only retrieves `versions` which keys has value that matches one of the values provided here
     */
    values: string[];
}

export interface GetKubernetesVersionSort {
    /**
     * The sort direction. This may be either `asc` or `desc`.
     */
    direction?: string;
    /**
     * Sort versions by this key. This may be one of `default`, `label`, `type`, `version`.
     */
    key: string;
}

export interface GetKubernetesVersionVersion {
    default: boolean;
    label: string;
    type: string;
    version: string;
}

export interface GetLoadbalancerBackend {
    healthCheckPort: number;
    ip: string;
    protocol: string;
    sourcePort: number;
    targetPort: number;
}

export interface GetRegionFilter {
    /**
     * Set to `true` to require that a field match all of the `values` instead of just one or more of them. This is useful when matching against multi-valued fields such as lists or sets where you want to ensure that all of the `values` are present in the list or set.
     */
    all?: boolean;
    /**
     * Filter regions by this key. This may be one of `code`, `country`, `default`, `name`.
     */
    key: string;
    /**
     * One of `exact` (default), `re`, or `substring`. For string-typed fields, specify `re` to match by using the `values` as regular expressions, or specify `substring` to match by treating the `values` as substrings to find within the string field.
     */
    matchBy?: string;
    /**
     * Only retrieves `regions` which keys has value that matches one of the values provided here
     */
    values: string[];
}

export interface GetRegionRegion {
    code: string;
    country: string;
    default: boolean;
    name: string;
}

export interface GetRegionSort {
    /**
     * The sort direction. This may be either `asc` or `desc`.
     */
    direction?: string;
    /**
     * Sort regions by this key. This may be one of `code`, `country`, `default`, `name`.
     */
    key: string;
}

export interface GetSizeFilter {
    /**
     * Set to `true` to require that a field match all of the `values` instead of just one or more of them. This is useful when matching against multi-valued fields such as lists or sets where you want to ensure that all of the `values` are present in the list or set.
     */
    all?: boolean;
    /**
     * Filter sizes by this key. This may be one of `cpu`, `description`, `disk`, `gpu_type`, `gpu`, `name`, `ram`, `selectable`, `type`.
     */
    key: string;
    /**
     * One of `exact` (default), `re`, or `substring`. For string-typed fields, specify `re` to match by using the `values` as regular expressions, or specify `substring` to match by treating the `values` as substrings to find within the string field.
     */
    matchBy?: string;
    /**
     * Only retrieves `sizes` which keys has value that matches one of the values provided here
     */
    values: string[];
}

export interface GetSizeSize {
    cpu: number;
    description: string;
    disk: number;
    gpu: number;
    gpuType: string;
    name: string;
    ram: number;
    selectable: boolean;
    type: string;
}

export interface GetSizeSort {
    /**
     * The sort direction. This may be either `asc` or `desc`.
     */
    direction?: string;
    /**
     * Sort sizes by this key. This may be one of `cpu`, `description`, `disk`, `gpu_type`, `gpu`, `name`, `ram`, `selectable`, `type`.
     */
    key: string;
}

export interface InstanceReservedIpAssignmentTimeouts {
    create?: string;
}

export interface InstanceTimeouts {
    create?: string;
    delete?: string;
    update?: string;
}

export interface KubernetesClusterInstalledApplication {
    application: string;
    category: string;
    installed: boolean;
    version: string;
}

export interface KubernetesClusterPools {
    /**
     * Instance names in the nodepool
     */
    instanceNames: string[];
    /**
     * Node pool label, if you don't provide one, we will generate one for you
     */
    label: string;
    labels?: {[key: string]: string};
    /**
     * Number of nodes in the nodepool
     */
    nodeCount: number;
    /**
     * Node pool belongs to the public ip node pool
     */
    publicIpNodePool: boolean;
    /**
     * Size of the nodes in the nodepool
     */
    size: string;
    taints?: outputs.KubernetesClusterPoolsTaint[];
}

export interface KubernetesClusterPoolsTaint {
    effect: string;
    key: string;
    value: string;
}

export interface KubernetesClusterTimeouts {
    create?: string;
    delete?: string;
    update?: string;
}

export interface KubernetesNodePoolTaint {
    effect: string;
    key: string;
    value: string;
}

export interface KubernetesNodePoolTimeouts {
    create?: string;
    delete?: string;
    update?: string;
}

export interface NetworkTimeouts {
    create?: string;
    delete?: string;
    update?: string;
}

export interface ObjectStoreCredentialTimeouts {
    create?: string;
}

export interface ObjectStoreTimeouts {
    create?: string;
}

