// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface GetClientConfigurationClientConfiguration {
    /**
     * The client CA certificate
     */
    caCertificate: string;
    /**
     * The client certificate
     */
    clientCertificate: string;
    /**
     * The client key
     */
    clientKey: string;
}

export interface GetClusterHealthClientConfiguration {
    /**
     * The client CA certificate
     */
    caCertificate: string;
    /**
     * The client certificate
     */
    clientCertificate: string;
    /**
     * The client key
     */
    clientKey: string;
}

export interface GetClusterHealthTimeouts {
    /**
     * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
     */
    read?: string;
}

export interface GetClusterKubeconfigClientConfiguration {
    /**
     * The client CA certificate
     */
    caCertificate: string;
    /**
     * The client certificate
     */
    clientCertificate: string;
    /**
     * The client key
     */
    clientKey: string;
}

export interface GetClusterKubeconfigKubernetesClientConfiguration {
    /**
     * The kubernetes CA certificate
     */
    caCertificate: string;
    /**
     * The kubernetes client certificate
     */
    clientCertificate: string;
    /**
     * The kubernetes client key
     */
    clientKey: string;
    /**
     * The kubernetes host
     */
    host: string;
}

export interface GetClusterKubeconfigTimeouts {
    /**
     * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
     */
    read?: string;
}

export interface GetMachineConfigurationMachineSecrets {
    /**
     * The certs for the talos kubernetes cluster
     */
    certs: outputs.GetMachineConfigurationMachineSecretsCerts;
    /**
     * The cluster secrets
     */
    cluster: outputs.GetMachineConfigurationMachineSecretsCluster;
    /**
     * The secrets for the talos kubernetes cluster
     */
    secrets: outputs.GetMachineConfigurationMachineSecretsSecrets;
    /**
     * The trustd info for the talos kubernetes cluster
     */
    trustdinfo: outputs.GetMachineConfigurationMachineSecretsTrustdinfo;
}

export interface GetMachineConfigurationMachineSecretsCerts {
    /**
     * The certificate and key pair
     */
    etcd: outputs.GetMachineConfigurationMachineSecretsCertsEtcd;
    /**
     * The certificate and key pair
     */
    k8s: outputs.GetMachineConfigurationMachineSecretsCertsK8s;
    /**
     * The certificate and key pair
     */
    k8sAggregator: outputs.GetMachineConfigurationMachineSecretsCertsK8sAggregator;
    k8sServiceaccount: outputs.GetMachineConfigurationMachineSecretsCertsK8sServiceaccount;
    /**
     * The certificate and key pair
     */
    os: outputs.GetMachineConfigurationMachineSecretsCertsOs;
}

export interface GetMachineConfigurationMachineSecretsCertsEtcd {
    /**
     * certificate data
     */
    cert: string;
    /**
     * key data
     */
    key: string;
}

export interface GetMachineConfigurationMachineSecretsCertsK8s {
    /**
     * certificate data
     */
    cert: string;
    /**
     * key data
     */
    key: string;
}

export interface GetMachineConfigurationMachineSecretsCertsK8sAggregator {
    /**
     * certificate data
     */
    cert: string;
    /**
     * key data
     */
    key: string;
}

export interface GetMachineConfigurationMachineSecretsCertsK8sServiceaccount {
    /**
     * The key for the k8s service account
     */
    key: string;
}

export interface GetMachineConfigurationMachineSecretsCertsOs {
    /**
     * certificate data
     */
    cert: string;
    /**
     * key data
     */
    key: string;
}

export interface GetMachineConfigurationMachineSecretsCluster {
    /**
     * The cluster id
     */
    id: string;
    /**
     * The cluster secret
     */
    secret: string;
}

export interface GetMachineConfigurationMachineSecretsSecrets {
    /**
     * The aescbc encryption secret for the talos kubernetes cluster
     */
    aescbcEncryptionSecret?: string;
    /**
     * The bootstrap token for the talos kubernetes cluster
     */
    bootstrapToken: string;
    /**
     * The secretbox encryption secret for the talos kubernetes cluster
     */
    secretboxEncryptionSecret: string;
}

export interface GetMachineConfigurationMachineSecretsTrustdinfo {
    /**
     * The trustd token for the talos kubernetes cluster
     */
    token: string;
}

export interface GetMachineDisksClientConfiguration {
    /**
     * The client CA certificate
     */
    caCertificate: string;
    /**
     * The client certificate
     */
    clientCertificate: string;
    /**
     * The client key
     */
    clientKey: string;
}

