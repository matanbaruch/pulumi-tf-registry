// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIppoolShadowPool(args?: GetIppoolShadowPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetIppoolShadowPoolResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getIppoolShadowPool:getIppoolShadowPool", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "assigned": args.assigned,
        "assignmentOrder": args.assignmentOrder,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "ipBlockHeads": args.ipBlockHeads,
        "ipV4Blocks": args.ipV4Blocks,
        "ipV4Config": args.ipV4Config,
        "ipV6Blocks": args.ipV6Blocks,
        "ipV6Config": args.ipV6Config,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "pool": args.pool,
        "reservations": args.reservations,
        "reserved": args.reserved,
        "sharedScope": args.sharedScope,
        "size": args.size,
        "tags": args.tags,
        "v4Assigned": args.v4Assigned,
        "v4Size": args.v4Size,
        "v6Assigned": args.v6Assigned,
        "v6Size": args.v6Size,
        "versionContext": args.versionContext,
        "vrf": args.vrf,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIppoolShadowPool.
 */
export interface GetIppoolShadowPoolArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetIppoolShadowPoolAncestor[];
    assigned?: number;
    assignmentOrder?: string;
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    id?: string;
    ipBlockHeads?: inputs.GetIppoolShadowPoolIpBlockHead[];
    ipV4Blocks?: inputs.GetIppoolShadowPoolIpV4Block[];
    ipV4Config?: inputs.GetIppoolShadowPoolIpV4Config;
    ipV6Blocks?: inputs.GetIppoolShadowPoolIpV6Block[];
    ipV6Config?: inputs.GetIppoolShadowPoolIpV6Config;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetIppoolShadowPoolParent;
    permissionResources?: inputs.GetIppoolShadowPoolPermissionResource[];
    pool?: inputs.GetIppoolShadowPoolPool;
    reservations?: inputs.GetIppoolShadowPoolReservation[];
    reserved?: number;
    sharedScope?: string;
    size?: number;
    tags?: inputs.GetIppoolShadowPoolTag[];
    v4Assigned?: number;
    v4Size?: number;
    v6Assigned?: number;
    v6Size?: number;
    versionContext?: inputs.GetIppoolShadowPoolVersionContext;
    vrf?: inputs.GetIppoolShadowPoolVrf;
}

/**
 * A collection of values returned by getIppoolShadowPool.
 */
export interface GetIppoolShadowPoolResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetIppoolShadowPoolAncestor[];
    readonly assigned?: number;
    readonly assignmentOrder?: string;
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly ipBlockHeads?: outputs.GetIppoolShadowPoolIpBlockHead[];
    readonly ipV4Blocks?: outputs.GetIppoolShadowPoolIpV4Block[];
    readonly ipV4Config?: outputs.GetIppoolShadowPoolIpV4Config;
    readonly ipV6Blocks?: outputs.GetIppoolShadowPoolIpV6Block[];
    readonly ipV6Config?: outputs.GetIppoolShadowPoolIpV6Config;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetIppoolShadowPoolParent;
    readonly permissionResources?: outputs.GetIppoolShadowPoolPermissionResource[];
    readonly pool?: outputs.GetIppoolShadowPoolPool;
    readonly reservations?: outputs.GetIppoolShadowPoolReservation[];
    readonly reserved?: number;
    readonly results: outputs.GetIppoolShadowPoolResult[];
    readonly sharedScope?: string;
    readonly size?: number;
    readonly tags?: outputs.GetIppoolShadowPoolTag[];
    readonly v4Assigned?: number;
    readonly v4Size?: number;
    readonly v6Assigned?: number;
    readonly v6Size?: number;
    readonly versionContext?: outputs.GetIppoolShadowPoolVersionContext;
    readonly vrf?: outputs.GetIppoolShadowPoolVrf;
}
export function getIppoolShadowPoolOutput(args?: GetIppoolShadowPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIppoolShadowPoolResult> {
    return pulumi.output(args).apply((a: any) => getIppoolShadowPool(a, opts))
}

/**
 * A collection of arguments for invoking getIppoolShadowPool.
 */
export interface GetIppoolShadowPoolOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetIppoolShadowPoolAncestorArgs>[]>;
    assigned?: pulumi.Input<number>;
    assignmentOrder?: pulumi.Input<string>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ipBlockHeads?: pulumi.Input<pulumi.Input<inputs.GetIppoolShadowPoolIpBlockHeadArgs>[]>;
    ipV4Blocks?: pulumi.Input<pulumi.Input<inputs.GetIppoolShadowPoolIpV4BlockArgs>[]>;
    ipV4Config?: pulumi.Input<inputs.GetIppoolShadowPoolIpV4ConfigArgs>;
    ipV6Blocks?: pulumi.Input<pulumi.Input<inputs.GetIppoolShadowPoolIpV6BlockArgs>[]>;
    ipV6Config?: pulumi.Input<inputs.GetIppoolShadowPoolIpV6ConfigArgs>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetIppoolShadowPoolParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetIppoolShadowPoolPermissionResourceArgs>[]>;
    pool?: pulumi.Input<inputs.GetIppoolShadowPoolPoolArgs>;
    reservations?: pulumi.Input<pulumi.Input<inputs.GetIppoolShadowPoolReservationArgs>[]>;
    reserved?: pulumi.Input<number>;
    sharedScope?: pulumi.Input<string>;
    size?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetIppoolShadowPoolTagArgs>[]>;
    v4Assigned?: pulumi.Input<number>;
    v4Size?: pulumi.Input<number>;
    v6Assigned?: pulumi.Input<number>;
    v6Size?: pulumi.Input<number>;
    versionContext?: pulumi.Input<inputs.GetIppoolShadowPoolVersionContextArgs>;
    vrf?: pulumi.Input<inputs.GetIppoolShadowPoolVrfArgs>;
}
