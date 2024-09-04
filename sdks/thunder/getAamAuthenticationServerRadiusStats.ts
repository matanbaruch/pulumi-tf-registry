// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAamAuthenticationServerRadiusStats(args?: GetAamAuthenticationServerRadiusStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetAamAuthenticationServerRadiusStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getAamAuthenticationServerRadiusStats:getAamAuthenticationServerRadiusStats", {
        "id": args.id,
        "instanceLists": args.instanceLists,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAamAuthenticationServerRadiusStats.
 */
export interface GetAamAuthenticationServerRadiusStatsArgs {
    id?: string;
    instanceLists?: inputs.GetAamAuthenticationServerRadiusStatsInstanceList[];
    stats?: inputs.GetAamAuthenticationServerRadiusStatsStats;
}

/**
 * A collection of values returned by getAamAuthenticationServerRadiusStats.
 */
export interface GetAamAuthenticationServerRadiusStatsResult {
    readonly id: string;
    readonly instanceLists?: outputs.GetAamAuthenticationServerRadiusStatsInstanceList[];
    readonly stats?: outputs.GetAamAuthenticationServerRadiusStatsStats;
}
export function getAamAuthenticationServerRadiusStatsOutput(args?: GetAamAuthenticationServerRadiusStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAamAuthenticationServerRadiusStatsResult> {
    return pulumi.output(args).apply((a: any) => getAamAuthenticationServerRadiusStats(a, opts))
}

/**
 * A collection of arguments for invoking getAamAuthenticationServerRadiusStats.
 */
export interface GetAamAuthenticationServerRadiusStatsOutputArgs {
    id?: pulumi.Input<string>;
    instanceLists?: pulumi.Input<pulumi.Input<inputs.GetAamAuthenticationServerRadiusStatsInstanceListArgs>[]>;
    stats?: pulumi.Input<inputs.GetAamAuthenticationServerRadiusStatsStatsArgs>;
}
