// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIamEndPointUserPolicyInventory(args?: GetIamEndPointUserPolicyInventoryArgs, opts?: pulumi.InvokeOptions): Promise<GetIamEndPointUserPolicyInventoryResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getIamEndPointUserPolicyInventory:getIamEndPointUserPolicyInventory", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "deviceMoId": args.deviceMoId,
        "domainGroupMoid": args.domainGroupMoid,
        "endPointUserRoles": args.endPointUserRoles,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "passwordProperties": args.passwordProperties,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "targetMo": args.targetMo,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamEndPointUserPolicyInventory.
 */
export interface GetIamEndPointUserPolicyInventoryArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetIamEndPointUserPolicyInventoryAncestor[];
    classId?: string;
    createTime?: string;
    description?: string;
    deviceMoId?: string;
    domainGroupMoid?: string;
    endPointUserRoles?: inputs.GetIamEndPointUserPolicyInventoryEndPointUserRole[];
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetIamEndPointUserPolicyInventoryParent;
    passwordProperties?: inputs.GetIamEndPointUserPolicyInventoryPasswordProperties;
    permissionResources?: inputs.GetIamEndPointUserPolicyInventoryPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetIamEndPointUserPolicyInventoryTag[];
    targetMo?: inputs.GetIamEndPointUserPolicyInventoryTargetMo;
    versionContext?: inputs.GetIamEndPointUserPolicyInventoryVersionContext;
}

/**
 * A collection of values returned by getIamEndPointUserPolicyInventory.
 */
export interface GetIamEndPointUserPolicyInventoryResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetIamEndPointUserPolicyInventoryAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly deviceMoId?: string;
    readonly domainGroupMoid?: string;
    readonly endPointUserRoles?: outputs.GetIamEndPointUserPolicyInventoryEndPointUserRole[];
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetIamEndPointUserPolicyInventoryParent;
    readonly passwordProperties?: outputs.GetIamEndPointUserPolicyInventoryPasswordProperties;
    readonly permissionResources?: outputs.GetIamEndPointUserPolicyInventoryPermissionResource[];
    readonly results: outputs.GetIamEndPointUserPolicyInventoryResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetIamEndPointUserPolicyInventoryTag[];
    readonly targetMo?: outputs.GetIamEndPointUserPolicyInventoryTargetMo;
    readonly versionContext?: outputs.GetIamEndPointUserPolicyInventoryVersionContext;
}
export function getIamEndPointUserPolicyInventoryOutput(args?: GetIamEndPointUserPolicyInventoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamEndPointUserPolicyInventoryResult> {
    return pulumi.output(args).apply((a: any) => getIamEndPointUserPolicyInventory(a, opts))
}

/**
 * A collection of arguments for invoking getIamEndPointUserPolicyInventory.
 */
export interface GetIamEndPointUserPolicyInventoryOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetIamEndPointUserPolicyInventoryAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    endPointUserRoles?: pulumi.Input<pulumi.Input<inputs.GetIamEndPointUserPolicyInventoryEndPointUserRoleArgs>[]>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetIamEndPointUserPolicyInventoryParentArgs>;
    passwordProperties?: pulumi.Input<inputs.GetIamEndPointUserPolicyInventoryPasswordPropertiesArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetIamEndPointUserPolicyInventoryPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetIamEndPointUserPolicyInventoryTagArgs>[]>;
    targetMo?: pulumi.Input<inputs.GetIamEndPointUserPolicyInventoryTargetMoArgs>;
    versionContext?: pulumi.Input<inputs.GetIamEndPointUserPolicyInventoryVersionContextArgs>;
}
