// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ContainerVolumeInventory {
    seed: string;
}

export interface FeatureAfter {
    /**
     * The command or set of commands that should be run at this step
     */
    cmd: string;
    /**
     * An identifying name for this step
     */
    name?: string;
    /**
     * Optional retry configuration for the step
     */
    retry?: outputs.FeatureAfterRetry;
    /**
     * An optional working directory for the step to run in
     */
    workdir?: string;
}

export interface FeatureAfterRetry {
    /**
     * The maximum number of attempts to retry the step.
     */
    attempts: number;
    /**
     * The delay to wait before retrying. Defaults to immediately retrying (0s).
     */
    delay: string;
    /**
     * The factor to multiply the delay by on each retry. The default value of 1.0 means no delay increase per retry.
     */
    factor: number;
}

export interface FeatureBefore {
    /**
     * The command or set of commands that should be run at this step
     */
    cmd: string;
    /**
     * An identifying name for this step
     */
    name?: string;
    /**
     * Optional retry configuration for the step
     */
    retry?: outputs.FeatureBeforeRetry;
    /**
     * An optional working directory for the step to run in
     */
    workdir?: string;
}

export interface FeatureBeforeRetry {
    /**
     * The maximum number of attempts to retry the step.
     */
    attempts: number;
    /**
     * The delay to wait before retrying. Defaults to immediately retrying (0s).
     */
    delay: string;
    /**
     * The factor to multiply the delay by on each retry. The default value of 1.0 means no delay increase per retry.
     */
    factor: number;
}

export interface FeatureHarness {
    id: string;
    inventory: outputs.FeatureHarnessInventory;
    name: string;
}

export interface FeatureHarnessInventory {
    seed: string;
}

export interface FeatureStep {
    /**
     * The command or set of commands that should be run at this step
     */
    cmd: string;
    /**
     * An identifying name for this step
     */
    name?: string;
    /**
     * Optional retry configuration for the step
     */
    retry?: outputs.FeatureStepRetry;
    /**
     * An optional working directory for the step to run in
     */
    workdir?: string;
}

export interface FeatureStepRetry {
    /**
     * The maximum number of attempts to retry the step.
     */
    attempts: number;
    /**
     * The delay to wait before retrying. Defaults to immediately retrying (0s).
     */
    delay: string;
    /**
     * The factor to multiply the delay by on each retry. The default value of 1.0 means no delay increase per retry.
     */
    factor: number;
}

export interface FeatureTimeouts {
    /**
     * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
     */
    create?: string;
}

export interface HarnessDockerInventory {
    seed: string;
}

export interface HarnessDockerMount {
    /**
     * The absolute path on the container to mount the source directory.
     */
    destination: string;
    /**
     * The relative or absolute path on the host to the source directory to mount.
     */
    source: string;
}

export interface HarnessDockerNetworks {
    /**
     * The name of the existing network to attach the container to.
     */
    name: string;
}

export interface HarnessDockerRegistries {
    auth?: outputs.HarnessDockerRegistriesAuth;
}

export interface HarnessDockerRegistriesAuth {
    auth?: string;
    password?: string;
    username?: string;
}

export interface HarnessDockerResources {
    cpu?: outputs.HarnessDockerResourcesCpu;
    memory?: outputs.HarnessDockerResourcesMemory;
}

export interface HarnessDockerResourcesCpu {
    /**
     * Unused.
     */
    limit?: string;
    /**
     * Quantity of CPUs requested for the harness container
     */
    request?: string;
}

export interface HarnessDockerResourcesMemory {
    /**
     * Limit of memory the harness container can consume
     */
    limit?: string;
    /**
     * Amount of memory requested for the harness container
     */
    request?: string;
}

export interface HarnessDockerTimeouts {
    /**
     * The maximum time to wait for the k3s harness to be created.
     */
    create?: string;
}

export interface HarnessDockerVolume {
    destination: string;
    source: outputs.HarnessDockerVolumeSource;
}

export interface HarnessDockerVolumeSource {
    id: string;
    inventory: outputs.HarnessDockerVolumeSourceInventory;
    name: string;
}

export interface HarnessDockerVolumeSourceInventory {
    seed: string;
}

export interface HarnessK3sHooks {
    /**
     * A list of commands to run after the k3s container successfully starts (the api server is available)
     */
    postStarts?: string[];
    /**
     * Not supported for this harness.
     */
    preStarts?: string[];
}

export interface HarnessK3sInventory {
    seed: string;
}

export interface HarnessK3sNetworks {
    /**
     * The name of the existing network to attach the harness containers to.
     */
    name: string;
}

export interface HarnessK3sRegistries {
    auth?: outputs.HarnessK3sRegistriesAuth;
    mirror?: outputs.HarnessK3sRegistriesMirror;
    tls?: outputs.HarnessK3sRegistriesTls;
}

export interface HarnessK3sRegistriesAuth {
    auth?: string;
    password?: string;
    username?: string;
}

export interface HarnessK3sRegistriesMirror {
    endpoints?: string[];
}

export interface HarnessK3sRegistriesTls {
    caFile?: string;
    certFile?: string;
    keyFile?: string;
}

