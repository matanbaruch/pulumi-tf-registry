// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPciSwitch(args?: GetPciSwitchArgs, opts?: pulumi.InvokeOptions): Promise<GetPciSwitchResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getPciSwitch:getPciSwitch", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "computeBoard": args.computeBoard,
        "createTime": args.createTime,
        "deviceId": args.deviceId,
        "deviceMoId": args.deviceMoId,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "health": args.health,
        "id": args.id,
        "inventoryDeviceInfo": args.inventoryDeviceInfo,
        "isUpgraded": args.isUpgraded,
        "links": args.links,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "numOfAdaptors": args.numOfAdaptors,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "pciAddress": args.pciAddress,
        "pciSlot": args.pciSlot,
        "permissionResources": args.permissionResources,
        "presence": args.presence,
        "previousFru": args.previousFru,
        "productName": args.productName,
        "productRevision": args.productRevision,
        "registeredDevice": args.registeredDevice,
        "revision": args.revision,
        "rn": args.rn,
        "runningFirmwares": args.runningFirmwares,
        "serial": args.serial,
        "sharedScope": args.sharedScope,
        "subDeviceId": args.subDeviceId,
        "subVendorId": args.subVendorId,
        "tags": args.tags,
        "temperature": args.temperature,
        "type": args.type,
        "vendor": args.vendor,
        "vendorId": args.vendorId,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPciSwitch.
 */
export interface GetPciSwitchArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetPciSwitchAncestor[];
    classId?: string;
    computeBoard?: inputs.GetPciSwitchComputeBoard;
    createTime?: string;
    deviceId?: string;
    deviceMoId?: string;
    dn?: string;
    domainGroupMoid?: string;
    health?: string;
    id?: string;
    inventoryDeviceInfo?: inputs.GetPciSwitchInventoryDeviceInfo;
    isUpgraded?: boolean;
    links?: inputs.GetPciSwitchLink[];
    modTime?: string;
    model?: string;
    moid?: string;
    numOfAdaptors?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetPciSwitchParent;
    pciAddress?: string;
    pciSlot?: string;
    permissionResources?: inputs.GetPciSwitchPermissionResource[];
    presence?: string;
    previousFru?: inputs.GetPciSwitchPreviousFru;
    productName?: string;
    productRevision?: string;
    registeredDevice?: inputs.GetPciSwitchRegisteredDevice;
    revision?: string;
    rn?: string;
    runningFirmwares?: inputs.GetPciSwitchRunningFirmware[];
    serial?: string;
    sharedScope?: string;
    subDeviceId?: string;
    subVendorId?: string;
    tags?: inputs.GetPciSwitchTag[];
    temperature?: string;
    type?: string;
    vendor?: string;
    vendorId?: string;
    versionContext?: inputs.GetPciSwitchVersionContext;
}

/**
 * A collection of values returned by getPciSwitch.
 */
export interface GetPciSwitchResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetPciSwitchAncestor[];
    readonly classId?: string;
    readonly computeBoard?: outputs.GetPciSwitchComputeBoard;
    readonly createTime?: string;
    readonly deviceId?: string;
    readonly deviceMoId?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly health?: string;
    readonly id: string;
    readonly inventoryDeviceInfo?: outputs.GetPciSwitchInventoryDeviceInfo;
    readonly isUpgraded?: boolean;
    readonly links?: outputs.GetPciSwitchLink[];
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly numOfAdaptors?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetPciSwitchParent;
    readonly pciAddress?: string;
    readonly pciSlot?: string;
    readonly permissionResources?: outputs.GetPciSwitchPermissionResource[];
    readonly presence?: string;
    readonly previousFru?: outputs.GetPciSwitchPreviousFru;
    readonly productName?: string;
    readonly productRevision?: string;
    readonly registeredDevice?: outputs.GetPciSwitchRegisteredDevice;
    readonly results: outputs.GetPciSwitchResult[];
    readonly revision?: string;
    readonly rn?: string;
    readonly runningFirmwares?: outputs.GetPciSwitchRunningFirmware[];
    readonly serial?: string;
    readonly sharedScope?: string;
    readonly subDeviceId?: string;
    readonly subVendorId?: string;
    readonly tags?: outputs.GetPciSwitchTag[];
    readonly temperature?: string;
    readonly type?: string;
    readonly vendor?: string;
    readonly vendorId?: string;
    readonly versionContext?: outputs.GetPciSwitchVersionContext;
}
export function getPciSwitchOutput(args?: GetPciSwitchOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPciSwitchResult> {
    return pulumi.output(args).apply((a: any) => getPciSwitch(a, opts))
}

/**
 * A collection of arguments for invoking getPciSwitch.
 */
export interface GetPciSwitchOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetPciSwitchAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    computeBoard?: pulumi.Input<inputs.GetPciSwitchComputeBoardArgs>;
    createTime?: pulumi.Input<string>;
    deviceId?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    health?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inventoryDeviceInfo?: pulumi.Input<inputs.GetPciSwitchInventoryDeviceInfoArgs>;
    isUpgraded?: pulumi.Input<boolean>;
    links?: pulumi.Input<pulumi.Input<inputs.GetPciSwitchLinkArgs>[]>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    numOfAdaptors?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetPciSwitchParentArgs>;
    pciAddress?: pulumi.Input<string>;
    pciSlot?: pulumi.Input<string>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetPciSwitchPermissionResourceArgs>[]>;
    presence?: pulumi.Input<string>;
    previousFru?: pulumi.Input<inputs.GetPciSwitchPreviousFruArgs>;
    productName?: pulumi.Input<string>;
    productRevision?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetPciSwitchRegisteredDeviceArgs>;
    revision?: pulumi.Input<string>;
    rn?: pulumi.Input<string>;
    runningFirmwares?: pulumi.Input<pulumi.Input<inputs.GetPciSwitchRunningFirmwareArgs>[]>;
    serial?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    subDeviceId?: pulumi.Input<string>;
    subVendorId?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetPciSwitchTagArgs>[]>;
    temperature?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    vendor?: pulumi.Input<string>;
    vendorId?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetPciSwitchVersionContextArgs>;
}
