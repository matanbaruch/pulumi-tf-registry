// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNiatelemetryAaaRadiusProviderDetails(args?: GetNiatelemetryAaaRadiusProviderDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetNiatelemetryAaaRadiusProviderDetailsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getNiatelemetryAaaRadiusProviderDetails:getNiatelemetryAaaRadiusProviderDetails", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "ownerKey": args.ownerKey,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "recordType": args.recordType,
        "recordVersion": args.recordVersion,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "siteName": args.siteName,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNiatelemetryAaaRadiusProviderDetails.
 */
export interface GetNiatelemetryAaaRadiusProviderDetailsArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetNiatelemetryAaaRadiusProviderDetailsAncestor[];
    classId?: string;
    createTime?: string;
    dn?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    ownerKey?: string;
    owners?: string[];
    parent?: inputs.GetNiatelemetryAaaRadiusProviderDetailsParent;
    permissionResources?: inputs.GetNiatelemetryAaaRadiusProviderDetailsPermissionResource[];
    recordType?: string;
    recordVersion?: string;
    registeredDevice?: inputs.GetNiatelemetryAaaRadiusProviderDetailsRegisteredDevice;
    sharedScope?: string;
    siteName?: string;
    tags?: inputs.GetNiatelemetryAaaRadiusProviderDetailsTag[];
    versionContext?: inputs.GetNiatelemetryAaaRadiusProviderDetailsVersionContext;
}

/**
 * A collection of values returned by getNiatelemetryAaaRadiusProviderDetails.
 */
export interface GetNiatelemetryAaaRadiusProviderDetailsResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetNiatelemetryAaaRadiusProviderDetailsAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly ownerKey?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetNiatelemetryAaaRadiusProviderDetailsParent;
    readonly permissionResources?: outputs.GetNiatelemetryAaaRadiusProviderDetailsPermissionResource[];
    readonly recordType?: string;
    readonly recordVersion?: string;
    readonly registeredDevice?: outputs.GetNiatelemetryAaaRadiusProviderDetailsRegisteredDevice;
    readonly results: outputs.GetNiatelemetryAaaRadiusProviderDetailsResult[];
    readonly sharedScope?: string;
    readonly siteName?: string;
    readonly tags?: outputs.GetNiatelemetryAaaRadiusProviderDetailsTag[];
    readonly versionContext?: outputs.GetNiatelemetryAaaRadiusProviderDetailsVersionContext;
}
export function getNiatelemetryAaaRadiusProviderDetailsOutput(args?: GetNiatelemetryAaaRadiusProviderDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNiatelemetryAaaRadiusProviderDetailsResult> {
    return pulumi.output(args).apply((a: any) => getNiatelemetryAaaRadiusProviderDetails(a, opts))
}

/**
 * A collection of arguments for invoking getNiatelemetryAaaRadiusProviderDetails.
 */
export interface GetNiatelemetryAaaRadiusProviderDetailsOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryAaaRadiusProviderDetailsAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    ownerKey?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetNiatelemetryAaaRadiusProviderDetailsParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryAaaRadiusProviderDetailsPermissionResourceArgs>[]>;
    recordType?: pulumi.Input<string>;
    recordVersion?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetNiatelemetryAaaRadiusProviderDetailsRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    siteName?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryAaaRadiusProviderDetailsTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetNiatelemetryAaaRadiusProviderDetailsVersionContextArgs>;
}