export interface GetMachineDisksDisk {
    /**
     * The bus path of the disk
     */
    busPath: string;
    /**
     * The modalias of the disk
     */
    modalias: string;
    /**
     * The model of the disk
     */
    model: string;
    /**
     * The name of the disk
     */
    name: string;
    /**
     * The serial number of the disk
     */
    serial: string;
    /**
     * The size of the disk
     */
    size: string;
    /**
     * The type of the disk
     */
    type: string;
    /**
     * The uuid of the disk
     */
    uuid: string;
    /**
     * The wwid of the disk
     */
    wwid: string;
}

export interface GetMachineDisksFilters {
    /**
     * Filter disks by bus path
     */
    busPath?: string;
    /**
     * Filter disks by modalias
     */
    modalias?: string;
    /**
     * Filter disks by model
     */
    model?: string;
    /**
     * Filter disks by name
     */
    name?: string;
    /**
     * Filter disks by serial number
     */
    serial?: string;
    /**
     * Filter disks by size
     */
    size?: string;
    /**
     * Filter disks by type
     */
    type?: string;
    /**
     * Filter disks by uuid
     */
    uuid?: string;
    /**
     * Filter disks by wwid
     */
    wwid?: string;
}

export interface GetMachineDisksTimeouts {
    /**
     * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
     */
    read?: string;
}

export interface MachineBootstrapClientConfiguration {
    /**
     * The client CA certificate
     */
    caCertificate: string;
    /**
     * The client certificate
     */
    clientCertificate: string;
    /**
     * The client key
     */
    clientKey: string;
}

export interface MachineBootstrapTimeouts {
    /**
     * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
     */
    create?: string;
}

export interface MachineConfigurationApplyClientConfiguration {
    /**
     * The client CA certificate
     */
    caCertificate: string;
    /**
     * The client certificate
     */
    clientCertificate: string;
    /**
     * The client key
     */
    clientKey: string;
}

export interface MachineConfigurationApplyTimeouts {
    /**
     * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
     */
    create?: string;
    /**
     * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
     */
    update?: string;
}

export interface MachineSecretsClientConfiguration {
    /**
     * The client CA certificate
     */
    caCertificate: string;
    /**
     * The client certificate
     */
    clientCertificate: string;
    /**
     * The client key
     */
    clientKey: string;
}

export interface MachineSecretsMachineSecrets {
    certs: outputs.MachineSecretsMachineSecretsCerts;
    /**
     * The cluster secrets
     */
    cluster: outputs.MachineSecretsMachineSecretsCluster;
    /**
     * kubernetes cluster secrets
     */
    secrets: outputs.MachineSecretsMachineSecretsSecrets;
    /**
     * trustd secrets
     */
    trustdinfo: outputs.MachineSecretsMachineSecretsTrustdinfo;
}

export interface MachineSecretsMachineSecretsCerts {
    /**
     * The certificate and key pair
     */
    etcd: outputs.MachineSecretsMachineSecretsCertsEtcd;
    /**
     * The certificate and key pair
     */
    k8s: outputs.MachineSecretsMachineSecretsCertsK8s;
    /**
     * The certificate and key pair
     */
    k8sAggregator: outputs.MachineSecretsMachineSecretsCertsK8sAggregator;
    /**
     * The service account secrets
     */
    k8sServiceaccount: outputs.MachineSecretsMachineSecretsCertsK8sServiceaccount;
    /**
     * The certificate and key pair
     */
    os: outputs.MachineSecretsMachineSecretsCertsOs;
}

export interface MachineSecretsMachineSecretsCertsEtcd {
    /**
     * certificate data
     */
    cert: string;
    /**
     * key data
     */
    key: string;
}

export interface MachineSecretsMachineSecretsCertsK8s {
    /**
     * certificate data
     */
    cert: string;
    /**
     * key data
     */
    key: string;
}

export interface MachineSecretsMachineSecretsCertsK8sAggregator {
    /**
     * certificate data
     */
    cert: string;
    /**
     * key data
     */
    key: string;
}

export interface MachineSecretsMachineSecretsCertsK8sServiceaccount {
    /**
     * The service account key
     */
    key: string;
}

export interface MachineSecretsMachineSecretsCertsOs {
    /**
     * certificate data
     */
    cert: string;
    /**
     * key data
     */
    key: string;
}

export interface MachineSecretsMachineSecretsCluster {
    /**
     * The cluster ID
     */
    id: string;
    /**
     * The cluster secret
     */
    secret: string;
}

export interface MachineSecretsMachineSecretsSecrets {
    /**
     * The AES-CBC encryption secret
     */
    aescbcEncryptionSecret: string;
    /**
     * The bootstrap token
     */
    bootstrapToken: string;
    /**
     * The secretbox encryption secret
     */
    secretboxEncryptionSecret: string;
}

export interface MachineSecretsMachineSecretsTrustdinfo {
    /**
     * The trustd token
     */
    token: string;
}

