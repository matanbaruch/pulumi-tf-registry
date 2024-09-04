// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getManagementAutomaticPurge(args?: GetManagementAutomaticPurgeArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementAutomaticPurgeResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementAutomaticPurge:getManagementAutomaticPurge", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementAutomaticPurge.
 */
export interface GetManagementAutomaticPurgeArgs {
    id?: string;
}

/**
 * A collection of values returned by getManagementAutomaticPurge.
 */
export interface GetManagementAutomaticPurgeResult {
    readonly enabled: boolean;
    readonly id: string;
    readonly keepSessionsByCount: boolean;
    readonly keepSessionsByDays: boolean;
    readonly numberOfDaysToKeep: number;
    readonly numberOfSessionsToKeep: number;
    readonly schedulings: outputs.GetManagementAutomaticPurgeScheduling[];
}
export function getManagementAutomaticPurgeOutput(args?: GetManagementAutomaticPurgeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementAutomaticPurgeResult> {
    return pulumi.output(args).apply((a: any) => getManagementAutomaticPurge(a, opts))
}

/**
 * A collection of arguments for invoking getManagementAutomaticPurge.
 */
export interface GetManagementAutomaticPurgeOutputArgs {
    id?: pulumi.Input<string>;
}
