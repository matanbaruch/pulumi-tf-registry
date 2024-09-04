// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFwGtpNetworkElementStats(args?: GetFwGtpNetworkElementStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetFwGtpNetworkElementStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getFwGtpNetworkElementStats:getFwGtpNetworkElementStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFwGtpNetworkElementStats.
 */
export interface GetFwGtpNetworkElementStatsArgs {
    id?: string;
    stats?: inputs.GetFwGtpNetworkElementStatsStats;
}

/**
 * A collection of values returned by getFwGtpNetworkElementStats.
 */
export interface GetFwGtpNetworkElementStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetFwGtpNetworkElementStatsStats;
}
export function getFwGtpNetworkElementStatsOutput(args?: GetFwGtpNetworkElementStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFwGtpNetworkElementStatsResult> {
    return pulumi.output(args).apply((a: any) => getFwGtpNetworkElementStats(a, opts))
}

/**
 * A collection of arguments for invoking getFwGtpNetworkElementStats.
 */
export interface GetFwGtpNetworkElementStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetFwGtpNetworkElementStatsStatsArgs>;
}
