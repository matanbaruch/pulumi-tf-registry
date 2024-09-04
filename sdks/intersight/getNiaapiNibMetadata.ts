// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNiaapiNibMetadata(args?: GetNiaapiNibMetadataArgs, opts?: pulumi.InvokeOptions): Promise<GetNiaapiNibMetadataResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getNiaapiNibMetadata:getNiaapiNibMetadata", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "contents": args.contents,
        "createTime": args.createTime,
        "date": args.date,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "metadataChksum": args.metadataChksum,
        "metadataFilename": args.metadataFilename,
        "modTime": args.modTime,
        "moid": args.moid,
        "nrVersion": args.nrVersion,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNiaapiNibMetadata.
 */
export interface GetNiaapiNibMetadataArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetNiaapiNibMetadataAncestor[];
    classId?: string;
    contents?: inputs.GetNiaapiNibMetadataContent[];
    createTime?: string;
    date?: string;
    domainGroupMoid?: string;
    id?: string;
    metadataChksum?: string;
    metadataFilename?: string;
    modTime?: string;
    moid?: string;
    nrVersion?: number;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetNiaapiNibMetadataParent;
    permissionResources?: inputs.GetNiaapiNibMetadataPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetNiaapiNibMetadataTag[];
    versionContext?: inputs.GetNiaapiNibMetadataVersionContext;
}

/**
 * A collection of values returned by getNiaapiNibMetadata.
 */
export interface GetNiaapiNibMetadataResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetNiaapiNibMetadataAncestor[];
    readonly classId?: string;
    readonly contents?: outputs.GetNiaapiNibMetadataContent[];
    readonly createTime?: string;
    readonly date?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly metadataChksum?: string;
    readonly metadataFilename?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly nrVersion?: number;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetNiaapiNibMetadataParent;
    readonly permissionResources?: outputs.GetNiaapiNibMetadataPermissionResource[];
    readonly results: outputs.GetNiaapiNibMetadataResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetNiaapiNibMetadataTag[];
    readonly versionContext?: outputs.GetNiaapiNibMetadataVersionContext;
}
export function getNiaapiNibMetadataOutput(args?: GetNiaapiNibMetadataOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNiaapiNibMetadataResult> {
    return pulumi.output(args).apply((a: any) => getNiaapiNibMetadata(a, opts))
}

/**
 * A collection of arguments for invoking getNiaapiNibMetadata.
 */
export interface GetNiaapiNibMetadataOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetNiaapiNibMetadataAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    contents?: pulumi.Input<pulumi.Input<inputs.GetNiaapiNibMetadataContentArgs>[]>;
    createTime?: pulumi.Input<string>;
    date?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    metadataChksum?: pulumi.Input<string>;
    metadataFilename?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    nrVersion?: pulumi.Input<number>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetNiaapiNibMetadataParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetNiaapiNibMetadataPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNiaapiNibMetadataTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetNiaapiNibMetadataVersionContextArgs>;
}
