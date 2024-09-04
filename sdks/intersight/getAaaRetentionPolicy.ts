// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAaaRetentionPolicy(args?: GetAaaRetentionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetAaaRetentionPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getAaaRetentionPolicy:getAaaRetentionPolicy", {
        "account": args.account,
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "retentionPeriod": args.retentionPeriod,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAaaRetentionPolicy.
 */
export interface GetAaaRetentionPolicyArgs {
    account?: inputs.GetAaaRetentionPolicyAccount;
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetAaaRetentionPolicyAncestor[];
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetAaaRetentionPolicyParent;
    permissionResources?: inputs.GetAaaRetentionPolicyPermissionResource[];
    retentionPeriod?: number;
    sharedScope?: string;
    tags?: inputs.GetAaaRetentionPolicyTag[];
    versionContext?: inputs.GetAaaRetentionPolicyVersionContext;
}

/**
 * A collection of values returned by getAaaRetentionPolicy.
 */
export interface GetAaaRetentionPolicyResult {
    readonly account?: outputs.GetAaaRetentionPolicyAccount;
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetAaaRetentionPolicyAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetAaaRetentionPolicyParent;
    readonly permissionResources?: outputs.GetAaaRetentionPolicyPermissionResource[];
    readonly results: outputs.GetAaaRetentionPolicyResult[];
    readonly retentionPeriod?: number;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetAaaRetentionPolicyTag[];
    readonly versionContext?: outputs.GetAaaRetentionPolicyVersionContext;
}
export function getAaaRetentionPolicyOutput(args?: GetAaaRetentionPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAaaRetentionPolicyResult> {
    return pulumi.output(args).apply((a: any) => getAaaRetentionPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getAaaRetentionPolicy.
 */
export interface GetAaaRetentionPolicyOutputArgs {
    account?: pulumi.Input<inputs.GetAaaRetentionPolicyAccountArgs>;
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetAaaRetentionPolicyAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetAaaRetentionPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetAaaRetentionPolicyPermissionResourceArgs>[]>;
    retentionPeriod?: pulumi.Input<number>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetAaaRetentionPolicyTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetAaaRetentionPolicyVersionContextArgs>;
}
