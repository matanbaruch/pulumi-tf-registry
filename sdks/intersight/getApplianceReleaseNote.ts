// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApplianceReleaseNote(args?: GetApplianceReleaseNoteArgs, opts?: pulumi.InvokeOptions): Promise<GetApplianceReleaseNoteResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getApplianceReleaseNote:getApplianceReleaseNote", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "notes": args.notes,
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
 * A collection of arguments for invoking getApplianceReleaseNote.
 */
export interface GetApplianceReleaseNoteArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetApplianceReleaseNoteAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    notes?: inputs.GetApplianceReleaseNoteNote[];
    nrVersion?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetApplianceReleaseNoteParent;
    permissionResources?: inputs.GetApplianceReleaseNotePermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetApplianceReleaseNoteTag[];
    versionContext?: inputs.GetApplianceReleaseNoteVersionContext;
}

/**
 * A collection of values returned by getApplianceReleaseNote.
 */
export interface GetApplianceReleaseNoteResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetApplianceReleaseNoteAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly notes?: outputs.GetApplianceReleaseNoteNote[];
    readonly nrVersion?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetApplianceReleaseNoteParent;
    readonly permissionResources?: outputs.GetApplianceReleaseNotePermissionResource[];
    readonly results: outputs.GetApplianceReleaseNoteResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetApplianceReleaseNoteTag[];
    readonly versionContext?: outputs.GetApplianceReleaseNoteVersionContext;
}
export function getApplianceReleaseNoteOutput(args?: GetApplianceReleaseNoteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplianceReleaseNoteResult> {
    return pulumi.output(args).apply((a: any) => getApplianceReleaseNote(a, opts))
}

/**
 * A collection of arguments for invoking getApplianceReleaseNote.
 */
export interface GetApplianceReleaseNoteOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetApplianceReleaseNoteAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    notes?: pulumi.Input<pulumi.Input<inputs.GetApplianceReleaseNoteNoteArgs>[]>;
    nrVersion?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetApplianceReleaseNoteParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetApplianceReleaseNotePermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetApplianceReleaseNoteTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetApplianceReleaseNoteVersionContextArgs>;
}
