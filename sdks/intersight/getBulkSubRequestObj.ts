// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBulkSubRequestObj(args?: GetBulkSubRequestObjArgs, opts?: pulumi.InvokeOptions): Promise<GetBulkSubRequestObjResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getBulkSubRequestObj:getBulkSubRequestObj", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "asyncRequest": args.asyncRequest,
        "body": args.body,
        "bodyString": args.bodyString,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "executionCompletionTime": args.executionCompletionTime,
        "executionStartTime": args.executionStartTime,
        "id": args.id,
        "isBulkMoOp": args.isBulkMoOp,
        "isObjectPresent": args.isObjectPresent,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "request": args.request,
        "result": args.result,
        "sharedScope": args.sharedScope,
        "skipDuplicates": args.skipDuplicates,
        "status": args.status,
        "systemDefinedObjectDetected": args.systemDefinedObjectDetected,
        "tags": args.tags,
        "targetMoid": args.targetMoid,
        "uri": args.uri,
        "verb": args.verb,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBulkSubRequestObj.
 */
export interface GetBulkSubRequestObjArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetBulkSubRequestObjAncestor[];
    asyncRequest?: inputs.GetBulkSubRequestObjAsyncRequest;
    body?: inputs.GetBulkSubRequestObjBody;
    bodyString?: string;
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    executionCompletionTime?: string;
    executionStartTime?: string;
    id?: string;
    isBulkMoOp?: boolean;
    isObjectPresent?: boolean;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetBulkSubRequestObjParent;
    permissionResources?: inputs.GetBulkSubRequestObjPermissionResource[];
    request?: inputs.GetBulkSubRequestObjRequest;
    result?: inputs.GetBulkSubRequestObjResult;
    sharedScope?: string;
    skipDuplicates?: boolean;
    status?: string;
    systemDefinedObjectDetected?: boolean;
    tags?: inputs.GetBulkSubRequestObjTag[];
    targetMoid?: string;
    uri?: string;
    verb?: string;
    versionContext?: inputs.GetBulkSubRequestObjVersionContext;
}

/**
 * A collection of values returned by getBulkSubRequestObj.
 */
export interface GetBulkSubRequestObjResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetBulkSubRequestObjAncestor[];
    readonly asyncRequest?: outputs.GetBulkSubRequestObjAsyncRequest;
    readonly body?: outputs.GetBulkSubRequestObjBody;
    readonly bodyString?: string;
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly executionCompletionTime?: string;
    readonly executionStartTime?: string;
    readonly id: string;
    readonly isBulkMoOp?: boolean;
    readonly isObjectPresent?: boolean;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetBulkSubRequestObjParent;
    readonly permissionResources?: outputs.GetBulkSubRequestObjPermissionResource[];
    readonly request?: outputs.GetBulkSubRequestObjRequest;
    readonly result?: outputs.GetBulkSubRequestObjResult;
    readonly results: outputs.GetBulkSubRequestObjResult[];
    readonly sharedScope?: string;
    readonly skipDuplicates?: boolean;
    readonly status?: string;
    readonly systemDefinedObjectDetected?: boolean;
    readonly tags?: outputs.GetBulkSubRequestObjTag[];
    readonly targetMoid?: string;
    readonly uri?: string;
    readonly verb?: string;
    readonly versionContext?: outputs.GetBulkSubRequestObjVersionContext;
}
export function getBulkSubRequestObjOutput(args?: GetBulkSubRequestObjOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBulkSubRequestObjResult> {
    return pulumi.output(args).apply((a: any) => getBulkSubRequestObj(a, opts))
}

/**
 * A collection of arguments for invoking getBulkSubRequestObj.
 */
export interface GetBulkSubRequestObjOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetBulkSubRequestObjAncestorArgs>[]>;
    asyncRequest?: pulumi.Input<inputs.GetBulkSubRequestObjAsyncRequestArgs>;
    body?: pulumi.Input<inputs.GetBulkSubRequestObjBodyArgs>;
    bodyString?: pulumi.Input<string>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    executionCompletionTime?: pulumi.Input<string>;
    executionStartTime?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    isBulkMoOp?: pulumi.Input<boolean>;
    isObjectPresent?: pulumi.Input<boolean>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetBulkSubRequestObjParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetBulkSubRequestObjPermissionResourceArgs>[]>;
    request?: pulumi.Input<inputs.GetBulkSubRequestObjRequestArgs>;
    result?: pulumi.Input<inputs.GetBulkSubRequestObjResultArgs>;
    sharedScope?: pulumi.Input<string>;
    skipDuplicates?: pulumi.Input<boolean>;
    status?: pulumi.Input<string>;
    systemDefinedObjectDetected?: pulumi.Input<boolean>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetBulkSubRequestObjTagArgs>[]>;
    targetMoid?: pulumi.Input<string>;
    uri?: pulumi.Input<string>;
    verb?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetBulkSubRequestObjVersionContextArgs>;
}
