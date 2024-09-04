// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFabricServerRole(args?: GetFabricServerRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricServerRoleResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getFabricServerRole:getFabricServerRole", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "aggregatePortId": args.aggregatePortId,
        "ancestors": args.ancestors,
        "autoNegotiationDisabled": args.autoNegotiationDisabled,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "fec": args.fec,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "portId": args.portId,
        "portPolicy": args.portPolicy,
        "preferredDeviceId": args.preferredDeviceId,
        "preferredDeviceType": args.preferredDeviceType,
        "sharedScope": args.sharedScope,
        "slotId": args.slotId,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFabricServerRole.
 */
export interface GetFabricServerRoleArgs {
    accountMoid?: string;
    additionalProperties?: string;
    aggregatePortId?: number;
    ancestors?: inputs.GetFabricServerRoleAncestor[];
    autoNegotiationDisabled?: boolean;
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    fec?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetFabricServerRoleParent;
    permissionResources?: inputs.GetFabricServerRolePermissionResource[];
    portId?: number;
    portPolicy?: inputs.GetFabricServerRolePortPolicy;
    preferredDeviceId?: number;
    preferredDeviceType?: string;
    sharedScope?: string;
    slotId?: number;
    tags?: inputs.GetFabricServerRoleTag[];
    versionContext?: inputs.GetFabricServerRoleVersionContext;
}

/**
 * A collection of values returned by getFabricServerRole.
 */
export interface GetFabricServerRoleResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly aggregatePortId?: number;
    readonly ancestors?: outputs.GetFabricServerRoleAncestor[];
    readonly autoNegotiationDisabled?: boolean;
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly fec?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetFabricServerRoleParent;
    readonly permissionResources?: outputs.GetFabricServerRolePermissionResource[];
    readonly portId?: number;
    readonly portPolicy?: outputs.GetFabricServerRolePortPolicy;
    readonly preferredDeviceId?: number;
    readonly preferredDeviceType?: string;
    readonly results: outputs.GetFabricServerRoleResult[];
    readonly sharedScope?: string;
    readonly slotId?: number;
    readonly tags?: outputs.GetFabricServerRoleTag[];
    readonly versionContext?: outputs.GetFabricServerRoleVersionContext;
}
export function getFabricServerRoleOutput(args?: GetFabricServerRoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFabricServerRoleResult> {
    return pulumi.output(args).apply((a: any) => getFabricServerRole(a, opts))
}

/**
 * A collection of arguments for invoking getFabricServerRole.
 */
export interface GetFabricServerRoleOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    aggregatePortId?: pulumi.Input<number>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetFabricServerRoleAncestorArgs>[]>;
    autoNegotiationDisabled?: pulumi.Input<boolean>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    fec?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetFabricServerRoleParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetFabricServerRolePermissionResourceArgs>[]>;
    portId?: pulumi.Input<number>;
    portPolicy?: pulumi.Input<inputs.GetFabricServerRolePortPolicyArgs>;
    preferredDeviceId?: pulumi.Input<number>;
    preferredDeviceType?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    slotId?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetFabricServerRoleTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetFabricServerRoleVersionContextArgs>;
}
