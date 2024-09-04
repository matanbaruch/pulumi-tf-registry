// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageController(args?: GetStorageControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageControllerResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getStorageController:getStorageController", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "backupBatteryUnit": args.backupBatteryUnit,
        "classId": args.classId,
        "computeBlade": args.computeBlade,
        "computeBoard": args.computeBoard,
        "computeRackUnit": args.computeRackUnit,
        "connectedSasExpander": args.connectedSasExpander,
        "controllerFlags": args.controllerFlags,
        "controllerId": args.controllerId,
        "controllerStatus": args.controllerStatus,
        "createTime": args.createTime,
        "defaultDriveMode": args.defaultDriveMode,
        "deviceMoId": args.deviceMoId,
        "diskGroups": args.diskGroups,
        "diskSlots": args.diskSlots,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "eccBucketLeakRate": args.eccBucketLeakRate,
        "foreignConfigPresent": args.foreignConfigPresent,
        "hwRevision": args.hwRevision,
        "hybridSlotsSupported": args.hybridSlotsSupported,
        "id": args.id,
        "interfaceType": args.interfaceType,
        "inventoryDeviceInfo": args.inventoryDeviceInfo,
        "isUpgraded": args.isUpgraded,
        "maxVolumesSupported": args.maxVolumesSupported,
        "memoryCorrectableErrors": args.memoryCorrectableErrors,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "oobInterfaceSupported": args.oobInterfaceSupported,
        "operState": args.operState,
        "operability": args.operability,
        "owners": args.owners,
        "parent": args.parent,
        "pciAddr": args.pciAddr,
        "pciSlot": args.pciSlot,
        "permissionResources": args.permissionResources,
        "persistentCacheSize": args.persistentCacheSize,
        "physicalDiskExtensions": args.physicalDiskExtensions,
        "physicalDisks": args.physicalDisks,
        "pinnedCacheState": args.pinnedCacheState,
        "presence": args.presence,
        "previousFru": args.previousFru,
        "raidSupport": args.raidSupport,
        "rebuildRate": args.rebuildRate,
        "rebuildRatePercent": args.rebuildRatePercent,
        "registeredDevice": args.registeredDevice,
        "revision": args.revision,
        "rn": args.rn,
        "runningFirmwares": args.runningFirmwares,
        "selfEncryptEnabled": args.selfEncryptEnabled,
        "serial": args.serial,
        "sharedScope": args.sharedScope,
        "subOemId": args.subOemId,
        "supportedStripSizes": args.supportedStripSizes,
        "tags": args.tags,
        "totalCacheSize": args.totalCacheSize,
        "type": args.type,
        "vendor": args.vendor,
        "versionContext": args.versionContext,
        "virtualDriveExtensions": args.virtualDriveExtensions,
        "virtualDrives": args.virtualDrives,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageController.
 */
