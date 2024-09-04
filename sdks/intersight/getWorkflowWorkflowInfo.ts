// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWorkflowWorkflowInfo(args?: GetWorkflowWorkflowInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkflowWorkflowInfoResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getWorkflowWorkflowInfo:getWorkflowWorkflowInfo", {
        "account": args.account,
        "accountMoid": args.accountMoid,
        "action": args.action,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "associatedObject": args.associatedObject,
        "classId": args.classId,
        "cleanupTime": args.cleanupTime,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "email": args.email,
        "endTime": args.endTime,
        "failedWorkflowCleanupDuration": args.failedWorkflowCleanupDuration,
        "id": args.id,
        "input": args.input,
        "instId": args.instId,
        "internal": args.internal,
        "lastAction": args.lastAction,
        "messages": args.messages,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "output": args.output,
        "owners": args.owners,
        "parent": args.parent,
        "parentTaskInfo": args.parentTaskInfo,
        "pauseReason": args.pauseReason,
        "permission": args.permission,
        "permissionResources": args.permissionResources,
        "progress": args.progress,
        "properties": args.properties,
        "retryFromTaskName": args.retryFromTaskName,
        "sharedScope": args.sharedScope,
        "src": args.src,
        "startTime": args.startTime,
        "status": args.status,
        "successWorkflowCleanupDuration": args.successWorkflowCleanupDuration,
        "tags": args.tags,
        "taskInfoUpdate": args.taskInfoUpdate,
        "taskInfos": args.taskInfos,
        "traceId": args.traceId,
        "type": args.type,
        "userActionRequired": args.userActionRequired,
        "userId": args.userId,
        "variable": args.variable,
        "versionContext": args.versionContext,
        "waitReason": args.waitReason,
        "workflowCtx": args.workflowCtx,
        "workflowDefinition": args.workflowDefinition,
        "workflowStatus": args.workflowStatus,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWorkflowWorkflowInfo.
 */
export interface GetWorkflowWorkflowInfoArgs {
    account?: inputs.GetWorkflowWorkflowInfoAccount;
    accountMoid?: string;
    action?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetWorkflowWorkflowInfoAncestor[];
    associatedObject?: inputs.GetWorkflowWorkflowInfoAssociatedObject;
    classId?: string;
    cleanupTime?: string;
    createTime?: string;
    domainGroupMoid?: string;
    email?: string;
    endTime?: string;
    failedWorkflowCleanupDuration?: number;
    id?: string;
    input?: string;
    instId?: string;
    internal?: boolean;
    lastAction?: string;
    messages?: inputs.GetWorkflowWorkflowInfoMessage[];
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetWorkflowWorkflowInfoOrganization;
    output?: string;
    owners?: string[];
    parent?: inputs.GetWorkflowWorkflowInfoParent;
    parentTaskInfo?: inputs.GetWorkflowWorkflowInfoParentTaskInfo;
    pauseReason?: string;
    permission?: inputs.GetWorkflowWorkflowInfoPermission;
    permissionResources?: inputs.GetWorkflowWorkflowInfoPermissionResource[];
    progress?: number;
    properties?: inputs.GetWorkflowWorkflowInfoProperties;
    retryFromTaskName?: string;
    sharedScope?: string;
    src?: string;
    startTime?: string;
    status?: string;
    successWorkflowCleanupDuration?: number;
    tags?: inputs.GetWorkflowWorkflowInfoTag[];
    taskInfoUpdate?: inputs.GetWorkflowWorkflowInfoTaskInfoUpdate;
    taskInfos?: inputs.GetWorkflowWorkflowInfoTaskInfo[];
    traceId?: string;
    type?: string;
    userActionRequired?: boolean;
    userId?: string;
    variable?: string;
    versionContext?: inputs.GetWorkflowWorkflowInfoVersionContext;
    waitReason?: string;
    workflowCtx?: inputs.GetWorkflowWorkflowInfoWorkflowCtx;
    workflowDefinition?: inputs.GetWorkflowWorkflowInfoWorkflowDefinition;
    workflowStatus?: string;
}

/**
 * A collection of values returned by getWorkflowWorkflowInfo.
 */
