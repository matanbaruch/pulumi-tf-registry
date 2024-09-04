// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDdosLoggingStats(args?: GetDdosLoggingStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetDdosLoggingStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getDdosLoggingStats:getDdosLoggingStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDdosLoggingStats.
 */
export interface GetDdosLoggingStatsArgs {
    id?: string;
    stats?: inputs.GetDdosLoggingStatsStats;
}

/**
 * A collection of values returned by getDdosLoggingStats.
 */
export interface GetDdosLoggingStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetDdosLoggingStatsStats;
}
export function getDdosLoggingStatsOutput(args?: GetDdosLoggingStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDdosLoggingStatsResult> {
    return pulumi.output(args).apply((a: any) => getDdosLoggingStats(a, opts))
}

/**
 * A collection of arguments for invoking getDdosLoggingStats.
 */
export interface GetDdosLoggingStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetDdosLoggingStatsStatsArgs>;
}
