// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDdosIpprotoIcmpStats(args?: GetDdosIpprotoIcmpStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetDdosIpprotoIcmpStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getDdosIpprotoIcmpStats:getDdosIpprotoIcmpStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDdosIpprotoIcmpStats.
 */
export interface GetDdosIpprotoIcmpStatsArgs {
    id?: string;
    stats?: inputs.GetDdosIpprotoIcmpStatsStats;
}

/**
 * A collection of values returned by getDdosIpprotoIcmpStats.
 */
export interface GetDdosIpprotoIcmpStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetDdosIpprotoIcmpStatsStats;
}
export function getDdosIpprotoIcmpStatsOutput(args?: GetDdosIpprotoIcmpStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDdosIpprotoIcmpStatsResult> {
    return pulumi.output(args).apply((a: any) => getDdosIpprotoIcmpStats(a, opts))
}

/**
 * A collection of arguments for invoking getDdosIpprotoIcmpStats.
 */
export interface GetDdosIpprotoIcmpStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetDdosIpprotoIcmpStatsStatsArgs>;
}
