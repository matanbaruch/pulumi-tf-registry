// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHyperflexClusterNetworkPolicy(args?: GetHyperflexClusterNetworkPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperflexClusterNetworkPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getHyperflexClusterNetworkPolicy:getHyperflexClusterNetworkPolicy", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "cimcManagementMode": args.cimcManagementMode,
        "classId": args.classId,
        "clusterProfiles": args.clusterProfiles,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "jumboFrame": args.jumboFrame,
        "kvmIpRange": args.kvmIpRange,
        "macPrefixRange": args.macPrefixRange,
        "mgmtVlan": args.mgmtVlan,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "uplinkSpeed": args.uplinkSpeed,
        "versionContext": args.versionContext,
        "vmMigrationVlan": args.vmMigrationVlan,
        "vmNetworkVlans": args.vmNetworkVlans,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHyperflexClusterNetworkPolicy.
 */
export interface GetHyperflexClusterNetworkPolicyArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetHyperflexClusterNetworkPolicyAncestor[];
    cimcManagementMode?: string;
    classId?: string;
    clusterProfiles?: inputs.GetHyperflexClusterNetworkPolicyClusterProfile[];
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    id?: string;
    jumboFrame?: boolean;
    kvmIpRange?: inputs.GetHyperflexClusterNetworkPolicyKvmIpRange;
    macPrefixRange?: inputs.GetHyperflexClusterNetworkPolicyMacPrefixRange;
    mgmtVlan?: inputs.GetHyperflexClusterNetworkPolicyMgmtVlan;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetHyperflexClusterNetworkPolicyOrganization;
    owners?: string[];
    parent?: inputs.GetHyperflexClusterNetworkPolicyParent;
    permissionResources?: inputs.GetHyperflexClusterNetworkPolicyPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetHyperflexClusterNetworkPolicyTag[];
    uplinkSpeed?: string;
    versionContext?: inputs.GetHyperflexClusterNetworkPolicyVersionContext;
    vmMigrationVlan?: inputs.GetHyperflexClusterNetworkPolicyVmMigrationVlan;
    vmNetworkVlans?: inputs.GetHyperflexClusterNetworkPolicyVmNetworkVlan[];
}

/**
 * A collection of values returned by getHyperflexClusterNetworkPolicy.
 */
export interface GetHyperflexClusterNetworkPolicyResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetHyperflexClusterNetworkPolicyAncestor[];
    readonly cimcManagementMode?: string;
    readonly classId?: string;
    readonly clusterProfiles?: outputs.GetHyperflexClusterNetworkPolicyClusterProfile[];
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly jumboFrame?: boolean;
    readonly kvmIpRange?: outputs.GetHyperflexClusterNetworkPolicyKvmIpRange;
    readonly macPrefixRange?: outputs.GetHyperflexClusterNetworkPolicyMacPrefixRange;
    readonly mgmtVlan?: outputs.GetHyperflexClusterNetworkPolicyMgmtVlan;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetHyperflexClusterNetworkPolicyOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetHyperflexClusterNetworkPolicyParent;
    readonly permissionResources?: outputs.GetHyperflexClusterNetworkPolicyPermissionResource[];
    readonly results: outputs.GetHyperflexClusterNetworkPolicyResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetHyperflexClusterNetworkPolicyTag[];
    readonly uplinkSpeed?: string;
    readonly versionContext?: outputs.GetHyperflexClusterNetworkPolicyVersionContext;
    readonly vmMigrationVlan?: outputs.GetHyperflexClusterNetworkPolicyVmMigrationVlan;
    readonly vmNetworkVlans?: outputs.GetHyperflexClusterNetworkPolicyVmNetworkVlan[];
}
export function getHyperflexClusterNetworkPolicyOutput(args?: GetHyperflexClusterNetworkPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHyperflexClusterNetworkPolicyResult> {
    return pulumi.output(args).apply((a: any) => getHyperflexClusterNetworkPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getHyperflexClusterNetworkPolicy.
 */
export interface GetHyperflexClusterNetworkPolicyOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetHyperflexClusterNetworkPolicyAncestorArgs>[]>;
    cimcManagementMode?: pulumi.Input<string>;
    classId?: pulumi.Input<string>;
    clusterProfiles?: pulumi.Input<pulumi.Input<inputs.GetHyperflexClusterNetworkPolicyClusterProfileArgs>[]>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    jumboFrame?: pulumi.Input<boolean>;
    kvmIpRange?: pulumi.Input<inputs.GetHyperflexClusterNetworkPolicyKvmIpRangeArgs>;
    macPrefixRange?: pulumi.Input<inputs.GetHyperflexClusterNetworkPolicyMacPrefixRangeArgs>;
    mgmtVlan?: pulumi.Input<inputs.GetHyperflexClusterNetworkPolicyMgmtVlanArgs>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetHyperflexClusterNetworkPolicyOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetHyperflexClusterNetworkPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetHyperflexClusterNetworkPolicyPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetHyperflexClusterNetworkPolicyTagArgs>[]>;
    uplinkSpeed?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetHyperflexClusterNetworkPolicyVersionContextArgs>;
    vmMigrationVlan?: pulumi.Input<inputs.GetHyperflexClusterNetworkPolicyVmMigrationVlanArgs>;
    vmNetworkVlans?: pulumi.Input<pulumi.Input<inputs.GetHyperflexClusterNetworkPolicyVmNetworkVlanArgs>[]>;
}
