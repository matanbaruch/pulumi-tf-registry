// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCgnv6LsnRuleListDefaultStats(args: GetCgnv6LsnRuleListDefaultStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetCgnv6LsnRuleListDefaultStatsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getCgnv6LsnRuleListDefaultStats:getCgnv6LsnRuleListDefaultStats", {
        "id": args.id,
        "name": args.name,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCgnv6LsnRuleListDefaultStats.
 */
export interface GetCgnv6LsnRuleListDefaultStatsArgs {
    id?: string;
    name: string;
    stats?: inputs.GetCgnv6LsnRuleListDefaultStatsStats;
}

/**
 * A collection of values returned by getCgnv6LsnRuleListDefaultStats.
 */
export interface GetCgnv6LsnRuleListDefaultStatsResult {
    readonly id: string;
    readonly name: string;
    readonly stats?: outputs.GetCgnv6LsnRuleListDefaultStatsStats;
}
export function getCgnv6LsnRuleListDefaultStatsOutput(args: GetCgnv6LsnRuleListDefaultStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCgnv6LsnRuleListDefaultStatsResult> {
    return pulumi.output(args).apply((a: any) => getCgnv6LsnRuleListDefaultStats(a, opts))
}

/**
 * A collection of arguments for invoking getCgnv6LsnRuleListDefaultStats.
 */
export interface GetCgnv6LsnRuleListDefaultStatsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetCgnv6LsnRuleListDefaultStatsStatsArgs>;
}
