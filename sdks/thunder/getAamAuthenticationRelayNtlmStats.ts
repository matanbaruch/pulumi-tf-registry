// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAamAuthenticationRelayNtlmStats(args: GetAamAuthenticationRelayNtlmStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetAamAuthenticationRelayNtlmStatsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getAamAuthenticationRelayNtlmStats:getAamAuthenticationRelayNtlmStats", {
        "id": args.id,
        "name": args.name,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAamAuthenticationRelayNtlmStats.
 */
export interface GetAamAuthenticationRelayNtlmStatsArgs {
    id?: string;
    name: string;
    stats?: inputs.GetAamAuthenticationRelayNtlmStatsStats;
}

/**
 * A collection of values returned by getAamAuthenticationRelayNtlmStats.
 */
export interface GetAamAuthenticationRelayNtlmStatsResult {
    readonly id: string;
    readonly name: string;
    readonly stats?: outputs.GetAamAuthenticationRelayNtlmStatsStats;
}
export function getAamAuthenticationRelayNtlmStatsOutput(args: GetAamAuthenticationRelayNtlmStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAamAuthenticationRelayNtlmStatsResult> {
    return pulumi.output(args).apply((a: any) => getAamAuthenticationRelayNtlmStats(a, opts))
}

/**
 * A collection of arguments for invoking getAamAuthenticationRelayNtlmStats.
 */
export interface GetAamAuthenticationRelayNtlmStatsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetAamAuthenticationRelayNtlmStatsStatsArgs>;
}
