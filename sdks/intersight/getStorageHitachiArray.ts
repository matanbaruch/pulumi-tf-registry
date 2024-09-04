// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageHitachiArray(args?: GetStorageHitachiArrayArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageHitachiArrayResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getStorageHitachiArray:getStorageHitachiArray", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "ctl1Ip": args.ctl1Ip,
        "ctl1MicroVersion": args.ctl1MicroVersion,
        "ctl2Ip": args.ctl2Ip,
        "ctl2MicroVersion": args.ctl2MicroVersion,
        "deviceId": args.deviceId,
        "deviceLocation": args.deviceLocation,
        "deviceMoId": args.deviceMoId,
        "deviceType": args.deviceType,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "hardwareVersion": args.hardwareVersion,
        "id": args.id,
        "ip": args.ip,
        "isUpgraded": args.isUpgraded,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "name": args.name,
        "nrVersion": args.nrVersion,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "presence": args.presence,
        "previousFru": args.previousFru,
        "registeredDevice": args.registeredDevice,
        "revision": args.revision,
        "rn": args.rn,
        "serial": args.serial,
        "sharedScope": args.sharedScope,
        "storageUtilization": args.storageUtilization,
        "svpIp": args.svpIp,
        "tags": args.tags,
        "targetCtl": args.targetCtl,
        "uuid": args.uuid,
        "vendor": args.vendor,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageHitachiArray.
 */
export interface GetStorageHitachiArrayArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetStorageHitachiArrayAncestor[];
    classId?: string;
    createTime?: string;
    ctl1Ip?: string;
    ctl1MicroVersion?: string;
    ctl2Ip?: string;
    ctl2MicroVersion?: string;
    deviceId?: string;
    deviceLocation?: inputs.GetStorageHitachiArrayDeviceLocation;
    deviceMoId?: string;
    deviceType?: string;
    dn?: string;
    domainGroupMoid?: string;
    hardwareVersion?: string;
    id?: string;
    ip?: string;
    isUpgraded?: boolean;
    modTime?: string;
    model?: string;
    moid?: string;
    name?: string;
    nrVersion?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetStorageHitachiArrayParent;
    permissionResources?: inputs.GetStorageHitachiArrayPermissionResource[];
    presence?: string;
    previousFru?: inputs.GetStorageHitachiArrayPreviousFru;
    registeredDevice?: inputs.GetStorageHitachiArrayRegisteredDevice;
    revision?: string;
    rn?: string;
    serial?: string;
    sharedScope?: string;
    storageUtilization?: inputs.GetStorageHitachiArrayStorageUtilization;
    svpIp?: string;
    tags?: inputs.GetStorageHitachiArrayTag[];
    targetCtl?: string;
    uuid?: string;
    vendor?: string;
    versionContext?: inputs.GetStorageHitachiArrayVersionContext;
}

/**
 * A collection of values returned by getStorageHitachiArray.
 */
export interface GetStorageHitachiArrayResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetStorageHitachiArrayAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly ctl1Ip?: string;
    readonly ctl1MicroVersion?: string;
    readonly ctl2Ip?: string;
    readonly ctl2MicroVersion?: string;
    readonly deviceId?: string;
    readonly deviceLocation?: outputs.GetStorageHitachiArrayDeviceLocation;
    readonly deviceMoId?: string;
    readonly deviceType?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly hardwareVersion?: string;
    readonly id: string;
    readonly ip?: string;
    readonly isUpgraded?: boolean;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly nrVersion?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetStorageHitachiArrayParent;
    readonly permissionResources?: outputs.GetStorageHitachiArrayPermissionResource[];
    readonly presence?: string;
    readonly previousFru?: outputs.GetStorageHitachiArrayPreviousFru;
    readonly registeredDevice?: outputs.GetStorageHitachiArrayRegisteredDevice;
    readonly results: outputs.GetStorageHitachiArrayResult[];
    readonly revision?: string;
    readonly rn?: string;
    readonly serial?: string;
    readonly sharedScope?: string;
    readonly storageUtilization?: outputs.GetStorageHitachiArrayStorageUtilization;
    readonly svpIp?: string;
    readonly tags?: outputs.GetStorageHitachiArrayTag[];
    readonly targetCtl?: string;
    readonly uuid?: string;
    readonly vendor?: string;
    readonly versionContext?: outputs.GetStorageHitachiArrayVersionContext;
}
export function getStorageHitachiArrayOutput(args?: GetStorageHitachiArrayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageHitachiArrayResult> {
    return pulumi.output(args).apply((a: any) => getStorageHitachiArray(a, opts))
}

/**
 * A collection of arguments for invoking getStorageHitachiArray.
 */
export interface GetStorageHitachiArrayOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetStorageHitachiArrayAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    ctl1Ip?: pulumi.Input<string>;
    ctl1MicroVersion?: pulumi.Input<string>;
    ctl2Ip?: pulumi.Input<string>;
    ctl2MicroVersion?: pulumi.Input<string>;
    deviceId?: pulumi.Input<string>;
    deviceLocation?: pulumi.Input<inputs.GetStorageHitachiArrayDeviceLocationArgs>;
    deviceMoId?: pulumi.Input<string>;
    deviceType?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    hardwareVersion?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    isUpgraded?: pulumi.Input<boolean>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nrVersion?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetStorageHitachiArrayParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetStorageHitachiArrayPermissionResourceArgs>[]>;
    presence?: pulumi.Input<string>;
    previousFru?: pulumi.Input<inputs.GetStorageHitachiArrayPreviousFruArgs>;
    registeredDevice?: pulumi.Input<inputs.GetStorageHitachiArrayRegisteredDeviceArgs>;
    revision?: pulumi.Input<string>;
    rn?: pulumi.Input<string>;
    serial?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    storageUtilization?: pulumi.Input<inputs.GetStorageHitachiArrayStorageUtilizationArgs>;
    svpIp?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetStorageHitachiArrayTagArgs>[]>;
    targetCtl?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetStorageHitachiArrayVersionContextArgs>;
}
