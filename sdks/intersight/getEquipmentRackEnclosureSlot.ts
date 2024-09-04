// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEquipmentRackEnclosureSlot(args?: GetEquipmentRackEnclosureSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetEquipmentRackEnclosureSlotResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getEquipmentRackEnclosureSlot:getEquipmentRackEnclosureSlot", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "deviceMoId": args.deviceMoId,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "equipmentRackEnclosure": args.equipmentRackEnclosure,
        "id": args.id,
        "inventoryDeviceInfo": args.inventoryDeviceInfo,
        "isUpgraded": args.isUpgraded,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "presence": args.presence,
        "previousFru": args.previousFru,
        "rackId": args.rackId,
        "rackUnit": args.rackUnit,
        "rackUnitDn": args.rackUnitDn,
        "registeredDevice": args.registeredDevice,
        "revision": args.revision,
        "rn": args.rn,
        "serial": args.serial,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "vendor": args.vendor,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEquipmentRackEnclosureSlot.
 */
export interface GetEquipmentRackEnclosureSlotArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetEquipmentRackEnclosureSlotAncestor[];
    classId?: string;
    createTime?: string;
    deviceMoId?: string;
    dn?: string;
    domainGroupMoid?: string;
    equipmentRackEnclosure?: inputs.GetEquipmentRackEnclosureSlotEquipmentRackEnclosure;
    id?: string;
    inventoryDeviceInfo?: inputs.GetEquipmentRackEnclosureSlotInventoryDeviceInfo;
    isUpgraded?: boolean;
    modTime?: string;
    model?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetEquipmentRackEnclosureSlotParent;
    permissionResources?: inputs.GetEquipmentRackEnclosureSlotPermissionResource[];
    presence?: string;
    previousFru?: inputs.GetEquipmentRackEnclosureSlotPreviousFru;
    rackId?: number;
    rackUnit?: inputs.GetEquipmentRackEnclosureSlotRackUnit;
    rackUnitDn?: string;
    registeredDevice?: inputs.GetEquipmentRackEnclosureSlotRegisteredDevice;
    revision?: string;
    rn?: string;
    serial?: string;
    sharedScope?: string;
    tags?: inputs.GetEquipmentRackEnclosureSlotTag[];
    vendor?: string;
    versionContext?: inputs.GetEquipmentRackEnclosureSlotVersionContext;
}

/**
 * A collection of values returned by getEquipmentRackEnclosureSlot.
 */
export interface GetEquipmentRackEnclosureSlotResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetEquipmentRackEnclosureSlotAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly deviceMoId?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly equipmentRackEnclosure?: outputs.GetEquipmentRackEnclosureSlotEquipmentRackEnclosure;
    readonly id: string;
    readonly inventoryDeviceInfo?: outputs.GetEquipmentRackEnclosureSlotInventoryDeviceInfo;
    readonly isUpgraded?: boolean;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetEquipmentRackEnclosureSlotParent;
    readonly permissionResources?: outputs.GetEquipmentRackEnclosureSlotPermissionResource[];
    readonly presence?: string;
    readonly previousFru?: outputs.GetEquipmentRackEnclosureSlotPreviousFru;
    readonly rackId?: number;
    readonly rackUnit?: outputs.GetEquipmentRackEnclosureSlotRackUnit;
    readonly rackUnitDn?: string;
    readonly registeredDevice?: outputs.GetEquipmentRackEnclosureSlotRegisteredDevice;
    readonly results: outputs.GetEquipmentRackEnclosureSlotResult[];
    readonly revision?: string;
    readonly rn?: string;
    readonly serial?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetEquipmentRackEnclosureSlotTag[];
    readonly vendor?: string;
    readonly versionContext?: outputs.GetEquipmentRackEnclosureSlotVersionContext;
}
export function getEquipmentRackEnclosureSlotOutput(args?: GetEquipmentRackEnclosureSlotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEquipmentRackEnclosureSlotResult> {
    return pulumi.output(args).apply((a: any) => getEquipmentRackEnclosureSlot(a, opts))
}

/**
 * A collection of arguments for invoking getEquipmentRackEnclosureSlot.
 */
export interface GetEquipmentRackEnclosureSlotOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetEquipmentRackEnclosureSlotAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    equipmentRackEnclosure?: pulumi.Input<inputs.GetEquipmentRackEnclosureSlotEquipmentRackEnclosureArgs>;
    id?: pulumi.Input<string>;
    inventoryDeviceInfo?: pulumi.Input<inputs.GetEquipmentRackEnclosureSlotInventoryDeviceInfoArgs>;
    isUpgraded?: pulumi.Input<boolean>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetEquipmentRackEnclosureSlotParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetEquipmentRackEnclosureSlotPermissionResourceArgs>[]>;
    presence?: pulumi.Input<string>;
    previousFru?: pulumi.Input<inputs.GetEquipmentRackEnclosureSlotPreviousFruArgs>;
    rackId?: pulumi.Input<number>;
    rackUnit?: pulumi.Input<inputs.GetEquipmentRackEnclosureSlotRackUnitArgs>;
    rackUnitDn?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetEquipmentRackEnclosureSlotRegisteredDeviceArgs>;
    revision?: pulumi.Input<string>;
    rn?: pulumi.Input<string>;
    serial?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetEquipmentRackEnclosureSlotTagArgs>[]>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetEquipmentRackEnclosureSlotVersionContextArgs>;
}
