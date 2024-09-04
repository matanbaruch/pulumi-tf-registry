// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAamAuthenticationLogonHttpAuthenticateInstanceStats(args: GetAamAuthenticationLogonHttpAuthenticateInstanceStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetAamAuthenticationLogonHttpAuthenticateInstanceStatsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getAamAuthenticationLogonHttpAuthenticateInstanceStats:getAamAuthenticationLogonHttpAuthenticateInstanceStats", {
        "id": args.id,
        "name": args.name,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAamAuthenticationLogonHttpAuthenticateInstanceStats.
 */
export interface GetAamAuthenticationLogonHttpAuthenticateInstanceStatsArgs {
    id?: string;
    name: string;
    stats?: inputs.GetAamAuthenticationLogonHttpAuthenticateInstanceStatsStats;
}

/**
 * A collection of values returned by getAamAuthenticationLogonHttpAuthenticateInstanceStats.
 */
export interface GetAamAuthenticationLogonHttpAuthenticateInstanceStatsResult {
    readonly id: string;
    readonly name: string;
    readonly stats?: outputs.GetAamAuthenticationLogonHttpAuthenticateInstanceStatsStats;
}
export function getAamAuthenticationLogonHttpAuthenticateInstanceStatsOutput(args: GetAamAuthenticationLogonHttpAuthenticateInstanceStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAamAuthenticationLogonHttpAuthenticateInstanceStatsResult> {
    return pulumi.output(args).apply((a: any) => getAamAuthenticationLogonHttpAuthenticateInstanceStats(a, opts))
}

/**
 * A collection of arguments for invoking getAamAuthenticationLogonHttpAuthenticateInstanceStats.
 */
export interface GetAamAuthenticationLogonHttpAuthenticateInstanceStatsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetAamAuthenticationLogonHttpAuthenticateInstanceStatsStatsArgs>;
}
