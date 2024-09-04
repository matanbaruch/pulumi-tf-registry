// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHyperflexSoftwareVersionPolicy(args?: GetHyperflexSoftwareVersionPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperflexSoftwareVersionPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getHyperflexSoftwareVersionPolicy:getHyperflexSoftwareVersionPolicy", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "clusterProfiles": args.clusterProfiles,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "hxdpVersion": args.hxdpVersion,
        "hxdpVersionInfo": args.hxdpVersionInfo,
        "hypervisorVersion": args.hypervisorVersion,
        "hypervisorVersionInfo": args.hypervisorVersionInfo,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "serverFirmwareVersion": args.serverFirmwareVersion,
        "serverFirmwareVersionInfo": args.serverFirmwareVersionInfo,
        "serverFirmwareVersions": args.serverFirmwareVersions,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "upgradeTypes": args.upgradeTypes,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHyperflexSoftwareVersionPolicy.
 */
export interface GetHyperflexSoftwareVersionPolicyArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetHyperflexSoftwareVersionPolicyAncestor[];
    classId?: string;
    clusterProfiles?: inputs.GetHyperflexSoftwareVersionPolicyClusterProfile[];
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    hxdpVersion?: string;
    hxdpVersionInfo?: inputs.GetHyperflexSoftwareVersionPolicyHxdpVersionInfo;
    hypervisorVersion?: string;
    hypervisorVersionInfo?: inputs.GetHyperflexSoftwareVersionPolicyHypervisorVersionInfo;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetHyperflexSoftwareVersionPolicyOrganization;
    owners?: string[];
    parent?: inputs.GetHyperflexSoftwareVersionPolicyParent;
    permissionResources?: inputs.GetHyperflexSoftwareVersionPolicyPermissionResource[];
    serverFirmwareVersion?: string;
    serverFirmwareVersionInfo?: inputs.GetHyperflexSoftwareVersionPolicyServerFirmwareVersionInfo;
    serverFirmwareVersions?: inputs.GetHyperflexSoftwareVersionPolicyServerFirmwareVersion[];
    sharedScope?: string;
    tags?: inputs.GetHyperflexSoftwareVersionPolicyTag[];
    upgradeTypes?: string[];
    versionContext?: inputs.GetHyperflexSoftwareVersionPolicyVersionContext;
}

/**
 * A collection of values returned by getHyperflexSoftwareVersionPolicy.
 */
export interface GetHyperflexSoftwareVersionPolicyResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetHyperflexSoftwareVersionPolicyAncestor[];
    readonly classId?: string;
    readonly clusterProfiles?: outputs.GetHyperflexSoftwareVersionPolicyClusterProfile[];
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly hxdpVersion?: string;
    readonly hxdpVersionInfo?: outputs.GetHyperflexSoftwareVersionPolicyHxdpVersionInfo;
    readonly hypervisorVersion?: string;
    readonly hypervisorVersionInfo?: outputs.GetHyperflexSoftwareVersionPolicyHypervisorVersionInfo;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetHyperflexSoftwareVersionPolicyOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetHyperflexSoftwareVersionPolicyParent;
    readonly permissionResources?: outputs.GetHyperflexSoftwareVersionPolicyPermissionResource[];
    readonly results: outputs.GetHyperflexSoftwareVersionPolicyResult[];
    readonly serverFirmwareVersion?: string;
    readonly serverFirmwareVersionInfo?: outputs.GetHyperflexSoftwareVersionPolicyServerFirmwareVersionInfo;
    readonly serverFirmwareVersions?: outputs.GetHyperflexSoftwareVersionPolicyServerFirmwareVersion[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetHyperflexSoftwareVersionPolicyTag[];
    readonly upgradeTypes?: string[];
    readonly versionContext?: outputs.GetHyperflexSoftwareVersionPolicyVersionContext;
}
export function getHyperflexSoftwareVersionPolicyOutput(args?: GetHyperflexSoftwareVersionPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHyperflexSoftwareVersionPolicyResult> {
    return pulumi.output(args).apply((a: any) => getHyperflexSoftwareVersionPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getHyperflexSoftwareVersionPolicy.
 */
export interface GetHyperflexSoftwareVersionPolicyOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetHyperflexSoftwareVersionPolicyAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    clusterProfiles?: pulumi.Input<pulumi.Input<inputs.GetHyperflexSoftwareVersionPolicyClusterProfileArgs>[]>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    hxdpVersion?: pulumi.Input<string>;
    hxdpVersionInfo?: pulumi.Input<inputs.GetHyperflexSoftwareVersionPolicyHxdpVersionInfoArgs>;
    hypervisorVersion?: pulumi.Input<string>;
    hypervisorVersionInfo?: pulumi.Input<inputs.GetHyperflexSoftwareVersionPolicyHypervisorVersionInfoArgs>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetHyperflexSoftwareVersionPolicyOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetHyperflexSoftwareVersionPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetHyperflexSoftwareVersionPolicyPermissionResourceArgs>[]>;
    serverFirmwareVersion?: pulumi.Input<string>;
    serverFirmwareVersionInfo?: pulumi.Input<inputs.GetHyperflexSoftwareVersionPolicyServerFirmwareVersionInfoArgs>;
    serverFirmwareVersions?: pulumi.Input<pulumi.Input<inputs.GetHyperflexSoftwareVersionPolicyServerFirmwareVersionArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetHyperflexSoftwareVersionPolicyTagArgs>[]>;
    upgradeTypes?: pulumi.Input<pulumi.Input<string>[]>;
    versionContext?: pulumi.Input<inputs.GetHyperflexSoftwareVersionPolicyVersionContextArgs>;
}
