// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDseRegistryConfiguration(args: GetDseRegistryConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetDseRegistryConfigurationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vcd:index/getDseRegistryConfiguration:getDseRegistryConfiguration", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDseRegistryConfiguration.
 */
export interface GetDseRegistryConfigurationArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getDseRegistryConfiguration.
 */
export interface GetDseRegistryConfigurationResult {
    readonly chartRepository: string;
    readonly compatibleVersionConstraints: string[];
    readonly containerRegistries: outputs.GetDseRegistryConfigurationContainerRegistry[];
    readonly defaultChartRepository: string;
    readonly defaultPackageName: string;
    readonly defaultRepository: string;
    readonly defaultVersion: string;
    readonly id: string;
    readonly name: string;
    readonly packageName: string;
    readonly packageRepository: string;
    readonly rdeState: string;
    readonly requiresVersionCompatibility: boolean;
    readonly type: string;
    readonly version: string;
}
export function getDseRegistryConfigurationOutput(args: GetDseRegistryConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDseRegistryConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getDseRegistryConfiguration(a, opts))
}

/**
 * A collection of arguments for invoking getDseRegistryConfiguration.
 */
export interface GetDseRegistryConfigurationOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
