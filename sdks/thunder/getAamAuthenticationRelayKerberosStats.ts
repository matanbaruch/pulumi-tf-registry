// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAamAuthenticationRelayKerberosStats(args?: GetAamAuthenticationRelayKerberosStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetAamAuthenticationRelayKerberosStatsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getAamAuthenticationRelayKerberosStats:getAamAuthenticationRelayKerberosStats", {
        "id": args.id,
        "instanceLists": args.instanceLists,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAamAuthenticationRelayKerberosStats.
 */
export interface GetAamAuthenticationRelayKerberosStatsArgs {
    id?: string;
    instanceLists?: inputs.GetAamAuthenticationRelayKerberosStatsInstanceList[];
    stats?: inputs.GetAamAuthenticationRelayKerberosStatsStats;
}

/**
 * A collection of values returned by getAamAuthenticationRelayKerberosStats.
 */
export interface GetAamAuthenticationRelayKerberosStatsResult {
    readonly id: string;
    readonly instanceLists?: outputs.GetAamAuthenticationRelayKerberosStatsInstanceList[];
    readonly stats?: outputs.GetAamAuthenticationRelayKerberosStatsStats;
}
export function getAamAuthenticationRelayKerberosStatsOutput(args?: GetAamAuthenticationRelayKerberosStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAamAuthenticationRelayKerberosStatsResult> {
    return pulumi.output(args).apply((a: any) => getAamAuthenticationRelayKerberosStats(a, opts))
}

/**
 * A collection of arguments for invoking getAamAuthenticationRelayKerberosStats.
 */
export interface GetAamAuthenticationRelayKerberosStatsOutputArgs {
    id?: pulumi.Input<string>;
    instanceLists?: pulumi.Input<pulumi.Input<inputs.GetAamAuthenticationRelayKerberosStatsInstanceListArgs>[]>;
    stats?: pulumi.Input<inputs.GetAamAuthenticationRelayKerberosStatsStatsArgs>;
}