export interface GetWorkflowWorkflowInfoResult {
    readonly account?: outputs.GetWorkflowWorkflowInfoAccount;
    readonly accountMoid?: string;
    readonly action?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetWorkflowWorkflowInfoAncestor[];
    readonly associatedObject?: outputs.GetWorkflowWorkflowInfoAssociatedObject;
    readonly classId?: string;
    readonly cleanupTime?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly email?: string;
    readonly endTime?: string;
    readonly failedWorkflowCleanupDuration?: number;
    readonly id: string;
    readonly input?: string;
    readonly instId?: string;
    readonly internal?: boolean;
    readonly lastAction?: string;
    readonly messages?: outputs.GetWorkflowWorkflowInfoMessage[];
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetWorkflowWorkflowInfoOrganization;
    readonly output?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetWorkflowWorkflowInfoParent;
    readonly parentTaskInfo?: outputs.GetWorkflowWorkflowInfoParentTaskInfo;
    readonly pauseReason?: string;
    readonly permission?: outputs.GetWorkflowWorkflowInfoPermission;
    readonly permissionResources?: outputs.GetWorkflowWorkflowInfoPermissionResource[];
    readonly progress?: number;
    readonly properties?: outputs.GetWorkflowWorkflowInfoProperties;
    readonly results: outputs.GetWorkflowWorkflowInfoResult[];
    readonly retryFromTaskName?: string;
    readonly sharedScope?: string;
    readonly src?: string;
    readonly startTime?: string;
    readonly status?: string;
    readonly successWorkflowCleanupDuration?: number;
    readonly tags?: outputs.GetWorkflowWorkflowInfoTag[];
    readonly taskInfoUpdate?: outputs.GetWorkflowWorkflowInfoTaskInfoUpdate;
    readonly taskInfos?: outputs.GetWorkflowWorkflowInfoTaskInfo[];
    readonly traceId?: string;
    readonly type?: string;
    readonly userActionRequired?: boolean;
    readonly userId?: string;
    readonly variable?: string;
    readonly versionContext?: outputs.GetWorkflowWorkflowInfoVersionContext;
    readonly waitReason?: string;
    readonly workflowCtx?: outputs.GetWorkflowWorkflowInfoWorkflowCtx;
    readonly workflowDefinition?: outputs.GetWorkflowWorkflowInfoWorkflowDefinition;
    readonly workflowStatus?: string;
}
export function getWorkflowWorkflowInfoOutput(args?: GetWorkflowWorkflowInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkflowWorkflowInfoResult> {
    return pulumi.output(args).apply((a: any) => getWorkflowWorkflowInfo(a, opts))
}

/**
 * A collection of arguments for invoking getWorkflowWorkflowInfo.
 */
export interface GetWorkflowWorkflowInfoOutputArgs {
    account?: pulumi.Input<inputs.GetWorkflowWorkflowInfoAccountArgs>;
    accountMoid?: pulumi.Input<string>;
    action?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetWorkflowWorkflowInfoAncestorArgs>[]>;
    associatedObject?: pulumi.Input<inputs.GetWorkflowWorkflowInfoAssociatedObjectArgs>;
    classId?: pulumi.Input<string>;
    cleanupTime?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    email?: pulumi.Input<string>;
    endTime?: pulumi.Input<string>;
    failedWorkflowCleanupDuration?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    input?: pulumi.Input<string>;
    instId?: pulumi.Input<string>;
    internal?: pulumi.Input<boolean>;
    lastAction?: pulumi.Input<string>;
    messages?: pulumi.Input<pulumi.Input<inputs.GetWorkflowWorkflowInfoMessageArgs>[]>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetWorkflowWorkflowInfoOrganizationArgs>;
    output?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetWorkflowWorkflowInfoParentArgs>;
    parentTaskInfo?: pulumi.Input<inputs.GetWorkflowWorkflowInfoParentTaskInfoArgs>;
    pauseReason?: pulumi.Input<string>;
    permission?: pulumi.Input<inputs.GetWorkflowWorkflowInfoPermissionArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetWorkflowWorkflowInfoPermissionResourceArgs>[]>;
    progress?: pulumi.Input<number>;
    properties?: pulumi.Input<inputs.GetWorkflowWorkflowInfoPropertiesArgs>;
    retryFromTaskName?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    src?: pulumi.Input<string>;
    startTime?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    successWorkflowCleanupDuration?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetWorkflowWorkflowInfoTagArgs>[]>;
    taskInfoUpdate?: pulumi.Input<inputs.GetWorkflowWorkflowInfoTaskInfoUpdateArgs>;
    taskInfos?: pulumi.Input<pulumi.Input<inputs.GetWorkflowWorkflowInfoTaskInfoArgs>[]>;
    traceId?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    userActionRequired?: pulumi.Input<boolean>;
    userId?: pulumi.Input<string>;
    variable?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetWorkflowWorkflowInfoVersionContextArgs>;
    waitReason?: pulumi.Input<string>;
    workflowCtx?: pulumi.Input<inputs.GetWorkflowWorkflowInfoWorkflowCtxArgs>;
    workflowDefinition?: pulumi.Input<inputs.GetWorkflowWorkflowInfoWorkflowDefinitionArgs>;
    workflowStatus?: pulumi.Input<string>;
}
