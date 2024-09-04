// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServerConfigResultEntry(args?: GetServerConfigResultEntryArgs, opts?: pulumi.InvokeOptions): Promise<GetServerConfigResultEntryResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getServerConfigResultEntry:getServerConfigResultEntry", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "completedTime": args.completedTime,
        "configResult": args.configResult,
        "context": args.context,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "message": args.message,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "ownerId": args.ownerId,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "state": args.state,
        "tags": args.tags,
        "type": args.type,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServerConfigResultEntry.
 */
export interface GetServerConfigResultEntryArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetServerConfigResultEntryAncestor[];
    classId?: string;
    completedTime?: string;
    configResult?: inputs.GetServerConfigResultEntryConfigResult;
    context?: inputs.GetServerConfigResultEntryContext;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    message?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    ownerId?: string;
    owners?: string[];
    parent?: inputs.GetServerConfigResultEntryParent;
    permissionResources?: inputs.GetServerConfigResultEntryPermissionResource[];
    sharedScope?: string;
    state?: string;
    tags?: inputs.GetServerConfigResultEntryTag[];
    type?: string;
    versionContext?: inputs.GetServerConfigResultEntryVersionContext;
}

/**
 * A collection of values returned by getServerConfigResultEntry.
 */
export interface GetServerConfigResultEntryResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetServerConfigResultEntryAncestor[];
    readonly classId?: string;
    readonly completedTime?: string;
    readonly configResult?: outputs.GetServerConfigResultEntryConfigResult;
    readonly context?: outputs.GetServerConfigResultEntryContext;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly message?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly ownerId?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetServerConfigResultEntryParent;
    readonly permissionResources?: outputs.GetServerConfigResultEntryPermissionResource[];
    readonly results: outputs.GetServerConfigResultEntryResult[];
    readonly sharedScope?: string;
    readonly state?: string;
    readonly tags?: outputs.GetServerConfigResultEntryTag[];
    readonly type?: string;
    readonly versionContext?: outputs.GetServerConfigResultEntryVersionContext;
}
export function getServerConfigResultEntryOutput(args?: GetServerConfigResultEntryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerConfigResultEntryResult> {
    return pulumi.output(args).apply((a: any) => getServerConfigResultEntry(a, opts))
}

/**
 * A collection of arguments for invoking getServerConfigResultEntry.
 */
export interface GetServerConfigResultEntryOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetServerConfigResultEntryAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    completedTime?: pulumi.Input<string>;
    configResult?: pulumi.Input<inputs.GetServerConfigResultEntryConfigResultArgs>;
    context?: pulumi.Input<inputs.GetServerConfigResultEntryContextArgs>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    message?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    ownerId?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetServerConfigResultEntryParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetServerConfigResultEntryPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetServerConfigResultEntryTagArgs>[]>;
    type?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetServerConfigResultEntryVersionContextArgs>;
}
