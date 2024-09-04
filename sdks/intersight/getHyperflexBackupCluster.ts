// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHyperflexBackupCluster(args?: GetHyperflexBackupClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperflexBackupClusterResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getHyperflexBackupCluster:getHyperflexBackupCluster", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "backupDataStore": args.backupDataStore,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "srcCluster": args.srcCluster,
        "srcClusterUuid": args.srcClusterUuid,
        "tags": args.tags,
        "tgtCluster": args.tgtCluster,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHyperflexBackupCluster.
 */
export interface GetHyperflexBackupClusterArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetHyperflexBackupClusterAncestor[];
    backupDataStore?: string;
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetHyperflexBackupClusterParent;
    permissionResources?: inputs.GetHyperflexBackupClusterPermissionResource[];
    sharedScope?: string;
    srcCluster?: inputs.GetHyperflexBackupClusterSrcCluster;
    srcClusterUuid?: string;
    tags?: inputs.GetHyperflexBackupClusterTag[];
    tgtCluster?: inputs.GetHyperflexBackupClusterTgtCluster;
    versionContext?: inputs.GetHyperflexBackupClusterVersionContext;
}

/**
 * A collection of values returned by getHyperflexBackupCluster.
 */
export interface GetHyperflexBackupClusterResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetHyperflexBackupClusterAncestor[];
    readonly backupDataStore?: string;
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetHyperflexBackupClusterParent;
    readonly permissionResources?: outputs.GetHyperflexBackupClusterPermissionResource[];
    readonly results: outputs.GetHyperflexBackupClusterResult[];
    readonly sharedScope?: string;
    readonly srcCluster?: outputs.GetHyperflexBackupClusterSrcCluster;
    readonly srcClusterUuid?: string;
    readonly tags?: outputs.GetHyperflexBackupClusterTag[];
    readonly tgtCluster?: outputs.GetHyperflexBackupClusterTgtCluster;
    readonly versionContext?: outputs.GetHyperflexBackupClusterVersionContext;
}
export function getHyperflexBackupClusterOutput(args?: GetHyperflexBackupClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHyperflexBackupClusterResult> {
    return pulumi.output(args).apply((a: any) => getHyperflexBackupCluster(a, opts))
}

/**
 * A collection of arguments for invoking getHyperflexBackupCluster.
 */
export interface GetHyperflexBackupClusterOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetHyperflexBackupClusterAncestorArgs>[]>;
    backupDataStore?: pulumi.Input<string>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetHyperflexBackupClusterParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetHyperflexBackupClusterPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    srcCluster?: pulumi.Input<inputs.GetHyperflexBackupClusterSrcClusterArgs>;
    srcClusterUuid?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetHyperflexBackupClusterTagArgs>[]>;
    tgtCluster?: pulumi.Input<inputs.GetHyperflexBackupClusterTgtClusterArgs>;
    versionContext?: pulumi.Input<inputs.GetHyperflexBackupClusterVersionContextArgs>;
}
