// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCgnv6Nat64AlgEspStats(args?: GetCgnv6Nat64AlgEspStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetCgnv6Nat64AlgEspStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getCgnv6Nat64AlgEspStats:getCgnv6Nat64AlgEspStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCgnv6Nat64AlgEspStats.
 */
export interface GetCgnv6Nat64AlgEspStatsArgs {
    id?: string;
    stats?: inputs.GetCgnv6Nat64AlgEspStatsStats;
}

/**
 * A collection of values returned by getCgnv6Nat64AlgEspStats.
 */
export interface GetCgnv6Nat64AlgEspStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetCgnv6Nat64AlgEspStatsStats;
}
export function getCgnv6Nat64AlgEspStatsOutput(args?: GetCgnv6Nat64AlgEspStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCgnv6Nat64AlgEspStatsResult> {
    return pulumi.output(args).apply((a: any) => getCgnv6Nat64AlgEspStats(a, opts))
}

/**
 * A collection of arguments for invoking getCgnv6Nat64AlgEspStats.
 */
export interface GetCgnv6Nat64AlgEspStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetCgnv6Nat64AlgEspStatsStatsArgs>;
}
