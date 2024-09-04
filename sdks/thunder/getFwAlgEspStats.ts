// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFwAlgEspStats(args?: GetFwAlgEspStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetFwAlgEspStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getFwAlgEspStats:getFwAlgEspStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFwAlgEspStats.
 */
export interface GetFwAlgEspStatsArgs {
    id?: string;
    stats?: inputs.GetFwAlgEspStatsStats;
}

/**
 * A collection of values returned by getFwAlgEspStats.
 */
export interface GetFwAlgEspStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetFwAlgEspStatsStats;
}
export function getFwAlgEspStatsOutput(args?: GetFwAlgEspStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFwAlgEspStatsResult> {
    return pulumi.output(args).apply((a: any) => getFwAlgEspStats(a, opts))
}

/**
 * A collection of arguments for invoking getFwAlgEspStats.
 */
export interface GetFwAlgEspStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetFwAlgEspStatsStatsArgs>;
}
