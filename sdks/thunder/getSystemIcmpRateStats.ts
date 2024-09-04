// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemIcmpRateStats(args?: GetSystemIcmpRateStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemIcmpRateStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSystemIcmpRateStats:getSystemIcmpRateStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemIcmpRateStats.
 */
export interface GetSystemIcmpRateStatsArgs {
    id?: string;
    stats?: inputs.GetSystemIcmpRateStatsStats;
}

/**
 * A collection of values returned by getSystemIcmpRateStats.
 */
export interface GetSystemIcmpRateStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetSystemIcmpRateStatsStats;
}
export function getSystemIcmpRateStatsOutput(args?: GetSystemIcmpRateStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemIcmpRateStatsResult> {
    return pulumi.output(args).apply((a: any) => getSystemIcmpRateStats(a, opts))
}

/**
 * A collection of arguments for invoking getSystemIcmpRateStats.
 */
export interface GetSystemIcmpRateStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetSystemIcmpRateStatsStatsArgs>;
}
