// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVirtualMachine(args?: GetVirtualMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vsphere:index/getVirtualMachine:getVirtualMachine", {
        "alternateGuestName": args.alternateGuestName,
        "annotation": args.annotation,
        "bootDelay": args.bootDelay,
        "bootRetryDelay": args.bootRetryDelay,
        "bootRetryEnabled": args.bootRetryEnabled,
        "cpuHotAddEnabled": args.cpuHotAddEnabled,
        "cpuHotRemoveEnabled": args.cpuHotRemoveEnabled,
        "cpuLimit": args.cpuLimit,
        "cpuPerformanceCountersEnabled": args.cpuPerformanceCountersEnabled,
        "cpuReservation": args.cpuReservation,
        "cpuShareCount": args.cpuShareCount,
        "cpuShareLevel": args.cpuShareLevel,
        "datacenterId": args.datacenterId,
        "efiSecureBootEnabled": args.efiSecureBootEnabled,
        "enableDiskUuid": args.enableDiskUuid,
        "enableLogging": args.enableLogging,
        "eptRviMode": args.eptRviMode,
        "extraConfig": args.extraConfig,
        "extraConfigRebootRequired": args.extraConfigRebootRequired,
        "firmware": args.firmware,
        "folder": args.folder,
        "guestId": args.guestId,
        "hardwareVersion": args.hardwareVersion,
        "hvMode": args.hvMode,
        "id": args.id,
        "ideControllerScanCount": args.ideControllerScanCount,
        "latencySensitivity": args.latencySensitivity,
        "memory": args.memory,
        "memoryHotAddEnabled": args.memoryHotAddEnabled,
        "memoryLimit": args.memoryLimit,
        "memoryReservation": args.memoryReservation,
        "memoryReservationLockedToMax": args.memoryReservationLockedToMax,
        "memoryShareCount": args.memoryShareCount,
        "memoryShareLevel": args.memoryShareLevel,
        "moid": args.moid,
        "name": args.name,
        "nestedHvEnabled": args.nestedHvEnabled,
        "numCoresPerSocket": args.numCoresPerSocket,
        "numCpus": args.numCpus,
        "replaceTrigger": args.replaceTrigger,
        "runToolsScriptsAfterPowerOn": args.runToolsScriptsAfterPowerOn,
        "runToolsScriptsAfterResume": args.runToolsScriptsAfterResume,
        "runToolsScriptsBeforeGuestReboot": args.runToolsScriptsBeforeGuestReboot,
        "runToolsScriptsBeforeGuestShutdown": args.runToolsScriptsBeforeGuestShutdown,
        "runToolsScriptsBeforeGuestStandby": args.runToolsScriptsBeforeGuestStandby,
        "sataControllerScanCount": args.sataControllerScanCount,
        "scsiControllerScanCount": args.scsiControllerScanCount,
        "storagePolicyId": args.storagePolicyId,
        "swapPlacementPolicy": args.swapPlacementPolicy,
        "syncTimeWithHost": args.syncTimeWithHost,
        "syncTimeWithHostPeriodically": args.syncTimeWithHostPeriodically,
        "toolsUpgradePolicy": args.toolsUpgradePolicy,
        "uuid": args.uuid,
        "vapp": args.vapp,
        "vbsEnabled": args.vbsEnabled,
        "vvtdEnabled": args.vvtdEnabled,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVirtualMachine.
 */
