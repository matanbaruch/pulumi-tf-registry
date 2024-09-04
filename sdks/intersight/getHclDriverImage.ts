// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHclDriverImage(args?: GetHclDriverImageArgs, opts?: pulumi.InvokeOptions): Promise<GetHclDriverImageResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getHclDriverImage:getHclDriverImage", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "driverIsoUrl": args.driverIsoUrl,
        "id": args.id,
        "managementType": args.managementType,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "serverPid": args.serverPid,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHclDriverImage.
 */
export interface GetHclDriverImageArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetHclDriverImageAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    driverIsoUrl?: string;
    id?: string;
    managementType?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetHclDriverImageParent;
    permissionResources?: inputs.GetHclDriverImagePermissionResource[];
    serverPid?: string;
    sharedScope?: string;
    tags?: inputs.GetHclDriverImageTag[];
    versionContext?: inputs.GetHclDriverImageVersionContext;
}

/**
 * A collection of values returned by getHclDriverImage.
 */
export interface GetHclDriverImageResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetHclDriverImageAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly driverIsoUrl?: string;
    readonly id: string;
    readonly managementType?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetHclDriverImageParent;
    readonly permissionResources?: outputs.GetHclDriverImagePermissionResource[];
    readonly results: outputs.GetHclDriverImageResult[];
    readonly serverPid?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetHclDriverImageTag[];
    readonly versionContext?: outputs.GetHclDriverImageVersionContext;
}
export function getHclDriverImageOutput(args?: GetHclDriverImageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHclDriverImageResult> {
    return pulumi.output(args).apply((a: any) => getHclDriverImage(a, opts))
}

/**
 * A collection of arguments for invoking getHclDriverImage.
 */
export interface GetHclDriverImageOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetHclDriverImageAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    driverIsoUrl?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    managementType?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetHclDriverImageParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetHclDriverImagePermissionResourceArgs>[]>;
    serverPid?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetHclDriverImageTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetHclDriverImageVersionContextArgs>;
}