export interface GetStorageControllerArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetStorageControllerAncestor[];
    backupBatteryUnit?: inputs.GetStorageControllerBackupBatteryUnit;
    classId?: string;
    computeBlade?: inputs.GetStorageControllerComputeBlade;
    computeBoard?: inputs.GetStorageControllerComputeBoard;
    computeRackUnit?: inputs.GetStorageControllerComputeRackUnit;
    connectedSasExpander?: boolean;
    controllerFlags?: string;
    controllerId?: string;
    controllerStatus?: string;
    createTime?: string;
    defaultDriveMode?: string;
    deviceMoId?: string;
    diskGroups?: inputs.GetStorageControllerDiskGroup[];
    diskSlots?: inputs.GetStorageControllerDiskSlot[];
    dn?: string;
    domainGroupMoid?: string;
    eccBucketLeakRate?: number;
    foreignConfigPresent?: boolean;
    hwRevision?: string;
    hybridSlotsSupported?: string;
    id?: string;
    interfaceType?: string;
    inventoryDeviceInfo?: inputs.GetStorageControllerInventoryDeviceInfo;
    isUpgraded?: boolean;
    maxVolumesSupported?: number;
    memoryCorrectableErrors?: number;
    modTime?: string;
    model?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    oobInterfaceSupported?: string;
    operState?: string;
    operability?: string;
    owners?: string[];
    parent?: inputs.GetStorageControllerParent;
    pciAddr?: string;
    pciSlot?: string;
    permissionResources?: inputs.GetStorageControllerPermissionResource[];
    persistentCacheSize?: number;
    physicalDiskExtensions?: inputs.GetStorageControllerPhysicalDiskExtension[];
    physicalDisks?: inputs.GetStorageControllerPhysicalDisk[];
    pinnedCacheState?: number;
    presence?: string;
    previousFru?: inputs.GetStorageControllerPreviousFru;
    raidSupport?: string;
    rebuildRate?: string;
    rebuildRatePercent?: number;
    registeredDevice?: inputs.GetStorageControllerRegisteredDevice;
    revision?: string;
    rn?: string;
    runningFirmwares?: inputs.GetStorageControllerRunningFirmware[];
    selfEncryptEnabled?: string;
    serial?: string;
    sharedScope?: string;
    subOemId?: string;
    supportedStripSizes?: string;
    tags?: inputs.GetStorageControllerTag[];
    totalCacheSize?: number;
    type?: string;
    vendor?: string;
    versionContext?: inputs.GetStorageControllerVersionContext;
    virtualDriveExtensions?: inputs.GetStorageControllerVirtualDriveExtension[];
    virtualDrives?: inputs.GetStorageControllerVirtualDrife[];
}

/**
 * A collection of values returned by getStorageController.
 */
