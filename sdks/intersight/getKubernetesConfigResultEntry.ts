// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKubernetesConfigResultEntry(args?: GetKubernetesConfigResultEntryArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesConfigResultEntryResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getKubernetesConfigResultEntry:getKubernetesConfigResultEntry", {
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
 * A collection of arguments for invoking getKubernetesConfigResultEntry.
 */
export interface GetKubernetesConfigResultEntryArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetKubernetesConfigResultEntryAncestor[];
    classId?: string;
    completedTime?: string;
    configResult?: inputs.GetKubernetesConfigResultEntryConfigResult;
    context?: inputs.GetKubernetesConfigResultEntryContext;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    message?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    ownerId?: string;
    owners?: string[];
    parent?: inputs.GetKubernetesConfigResultEntryParent;
    permissionResources?: inputs.GetKubernetesConfigResultEntryPermissionResource[];
    sharedScope?: string;
    state?: string;
    tags?: inputs.GetKubernetesConfigResultEntryTag[];
    type?: string;
    versionContext?: inputs.GetKubernetesConfigResultEntryVersionContext;
}

/**
 * A collection of values returned by getKubernetesConfigResultEntry.
 */
export interface GetKubernetesConfigResultEntryResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetKubernetesConfigResultEntryAncestor[];
    readonly classId?: string;
    readonly completedTime?: string;
    readonly configResult?: outputs.GetKubernetesConfigResultEntryConfigResult;
    readonly context?: outputs.GetKubernetesConfigResultEntryContext;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly message?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly ownerId?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetKubernetesConfigResultEntryParent;
    readonly permissionResources?: outputs.GetKubernetesConfigResultEntryPermissionResource[];
    readonly results: outputs.GetKubernetesConfigResultEntryResult[];
    readonly sharedScope?: string;
    readonly state?: string;
    readonly tags?: outputs.GetKubernetesConfigResultEntryTag[];
    readonly type?: string;
    readonly versionContext?: outputs.GetKubernetesConfigResultEntryVersionContext;
}
export function getKubernetesConfigResultEntryOutput(args?: GetKubernetesConfigResultEntryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubernetesConfigResultEntryResult> {
    return pulumi.output(args).apply((a: any) => getKubernetesConfigResultEntry(a, opts))
}

/**
 * A collection of arguments for invoking getKubernetesConfigResultEntry.
 */
export interface GetKubernetesConfigResultEntryOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetKubernetesConfigResultEntryAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    completedTime?: pulumi.Input<string>;
    configResult?: pulumi.Input<inputs.GetKubernetesConfigResultEntryConfigResultArgs>;
    context?: pulumi.Input<inputs.GetKubernetesConfigResultEntryContextArgs>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    message?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    ownerId?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetKubernetesConfigResultEntryParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetKubernetesConfigResultEntryPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetKubernetesConfigResultEntryTagArgs>[]>;
    type?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetKubernetesConfigResultEntryVersionContextArgs>;
}
