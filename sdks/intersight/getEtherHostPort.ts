// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEtherHostPort(args?: GetEtherHostPortArgs, opts?: pulumi.InvokeOptions): Promise<GetEtherHostPortResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getEtherHostPort:getEtherHostPort", {
        "accountMoid": args.accountMoid,
        "acknowledgedPeerInterface": args.acknowledgedPeerInterface,
        "additionalProperties": args.additionalProperties,
        "aggregatePortId": args.aggregatePortId,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "deviceMoId": args.deviceMoId,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "equipmentIoCardBase": args.equipmentIoCardBase,
        "id": args.id,
        "macAddress": args.macAddress,
        "modTime": args.modTime,
        "mode": args.mode,
        "moduleId": args.moduleId,
        "moid": args.moid,
        "objectType": args.objectType,
        "operSpeed": args.operSpeed,
        "operState": args.operState,
        "operStateQual": args.operStateQual,
        "owners": args.owners,
        "parent": args.parent,
        "peerDn": args.peerDn,
        "peerInterface": args.peerInterface,
        "permissionResources": args.permissionResources,
        "portChannelId": args.portChannelId,
        "portId": args.portId,
        "portType": args.portType,
        "registeredDevice": args.registeredDevice,
        "rn": args.rn,
        "role": args.role,
        "sharedScope": args.sharedScope,
        "slotId": args.slotId,
        "speed": args.speed,
        "switchId": args.switchId,
        "tags": args.tags,
        "transceiverType": args.transceiverType,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEtherHostPort.
 */
export interface GetEtherHostPortArgs {
    accountMoid?: string;
    acknowledgedPeerInterface?: inputs.GetEtherHostPortAcknowledgedPeerInterface;
    additionalProperties?: string;
    aggregatePortId?: number;
    ancestors?: inputs.GetEtherHostPortAncestor[];
    classId?: string;
    createTime?: string;
    deviceMoId?: string;
    dn?: string;
    domainGroupMoid?: string;
    equipmentIoCardBase?: inputs.GetEtherHostPortEquipmentIoCardBase;
    id?: string;
    macAddress?: string;
    modTime?: string;
    mode?: string;
    moduleId?: number;
    moid?: string;
    objectType?: string;
    operSpeed?: string;
    operState?: string;
    operStateQual?: string;
    owners?: string[];
    parent?: inputs.GetEtherHostPortParent;
    peerDn?: string;
    peerInterface?: inputs.GetEtherHostPortPeerInterface;
    permissionResources?: inputs.GetEtherHostPortPermissionResource[];
    portChannelId?: number;
    portId?: number;
    portType?: string;
    registeredDevice?: inputs.GetEtherHostPortRegisteredDevice;
    rn?: string;
    role?: string;
    sharedScope?: string;
    slotId?: number;
    speed?: string;
    switchId?: string;
    tags?: inputs.GetEtherHostPortTag[];
    transceiverType?: string;
    versionContext?: inputs.GetEtherHostPortVersionContext;
}

/**
 * A collection of values returned by getEtherHostPort.
 */
export interface GetEtherHostPortResult {
    readonly accountMoid?: string;
    readonly acknowledgedPeerInterface?: outputs.GetEtherHostPortAcknowledgedPeerInterface;
    readonly additionalProperties?: string;
    readonly aggregatePortId?: number;
    readonly ancestors?: outputs.GetEtherHostPortAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly deviceMoId?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly equipmentIoCardBase?: outputs.GetEtherHostPortEquipmentIoCardBase;
    readonly id: string;
    readonly macAddress?: string;
    readonly modTime?: string;
    readonly mode?: string;
    readonly moduleId?: number;
    readonly moid?: string;
    readonly objectType?: string;
    readonly operSpeed?: string;
    readonly operState?: string;
    readonly operStateQual?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetEtherHostPortParent;
    readonly peerDn?: string;
    readonly peerInterface?: outputs.GetEtherHostPortPeerInterface;
    readonly permissionResources?: outputs.GetEtherHostPortPermissionResource[];
    readonly portChannelId?: number;
    readonly portId?: number;
    readonly portType?: string;
    readonly registeredDevice?: outputs.GetEtherHostPortRegisteredDevice;
    readonly results: outputs.GetEtherHostPortResult[];
    readonly rn?: string;
    readonly role?: string;
    readonly sharedScope?: string;
    readonly slotId?: number;
    readonly speed?: string;
    readonly switchId?: string;
    readonly tags?: outputs.GetEtherHostPortTag[];
    readonly transceiverType?: string;
    readonly versionContext?: outputs.GetEtherHostPortVersionContext;
}
export function getEtherHostPortOutput(args?: GetEtherHostPortOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEtherHostPortResult> {
    return pulumi.output(args).apply((a: any) => getEtherHostPort(a, opts))
}

/**
 * A collection of arguments for invoking getEtherHostPort.
 */
export interface GetEtherHostPortOutputArgs {
    accountMoid?: pulumi.Input<string>;
    acknowledgedPeerInterface?: pulumi.Input<inputs.GetEtherHostPortAcknowledgedPeerInterfaceArgs>;
    additionalProperties?: pulumi.Input<string>;
    aggregatePortId?: pulumi.Input<number>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetEtherHostPortAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    equipmentIoCardBase?: pulumi.Input<inputs.GetEtherHostPortEquipmentIoCardBaseArgs>;
    id?: pulumi.Input<string>;
    macAddress?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    moduleId?: pulumi.Input<number>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    operSpeed?: pulumi.Input<string>;
    operState?: pulumi.Input<string>;
    operStateQual?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetEtherHostPortParentArgs>;
    peerDn?: pulumi.Input<string>;
    peerInterface?: pulumi.Input<inputs.GetEtherHostPortPeerInterfaceArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetEtherHostPortPermissionResourceArgs>[]>;
    portChannelId?: pulumi.Input<number>;
    portId?: pulumi.Input<number>;
    portType?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetEtherHostPortRegisteredDeviceArgs>;
    rn?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    slotId?: pulumi.Input<number>;
    speed?: pulumi.Input<string>;
    switchId?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetEtherHostPortTagArgs>[]>;
    transceiverType?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetEtherHostPortVersionContextArgs>;
}
