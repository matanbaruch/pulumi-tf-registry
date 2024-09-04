// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFwLoggingGtpStats(args?: GetFwLoggingGtpStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetFwLoggingGtpStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getFwLoggingGtpStats:getFwLoggingGtpStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFwLoggingGtpStats.
 */
export interface GetFwLoggingGtpStatsArgs {
    id?: string;
    stats?: inputs.GetFwLoggingGtpStatsStats;
}

/**
 * A collection of values returned by getFwLoggingGtpStats.
 */
export interface GetFwLoggingGtpStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetFwLoggingGtpStatsStats;
}
export function getFwLoggingGtpStatsOutput(args?: GetFwLoggingGtpStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFwLoggingGtpStatsResult> {
    return pulumi.output(args).apply((a: any) => getFwLoggingGtpStats(a, opts))
}

/**
 * A collection of arguments for invoking getFwLoggingGtpStats.
 */
export interface GetFwLoggingGtpStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetFwLoggingGtpStatsStatsArgs>;
}