export interface GetVirtualMachineArgs {
    alternateGuestName?: string;
    annotation?: string;
    bootDelay?: number;
    bootRetryDelay?: number;
    bootRetryEnabled?: boolean;
    cpuHotAddEnabled?: boolean;
    cpuHotRemoveEnabled?: boolean;
    cpuLimit?: number;
    cpuPerformanceCountersEnabled?: boolean;
    cpuReservation?: number;
    cpuShareCount?: number;
    cpuShareLevel?: string;
    datacenterId?: string;
    efiSecureBootEnabled?: boolean;
    enableDiskUuid?: boolean;
    enableLogging?: boolean;
    eptRviMode?: string;
    extraConfig?: {[key: string]: string};
    extraConfigRebootRequired?: boolean;
    firmware?: string;
    folder?: string;
    guestId?: string;
    hardwareVersion?: number;
    hvMode?: string;
    id?: string;
    ideControllerScanCount?: number;
    latencySensitivity?: string;
    memory?: number;
    memoryHotAddEnabled?: boolean;
    memoryLimit?: number;
    memoryReservation?: number;
    memoryReservationLockedToMax?: boolean;
    memoryShareCount?: number;
    memoryShareLevel?: string;
    moid?: string;
    name?: string;
    nestedHvEnabled?: boolean;
    numCoresPerSocket?: number;
    numCpus?: number;
    replaceTrigger?: string;
    runToolsScriptsAfterPowerOn?: boolean;
    runToolsScriptsAfterResume?: boolean;
    runToolsScriptsBeforeGuestReboot?: boolean;
    runToolsScriptsBeforeGuestShutdown?: boolean;
    runToolsScriptsBeforeGuestStandby?: boolean;
    sataControllerScanCount?: number;
    scsiControllerScanCount?: number;
    storagePolicyId?: string;
    swapPlacementPolicy?: string;
    syncTimeWithHost?: boolean;
    syncTimeWithHostPeriodically?: boolean;
    toolsUpgradePolicy?: string;
    uuid?: string;
    vapp?: inputs.GetVirtualMachineVapp;
    vbsEnabled?: boolean;
    vvtdEnabled?: boolean;
}

/**
 * A collection of values returned by getVirtualMachine.
 */
