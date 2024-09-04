// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemIpThreatListStats(args?: GetSystemIpThreatListStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemIpThreatListStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSystemIpThreatListStats:getSystemIpThreatListStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemIpThreatListStats.
 */
export interface GetSystemIpThreatListStatsArgs {
    id?: string;
    stats?: inputs.GetSystemIpThreatListStatsStats;
}

/**
 * A collection of values returned by getSystemIpThreatListStats.
 */
export interface GetSystemIpThreatListStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetSystemIpThreatListStatsStats;
}
export function getSystemIpThreatListStatsOutput(args?: GetSystemIpThreatListStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemIpThreatListStatsResult> {
    return pulumi.output(args).apply((a: any) => getSystemIpThreatListStats(a, opts))
}

/**
 * A collection of arguments for invoking getSystemIpThreatListStats.
 */
export interface GetSystemIpThreatListStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetSystemIpThreatListStatsStatsArgs>;
}
