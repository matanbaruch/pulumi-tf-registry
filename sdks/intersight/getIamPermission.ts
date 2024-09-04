// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIamPermission(args?: GetIamPermissionArgs, opts?: pulumi.InvokeOptions): Promise<GetIamPermissionResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getIamPermission:getIamPermission", {
        "account": args.account,
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "endPointRoles": args.endPointRoles,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "privilegeSets": args.privilegeSets,
        "resourceRoles": args.resourceRoles,
        "roles": args.roles,
        "sessionLimits": args.sessionLimits,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "userGroups": args.userGroups,
        "users": args.users,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamPermission.
 */
export interface GetIamPermissionArgs {
    account?: inputs.GetIamPermissionAccount;
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetIamPermissionAncestor[];
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    endPointRoles?: inputs.GetIamPermissionEndPointRole[];
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetIamPermissionParent;
    permissionResources?: inputs.GetIamPermissionPermissionResource[];
    privilegeSets?: inputs.GetIamPermissionPrivilegeSet[];
    resourceRoles?: inputs.GetIamPermissionResourceRole[];
    roles?: inputs.GetIamPermissionRole[];
    sessionLimits?: inputs.GetIamPermissionSessionLimits;
    sharedScope?: string;
    tags?: inputs.GetIamPermissionTag[];
    userGroups?: inputs.GetIamPermissionUserGroup[];
    users?: inputs.GetIamPermissionUser[];
    versionContext?: inputs.GetIamPermissionVersionContext;
}

/**
 * A collection of values returned by getIamPermission.
 */
export interface GetIamPermissionResult {
    readonly account?: outputs.GetIamPermissionAccount;
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetIamPermissionAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly endPointRoles?: outputs.GetIamPermissionEndPointRole[];
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetIamPermissionParent;
    readonly permissionResources?: outputs.GetIamPermissionPermissionResource[];
    readonly privilegeSets?: outputs.GetIamPermissionPrivilegeSet[];
    readonly resourceRoles?: outputs.GetIamPermissionResourceRole[];
    readonly results: outputs.GetIamPermissionResult[];
    readonly roles?: outputs.GetIamPermissionRole[];
    readonly sessionLimits?: outputs.GetIamPermissionSessionLimits;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetIamPermissionTag[];
    readonly userGroups?: outputs.GetIamPermissionUserGroup[];
    readonly users?: outputs.GetIamPermissionUser[];
    readonly versionContext?: outputs.GetIamPermissionVersionContext;
}
export function getIamPermissionOutput(args?: GetIamPermissionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamPermissionResult> {
    return pulumi.output(args).apply((a: any) => getIamPermission(a, opts))
}

/**
 * A collection of arguments for invoking getIamPermission.
 */
export interface GetIamPermissionOutputArgs {
    account?: pulumi.Input<inputs.GetIamPermissionAccountArgs>;
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetIamPermissionAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    endPointRoles?: pulumi.Input<pulumi.Input<inputs.GetIamPermissionEndPointRoleArgs>[]>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetIamPermissionParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetIamPermissionPermissionResourceArgs>[]>;
    privilegeSets?: pulumi.Input<pulumi.Input<inputs.GetIamPermissionPrivilegeSetArgs>[]>;
    resourceRoles?: pulumi.Input<pulumi.Input<inputs.GetIamPermissionResourceRoleArgs>[]>;
    roles?: pulumi.Input<pulumi.Input<inputs.GetIamPermissionRoleArgs>[]>;
    sessionLimits?: pulumi.Input<inputs.GetIamPermissionSessionLimitsArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetIamPermissionTagArgs>[]>;
    userGroups?: pulumi.Input<pulumi.Input<inputs.GetIamPermissionUserGroupArgs>[]>;
    users?: pulumi.Input<pulumi.Input<inputs.GetIamPermissionUserArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetIamPermissionVersionContextArgs>;
}
