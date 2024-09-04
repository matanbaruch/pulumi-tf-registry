// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFlexibleGpu(args?: GetFlexibleGpuArgs, opts?: pulumi.InvokeOptions): Promise<GetFlexibleGpuResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("outscale:index/getFlexibleGpu:getFlexibleGpu", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFlexibleGpu.
 */
export interface GetFlexibleGpuArgs {
    filters?: inputs.GetFlexibleGpuFilter[];
    id?: string;
}

/**
 * A collection of values returned by getFlexibleGpu.
 */
export interface GetFlexibleGpuResult {
    readonly deleteOnVmDeletion: boolean;
    readonly filters?: outputs.GetFlexibleGpuFilter[];
    readonly flexibleGpuId: string;
    readonly generation: string;
    readonly id: string;
    readonly modelName: string;
    readonly requestId: string;
    readonly state: string;
    readonly subregionName: string;
    readonly vmId: string;
}
export function getFlexibleGpuOutput(args?: GetFlexibleGpuOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFlexibleGpuResult> {
    return pulumi.output(args).apply((a: any) => getFlexibleGpu(a, opts))
}

/**
 * A collection of arguments for invoking getFlexibleGpu.
 */
export interface GetFlexibleGpuOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetFlexibleGpuFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
