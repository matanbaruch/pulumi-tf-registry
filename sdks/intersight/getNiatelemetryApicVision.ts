// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNiatelemetryApicVision(args?: GetNiatelemetryApicVisionArgs, opts?: pulumi.InvokeOptions): Promise<GetNiatelemetryApicVisionResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getNiatelemetryApicVision:getNiatelemetryApicVision", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "apicVisionState": args.apicVisionState,
        "apicVisionStateLastUpdateTs": args.apicVisionStateLastUpdateTs,
        "apicVisionVersion": args.apicVisionVersion,
        "classId": args.classId,
        "configIssues": args.configIssues,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNiatelemetryApicVision.
 */
export interface GetNiatelemetryApicVisionArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetNiatelemetryApicVisionAncestor[];
    apicVisionState?: string;
    apicVisionStateLastUpdateTs?: string;
    apicVisionVersion?: string;
    classId?: string;
    configIssues?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetNiatelemetryApicVisionParent;
    permissionResources?: inputs.GetNiatelemetryApicVisionPermissionResource[];
    registeredDevice?: inputs.GetNiatelemetryApicVisionRegisteredDevice;
    sharedScope?: string;
    tags?: inputs.GetNiatelemetryApicVisionTag[];
    versionContext?: inputs.GetNiatelemetryApicVisionVersionContext;
}

/**
 * A collection of values returned by getNiatelemetryApicVision.
 */
export interface GetNiatelemetryApicVisionResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetNiatelemetryApicVisionAncestor[];
    readonly apicVisionState?: string;
    readonly apicVisionStateLastUpdateTs?: string;
    readonly apicVisionVersion?: string;
    readonly classId?: string;
    readonly configIssues?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetNiatelemetryApicVisionParent;
    readonly permissionResources?: outputs.GetNiatelemetryApicVisionPermissionResource[];
    readonly registeredDevice?: outputs.GetNiatelemetryApicVisionRegisteredDevice;
    readonly results: outputs.GetNiatelemetryApicVisionResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetNiatelemetryApicVisionTag[];
    readonly versionContext?: outputs.GetNiatelemetryApicVisionVersionContext;
}
export function getNiatelemetryApicVisionOutput(args?: GetNiatelemetryApicVisionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNiatelemetryApicVisionResult> {
    return pulumi.output(args).apply((a: any) => getNiatelemetryApicVision(a, opts))
}

/**
 * A collection of arguments for invoking getNiatelemetryApicVision.
 */
export interface GetNiatelemetryApicVisionOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryApicVisionAncestorArgs>[]>;
    apicVisionState?: pulumi.Input<string>;
    apicVisionStateLastUpdateTs?: pulumi.Input<string>;
    apicVisionVersion?: pulumi.Input<string>;
    classId?: pulumi.Input<string>;
    configIssues?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetNiatelemetryApicVisionParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryApicVisionPermissionResourceArgs>[]>;
    registeredDevice?: pulumi.Input<inputs.GetNiatelemetryApicVisionRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryApicVisionTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetNiatelemetryApicVisionVersionContextArgs>;
}
