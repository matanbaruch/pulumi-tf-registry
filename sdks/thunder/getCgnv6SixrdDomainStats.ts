// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCgnv6SixrdDomainStats(args: GetCgnv6SixrdDomainStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetCgnv6SixrdDomainStatsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getCgnv6SixrdDomainStats:getCgnv6SixrdDomainStats", {
        "id": args.id,
        "name": args.name,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCgnv6SixrdDomainStats.
 */
export interface GetCgnv6SixrdDomainStatsArgs {
    id?: string;
    name: string;
    stats?: inputs.GetCgnv6SixrdDomainStatsStats;
}

/**
 * A collection of values returned by getCgnv6SixrdDomainStats.
 */
export interface GetCgnv6SixrdDomainStatsResult {
    readonly id: string;
    readonly name: string;
    readonly stats?: outputs.GetCgnv6SixrdDomainStatsStats;
}
export function getCgnv6SixrdDomainStatsOutput(args: GetCgnv6SixrdDomainStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCgnv6SixrdDomainStatsResult> {
    return pulumi.output(args).apply((a: any) => getCgnv6SixrdDomainStats(a, opts))
}

/**
 * A collection of arguments for invoking getCgnv6SixrdDomainStats.
 */
export interface GetCgnv6SixrdDomainStatsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetCgnv6SixrdDomainStatsStatsArgs>;
}
