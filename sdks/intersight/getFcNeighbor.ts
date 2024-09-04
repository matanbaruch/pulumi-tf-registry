// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFcNeighbor(args?: GetFcNeighborArgs, opts?: pulumi.InvokeOptions): Promise<GetFcNeighborResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getFcNeighbor:getFcNeighbor", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "deviceMoId": args.deviceMoId,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "fcPhysicalPort": args.fcPhysicalPort,
        "fcPortChannel": args.fcPortChannel,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "peerDeviceCapability": args.peerDeviceCapability,
        "peerInterface": args.peerInterface,
        "peerIpAddress": args.peerIpAddress,
        "peerSwitchName": args.peerSwitchName,
        "peerWwn": args.peerWwn,
        "permissionResources": args.permissionResources,
        "rn": args.rn,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFcNeighbor.
 */
export interface GetFcNeighborArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetFcNeighborAncestor[];
    classId?: string;
    createTime?: string;
    deviceMoId?: string;
    dn?: string;
    domainGroupMoid?: string;
    fcPhysicalPort?: inputs.GetFcNeighborFcPhysicalPort;
    fcPortChannel?: inputs.GetFcNeighborFcPortChannel;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetFcNeighborParent;
    peerDeviceCapability?: string;
    peerInterface?: string;
    peerIpAddress?: string;
    peerSwitchName?: string;
    peerWwn?: string;
    permissionResources?: inputs.GetFcNeighborPermissionResource[];
    rn?: string;
    sharedScope?: string;
    tags?: inputs.GetFcNeighborTag[];
    versionContext?: inputs.GetFcNeighborVersionContext;
}

/**
 * A collection of values returned by getFcNeighbor.
 */
export interface GetFcNeighborResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetFcNeighborAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly deviceMoId?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly fcPhysicalPort?: outputs.GetFcNeighborFcPhysicalPort;
    readonly fcPortChannel?: outputs.GetFcNeighborFcPortChannel;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetFcNeighborParent;
    readonly peerDeviceCapability?: string;
    readonly peerInterface?: string;
    readonly peerIpAddress?: string;
    readonly peerSwitchName?: string;
    readonly peerWwn?: string;
    readonly permissionResources?: outputs.GetFcNeighborPermissionResource[];
    readonly results: outputs.GetFcNeighborResult[];
    readonly rn?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetFcNeighborTag[];
    readonly versionContext?: outputs.GetFcNeighborVersionContext;
}
export function getFcNeighborOutput(args?: GetFcNeighborOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFcNeighborResult> {
    return pulumi.output(args).apply((a: any) => getFcNeighbor(a, opts))
}

/**
 * A collection of arguments for invoking getFcNeighbor.
 */
export interface GetFcNeighborOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetFcNeighborAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    fcPhysicalPort?: pulumi.Input<inputs.GetFcNeighborFcPhysicalPortArgs>;
    fcPortChannel?: pulumi.Input<inputs.GetFcNeighborFcPortChannelArgs>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetFcNeighborParentArgs>;
    peerDeviceCapability?: pulumi.Input<string>;
    peerInterface?: pulumi.Input<string>;
    peerIpAddress?: pulumi.Input<string>;
    peerSwitchName?: pulumi.Input<string>;
    peerWwn?: pulumi.Input<string>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetFcNeighborPermissionResourceArgs>[]>;
    rn?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetFcNeighborTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetFcNeighborVersionContextArgs>;
}
