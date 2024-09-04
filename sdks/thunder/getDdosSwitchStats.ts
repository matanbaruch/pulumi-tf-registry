// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDdosSwitchStats(args?: GetDdosSwitchStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetDdosSwitchStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getDdosSwitchStats:getDdosSwitchStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDdosSwitchStats.
 */
export interface GetDdosSwitchStatsArgs {
    id?: string;
    stats?: inputs.GetDdosSwitchStatsStats;
}

/**
 * A collection of values returned by getDdosSwitchStats.
 */
export interface GetDdosSwitchStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetDdosSwitchStatsStats;
}
export function getDdosSwitchStatsOutput(args?: GetDdosSwitchStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDdosSwitchStatsResult> {
    return pulumi.output(args).apply((a: any) => getDdosSwitchStats(a, opts))
}

/**
 * A collection of arguments for invoking getDdosSwitchStats.
 */
export interface GetDdosSwitchStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetDdosSwitchStatsStatsArgs>;
}
