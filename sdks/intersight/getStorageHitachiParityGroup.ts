// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageHitachiParityGroup(args?: GetStorageHitachiParityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageHitachiParityGroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getStorageHitachiParityGroup:getStorageHitachiParityGroup", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "array": args.array,
        "classId": args.classId,
        "createTime": args.createTime,
        "diskSpeed": args.diskSpeed,
        "diskType": args.diskType,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "isAcceleratedCompressionEnabled": args.isAcceleratedCompressionEnabled,
        "isCopyBackModeEnabled": args.isCopyBackModeEnabled,
        "isEncryptionEnabled": args.isEncryptionEnabled,
        "level": args.level,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "storageUtilization": args.storageUtilization,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageHitachiParityGroup.
 */
export interface GetStorageHitachiParityGroupArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetStorageHitachiParityGroupAncestor[];
    array?: inputs.GetStorageHitachiParityGroupArray;
    classId?: string;
    createTime?: string;
    diskSpeed?: string;
    diskType?: string;
    domainGroupMoid?: string;
    id?: string;
    isAcceleratedCompressionEnabled?: boolean;
    isCopyBackModeEnabled?: boolean;
    isEncryptionEnabled?: boolean;
    level?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetStorageHitachiParityGroupParent;
    permissionResources?: inputs.GetStorageHitachiParityGroupPermissionResource[];
    registeredDevice?: inputs.GetStorageHitachiParityGroupRegisteredDevice;
    sharedScope?: string;
    storageUtilization?: inputs.GetStorageHitachiParityGroupStorageUtilization;
    tags?: inputs.GetStorageHitachiParityGroupTag[];
    versionContext?: inputs.GetStorageHitachiParityGroupVersionContext;
}

/**
 * A collection of values returned by getStorageHitachiParityGroup.
 */
export interface GetStorageHitachiParityGroupResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetStorageHitachiParityGroupAncestor[];
    readonly array?: outputs.GetStorageHitachiParityGroupArray;
    readonly classId?: string;
    readonly createTime?: string;
    readonly diskSpeed?: string;
    readonly diskType?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly isAcceleratedCompressionEnabled?: boolean;
    readonly isCopyBackModeEnabled?: boolean;
    readonly isEncryptionEnabled?: boolean;
    readonly level?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetStorageHitachiParityGroupParent;
    readonly permissionResources?: outputs.GetStorageHitachiParityGroupPermissionResource[];
    readonly registeredDevice?: outputs.GetStorageHitachiParityGroupRegisteredDevice;
    readonly results: outputs.GetStorageHitachiParityGroupResult[];
    readonly sharedScope?: string;
    readonly storageUtilization?: outputs.GetStorageHitachiParityGroupStorageUtilization;
    readonly tags?: outputs.GetStorageHitachiParityGroupTag[];
    readonly versionContext?: outputs.GetStorageHitachiParityGroupVersionContext;
}
export function getStorageHitachiParityGroupOutput(args?: GetStorageHitachiParityGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageHitachiParityGroupResult> {
    return pulumi.output(args).apply((a: any) => getStorageHitachiParityGroup(a, opts))
}

/**
 * A collection of arguments for invoking getStorageHitachiParityGroup.
 */
export interface GetStorageHitachiParityGroupOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetStorageHitachiParityGroupAncestorArgs>[]>;
    array?: pulumi.Input<inputs.GetStorageHitachiParityGroupArrayArgs>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    diskSpeed?: pulumi.Input<string>;
    diskType?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    isAcceleratedCompressionEnabled?: pulumi.Input<boolean>;
    isCopyBackModeEnabled?: pulumi.Input<boolean>;
    isEncryptionEnabled?: pulumi.Input<boolean>;
    level?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetStorageHitachiParityGroupParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetStorageHitachiParityGroupPermissionResourceArgs>[]>;
    registeredDevice?: pulumi.Input<inputs.GetStorageHitachiParityGroupRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    storageUtilization?: pulumi.Input<inputs.GetStorageHitachiParityGroupStorageUtilizationArgs>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetStorageHitachiParityGroupTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetStorageHitachiParityGroupVersionContextArgs>;
}
