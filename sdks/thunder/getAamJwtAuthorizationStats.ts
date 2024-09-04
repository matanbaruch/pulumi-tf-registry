// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAamJwtAuthorizationStats(args: GetAamJwtAuthorizationStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetAamJwtAuthorizationStatsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getAamJwtAuthorizationStats:getAamJwtAuthorizationStats", {
        "id": args.id,
        "name": args.name,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAamJwtAuthorizationStats.
 */
export interface GetAamJwtAuthorizationStatsArgs {
    id?: string;
    name: string;
    stats?: inputs.GetAamJwtAuthorizationStatsStats;
}

/**
 * A collection of values returned by getAamJwtAuthorizationStats.
 */
export interface GetAamJwtAuthorizationStatsResult {
    readonly id: string;
    readonly name: string;
    readonly stats?: outputs.GetAamJwtAuthorizationStatsStats;
}
export function getAamJwtAuthorizationStatsOutput(args: GetAamJwtAuthorizationStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAamJwtAuthorizationStatsResult> {
    return pulumi.output(args).apply((a: any) => getAamJwtAuthorizationStats(a, opts))
}

/**
 * A collection of arguments for invoking getAamJwtAuthorizationStats.
 */
export interface GetAamJwtAuthorizationStatsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetAamJwtAuthorizationStatsStatsArgs>;
}
