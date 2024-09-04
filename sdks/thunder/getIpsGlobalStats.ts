// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIpsGlobalStats(args?: GetIpsGlobalStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetIpsGlobalStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getIpsGlobalStats:getIpsGlobalStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIpsGlobalStats.
 */
export interface GetIpsGlobalStatsArgs {
    id?: string;
    stats?: inputs.GetIpsGlobalStatsStats;
}

/**
 * A collection of values returned by getIpsGlobalStats.
 */
export interface GetIpsGlobalStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetIpsGlobalStatsStats;
}
export function getIpsGlobalStatsOutput(args?: GetIpsGlobalStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpsGlobalStatsResult> {
    return pulumi.output(args).apply((a: any) => getIpsGlobalStats(a, opts))
}

/**
 * A collection of arguments for invoking getIpsGlobalStats.
 */
export interface GetIpsGlobalStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetIpsGlobalStatsStatsArgs>;
}
