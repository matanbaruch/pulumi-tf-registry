// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSoftwarerepositoryOperatingSystemFile(args?: GetSoftwarerepositoryOperatingSystemFileArgs, opts?: pulumi.InvokeOptions): Promise<GetSoftwarerepositoryOperatingSystemFileResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getSoftwarerepositoryOperatingSystemFile:getSoftwarerepositoryOperatingSystemFile", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "catalog": args.catalog,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "downloadCount": args.downloadCount,
        "featureSource": args.featureSource,
        "id": args.id,
        "importAction": args.importAction,
        "importState": args.importState,
        "importedTime": args.importedTime,
        "lastAccessTime": args.lastAccessTime,
        "md5eTag": args.md5eTag,
        "md5sum": args.md5sum,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "nrSource": args.nrSource,
        "nrVersion": args.nrVersion,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "releaseDate": args.releaseDate,
        "sha512sum": args.sha512sum,
        "sharedScope": args.sharedScope,
        "size": args.size,
        "softwareAdvisoryUrl": args.softwareAdvisoryUrl,
        "tags": args.tags,
        "vendor": args.vendor,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSoftwarerepositoryOperatingSystemFile.
 */
export interface GetSoftwarerepositoryOperatingSystemFileArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetSoftwarerepositoryOperatingSystemFileAncestor[];
    catalog?: inputs.GetSoftwarerepositoryOperatingSystemFileCatalog;
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    downloadCount?: number;
    featureSource?: string;
    id?: string;
    importAction?: string;
    importState?: string;
    importedTime?: string;
    lastAccessTime?: string;
    md5eTag?: string;
    md5sum?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    nrSource?: inputs.GetSoftwarerepositoryOperatingSystemFileNrSource;
    nrVersion?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetSoftwarerepositoryOperatingSystemFileParent;
    permissionResources?: inputs.GetSoftwarerepositoryOperatingSystemFilePermissionResource[];
    releaseDate?: string;
    sha512sum?: string;
    sharedScope?: string;
    size?: number;
    softwareAdvisoryUrl?: string;
    tags?: inputs.GetSoftwarerepositoryOperatingSystemFileTag[];
    vendor?: string;
    versionContext?: inputs.GetSoftwarerepositoryOperatingSystemFileVersionContext;
}

/**
 * A collection of values returned by getSoftwarerepositoryOperatingSystemFile.
 */
export interface GetSoftwarerepositoryOperatingSystemFileResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetSoftwarerepositoryOperatingSystemFileAncestor[];
    readonly catalog?: outputs.GetSoftwarerepositoryOperatingSystemFileCatalog;
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly downloadCount?: number;
    readonly featureSource?: string;
    readonly id: string;
    readonly importAction?: string;
    readonly importState?: string;
    readonly importedTime?: string;
    readonly lastAccessTime?: string;
    readonly md5eTag?: string;
    readonly md5sum?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly nrSource?: outputs.GetSoftwarerepositoryOperatingSystemFileNrSource;
    readonly nrVersion?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetSoftwarerepositoryOperatingSystemFileParent;
    readonly permissionResources?: outputs.GetSoftwarerepositoryOperatingSystemFilePermissionResource[];
    readonly releaseDate?: string;
    readonly results: outputs.GetSoftwarerepositoryOperatingSystemFileResult[];
    readonly sha512sum?: string;
    readonly sharedScope?: string;
    readonly size?: number;
    readonly softwareAdvisoryUrl?: string;
    readonly tags?: outputs.GetSoftwarerepositoryOperatingSystemFileTag[];
    readonly vendor?: string;
    readonly versionContext?: outputs.GetSoftwarerepositoryOperatingSystemFileVersionContext;
}
export function getSoftwarerepositoryOperatingSystemFileOutput(args?: GetSoftwarerepositoryOperatingSystemFileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSoftwarerepositoryOperatingSystemFileResult> {
    return pulumi.output(args).apply((a: any) => getSoftwarerepositoryOperatingSystemFile(a, opts))
}

/**
 * A collection of arguments for invoking getSoftwarerepositoryOperatingSystemFile.
 */
export interface GetSoftwarerepositoryOperatingSystemFileOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetSoftwarerepositoryOperatingSystemFileAncestorArgs>[]>;
    catalog?: pulumi.Input<inputs.GetSoftwarerepositoryOperatingSystemFileCatalogArgs>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    downloadCount?: pulumi.Input<number>;
    featureSource?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    importAction?: pulumi.Input<string>;
    importState?: pulumi.Input<string>;
    importedTime?: pulumi.Input<string>;
    lastAccessTime?: pulumi.Input<string>;
    md5eTag?: pulumi.Input<string>;
    md5sum?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nrSource?: pulumi.Input<inputs.GetSoftwarerepositoryOperatingSystemFileNrSourceArgs>;
    nrVersion?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetSoftwarerepositoryOperatingSystemFileParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetSoftwarerepositoryOperatingSystemFilePermissionResourceArgs>[]>;
    releaseDate?: pulumi.Input<string>;
    sha512sum?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    size?: pulumi.Input<number>;
    softwareAdvisoryUrl?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetSoftwarerepositoryOperatingSystemFileTagArgs>[]>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetSoftwarerepositoryOperatingSystemFileVersionContextArgs>;
}
