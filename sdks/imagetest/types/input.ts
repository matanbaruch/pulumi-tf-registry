// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ContainerVolumeInventory {
    seed: pulumi.Input<string>;
}

export interface FeatureAfter {
    /**
     * The command or set of commands that should be run at this step
     */
    cmd: pulumi.Input<string>;
    /**
     * An identifying name for this step
     */
    name?: pulumi.Input<string>;
    /**
     * Optional retry configuration for the step
     */
    retry?: pulumi.Input<inputs.FeatureAfterRetry>;
    /**
     * An optional working directory for the step to run in
     */
    workdir?: pulumi.Input<string>;
}

export interface FeatureAfterRetry {
    /**
     * The maximum number of attempts to retry the step.
     */
    attempts: pulumi.Input<number>;
    /**
     * The delay to wait before retrying. Defaults to immediately retrying (0s).
     */
    delay?: pulumi.Input<string>;
    /**
     * The factor to multiply the delay by on each retry. The default value of 1.0 means no delay increase per retry.
     */
    factor?: pulumi.Input<number>;
}

export interface FeatureBefore {
    /**
     * The command or set of commands that should be run at this step
     */
    cmd: pulumi.Input<string>;
    /**
     * An identifying name for this step
     */
    name?: pulumi.Input<string>;
    /**
     * Optional retry configuration for the step
     */
    retry?: pulumi.Input<inputs.FeatureBeforeRetry>;
    /**
     * An optional working directory for the step to run in
     */
    workdir?: pulumi.Input<string>;
}

export interface FeatureBeforeRetry {
    /**
     * The maximum number of attempts to retry the step.
     */
    attempts: pulumi.Input<number>;
    /**
     * The delay to wait before retrying. Defaults to immediately retrying (0s).
     */
    delay?: pulumi.Input<string>;
    /**
     * The factor to multiply the delay by on each retry. The default value of 1.0 means no delay increase per retry.
     */
    factor?: pulumi.Input<number>;
}

export interface FeatureHarness {
    id: pulumi.Input<string>;
    inventory: pulumi.Input<inputs.FeatureHarnessInventory>;
    name: pulumi.Input<string>;
}

export interface FeatureHarnessInventory {
    seed: pulumi.Input<string>;
}

export interface FeatureStep {
    /**
     * The command or set of commands that should be run at this step
     */
    cmd: pulumi.Input<string>;
    /**
     * An identifying name for this step
     */
    name?: pulumi.Input<string>;
    /**
     * Optional retry configuration for the step
     */
    retry?: pulumi.Input<inputs.FeatureStepRetry>;
    /**
     * An optional working directory for the step to run in
     */
    workdir?: pulumi.Input<string>;
}

export interface FeatureStepRetry {
    /**
     * The maximum number of attempts to retry the step.
     */
    attempts: pulumi.Input<number>;
    /**
     * The delay to wait before retrying. Defaults to immediately retrying (0s).
     */
    delay?: pulumi.Input<string>;
    /**
     * The factor to multiply the delay by on each retry. The default value of 1.0 means no delay increase per retry.
     */
    factor?: pulumi.Input<number>;
}

export interface FeatureTimeouts {
    /**
     * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
     */
    create?: pulumi.Input<string>;
}

export interface HarnessDockerInventory {
    seed: pulumi.Input<string>;
}

export interface HarnessDockerMount {
    /**
     * The absolute path on the container to mount the source directory.
     */
    destination: pulumi.Input<string>;
    /**
     * The relative or absolute path on the host to the source directory to mount.
     */
    source: pulumi.Input<string>;
}

export interface HarnessDockerNetworks {
    /**
     * The name of the existing network to attach the container to.
     */
    name: pulumi.Input<string>;
}

export interface HarnessDockerRegistries {
    auth?: pulumi.Input<inputs.HarnessDockerRegistriesAuth>;
}

