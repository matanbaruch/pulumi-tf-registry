// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWorkflowTaskDebugLog(args?: GetWorkflowTaskDebugLogArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkflowTaskDebugLogResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getWorkflowTaskDebugLog:getWorkflowTaskDebugLog", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "retryCount": args.retryCount,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "taskDebugLogEntries": args.taskDebugLogEntries,
        "taskInfo": args.taskInfo,
        "taskInstId": args.taskInstId,
        "versionContext": args.versionContext,
        "workflowInfo": args.workflowInfo,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWorkflowTaskDebugLog.
 */
export interface GetWorkflowTaskDebugLogArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetWorkflowTaskDebugLogAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetWorkflowTaskDebugLogParent;
    permissionResources?: inputs.GetWorkflowTaskDebugLogPermissionResource[];
    retryCount?: number;
    sharedScope?: string;
    tags?: inputs.GetWorkflowTaskDebugLogTag[];
    taskDebugLogEntries?: string;
    taskInfo?: inputs.GetWorkflowTaskDebugLogTaskInfo;
    taskInstId?: string;
    versionContext?: inputs.GetWorkflowTaskDebugLogVersionContext;
    workflowInfo?: inputs.GetWorkflowTaskDebugLogWorkflowInfo;
}

/**
 * A collection of values returned by getWorkflowTaskDebugLog.
 */
export interface GetWorkflowTaskDebugLogResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetWorkflowTaskDebugLogAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetWorkflowTaskDebugLogParent;
    readonly permissionResources?: outputs.GetWorkflowTaskDebugLogPermissionResource[];
    readonly results: outputs.GetWorkflowTaskDebugLogResult[];
    readonly retryCount?: number;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetWorkflowTaskDebugLogTag[];
    readonly taskDebugLogEntries?: string;
    readonly taskInfo?: outputs.GetWorkflowTaskDebugLogTaskInfo;
    readonly taskInstId?: string;
    readonly versionContext?: outputs.GetWorkflowTaskDebugLogVersionContext;
    readonly workflowInfo?: outputs.GetWorkflowTaskDebugLogWorkflowInfo;
}
export function getWorkflowTaskDebugLogOutput(args?: GetWorkflowTaskDebugLogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkflowTaskDebugLogResult> {
    return pulumi.output(args).apply((a: any) => getWorkflowTaskDebugLog(a, opts))
}

/**
 * A collection of arguments for invoking getWorkflowTaskDebugLog.
 */
export interface GetWorkflowTaskDebugLogOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetWorkflowTaskDebugLogAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetWorkflowTaskDebugLogParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetWorkflowTaskDebugLogPermissionResourceArgs>[]>;
    retryCount?: pulumi.Input<number>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetWorkflowTaskDebugLogTagArgs>[]>;
    taskDebugLogEntries?: pulumi.Input<string>;
    taskInfo?: pulumi.Input<inputs.GetWorkflowTaskDebugLogTaskInfoArgs>;
    taskInstId?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetWorkflowTaskDebugLogVersionContextArgs>;
    workflowInfo?: pulumi.Input<inputs.GetWorkflowTaskDebugLogWorkflowInfoArgs>;
}
