// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBootSdDevice(args?: GetBootSdDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetBootSdDeviceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getBootSdDevice:getBootSdDevice", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "computePhysical": args.computePhysical,
        "createTime": args.createTime,
        "deviceMoId": args.deviceMoId,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "inventoryDeviceInfo": args.inventoryDeviceInfo,
        "isUpgraded": args.isUpgraded,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "order": args.order,
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
        "state": args.state,
        "tags": args.tags,
        "type": args.type,
        "vendor": args.vendor,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBootSdDevice.
 */
export interface GetBootSdDeviceArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetBootSdDeviceAncestor[];
    classId?: string;
    computePhysical?: inputs.GetBootSdDeviceComputePhysical;
    createTime?: string;
    deviceMoId?: string;
    dn?: string;
    domainGroupMoid?: string;
    id?: string;
    inventoryDeviceInfo?: inputs.GetBootSdDeviceInventoryDeviceInfo;
    isUpgraded?: boolean;
    modTime?: string;
    model?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    order?: number;
    owners?: string[];
    parent?: inputs.GetBootSdDeviceParent;
    permissionResources?: inputs.GetBootSdDevicePermissionResource[];
    presence?: string;
    previousFru?: inputs.GetBootSdDevicePreviousFru;
    registeredDevice?: inputs.GetBootSdDeviceRegisteredDevice;
    revision?: string;
    rn?: string;
    serial?: string;
    sharedScope?: string;
    state?: string;
    tags?: inputs.GetBootSdDeviceTag[];
    type?: string;
    vendor?: string;
    versionContext?: inputs.GetBootSdDeviceVersionContext;
}

/**
 * A collection of values returned by getBootSdDevice.
 */
export interface GetBootSdDeviceResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetBootSdDeviceAncestor[];
    readonly classId?: string;
    readonly computePhysical?: outputs.GetBootSdDeviceComputePhysical;
    readonly createTime?: string;
    readonly deviceMoId?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly inventoryDeviceInfo?: outputs.GetBootSdDeviceInventoryDeviceInfo;
    readonly isUpgraded?: boolean;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly order?: number;
    readonly owners?: string[];
    readonly parent?: outputs.GetBootSdDeviceParent;
    readonly permissionResources?: outputs.GetBootSdDevicePermissionResource[];
    readonly presence?: string;
    readonly previousFru?: outputs.GetBootSdDevicePreviousFru;
    readonly registeredDevice?: outputs.GetBootSdDeviceRegisteredDevice;
    readonly results: outputs.GetBootSdDeviceResult[];
    readonly revision?: string;
    readonly rn?: string;
    readonly serial?: string;
    readonly sharedScope?: string;
    readonly state?: string;
    readonly tags?: outputs.GetBootSdDeviceTag[];
    readonly type?: string;
    readonly vendor?: string;
    readonly versionContext?: outputs.GetBootSdDeviceVersionContext;
}
export function getBootSdDeviceOutput(args?: GetBootSdDeviceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBootSdDeviceResult> {
    return pulumi.output(args).apply((a: any) => getBootSdDevice(a, opts))
}

/**
 * A collection of arguments for invoking getBootSdDevice.
 */
export interface GetBootSdDeviceOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetBootSdDeviceAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    computePhysical?: pulumi.Input<inputs.GetBootSdDeviceComputePhysicalArgs>;
    createTime?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inventoryDeviceInfo?: pulumi.Input<inputs.GetBootSdDeviceInventoryDeviceInfoArgs>;
    isUpgraded?: pulumi.Input<boolean>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    order?: pulumi.Input<number>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetBootSdDeviceParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetBootSdDevicePermissionResourceArgs>[]>;
    presence?: pulumi.Input<string>;
    previousFru?: pulumi.Input<inputs.GetBootSdDevicePreviousFruArgs>;
    registeredDevice?: pulumi.Input<inputs.GetBootSdDeviceRegisteredDeviceArgs>;
    revision?: pulumi.Input<string>;
    rn?: pulumi.Input<string>;
    serial?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetBootSdDeviceTagArgs>[]>;
    type?: pulumi.Input<string>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetBootSdDeviceVersionContextArgs>;
}
