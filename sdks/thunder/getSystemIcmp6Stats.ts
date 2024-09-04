// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemIcmp6Stats(args?: GetSystemIcmp6StatsArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemIcmp6StatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSystemIcmp6Stats:getSystemIcmp6Stats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemIcmp6Stats.
 */
export interface GetSystemIcmp6StatsArgs {
    id?: string;
    stats?: inputs.GetSystemIcmp6StatsStats;
}

/**
 * A collection of values returned by getSystemIcmp6Stats.
 */
export interface GetSystemIcmp6StatsResult {
    readonly id: string;
    readonly stats?: outputs.GetSystemIcmp6StatsStats;
}
export function getSystemIcmp6StatsOutput(args?: GetSystemIcmp6StatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemIcmp6StatsResult> {
    return pulumi.output(args).apply((a: any) => getSystemIcmp6Stats(a, opts))
}

/**
 * A collection of arguments for invoking getSystemIcmp6Stats.
 */
export interface GetSystemIcmp6StatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetSystemIcmp6StatsStatsArgs>;
}
