// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFirmwareDistributable(args?: GetFirmwareDistributableArgs, opts?: pulumi.InvokeOptions): Promise<GetFirmwareDistributableResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getFirmwareDistributable:getFirmwareDistributable", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "bundleType": args.bundleType,
        "catalog": args.catalog,
        "classId": args.classId,
        "componentMetas": args.componentMetas,
        "createTime": args.createTime,
        "description": args.description,
        "distributableMetas": args.distributableMetas,
        "domainGroupMoid": args.domainGroupMoid,
        "downloadCount": args.downloadCount,
        "featureSource": args.featureSource,
        "fileLocation": args.fileLocation,
        "guid": args.guid,
        "id": args.id,
        "imageCategory": args.imageCategory,
        "imageType": args.imageType,
        "importAction": args.importAction,
        "importState": args.importState,
        "importedTime": args.importedTime,
        "lastAccessTime": args.lastAccessTime,
        "md5eTag": args.md5eTag,
        "md5sum": args.md5sum,
        "mdfid": args.mdfid,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "name": args.name,
        "nrSource": args.nrSource,
        "nrVersion": args.nrVersion,
        "objectType": args.objectType,
        "origin": args.origin,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "platformType": args.platformType,
        "recommendedBuild": args.recommendedBuild,
        "release": args.release,
        "releaseDate": args.releaseDate,
        "releaseNotesUrl": args.releaseNotesUrl,
        "sha512sum": args.sha512sum,
        "sharedScope": args.sharedScope,
        "size": args.size,
        "softwareAdvisoryUrl": args.softwareAdvisoryUrl,
        "softwareTypeId": args.softwareTypeId,
        "supportedModels": args.supportedModels,
        "tags": args.tags,
        "vendor": args.vendor,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirmwareDistributable.
 */
export interface GetFirmwareDistributableArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetFirmwareDistributableAncestor[];
    bundleType?: string;
    catalog?: inputs.GetFirmwareDistributableCatalog;
    classId?: string;
    componentMetas?: inputs.GetFirmwareDistributableComponentMeta[];
    createTime?: string;
    description?: string;
    distributableMetas?: inputs.GetFirmwareDistributableDistributableMeta[];
    domainGroupMoid?: string;
    downloadCount?: number;
    featureSource?: string;
    fileLocation?: string;
    guid?: string;
    id?: string;
    imageCategory?: string;
    imageType?: string;
    importAction?: string;
    importState?: string;
    importedTime?: string;
    lastAccessTime?: string;
    md5eTag?: string;
    md5sum?: string;
    mdfid?: string;
    modTime?: string;
    model?: string;
    moid?: string;
    name?: string;
    nrSource?: inputs.GetFirmwareDistributableNrSource;
    nrVersion?: string;
    objectType?: string;
    origin?: string;
    owners?: string[];
    parent?: inputs.GetFirmwareDistributableParent;
    permissionResources?: inputs.GetFirmwareDistributablePermissionResource[];
    platformType?: string;
    recommendedBuild?: string;
    release?: inputs.GetFirmwareDistributableRelease;
    releaseDate?: string;
    releaseNotesUrl?: string;
    sha512sum?: string;
    sharedScope?: string;
    size?: number;
    softwareAdvisoryUrl?: string;
    softwareTypeId?: string;
    supportedModels?: string[];
    tags?: inputs.GetFirmwareDistributableTag[];
    vendor?: string;
    versionContext?: inputs.GetFirmwareDistributableVersionContext;
}

/**
 * A collection of values returned by getFirmwareDistributable.
 */
