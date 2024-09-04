// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBiosTokenSettings(args?: GetBiosTokenSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetBiosTokenSettingsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getBiosTokenSettings:getBiosTokenSettings", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "computeBlade": args.computeBlade,
        "computeRackUnit": args.computeRackUnit,
        "createTime": args.createTime,
        "deviceMoId": args.deviceMoId,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "inventoryDeviceInfo": args.inventoryDeviceInfo,
        "isAssigned": args.isAssigned,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "registeredDevice": args.registeredDevice,
        "rn": args.rn,
        "serial": args.serial,
        "settingsMoRn": args.settingsMoRn,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBiosTokenSettings.
 */
export interface GetBiosTokenSettingsArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetBiosTokenSettingsAncestor[];
    classId?: string;
    computeBlade?: inputs.GetBiosTokenSettingsComputeBlade;
    computeRackUnit?: inputs.GetBiosTokenSettingsComputeRackUnit;
    createTime?: string;
    deviceMoId?: string;
    dn?: string;
    domainGroupMoid?: string;
    id?: string;
    inventoryDeviceInfo?: inputs.GetBiosTokenSettingsInventoryDeviceInfo;
    isAssigned?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetBiosTokenSettingsParent;
    permissionResources?: inputs.GetBiosTokenSettingsPermissionResource[];
    registeredDevice?: inputs.GetBiosTokenSettingsRegisteredDevice;
    rn?: string;
    serial?: string;
    settingsMoRn?: string;
    sharedScope?: string;
    tags?: inputs.GetBiosTokenSettingsTag[];
    versionContext?: inputs.GetBiosTokenSettingsVersionContext;
}

/**
 * A collection of values returned by getBiosTokenSettings.
 */
export interface GetBiosTokenSettingsResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetBiosTokenSettingsAncestor[];
    readonly classId?: string;
    readonly computeBlade?: outputs.GetBiosTokenSettingsComputeBlade;
    readonly computeRackUnit?: outputs.GetBiosTokenSettingsComputeRackUnit;
    readonly createTime?: string;
    readonly deviceMoId?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly inventoryDeviceInfo?: outputs.GetBiosTokenSettingsInventoryDeviceInfo;
    readonly isAssigned?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetBiosTokenSettingsParent;
    readonly permissionResources?: outputs.GetBiosTokenSettingsPermissionResource[];
    readonly registeredDevice?: outputs.GetBiosTokenSettingsRegisteredDevice;
    readonly results: outputs.GetBiosTokenSettingsResult[];
    readonly rn?: string;
    readonly serial?: string;
    readonly settingsMoRn?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetBiosTokenSettingsTag[];
    readonly versionContext?: outputs.GetBiosTokenSettingsVersionContext;
}
export function getBiosTokenSettingsOutput(args?: GetBiosTokenSettingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBiosTokenSettingsResult> {
    return pulumi.output(args).apply((a: any) => getBiosTokenSettings(a, opts))
}

/**
 * A collection of arguments for invoking getBiosTokenSettings.
 */
export interface GetBiosTokenSettingsOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetBiosTokenSettingsAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    computeBlade?: pulumi.Input<inputs.GetBiosTokenSettingsComputeBladeArgs>;
    computeRackUnit?: pulumi.Input<inputs.GetBiosTokenSettingsComputeRackUnitArgs>;
    createTime?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inventoryDeviceInfo?: pulumi.Input<inputs.GetBiosTokenSettingsInventoryDeviceInfoArgs>;
    isAssigned?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetBiosTokenSettingsParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetBiosTokenSettingsPermissionResourceArgs>[]>;
    registeredDevice?: pulumi.Input<inputs.GetBiosTokenSettingsRegisteredDeviceArgs>;
    rn?: pulumi.Input<string>;
    serial?: pulumi.Input<string>;
    settingsMoRn?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetBiosTokenSettingsTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetBiosTokenSettingsVersionContextArgs>;
}
