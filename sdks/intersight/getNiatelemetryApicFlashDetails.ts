// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNiatelemetryApicFlashDetails(args?: GetNiatelemetryApicFlashDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetNiatelemetryApicFlashDetailsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getNiatelemetryApicFlashDetails:getNiatelemetryApicFlashDetails", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "modelNumber": args.modelNumber,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "recordType": args.recordType,
        "recordVersion": args.recordVersion,
        "registeredDevice": args.registeredDevice,
        "revision": args.revision,
        "serialNumber": args.serialNumber,
        "sharedScope": args.sharedScope,
        "siteName": args.siteName,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNiatelemetryApicFlashDetails.
 */
export interface GetNiatelemetryApicFlashDetailsArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetNiatelemetryApicFlashDetailsAncestor[];
    classId?: string;
    createTime?: string;
    dn?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    modelNumber?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetNiatelemetryApicFlashDetailsParent;
    permissionResources?: inputs.GetNiatelemetryApicFlashDetailsPermissionResource[];
    recordType?: string;
    recordVersion?: string;
    registeredDevice?: inputs.GetNiatelemetryApicFlashDetailsRegisteredDevice;
    revision?: string;
    serialNumber?: string;
    sharedScope?: string;
    siteName?: string;
    tags?: inputs.GetNiatelemetryApicFlashDetailsTag[];
    versionContext?: inputs.GetNiatelemetryApicFlashDetailsVersionContext;
}

/**
 * A collection of values returned by getNiatelemetryApicFlashDetails.
 */
export interface GetNiatelemetryApicFlashDetailsResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetNiatelemetryApicFlashDetailsAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly modelNumber?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetNiatelemetryApicFlashDetailsParent;
    readonly permissionResources?: outputs.GetNiatelemetryApicFlashDetailsPermissionResource[];
    readonly recordType?: string;
    readonly recordVersion?: string;
    readonly registeredDevice?: outputs.GetNiatelemetryApicFlashDetailsRegisteredDevice;
    readonly results: outputs.GetNiatelemetryApicFlashDetailsResult[];
    readonly revision?: string;
    readonly serialNumber?: string;
    readonly sharedScope?: string;
    readonly siteName?: string;
    readonly tags?: outputs.GetNiatelemetryApicFlashDetailsTag[];
    readonly versionContext?: outputs.GetNiatelemetryApicFlashDetailsVersionContext;
}
export function getNiatelemetryApicFlashDetailsOutput(args?: GetNiatelemetryApicFlashDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNiatelemetryApicFlashDetailsResult> {
    return pulumi.output(args).apply((a: any) => getNiatelemetryApicFlashDetails(a, opts))
}

/**
 * A collection of arguments for invoking getNiatelemetryApicFlashDetails.
 */
export interface GetNiatelemetryApicFlashDetailsOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryApicFlashDetailsAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    modelNumber?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetNiatelemetryApicFlashDetailsParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryApicFlashDetailsPermissionResourceArgs>[]>;
    recordType?: pulumi.Input<string>;
    recordVersion?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetNiatelemetryApicFlashDetailsRegisteredDeviceArgs>;
    revision?: pulumi.Input<string>;
    serialNumber?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    siteName?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryApicFlashDetailsTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetNiatelemetryApicFlashDetailsVersionContextArgs>;
}
