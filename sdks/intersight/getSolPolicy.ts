// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSolPolicy(args?: GetSolPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetSolPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getSolPolicy:getSolPolicy", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "baudRate": args.baudRate,
        "classId": args.classId,
        "comPort": args.comPort,
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
        "profiles": args.profiles,
        "sharedScope": args.sharedScope,
        "sshPort": args.sshPort,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSolPolicy.
 */
export interface GetSolPolicyArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetSolPolicyAncestor[];
    baudRate?: number;
    classId?: string;
    comPort?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    enabled?: boolean;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetSolPolicyOrganization;
    owners?: string[];
    parent?: inputs.GetSolPolicyParent;
    permissionResources?: inputs.GetSolPolicyPermissionResource[];
    profiles?: inputs.GetSolPolicyProfile[];
    sharedScope?: string;
    sshPort?: number;
    tags?: inputs.GetSolPolicyTag[];
    versionContext?: inputs.GetSolPolicyVersionContext;
}

/**
 * A collection of values returned by getSolPolicy.
 */
export interface GetSolPolicyResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetSolPolicyAncestor[];
    readonly baudRate?: number;
    readonly classId?: string;
    readonly comPort?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly enabled?: boolean;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetSolPolicyOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetSolPolicyParent;
    readonly permissionResources?: outputs.GetSolPolicyPermissionResource[];
    readonly profiles?: outputs.GetSolPolicyProfile[];
    readonly results: outputs.GetSolPolicyResult[];
    readonly sharedScope?: string;
    readonly sshPort?: number;
    readonly tags?: outputs.GetSolPolicyTag[];
    readonly versionContext?: outputs.GetSolPolicyVersionContext;
}
export function getSolPolicyOutput(args?: GetSolPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSolPolicyResult> {
    return pulumi.output(args).apply((a: any) => getSolPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getSolPolicy.
 */
export interface GetSolPolicyOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetSolPolicyAncestorArgs>[]>;
    baudRate?: pulumi.Input<number>;
    classId?: pulumi.Input<string>;
    comPort?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetSolPolicyOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetSolPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetSolPolicyPermissionResourceArgs>[]>;
    profiles?: pulumi.Input<pulumi.Input<inputs.GetSolPolicyProfileArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    sshPort?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetSolPolicyTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetSolPolicyVersionContextArgs>;
}
