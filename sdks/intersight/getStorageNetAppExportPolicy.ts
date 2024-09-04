// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageNetAppExportPolicy(args?: GetStorageNetAppExportPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageNetAppExportPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getStorageNetAppExportPolicy:getStorageNetAppExportPolicy", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "array": args.array,
        "classId": args.classId,
        "clusterUuid": args.clusterUuid,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "netAppExportPolicyRules": args.netAppExportPolicyRules,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "policyId": args.policyId,
        "sharedScope": args.sharedScope,
        "svmName": args.svmName,
        "tags": args.tags,
        "tenant": args.tenant,
        "uuid": args.uuid,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageNetAppExportPolicy.
 */
export interface GetStorageNetAppExportPolicyArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetStorageNetAppExportPolicyAncestor[];
    array?: inputs.GetStorageNetAppExportPolicyArray;
    classId?: string;
    clusterUuid?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    netAppExportPolicyRules?: inputs.GetStorageNetAppExportPolicyNetAppExportPolicyRule[];
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetStorageNetAppExportPolicyParent;
    permissionResources?: inputs.GetStorageNetAppExportPolicyPermissionResource[];
    policyId?: number;
    sharedScope?: string;
    svmName?: string;
    tags?: inputs.GetStorageNetAppExportPolicyTag[];
    tenant?: inputs.GetStorageNetAppExportPolicyTenant;
    uuid?: string;
    versionContext?: inputs.GetStorageNetAppExportPolicyVersionContext;
}

/**
 * A collection of values returned by getStorageNetAppExportPolicy.
 */
export interface GetStorageNetAppExportPolicyResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetStorageNetAppExportPolicyAncestor[];
    readonly array?: outputs.GetStorageNetAppExportPolicyArray;
    readonly classId?: string;
    readonly clusterUuid?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly netAppExportPolicyRules?: outputs.GetStorageNetAppExportPolicyNetAppExportPolicyRule[];
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetStorageNetAppExportPolicyParent;
    readonly permissionResources?: outputs.GetStorageNetAppExportPolicyPermissionResource[];
    readonly policyId?: number;
    readonly results: outputs.GetStorageNetAppExportPolicyResult[];
    readonly sharedScope?: string;
    readonly svmName?: string;
    readonly tags?: outputs.GetStorageNetAppExportPolicyTag[];
    readonly tenant?: outputs.GetStorageNetAppExportPolicyTenant;
    readonly uuid?: string;
    readonly versionContext?: outputs.GetStorageNetAppExportPolicyVersionContext;
}
export function getStorageNetAppExportPolicyOutput(args?: GetStorageNetAppExportPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageNetAppExportPolicyResult> {
    return pulumi.output(args).apply((a: any) => getStorageNetAppExportPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getStorageNetAppExportPolicy.
 */
export interface GetStorageNetAppExportPolicyOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppExportPolicyAncestorArgs>[]>;
    array?: pulumi.Input<inputs.GetStorageNetAppExportPolicyArrayArgs>;
    classId?: pulumi.Input<string>;
    clusterUuid?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    netAppExportPolicyRules?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppExportPolicyNetAppExportPolicyRuleArgs>[]>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetStorageNetAppExportPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppExportPolicyPermissionResourceArgs>[]>;
    policyId?: pulumi.Input<number>;
    sharedScope?: pulumi.Input<string>;
    svmName?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppExportPolicyTagArgs>[]>;
    tenant?: pulumi.Input<inputs.GetStorageNetAppExportPolicyTenantArgs>;
    uuid?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetStorageNetAppExportPolicyVersionContextArgs>;
}
