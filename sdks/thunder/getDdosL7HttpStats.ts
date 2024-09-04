// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDdosL7HttpStats(args?: GetDdosL7HttpStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetDdosL7HttpStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getDdosL7HttpStats:getDdosL7HttpStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDdosL7HttpStats.
 */
export interface GetDdosL7HttpStatsArgs {
    id?: string;
    stats?: inputs.GetDdosL7HttpStatsStats;
}

/**
 * A collection of values returned by getDdosL7HttpStats.
 */
export interface GetDdosL7HttpStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetDdosL7HttpStatsStats;
}
export function getDdosL7HttpStatsOutput(args?: GetDdosL7HttpStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDdosL7HttpStatsResult> {
    return pulumi.output(args).apply((a: any) => getDdosL7HttpStats(a, opts))
}

/**
 * A collection of arguments for invoking getDdosL7HttpStats.
 */
export interface GetDdosL7HttpStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetDdosL7HttpStatsStatsArgs>;
}
