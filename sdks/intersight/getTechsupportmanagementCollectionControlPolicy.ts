// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTechsupportmanagementCollectionControlPolicy(args?: GetTechsupportmanagementCollectionControlPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetTechsupportmanagementCollectionControlPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getTechsupportmanagementCollectionControlPolicy:getTechsupportmanagementCollectionControlPolicy", {
        "account": args.account,
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "deploymentType": args.deploymentType,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "techSupportCollection": args.techSupportCollection,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTechsupportmanagementCollectionControlPolicy.
 */
export interface GetTechsupportmanagementCollectionControlPolicyArgs {
    account?: inputs.GetTechsupportmanagementCollectionControlPolicyAccount;
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetTechsupportmanagementCollectionControlPolicyAncestor[];
    classId?: string;
    createTime?: string;
    deploymentType?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetTechsupportmanagementCollectionControlPolicyParent;
    permissionResources?: inputs.GetTechsupportmanagementCollectionControlPolicyPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetTechsupportmanagementCollectionControlPolicyTag[];
    techSupportCollection?: string;
    versionContext?: inputs.GetTechsupportmanagementCollectionControlPolicyVersionContext;
}

/**
 * A collection of values returned by getTechsupportmanagementCollectionControlPolicy.
 */
export interface GetTechsupportmanagementCollectionControlPolicyResult {
    readonly account?: outputs.GetTechsupportmanagementCollectionControlPolicyAccount;
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetTechsupportmanagementCollectionControlPolicyAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly deploymentType?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetTechsupportmanagementCollectionControlPolicyParent;
    readonly permissionResources?: outputs.GetTechsupportmanagementCollectionControlPolicyPermissionResource[];
    readonly results: outputs.GetTechsupportmanagementCollectionControlPolicyResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetTechsupportmanagementCollectionControlPolicyTag[];
    readonly techSupportCollection?: string;
    readonly versionContext?: outputs.GetTechsupportmanagementCollectionControlPolicyVersionContext;
}
export function getTechsupportmanagementCollectionControlPolicyOutput(args?: GetTechsupportmanagementCollectionControlPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTechsupportmanagementCollectionControlPolicyResult> {
    return pulumi.output(args).apply((a: any) => getTechsupportmanagementCollectionControlPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getTechsupportmanagementCollectionControlPolicy.
 */
export interface GetTechsupportmanagementCollectionControlPolicyOutputArgs {
    account?: pulumi.Input<inputs.GetTechsupportmanagementCollectionControlPolicyAccountArgs>;
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetTechsupportmanagementCollectionControlPolicyAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deploymentType?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetTechsupportmanagementCollectionControlPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetTechsupportmanagementCollectionControlPolicyPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetTechsupportmanagementCollectionControlPolicyTagArgs>[]>;
    techSupportCollection?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetTechsupportmanagementCollectionControlPolicyVersionContextArgs>;
}
