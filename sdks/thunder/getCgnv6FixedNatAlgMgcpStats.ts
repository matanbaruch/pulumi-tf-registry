// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCgnv6FixedNatAlgMgcpStats(args?: GetCgnv6FixedNatAlgMgcpStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetCgnv6FixedNatAlgMgcpStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getCgnv6FixedNatAlgMgcpStats:getCgnv6FixedNatAlgMgcpStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCgnv6FixedNatAlgMgcpStats.
 */
export interface GetCgnv6FixedNatAlgMgcpStatsArgs {
    id?: string;
    stats?: inputs.GetCgnv6FixedNatAlgMgcpStatsStats;
}

/**
 * A collection of values returned by getCgnv6FixedNatAlgMgcpStats.
 */
export interface GetCgnv6FixedNatAlgMgcpStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetCgnv6FixedNatAlgMgcpStatsStats;
}
export function getCgnv6FixedNatAlgMgcpStatsOutput(args?: GetCgnv6FixedNatAlgMgcpStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCgnv6FixedNatAlgMgcpStatsResult> {
    return pulumi.output(args).apply((a: any) => getCgnv6FixedNatAlgMgcpStats(a, opts))
}

/**
 * A collection of arguments for invoking getCgnv6FixedNatAlgMgcpStats.
 */
export interface GetCgnv6FixedNatAlgMgcpStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetCgnv6FixedNatAlgMgcpStatsStatsArgs>;
}
