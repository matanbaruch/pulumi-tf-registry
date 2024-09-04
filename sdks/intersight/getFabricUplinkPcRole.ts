// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFabricUplinkPcRole(args?: GetFabricUplinkPcRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricUplinkPcRoleResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getFabricUplinkPcRole:getFabricUplinkPcRole", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "adminSpeed": args.adminSpeed,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "ethNetworkGroupPolicies": args.ethNetworkGroupPolicies,
        "fec": args.fec,
        "flowControlPolicy": args.flowControlPolicy,
        "id": args.id,
        "linkAggregationPolicy": args.linkAggregationPolicy,
        "linkControlPolicy": args.linkControlPolicy,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "pcId": args.pcId,
        "permissionResources": args.permissionResources,
        "portPolicy": args.portPolicy,
        "ports": args.ports,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFabricUplinkPcRole.
 */
export interface GetFabricUplinkPcRoleArgs {
    accountMoid?: string;
    additionalProperties?: string;
    adminSpeed?: string;
    ancestors?: inputs.GetFabricUplinkPcRoleAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    ethNetworkGroupPolicies?: inputs.GetFabricUplinkPcRoleEthNetworkGroupPolicy[];
    fec?: string;
    flowControlPolicy?: inputs.GetFabricUplinkPcRoleFlowControlPolicy;
    id?: string;
    linkAggregationPolicy?: inputs.GetFabricUplinkPcRoleLinkAggregationPolicy;
    linkControlPolicy?: inputs.GetFabricUplinkPcRoleLinkControlPolicy;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetFabricUplinkPcRoleParent;
    pcId?: number;
    permissionResources?: inputs.GetFabricUplinkPcRolePermissionResource[];
    portPolicy?: inputs.GetFabricUplinkPcRolePortPolicy;
    ports?: inputs.GetFabricUplinkPcRolePort[];
    sharedScope?: string;
    tags?: inputs.GetFabricUplinkPcRoleTag[];
    versionContext?: inputs.GetFabricUplinkPcRoleVersionContext;
}

/**
 * A collection of values returned by getFabricUplinkPcRole.
 */
export interface GetFabricUplinkPcRoleResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly adminSpeed?: string;
    readonly ancestors?: outputs.GetFabricUplinkPcRoleAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly ethNetworkGroupPolicies?: outputs.GetFabricUplinkPcRoleEthNetworkGroupPolicy[];
    readonly fec?: string;
    readonly flowControlPolicy?: outputs.GetFabricUplinkPcRoleFlowControlPolicy;
    readonly id: string;
    readonly linkAggregationPolicy?: outputs.GetFabricUplinkPcRoleLinkAggregationPolicy;
    readonly linkControlPolicy?: outputs.GetFabricUplinkPcRoleLinkControlPolicy;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetFabricUplinkPcRoleParent;
    readonly pcId?: number;
    readonly permissionResources?: outputs.GetFabricUplinkPcRolePermissionResource[];
    readonly portPolicy?: outputs.GetFabricUplinkPcRolePortPolicy;
    readonly ports?: outputs.GetFabricUplinkPcRolePort[];
    readonly results: outputs.GetFabricUplinkPcRoleResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetFabricUplinkPcRoleTag[];
    readonly versionContext?: outputs.GetFabricUplinkPcRoleVersionContext;
}
export function getFabricUplinkPcRoleOutput(args?: GetFabricUplinkPcRoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFabricUplinkPcRoleResult> {
    return pulumi.output(args).apply((a: any) => getFabricUplinkPcRole(a, opts))
}

/**
 * A collection of arguments for invoking getFabricUplinkPcRole.
 */
export interface GetFabricUplinkPcRoleOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    adminSpeed?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetFabricUplinkPcRoleAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    ethNetworkGroupPolicies?: pulumi.Input<pulumi.Input<inputs.GetFabricUplinkPcRoleEthNetworkGroupPolicyArgs>[]>;
    fec?: pulumi.Input<string>;
    flowControlPolicy?: pulumi.Input<inputs.GetFabricUplinkPcRoleFlowControlPolicyArgs>;
    id?: pulumi.Input<string>;
    linkAggregationPolicy?: pulumi.Input<inputs.GetFabricUplinkPcRoleLinkAggregationPolicyArgs>;
    linkControlPolicy?: pulumi.Input<inputs.GetFabricUplinkPcRoleLinkControlPolicyArgs>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetFabricUplinkPcRoleParentArgs>;
    pcId?: pulumi.Input<number>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetFabricUplinkPcRolePermissionResourceArgs>[]>;
    portPolicy?: pulumi.Input<inputs.GetFabricUplinkPcRolePortPolicyArgs>;
    ports?: pulumi.Input<pulumi.Input<inputs.GetFabricUplinkPcRolePortArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetFabricUplinkPcRoleTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetFabricUplinkPcRoleVersionContextArgs>;
}
