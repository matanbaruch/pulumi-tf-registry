// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNiaapiNiaMetadata(args?: GetNiaapiNiaMetadataArgs, opts?: pulumi.InvokeOptions): Promise<GetNiaapiNiaMetadataResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getNiaapiNiaMetadata:getNiaapiNiaMetadata", {
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
 * A collection of arguments for invoking getNiaapiNiaMetadata.
 */
export interface GetNiaapiNiaMetadataArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetNiaapiNiaMetadataAncestor[];
    classId?: string;
    contents?: inputs.GetNiaapiNiaMetadataContent[];
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
    parent?: inputs.GetNiaapiNiaMetadataParent;
    permissionResources?: inputs.GetNiaapiNiaMetadataPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetNiaapiNiaMetadataTag[];
    versionContext?: inputs.GetNiaapiNiaMetadataVersionContext;
}

/**
 * A collection of values returned by getNiaapiNiaMetadata.
 */
export interface GetNiaapiNiaMetadataResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetNiaapiNiaMetadataAncestor[];
    readonly classId?: string;
    readonly contents?: outputs.GetNiaapiNiaMetadataContent[];
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
    readonly parent?: outputs.GetNiaapiNiaMetadataParent;
    readonly permissionResources?: outputs.GetNiaapiNiaMetadataPermissionResource[];
    readonly results: outputs.GetNiaapiNiaMetadataResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetNiaapiNiaMetadataTag[];
    readonly versionContext?: outputs.GetNiaapiNiaMetadataVersionContext;
}
export function getNiaapiNiaMetadataOutput(args?: GetNiaapiNiaMetadataOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNiaapiNiaMetadataResult> {
    return pulumi.output(args).apply((a: any) => getNiaapiNiaMetadata(a, opts))
}

/**
 * A collection of arguments for invoking getNiaapiNiaMetadata.
 */
export interface GetNiaapiNiaMetadataOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetNiaapiNiaMetadataAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    contents?: pulumi.Input<pulumi.Input<inputs.GetNiaapiNiaMetadataContentArgs>[]>;
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
    parent?: pulumi.Input<inputs.GetNiaapiNiaMetadataParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetNiaapiNiaMetadataPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNiaapiNiaMetadataTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetNiaapiNiaMetadataVersionContextArgs>;
}
