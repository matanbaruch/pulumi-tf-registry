// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMachineConfiguration(args: GetMachineConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("talos:index/getMachineConfiguration:getMachineConfiguration", {
        "clusterEndpoint": args.clusterEndpoint,
        "clusterName": args.clusterName,
        "configPatches": args.configPatches,
        "docs": args.docs,
        "examples": args.examples,
        "kubernetesVersion": args.kubernetesVersion,
        "machineSecrets": args.machineSecrets,
        "machineType": args.machineType,
        "talosVersion": args.talosVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMachineConfiguration.
 */
export interface GetMachineConfigurationArgs {
    clusterEndpoint: string;
    clusterName: string;
    configPatches?: string[];
    docs?: boolean;
    examples?: boolean;
    kubernetesVersion?: string;
    machineSecrets: inputs.GetMachineConfigurationMachineSecrets;
    machineType: string;
    talosVersion?: string;
}

/**
 * A collection of values returned by getMachineConfiguration.
 */
export interface GetMachineConfigurationResult {
    readonly clusterEndpoint: string;
    readonly clusterName: string;
    readonly configPatches?: string[];
    readonly docs?: boolean;
    readonly examples?: boolean;
    readonly id: string;
    readonly kubernetesVersion?: string;
    readonly machineConfiguration: string;
    readonly machineSecrets: outputs.GetMachineConfigurationMachineSecrets;
    readonly machineType: string;
    readonly talosVersion?: string;
}
export function getMachineConfigurationOutput(args: GetMachineConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMachineConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getMachineConfiguration(a, opts))
}

/**
 * A collection of arguments for invoking getMachineConfiguration.
 */
export interface GetMachineConfigurationOutputArgs {
    clusterEndpoint: pulumi.Input<string>;
    clusterName: pulumi.Input<string>;
    configPatches?: pulumi.Input<pulumi.Input<string>[]>;
    docs?: pulumi.Input<boolean>;
    examples?: pulumi.Input<boolean>;
    kubernetesVersion?: pulumi.Input<string>;
    machineSecrets: pulumi.Input<inputs.GetMachineConfigurationMachineSecretsArgs>;
    machineType: pulumi.Input<string>;
    talosVersion?: pulumi.Input<string>;
}
