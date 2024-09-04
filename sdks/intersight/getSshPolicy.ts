// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSshPolicy(args?: GetSshPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetSshPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getSshPolicy:getSshPolicy", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "enabled": args.enabled,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "port": args.port,
        "profiles": args.profiles,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "timeout": args.timeout,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSshPolicy.
 */
export interface GetSshPolicyArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetSshPolicyAncestor[];
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    enabled?: boolean;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetSshPolicyOrganization;
    owners?: string[];
    parent?: inputs.GetSshPolicyParent;
    permissionResources?: inputs.GetSshPolicyPermissionResource[];
    port?: number;
    profiles?: inputs.GetSshPolicyProfile[];
    sharedScope?: string;
    tags?: inputs.GetSshPolicyTag[];
    timeout?: number;
    versionContext?: inputs.GetSshPolicyVersionContext;
}

/**
 * A collection of values returned by getSshPolicy.
 */
export interface GetSshPolicyResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetSshPolicyAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly enabled?: boolean;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetSshPolicyOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetSshPolicyParent;
    readonly permissionResources?: outputs.GetSshPolicyPermissionResource[];
    readonly port?: number;
    readonly profiles?: outputs.GetSshPolicyProfile[];
    readonly results: outputs.GetSshPolicyResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetSshPolicyTag[];
    readonly timeout?: number;
    readonly versionContext?: outputs.GetSshPolicyVersionContext;
}
export function getSshPolicyOutput(args?: GetSshPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSshPolicyResult> {
    return pulumi.output(args).apply((a: any) => getSshPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getSshPolicy.
 */
export interface GetSshPolicyOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetSshPolicyAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetSshPolicyOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetSshPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetSshPolicyPermissionResourceArgs>[]>;
    port?: pulumi.Input<number>;
    profiles?: pulumi.Input<pulumi.Input<inputs.GetSshPolicyProfileArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetSshPolicyTagArgs>[]>;
    timeout?: pulumi.Input<number>;
    versionContext?: pulumi.Input<inputs.GetSshPolicyVersionContextArgs>;
}