export interface GetFirmwareDistributableResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetFirmwareDistributableAncestor[];
    readonly bundleType?: string;
    readonly catalog?: outputs.GetFirmwareDistributableCatalog;
    readonly classId?: string;
    readonly componentMetas?: outputs.GetFirmwareDistributableComponentMeta[];
    readonly createTime?: string;
    readonly description?: string;
    readonly distributableMetas?: outputs.GetFirmwareDistributableDistributableMeta[];
    readonly domainGroupMoid?: string;
    readonly downloadCount?: number;
    readonly featureSource?: string;
    readonly fileLocation?: string;
    readonly guid?: string;
    readonly id: string;
    readonly imageCategory?: string;
    readonly imageType?: string;
    readonly importAction?: string;
    readonly importState?: string;
    readonly importedTime?: string;
    readonly lastAccessTime?: string;
    readonly md5eTag?: string;
    readonly md5sum?: string;
    readonly mdfid?: string;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly nrSource?: outputs.GetFirmwareDistributableNrSource;
    readonly nrVersion?: string;
    readonly objectType?: string;
    readonly origin?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetFirmwareDistributableParent;
    readonly permissionResources?: outputs.GetFirmwareDistributablePermissionResource[];
    readonly platformType?: string;
    readonly recommendedBuild?: string;
    readonly release?: outputs.GetFirmwareDistributableRelease;
    readonly releaseDate?: string;
    readonly releaseNotesUrl?: string;
    readonly results: outputs.GetFirmwareDistributableResult[];
    readonly sha512sum?: string;
    readonly sharedScope?: string;
    readonly size?: number;
    readonly softwareAdvisoryUrl?: string;
    readonly softwareTypeId?: string;
    readonly supportedModels?: string[];
    readonly tags?: outputs.GetFirmwareDistributableTag[];
    readonly vendor?: string;
    readonly versionContext?: outputs.GetFirmwareDistributableVersionContext;
}
export function getFirmwareDistributableOutput(args?: GetFirmwareDistributableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirmwareDistributableResult> {
    return pulumi.output(args).apply((a: any) => getFirmwareDistributable(a, opts))
}

/**
 * A collection of arguments for invoking getFirmwareDistributable.
 */
export interface GetFirmwareDistributableOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetFirmwareDistributableAncestorArgs>[]>;
    bundleType?: pulumi.Input<string>;
    catalog?: pulumi.Input<inputs.GetFirmwareDistributableCatalogArgs>;
    classId?: pulumi.Input<string>;
    componentMetas?: pulumi.Input<pulumi.Input<inputs.GetFirmwareDistributableComponentMetaArgs>[]>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    distributableMetas?: pulumi.Input<pulumi.Input<inputs.GetFirmwareDistributableDistributableMetaArgs>[]>;
    domainGroupMoid?: pulumi.Input<string>;
    downloadCount?: pulumi.Input<number>;
    featureSource?: pulumi.Input<string>;
    fileLocation?: pulumi.Input<string>;
    guid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    imageCategory?: pulumi.Input<string>;
    imageType?: pulumi.Input<string>;
    importAction?: pulumi.Input<string>;
    importState?: pulumi.Input<string>;
    importedTime?: pulumi.Input<string>;
    lastAccessTime?: pulumi.Input<string>;
    md5eTag?: pulumi.Input<string>;
    md5sum?: pulumi.Input<string>;
    mdfid?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nrSource?: pulumi.Input<inputs.GetFirmwareDistributableNrSourceArgs>;
    nrVersion?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    origin?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetFirmwareDistributableParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetFirmwareDistributablePermissionResourceArgs>[]>;
    platformType?: pulumi.Input<string>;
    recommendedBuild?: pulumi.Input<string>;
    release?: pulumi.Input<inputs.GetFirmwareDistributableReleaseArgs>;
    releaseDate?: pulumi.Input<string>;
    releaseNotesUrl?: pulumi.Input<string>;
    sha512sum?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    size?: pulumi.Input<number>;
    softwareAdvisoryUrl?: pulumi.Input<string>;
    softwareTypeId?: pulumi.Input<string>;
    supportedModels?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetFirmwareDistributableTagArgs>[]>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetFirmwareDistributableVersionContextArgs>;
}
