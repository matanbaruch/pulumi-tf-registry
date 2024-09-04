// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOpenapiTaskGenerationResult(args?: GetOpenapiTaskGenerationResultArgs, opts?: pulumi.InvokeOptions): Promise<GetOpenapiTaskGenerationResultResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getOpenapiTaskGenerationResult:getOpenapiTaskGenerationResult", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "failureReason": args.failureReason,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "taskDisplayName": args.taskDisplayName,
        "taskGenerationRequest": args.taskGenerationRequest,
        "taskName": args.taskName,
        "taskStatus": args.taskStatus,
        "taskVersion": args.taskVersion,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOpenapiTaskGenerationResult.
 */
export interface GetOpenapiTaskGenerationResultArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetOpenapiTaskGenerationResultAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    failureReason?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetOpenapiTaskGenerationResultParent;
    permissionResources?: inputs.GetOpenapiTaskGenerationResultPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetOpenapiTaskGenerationResultTag[];
    taskDisplayName?: string;
    taskGenerationRequest?: inputs.GetOpenapiTaskGenerationResultTaskGenerationRequest;
    taskName?: string;
    taskStatus?: string;
    taskVersion?: number;
    versionContext?: inputs.GetOpenapiTaskGenerationResultVersionContext;
}

/**
 * A collection of values returned by getOpenapiTaskGenerationResult.
 */
export interface GetOpenapiTaskGenerationResultResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetOpenapiTaskGenerationResultAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly failureReason?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetOpenapiTaskGenerationResultParent;
    readonly permissionResources?: outputs.GetOpenapiTaskGenerationResultPermissionResource[];
    readonly results: outputs.GetOpenapiTaskGenerationResultResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetOpenapiTaskGenerationResultTag[];
    readonly taskDisplayName?: string;
    readonly taskGenerationRequest?: outputs.GetOpenapiTaskGenerationResultTaskGenerationRequest;
    readonly taskName?: string;
    readonly taskStatus?: string;
    readonly taskVersion?: number;
    readonly versionContext?: outputs.GetOpenapiTaskGenerationResultVersionContext;
}
export function getOpenapiTaskGenerationResultOutput(args?: GetOpenapiTaskGenerationResultOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOpenapiTaskGenerationResultResult> {
    return pulumi.output(args).apply((a: any) => getOpenapiTaskGenerationResult(a, opts))
}

/**
 * A collection of arguments for invoking getOpenapiTaskGenerationResult.
 */
export interface GetOpenapiTaskGenerationResultOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetOpenapiTaskGenerationResultAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    failureReason?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetOpenapiTaskGenerationResultParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetOpenapiTaskGenerationResultPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetOpenapiTaskGenerationResultTagArgs>[]>;
    taskDisplayName?: pulumi.Input<string>;
    taskGenerationRequest?: pulumi.Input<inputs.GetOpenapiTaskGenerationResultTaskGenerationRequestArgs>;
    taskName?: pulumi.Input<string>;
    taskStatus?: pulumi.Input<string>;
    taskVersion?: pulumi.Input<number>;
    versionContext?: pulumi.Input<inputs.GetOpenapiTaskGenerationResultVersionContextArgs>;
}
