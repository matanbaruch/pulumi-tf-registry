// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBootHddDevice(args?: GetBootHddDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetBootHddDeviceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getBootHddDevice:getBootHddDevice", {
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
 * A collection of arguments for invoking getBootHddDevice.
 */
export interface GetBootHddDeviceArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetBootHddDeviceAncestor[];
    classId?: string;
    computePhysical?: inputs.GetBootHddDeviceComputePhysical;
    createTime?: string;
    deviceMoId?: string;
    dn?: string;
    domainGroupMoid?: string;
    id?: string;
    inventoryDeviceInfo?: inputs.GetBootHddDeviceInventoryDeviceInfo;
    isUpgraded?: boolean;
    modTime?: string;
    model?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    order?: number;
    owners?: string[];
    parent?: inputs.GetBootHddDeviceParent;
    permissionResources?: inputs.GetBootHddDevicePermissionResource[];
    presence?: string;
    previousFru?: inputs.GetBootHddDevicePreviousFru;
    registeredDevice?: inputs.GetBootHddDeviceRegisteredDevice;
    revision?: string;
    rn?: string;
    serial?: string;
    sharedScope?: string;
    state?: string;
    tags?: inputs.GetBootHddDeviceTag[];
    type?: string;
    vendor?: string;
    versionContext?: inputs.GetBootHddDeviceVersionContext;
}

/**
 * A collection of values returned by getBootHddDevice.
 */
export interface GetBootHddDeviceResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetBootHddDeviceAncestor[];
    readonly classId?: string;
    readonly computePhysical?: outputs.GetBootHddDeviceComputePhysical;
    readonly createTime?: string;
    readonly deviceMoId?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly inventoryDeviceInfo?: outputs.GetBootHddDeviceInventoryDeviceInfo;
    readonly isUpgraded?: boolean;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly order?: number;
    readonly owners?: string[];
    readonly parent?: outputs.GetBootHddDeviceParent;
    readonly permissionResources?: outputs.GetBootHddDevicePermissionResource[];
    readonly presence?: string;
    readonly previousFru?: outputs.GetBootHddDevicePreviousFru;
    readonly registeredDevice?: outputs.GetBootHddDeviceRegisteredDevice;
    readonly results: outputs.GetBootHddDeviceResult[];
    readonly revision?: string;
    readonly rn?: string;
    readonly serial?: string;
    readonly sharedScope?: string;
    readonly state?: string;
    readonly tags?: outputs.GetBootHddDeviceTag[];
    readonly type?: string;
    readonly vendor?: string;
    readonly versionContext?: outputs.GetBootHddDeviceVersionContext;
}
export function getBootHddDeviceOutput(args?: GetBootHddDeviceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBootHddDeviceResult> {
    return pulumi.output(args).apply((a: any) => getBootHddDevice(a, opts))
}

/**
 * A collection of arguments for invoking getBootHddDevice.
 */
export interface GetBootHddDeviceOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetBootHddDeviceAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    computePhysical?: pulumi.Input<inputs.GetBootHddDeviceComputePhysicalArgs>;
    createTime?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inventoryDeviceInfo?: pulumi.Input<inputs.GetBootHddDeviceInventoryDeviceInfoArgs>;
    isUpgraded?: pulumi.Input<boolean>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    order?: pulumi.Input<number>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetBootHddDeviceParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetBootHddDevicePermissionResourceArgs>[]>;
    presence?: pulumi.Input<string>;
    previousFru?: pulumi.Input<inputs.GetBootHddDevicePreviousFruArgs>;
    registeredDevice?: pulumi.Input<inputs.GetBootHddDeviceRegisteredDeviceArgs>;
    revision?: pulumi.Input<string>;
    rn?: pulumi.Input<string>;
    serial?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetBootHddDeviceTagArgs>[]>;
    type?: pulumi.Input<string>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetBootHddDeviceVersionContextArgs>;
}
