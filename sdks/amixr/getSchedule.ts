// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSchedule(args: GetScheduleArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("amixr:index/getSchedule:getSchedule", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSchedule.
 */
export interface GetScheduleArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getSchedule.
 */
export interface GetScheduleResult {
    readonly id: string;
    readonly name: string;
    readonly type: string;
}
export function getScheduleOutput(args: GetScheduleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScheduleResult> {
    return pulumi.output(args).apply((a: any) => getSchedule(a, opts))
}

/**
 * A collection of arguments for invoking getSchedule.
 */
export interface GetScheduleOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
