// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getThreatIntelThreatListStats(args: GetThreatIntelThreatListStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetThreatIntelThreatListStatsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getThreatIntelThreatListStats:getThreatIntelThreatListStats", {
        "id": args.id,
        "name": args.name,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getThreatIntelThreatListStats.
 */
export interface GetThreatIntelThreatListStatsArgs {
    id?: string;
    name: string;
    stats?: inputs.GetThreatIntelThreatListStatsStats;
}

/**
 * A collection of values returned by getThreatIntelThreatListStats.
 */
export interface GetThreatIntelThreatListStatsResult {
    readonly id: string;
    readonly name: string;
    readonly stats?: outputs.GetThreatIntelThreatListStatsStats;
}
export function getThreatIntelThreatListStatsOutput(args: GetThreatIntelThreatListStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetThreatIntelThreatListStatsResult> {
    return pulumi.output(args).apply((a: any) => getThreatIntelThreatListStats(a, opts))
}

/**
 * A collection of arguments for invoking getThreatIntelThreatListStats.
 */
export interface GetThreatIntelThreatListStatsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetThreatIntelThreatListStatsStatsArgs>;
}
