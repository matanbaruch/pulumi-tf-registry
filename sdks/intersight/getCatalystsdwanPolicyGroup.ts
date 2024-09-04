// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCatalystsdwanPolicyGroup(args?: GetCatalystsdwanPolicyGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetCatalystsdwanPolicyGroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getCatalystsdwanPolicyGroup:getCatalystsdwanPolicyGroup", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "devices": args.devices,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "nrVersion": args.nrVersion,
        "numberOfDevices": args.numberOfDevices,
        "numberOfDevicesUpToDate": args.numberOfDevicesUpToDate,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "policyGroupId": args.policyGroupId,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "solution": args.solution,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCatalystsdwanPolicyGroup.
 */
export interface GetCatalystsdwanPolicyGroupArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetCatalystsdwanPolicyGroupAncestor[];
    classId?: string;
    createTime?: string;
    devices?: string[];
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    nrVersion?: number;
    numberOfDevices?: number;
    numberOfDevicesUpToDate?: number;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetCatalystsdwanPolicyGroupParent;
    permissionResources?: inputs.GetCatalystsdwanPolicyGroupPermissionResource[];
    policyGroupId?: string;
    registeredDevice?: inputs.GetCatalystsdwanPolicyGroupRegisteredDevice;
    sharedScope?: string;
    solution?: string;
    tags?: inputs.GetCatalystsdwanPolicyGroupTag[];
    versionContext?: inputs.GetCatalystsdwanPolicyGroupVersionContext;
}

/**
 * A collection of values returned by getCatalystsdwanPolicyGroup.
 */
export interface GetCatalystsdwanPolicyGroupResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetCatalystsdwanPolicyGroupAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly devices?: string[];
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly nrVersion?: number;
    readonly numberOfDevices?: number;
    readonly numberOfDevicesUpToDate?: number;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetCatalystsdwanPolicyGroupParent;
    readonly permissionResources?: outputs.GetCatalystsdwanPolicyGroupPermissionResource[];
    readonly policyGroupId?: string;
    readonly registeredDevice?: outputs.GetCatalystsdwanPolicyGroupRegisteredDevice;
    readonly results: outputs.GetCatalystsdwanPolicyGroupResult[];
    readonly sharedScope?: string;
    readonly solution?: string;
    readonly tags?: outputs.GetCatalystsdwanPolicyGroupTag[];
    readonly versionContext?: outputs.GetCatalystsdwanPolicyGroupVersionContext;
}
export function getCatalystsdwanPolicyGroupOutput(args?: GetCatalystsdwanPolicyGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCatalystsdwanPolicyGroupResult> {
    return pulumi.output(args).apply((a: any) => getCatalystsdwanPolicyGroup(a, opts))
}

/**
 * A collection of arguments for invoking getCatalystsdwanPolicyGroup.
 */
export interface GetCatalystsdwanPolicyGroupOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetCatalystsdwanPolicyGroupAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    devices?: pulumi.Input<pulumi.Input<string>[]>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nrVersion?: pulumi.Input<number>;
    numberOfDevices?: pulumi.Input<number>;
    numberOfDevicesUpToDate?: pulumi.Input<number>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetCatalystsdwanPolicyGroupParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetCatalystsdwanPolicyGroupPermissionResourceArgs>[]>;
    policyGroupId?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetCatalystsdwanPolicyGroupRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    solution?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetCatalystsdwanPolicyGroupTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetCatalystsdwanPolicyGroupVersionContextArgs>;
}
