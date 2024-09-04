// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEtherPortChannel(args?: GetEtherPortChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetEtherPortChannelResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getEtherPortChannel:getEtherPortChannel", {
        "accessVlan": args.accessVlan,
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "adminState": args.adminState,
        "allowedVlans": args.allowedVlans,
        "ancestors": args.ancestors,
        "bandWidth": args.bandWidth,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "deviceMoId": args.deviceMoId,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "equipmentSwitchCard": args.equipmentSwitchCard,
        "id": args.id,
        "ipAddress": args.ipAddress,
        "ipAddressMask": args.ipAddressMask,
        "ipv6SubnetCidr": args.ipv6SubnetCidr,
        "macAddress": args.macAddress,
        "modTime": args.modTime,
        "mode": args.mode,
        "moid": args.moid,
        "mtu": args.mtu,
        "name": args.name,
        "nativeVlan": args.nativeVlan,
        "networkElement": args.networkElement,
        "objectType": args.objectType,
        "operSpeed": args.operSpeed,
        "operState": args.operState,
        "operStateQual": args.operStateQual,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "portChannelId": args.portChannelId,
        "registeredDevice": args.registeredDevice,
        "rn": args.rn,
        "role": args.role,
        "sharedScope": args.sharedScope,
        "status": args.status,
        "switchId": args.switchId,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEtherPortChannel.
 */
export interface GetEtherPortChannelArgs {
    accessVlan?: string;
    accountMoid?: string;
    additionalProperties?: string;
    adminState?: string;
    allowedVlans?: string;
    ancestors?: inputs.GetEtherPortChannelAncestor[];
    bandWidth?: string;
    classId?: string;
    createTime?: string;
    description?: string;
    deviceMoId?: string;
    dn?: string;
    domainGroupMoid?: string;
    equipmentSwitchCard?: inputs.GetEtherPortChannelEquipmentSwitchCard;
    id?: string;
    ipAddress?: string;
    ipAddressMask?: number;
    ipv6SubnetCidr?: string;
    macAddress?: string;
    modTime?: string;
    mode?: string;
    moid?: string;
    mtu?: number;
    name?: string;
    nativeVlan?: string;
    networkElement?: inputs.GetEtherPortChannelNetworkElement;
    objectType?: string;
    operSpeed?: string;
    operState?: string;
    operStateQual?: string;
    owners?: string[];
    parent?: inputs.GetEtherPortChannelParent;
    permissionResources?: inputs.GetEtherPortChannelPermissionResource[];
    portChannelId?: number;
    registeredDevice?: inputs.GetEtherPortChannelRegisteredDevice;
    rn?: string;
    role?: string;
    sharedScope?: string;
    status?: string;
    switchId?: string;
    tags?: inputs.GetEtherPortChannelTag[];
    versionContext?: inputs.GetEtherPortChannelVersionContext;
}

/**
 * A collection of values returned by getEtherPortChannel.
 */
export interface GetEtherPortChannelResult {
    readonly accessVlan?: string;
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly adminState?: string;
    readonly allowedVlans?: string;
    readonly ancestors?: outputs.GetEtherPortChannelAncestor[];
    readonly bandWidth?: string;
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly deviceMoId?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly equipmentSwitchCard?: outputs.GetEtherPortChannelEquipmentSwitchCard;
    readonly id: string;
    readonly ipAddress?: string;
    readonly ipAddressMask?: number;
    readonly ipv6SubnetCidr?: string;
    readonly macAddress?: string;
    readonly modTime?: string;
    readonly mode?: string;
    readonly moid?: string;
    readonly mtu?: number;
    readonly name?: string;
    readonly nativeVlan?: string;
    readonly networkElement?: outputs.GetEtherPortChannelNetworkElement;
    readonly objectType?: string;
    readonly operSpeed?: string;
    readonly operState?: string;
    readonly operStateQual?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetEtherPortChannelParent;
    readonly permissionResources?: outputs.GetEtherPortChannelPermissionResource[];
    readonly portChannelId?: number;
    readonly registeredDevice?: outputs.GetEtherPortChannelRegisteredDevice;
    readonly results: outputs.GetEtherPortChannelResult[];
    readonly rn?: string;
    readonly role?: string;
    readonly sharedScope?: string;
    readonly status?: string;
    readonly switchId?: string;
    readonly tags?: outputs.GetEtherPortChannelTag[];
    readonly versionContext?: outputs.GetEtherPortChannelVersionContext;
}
export function getEtherPortChannelOutput(args?: GetEtherPortChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEtherPortChannelResult> {
    return pulumi.output(args).apply((a: any) => getEtherPortChannel(a, opts))
}

/**
 * A collection of arguments for invoking getEtherPortChannel.
 */
export interface GetEtherPortChannelOutputArgs {
    accessVlan?: pulumi.Input<string>;
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    adminState?: pulumi.Input<string>;
    allowedVlans?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetEtherPortChannelAncestorArgs>[]>;
    bandWidth?: pulumi.Input<string>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    equipmentSwitchCard?: pulumi.Input<inputs.GetEtherPortChannelEquipmentSwitchCardArgs>;
    id?: pulumi.Input<string>;
    ipAddress?: pulumi.Input<string>;
    ipAddressMask?: pulumi.Input<number>;
    ipv6SubnetCidr?: pulumi.Input<string>;
    macAddress?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    mtu?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    nativeVlan?: pulumi.Input<string>;
    networkElement?: pulumi.Input<inputs.GetEtherPortChannelNetworkElementArgs>;
    objectType?: pulumi.Input<string>;
    operSpeed?: pulumi.Input<string>;
    operState?: pulumi.Input<string>;
    operStateQual?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetEtherPortChannelParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetEtherPortChannelPermissionResourceArgs>[]>;
    portChannelId?: pulumi.Input<number>;
    registeredDevice?: pulumi.Input<inputs.GetEtherPortChannelRegisteredDeviceArgs>;
    rn?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    switchId?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetEtherPortChannelTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetEtherPortChannelVersionContextArgs>;
}
