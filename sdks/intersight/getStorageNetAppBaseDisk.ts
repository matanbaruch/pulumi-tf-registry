// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageNetAppBaseDisk(args?: GetStorageNetAppBaseDiskArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageNetAppBaseDiskResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getStorageNetAppBaseDisk:getStorageNetAppBaseDisk", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "array": args.array,
        "arrayController": args.arrayController,
        "baseDiskModel": args.baseDiskModel,
        "classId": args.classId,
        "clusterUuid": args.clusterUuid,
        "containerType": args.containerType,
        "createTime": args.createTime,
        "deviceMoId": args.deviceMoId,
        "diskBay": args.diskBay,
        "diskPools": args.diskPools,
        "diskSerialNumber": args.diskSerialNumber,
        "diskShelfId": args.diskShelfId,
        "diskShelfModel": args.diskShelfModel,
        "diskShelfName": args.diskShelfName,
        "diskType": args.diskType,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "events": args.events,
        "id": args.id,
        "isUpgraded": args.isUpgraded,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "name": args.name,
        "nodeName": args.nodeName,
        "nrVersion": args.nrVersion,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "partNumber": args.partNumber,
        "permissionResources": args.permissionResources,
        "presence": args.presence,
        "previousFru": args.previousFru,
        "protocol": args.protocol,
        "revision": args.revision,
        "rn": args.rn,
        "serial": args.serial,
        "sharedScope": args.sharedScope,
        "speed": args.speed,
        "state": args.state,
        "status": args.status,
        "storageUtilization": args.storageUtilization,
        "tags": args.tags,
        "type": args.type,
        "uuid": args.uuid,
        "vendor": args.vendor,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageNetAppBaseDisk.
 */
export interface GetStorageNetAppBaseDiskArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetStorageNetAppBaseDiskAncestor[];
    array?: inputs.GetStorageNetAppBaseDiskArray;
    arrayController?: inputs.GetStorageNetAppBaseDiskArrayController;
    baseDiskModel?: string;
    classId?: string;
    clusterUuid?: string;
    containerType?: string;
    createTime?: string;
    deviceMoId?: string;
    diskBay?: number;
    diskPools?: inputs.GetStorageNetAppBaseDiskDiskPool[];
    diskSerialNumber?: string;
    diskShelfId?: string;
    diskShelfModel?: string;
    diskShelfName?: string;
    diskType?: string;
    dn?: string;
    domainGroupMoid?: string;
    events?: inputs.GetStorageNetAppBaseDiskEvent[];
    id?: string;
    isUpgraded?: boolean;
    modTime?: string;
    model?: string;
    moid?: string;
    name?: string;
    nodeName?: string;
    nrVersion?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetStorageNetAppBaseDiskParent;
    partNumber?: string;
    permissionResources?: inputs.GetStorageNetAppBaseDiskPermissionResource[];
    presence?: string;
    previousFru?: inputs.GetStorageNetAppBaseDiskPreviousFru;
    protocol?: string;
    revision?: string;
    rn?: string;
    serial?: string;
    sharedScope?: string;
    speed?: number;
    state?: string;
    status?: string;
    storageUtilization?: inputs.GetStorageNetAppBaseDiskStorageUtilization;
    tags?: inputs.GetStorageNetAppBaseDiskTag[];
    type?: string;
    uuid?: string;
    vendor?: string;
    versionContext?: inputs.GetStorageNetAppBaseDiskVersionContext;
}

/**
 * A collection of values returned by getStorageNetAppBaseDisk.
 */
export interface GetStorageNetAppBaseDiskResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetStorageNetAppBaseDiskAncestor[];
    readonly array?: outputs.GetStorageNetAppBaseDiskArray;
    readonly arrayController?: outputs.GetStorageNetAppBaseDiskArrayController;
    readonly baseDiskModel?: string;
    readonly classId?: string;
    readonly clusterUuid?: string;
    readonly containerType?: string;
    readonly createTime?: string;
    readonly deviceMoId?: string;
    readonly diskBay?: number;
    readonly diskPools?: outputs.GetStorageNetAppBaseDiskDiskPool[];
    readonly diskSerialNumber?: string;
    readonly diskShelfId?: string;
    readonly diskShelfModel?: string;
    readonly diskShelfName?: string;
    readonly diskType?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly events?: outputs.GetStorageNetAppBaseDiskEvent[];
    readonly id: string;
    readonly isUpgraded?: boolean;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly nodeName?: string;
    readonly nrVersion?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetStorageNetAppBaseDiskParent;
    readonly partNumber?: string;
    readonly permissionResources?: outputs.GetStorageNetAppBaseDiskPermissionResource[];
    readonly presence?: string;
    readonly previousFru?: outputs.GetStorageNetAppBaseDiskPreviousFru;
    readonly protocol?: string;
    readonly results: outputs.GetStorageNetAppBaseDiskResult[];
    readonly revision?: string;
    readonly rn?: string;
    readonly serial?: string;
    readonly sharedScope?: string;
    readonly speed?: number;
    readonly state?: string;
    readonly status?: string;
    readonly storageUtilization?: outputs.GetStorageNetAppBaseDiskStorageUtilization;
    readonly tags?: outputs.GetStorageNetAppBaseDiskTag[];
    readonly type?: string;
    readonly uuid?: string;
    readonly vendor?: string;
    readonly versionContext?: outputs.GetStorageNetAppBaseDiskVersionContext;
}
export function getStorageNetAppBaseDiskOutput(args?: GetStorageNetAppBaseDiskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageNetAppBaseDiskResult> {
    return pulumi.output(args).apply((a: any) => getStorageNetAppBaseDisk(a, opts))
}

/**
 * A collection of arguments for invoking getStorageNetAppBaseDisk.
 */
export interface GetStorageNetAppBaseDiskOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppBaseDiskAncestorArgs>[]>;
    array?: pulumi.Input<inputs.GetStorageNetAppBaseDiskArrayArgs>;
    arrayController?: pulumi.Input<inputs.GetStorageNetAppBaseDiskArrayControllerArgs>;
    baseDiskModel?: pulumi.Input<string>;
    classId?: pulumi.Input<string>;
    clusterUuid?: pulumi.Input<string>;
    containerType?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    diskBay?: pulumi.Input<number>;
    diskPools?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppBaseDiskDiskPoolArgs>[]>;
    diskSerialNumber?: pulumi.Input<string>;
    diskShelfId?: pulumi.Input<string>;
    diskShelfModel?: pulumi.Input<string>;
    diskShelfName?: pulumi.Input<string>;
    diskType?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    events?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppBaseDiskEventArgs>[]>;
    id?: pulumi.Input<string>;
    isUpgraded?: pulumi.Input<boolean>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nodeName?: pulumi.Input<string>;
    nrVersion?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetStorageNetAppBaseDiskParentArgs>;
    partNumber?: pulumi.Input<string>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppBaseDiskPermissionResourceArgs>[]>;
    presence?: pulumi.Input<string>;
    previousFru?: pulumi.Input<inputs.GetStorageNetAppBaseDiskPreviousFruArgs>;
    protocol?: pulumi.Input<string>;
    revision?: pulumi.Input<string>;
    rn?: pulumi.Input<string>;
    serial?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    speed?: pulumi.Input<number>;
    state?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    storageUtilization?: pulumi.Input<inputs.GetStorageNetAppBaseDiskStorageUtilizationArgs>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppBaseDiskTagArgs>[]>;
    type?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetStorageNetAppBaseDiskVersionContextArgs>;
}
