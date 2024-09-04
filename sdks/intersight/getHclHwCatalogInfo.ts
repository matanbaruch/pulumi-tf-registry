// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHclHwCatalogInfo(args?: GetHclHwCatalogInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetHclHwCatalogInfoResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getHclHwCatalogInfo:getHclHwCatalogInfo", {
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
        "serverHwCatalogInfos": args.serverHwCatalogInfos,
        "serverModel": args.serverModel,
        "serverType": args.serverType,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHclHwCatalogInfo.
 */
export interface GetHclHwCatalogInfoArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetHclHwCatalogInfoAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetHclHwCatalogInfoParent;
    permissionResources?: inputs.GetHclHwCatalogInfoPermissionResource[];
    serverHwCatalogInfos?: inputs.GetHclHwCatalogInfoServerHwCatalogInfo[];
    serverModel?: string;
    serverType?: string;
    sharedScope?: string;
    tags?: inputs.GetHclHwCatalogInfoTag[];
    versionContext?: inputs.GetHclHwCatalogInfoVersionContext;
}

/**
 * A collection of values returned by getHclHwCatalogInfo.
 */
export interface GetHclHwCatalogInfoResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetHclHwCatalogInfoAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetHclHwCatalogInfoParent;
    readonly permissionResources?: outputs.GetHclHwCatalogInfoPermissionResource[];
    readonly results: outputs.GetHclHwCatalogInfoResult[];
    readonly serverHwCatalogInfos?: outputs.GetHclHwCatalogInfoServerHwCatalogInfo[];
    readonly serverModel?: string;
    readonly serverType?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetHclHwCatalogInfoTag[];
    readonly versionContext?: outputs.GetHclHwCatalogInfoVersionContext;
}
export function getHclHwCatalogInfoOutput(args?: GetHclHwCatalogInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHclHwCatalogInfoResult> {
    return pulumi.output(args).apply((a: any) => getHclHwCatalogInfo(a, opts))
}

/**
 * A collection of arguments for invoking getHclHwCatalogInfo.
 */
export interface GetHclHwCatalogInfoOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetHclHwCatalogInfoAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetHclHwCatalogInfoParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetHclHwCatalogInfoPermissionResourceArgs>[]>;
    serverHwCatalogInfos?: pulumi.Input<pulumi.Input<inputs.GetHclHwCatalogInfoServerHwCatalogInfoArgs>[]>;
    serverModel?: pulumi.Input<string>;
    serverType?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetHclHwCatalogInfoTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetHclHwCatalogInfoVersionContextArgs>;
}
