// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFabricPcOperation(args?: GetFabricPcOperationArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricPcOperationResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getFabricPcOperation:getFabricPcOperation", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "adminState": args.adminState,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "configState": args.configState,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "networkElement": args.networkElement,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "pcId": args.pcId,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFabricPcOperation.
 */
export interface GetFabricPcOperationArgs {
    accountMoid?: string;
    additionalProperties?: string;
    adminState?: string;
    ancestors?: inputs.GetFabricPcOperationAncestor[];
    classId?: string;
    configState?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    networkElement?: inputs.GetFabricPcOperationNetworkElement;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetFabricPcOperationParent;
    pcId?: number;
    permissionResources?: inputs.GetFabricPcOperationPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetFabricPcOperationTag[];
    versionContext?: inputs.GetFabricPcOperationVersionContext;
}

/**
 * A collection of values returned by getFabricPcOperation.
 */
export interface GetFabricPcOperationResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly adminState?: string;
    readonly ancestors?: outputs.GetFabricPcOperationAncestor[];
    readonly classId?: string;
    readonly configState?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly networkElement?: outputs.GetFabricPcOperationNetworkElement;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetFabricPcOperationParent;
    readonly pcId?: number;
    readonly permissionResources?: outputs.GetFabricPcOperationPermissionResource[];
    readonly results: outputs.GetFabricPcOperationResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetFabricPcOperationTag[];
    readonly versionContext?: outputs.GetFabricPcOperationVersionContext;
}
export function getFabricPcOperationOutput(args?: GetFabricPcOperationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFabricPcOperationResult> {
    return pulumi.output(args).apply((a: any) => getFabricPcOperation(a, opts))
}

/**
 * A collection of arguments for invoking getFabricPcOperation.
 */
export interface GetFabricPcOperationOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    adminState?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetFabricPcOperationAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    configState?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    networkElement?: pulumi.Input<inputs.GetFabricPcOperationNetworkElementArgs>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetFabricPcOperationParentArgs>;
    pcId?: pulumi.Input<number>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetFabricPcOperationPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetFabricPcOperationTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetFabricPcOperationVersionContextArgs>;
}
