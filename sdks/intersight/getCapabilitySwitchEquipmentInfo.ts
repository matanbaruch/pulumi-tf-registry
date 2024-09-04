// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCapabilitySwitchEquipmentInfo(args?: GetCapabilitySwitchEquipmentInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetCapabilitySwitchEquipmentInfoResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getCapabilitySwitchEquipmentInfo:getCapabilitySwitchEquipmentInfo", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "maxFanModules": args.maxFanModules,
        "maxFansInFanModule": args.maxFansInFanModule,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "pid": args.pid,
        "sharedScope": args.sharedScope,
        "sku": args.sku,
        "tags": args.tags,
        "versionContext": args.versionContext,
        "vid": args.vid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCapabilitySwitchEquipmentInfo.
 */
export interface GetCapabilitySwitchEquipmentInfoArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetCapabilitySwitchEquipmentInfoAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    maxFanModules?: number;
    maxFansInFanModule?: number;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetCapabilitySwitchEquipmentInfoParent;
    permissionResources?: inputs.GetCapabilitySwitchEquipmentInfoPermissionResource[];
    pid?: string;
    sharedScope?: string;
    sku?: string;
    tags?: inputs.GetCapabilitySwitchEquipmentInfoTag[];
    versionContext?: inputs.GetCapabilitySwitchEquipmentInfoVersionContext;
    vid?: string;
}

/**
 * A collection of values returned by getCapabilitySwitchEquipmentInfo.
 */
export interface GetCapabilitySwitchEquipmentInfoResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetCapabilitySwitchEquipmentInfoAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly maxFanModules?: number;
    readonly maxFansInFanModule?: number;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetCapabilitySwitchEquipmentInfoParent;
    readonly permissionResources?: outputs.GetCapabilitySwitchEquipmentInfoPermissionResource[];
    readonly pid?: string;
    readonly results: outputs.GetCapabilitySwitchEquipmentInfoResult[];
    readonly sharedScope?: string;
    readonly sku?: string;
    readonly tags?: outputs.GetCapabilitySwitchEquipmentInfoTag[];
    readonly versionContext?: outputs.GetCapabilitySwitchEquipmentInfoVersionContext;
    readonly vid?: string;
}
export function getCapabilitySwitchEquipmentInfoOutput(args?: GetCapabilitySwitchEquipmentInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCapabilitySwitchEquipmentInfoResult> {
    return pulumi.output(args).apply((a: any) => getCapabilitySwitchEquipmentInfo(a, opts))
}

/**
 * A collection of arguments for invoking getCapabilitySwitchEquipmentInfo.
 */
export interface GetCapabilitySwitchEquipmentInfoOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetCapabilitySwitchEquipmentInfoAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    maxFanModules?: pulumi.Input<number>;
    maxFansInFanModule?: pulumi.Input<number>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetCapabilitySwitchEquipmentInfoParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetCapabilitySwitchEquipmentInfoPermissionResourceArgs>[]>;
    pid?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    sku?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetCapabilitySwitchEquipmentInfoTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetCapabilitySwitchEquipmentInfoVersionContextArgs>;
    vid?: pulumi.Input<string>;
}
