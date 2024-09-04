// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSlbFtpCtlStats(args?: GetSlbFtpCtlStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetSlbFtpCtlStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getSlbFtpCtlStats:getSlbFtpCtlStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSlbFtpCtlStats.
 */
export interface GetSlbFtpCtlStatsArgs {
    id?: string;
    stats?: inputs.GetSlbFtpCtlStatsStats;
}

/**
 * A collection of values returned by getSlbFtpCtlStats.
 */
export interface GetSlbFtpCtlStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetSlbFtpCtlStatsStats;
}
export function getSlbFtpCtlStatsOutput(args?: GetSlbFtpCtlStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSlbFtpCtlStatsResult> {
    return pulumi.output(args).apply((a: any) => getSlbFtpCtlStats(a, opts))
}

/**
 * A collection of arguments for invoking getSlbFtpCtlStats.
 */
export interface GetSlbFtpCtlStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetSlbFtpCtlStatsStatsArgs>;
}
