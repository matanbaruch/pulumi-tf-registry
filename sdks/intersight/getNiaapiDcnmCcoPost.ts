// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNiaapiDcnmCcoPost(args?: GetNiaapiDcnmCcoPostArgs, opts?: pulumi.InvokeOptions): Promise<GetNiaapiDcnmCcoPostResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getNiaapiDcnmCcoPost:getNiaapiDcnmCcoPost", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "postDate": args.postDate,
        "postDetail": args.postDetail,
        "postType": args.postType,
        "postid": args.postid,
        "revision": args.revision,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNiaapiDcnmCcoPost.
 */
export interface GetNiaapiDcnmCcoPostArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetNiaapiDcnmCcoPostAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetNiaapiDcnmCcoPostParent;
    permissionResources?: inputs.GetNiaapiDcnmCcoPostPermissionResource[];
    postDate?: string;
    postDetail?: inputs.GetNiaapiDcnmCcoPostPostDetail;
    postType?: string;
    postid?: string;
    revision?: string;
    sharedScope?: string;
    tags?: inputs.GetNiaapiDcnmCcoPostTag[];
    versionContext?: inputs.GetNiaapiDcnmCcoPostVersionContext;
}

/**
 * A collection of values returned by getNiaapiDcnmCcoPost.
 */
export interface GetNiaapiDcnmCcoPostResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetNiaapiDcnmCcoPostAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetNiaapiDcnmCcoPostParent;
    readonly permissionResources?: outputs.GetNiaapiDcnmCcoPostPermissionResource[];
    readonly postDate?: string;
    readonly postDetail?: outputs.GetNiaapiDcnmCcoPostPostDetail;
    readonly postType?: string;
    readonly postid?: string;
    readonly results: outputs.GetNiaapiDcnmCcoPostResult[];
    readonly revision?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetNiaapiDcnmCcoPostTag[];
    readonly versionContext?: outputs.GetNiaapiDcnmCcoPostVersionContext;
}
export function getNiaapiDcnmCcoPostOutput(args?: GetNiaapiDcnmCcoPostOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNiaapiDcnmCcoPostResult> {
    return pulumi.output(args).apply((a: any) => getNiaapiDcnmCcoPost(a, opts))
}

/**
 * A collection of arguments for invoking getNiaapiDcnmCcoPost.
 */
export interface GetNiaapiDcnmCcoPostOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetNiaapiDcnmCcoPostAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetNiaapiDcnmCcoPostParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetNiaapiDcnmCcoPostPermissionResourceArgs>[]>;
    postDate?: pulumi.Input<string>;
    postDetail?: pulumi.Input<inputs.GetNiaapiDcnmCcoPostPostDetailArgs>;
    postType?: pulumi.Input<string>;
    postid?: pulumi.Input<string>;
    revision?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNiaapiDcnmCcoPostTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetNiaapiDcnmCcoPostVersionContextArgs>;
}