export interface HarnessK3sResources {
    cpu?: outputs.HarnessK3sResourcesCpu;
    memory?: outputs.HarnessK3sResourcesMemory;
}

export interface HarnessK3sResourcesCpu {
    /**
     * Limit of memory the harness container can consume
     */
    limit?: string;
    /**
     * Amount of memory requested for the harness container
     */
    request: string;
}

export interface HarnessK3sResourcesMemory {
    /**
     * Limit of memory the harness container can consume
     */
    limit?: string;
    /**
     * Amount of memory requested for the harness container. The default is the bare minimum required by k3s. Anything lower should be used with caution.
     */
    request: string;
}

export interface HarnessK3sSandbox {
    /**
     * Environment variables to set on the container.
     */
    envs?: {[key: string]: string};
    /**
     * The full image reference to use for the container.
     */
    image?: string;
    /**
     * The list of mounts to create on the container.
     */
    mounts?: outputs.HarnessK3sSandboxMount[];
    /**
     * A map of existing networks to attach the container to.
     */
    networks?: {[key: string]: outputs.HarnessK3sSandboxNetworks};
    privileged: boolean;
}

export interface HarnessK3sSandboxMount {
    /**
     * The absolute path on the container to mount the source directory.
     */
    destination: string;
    /**
     * The relative or absolute path on the host to the source directory to mount.
     */
    source: string;
}

export interface HarnessK3sSandboxNetworks {
    /**
     * The name of the existing network to attach the container to.
     */
    name: string;
}

export interface HarnessK3sTimeouts {
    /**
     * The maximum time to wait for the k3s harness to be created.
     */
    create?: string;
}

export interface HarnessPterraformInventory {
    seed: string;
}

export interface HarnessPterraformTimeouts {
    /**
     * The maximum time to wait for the k3s harness to be created.
     */
    create?: string;
}

export namespace config {
    export interface Harnesses {
        cluster?: outputs.config.HarnessesCluster;
        docker?: outputs.config.HarnessesDocker;
        k3s?: outputs.config.HarnessesK3s;
    }

    export interface HarnessesCluster {
        /**
         * The relative or absolute path on the host to the source directory to mount.
         */
        kubeconfig: string;
    }

    export interface HarnessesDocker {
        /**
         * Environment variables to set on the container.
         */
        envs?: {[key: string]: string};
        /**
         * The Docker host socket path.
         */
        hostSocketPath?: string;
        /**
         * The list of mounts to create on the container.
         */
        mounts?: outputs.config.HarnessesDockerMount[];
        /**
         * A map of existing networks to attach the container to.
         */
        networks?: {[key: string]: outputs.config.HarnessesDockerNetworks};
        /**
         * A map of registries containing configuration for optional auth, tls, and mirror configuration.
         */
        registries?: {[key: string]: outputs.config.HarnessesDockerRegistries};
    }

    export interface HarnessesDockerMount {
        /**
         * The absolute path on the container to mount the source directory to.
         */
        destination: string;
        /**
         * The relative or absolute path on the host to the source directory to mount.
         */
        source: string;
    }

    export interface HarnessesDockerNetworks {
        /**
         * The name of the existing network to attach the container to.
         */
        name: string;
    }

    export interface HarnessesDockerRegistries {
        auth?: outputs.config.HarnessesDockerRegistriesAuth;
    }

    export interface HarnessesDockerRegistriesAuth {
        auth?: string;
        password?: string;
        username?: string;
    }

    export interface HarnessesK3s {
        /**
         * A map of existing networks to attach the harness containers to.
         */
        networks?: {[key: string]: outputs.config.HarnessesK3sNetworks};
        /**
         * A map of registries containing configuration for optional auth, tls, and mirror configuration.
         */
        registries?: {[key: string]: outputs.config.HarnessesK3sRegistries};
        /**
         * A map of configuration for the sandbox container.
         */
        sandbox?: outputs.config.HarnessesK3sSandbox;
    }

    export interface HarnessesK3sNetworks {
        /**
         * The name of the existing network to attach the harness containers to.
         */
        name: string;
    }

    export interface HarnessesK3sRegistries {
        auth?: outputs.config.HarnessesK3sRegistriesAuth;
        mirror?: outputs.config.HarnessesK3sRegistriesMirror;
        tls?: outputs.config.HarnessesK3sRegistriesTls;
    }

    export interface HarnessesK3sRegistriesAuth {
        auth?: string;
        password?: string;
        username?: string;
    }

    export interface HarnessesK3sRegistriesMirror {
        endpoints?: string[];
    }

    export interface HarnessesK3sRegistriesTls {
        caFile?: string;
        certFile?: string;
        keyFile?: string;
    }

    export interface HarnessesK3sSandbox {
        /**
         * The full image reference to use for the container.
         */
        image?: string;
    }

    export interface Log {
        /**
         * Output logs to a file.
         */
        file?: outputs.config.LogFile;
    }

    export interface LogFile {
        /**
         * The directory to write the log file to.
         */
        directory?: string;
        /**
         * The format of the log entries (text|json).
         */
        format?: string;
    }

}
