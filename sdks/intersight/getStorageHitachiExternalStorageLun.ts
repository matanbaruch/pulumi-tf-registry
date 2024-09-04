// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageHitachiExternalStorageLun(args?: GetStorageHitachiExternalStorageLunArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageHitachiExternalStorageLunResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getStorageHitachiExternalStorageLun:getStorageHitachiExternalStorageLun", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "array": args.array,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "externalLun": args.externalLun,
        "externalPortId": args.externalPortId,
        "externalStoragePort": args.externalStoragePort,
        "externalVolumeCapacity": args.externalVolumeCapacity,
        "externalVolumeInfo": args.externalVolumeInfo,
        "externalWwn": args.externalWwn,
        "id": args.id,
        "iscsiIpAddress": args.iscsiIpAddress,
        "iscsiName": args.iscsiName,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "portId": args.portId,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
        "virtualPortId": args.virtualPortId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageHitachiExternalStorageLun.
 */
export interface GetStorageHitachiExternalStorageLunArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetStorageHitachiExternalStorageLunAncestor[];
    array?: inputs.GetStorageHitachiExternalStorageLunArray;
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    externalLun?: number;
    externalPortId?: string;
    externalStoragePort?: inputs.GetStorageHitachiExternalStorageLunExternalStoragePort;
    externalVolumeCapacity?: number;
    externalVolumeInfo?: string;
    externalWwn?: string;
    id?: string;
    iscsiIpAddress?: string;
    iscsiName?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetStorageHitachiExternalStorageLunParent;
    permissionResources?: inputs.GetStorageHitachiExternalStorageLunPermissionResource[];
    portId?: string;
    registeredDevice?: inputs.GetStorageHitachiExternalStorageLunRegisteredDevice;
    sharedScope?: string;
    tags?: inputs.GetStorageHitachiExternalStorageLunTag[];
    versionContext?: inputs.GetStorageHitachiExternalStorageLunVersionContext;
    virtualPortId?: number;
}

/**
 * A collection of values returned by getStorageHitachiExternalStorageLun.
 */
export interface GetStorageHitachiExternalStorageLunResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetStorageHitachiExternalStorageLunAncestor[];
    readonly array?: outputs.GetStorageHitachiExternalStorageLunArray;
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly externalLun?: number;
    readonly externalPortId?: string;
    readonly externalStoragePort?: outputs.GetStorageHitachiExternalStorageLunExternalStoragePort;
    readonly externalVolumeCapacity?: number;
    readonly externalVolumeInfo?: string;
    readonly externalWwn?: string;
    readonly id: string;
    readonly iscsiIpAddress?: string;
    readonly iscsiName?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetStorageHitachiExternalStorageLunParent;
    readonly permissionResources?: outputs.GetStorageHitachiExternalStorageLunPermissionResource[];
    readonly portId?: string;
    readonly registeredDevice?: outputs.GetStorageHitachiExternalStorageLunRegisteredDevice;
    readonly results: outputs.GetStorageHitachiExternalStorageLunResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetStorageHitachiExternalStorageLunTag[];
    readonly versionContext?: outputs.GetStorageHitachiExternalStorageLunVersionContext;
    readonly virtualPortId?: number;
}
export function getStorageHitachiExternalStorageLunOutput(args?: GetStorageHitachiExternalStorageLunOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageHitachiExternalStorageLunResult> {
    return pulumi.output(args).apply((a: any) => getStorageHitachiExternalStorageLun(a, opts))
}

/**
 * A collection of arguments for invoking getStorageHitachiExternalStorageLun.
 */
export interface GetStorageHitachiExternalStorageLunOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetStorageHitachiExternalStorageLunAncestorArgs>[]>;
    array?: pulumi.Input<inputs.GetStorageHitachiExternalStorageLunArrayArgs>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    externalLun?: pulumi.Input<number>;
    externalPortId?: pulumi.Input<string>;
    externalStoragePort?: pulumi.Input<inputs.GetStorageHitachiExternalStorageLunExternalStoragePortArgs>;
    externalVolumeCapacity?: pulumi.Input<number>;
    externalVolumeInfo?: pulumi.Input<string>;
    externalWwn?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    iscsiIpAddress?: pulumi.Input<string>;
    iscsiName?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetStorageHitachiExternalStorageLunParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetStorageHitachiExternalStorageLunPermissionResourceArgs>[]>;
    portId?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetStorageHitachiExternalStorageLunRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetStorageHitachiExternalStorageLunTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetStorageHitachiExternalStorageLunVersionContextArgs>;
    virtualPortId?: pulumi.Input<number>;
}
