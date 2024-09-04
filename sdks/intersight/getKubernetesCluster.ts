// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKubernetesCluster(args?: GetKubernetesClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesClusterResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getKubernetesCluster:getKubernetesCluster", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "clusterAddonProfile": args.clusterAddonProfile,
        "connectionStatus": args.connectionStatus,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "kubeConfig": args.kubeConfig,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "registeredDevices": args.registeredDevices,
        "sharedScope": args.sharedScope,
        "status": args.status,
        "storageClusters": args.storageClusters,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKubernetesCluster.
 */
export interface GetKubernetesClusterArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetKubernetesClusterAncestor[];
    classId?: string;
    clusterAddonProfile?: inputs.GetKubernetesClusterClusterAddonProfile;
    connectionStatus?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    kubeConfig?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetKubernetesClusterOrganization;
    owners?: string[];
    parent?: inputs.GetKubernetesClusterParent;
    permissionResources?: inputs.GetKubernetesClusterPermissionResource[];
    registeredDevices?: inputs.GetKubernetesClusterRegisteredDevice[];
    sharedScope?: string;
    status?: string;
    storageClusters?: inputs.GetKubernetesClusterStorageCluster[];
    tags?: inputs.GetKubernetesClusterTag[];
    versionContext?: inputs.GetKubernetesClusterVersionContext;
}

/**
 * A collection of values returned by getKubernetesCluster.
 */
export interface GetKubernetesClusterResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetKubernetesClusterAncestor[];
    readonly classId?: string;
    readonly clusterAddonProfile?: outputs.GetKubernetesClusterClusterAddonProfile;
    readonly connectionStatus?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly kubeConfig?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetKubernetesClusterOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetKubernetesClusterParent;
    readonly permissionResources?: outputs.GetKubernetesClusterPermissionResource[];
    readonly registeredDevices?: outputs.GetKubernetesClusterRegisteredDevice[];
    readonly results: outputs.GetKubernetesClusterResult[];
    readonly sharedScope?: string;
    readonly status?: string;
    readonly storageClusters?: outputs.GetKubernetesClusterStorageCluster[];
    readonly tags?: outputs.GetKubernetesClusterTag[];
    readonly versionContext?: outputs.GetKubernetesClusterVersionContext;
}
export function getKubernetesClusterOutput(args?: GetKubernetesClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubernetesClusterResult> {
    return pulumi.output(args).apply((a: any) => getKubernetesCluster(a, opts))
}

/**
 * A collection of arguments for invoking getKubernetesCluster.
 */
export interface GetKubernetesClusterOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetKubernetesClusterAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    clusterAddonProfile?: pulumi.Input<inputs.GetKubernetesClusterClusterAddonProfileArgs>;
    connectionStatus?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    kubeConfig?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetKubernetesClusterOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetKubernetesClusterParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetKubernetesClusterPermissionResourceArgs>[]>;
    registeredDevices?: pulumi.Input<pulumi.Input<inputs.GetKubernetesClusterRegisteredDeviceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    storageClusters?: pulumi.Input<pulumi.Input<inputs.GetKubernetesClusterStorageClusterArgs>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetKubernetesClusterTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetKubernetesClusterVersionContextArgs>;
}
