// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFirmwareBoardControllerDescriptor(args?: GetFirmwareBoardControllerDescriptorArgs, opts?: pulumi.InvokeOptions): Promise<GetFirmwareBoardControllerDescriptorResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getFirmwareBoardControllerDescriptor:getFirmwareBoardControllerDescriptor", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "brandString": args.brandString,
        "capabilities": args.capabilities,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "label": args.label,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "nrVersion": args.nrVersion,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "revision": args.revision,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "vendor": args.vendor,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFirmwareBoardControllerDescriptor.
 */
export interface GetFirmwareBoardControllerDescriptorArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetFirmwareBoardControllerDescriptorAncestor[];
    brandString?: string;
    capabilities?: inputs.GetFirmwareBoardControllerDescriptorCapability[];
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    id?: string;
    label?: string;
    modTime?: string;
    model?: string;
    moid?: string;
    nrVersion?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetFirmwareBoardControllerDescriptorParent;
    permissionResources?: inputs.GetFirmwareBoardControllerDescriptorPermissionResource[];
    revision?: string;
    sharedScope?: string;
    tags?: inputs.GetFirmwareBoardControllerDescriptorTag[];
    vendor?: string;
    versionContext?: inputs.GetFirmwareBoardControllerDescriptorVersionContext;
}

/**
 * A collection of values returned by getFirmwareBoardControllerDescriptor.
 */
export interface GetFirmwareBoardControllerDescriptorResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetFirmwareBoardControllerDescriptorAncestor[];
    readonly brandString?: string;
    readonly capabilities?: outputs.GetFirmwareBoardControllerDescriptorCapability[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly label?: string;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly nrVersion?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetFirmwareBoardControllerDescriptorParent;
    readonly permissionResources?: outputs.GetFirmwareBoardControllerDescriptorPermissionResource[];
    readonly results: outputs.GetFirmwareBoardControllerDescriptorResult[];
    readonly revision?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetFirmwareBoardControllerDescriptorTag[];
    readonly vendor?: string;
    readonly versionContext?: outputs.GetFirmwareBoardControllerDescriptorVersionContext;
}
export function getFirmwareBoardControllerDescriptorOutput(args?: GetFirmwareBoardControllerDescriptorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirmwareBoardControllerDescriptorResult> {
    return pulumi.output(args).apply((a: any) => getFirmwareBoardControllerDescriptor(a, opts))
}

/**
 * A collection of arguments for invoking getFirmwareBoardControllerDescriptor.
 */
export interface GetFirmwareBoardControllerDescriptorOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetFirmwareBoardControllerDescriptorAncestorArgs>[]>;
    brandString?: pulumi.Input<string>;
    capabilities?: pulumi.Input<pulumi.Input<inputs.GetFirmwareBoardControllerDescriptorCapabilityArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    label?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    nrVersion?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetFirmwareBoardControllerDescriptorParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetFirmwareBoardControllerDescriptorPermissionResourceArgs>[]>;
    revision?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetFirmwareBoardControllerDescriptorTagArgs>[]>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetFirmwareBoardControllerDescriptorVersionContextArgs>;
}
