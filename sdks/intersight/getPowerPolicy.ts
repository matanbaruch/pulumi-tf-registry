// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPowerPolicy(args?: GetPowerPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPowerPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getPowerPolicy:getPowerPolicy", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "allocatedBudget": args.allocatedBudget,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "dynamicRebalancing": args.dynamicRebalancing,
        "extendedPowerCapacity": args.extendedPowerCapacity,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "powerPriority": args.powerPriority,
        "powerProfiling": args.powerProfiling,
        "powerRestoreState": args.powerRestoreState,
        "powerSaveMode": args.powerSaveMode,
        "profiles": args.profiles,
        "redundancyMode": args.redundancyMode,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPowerPolicy.
 */
export interface GetPowerPolicyArgs {
    accountMoid?: string;
    additionalProperties?: string;
    allocatedBudget?: number;
    ancestors?: inputs.GetPowerPolicyAncestor[];
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    dynamicRebalancing?: string;
    extendedPowerCapacity?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetPowerPolicyOrganization;
    owners?: string[];
    parent?: inputs.GetPowerPolicyParent;
    permissionResources?: inputs.GetPowerPolicyPermissionResource[];
    powerPriority?: string;
    powerProfiling?: string;
    powerRestoreState?: string;
    powerSaveMode?: string;
    profiles?: inputs.GetPowerPolicyProfile[];
    redundancyMode?: string;
    sharedScope?: string;
    tags?: inputs.GetPowerPolicyTag[];
    versionContext?: inputs.GetPowerPolicyVersionContext;
}

/**
 * A collection of values returned by getPowerPolicy.
 */
export interface GetPowerPolicyResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly allocatedBudget?: number;
    readonly ancestors?: outputs.GetPowerPolicyAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly dynamicRebalancing?: string;
    readonly extendedPowerCapacity?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetPowerPolicyOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetPowerPolicyParent;
    readonly permissionResources?: outputs.GetPowerPolicyPermissionResource[];
    readonly powerPriority?: string;
    readonly powerProfiling?: string;
    readonly powerRestoreState?: string;
    readonly powerSaveMode?: string;
    readonly profiles?: outputs.GetPowerPolicyProfile[];
    readonly redundancyMode?: string;
    readonly results: outputs.GetPowerPolicyResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetPowerPolicyTag[];
    readonly versionContext?: outputs.GetPowerPolicyVersionContext;
}
export function getPowerPolicyOutput(args?: GetPowerPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPowerPolicyResult> {
    return pulumi.output(args).apply((a: any) => getPowerPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getPowerPolicy.
 */
export interface GetPowerPolicyOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    allocatedBudget?: pulumi.Input<number>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetPowerPolicyAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    dynamicRebalancing?: pulumi.Input<string>;
    extendedPowerCapacity?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetPowerPolicyOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetPowerPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetPowerPolicyPermissionResourceArgs>[]>;
    powerPriority?: pulumi.Input<string>;
    powerProfiling?: pulumi.Input<string>;
    powerRestoreState?: pulumi.Input<string>;
    powerSaveMode?: pulumi.Input<string>;
    profiles?: pulumi.Input<pulumi.Input<inputs.GetPowerPolicyProfileArgs>[]>;
    redundancyMode?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetPowerPolicyTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetPowerPolicyVersionContextArgs>;
}
