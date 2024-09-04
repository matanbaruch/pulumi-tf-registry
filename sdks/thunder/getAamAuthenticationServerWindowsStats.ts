// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAamAuthenticationServerWindowsStats(args?: GetAamAuthenticationServerWindowsStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetAamAuthenticationServerWindowsStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getAamAuthenticationServerWindowsStats:getAamAuthenticationServerWindowsStats", {
        "id": args.id,
        "instanceLists": args.instanceLists,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAamAuthenticationServerWindowsStats.
 */
export interface GetAamAuthenticationServerWindowsStatsArgs {
    id?: string;
    instanceLists?: inputs.GetAamAuthenticationServerWindowsStatsInstanceList[];
    stats?: inputs.GetAamAuthenticationServerWindowsStatsStats;
}

/**
 * A collection of values returned by getAamAuthenticationServerWindowsStats.
 */
export interface GetAamAuthenticationServerWindowsStatsResult {
    readonly id: string;
    readonly instanceLists?: outputs.GetAamAuthenticationServerWindowsStatsInstanceList[];
    readonly stats?: outputs.GetAamAuthenticationServerWindowsStatsStats;
}
export function getAamAuthenticationServerWindowsStatsOutput(args?: GetAamAuthenticationServerWindowsStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAamAuthenticationServerWindowsStatsResult> {
    return pulumi.output(args).apply((a: any) => getAamAuthenticationServerWindowsStats(a, opts))
}

/**
 * A collection of arguments for invoking getAamAuthenticationServerWindowsStats.
 */
export interface GetAamAuthenticationServerWindowsStatsOutputArgs {
    id?: pulumi.Input<string>;
    instanceLists?: pulumi.Input<pulumi.Input<inputs.GetAamAuthenticationServerWindowsStatsInstanceListArgs>[]>;
    stats?: pulumi.Input<inputs.GetAamAuthenticationServerWindowsStatsStatsArgs>;
}
