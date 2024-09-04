// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSlbSslForwardProxyStats(args?: GetSlbSslForwardProxyStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetSlbSslForwardProxyStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSlbSslForwardProxyStats:getSlbSslForwardProxyStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSlbSslForwardProxyStats.
 */
export interface GetSlbSslForwardProxyStatsArgs {
    id?: string;
    stats?: inputs.GetSlbSslForwardProxyStatsStats;
}

/**
 * A collection of values returned by getSlbSslForwardProxyStats.
 */
export interface GetSlbSslForwardProxyStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetSlbSslForwardProxyStatsStats;
}
export function getSlbSslForwardProxyStatsOutput(args?: GetSlbSslForwardProxyStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSlbSslForwardProxyStatsResult> {
    return pulumi.output(args).apply((a: any) => getSlbSslForwardProxyStats(a, opts))
}

/**
 * A collection of arguments for invoking getSlbSslForwardProxyStats.
 */
export interface GetSlbSslForwardProxyStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetSlbSslForwardProxyStatsStatsArgs>;
}
