// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSlbServerGroupStats(args: GetSlbServerGroupStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetSlbServerGroupStatsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSlbServerGroupStats:getSlbServerGroupStats", {
        "id": args.id,
        "name": args.name,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSlbServerGroupStats.
 */
export interface GetSlbServerGroupStatsArgs {
    id?: string;
    name: string;
    stats?: inputs.GetSlbServerGroupStatsStats;
}

/**
 * A collection of values returned by getSlbServerGroupStats.
 */
export interface GetSlbServerGroupStatsResult {
    readonly id: string;
    readonly name: string;
    readonly stats?: outputs.GetSlbServerGroupStatsStats;
}
export function getSlbServerGroupStatsOutput(args: GetSlbServerGroupStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSlbServerGroupStatsResult> {
    return pulumi.output(args).apply((a: any) => getSlbServerGroupStats(a, opts))
}

/**
 * A collection of arguments for invoking getSlbServerGroupStats.
 */
export interface GetSlbServerGroupStatsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetSlbServerGroupStatsStatsArgs>;
}
