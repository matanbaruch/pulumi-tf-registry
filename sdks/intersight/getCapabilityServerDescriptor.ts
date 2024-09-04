// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCapabilityServerDescriptor(args?: GetCapabilityServerDescriptorArgs, opts?: pulumi.InvokeOptions): Promise<GetCapabilityServerDescriptorResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getCapabilityServerDescriptor:getCapabilityServerDescriptor", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "capabilities": args.capabilities,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "isNcsiEnabled": args.isNcsiEnabled,
        "mlomAdapterPcieSlotNumber": args.mlomAdapterPcieSlotNumber,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "nrVersion": args.nrVersion,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "serverFormFactor": args.serverFormFactor,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "vendor": args.vendor,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCapabilityServerDescriptor.
 */
export interface GetCapabilityServerDescriptorArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetCapabilityServerDescriptorAncestor[];
    capabilities?: inputs.GetCapabilityServerDescriptorCapability[];
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    id?: string;
    isNcsiEnabled?: boolean;
    mlomAdapterPcieSlotNumber?: number;
    modTime?: string;
    model?: string;
    moid?: string;
    nrVersion?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetCapabilityServerDescriptorParent;
    permissionResources?: inputs.GetCapabilityServerDescriptorPermissionResource[];
    serverFormFactor?: string;
    sharedScope?: string;
    tags?: inputs.GetCapabilityServerDescriptorTag[];
    vendor?: string;
    versionContext?: inputs.GetCapabilityServerDescriptorVersionContext;
}

/**
 * A collection of values returned by getCapabilityServerDescriptor.
 */
export interface GetCapabilityServerDescriptorResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetCapabilityServerDescriptorAncestor[];
    readonly capabilities?: outputs.GetCapabilityServerDescriptorCapability[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly isNcsiEnabled?: boolean;
    readonly mlomAdapterPcieSlotNumber?: number;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly nrVersion?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetCapabilityServerDescriptorParent;
    readonly permissionResources?: outputs.GetCapabilityServerDescriptorPermissionResource[];
    readonly results: outputs.GetCapabilityServerDescriptorResult[];
    readonly serverFormFactor?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetCapabilityServerDescriptorTag[];
    readonly vendor?: string;
    readonly versionContext?: outputs.GetCapabilityServerDescriptorVersionContext;
}
export function getCapabilityServerDescriptorOutput(args?: GetCapabilityServerDescriptorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCapabilityServerDescriptorResult> {
    return pulumi.output(args).apply((a: any) => getCapabilityServerDescriptor(a, opts))
}

/**
 * A collection of arguments for invoking getCapabilityServerDescriptor.
 */
export interface GetCapabilityServerDescriptorOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetCapabilityServerDescriptorAncestorArgs>[]>;
    capabilities?: pulumi.Input<pulumi.Input<inputs.GetCapabilityServerDescriptorCapabilityArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    isNcsiEnabled?: pulumi.Input<boolean>;
    mlomAdapterPcieSlotNumber?: pulumi.Input<number>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    nrVersion?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetCapabilityServerDescriptorParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetCapabilityServerDescriptorPermissionResourceArgs>[]>;
    serverFormFactor?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetCapabilityServerDescriptorTagArgs>[]>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetCapabilityServerDescriptorVersionContextArgs>;
}