export interface HarnessDockerRegistriesAuth {
    auth?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface HarnessDockerResources {
    cpu?: pulumi.Input<inputs.HarnessDockerResourcesCpu>;
    memory?: pulumi.Input<inputs.HarnessDockerResourcesMemory>;
}

export interface HarnessDockerResourcesCpu {
    /**
     * Unused.
     */
    limit?: pulumi.Input<string>;
    /**
     * Quantity of CPUs requested for the harness container
     */
    request?: pulumi.Input<string>;
}

export interface HarnessDockerResourcesMemory {
    /**
     * Limit of memory the harness container can consume
     */
    limit?: pulumi.Input<string>;
    /**
     * Amount of memory requested for the harness container
     */
    request?: pulumi.Input<string>;
}

export interface HarnessDockerTimeouts {
    /**
     * The maximum time to wait for the k3s harness to be created.
     */
    create?: pulumi.Input<string>;
}

export interface HarnessDockerVolume {
    destination: pulumi.Input<string>;
    source: pulumi.Input<inputs.HarnessDockerVolumeSource>;
}

export interface HarnessDockerVolumeSource {
    id: pulumi.Input<string>;
    inventory: pulumi.Input<inputs.HarnessDockerVolumeSourceInventory>;
    name: pulumi.Input<string>;
}

export interface HarnessDockerVolumeSourceInventory {
    seed: pulumi.Input<string>;
}

export interface HarnessK3sHooks {
    /**
     * A list of commands to run after the k3s container successfully starts (the api server is available)
     */
    postStarts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Not supported for this harness.
     */
    preStarts?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface HarnessK3sInventory {
    seed: pulumi.Input<string>;
}

export interface HarnessK3sNetworks {
    /**
     * The name of the existing network to attach the harness containers to.
     */
    name: pulumi.Input<string>;
}

export interface HarnessK3sRegistries {
    auth?: pulumi.Input<inputs.HarnessK3sRegistriesAuth>;
    mirror?: pulumi.Input<inputs.HarnessK3sRegistriesMirror>;
    tls?: pulumi.Input<inputs.HarnessK3sRegistriesTls>;
}

export interface HarnessK3sRegistriesAuth {
    auth?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface HarnessK3sRegistriesMirror {
    endpoints?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface HarnessK3sRegistriesTls {
    caFile?: pulumi.Input<string>;
    certFile?: pulumi.Input<string>;
    keyFile?: pulumi.Input<string>;
}

export interface HarnessK3sResources {
    cpu?: pulumi.Input<inputs.HarnessK3sResourcesCpu>;
    memory?: pulumi.Input<inputs.HarnessK3sResourcesMemory>;
}

export interface HarnessK3sResourcesCpu {
    /**
     * Limit of memory the harness container can consume
     */
    limit?: pulumi.Input<string>;
    /**
     * Amount of memory requested for the harness container
     */
    request?: pulumi.Input<string>;
}

export interface HarnessK3sResourcesMemory {
    /**
     * Limit of memory the harness container can consume
     */
    limit?: pulumi.Input<string>;
    /**
     * Amount of memory requested for the harness container. The default is the bare minimum required by k3s. Anything lower should be used with caution.
     */
    request?: pulumi.Input<string>;
}

export interface HarnessK3sSandbox {
    /**
     * Environment variables to set on the container.
     */
    envs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The full image reference to use for the container.
     */
    image?: pulumi.Input<string>;
    /**
     * The list of mounts to create on the container.
     */
    mounts?: pulumi.Input<pulumi.Input<inputs.HarnessK3sSandboxMount>[]>;
    /**
     * A map of existing networks to attach the container to.
     */
    networks?: pulumi.Input<{[key: string]: pulumi.Input<inputs.HarnessK3sSandboxNetworks>}>;
    privileged?: pulumi.Input<boolean>;
}

export interface HarnessK3sSandboxMount {
    /**
     * The absolute path on the container to mount the source directory.
     */
    destination: pulumi.Input<string>;
    /**
     * The relative or absolute path on the host to the source directory to mount.
     */
    source: pulumi.Input<string>;
}

export interface HarnessK3sSandboxNetworks {
    /**
     * The name of the existing network to attach the container to.
     */
    name: pulumi.Input<string>;
}

export interface HarnessK3sTimeouts {
    /**
     * The maximum time to wait for the k3s harness to be created.
     */
    create?: pulumi.Input<string>;
}

export interface HarnessPterraformInventory {
    seed: pulumi.Input<string>;
}

export interface HarnessPterraformTimeouts {
    /**
     * The maximum time to wait for the k3s harness to be created.
     */
    create?: pulumi.Input<string>;
}

export interface ProviderHarnesses {
    cluster?: pulumi.Input<inputs.ProviderHarnessesCluster>;
    docker?: pulumi.Input<inputs.ProviderHarnessesDocker>;
    k3s?: pulumi.Input<inputs.ProviderHarnessesK3s>;
}

export interface ProviderHarnessesCluster {
    /**
     * The relative or absolute path on the host to the source directory to mount.
     */
    kubeconfig: pulumi.Input<string>;
}

export interface ProviderHarnessesDocker {
    /**
     * Environment variables to set on the container.
     */
    envs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Docker host socket path.
     */
    hostSocketPath?: pulumi.Input<string>;
    /**
     * The list of mounts to create on the container.
     */
    mounts?: pulumi.Input<pulumi.Input<inputs.ProviderHarnessesDockerMount>[]>;
    /**
     * A map of existing networks to attach the container to.
     */
    networks?: pulumi.Input<{[key: string]: pulumi.Input<inputs.ProviderHarnessesDockerNetworks>}>;
    /**
     * A map of registries containing configuration for optional auth, tls, and mirror configuration.
     */
    registries?: pulumi.Input<{[key: string]: pulumi.Input<inputs.ProviderHarnessesDockerRegistries>}>;
}

export interface ProviderHarnessesDockerMount {
    /**
     * The absolute path on the container to mount the source directory to.
     */
    destination: pulumi.Input<string>;
    /**
     * The relative or absolute path on the host to the source directory to mount.
     */
    source: pulumi.Input<string>;
}

export interface ProviderHarnessesDockerNetworks {
    /**
     * The name of the existing network to attach the container to.
     */
    name: pulumi.Input<string>;
}

export interface ProviderHarnessesDockerRegistries {
    auth?: pulumi.Input<inputs.ProviderHarnessesDockerRegistriesAuth>;
}

export interface ProviderHarnessesDockerRegistriesAuth {
    auth?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface ProviderHarnessesK3s {
    /**
     * A map of existing networks to attach the harness containers to.
     */
    networks?: pulumi.Input<{[key: string]: pulumi.Input<inputs.ProviderHarnessesK3sNetworks>}>;
    /**
     * A map of registries containing configuration for optional auth, tls, and mirror configuration.
     */
    registries?: pulumi.Input<{[key: string]: pulumi.Input<inputs.ProviderHarnessesK3sRegistries>}>;
    /**
     * A map of configuration for the sandbox container.
     */
    sandbox?: pulumi.Input<inputs.ProviderHarnessesK3sSandbox>;
}

export interface ProviderHarnessesK3sNetworks {
    /**
     * The name of the existing network to attach the harness containers to.
     */
    name: pulumi.Input<string>;
}

export interface ProviderHarnessesK3sRegistries {
    auth?: pulumi.Input<inputs.ProviderHarnessesK3sRegistriesAuth>;
    mirror?: pulumi.Input<inputs.ProviderHarnessesK3sRegistriesMirror>;
    tls?: pulumi.Input<inputs.ProviderHarnessesK3sRegistriesTls>;
}

export interface ProviderHarnessesK3sRegistriesAuth {
    auth?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface ProviderHarnessesK3sRegistriesMirror {
    endpoints?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ProviderHarnessesK3sRegistriesTls {
    caFile?: pulumi.Input<string>;
    certFile?: pulumi.Input<string>;
    keyFile?: pulumi.Input<string>;
}

export interface ProviderHarnessesK3sSandbox {
    /**
     * The full image reference to use for the container.
     */
    image?: pulumi.Input<string>;
}

export interface ProviderLog {
    /**
     * Output logs to a file.
     */
    file?: pulumi.Input<inputs.ProviderLogFile>;
}

export interface ProviderLogFile {
    /**
     * The directory to write the log file to.
     */
    directory?: pulumi.Input<string>;
    /**
     * The format of the log entries (text|json).
     */
    format?: pulumi.Input<string>;
}
export namespace config {
}
