// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEssScheduledTasks(args?: GetEssScheduledTasksArgs, opts?: pulumi.InvokeOptions): Promise<GetEssScheduledTasksResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getEssScheduledTasks:getEssScheduledTasks", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "scheduledAction": args.scheduledAction,
        "scheduledTaskId": args.scheduledTaskId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEssScheduledTasks.
 */
export interface GetEssScheduledTasksArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    scheduledAction?: string;
    scheduledTaskId?: string;
}

/**
 * A collection of values returned by getEssScheduledTasks.
 */
export interface GetEssScheduledTasksResult {
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly scheduledAction?: string;
    readonly scheduledTaskId?: string;
    readonly tasks: outputs.GetEssScheduledTasksTask[];
}
export function getEssScheduledTasksOutput(args?: GetEssScheduledTasksOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEssScheduledTasksResult> {
    return pulumi.output(args).apply((a: any) => getEssScheduledTasks(a, opts))
}

/**
 * A collection of arguments for invoking getEssScheduledTasks.
 */
export interface GetEssScheduledTasksOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    scheduledAction?: pulumi.Input<string>;
    scheduledTaskId?: pulumi.Input<string>;
}
