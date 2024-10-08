// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getResourceReservation(args?: GetResourceReservationArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceReservationResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getResourceReservation:getResourceReservation", {
        "account": args.account,
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "customPermissionResources": args.customPermissionResources,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "expiration": args.expiration,
        "groups": args.groups,
        "id": args.id,
        "identity": args.identity,
        "markFail": args.markFail,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "reservationSelector": args.reservationSelector,
        "resourceMoids": args.resourceMoids,
        "resourceType": args.resourceType,
        "sharedScope": args.sharedScope,
        "status": args.status,
        "tags": args.tags,
        "userMoid": args.userMoid,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getResourceReservation.
 */
export interface GetResourceReservationArgs {
    account?: inputs.GetResourceReservationAccount;
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetResourceReservationAncestor[];
    classId?: string;
    createTime?: string;
    customPermissionResources?: inputs.GetResourceReservationCustomPermissionResource[];
    description?: string;
    domainGroupMoid?: string;
    expiration?: string;
    groups?: inputs.GetResourceReservationGroup[];
    id?: string;
    identity?: inputs.GetResourceReservationIdentity;
    markFail?: boolean;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetResourceReservationParent;
    permissionResources?: inputs.GetResourceReservationPermissionResource[];
    reservationSelector?: string;
    resourceMoids?: string[];
    resourceType?: string;
    sharedScope?: string;
    status?: string;
    tags?: inputs.GetResourceReservationTag[];
    userMoid?: string;
    versionContext?: inputs.GetResourceReservationVersionContext;
}

/**
 * A collection of values returned by getResourceReservation.
 */
export interface GetResourceReservationResult {
    readonly account?: outputs.GetResourceReservationAccount;
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetResourceReservationAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly customPermissionResources?: outputs.GetResourceReservationCustomPermissionResource[];
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly expiration?: string;
    readonly groups?: outputs.GetResourceReservationGroup[];
    readonly id: string;
    readonly identity?: outputs.GetResourceReservationIdentity;
    readonly markFail?: boolean;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetResourceReservationParent;
    readonly permissionResources?: outputs.GetResourceReservationPermissionResource[];
    readonly reservationSelector?: string;
    readonly resourceMoids?: string[];
    readonly resourceType?: string;
    readonly results: outputs.GetResourceReservationResult[];
    readonly sharedScope?: string;
    readonly status?: string;
    readonly tags?: outputs.GetResourceReservationTag[];
    readonly userMoid?: string;
    readonly versionContext?: outputs.GetResourceReservationVersionContext;
}
export function getResourceReservationOutput(args?: GetResourceReservationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourceReservationResult> {
    return pulumi.output(args).apply((a: any) => getResourceReservation(a, opts))
}

/**
 * A collection of arguments for invoking getResourceReservation.
 */
export interface GetResourceReservationOutputArgs {
    account?: pulumi.Input<inputs.GetResourceReservationAccountArgs>;
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetResourceReservationAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    customPermissionResources?: pulumi.Input<pulumi.Input<inputs.GetResourceReservationCustomPermissionResourceArgs>[]>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    expiration?: pulumi.Input<string>;
    groups?: pulumi.Input<pulumi.Input<inputs.GetResourceReservationGroupArgs>[]>;
    id?: pulumi.Input<string>;
    identity?: pulumi.Input<inputs.GetResourceReservationIdentityArgs>;
    markFail?: pulumi.Input<boolean>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetResourceReservationParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetResourceReservationPermissionResourceArgs>[]>;
    reservationSelector?: pulumi.Input<string>;
    resourceMoids?: pulumi.Input<pulumi.Input<string>[]>;
    resourceType?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetResourceReservationTagArgs>[]>;
    userMoid?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetResourceReservationVersionContextArgs>;
}
