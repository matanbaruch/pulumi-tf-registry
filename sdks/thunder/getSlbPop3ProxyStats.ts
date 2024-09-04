// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSlbPop3ProxyStats(args?: GetSlbPop3ProxyStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetSlbPop3ProxyStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSlbPop3ProxyStats:getSlbPop3ProxyStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSlbPop3ProxyStats.
 */
export interface GetSlbPop3ProxyStatsArgs {
    id?: string;
    stats?: inputs.GetSlbPop3ProxyStatsStats;
}

/**
 * A collection of values returned by getSlbPop3ProxyStats.
 */
export interface GetSlbPop3ProxyStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetSlbPop3ProxyStatsStats;
}
export function getSlbPop3ProxyStatsOutput(args?: GetSlbPop3ProxyStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSlbPop3ProxyStatsResult> {
    return pulumi.output(args).apply((a: any) => getSlbPop3ProxyStats(a, opts))
}

/**
 * A collection of arguments for invoking getSlbPop3ProxyStats.
 */
export interface GetSlbPop3ProxyStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetSlbPop3ProxyStatsStatsArgs>;
}
