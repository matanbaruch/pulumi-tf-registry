// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageNetAppQtree(args?: GetStorageNetAppQtreeArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageNetAppQtreeResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getStorageNetAppQtree:getStorageNetAppQtree", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "exportPolicyId": args.exportPolicyId,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "path": args.path,
        "permission": args.permission,
        "permissionResources": args.permissionResources,
        "qtreeId": args.qtreeId,
        "securityStyle": args.securityStyle,
        "sharedScope": args.sharedScope,
        "storageContainer": args.storageContainer,
        "svmName": args.svmName,
        "tags": args.tags,
        "tenant": args.tenant,
        "versionContext": args.versionContext,
        "volumeName": args.volumeName,
        "volumeUuid": args.volumeUuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageNetAppQtree.
 */
export interface GetStorageNetAppQtreeArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetStorageNetAppQtreeAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    exportPolicyId?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetStorageNetAppQtreeParent;
    path?: string;
    permission?: string;
    permissionResources?: inputs.GetStorageNetAppQtreePermissionResource[];
    qtreeId?: number;
    securityStyle?: string;
    sharedScope?: string;
    storageContainer?: inputs.GetStorageNetAppQtreeStorageContainer;
    svmName?: string;
    tags?: inputs.GetStorageNetAppQtreeTag[];
    tenant?: inputs.GetStorageNetAppQtreeTenant;
    versionContext?: inputs.GetStorageNetAppQtreeVersionContext;
    volumeName?: string;
    volumeUuid?: string;
}

/**
 * A collection of values returned by getStorageNetAppQtree.
 */
export interface GetStorageNetAppQtreeResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetStorageNetAppQtreeAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly exportPolicyId?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetStorageNetAppQtreeParent;
    readonly path?: string;
    readonly permission?: string;
    readonly permissionResources?: outputs.GetStorageNetAppQtreePermissionResource[];
    readonly qtreeId?: number;
    readonly results: outputs.GetStorageNetAppQtreeResult[];
    readonly securityStyle?: string;
    readonly sharedScope?: string;
    readonly storageContainer?: outputs.GetStorageNetAppQtreeStorageContainer;
    readonly svmName?: string;
    readonly tags?: outputs.GetStorageNetAppQtreeTag[];
    readonly tenant?: outputs.GetStorageNetAppQtreeTenant;
    readonly versionContext?: outputs.GetStorageNetAppQtreeVersionContext;
    readonly volumeName?: string;
    readonly volumeUuid?: string;
}
export function getStorageNetAppQtreeOutput(args?: GetStorageNetAppQtreeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageNetAppQtreeResult> {
    return pulumi.output(args).apply((a: any) => getStorageNetAppQtree(a, opts))
}

/**
 * A collection of arguments for invoking getStorageNetAppQtree.
 */
export interface GetStorageNetAppQtreeOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppQtreeAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    exportPolicyId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetStorageNetAppQtreeParentArgs>;
    path?: pulumi.Input<string>;
    permission?: pulumi.Input<string>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppQtreePermissionResourceArgs>[]>;
    qtreeId?: pulumi.Input<number>;
    securityStyle?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    storageContainer?: pulumi.Input<inputs.GetStorageNetAppQtreeStorageContainerArgs>;
    svmName?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppQtreeTagArgs>[]>;
    tenant?: pulumi.Input<inputs.GetStorageNetAppQtreeTenantArgs>;
    versionContext?: pulumi.Input<inputs.GetStorageNetAppQtreeVersionContextArgs>;
    volumeName?: pulumi.Input<string>;
    volumeUuid?: pulumi.Input<string>;
}
