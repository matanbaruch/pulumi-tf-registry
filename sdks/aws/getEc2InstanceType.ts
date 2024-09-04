// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEc2InstanceType(args: GetEc2InstanceTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2InstanceTypeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getEc2InstanceType:getEc2InstanceType", {
        "id": args.id,
        "instanceType": args.instanceType,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEc2InstanceType.
 */
export interface GetEc2InstanceTypeArgs {
    id?: string;
    instanceType: string;
    timeouts?: inputs.GetEc2InstanceTypeTimeouts;
}

/**
 * A collection of values returned by getEc2InstanceType.
 */
export interface GetEc2InstanceTypeResult {
    readonly autoRecoverySupported: boolean;
    readonly bareMetal: boolean;
    readonly burstablePerformanceSupported: boolean;
    readonly currentGeneration: boolean;
    readonly dedicatedHostsSupported: boolean;
    readonly defaultCores: number;
    readonly defaultThreadsPerCore: number;
    readonly defaultVcpus: number;
    readonly ebsEncryptionSupport: string;
    readonly ebsNvmeSupport: string;
    readonly ebsOptimizedSupport: string;
    readonly ebsPerformanceBaselineBandwidth: number;
    readonly ebsPerformanceBaselineIops: number;
    readonly ebsPerformanceBaselineThroughput: number;
    readonly ebsPerformanceMaximumBandwidth: number;
    readonly ebsPerformanceMaximumIops: number;
    readonly ebsPerformanceMaximumThroughput: number;
    readonly efaSupported: boolean;
    readonly enaSupport: string;
    readonly encryptionInTransitSupported: boolean;
    readonly fpgas: outputs.GetEc2InstanceTypeFpga[];
    readonly freeTierEligible: boolean;
    readonly gpuses: outputs.GetEc2InstanceTypeGpus[];
    readonly hibernationSupported: boolean;
    readonly hypervisor: string;
    readonly id: string;
    readonly inferenceAccelerators: outputs.GetEc2InstanceTypeInferenceAccelerator[];
    readonly instanceDisks: outputs.GetEc2InstanceTypeInstanceDisk[];
    readonly instanceStorageSupported: boolean;
    readonly instanceType: string;
    readonly ipv6Supported: boolean;
    readonly maximumIpv4AddressesPerInterface: number;
    readonly maximumIpv6AddressesPerInterface: number;
    readonly maximumNetworkCards: number;
    readonly maximumNetworkInterfaces: number;
    readonly memorySize: number;
    readonly networkPerformance: string;
    readonly supportedArchitectures: string[];
    readonly supportedPlacementStrategies: string[];
    readonly supportedRootDeviceTypes: string[];
    readonly supportedUsagesClasses: string[];
    readonly supportedVirtualizationTypes: string[];
    readonly sustainedClockSpeed: number;
    readonly timeouts?: outputs.GetEc2InstanceTypeTimeouts;
    readonly totalFpgaMemory: number;
    readonly totalGpuMemory: number;
    readonly totalInstanceStorage: number;
    readonly validCores: number[];
    readonly validThreadsPerCores: number[];
}
export function getEc2InstanceTypeOutput(args: GetEc2InstanceTypeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2InstanceTypeResult> {
    return pulumi.output(args).apply((a: any) => getEc2InstanceType(a, opts))
}

/**
 * A collection of arguments for invoking getEc2InstanceType.
 */
export interface GetEc2InstanceTypeOutputArgs {
    id?: pulumi.Input<string>;
    instanceType: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetEc2InstanceTypeTimeoutsArgs>;
}
