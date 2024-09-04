// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCgnv6L4Stats(args?: GetCgnv6L4StatsArgs, opts?: pulumi.InvokeOptions): Promise<GetCgnv6L4StatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getCgnv6L4Stats:getCgnv6L4Stats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCgnv6L4Stats.
 */
export interface GetCgnv6L4StatsArgs {
    id?: string;
    stats?: inputs.GetCgnv6L4StatsStats;
}

/**
 * A collection of values returned by getCgnv6L4Stats.
 */
export interface GetCgnv6L4StatsResult {
    readonly id: string;
    readonly stats?: outputs.GetCgnv6L4StatsStats;
}
export function getCgnv6L4StatsOutput(args?: GetCgnv6L4StatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCgnv6L4StatsResult> {
    return pulumi.output(args).apply((a: any) => getCgnv6L4Stats(a, opts))
}

/**
 * A collection of arguments for invoking getCgnv6L4Stats.
 */
export interface GetCgnv6L4StatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetCgnv6L4StatsStatsArgs>;
}
