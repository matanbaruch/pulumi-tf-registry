// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemNdiscRaStats(args?: GetSystemNdiscRaStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemNdiscRaStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSystemNdiscRaStats:getSystemNdiscRaStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemNdiscRaStats.
 */
export interface GetSystemNdiscRaStatsArgs {
    id?: string;
    stats?: inputs.GetSystemNdiscRaStatsStats;
}

/**
 * A collection of values returned by getSystemNdiscRaStats.
 */
export interface GetSystemNdiscRaStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetSystemNdiscRaStatsStats;
}
export function getSystemNdiscRaStatsOutput(args?: GetSystemNdiscRaStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemNdiscRaStatsResult> {
    return pulumi.output(args).apply((a: any) => getSystemNdiscRaStats(a, opts))
}

/**
 * A collection of arguments for invoking getSystemNdiscRaStats.
 */
export interface GetSystemNdiscRaStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetSystemNdiscRaStatsStatsArgs>;
}
