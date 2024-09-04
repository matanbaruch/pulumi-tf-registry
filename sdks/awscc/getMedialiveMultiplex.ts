// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMedialiveMultiplex(args: GetMedialiveMultiplexArgs, opts?: pulumi.InvokeOptions): Promise<GetMedialiveMultiplexResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getMedialiveMultiplex:getMedialiveMultiplex", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMedialiveMultiplex.
 */
export interface GetMedialiveMultiplexArgs {
    id: string;
}

/**
 * A collection of values returned by getMedialiveMultiplex.
 */
export interface GetMedialiveMultiplexResult {
    readonly arn: string;
    readonly availabilityZones: string[];
    readonly destinations: outputs.GetMedialiveMultiplexDestination[];
    readonly id: string;
    readonly multiplexId: string;
    readonly multiplexSettings: outputs.GetMedialiveMultiplexMultiplexSettings;
    readonly name: string;
    readonly pipelinesRunningCount: number;
    readonly programCount: number;
    readonly state: string;
    readonly tags: outputs.GetMedialiveMultiplexTag[];
}
export function getMedialiveMultiplexOutput(args: GetMedialiveMultiplexOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMedialiveMultiplexResult> {
    return pulumi.output(args).apply((a: any) => getMedialiveMultiplex(a, opts))
}

/**
 * A collection of arguments for invoking getMedialiveMultiplex.
 */
export interface GetMedialiveMultiplexOutputArgs {
    id: pulumi.Input<string>;
}
