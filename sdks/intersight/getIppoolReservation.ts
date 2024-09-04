// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIppoolReservation(args?: GetIppoolReservationArgs, opts?: pulumi.InvokeOptions): Promise<GetIppoolReservationResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getIppoolReservation:getIppoolReservation", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "allocationType": args.allocationType,
        "ancestors": args.ancestors,
        "blockHead": args.blockHead,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "identity": args.identity,
        "ipType": args.ipType,
        "ipV4Address": args.ipV4Address,
        "ipV6Address": args.ipV6Address,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "pool": args.pool,
        "poolMember": args.poolMember,
        "shadowPool": args.shadowPool,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "universe": args.universe,
        "versionContext": args.versionContext,
        "vrf": args.vrf,
        "vrfMoid": args.vrfMoid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIppoolReservation.
 */
export interface GetIppoolReservationArgs {
    accountMoid?: string;
    additionalProperties?: string;
    allocationType?: string;
    ancestors?: inputs.GetIppoolReservationAncestor[];
    blockHead?: inputs.GetIppoolReservationBlockHead;
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    identity?: string;
    ipType?: string;
    ipV4Address?: string;
    ipV6Address?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    organization?: inputs.GetIppoolReservationOrganization;
    owners?: string[];
    parent?: inputs.GetIppoolReservationParent;
    permissionResources?: inputs.GetIppoolReservationPermissionResource[];
    pool?: inputs.GetIppoolReservationPool;
    poolMember?: inputs.GetIppoolReservationPoolMember;
    shadowPool?: inputs.GetIppoolReservationShadowPool;
    sharedScope?: string;
    tags?: inputs.GetIppoolReservationTag[];
    universe?: inputs.GetIppoolReservationUniverse;
    versionContext?: inputs.GetIppoolReservationVersionContext;
    vrf?: inputs.GetIppoolReservationVrf;
    vrfMoid?: string;
}

/**
 * A collection of values returned by getIppoolReservation.
 */
export interface GetIppoolReservationResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly allocationType?: string;
    readonly ancestors?: outputs.GetIppoolReservationAncestor[];
    readonly blockHead?: outputs.GetIppoolReservationBlockHead;
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly identity?: string;
    readonly ipType?: string;
    readonly ipV4Address?: string;
    readonly ipV6Address?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetIppoolReservationOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetIppoolReservationParent;
    readonly permissionResources?: outputs.GetIppoolReservationPermissionResource[];
    readonly pool?: outputs.GetIppoolReservationPool;
    readonly poolMember?: outputs.GetIppoolReservationPoolMember;
    readonly results: outputs.GetIppoolReservationResult[];
    readonly shadowPool?: outputs.GetIppoolReservationShadowPool;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetIppoolReservationTag[];
    readonly universe?: outputs.GetIppoolReservationUniverse;
    readonly versionContext?: outputs.GetIppoolReservationVersionContext;
    readonly vrf?: outputs.GetIppoolReservationVrf;
    readonly vrfMoid?: string;
}
export function getIppoolReservationOutput(args?: GetIppoolReservationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIppoolReservationResult> {
    return pulumi.output(args).apply((a: any) => getIppoolReservation(a, opts))
}

/**
 * A collection of arguments for invoking getIppoolReservation.
 */
export interface GetIppoolReservationOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    allocationType?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetIppoolReservationAncestorArgs>[]>;
    blockHead?: pulumi.Input<inputs.GetIppoolReservationBlockHeadArgs>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    identity?: pulumi.Input<string>;
    ipType?: pulumi.Input<string>;
    ipV4Address?: pulumi.Input<string>;
    ipV6Address?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetIppoolReservationOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetIppoolReservationParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetIppoolReservationPermissionResourceArgs>[]>;
    pool?: pulumi.Input<inputs.GetIppoolReservationPoolArgs>;
    poolMember?: pulumi.Input<inputs.GetIppoolReservationPoolMemberArgs>;
    shadowPool?: pulumi.Input<inputs.GetIppoolReservationShadowPoolArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetIppoolReservationTagArgs>[]>;
    universe?: pulumi.Input<inputs.GetIppoolReservationUniverseArgs>;
    versionContext?: pulumi.Input<inputs.GetIppoolReservationVersionContextArgs>;
    vrf?: pulumi.Input<inputs.GetIppoolReservationVrfArgs>;
    vrfMoid?: pulumi.Input<string>;
}
