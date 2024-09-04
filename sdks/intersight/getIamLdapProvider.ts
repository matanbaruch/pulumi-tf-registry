// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIamLdapProvider(args?: GetIamLdapProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetIamLdapProviderResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getIamLdapProvider:getIamLdapProvider", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "ldapPolicy": args.ldapPolicy,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "port": args.port,
        "server": args.server,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamLdapProvider.
 */
export interface GetIamLdapProviderArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetIamLdapProviderAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    ldapPolicy?: inputs.GetIamLdapProviderLdapPolicy;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetIamLdapProviderParent;
    permissionResources?: inputs.GetIamLdapProviderPermissionResource[];
    port?: number;
    server?: string;
    sharedScope?: string;
    tags?: inputs.GetIamLdapProviderTag[];
    versionContext?: inputs.GetIamLdapProviderVersionContext;
}

/**
 * A collection of values returned by getIamLdapProvider.
 */
export interface GetIamLdapProviderResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetIamLdapProviderAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly ldapPolicy?: outputs.GetIamLdapProviderLdapPolicy;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetIamLdapProviderParent;
    readonly permissionResources?: outputs.GetIamLdapProviderPermissionResource[];
    readonly port?: number;
    readonly results: outputs.GetIamLdapProviderResult[];
    readonly server?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetIamLdapProviderTag[];
    readonly versionContext?: outputs.GetIamLdapProviderVersionContext;
}
export function getIamLdapProviderOutput(args?: GetIamLdapProviderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamLdapProviderResult> {
    return pulumi.output(args).apply((a: any) => getIamLdapProvider(a, opts))
}

/**
 * A collection of arguments for invoking getIamLdapProvider.
 */
export interface GetIamLdapProviderOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetIamLdapProviderAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ldapPolicy?: pulumi.Input<inputs.GetIamLdapProviderLdapPolicyArgs>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetIamLdapProviderParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetIamLdapProviderPermissionResourceArgs>[]>;
    port?: pulumi.Input<number>;
    server?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetIamLdapProviderTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetIamLdapProviderVersionContextArgs>;
}