export interface GetVirtualMachineResult {
    readonly alternateGuestName?: string;
    readonly annotation: string;
    readonly bootDelay?: number;
    readonly bootRetryDelay?: number;
    readonly bootRetryEnabled?: boolean;
    readonly changeVersion: string;
    readonly cpuHotAddEnabled?: boolean;
    readonly cpuHotRemoveEnabled?: boolean;
    readonly cpuLimit?: number;
    readonly cpuPerformanceCountersEnabled?: boolean;
    readonly cpuReservation?: number;
    readonly cpuShareCount: number;
    readonly cpuShareLevel?: string;
    readonly datacenterId?: string;
    readonly defaultIpAddress: string;
    readonly disks: outputs.GetVirtualMachineDisk[];
    readonly efiSecureBootEnabled?: boolean;
    readonly enableDiskUuid?: boolean;
    readonly enableLogging?: boolean;
    readonly eptRviMode: string;
    readonly extraConfig?: {[key: string]: string};
    readonly extraConfigRebootRequired?: boolean;
    readonly firmware?: string;
    readonly folder?: string;
    readonly guestId: string;
    readonly guestIpAddresses: string[];
    readonly hardwareVersion: number;
    readonly hvMode: string;
    readonly id: string;
    readonly ideControllerScanCount?: number;
    readonly instanceUuid: string;
    readonly latencySensitivity?: string;
    readonly memory?: number;
    readonly memoryHotAddEnabled?: boolean;
    readonly memoryLimit?: number;
    readonly memoryReservation?: number;
    readonly memoryReservationLockedToMax?: boolean;
    readonly memoryShareCount: number;
    readonly memoryShareLevel?: string;
    readonly moid: string;
    readonly name?: string;
    readonly nestedHvEnabled?: boolean;
    readonly networkInterfaceTypes: string[];
    readonly networkInterfaces: outputs.GetVirtualMachineNetworkInterface[];
    readonly numCoresPerSocket?: number;
    readonly numCpus?: number;
    readonly replaceTrigger?: string;
    readonly runToolsScriptsAfterPowerOn?: boolean;
    readonly runToolsScriptsAfterResume?: boolean;
    readonly runToolsScriptsBeforeGuestReboot?: boolean;
    readonly runToolsScriptsBeforeGuestShutdown?: boolean;
    readonly runToolsScriptsBeforeGuestStandby?: boolean;
    readonly sataControllerScanCount?: number;
    readonly scsiBusSharing: string;
    readonly scsiControllerScanCount?: number;
    readonly scsiType: string;
    readonly storagePolicyId: string;
    readonly swapPlacementPolicy?: string;
    readonly syncTimeWithHost?: boolean;
    readonly syncTimeWithHostPeriodically?: boolean;
    readonly toolsUpgradePolicy?: string;
    readonly uuid: string;
    readonly vapp?: outputs.GetVirtualMachineVapp;
    readonly vappTransports: string[];
    readonly vbsEnabled?: boolean;
    readonly vvtdEnabled?: boolean;
}
export function getVirtualMachineOutput(args?: GetVirtualMachineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineResult> {
    return pulumi.output(args).apply((a: any) => getVirtualMachine(a, opts))
}

/**
 * A collection of arguments for invoking getVirtualMachine.
 */
export interface GetVirtualMachineOutputArgs {
    alternateGuestName?: pulumi.Input<string>;
    annotation?: pulumi.Input<string>;
    bootDelay?: pulumi.Input<number>;
    bootRetryDelay?: pulumi.Input<number>;
    bootRetryEnabled?: pulumi.Input<boolean>;
    cpuHotAddEnabled?: pulumi.Input<boolean>;
    cpuHotRemoveEnabled?: pulumi.Input<boolean>;
    cpuLimit?: pulumi.Input<number>;
    cpuPerformanceCountersEnabled?: pulumi.Input<boolean>;
    cpuReservation?: pulumi.Input<number>;
    cpuShareCount?: pulumi.Input<number>;
    cpuShareLevel?: pulumi.Input<string>;
    datacenterId?: pulumi.Input<string>;
    efiSecureBootEnabled?: pulumi.Input<boolean>;
    enableDiskUuid?: pulumi.Input<boolean>;
    enableLogging?: pulumi.Input<boolean>;
    eptRviMode?: pulumi.Input<string>;
    extraConfig?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    extraConfigRebootRequired?: pulumi.Input<boolean>;
    firmware?: pulumi.Input<string>;
    folder?: pulumi.Input<string>;
    guestId?: pulumi.Input<string>;
    hardwareVersion?: pulumi.Input<number>;
    hvMode?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ideControllerScanCount?: pulumi.Input<number>;
    latencySensitivity?: pulumi.Input<string>;
    memory?: pulumi.Input<number>;
    memoryHotAddEnabled?: pulumi.Input<boolean>;
    memoryLimit?: pulumi.Input<number>;
    memoryReservation?: pulumi.Input<number>;
    memoryReservationLockedToMax?: pulumi.Input<boolean>;
    memoryShareCount?: pulumi.Input<number>;
    memoryShareLevel?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nestedHvEnabled?: pulumi.Input<boolean>;
    numCoresPerSocket?: pulumi.Input<number>;
    numCpus?: pulumi.Input<number>;
    replaceTrigger?: pulumi.Input<string>;
    runToolsScriptsAfterPowerOn?: pulumi.Input<boolean>;
    runToolsScriptsAfterResume?: pulumi.Input<boolean>;
    runToolsScriptsBeforeGuestReboot?: pulumi.Input<boolean>;
    runToolsScriptsBeforeGuestShutdown?: pulumi.Input<boolean>;
    runToolsScriptsBeforeGuestStandby?: pulumi.Input<boolean>;
    sataControllerScanCount?: pulumi.Input<number>;
    scsiControllerScanCount?: pulumi.Input<number>;
    storagePolicyId?: pulumi.Input<string>;
    swapPlacementPolicy?: pulumi.Input<string>;
    syncTimeWithHost?: pulumi.Input<boolean>;
    syncTimeWithHostPeriodically?: pulumi.Input<boolean>;
    toolsUpgradePolicy?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    vapp?: pulumi.Input<inputs.GetVirtualMachineVappArgs>;
    vbsEnabled?: pulumi.Input<boolean>;
    vvtdEnabled?: pulumi.Input<boolean>;
}
