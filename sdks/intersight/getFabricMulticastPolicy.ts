// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFabricMulticastPolicy(args?: GetFabricMulticastPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricMulticastPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getFabricMulticastPolicy:getFabricMulticastPolicy", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "querierIpAddress": args.querierIpAddress,
        "querierIpAddressPeer": args.querierIpAddressPeer,
        "querierState": args.querierState,
        "sharedScope": args.sharedScope,
        "snoopingState": args.snoopingState,
        "srcIpProxy": args.srcIpProxy,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFabricMulticastPolicy.
 */
export interface GetFabricMulticastPolicyArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetFabricMulticastPolicyAncestor[];
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetFabricMulticastPolicyOrganization;
    owners?: string[];
    parent?: inputs.GetFabricMulticastPolicyParent;
    permissionResources?: inputs.GetFabricMulticastPolicyPermissionResource[];
    querierIpAddress?: string;
    querierIpAddressPeer?: string;
    querierState?: string;
    sharedScope?: string;
    snoopingState?: string;
    srcIpProxy?: string;
    tags?: inputs.GetFabricMulticastPolicyTag[];
    versionContext?: inputs.GetFabricMulticastPolicyVersionContext;
}

/**
 * A collection of values returned by getFabricMulticastPolicy.
 */
export interface GetFabricMulticastPolicyResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetFabricMulticastPolicyAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetFabricMulticastPolicyOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetFabricMulticastPolicyParent;
    readonly permissionResources?: outputs.GetFabricMulticastPolicyPermissionResource[];
    readonly querierIpAddress?: string;
    readonly querierIpAddressPeer?: string;
    readonly querierState?: string;
    readonly results: outputs.GetFabricMulticastPolicyResult[];
    readonly sharedScope?: string;
    readonly snoopingState?: string;
    readonly srcIpProxy?: string;
    readonly tags?: outputs.GetFabricMulticastPolicyTag[];
    readonly versionContext?: outputs.GetFabricMulticastPolicyVersionContext;
}
export function getFabricMulticastPolicyOutput(args?: GetFabricMulticastPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFabricMulticastPolicyResult> {
    return pulumi.output(args).apply((a: any) => getFabricMulticastPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getFabricMulticastPolicy.
 */
export interface GetFabricMulticastPolicyOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetFabricMulticastPolicyAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetFabricMulticastPolicyOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetFabricMulticastPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetFabricMulticastPolicyPermissionResourceArgs>[]>;
    querierIpAddress?: pulumi.Input<string>;
    querierIpAddressPeer?: pulumi.Input<string>;
    querierState?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    snoopingState?: pulumi.Input<string>;
    srcIpProxy?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetFabricMulticastPolicyTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetFabricMulticastPolicyVersionContextArgs>;
}
