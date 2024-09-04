// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHyperflexClusterBackupPolicy(args?: GetHyperflexClusterBackupPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperflexClusterBackupPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getHyperflexClusterBackupPolicy:getHyperflexClusterBackupPolicy", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "backupDataStoreName": args.backupDataStoreName,
        "backupDataStoreSize": args.backupDataStoreSize,
        "backupDataStoreSizeUnit": args.backupDataStoreSizeUnit,
        "backupTarget": args.backupTarget,
        "classId": args.classId,
        "clusterProfiles": args.clusterProfiles,
        "createTime": args.createTime,
        "dataStoreEncryptionEnabled": args.dataStoreEncryptionEnabled,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "localSnapshotRetentionCount": args.localSnapshotRetentionCount,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "replicationPairNamePrefix": args.replicationPairNamePrefix,
        "replicationSchedule": args.replicationSchedule,
        "sharedScope": args.sharedScope,
        "snapshotRetentionCount": args.snapshotRetentionCount,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHyperflexClusterBackupPolicy.
 */
export interface GetHyperflexClusterBackupPolicyArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetHyperflexClusterBackupPolicyAncestor[];
    backupDataStoreName?: string;
    backupDataStoreSize?: number;
    backupDataStoreSizeUnit?: string;
    backupTarget?: inputs.GetHyperflexClusterBackupPolicyBackupTarget;
    classId?: string;
    clusterProfiles?: inputs.GetHyperflexClusterBackupPolicyClusterProfile[];
    createTime?: string;
    dataStoreEncryptionEnabled?: boolean;
    description?: string;
    domainGroupMoid?: string;
    id?: string;
    localSnapshotRetentionCount?: number;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetHyperflexClusterBackupPolicyOrganization;
    owners?: string[];
    parent?: inputs.GetHyperflexClusterBackupPolicyParent;
    permissionResources?: inputs.GetHyperflexClusterBackupPolicyPermissionResource[];
    replicationPairNamePrefix?: string;
    replicationSchedule?: inputs.GetHyperflexClusterBackupPolicyReplicationSchedule;
    sharedScope?: string;
    snapshotRetentionCount?: number;
    tags?: inputs.GetHyperflexClusterBackupPolicyTag[];
    versionContext?: inputs.GetHyperflexClusterBackupPolicyVersionContext;
}

/**
 * A collection of values returned by getHyperflexClusterBackupPolicy.
 */
export interface GetHyperflexClusterBackupPolicyResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetHyperflexClusterBackupPolicyAncestor[];
    readonly backupDataStoreName?: string;
    readonly backupDataStoreSize?: number;
    readonly backupDataStoreSizeUnit?: string;
    readonly backupTarget?: outputs.GetHyperflexClusterBackupPolicyBackupTarget;
    readonly classId?: string;
    readonly clusterProfiles?: outputs.GetHyperflexClusterBackupPolicyClusterProfile[];
    readonly createTime?: string;
    readonly dataStoreEncryptionEnabled?: boolean;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly localSnapshotRetentionCount?: number;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetHyperflexClusterBackupPolicyOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetHyperflexClusterBackupPolicyParent;
    readonly permissionResources?: outputs.GetHyperflexClusterBackupPolicyPermissionResource[];
    readonly replicationPairNamePrefix?: string;
    readonly replicationSchedule?: outputs.GetHyperflexClusterBackupPolicyReplicationSchedule;
    readonly results: outputs.GetHyperflexClusterBackupPolicyResult[];
    readonly sharedScope?: string;
    readonly snapshotRetentionCount?: number;
    readonly tags?: outputs.GetHyperflexClusterBackupPolicyTag[];
    readonly versionContext?: outputs.GetHyperflexClusterBackupPolicyVersionContext;
}
export function getHyperflexClusterBackupPolicyOutput(args?: GetHyperflexClusterBackupPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHyperflexClusterBackupPolicyResult> {
    return pulumi.output(args).apply((a: any) => getHyperflexClusterBackupPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getHyperflexClusterBackupPolicy.
 */
export interface GetHyperflexClusterBackupPolicyOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetHyperflexClusterBackupPolicyAncestorArgs>[]>;
    backupDataStoreName?: pulumi.Input<string>;
    backupDataStoreSize?: pulumi.Input<number>;
    backupDataStoreSizeUnit?: pulumi.Input<string>;
    backupTarget?: pulumi.Input<inputs.GetHyperflexClusterBackupPolicyBackupTargetArgs>;
    classId?: pulumi.Input<string>;
    clusterProfiles?: pulumi.Input<pulumi.Input<inputs.GetHyperflexClusterBackupPolicyClusterProfileArgs>[]>;
    createTime?: pulumi.Input<string>;
    dataStoreEncryptionEnabled?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    localSnapshotRetentionCount?: pulumi.Input<number>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetHyperflexClusterBackupPolicyOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetHyperflexClusterBackupPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetHyperflexClusterBackupPolicyPermissionResourceArgs>[]>;
    replicationPairNamePrefix?: pulumi.Input<string>;
    replicationSchedule?: pulumi.Input<inputs.GetHyperflexClusterBackupPolicyReplicationScheduleArgs>;
    sharedScope?: pulumi.Input<string>;
    snapshotRetentionCount?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetHyperflexClusterBackupPolicyTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetHyperflexClusterBackupPolicyVersionContextArgs>;
}
