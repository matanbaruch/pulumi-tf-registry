// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageNetAppCifsService(args?: GetStorageNetAppCifsServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageNetAppCifsServiceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getStorageNetAppCifsService:getStorageNetAppCifsService", {
        "accountMoid": args.accountMoid,
        "activeDirectoryFqdn": args.activeDirectoryFqdn,
        "adOrganizationalUnit": args.adOrganizationalUnit,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "comment": args.comment,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "enabled": args.enabled,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "serverName": args.serverName,
        "sharedScope": args.sharedScope,
        "svmName": args.svmName,
        "svmUuid": args.svmUuid,
        "tags": args.tags,
        "tenant": args.tenant,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageNetAppCifsService.
 */
export interface GetStorageNetAppCifsServiceArgs {
    accountMoid?: string;
    activeDirectoryFqdn?: string;
    adOrganizationalUnit?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetStorageNetAppCifsServiceAncestor[];
    classId?: string;
    comment?: string;
    createTime?: string;
    domainGroupMoid?: string;
    enabled?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetStorageNetAppCifsServiceParent;
    permissionResources?: inputs.GetStorageNetAppCifsServicePermissionResource[];
    serverName?: string;
    sharedScope?: string;
    svmName?: string;
    svmUuid?: string;
    tags?: inputs.GetStorageNetAppCifsServiceTag[];
    tenant?: inputs.GetStorageNetAppCifsServiceTenant;
    versionContext?: inputs.GetStorageNetAppCifsServiceVersionContext;
}

/**
 * A collection of values returned by getStorageNetAppCifsService.
 */
export interface GetStorageNetAppCifsServiceResult {
    readonly accountMoid?: string;
    readonly activeDirectoryFqdn?: string;
    readonly adOrganizationalUnit?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetStorageNetAppCifsServiceAncestor[];
    readonly classId?: string;
    readonly comment?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly enabled?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetStorageNetAppCifsServiceParent;
    readonly permissionResources?: outputs.GetStorageNetAppCifsServicePermissionResource[];
    readonly results: outputs.GetStorageNetAppCifsServiceResult[];
    readonly serverName?: string;
    readonly sharedScope?: string;
    readonly svmName?: string;
    readonly svmUuid?: string;
    readonly tags?: outputs.GetStorageNetAppCifsServiceTag[];
    readonly tenant?: outputs.GetStorageNetAppCifsServiceTenant;
    readonly versionContext?: outputs.GetStorageNetAppCifsServiceVersionContext;
}
export function getStorageNetAppCifsServiceOutput(args?: GetStorageNetAppCifsServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageNetAppCifsServiceResult> {
    return pulumi.output(args).apply((a: any) => getStorageNetAppCifsService(a, opts))
}

/**
 * A collection of arguments for invoking getStorageNetAppCifsService.
 */
export interface GetStorageNetAppCifsServiceOutputArgs {
    accountMoid?: pulumi.Input<string>;
    activeDirectoryFqdn?: pulumi.Input<string>;
    adOrganizationalUnit?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppCifsServiceAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    enabled?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetStorageNetAppCifsServiceParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppCifsServicePermissionResourceArgs>[]>;
    serverName?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    svmName?: pulumi.Input<string>;
    svmUuid?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppCifsServiceTagArgs>[]>;
    tenant?: pulumi.Input<inputs.GetStorageNetAppCifsServiceTenantArgs>;
    versionContext?: pulumi.Input<inputs.GetStorageNetAppCifsServiceVersionContextArgs>;
}
