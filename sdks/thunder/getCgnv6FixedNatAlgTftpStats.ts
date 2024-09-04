// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCgnv6FixedNatAlgTftpStats(args?: GetCgnv6FixedNatAlgTftpStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetCgnv6FixedNatAlgTftpStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getCgnv6FixedNatAlgTftpStats:getCgnv6FixedNatAlgTftpStats", {
        "id": args.id,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCgnv6FixedNatAlgTftpStats.
 */
export interface GetCgnv6FixedNatAlgTftpStatsArgs {
    id?: string;
    stats?: inputs.GetCgnv6FixedNatAlgTftpStatsStats;
}

/**
 * A collection of values returned by getCgnv6FixedNatAlgTftpStats.
 */
export interface GetCgnv6FixedNatAlgTftpStatsResult {
    readonly id: string;
    readonly stats?: outputs.GetCgnv6FixedNatAlgTftpStatsStats;
}
export function getCgnv6FixedNatAlgTftpStatsOutput(args?: GetCgnv6FixedNatAlgTftpStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCgnv6FixedNatAlgTftpStatsResult> {
    return pulumi.output(args).apply((a: any) => getCgnv6FixedNatAlgTftpStats(a, opts))
}

/**
 * A collection of arguments for invoking getCgnv6FixedNatAlgTftpStats.
 */
export interface GetCgnv6FixedNatAlgTftpStatsOutputArgs {
    id?: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetCgnv6FixedNatAlgTftpStatsStatsArgs>;
}
