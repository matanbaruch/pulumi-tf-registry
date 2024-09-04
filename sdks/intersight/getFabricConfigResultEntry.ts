// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFabricConfigResultEntry(args?: GetFabricConfigResultEntryArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricConfigResultEntryResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getFabricConfigResultEntry:getFabricConfigResultEntry", {
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
 * A collection of arguments for invoking getFabricConfigResultEntry.
 */
export interface GetFabricConfigResultEntryArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetFabricConfigResultEntryAncestor[];
    classId?: string;
    completedTime?: string;
    configResult?: inputs.GetFabricConfigResultEntryConfigResult;
    context?: inputs.GetFabricConfigResultEntryContext;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    message?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    ownerId?: string;
    owners?: string[];
    parent?: inputs.GetFabricConfigResultEntryParent;
    permissionResources?: inputs.GetFabricConfigResultEntryPermissionResource[];
    sharedScope?: string;
    state?: string;
    tags?: inputs.GetFabricConfigResultEntryTag[];
    type?: string;
    versionContext?: inputs.GetFabricConfigResultEntryVersionContext;
}

/**
 * A collection of values returned by getFabricConfigResultEntry.
 */
export interface GetFabricConfigResultEntryResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetFabricConfigResultEntryAncestor[];
    readonly classId?: string;
    readonly completedTime?: string;
    readonly configResult?: outputs.GetFabricConfigResultEntryConfigResult;
    readonly context?: outputs.GetFabricConfigResultEntryContext;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly message?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly ownerId?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetFabricConfigResultEntryParent;
    readonly permissionResources?: outputs.GetFabricConfigResultEntryPermissionResource[];
    readonly results: outputs.GetFabricConfigResultEntryResult[];
    readonly sharedScope?: string;
    readonly state?: string;
    readonly tags?: outputs.GetFabricConfigResultEntryTag[];
    readonly type?: string;
    readonly versionContext?: outputs.GetFabricConfigResultEntryVersionContext;
}
export function getFabricConfigResultEntryOutput(args?: GetFabricConfigResultEntryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFabricConfigResultEntryResult> {
    return pulumi.output(args).apply((a: any) => getFabricConfigResultEntry(a, opts))
}

/**
 * A collection of arguments for invoking getFabricConfigResultEntry.
 */
export interface GetFabricConfigResultEntryOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetFabricConfigResultEntryAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    completedTime?: pulumi.Input<string>;
    configResult?: pulumi.Input<inputs.GetFabricConfigResultEntryConfigResultArgs>;
    context?: pulumi.Input<inputs.GetFabricConfigResultEntryContextArgs>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    message?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    ownerId?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetFabricConfigResultEntryParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetFabricConfigResultEntryPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetFabricConfigResultEntryTagArgs>[]>;
    type?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetFabricConfigResultEntryVersionContextArgs>;
}
