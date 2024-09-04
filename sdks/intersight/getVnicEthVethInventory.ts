// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVnicEthVethInventory(args?: GetVnicEthVethInventoryArgs, opts?: pulumi.InvokeOptions): Promise<GetVnicEthVethInventoryResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getVnicEthVethInventory:getVnicEthVethInventory", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "burst": args.burst,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "deviceMoId": args.deviceMoId,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "priority": args.priority,
        "rateLimit": args.rateLimit,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "targetMo": args.targetMo,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVnicEthVethInventory.
 */
export interface GetVnicEthVethInventoryArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetVnicEthVethInventoryAncestor[];
    burst?: number;
    classId?: string;
    createTime?: string;
    description?: string;
    deviceMoId?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetVnicEthVethInventoryParent;
    permissionResources?: inputs.GetVnicEthVethInventoryPermissionResource[];
    priority?: string;
    rateLimit?: number;
    sharedScope?: string;
    tags?: inputs.GetVnicEthVethInventoryTag[];
    targetMo?: inputs.GetVnicEthVethInventoryTargetMo;
    versionContext?: inputs.GetVnicEthVethInventoryVersionContext;
}

/**
 * A collection of values returned by getVnicEthVethInventory.
 */
export interface GetVnicEthVethInventoryResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetVnicEthVethInventoryAncestor[];
    readonly burst?: number;
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly deviceMoId?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetVnicEthVethInventoryParent;
    readonly permissionResources?: outputs.GetVnicEthVethInventoryPermissionResource[];
    readonly priority?: string;
    readonly rateLimit?: number;
    readonly results: outputs.GetVnicEthVethInventoryResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetVnicEthVethInventoryTag[];
    readonly targetMo?: outputs.GetVnicEthVethInventoryTargetMo;
    readonly versionContext?: outputs.GetVnicEthVethInventoryVersionContext;
}
export function getVnicEthVethInventoryOutput(args?: GetVnicEthVethInventoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVnicEthVethInventoryResult> {
    return pulumi.output(args).apply((a: any) => getVnicEthVethInventory(a, opts))
}

/**
 * A collection of arguments for invoking getVnicEthVethInventory.
 */
export interface GetVnicEthVethInventoryOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetVnicEthVethInventoryAncestorArgs>[]>;
    burst?: pulumi.Input<number>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetVnicEthVethInventoryParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetVnicEthVethInventoryPermissionResourceArgs>[]>;
    priority?: pulumi.Input<string>;
    rateLimit?: pulumi.Input<number>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetVnicEthVethInventoryTagArgs>[]>;
    targetMo?: pulumi.Input<inputs.GetVnicEthVethInventoryTargetMoArgs>;
    versionContext?: pulumi.Input<inputs.GetVnicEthVethInventoryVersionContextArgs>;
}
