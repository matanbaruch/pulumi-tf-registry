// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEquipmentSharedIoModule(args?: GetEquipmentSharedIoModuleArgs, opts?: pulumi.InvokeOptions): Promise<GetEquipmentSharedIoModuleResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getEquipmentSharedIoModule:getEquipmentSharedIoModule", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "configState": args.configState,
        "controller": args.controller,
        "createTime": args.createTime,
        "deviceMoId": args.deviceMoId,
        "discovery": args.discovery,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "equipmentSystemIoController": args.equipmentSystemIoController,
        "id": args.id,
        "inventoryDeviceInfo": args.inventoryDeviceInfo,
        "isUpgraded": args.isUpgraded,
        "macOfSharedIomAside": args.macOfSharedIomAside,
        "macOfSharedIomBside": args.macOfSharedIomBside,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "objectType": args.objectType,
        "operState": args.operState,
        "owners": args.owners,
        "parent": args.parent,
        "partNumber": args.partNumber,
        "permissionResources": args.permissionResources,
        "portGroups": args.portGroups,
        "presence": args.presence,
        "previousFru": args.previousFru,
        "reachability": args.reachability,
        "registeredDevice": args.registeredDevice,
        "revision": args.revision,
        "rn": args.rn,
        "serial": args.serial,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "usrLbl": args.usrLbl,
        "vendor": args.vendor,
        "versionContext": args.versionContext,
        "vid": args.vid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEquipmentSharedIoModule.
 */
export interface GetEquipmentSharedIoModuleArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetEquipmentSharedIoModuleAncestor[];
    classId?: string;
    configState?: string;
    controller?: inputs.GetEquipmentSharedIoModuleController;
    createTime?: string;
    deviceMoId?: string;
    discovery?: string;
    dn?: string;
    domainGroupMoid?: string;
    equipmentSystemIoController?: inputs.GetEquipmentSharedIoModuleEquipmentSystemIoController;
    id?: string;
    inventoryDeviceInfo?: inputs.GetEquipmentSharedIoModuleInventoryDeviceInfo;
    isUpgraded?: boolean;
    macOfSharedIomAside?: string;
    macOfSharedIomBside?: string;
    modTime?: string;
    model?: string;
    moid?: string;
    objectType?: string;
    operState?: string;
    owners?: string[];
    parent?: inputs.GetEquipmentSharedIoModuleParent;
    partNumber?: string;
    permissionResources?: inputs.GetEquipmentSharedIoModulePermissionResource[];
    portGroups?: inputs.GetEquipmentSharedIoModulePortGroup[];
    presence?: string;
    previousFru?: inputs.GetEquipmentSharedIoModulePreviousFru;
    reachability?: string;
    registeredDevice?: inputs.GetEquipmentSharedIoModuleRegisteredDevice;
    revision?: string;
    rn?: string;
    serial?: string;
    sharedScope?: string;
    tags?: inputs.GetEquipmentSharedIoModuleTag[];
    usrLbl?: string;
    vendor?: string;
    versionContext?: inputs.GetEquipmentSharedIoModuleVersionContext;
    vid?: string;
}

/**
 * A collection of values returned by getEquipmentSharedIoModule.
 */
export interface GetEquipmentSharedIoModuleResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetEquipmentSharedIoModuleAncestor[];
    readonly classId?: string;
    readonly configState?: string;
    readonly controller?: outputs.GetEquipmentSharedIoModuleController;
    readonly createTime?: string;
    readonly deviceMoId?: string;
    readonly discovery?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly equipmentSystemIoController?: outputs.GetEquipmentSharedIoModuleEquipmentSystemIoController;
    readonly id: string;
    readonly inventoryDeviceInfo?: outputs.GetEquipmentSharedIoModuleInventoryDeviceInfo;
    readonly isUpgraded?: boolean;
    readonly macOfSharedIomAside?: string;
    readonly macOfSharedIomBside?: string;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly operState?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetEquipmentSharedIoModuleParent;
    readonly partNumber?: string;
    readonly permissionResources?: outputs.GetEquipmentSharedIoModulePermissionResource[];
    readonly portGroups?: outputs.GetEquipmentSharedIoModulePortGroup[];
    readonly presence?: string;
    readonly previousFru?: outputs.GetEquipmentSharedIoModulePreviousFru;
    readonly reachability?: string;
    readonly registeredDevice?: outputs.GetEquipmentSharedIoModuleRegisteredDevice;
    readonly results: outputs.GetEquipmentSharedIoModuleResult[];
    readonly revision?: string;
    readonly rn?: string;
    readonly serial?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetEquipmentSharedIoModuleTag[];
    readonly usrLbl?: string;
    readonly vendor?: string;
    readonly versionContext?: outputs.GetEquipmentSharedIoModuleVersionContext;
    readonly vid?: string;
}
export function getEquipmentSharedIoModuleOutput(args?: GetEquipmentSharedIoModuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEquipmentSharedIoModuleResult> {
    return pulumi.output(args).apply((a: any) => getEquipmentSharedIoModule(a, opts))
}

/**
 * A collection of arguments for invoking getEquipmentSharedIoModule.
 */
export interface GetEquipmentSharedIoModuleOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetEquipmentSharedIoModuleAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    configState?: pulumi.Input<string>;
    controller?: pulumi.Input<inputs.GetEquipmentSharedIoModuleControllerArgs>;
    createTime?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    discovery?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    equipmentSystemIoController?: pulumi.Input<inputs.GetEquipmentSharedIoModuleEquipmentSystemIoControllerArgs>;
    id?: pulumi.Input<string>;
    inventoryDeviceInfo?: pulumi.Input<inputs.GetEquipmentSharedIoModuleInventoryDeviceInfoArgs>;
    isUpgraded?: pulumi.Input<boolean>;
    macOfSharedIomAside?: pulumi.Input<string>;
    macOfSharedIomBside?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    operState?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetEquipmentSharedIoModuleParentArgs>;
    partNumber?: pulumi.Input<string>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetEquipmentSharedIoModulePermissionResourceArgs>[]>;
    portGroups?: pulumi.Input<pulumi.Input<inputs.GetEquipmentSharedIoModulePortGroupArgs>[]>;
    presence?: pulumi.Input<string>;
    previousFru?: pulumi.Input<inputs.GetEquipmentSharedIoModulePreviousFruArgs>;
    reachability?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetEquipmentSharedIoModuleRegisteredDeviceArgs>;
    revision?: pulumi.Input<string>;
    rn?: pulumi.Input<string>;
    serial?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetEquipmentSharedIoModuleTagArgs>[]>;
    usrLbl?: pulumi.Input<string>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetEquipmentSharedIoModuleVersionContextArgs>;
    vid?: pulumi.Input<string>;
}
