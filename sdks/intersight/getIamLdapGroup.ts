// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIamLdapGroup(args?: GetIamLdapGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetIamLdapGroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getIamLdapGroup:getIamLdapGroup", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domain": args.domain,
        "domainGroupMoid": args.domainGroupMoid,
        "endPointRoles": args.endPointRoles,
        "id": args.id,
        "ldapPolicy": args.ldapPolicy,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamLdapGroup.
 */
export interface GetIamLdapGroupArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetIamLdapGroupAncestor[];
    classId?: string;
    createTime?: string;
    domain?: string;
    domainGroupMoid?: string;
    endPointRoles?: inputs.GetIamLdapGroupEndPointRole[];
    id?: string;
    ldapPolicy?: inputs.GetIamLdapGroupLdapPolicy;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetIamLdapGroupParent;
    permissionResources?: inputs.GetIamLdapGroupPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetIamLdapGroupTag[];
    versionContext?: inputs.GetIamLdapGroupVersionContext;
}

/**
 * A collection of values returned by getIamLdapGroup.
 */
export interface GetIamLdapGroupResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetIamLdapGroupAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domain?: string;
    readonly domainGroupMoid?: string;
    readonly endPointRoles?: outputs.GetIamLdapGroupEndPointRole[];
    readonly id: string;
    readonly ldapPolicy?: outputs.GetIamLdapGroupLdapPolicy;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetIamLdapGroupParent;
    readonly permissionResources?: outputs.GetIamLdapGroupPermissionResource[];
    readonly results: outputs.GetIamLdapGroupResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetIamLdapGroupTag[];
    readonly versionContext?: outputs.GetIamLdapGroupVersionContext;
}
export function getIamLdapGroupOutput(args?: GetIamLdapGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamLdapGroupResult> {
    return pulumi.output(args).apply((a: any) => getIamLdapGroup(a, opts))
}

/**
 * A collection of arguments for invoking getIamLdapGroup.
 */
export interface GetIamLdapGroupOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetIamLdapGroupAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domain?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    endPointRoles?: pulumi.Input<pulumi.Input<inputs.GetIamLdapGroupEndPointRoleArgs>[]>;
    id?: pulumi.Input<string>;
    ldapPolicy?: pulumi.Input<inputs.GetIamLdapGroupLdapPolicyArgs>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetIamLdapGroupParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetIamLdapGroupPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetIamLdapGroupTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetIamLdapGroupVersionContextArgs>;
}
