// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVnicEthVnicInventory(args?: GetVnicEthVnicInventoryArgs, opts?: pulumi.InvokeOptions): Promise<GetVnicEthVnicInventoryResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getVnicEthVnicInventory:getVnicEthVnicInventory", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "cos": args.cos,
        "createTime": args.createTime,
        "deviceMoId": args.deviceMoId,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "mtu": args.mtu,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "targetMo": args.targetMo,
        "trustHostCos": args.trustHostCos,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVnicEthVnicInventory.
 */
export interface GetVnicEthVnicInventoryArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetVnicEthVnicInventoryAncestor[];
    classId?: string;
    cos?: number;
    createTime?: string;
    deviceMoId?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    mtu?: number;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetVnicEthVnicInventoryParent;
    permissionResources?: inputs.GetVnicEthVnicInventoryPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetVnicEthVnicInventoryTag[];
    targetMo?: inputs.GetVnicEthVnicInventoryTargetMo;
    trustHostCos?: boolean;
    versionContext?: inputs.GetVnicEthVnicInventoryVersionContext;
}

/**
 * A collection of values returned by getVnicEthVnicInventory.
 */
export interface GetVnicEthVnicInventoryResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetVnicEthVnicInventoryAncestor[];
    readonly classId?: string;
    readonly cos?: number;
    readonly createTime?: string;
    readonly deviceMoId?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly mtu?: number;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetVnicEthVnicInventoryParent;
    readonly permissionResources?: outputs.GetVnicEthVnicInventoryPermissionResource[];
    readonly results: outputs.GetVnicEthVnicInventoryResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetVnicEthVnicInventoryTag[];
    readonly targetMo?: outputs.GetVnicEthVnicInventoryTargetMo;
    readonly trustHostCos?: boolean;
    readonly versionContext?: outputs.GetVnicEthVnicInventoryVersionContext;
}
export function getVnicEthVnicInventoryOutput(args?: GetVnicEthVnicInventoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVnicEthVnicInventoryResult> {
    return pulumi.output(args).apply((a: any) => getVnicEthVnicInventory(a, opts))
}

/**
 * A collection of arguments for invoking getVnicEthVnicInventory.
 */
export interface GetVnicEthVnicInventoryOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetVnicEthVnicInventoryAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    cos?: pulumi.Input<number>;
    createTime?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    mtu?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetVnicEthVnicInventoryParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetVnicEthVnicInventoryPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetVnicEthVnicInventoryTagArgs>[]>;
    targetMo?: pulumi.Input<inputs.GetVnicEthVnicInventoryTargetMoArgs>;
    trustHostCos?: pulumi.Input<boolean>;
    versionContext?: pulumi.Input<inputs.GetVnicEthVnicInventoryVersionContextArgs>;
}
