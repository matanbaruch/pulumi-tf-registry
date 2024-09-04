// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVirtualizationVmwareUplinkPort(args?: GetVirtualizationVmwareUplinkPortArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualizationVmwareUplinkPortResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getVirtualizationVmwareUplinkPort:getVirtualizationVmwareUplinkPort", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "distributedNetwork": args.distributedNetwork,
        "domainGroupMoid": args.domainGroupMoid,
        "host": args.host,
        "id": args.id,
        "identity": args.identity,
        "key": args.key,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "physicalNetworkInterface": args.physicalNetworkInterface,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVirtualizationVmwareUplinkPort.
 */
export interface GetVirtualizationVmwareUplinkPortArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetVirtualizationVmwareUplinkPortAncestor[];
    classId?: string;
    createTime?: string;
    distributedNetwork?: inputs.GetVirtualizationVmwareUplinkPortDistributedNetwork;
    domainGroupMoid?: string;
    host?: inputs.GetVirtualizationVmwareUplinkPortHost;
    id?: string;
    identity?: string;
    key?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetVirtualizationVmwareUplinkPortParent;
    permissionResources?: inputs.GetVirtualizationVmwareUplinkPortPermissionResource[];
    physicalNetworkInterface?: inputs.GetVirtualizationVmwareUplinkPortPhysicalNetworkInterface;
    registeredDevice?: inputs.GetVirtualizationVmwareUplinkPortRegisteredDevice;
    sharedScope?: string;
    tags?: inputs.GetVirtualizationVmwareUplinkPortTag[];
    versionContext?: inputs.GetVirtualizationVmwareUplinkPortVersionContext;
}

/**
 * A collection of values returned by getVirtualizationVmwareUplinkPort.
 */
export interface GetVirtualizationVmwareUplinkPortResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetVirtualizationVmwareUplinkPortAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly distributedNetwork?: outputs.GetVirtualizationVmwareUplinkPortDistributedNetwork;
    readonly domainGroupMoid?: string;
    readonly host?: outputs.GetVirtualizationVmwareUplinkPortHost;
    readonly id: string;
    readonly identity?: string;
    readonly key?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetVirtualizationVmwareUplinkPortParent;
    readonly permissionResources?: outputs.GetVirtualizationVmwareUplinkPortPermissionResource[];
    readonly physicalNetworkInterface?: outputs.GetVirtualizationVmwareUplinkPortPhysicalNetworkInterface;
    readonly registeredDevice?: outputs.GetVirtualizationVmwareUplinkPortRegisteredDevice;
    readonly results: outputs.GetVirtualizationVmwareUplinkPortResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetVirtualizationVmwareUplinkPortTag[];
    readonly versionContext?: outputs.GetVirtualizationVmwareUplinkPortVersionContext;
}
export function getVirtualizationVmwareUplinkPortOutput(args?: GetVirtualizationVmwareUplinkPortOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualizationVmwareUplinkPortResult> {
    return pulumi.output(args).apply((a: any) => getVirtualizationVmwareUplinkPort(a, opts))
}

/**
 * A collection of arguments for invoking getVirtualizationVmwareUplinkPort.
 */
export interface GetVirtualizationVmwareUplinkPortOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetVirtualizationVmwareUplinkPortAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    distributedNetwork?: pulumi.Input<inputs.GetVirtualizationVmwareUplinkPortDistributedNetworkArgs>;
    domainGroupMoid?: pulumi.Input<string>;
    host?: pulumi.Input<inputs.GetVirtualizationVmwareUplinkPortHostArgs>;
    id?: pulumi.Input<string>;
    identity?: pulumi.Input<string>;
    key?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetVirtualizationVmwareUplinkPortParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetVirtualizationVmwareUplinkPortPermissionResourceArgs>[]>;
    physicalNetworkInterface?: pulumi.Input<inputs.GetVirtualizationVmwareUplinkPortPhysicalNetworkInterfaceArgs>;
    registeredDevice?: pulumi.Input<inputs.GetVirtualizationVmwareUplinkPortRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetVirtualizationVmwareUplinkPortTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetVirtualizationVmwareUplinkPortVersionContextArgs>;
}
