// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIamUserPreference(args?: GetIamUserPreferenceArgs, opts?: pulumi.InvokeOptions): Promise<GetIamUserPreferenceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getIamUserPreference:getIamUserPreference", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "idp": args.idp,
        "idpReference": args.idpReference,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "preference": args.preference,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "userUniqueIdentifier": args.userUniqueIdentifier,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamUserPreference.
 */
export interface GetIamUserPreferenceArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetIamUserPreferenceAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    idp?: inputs.GetIamUserPreferenceIdp;
    idpReference?: inputs.GetIamUserPreferenceIdpReference;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetIamUserPreferenceParent;
    permissionResources?: inputs.GetIamUserPreferencePermissionResource[];
    preference?: string;
    sharedScope?: string;
    tags?: inputs.GetIamUserPreferenceTag[];
    userUniqueIdentifier?: string;
    versionContext?: inputs.GetIamUserPreferenceVersionContext;
}

/**
 * A collection of values returned by getIamUserPreference.
 */
export interface GetIamUserPreferenceResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetIamUserPreferenceAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly idp?: outputs.GetIamUserPreferenceIdp;
    readonly idpReference?: outputs.GetIamUserPreferenceIdpReference;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetIamUserPreferenceParent;
    readonly permissionResources?: outputs.GetIamUserPreferencePermissionResource[];
    readonly preference?: string;
    readonly results: outputs.GetIamUserPreferenceResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetIamUserPreferenceTag[];
    readonly userUniqueIdentifier?: string;
    readonly versionContext?: outputs.GetIamUserPreferenceVersionContext;
}
export function getIamUserPreferenceOutput(args?: GetIamUserPreferenceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamUserPreferenceResult> {
    return pulumi.output(args).apply((a: any) => getIamUserPreference(a, opts))
}

/**
 * A collection of arguments for invoking getIamUserPreference.
 */
export interface GetIamUserPreferenceOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetIamUserPreferenceAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    idp?: pulumi.Input<inputs.GetIamUserPreferenceIdpArgs>;
    idpReference?: pulumi.Input<inputs.GetIamUserPreferenceIdpReferenceArgs>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetIamUserPreferenceParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetIamUserPreferencePermissionResourceArgs>[]>;
    preference?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetIamUserPreferenceTagArgs>[]>;
    userUniqueIdentifier?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetIamUserPreferenceVersionContextArgs>;
}
