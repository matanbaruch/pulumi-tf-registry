// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkVeStats(args?: GetNetworkVeStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkVeStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getNetworkVeStats:getNetworkVeStats", {
        "enable": args.enable,
        "id": args.id,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkVeStats.
 */
export interface GetNetworkVeStatsArgs {
    enable?: number;
    id?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getNetworkVeStats.
 */
export interface GetNetworkVeStatsResult {
    readonly enable?: number;
    readonly id: string;
    readonly uuid: string;
}
export function getNetworkVeStatsOutput(args?: GetNetworkVeStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkVeStatsResult> {
    return pulumi.output(args).apply((a: any) => getNetworkVeStats(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkVeStats.
 */
export interface GetNetworkVeStatsOutputArgs {
    enable?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
