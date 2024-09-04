// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNiatelemetryNexusDashboards(args?: GetNiatelemetryNexusDashboardsArgs, opts?: pulumi.InvokeOptions): Promise<GetNiatelemetryNexusDashboardsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getNiatelemetryNexusDashboards:getNiatelemetryNexusDashboards", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "clusterName": args.clusterName,
        "clusterUuid": args.clusterUuid,
        "createTime": args.createTime,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "isClusterHealthy": args.isClusterHealthy,
        "modTime": args.modTime,
        "moid": args.moid,
        "ndClusterSize": args.ndClusterSize,
        "ndSites": args.ndSites,
        "ndType": args.ndType,
        "ndVersion": args.ndVersion,
        "numberOfApps": args.numberOfApps,
        "numberOfInsightGroups": args.numberOfInsightGroups,
        "numberOfNirDashboards": args.numberOfNirDashboards,
        "numberOfSchemasInMso": args.numberOfSchemasInMso,
        "numberOfSitesInMso": args.numberOfSitesInMso,
        "numberOfSitesServiced": args.numberOfSitesServiced,
        "numberOfTenantsInMso": args.numberOfTenantsInMso,
        "numberOfVxlanFabricSitesInMso": args.numberOfVxlanFabricSitesInMso,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "recordType": args.recordType,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "typeOfSiteInMso": args.typeOfSiteInMso,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNiatelemetryNexusDashboards.
 */
export interface GetNiatelemetryNexusDashboardsArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetNiatelemetryNexusDashboardsAncestor[];
    classId?: string;
    clusterName?: string;
    clusterUuid?: string;
    createTime?: string;
    dn?: string;
    domainGroupMoid?: string;
    id?: string;
    isClusterHealthy?: string;
    modTime?: string;
    moid?: string;
    ndClusterSize?: number;
    ndSites?: inputs.GetNiatelemetryNexusDashboardsNdSite[];
    ndType?: string;
    ndVersion?: string;
    numberOfApps?: number;
    numberOfInsightGroups?: number;
    numberOfNirDashboards?: number;
    numberOfSchemasInMso?: number;
    numberOfSitesInMso?: number;
    numberOfSitesServiced?: number;
    numberOfTenantsInMso?: number;
    numberOfVxlanFabricSitesInMso?: number;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetNiatelemetryNexusDashboardsParent;
    permissionResources?: inputs.GetNiatelemetryNexusDashboardsPermissionResource[];
    recordType?: string;
    registeredDevice?: inputs.GetNiatelemetryNexusDashboardsRegisteredDevice;
    sharedScope?: string;
    tags?: inputs.GetNiatelemetryNexusDashboardsTag[];
    typeOfSiteInMso?: string;
    versionContext?: inputs.GetNiatelemetryNexusDashboardsVersionContext;
}

/**
 * A collection of values returned by getNiatelemetryNexusDashboards.
 */
export interface GetNiatelemetryNexusDashboardsResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetNiatelemetryNexusDashboardsAncestor[];
    readonly classId?: string;
    readonly clusterName?: string;
    readonly clusterUuid?: string;
    readonly createTime?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly isClusterHealthy?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly ndClusterSize?: number;
    readonly ndSites?: outputs.GetNiatelemetryNexusDashboardsNdSite[];
    readonly ndType?: string;
    readonly ndVersion?: string;
    readonly numberOfApps?: number;
    readonly numberOfInsightGroups?: number;
    readonly numberOfNirDashboards?: number;
    readonly numberOfSchemasInMso?: number;
    readonly numberOfSitesInMso?: number;
    readonly numberOfSitesServiced?: number;
    readonly numberOfTenantsInMso?: number;
    readonly numberOfVxlanFabricSitesInMso?: number;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetNiatelemetryNexusDashboardsParent;
    readonly permissionResources?: outputs.GetNiatelemetryNexusDashboardsPermissionResource[];
    readonly recordType?: string;
    readonly registeredDevice?: outputs.GetNiatelemetryNexusDashboardsRegisteredDevice;
    readonly results: outputs.GetNiatelemetryNexusDashboardsResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetNiatelemetryNexusDashboardsTag[];
    readonly typeOfSiteInMso?: string;
    readonly versionContext?: outputs.GetNiatelemetryNexusDashboardsVersionContext;
}
export function getNiatelemetryNexusDashboardsOutput(args?: GetNiatelemetryNexusDashboardsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNiatelemetryNexusDashboardsResult> {
    return pulumi.output(args).apply((a: any) => getNiatelemetryNexusDashboards(a, opts))
}

/**
 * A collection of arguments for invoking getNiatelemetryNexusDashboards.
 */
export interface GetNiatelemetryNexusDashboardsOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryNexusDashboardsAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    clusterName?: pulumi.Input<string>;
    clusterUuid?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    isClusterHealthy?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    ndClusterSize?: pulumi.Input<number>;
    ndSites?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryNexusDashboardsNdSiteArgs>[]>;
    ndType?: pulumi.Input<string>;
    ndVersion?: pulumi.Input<string>;
    numberOfApps?: pulumi.Input<number>;
    numberOfInsightGroups?: pulumi.Input<number>;
    numberOfNirDashboards?: pulumi.Input<number>;
    numberOfSchemasInMso?: pulumi.Input<number>;
    numberOfSitesInMso?: pulumi.Input<number>;
    numberOfSitesServiced?: pulumi.Input<number>;
    numberOfTenantsInMso?: pulumi.Input<number>;
    numberOfVxlanFabricSitesInMso?: pulumi.Input<number>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetNiatelemetryNexusDashboardsParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryNexusDashboardsPermissionResourceArgs>[]>;
    recordType?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetNiatelemetryNexusDashboardsRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryNexusDashboardsTagArgs>[]>;
    typeOfSiteInMso?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetNiatelemetryNexusDashboardsVersionContextArgs>;
}
