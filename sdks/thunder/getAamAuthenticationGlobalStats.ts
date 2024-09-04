// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAamAuthenticationGlobalStats(args?: GetAamAuthenticationGlobalStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetAamAuthenticationGlobalStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getAamAuthenticationGlobalStats:getAamAuthenticationGlobalStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAamAuthenticationGlobalStats.
 */
export interface GetAamAuthenticationGlobalStatsArgs {
    id?: string;
    stats?: inputs.GetAamAuthenticationGlobalStatsStats;
}

/**
 * A collection of values returned by getAamAuthenticationGlobalStats.
 */
export interface GetAamAuthenticationGlobalStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetAamAuthenticationGlobalStatsStats;
}
export function getAamAuthenticationGlobalStatsOutput(args?: GetAamAuthenticationGlobalStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAamAuthenticationGlobalStatsResult> {
    return pulumi.output(args).apply((a: any) => getAamAuthenticationGlobalStats(a, opts))
}

/**
 * A collection of arguments for invoking getAamAuthenticationGlobalStats.
 */
export interface GetAamAuthenticationGlobalStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetAamAuthenticationGlobalStatsStatsArgs>;
}
