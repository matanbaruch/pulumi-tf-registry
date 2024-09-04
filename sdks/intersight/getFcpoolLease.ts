// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFcpoolLease(args?: GetFcpoolLeaseArgs, opts?: pulumi.InvokeOptions): Promise<GetFcpoolLeaseResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getFcpoolLease:getFcpoolLease", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "allocationType": args.allocationType,
        "ancestors": args.ancestors,
        "assignedToEntity": args.assignedToEntity,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "hasDuplicate": args.hasDuplicate,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "pool": args.pool,
        "poolMember": args.poolMember,
        "poolPurpose": args.poolPurpose,
        "reservation": args.reservation,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "universe": args.universe,
        "versionContext": args.versionContext,
        "wwnId": args.wwnId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFcpoolLease.
 */
export interface GetFcpoolLeaseArgs {
    accountMoid?: string;
    additionalProperties?: string;
    allocationType?: string;
    ancestors?: inputs.GetFcpoolLeaseAncestor[];
    assignedToEntity?: inputs.GetFcpoolLeaseAssignedToEntity;
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    hasDuplicate?: boolean;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetFcpoolLeaseParent;
    permissionResources?: inputs.GetFcpoolLeasePermissionResource[];
    pool?: inputs.GetFcpoolLeasePool;
    poolMember?: inputs.GetFcpoolLeasePoolMember;
    poolPurpose?: string;
    reservation?: inputs.GetFcpoolLeaseReservation;
    sharedScope?: string;
    tags?: inputs.GetFcpoolLeaseTag[];
    universe?: inputs.GetFcpoolLeaseUniverse;
    versionContext?: inputs.GetFcpoolLeaseVersionContext;
    wwnId?: string;
}

/**
 * A collection of values returned by getFcpoolLease.
 */
export interface GetFcpoolLeaseResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly allocationType?: string;
    readonly ancestors?: outputs.GetFcpoolLeaseAncestor[];
    readonly assignedToEntity?: outputs.GetFcpoolLeaseAssignedToEntity;
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly hasDuplicate?: boolean;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetFcpoolLeaseParent;
    readonly permissionResources?: outputs.GetFcpoolLeasePermissionResource[];
    readonly pool?: outputs.GetFcpoolLeasePool;
    readonly poolMember?: outputs.GetFcpoolLeasePoolMember;
    readonly poolPurpose?: string;
    readonly reservation?: outputs.GetFcpoolLeaseReservation;
    readonly results: outputs.GetFcpoolLeaseResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetFcpoolLeaseTag[];
    readonly universe?: outputs.GetFcpoolLeaseUniverse;
    readonly versionContext?: outputs.GetFcpoolLeaseVersionContext;
    readonly wwnId?: string;
}
export function getFcpoolLeaseOutput(args?: GetFcpoolLeaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFcpoolLeaseResult> {
    return pulumi.output(args).apply((a: any) => getFcpoolLease(a, opts))
}

/**
 * A collection of arguments for invoking getFcpoolLease.
 */
export interface GetFcpoolLeaseOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    allocationType?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetFcpoolLeaseAncestorArgs>[]>;
    assignedToEntity?: pulumi.Input<inputs.GetFcpoolLeaseAssignedToEntityArgs>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    hasDuplicate?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetFcpoolLeaseParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetFcpoolLeasePermissionResourceArgs>[]>;
    pool?: pulumi.Input<inputs.GetFcpoolLeasePoolArgs>;
    poolMember?: pulumi.Input<inputs.GetFcpoolLeasePoolMemberArgs>;
    poolPurpose?: pulumi.Input<string>;
    reservation?: pulumi.Input<inputs.GetFcpoolLeaseReservationArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetFcpoolLeaseTagArgs>[]>;
    universe?: pulumi.Input<inputs.GetFcpoolLeaseUniverseArgs>;
    versionContext?: pulumi.Input<inputs.GetFcpoolLeaseVersionContextArgs>;
    wwnId?: pulumi.Input<string>;
}
