// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIamPrivateKeySpec(args?: GetIamPrivateKeySpecArgs, opts?: pulumi.InvokeOptions): Promise<GetIamPrivateKeySpecResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getIamPrivateKeySpec:getIamPrivateKeySpec", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "algorithm": args.algorithm,
        "ancestors": args.ancestors,
        "certificateRequest": args.certificateRequest,
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
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamPrivateKeySpec.
 */
export interface GetIamPrivateKeySpecArgs {
    accountMoid?: string;
    additionalProperties?: string;
    algorithm?: inputs.GetIamPrivateKeySpecAlgorithm;
    ancestors?: inputs.GetIamPrivateKeySpecAncestor[];
    certificateRequest?: inputs.GetIamPrivateKeySpecCertificateRequest;
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetIamPrivateKeySpecParent;
    permissionResources?: inputs.GetIamPrivateKeySpecPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetIamPrivateKeySpecTag[];
    versionContext?: inputs.GetIamPrivateKeySpecVersionContext;
}

/**
 * A collection of values returned by getIamPrivateKeySpec.
 */
export interface GetIamPrivateKeySpecResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly algorithm?: outputs.GetIamPrivateKeySpecAlgorithm;
    readonly ancestors?: outputs.GetIamPrivateKeySpecAncestor[];
    readonly certificateRequest?: outputs.GetIamPrivateKeySpecCertificateRequest;
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetIamPrivateKeySpecParent;
    readonly permissionResources?: outputs.GetIamPrivateKeySpecPermissionResource[];
    readonly results: outputs.GetIamPrivateKeySpecResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetIamPrivateKeySpecTag[];
    readonly versionContext?: outputs.GetIamPrivateKeySpecVersionContext;
}
export function getIamPrivateKeySpecOutput(args?: GetIamPrivateKeySpecOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamPrivateKeySpecResult> {
    return pulumi.output(args).apply((a: any) => getIamPrivateKeySpec(a, opts))
}

/**
 * A collection of arguments for invoking getIamPrivateKeySpec.
 */
export interface GetIamPrivateKeySpecOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    algorithm?: pulumi.Input<inputs.GetIamPrivateKeySpecAlgorithmArgs>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetIamPrivateKeySpecAncestorArgs>[]>;
    certificateRequest?: pulumi.Input<inputs.GetIamPrivateKeySpecCertificateRequestArgs>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetIamPrivateKeySpecParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetIamPrivateKeySpecPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetIamPrivateKeySpecTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetIamPrivateKeySpecVersionContextArgs>;
}
