// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMemoryPersistentMemoryNamespace(args?: GetMemoryPersistentMemoryNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetMemoryPersistentMemoryNamespaceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getMemoryPersistentMemoryNamespace:getMemoryPersistentMemoryNamespace", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "capacity": args.capacity,
        "classId": args.classId,
        "createTime": args.createTime,
        "deviceMoId": args.deviceMoId,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "healthState": args.healthState,
        "id": args.id,
        "inventoryDeviceInfo": args.inventoryDeviceInfo,
        "labelVersion": args.labelVersion,
        "memoryPersistentMemoryRegion": args.memoryPersistentMemoryRegion,
        "modTime": args.modTime,
        "mode": args.mode,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "registeredDevice": args.registeredDevice,
        "rn": args.rn,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "uuid": args.uuid,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMemoryPersistentMemoryNamespace.
 */
export interface GetMemoryPersistentMemoryNamespaceArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetMemoryPersistentMemoryNamespaceAncestor[];
    capacity?: string;
    classId?: string;
    createTime?: string;
    deviceMoId?: string;
    dn?: string;
    domainGroupMoid?: string;
    healthState?: string;
    id?: string;
    inventoryDeviceInfo?: inputs.GetMemoryPersistentMemoryNamespaceInventoryDeviceInfo;
    labelVersion?: string;
    memoryPersistentMemoryRegion?: inputs.GetMemoryPersistentMemoryNamespaceMemoryPersistentMemoryRegion;
    modTime?: string;
    mode?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetMemoryPersistentMemoryNamespaceParent;
    permissionResources?: inputs.GetMemoryPersistentMemoryNamespacePermissionResource[];
    registeredDevice?: inputs.GetMemoryPersistentMemoryNamespaceRegisteredDevice;
    rn?: string;
    sharedScope?: string;
    tags?: inputs.GetMemoryPersistentMemoryNamespaceTag[];
    uuid?: string;
    versionContext?: inputs.GetMemoryPersistentMemoryNamespaceVersionContext;
}

/**
 * A collection of values returned by getMemoryPersistentMemoryNamespace.
 */
export interface GetMemoryPersistentMemoryNamespaceResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetMemoryPersistentMemoryNamespaceAncestor[];
    readonly capacity?: string;
    readonly classId?: string;
    readonly createTime?: string;
    readonly deviceMoId?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly healthState?: string;
    readonly id: string;
    readonly inventoryDeviceInfo?: outputs.GetMemoryPersistentMemoryNamespaceInventoryDeviceInfo;
    readonly labelVersion?: string;
    readonly memoryPersistentMemoryRegion?: outputs.GetMemoryPersistentMemoryNamespaceMemoryPersistentMemoryRegion;
    readonly modTime?: string;
    readonly mode?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetMemoryPersistentMemoryNamespaceParent;
    readonly permissionResources?: outputs.GetMemoryPersistentMemoryNamespacePermissionResource[];
    readonly registeredDevice?: outputs.GetMemoryPersistentMemoryNamespaceRegisteredDevice;
    readonly results: outputs.GetMemoryPersistentMemoryNamespaceResult[];
    readonly rn?: string;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetMemoryPersistentMemoryNamespaceTag[];
    readonly uuid?: string;
    readonly versionContext?: outputs.GetMemoryPersistentMemoryNamespaceVersionContext;
}
export function getMemoryPersistentMemoryNamespaceOutput(args?: GetMemoryPersistentMemoryNamespaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMemoryPersistentMemoryNamespaceResult> {
    return pulumi.output(args).apply((a: any) => getMemoryPersistentMemoryNamespace(a, opts))
}

/**
 * A collection of arguments for invoking getMemoryPersistentMemoryNamespace.
 */
export interface GetMemoryPersistentMemoryNamespaceOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetMemoryPersistentMemoryNamespaceAncestorArgs>[]>;
    capacity?: pulumi.Input<string>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    healthState?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    inventoryDeviceInfo?: pulumi.Input<inputs.GetMemoryPersistentMemoryNamespaceInventoryDeviceInfoArgs>;
    labelVersion?: pulumi.Input<string>;
    memoryPersistentMemoryRegion?: pulumi.Input<inputs.GetMemoryPersistentMemoryNamespaceMemoryPersistentMemoryRegionArgs>;
    modTime?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetMemoryPersistentMemoryNamespaceParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetMemoryPersistentMemoryNamespacePermissionResourceArgs>[]>;
    registeredDevice?: pulumi.Input<inputs.GetMemoryPersistentMemoryNamespaceRegisteredDeviceArgs>;
    rn?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetMemoryPersistentMemoryNamespaceTagArgs>[]>;
    uuid?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetMemoryPersistentMemoryNamespaceVersionContextArgs>;
}
