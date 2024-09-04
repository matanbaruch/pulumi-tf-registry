// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKubernetesVirtualMachineInfrastructureProvider(args?: GetKubernetesVirtualMachineInfrastructureProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesVirtualMachineInfrastructureProviderResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getKubernetesVirtualMachineInfrastructureProvider:getKubernetesVirtualMachineInfrastructureProvider", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "infraConfig": args.infraConfig,
        "infraConfigPolicy": args.infraConfigPolicy,
        "instanceType": args.instanceType,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "nodeGroup": args.nodeGroup,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "target": args.target,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKubernetesVirtualMachineInfrastructureProvider.
 */
export interface GetKubernetesVirtualMachineInfrastructureProviderArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetKubernetesVirtualMachineInfrastructureProviderAncestor[];
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    id?: string;
    infraConfig?: inputs.GetKubernetesVirtualMachineInfrastructureProviderInfraConfig;
    infraConfigPolicy?: inputs.GetKubernetesVirtualMachineInfrastructureProviderInfraConfigPolicy;
    instanceType?: inputs.GetKubernetesVirtualMachineInfrastructureProviderInstanceType;
    modTime?: string;
    moid?: string;
    name?: string;
    nodeGroup?: inputs.GetKubernetesVirtualMachineInfrastructureProviderNodeGroup;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetKubernetesVirtualMachineInfrastructureProviderParent;
    permissionResources?: inputs.GetKubernetesVirtualMachineInfrastructureProviderPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetKubernetesVirtualMachineInfrastructureProviderTag[];
    target?: inputs.GetKubernetesVirtualMachineInfrastructureProviderTarget;
    versionContext?: inputs.GetKubernetesVirtualMachineInfrastructureProviderVersionContext;
}

/**
 * A collection of values returned by getKubernetesVirtualMachineInfrastructureProvider.
 */
export interface GetKubernetesVirtualMachineInfrastructureProviderResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetKubernetesVirtualMachineInfrastructureProviderAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly infraConfig?: outputs.GetKubernetesVirtualMachineInfrastructureProviderInfraConfig;
    readonly infraConfigPolicy?: outputs.GetKubernetesVirtualMachineInfrastructureProviderInfraConfigPolicy;
    readonly instanceType?: outputs.GetKubernetesVirtualMachineInfrastructureProviderInstanceType;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly nodeGroup?: outputs.GetKubernetesVirtualMachineInfrastructureProviderNodeGroup;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetKubernetesVirtualMachineInfrastructureProviderParent;
    readonly permissionResources?: outputs.GetKubernetesVirtualMachineInfrastructureProviderPermissionResource[];
    readonly results: outputs.GetKubernetesVirtualMachineInfrastructureProviderResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetKubernetesVirtualMachineInfrastructureProviderTag[];
    readonly target?: outputs.GetKubernetesVirtualMachineInfrastructureProviderTarget;
    readonly versionContext?: outputs.GetKubernetesVirtualMachineInfrastructureProviderVersionContext;
}
export function getKubernetesVirtualMachineInfrastructureProviderOutput(args?: GetKubernetesVirtualMachineInfrastructureProviderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubernetesVirtualMachineInfrastructureProviderResult> {
    return pulumi.output(args).apply((a: any) => getKubernetesVirtualMachineInfrastructureProvider(a, opts))
}

/**
 * A collection of arguments for invoking getKubernetesVirtualMachineInfrastructureProvider.
 */
export interface GetKubernetesVirtualMachineInfrastructureProviderOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetKubernetesVirtualMachineInfrastructureProviderAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    infraConfig?: pulumi.Input<inputs.GetKubernetesVirtualMachineInfrastructureProviderInfraConfigArgs>;
    infraConfigPolicy?: pulumi.Input<inputs.GetKubernetesVirtualMachineInfrastructureProviderInfraConfigPolicyArgs>;
    instanceType?: pulumi.Input<inputs.GetKubernetesVirtualMachineInfrastructureProviderInstanceTypeArgs>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nodeGroup?: pulumi.Input<inputs.GetKubernetesVirtualMachineInfrastructureProviderNodeGroupArgs>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetKubernetesVirtualMachineInfrastructureProviderParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetKubernetesVirtualMachineInfrastructureProviderPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetKubernetesVirtualMachineInfrastructureProviderTagArgs>[]>;
    target?: pulumi.Input<inputs.GetKubernetesVirtualMachineInfrastructureProviderTargetArgs>;
    versionContext?: pulumi.Input<inputs.GetKubernetesVirtualMachineInfrastructureProviderVersionContextArgs>;
}
