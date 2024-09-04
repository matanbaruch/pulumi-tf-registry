// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHyperflexProtectedCluster(args?: GetHyperflexProtectedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperflexProtectedClusterResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getHyperflexProtectedCluster:getHyperflexProtectedCluster", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "backupPolicy": args.backupPolicy,
        "classId": args.classId,
        "createTime": args.createTime,
        "datastoreStatistic": args.datastoreStatistic,
        "domainGroupMoid": args.domainGroupMoid,
        "hxVersion": args.hxVersion,
        "hypervisorVersion": args.hypervisorVersion,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "protectedDatastoreName": args.protectedDatastoreName,
        "protectedVmsCount": args.protectedVmsCount,
        "sharedScope": args.sharedScope,
        "sourceClusterName": args.sourceClusterName,
        "srcCluster": args.srcCluster,
        "tags": args.tags,
        "targetClusterName": args.targetClusterName,
        "targetDatastoreName": args.targetDatastoreName,
        "targetDatastoreUtilization": args.targetDatastoreUtilization,
        "tgtCluster": args.tgtCluster,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHyperflexProtectedCluster.
 */
export interface GetHyperflexProtectedClusterArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetHyperflexProtectedClusterAncestor[];
    backupPolicy?: inputs.GetHyperflexProtectedClusterBackupPolicy;
    classId?: string;
    createTime?: string;
    datastoreStatistic?: inputs.GetHyperflexProtectedClusterDatastoreStatistic;
    domainGroupMoid?: string;
    hxVersion?: string;
    hypervisorVersion?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetHyperflexProtectedClusterParent;
    permissionResources?: inputs.GetHyperflexProtectedClusterPermissionResource[];
    protectedDatastoreName?: string;
    protectedVmsCount?: number;
    sharedScope?: string;
    sourceClusterName?: string;
    srcCluster?: inputs.GetHyperflexProtectedClusterSrcCluster;
    tags?: inputs.GetHyperflexProtectedClusterTag[];
    targetClusterName?: string;
    targetDatastoreName?: string;
    targetDatastoreUtilization?: number;
    tgtCluster?: inputs.GetHyperflexProtectedClusterTgtCluster;
    versionContext?: inputs.GetHyperflexProtectedClusterVersionContext;
}

/**
 * A collection of values returned by getHyperflexProtectedCluster.
 */
export interface GetHyperflexProtectedClusterResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetHyperflexProtectedClusterAncestor[];
    readonly backupPolicy?: outputs.GetHyperflexProtectedClusterBackupPolicy;
    readonly classId?: string;
    readonly createTime?: string;
    readonly datastoreStatistic?: outputs.GetHyperflexProtectedClusterDatastoreStatistic;
    readonly domainGroupMoid?: string;
    readonly hxVersion?: string;
    readonly hypervisorVersion?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetHyperflexProtectedClusterParent;
    readonly permissionResources?: outputs.GetHyperflexProtectedClusterPermissionResource[];
    readonly protectedDatastoreName?: string;
    readonly protectedVmsCount?: number;
    readonly results: outputs.GetHyperflexProtectedClusterResult[];
    readonly sharedScope?: string;
    readonly sourceClusterName?: string;
    readonly srcCluster?: outputs.GetHyperflexProtectedClusterSrcCluster;
    readonly tags?: outputs.GetHyperflexProtectedClusterTag[];
    readonly targetClusterName?: string;
    readonly targetDatastoreName?: string;
    readonly targetDatastoreUtilization?: number;
    readonly tgtCluster?: outputs.GetHyperflexProtectedClusterTgtCluster;
    readonly versionContext?: outputs.GetHyperflexProtectedClusterVersionContext;
}
export function getHyperflexProtectedClusterOutput(args?: GetHyperflexProtectedClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHyperflexProtectedClusterResult> {
    return pulumi.output(args).apply((a: any) => getHyperflexProtectedCluster(a, opts))
}

/**
 * A collection of arguments for invoking getHyperflexProtectedCluster.
 */
export interface GetHyperflexProtectedClusterOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetHyperflexProtectedClusterAncestorArgs>[]>;
    backupPolicy?: pulumi.Input<inputs.GetHyperflexProtectedClusterBackupPolicyArgs>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    datastoreStatistic?: pulumi.Input<inputs.GetHyperflexProtectedClusterDatastoreStatisticArgs>;
    domainGroupMoid?: pulumi.Input<string>;
    hxVersion?: pulumi.Input<string>;
    hypervisorVersion?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetHyperflexProtectedClusterParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetHyperflexProtectedClusterPermissionResourceArgs>[]>;
    protectedDatastoreName?: pulumi.Input<string>;
    protectedVmsCount?: pulumi.Input<number>;
    sharedScope?: pulumi.Input<string>;
    sourceClusterName?: pulumi.Input<string>;
    srcCluster?: pulumi.Input<inputs.GetHyperflexProtectedClusterSrcClusterArgs>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetHyperflexProtectedClusterTagArgs>[]>;
    targetClusterName?: pulumi.Input<string>;
    targetDatastoreName?: pulumi.Input<string>;
    targetDatastoreUtilization?: pulumi.Input<number>;
    tgtCluster?: pulumi.Input<inputs.GetHyperflexProtectedClusterTgtClusterArgs>;
    versionContext?: pulumi.Input<inputs.GetHyperflexProtectedClusterVersionContextArgs>;
}
