// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRecurringTasks(args?: GetRecurringTasksArgs, opts?: pulumi.InvokeOptions): Promise<GetRecurringTasksResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getRecurringTasks:getRecurringTasks", {
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRecurringTasks.
 */
export interface GetRecurringTasksArgs {
    filter?: string;
}

/**
 * A collection of values returned by getRecurringTasks.
 */
export interface GetRecurringTasksResult {
    readonly filter?: string;
    readonly id: string;
    readonly objects: outputs.GetRecurringTasksObject[];
}
export function getRecurringTasksOutput(args?: GetRecurringTasksOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRecurringTasksResult> {
    return pulumi.output(args).apply((a: any) => getRecurringTasks(a, opts))
}

/**
 * A collection of arguments for invoking getRecurringTasks.
 */
export interface GetRecurringTasksOutputArgs {
    filter?: pulumi.Input<string>;
}
