// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVnicIscsiStaticTargetPolicyInventory(args?: GetVnicIscsiStaticTargetPolicyInventoryArgs, opts?: pulumi.InvokeOptions): Promise<GetVnicIscsiStaticTargetPolicyInventoryResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getVnicIscsiStaticTargetPolicyInventory:getVnicIscsiStaticTargetPolicyInventory", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "deviceMoId": args.deviceMoId,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "ipAddress": args.ipAddress,
        "lun": args.lun,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "port": args.port,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "targetMo": args.targetMo,
        "targetName": args.targetName,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVnicIscsiStaticTargetPolicyInventory.
 */
export interface GetVnicIscsiStaticTargetPolicyInventoryArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetVnicIscsiStaticTargetPolicyInventoryAncestor[];
    classId?: string;
    createTime?: string;
    description?: string;
    deviceMoId?: string;
    domainGroupMoid?: string;
    id?: string;
    ipAddress?: string;
    lun?: inputs.GetVnicIscsiStaticTargetPolicyInventoryLun;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetVnicIscsiStaticTargetPolicyInventoryParent;
    permissionResources?: inputs.GetVnicIscsiStaticTargetPolicyInventoryPermissionResource[];
    port?: number;
    sharedScope?: string;
    tags?: inputs.GetVnicIscsiStaticTargetPolicyInventoryTag[];
    targetMo?: inputs.GetVnicIscsiStaticTargetPolicyInventoryTargetMo;
    targetName?: string;
    versionContext?: inputs.GetVnicIscsiStaticTargetPolicyInventoryVersionContext;
}

/**
 * A collection of values returned by getVnicIscsiStaticTargetPolicyInventory.
 */
export interface GetVnicIscsiStaticTargetPolicyInventoryResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetVnicIscsiStaticTargetPolicyInventoryAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly deviceMoId?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly ipAddress?: string;
    readonly lun?: outputs.GetVnicIscsiStaticTargetPolicyInventoryLun;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetVnicIscsiStaticTargetPolicyInventoryParent;
    readonly permissionResources?: outputs.GetVnicIscsiStaticTargetPolicyInventoryPermissionResource[];
    readonly port?: number;
    readonly results: outputs.GetVnicIscsiStaticTargetPolicyInventoryResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetVnicIscsiStaticTargetPolicyInventoryTag[];
    readonly targetMo?: outputs.GetVnicIscsiStaticTargetPolicyInventoryTargetMo;
    readonly targetName?: string;
    readonly versionContext?: outputs.GetVnicIscsiStaticTargetPolicyInventoryVersionContext;
}
export function getVnicIscsiStaticTargetPolicyInventoryOutput(args?: GetVnicIscsiStaticTargetPolicyInventoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVnicIscsiStaticTargetPolicyInventoryResult> {
    return pulumi.output(args).apply((a: any) => getVnicIscsiStaticTargetPolicyInventory(a, opts))
}

/**
 * A collection of arguments for invoking getVnicIscsiStaticTargetPolicyInventory.
 */
export interface GetVnicIscsiStaticTargetPolicyInventoryOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetVnicIscsiStaticTargetPolicyInventoryAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ipAddress?: pulumi.Input<string>;
    lun?: pulumi.Input<inputs.GetVnicIscsiStaticTargetPolicyInventoryLunArgs>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetVnicIscsiStaticTargetPolicyInventoryParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetVnicIscsiStaticTargetPolicyInventoryPermissionResourceArgs>[]>;
    port?: pulumi.Input<number>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetVnicIscsiStaticTargetPolicyInventoryTagArgs>[]>;
    targetMo?: pulumi.Input<inputs.GetVnicIscsiStaticTargetPolicyInventoryTargetMoArgs>;
    targetName?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetVnicIscsiStaticTargetPolicyInventoryVersionContextArgs>;
}
