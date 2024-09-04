// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getManagementIpsUpdateSchedule(args?: GetManagementIpsUpdateScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementIpsUpdateScheduleResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementIpsUpdateSchedule:getManagementIpsUpdateSchedule", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementIpsUpdateSchedule.
 */
export interface GetManagementIpsUpdateScheduleArgs {
    id?: string;
}

/**
 * A collection of values returned by getManagementIpsUpdateSchedule.
 */
export interface GetManagementIpsUpdateScheduleResult {
    readonly enabled: boolean;
    readonly id: string;
    readonly recurrences: outputs.GetManagementIpsUpdateScheduleRecurrence[];
    readonly time: string;
}
export function getManagementIpsUpdateScheduleOutput(args?: GetManagementIpsUpdateScheduleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementIpsUpdateScheduleResult> {
    return pulumi.output(args).apply((a: any) => getManagementIpsUpdateSchedule(a, opts))
}

/**
 * A collection of arguments for invoking getManagementIpsUpdateSchedule.
 */
export interface GetManagementIpsUpdateScheduleOutputArgs {
    id?: pulumi.Input<string>;
}
