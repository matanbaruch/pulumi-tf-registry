// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFmcPhysicalInterface(args?: GetFmcPhysicalInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetFmcPhysicalInterfaceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getFmcPhysicalInterface:getFmcPhysicalInterface", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "deviceId": args.deviceId,
        "domainGroupMoid": args.domainGroupMoid,
        "domainId": args.domainId,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "physicalInterfaceId": args.physicalInterfaceId,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFmcPhysicalInterface.
 */
export interface GetFmcPhysicalInterfaceArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetFmcPhysicalInterfaceAncestor[];
    classId?: string;
    createTime?: string;
    deviceId?: string;
    domainGroupMoid?: string;
    domainId?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetFmcPhysicalInterfaceParent;
    permissionResources?: inputs.GetFmcPhysicalInterfacePermissionResource[];
    physicalInterfaceId?: string;
    registeredDevice?: inputs.GetFmcPhysicalInterfaceRegisteredDevice;
    sharedScope?: string;
    tags?: inputs.GetFmcPhysicalInterfaceTag[];
    versionContext?: inputs.GetFmcPhysicalInterfaceVersionContext;
}

/**
 * A collection of values returned by getFmcPhysicalInterface.
 */
export interface GetFmcPhysicalInterfaceResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetFmcPhysicalInterfaceAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly deviceId?: string;
    readonly domainGroupMoid?: string;
    readonly domainId?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetFmcPhysicalInterfaceParent;
    readonly permissionResources?: outputs.GetFmcPhysicalInterfacePermissionResource[];
    readonly physicalInterfaceId?: string;
    readonly registeredDevice?: outputs.GetFmcPhysicalInterfaceRegisteredDevice;
    readonly results: outputs.GetFmcPhysicalInterfaceResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetFmcPhysicalInterfaceTag[];
    readonly versionContext?: outputs.GetFmcPhysicalInterfaceVersionContext;
}
export function getFmcPhysicalInterfaceOutput(args?: GetFmcPhysicalInterfaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFmcPhysicalInterfaceResult> {
    return pulumi.output(args).apply((a: any) => getFmcPhysicalInterface(a, opts))
}

/**
 * A collection of arguments for invoking getFmcPhysicalInterface.
 */
export interface GetFmcPhysicalInterfaceOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetFmcPhysicalInterfaceAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deviceId?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    domainId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetFmcPhysicalInterfaceParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetFmcPhysicalInterfacePermissionResourceArgs>[]>;
    physicalInterfaceId?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetFmcPhysicalInterfaceRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetFmcPhysicalInterfaceTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetFmcPhysicalInterfaceVersionContextArgs>;
}
