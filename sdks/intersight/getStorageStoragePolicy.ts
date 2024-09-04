// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageStoragePolicy(args?: GetStorageStoragePolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageStoragePolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getStorageStoragePolicy:getStorageStoragePolicy", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "defaultDriveMode": args.defaultDriveMode,
        "description": args.description,
        "directAttachedNvmeSlots": args.directAttachedNvmeSlots,
        "domainGroupMoid": args.domainGroupMoid,
        "driveGroups": args.driveGroups,
        "globalHotSpares": args.globalHotSpares,
        "id": args.id,
        "m2VirtualDrive": args.m2VirtualDrive,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "profiles": args.profiles,
        "raid0Drive": args.raid0Drive,
        "raidAttachedNvmeSlots": args.raidAttachedNvmeSlots,
        "secureJbods": args.secureJbods,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "unusedDisksState": args.unusedDisksState,
        "useJbodForVdCreation": args.useJbodForVdCreation,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageStoragePolicy.
 */
export interface GetStorageStoragePolicyArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetStorageStoragePolicyAncestor[];
    classId?: string;
    createTime?: string;
    defaultDriveMode?: string;
    description?: string;
    directAttachedNvmeSlots?: string;
    domainGroupMoid?: string;
    driveGroups?: inputs.GetStorageStoragePolicyDriveGroup[];
    globalHotSpares?: string;
    id?: string;
    m2VirtualDrive?: inputs.GetStorageStoragePolicyM2VirtualDrive;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetStorageStoragePolicyOrganization;
    owners?: string[];
    parent?: inputs.GetStorageStoragePolicyParent;
    permissionResources?: inputs.GetStorageStoragePolicyPermissionResource[];
    profiles?: inputs.GetStorageStoragePolicyProfile[];
    raid0Drive?: inputs.GetStorageStoragePolicyRaid0Drive;
    raidAttachedNvmeSlots?: string;
    secureJbods?: string;
    sharedScope?: string;
    tags?: inputs.GetStorageStoragePolicyTag[];
    unusedDisksState?: string;
    useJbodForVdCreation?: boolean;
    versionContext?: inputs.GetStorageStoragePolicyVersionContext;
}

/**
 * A collection of values returned by getStorageStoragePolicy.
 */
export interface GetStorageStoragePolicyResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetStorageStoragePolicyAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly defaultDriveMode?: string;
    readonly description?: string;
    readonly directAttachedNvmeSlots?: string;
    readonly domainGroupMoid?: string;
    readonly driveGroups?: outputs.GetStorageStoragePolicyDriveGroup[];
    readonly globalHotSpares?: string;
    readonly id: string;
    readonly m2VirtualDrive?: outputs.GetStorageStoragePolicyM2VirtualDrive;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetStorageStoragePolicyOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetStorageStoragePolicyParent;
    readonly permissionResources?: outputs.GetStorageStoragePolicyPermissionResource[];
    readonly profiles?: outputs.GetStorageStoragePolicyProfile[];
    readonly raid0Drive?: outputs.GetStorageStoragePolicyRaid0Drive;
    readonly raidAttachedNvmeSlots?: string;
    readonly results: outputs.GetStorageStoragePolicyResult[];
    readonly secureJbods?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetStorageStoragePolicyTag[];
    readonly unusedDisksState?: string;
    readonly useJbodForVdCreation?: boolean;
    readonly versionContext?: outputs.GetStorageStoragePolicyVersionContext;
}
export function getStorageStoragePolicyOutput(args?: GetStorageStoragePolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageStoragePolicyResult> {
    return pulumi.output(args).apply((a: any) => getStorageStoragePolicy(a, opts))
}

/**
 * A collection of arguments for invoking getStorageStoragePolicy.
 */
export interface GetStorageStoragePolicyOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetStorageStoragePolicyAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    defaultDriveMode?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    directAttachedNvmeSlots?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    driveGroups?: pulumi.Input<pulumi.Input<inputs.GetStorageStoragePolicyDriveGroupArgs>[]>;
    globalHotSpares?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    m2VirtualDrive?: pulumi.Input<inputs.GetStorageStoragePolicyM2VirtualDriveArgs>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetStorageStoragePolicyOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetStorageStoragePolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetStorageStoragePolicyPermissionResourceArgs>[]>;
    profiles?: pulumi.Input<pulumi.Input<inputs.GetStorageStoragePolicyProfileArgs>[]>;
    raid0Drive?: pulumi.Input<inputs.GetStorageStoragePolicyRaid0DriveArgs>;
    raidAttachedNvmeSlots?: pulumi.Input<string>;
    secureJbods?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetStorageStoragePolicyTagArgs>[]>;
    unusedDisksState?: pulumi.Input<string>;
    useJbodForVdCreation?: pulumi.Input<boolean>;
    versionContext?: pulumi.Input<inputs.GetStorageStoragePolicyVersionContextArgs>;
}
