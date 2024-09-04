// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWorkspaceRunTask(args: GetWorkspaceRunTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceRunTaskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tfe:index/getWorkspaceRunTask:getWorkspaceRunTask", {
        "taskId": args.taskId,
        "workspaceId": args.workspaceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWorkspaceRunTask.
 */
export interface GetWorkspaceRunTaskArgs {
    taskId: string;
    workspaceId: string;
}

/**
 * A collection of values returned by getWorkspaceRunTask.
 */
export interface GetWorkspaceRunTaskResult {
    readonly enforcementLevel: string;
    readonly id: string;
    /**
     * @deprecated Deprecated
     */
    readonly stage: string;
    readonly stages: string[];
    readonly taskId: string;
    readonly workspaceId: string;
}
export function getWorkspaceRunTaskOutput(args: GetWorkspaceRunTaskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceRunTaskResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceRunTask(a, opts))
}

/**
 * A collection of arguments for invoking getWorkspaceRunTask.
 */
export interface GetWorkspaceRunTaskOutputArgs {
    taskId: pulumi.Input<string>;
    workspaceId: pulumi.Input<string>;
}
