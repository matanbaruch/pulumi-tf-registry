// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMacpoolPoolMember(args?: GetMacpoolPoolMemberArgs, opts?: pulumi.InvokeOptions): Promise<GetMacpoolPoolMemberResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getMacpoolPoolMember:getMacpoolPoolMember", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "assigned": args.assigned,
        "assignedByAnother": args.assignedByAnother,
        "assignedToEntity": args.assignedToEntity,
        "blockHead": args.blockHead,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "macAddress": args.macAddress,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "peer": args.peer,
        "permissionResources": args.permissionResources,
        "pool": args.pool,
        "reservation": args.reservation,
        "reserved": args.reserved,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMacpoolPoolMember.
 */
export interface GetMacpoolPoolMemberArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetMacpoolPoolMemberAncestor[];
    assigned?: boolean;
    assignedByAnother?: boolean;
    assignedToEntity?: inputs.GetMacpoolPoolMemberAssignedToEntity;
    blockHead?: inputs.GetMacpoolPoolMemberBlockHead;
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    macAddress?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetMacpoolPoolMemberParent;
    peer?: inputs.GetMacpoolPoolMemberPeer;
    permissionResources?: inputs.GetMacpoolPoolMemberPermissionResource[];
    pool?: inputs.GetMacpoolPoolMemberPool;
    reservation?: inputs.GetMacpoolPoolMemberReservation;
    reserved?: boolean;
    sharedScope?: string;
    tags?: inputs.GetMacpoolPoolMemberTag[];
    versionContext?: inputs.GetMacpoolPoolMemberVersionContext;
}

/**
 * A collection of values returned by getMacpoolPoolMember.
 */
export interface GetMacpoolPoolMemberResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetMacpoolPoolMemberAncestor[];
    readonly assigned?: boolean;
    readonly assignedByAnother?: boolean;
    readonly assignedToEntity?: outputs.GetMacpoolPoolMemberAssignedToEntity;
    readonly blockHead?: outputs.GetMacpoolPoolMemberBlockHead;
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly macAddress?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetMacpoolPoolMemberParent;
    readonly peer?: outputs.GetMacpoolPoolMemberPeer;
    readonly permissionResources?: outputs.GetMacpoolPoolMemberPermissionResource[];
    readonly pool?: outputs.GetMacpoolPoolMemberPool;
    readonly reservation?: outputs.GetMacpoolPoolMemberReservation;
    readonly reserved?: boolean;
    readonly results: outputs.GetMacpoolPoolMemberResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetMacpoolPoolMemberTag[];
    readonly versionContext?: outputs.GetMacpoolPoolMemberVersionContext;
}
export function getMacpoolPoolMemberOutput(args?: GetMacpoolPoolMemberOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMacpoolPoolMemberResult> {
    return pulumi.output(args).apply((a: any) => getMacpoolPoolMember(a, opts))
}

/**
 * A collection of arguments for invoking getMacpoolPoolMember.
 */
export interface GetMacpoolPoolMemberOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetMacpoolPoolMemberAncestorArgs>[]>;
    assigned?: pulumi.Input<boolean>;
    assignedByAnother?: pulumi.Input<boolean>;
    assignedToEntity?: pulumi.Input<inputs.GetMacpoolPoolMemberAssignedToEntityArgs>;
    blockHead?: pulumi.Input<inputs.GetMacpoolPoolMemberBlockHeadArgs>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    macAddress?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetMacpoolPoolMemberParentArgs>;
    peer?: pulumi.Input<inputs.GetMacpoolPoolMemberPeerArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetMacpoolPoolMemberPermissionResourceArgs>[]>;
    pool?: pulumi.Input<inputs.GetMacpoolPoolMemberPoolArgs>;
    reservation?: pulumi.Input<inputs.GetMacpoolPoolMemberReservationArgs>;
    reserved?: pulumi.Input<boolean>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetMacpoolPoolMemberTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetMacpoolPoolMemberVersionContextArgs>;
}
