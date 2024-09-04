// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getComputeDownloadStatus(args?: GetComputeDownloadStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeDownloadStatusResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getComputeDownloadStatus:getComputeDownloadStatus", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "checksum": args.checksum,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "downloadError": args.downloadError,
        "downloadMessage": args.downloadMessage,
        "downloadPercentage": args.downloadPercentage,
        "downloadProgress": args.downloadProgress,
        "downloadRetries": args.downloadRetries,
        "downloadStage": args.downloadStage,
        "hostOp": args.hostOp,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sdCardDownloadError": args.sdCardDownloadError,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
        "workflow": args.workflow,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComputeDownloadStatus.
 */
export interface GetComputeDownloadStatusArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetComputeDownloadStatusAncestor[];
    checksum?: inputs.GetComputeDownloadStatusChecksum;
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    downloadError?: string;
    downloadMessage?: string;
    downloadPercentage?: number;
    downloadProgress?: number;
    downloadRetries?: number;
    downloadStage?: string;
    hostOp?: inputs.GetComputeDownloadStatusHostOp;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetComputeDownloadStatusParent;
    permissionResources?: inputs.GetComputeDownloadStatusPermissionResource[];
    sdCardDownloadError?: string;
    sharedScope?: string;
    tags?: inputs.GetComputeDownloadStatusTag[];
    versionContext?: inputs.GetComputeDownloadStatusVersionContext;
    workflow?: inputs.GetComputeDownloadStatusWorkflow;
}

/**
 * A collection of values returned by getComputeDownloadStatus.
 */
export interface GetComputeDownloadStatusResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetComputeDownloadStatusAncestor[];
    readonly checksum?: outputs.GetComputeDownloadStatusChecksum;
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly downloadError?: string;
    readonly downloadMessage?: string;
    readonly downloadPercentage?: number;
    readonly downloadProgress?: number;
    readonly downloadRetries?: number;
    readonly downloadStage?: string;
    readonly hostOp?: outputs.GetComputeDownloadStatusHostOp;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetComputeDownloadStatusParent;
    readonly permissionResources?: outputs.GetComputeDownloadStatusPermissionResource[];
    readonly results: outputs.GetComputeDownloadStatusResult[];
    readonly sdCardDownloadError?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetComputeDownloadStatusTag[];
    readonly versionContext?: outputs.GetComputeDownloadStatusVersionContext;
    readonly workflow?: outputs.GetComputeDownloadStatusWorkflow;
}
export function getComputeDownloadStatusOutput(args?: GetComputeDownloadStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeDownloadStatusResult> {
    return pulumi.output(args).apply((a: any) => getComputeDownloadStatus(a, opts))
}

/**
 * A collection of arguments for invoking getComputeDownloadStatus.
 */
export interface GetComputeDownloadStatusOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetComputeDownloadStatusAncestorArgs>[]>;
    checksum?: pulumi.Input<inputs.GetComputeDownloadStatusChecksumArgs>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    downloadError?: pulumi.Input<string>;
    downloadMessage?: pulumi.Input<string>;
    downloadPercentage?: pulumi.Input<number>;
    downloadProgress?: pulumi.Input<number>;
    downloadRetries?: pulumi.Input<number>;
    downloadStage?: pulumi.Input<string>;
    hostOp?: pulumi.Input<inputs.GetComputeDownloadStatusHostOpArgs>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetComputeDownloadStatusParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetComputeDownloadStatusPermissionResourceArgs>[]>;
    sdCardDownloadError?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetComputeDownloadStatusTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetComputeDownloadStatusVersionContextArgs>;
    workflow?: pulumi.Input<inputs.GetComputeDownloadStatusWorkflowArgs>;
}
