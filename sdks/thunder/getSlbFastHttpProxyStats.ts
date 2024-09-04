// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSlbFastHttpProxyStats(args?: GetSlbFastHttpProxyStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetSlbFastHttpProxyStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSlbFastHttpProxyStats:getSlbFastHttpProxyStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSlbFastHttpProxyStats.
 */
export interface GetSlbFastHttpProxyStatsArgs {
    id?: string;
    stats?: inputs.GetSlbFastHttpProxyStatsStats;
}

/**
 * A collection of values returned by getSlbFastHttpProxyStats.
 */
export interface GetSlbFastHttpProxyStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetSlbFastHttpProxyStatsStats;
}
export function getSlbFastHttpProxyStatsOutput(args?: GetSlbFastHttpProxyStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSlbFastHttpProxyStatsResult> {
    return pulumi.output(args).apply((a: any) => getSlbFastHttpProxyStats(a, opts))
}

/**
 * A collection of arguments for invoking getSlbFastHttpProxyStats.
 */
export interface GetSlbFastHttpProxyStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetSlbFastHttpProxyStatsStatsArgs>;
}