export interface GetStorageControllerResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetStorageControllerAncestor[];
    readonly backupBatteryUnit?: outputs.GetStorageControllerBackupBatteryUnit;
    readonly classId?: string;
    readonly computeBlade?: outputs.GetStorageControllerComputeBlade;
    readonly computeBoard?: outputs.GetStorageControllerComputeBoard;
    readonly computeRackUnit?: outputs.GetStorageControllerComputeRackUnit;
    readonly connectedSasExpander?: boolean;
    readonly controllerFlags?: string;
    readonly controllerId?: string;
    readonly controllerStatus?: string;
    readonly createTime?: string;
    readonly defaultDriveMode?: string;
    readonly deviceMoId?: string;
    readonly diskGroups?: outputs.GetStorageControllerDiskGroup[];
    readonly diskSlots?: outputs.GetStorageControllerDiskSlot[];
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly eccBucketLeakRate?: number;
    readonly foreignConfigPresent?: boolean;
    readonly hwRevision?: string;
    readonly hybridSlotsSupported?: string;
    readonly id: string;
    readonly interfaceType?: string;
    readonly inventoryDeviceInfo?: outputs.GetStorageControllerInventoryDeviceInfo;
    readonly isUpgraded?: boolean;
    readonly maxVolumesSupported?: number;
    readonly memoryCorrectableErrors?: number;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly oobInterfaceSupported?: string;
    readonly operState?: string;
    readonly operability?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetStorageControllerParent;
    readonly pciAddr?: string;
    readonly pciSlot?: string;
    readonly permissionResources?: outputs.GetStorageControllerPermissionResource[];
    readonly persistentCacheSize?: number;
    readonly physicalDiskExtensions?: outputs.GetStorageControllerPhysicalDiskExtension[];
    readonly physicalDisks?: outputs.GetStorageControllerPhysicalDisk[];
    readonly pinnedCacheState?: number;
    readonly presence?: string;
    readonly previousFru?: outputs.GetStorageControllerPreviousFru;
    readonly raidSupport?: string;
    readonly rebuildRate?: string;
    readonly rebuildRatePercent?: number;
    readonly registeredDevice?: outputs.GetStorageControllerRegisteredDevice;
    readonly results: outputs.GetStorageControllerResult[];
    readonly revision?: string;
    readonly rn?: string;
    readonly runningFirmwares?: outputs.GetStorageControllerRunningFirmware[];
    readonly selfEncryptEnabled?: string;
    readonly serial?: string;
    readonly sharedScope?: string;
    readonly subOemId?: string;
    readonly supportedStripSizes?: string;
    readonly tags?: outputs.GetStorageControllerTag[];
    readonly totalCacheSize?: number;
    readonly type?: string;
    readonly vendor?: string;
    readonly versionContext?: outputs.GetStorageControllerVersionContext;
    readonly virtualDriveExtensions?: outputs.GetStorageControllerVirtualDriveExtension[];
    readonly virtualDrives?: outputs.GetStorageControllerVirtualDrife[];
}
export function getStorageControllerOutput(args?: GetStorageControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageControllerResult> {
    return pulumi.output(args).apply((a: any) => getStorageController(a, opts))
}

/**
 * A collection of arguments for invoking getStorageController.
 */
export interface GetStorageControllerOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetStorageControllerAncestorArgs>[]>;
    backupBatteryUnit?: pulumi.Input<inputs.GetStorageControllerBackupBatteryUnitArgs>;
    classId?: pulumi.Input<string>;
    computeBlade?: pulumi.Input<inputs.GetStorageControllerComputeBladeArgs>;
    computeBoard?: pulumi.Input<inputs.GetStorageControllerComputeBoardArgs>;
    computeRackUnit?: pulumi.Input<inputs.GetStorageControllerComputeRackUnitArgs>;
    connectedSasExpander?: pulumi.Input<boolean>;
    controllerFlags?: pulumi.Input<string>;
    controllerId?: pulumi.Input<string>;
    controllerStatus?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    defaultDriveMode?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    diskGroups?: pulumi.Input<pulumi.Input<inputs.GetStorageControllerDiskGroupArgs>[]>;
    diskSlots?: pulumi.Input<pulumi.Input<inputs.GetStorageControllerDiskSlotArgs>[]>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    eccBucketLeakRate?: pulumi.Input<number>;
    foreignConfigPresent?: pulumi.Input<boolean>;
    hwRevision?: pulumi.Input<string>;
    hybridSlotsSupported?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    interfaceType?: pulumi.Input<string>;
    inventoryDeviceInfo?: pulumi.Input<inputs.GetStorageControllerInventoryDeviceInfoArgs>;
    isUpgraded?: pulumi.Input<boolean>;
    maxVolumesSupported?: pulumi.Input<number>;
    memoryCorrectableErrors?: pulumi.Input<number>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    oobInterfaceSupported?: pulumi.Input<string>;
    operState?: pulumi.Input<string>;
    operability?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetStorageControllerParentArgs>;
    pciAddr?: pulumi.Input<string>;
    pciSlot?: pulumi.Input<string>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetStorageControllerPermissionResourceArgs>[]>;
    persistentCacheSize?: pulumi.Input<number>;
    physicalDiskExtensions?: pulumi.Input<pulumi.Input<inputs.GetStorageControllerPhysicalDiskExtensionArgs>[]>;
    physicalDisks?: pulumi.Input<pulumi.Input<inputs.GetStorageControllerPhysicalDiskArgs>[]>;
    pinnedCacheState?: pulumi.Input<number>;
    presence?: pulumi.Input<string>;
    previousFru?: pulumi.Input<inputs.GetStorageControllerPreviousFruArgs>;
    raidSupport?: pulumi.Input<string>;
    rebuildRate?: pulumi.Input<string>;
    rebuildRatePercent?: pulumi.Input<number>;
    registeredDevice?: pulumi.Input<inputs.GetStorageControllerRegisteredDeviceArgs>;
    revision?: pulumi.Input<string>;
    rn?: pulumi.Input<string>;
    runningFirmwares?: pulumi.Input<pulumi.Input<inputs.GetStorageControllerRunningFirmwareArgs>[]>;
    selfEncryptEnabled?: pulumi.Input<string>;
    serial?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    subOemId?: pulumi.Input<string>;
    supportedStripSizes?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetStorageControllerTagArgs>[]>;
    totalCacheSize?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetStorageControllerVersionContextArgs>;
    virtualDriveExtensions?: pulumi.Input<pulumi.Input<inputs.GetStorageControllerVirtualDriveExtensionArgs>[]>;
    virtualDrives?: pulumi.Input<pulumi.Input<inputs.GetStorageControllerVirtualDrifeArgs>[]>;
}
