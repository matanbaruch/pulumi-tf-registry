// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEtherNetworkPort(args?: GetEtherNetworkPortArgs, opts?: pulumi.InvokeOptions): Promise<GetEtherNetworkPortResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getEtherNetworkPort:getEtherNetworkPort", {
        "accountMoid": args.accountMoid,
        "acknowledgedPeerInterface": args.acknowledgedPeerInterface,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "deviceMoId": args.deviceMoId,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "equipmentIoCardBase": args.equipmentIoCardBase,
        "id": args.id,
        "modTime": args.modTime,
        "moduleId": args.moduleId,
        "moid": args.moid,
        "objectType": args.objectType,
        "operReasons": args.operReasons,
        "operState": args.operState,
        "owners": args.owners,
        "parent": args.parent,
        "peerDn": args.peerDn,
        "peerInterface": args.peerInterface,
        "permissionResources": args.permissionResources,
        "portId": args.portId,
        "registeredDevice": args.registeredDevice,
        "rn": args.rn,
        "sharedScope": args.sharedScope,
        "slotId": args.slotId,
        "speed": args.speed,
        "switchId": args.switchId,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEtherNetworkPort.
 */
export interface GetEtherNetworkPortArgs {
    accountMoid?: string;
    acknowledgedPeerInterface?: inputs.GetEtherNetworkPortAcknowledgedPeerInterface;
    additionalProperties?: string;
    ancestors?: inputs.GetEtherNetworkPortAncestor[];
    classId?: string;
    createTime?: string;
    deviceMoId?: string;
    dn?: string;
    domainGroupMoid?: string;
    equipmentIoCardBase?: inputs.GetEtherNetworkPortEquipmentIoCardBase;
    id?: string;
    modTime?: string;
    moduleId?: number;
    moid?: string;
    objectType?: string;
    operReasons?: string[];
    operState?: string;
    owners?: string[];
    parent?: inputs.GetEtherNetworkPortParent;
    peerDn?: string;
    peerInterface?: inputs.GetEtherNetworkPortPeerInterface;
    permissionResources?: inputs.GetEtherNetworkPortPermissionResource[];
    portId?: number;
    registeredDevice?: inputs.GetEtherNetworkPortRegisteredDevice;
    rn?: string;
    sharedScope?: string;
    slotId?: number;
    speed?: string;
    switchId?: string;
    tags?: inputs.GetEtherNetworkPortTag[];
    versionContext?: inputs.GetEtherNetworkPortVersionContext;
}

/**
 * A collection of values returned by getEtherNetworkPort.
 */
export interface GetEtherNetworkPortResult {
    readonly accountMoid?: string;
    readonly acknowledgedPeerInterface?: outputs.GetEtherNetworkPortAcknowledgedPeerInterface;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetEtherNetworkPortAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly deviceMoId?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly equipmentIoCardBase?: outputs.GetEtherNetworkPortEquipmentIoCardBase;
    readonly id: string;
    readonly modTime?: string;
    readonly moduleId?: number;
    readonly moid?: string;
    readonly objectType?: string;
    readonly operReasons?: string[];
    readonly operState?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetEtherNetworkPortParent;
    readonly peerDn?: string;
    readonly peerInterface?: outputs.GetEtherNetworkPortPeerInterface;
    readonly permissionResources?: outputs.GetEtherNetworkPortPermissionResource[];
    readonly portId?: number;
    readonly registeredDevice?: outputs.GetEtherNetworkPortRegisteredDevice;
    readonly results: outputs.GetEtherNetworkPortResult[];
    readonly rn?: string;
    readonly sharedScope?: string;
    readonly slotId?: number;
    readonly speed?: string;
    readonly switchId?: string;
    readonly tags?: outputs.GetEtherNetworkPortTag[];
    readonly versionContext?: outputs.GetEtherNetworkPortVersionContext;
}
export function getEtherNetworkPortOutput(args?: GetEtherNetworkPortOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEtherNetworkPortResult> {
    return pulumi.output(args).apply((a: any) => getEtherNetworkPort(a, opts))
}

/**
 * A collection of arguments for invoking getEtherNetworkPort.
 */
export interface GetEtherNetworkPortOutputArgs {
    accountMoid?: pulumi.Input<string>;
    acknowledgedPeerInterface?: pulumi.Input<inputs.GetEtherNetworkPortAcknowledgedPeerInterfaceArgs>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetEtherNetworkPortAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    equipmentIoCardBase?: pulumi.Input<inputs.GetEtherNetworkPortEquipmentIoCardBaseArgs>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moduleId?: pulumi.Input<number>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    operReasons?: pulumi.Input<pulumi.Input<string>[]>;
    operState?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetEtherNetworkPortParentArgs>;
    peerDn?: pulumi.Input<string>;
    peerInterface?: pulumi.Input<inputs.GetEtherNetworkPortPeerInterfaceArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetEtherNetworkPortPermissionResourceArgs>[]>;
    portId?: pulumi.Input<number>;
    registeredDevice?: pulumi.Input<inputs.GetEtherNetworkPortRegisteredDeviceArgs>;
    rn?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    slotId?: pulumi.Input<number>;
    speed?: pulumi.Input<string>;
    switchId?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetEtherNetworkPortTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetEtherNetworkPortVersionContextArgs>;
}
