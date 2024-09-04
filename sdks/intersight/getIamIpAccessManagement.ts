// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIamIpAccessManagement(args?: GetIamIpAccessManagementArgs, opts?: pulumi.InvokeOptions): Promise<GetIamIpAccessManagementResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getIamIpAccessManagement:getIamIpAccessManagement", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "enable": args.enable,
        "holder": args.holder,
        "id": args.id,
        "ipAddresses": args.ipAddresses,
        "lastRecoveryTime": args.lastRecoveryTime,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamIpAccessManagement.
 */
export interface GetIamIpAccessManagementArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetIamIpAccessManagementAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    enable?: boolean;
    holder?: inputs.GetIamIpAccessManagementHolder;
    id?: string;
    ipAddresses?: inputs.GetIamIpAccessManagementIpAddress[];
    lastRecoveryTime?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetIamIpAccessManagementParent;
    permissionResources?: inputs.GetIamIpAccessManagementPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetIamIpAccessManagementTag[];
    versionContext?: inputs.GetIamIpAccessManagementVersionContext;
}

/**
 * A collection of values returned by getIamIpAccessManagement.
 */
export interface GetIamIpAccessManagementResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetIamIpAccessManagementAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly enable?: boolean;
    readonly holder?: outputs.GetIamIpAccessManagementHolder;
    readonly id: string;
    readonly ipAddresses?: outputs.GetIamIpAccessManagementIpAddress[];
    readonly lastRecoveryTime?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetIamIpAccessManagementParent;
    readonly permissionResources?: outputs.GetIamIpAccessManagementPermissionResource[];
    readonly results: outputs.GetIamIpAccessManagementResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetIamIpAccessManagementTag[];
    readonly versionContext?: outputs.GetIamIpAccessManagementVersionContext;
}
export function getIamIpAccessManagementOutput(args?: GetIamIpAccessManagementOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamIpAccessManagementResult> {
    return pulumi.output(args).apply((a: any) => getIamIpAccessManagement(a, opts))
}

/**
 * A collection of arguments for invoking getIamIpAccessManagement.
 */
export interface GetIamIpAccessManagementOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetIamIpAccessManagementAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    enable?: pulumi.Input<boolean>;
    holder?: pulumi.Input<inputs.GetIamIpAccessManagementHolderArgs>;
    id?: pulumi.Input<string>;
    ipAddresses?: pulumi.Input<pulumi.Input<inputs.GetIamIpAccessManagementIpAddressArgs>[]>;
    lastRecoveryTime?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetIamIpAccessManagementParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetIamIpAccessManagementPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetIamIpAccessManagementTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetIamIpAccessManagementVersionContextArgs>;
}
