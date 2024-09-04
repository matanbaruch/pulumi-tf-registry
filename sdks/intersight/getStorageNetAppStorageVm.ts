// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageNetAppStorageVm(args?: GetStorageNetAppStorageVmArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageNetAppStorageVmResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getStorageNetAppStorageVm:getStorageNetAppStorageVm", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "aggregates": args.aggregates,
        "ancestors": args.ancestors,
        "array": args.array,
        "avgPerformanceMetrics": args.avgPerformanceMetrics,
        "cifsEnabled": args.cifsEnabled,
        "classId": args.classId,
        "createTime": args.createTime,
        "diskPools": args.diskPools,
        "dnsDomains": args.dnsDomains,
        "domainGroupMoid": args.domainGroupMoid,
        "events": args.events,
        "fcpEnabled": args.fcpEnabled,
        "id": args.id,
        "ipspace": args.ipspace,
        "isProtected": args.isProtected,
        "iscsiEnabled": args.iscsiEnabled,
        "key": args.key,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "nameServers": args.nameServers,
        "nativeFpolicyCount": args.nativeFpolicyCount,
        "nfsEnabled": args.nfsEnabled,
        "nvmeEnabled": args.nvmeEnabled,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "state": args.state,
        "subtype": args.subtype,
        "tags": args.tags,
        "uuid": args.uuid,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageNetAppStorageVm.
 */
export interface GetStorageNetAppStorageVmArgs {
    accountMoid?: string;
    additionalProperties?: string;
    aggregates?: string[];
    ancestors?: inputs.GetStorageNetAppStorageVmAncestor[];
    array?: inputs.GetStorageNetAppStorageVmArray;
    avgPerformanceMetrics?: inputs.GetStorageNetAppStorageVmAvgPerformanceMetrics;
    cifsEnabled?: boolean;
    classId?: string;
    createTime?: string;
    diskPools?: inputs.GetStorageNetAppStorageVmDiskPool[];
    dnsDomains?: string[];
    domainGroupMoid?: string;
    events?: inputs.GetStorageNetAppStorageVmEvent[];
    fcpEnabled?: boolean;
    id?: string;
    ipspace?: string;
    isProtected?: string;
    iscsiEnabled?: boolean;
    key?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    nameServers?: string[];
    nativeFpolicyCount?: number;
    nfsEnabled?: boolean;
    nvmeEnabled?: boolean;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetStorageNetAppStorageVmParent;
    permissionResources?: inputs.GetStorageNetAppStorageVmPermissionResource[];
    sharedScope?: string;
    state?: string;
    subtype?: string;
    tags?: inputs.GetStorageNetAppStorageVmTag[];
    uuid?: string;
    versionContext?: inputs.GetStorageNetAppStorageVmVersionContext;
}

/**
 * A collection of values returned by getStorageNetAppStorageVm.
 */
export interface GetStorageNetAppStorageVmResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly aggregates?: string[];
    readonly ancestors?: outputs.GetStorageNetAppStorageVmAncestor[];
    readonly array?: outputs.GetStorageNetAppStorageVmArray;
    readonly avgPerformanceMetrics?: outputs.GetStorageNetAppStorageVmAvgPerformanceMetrics;
    readonly cifsEnabled?: boolean;
    readonly classId?: string;
    readonly createTime?: string;
    readonly diskPools?: outputs.GetStorageNetAppStorageVmDiskPool[];
    readonly dnsDomains?: string[];
    readonly domainGroupMoid?: string;
    readonly events?: outputs.GetStorageNetAppStorageVmEvent[];
    readonly fcpEnabled?: boolean;
    readonly id: string;
    readonly ipspace?: string;
    readonly isProtected?: string;
    readonly iscsiEnabled?: boolean;
    readonly key?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly nameServers?: string[];
    readonly nativeFpolicyCount?: number;
    readonly nfsEnabled?: boolean;
    readonly nvmeEnabled?: boolean;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetStorageNetAppStorageVmParent;
    readonly permissionResources?: outputs.GetStorageNetAppStorageVmPermissionResource[];
    readonly results: outputs.GetStorageNetAppStorageVmResult[];
    readonly sharedScope?: string;
    readonly state?: string;
    readonly subtype?: string;
    readonly tags?: outputs.GetStorageNetAppStorageVmTag[];
    readonly uuid?: string;
    readonly versionContext?: outputs.GetStorageNetAppStorageVmVersionContext;
}
export function getStorageNetAppStorageVmOutput(args?: GetStorageNetAppStorageVmOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageNetAppStorageVmResult> {
    return pulumi.output(args).apply((a: any) => getStorageNetAppStorageVm(a, opts))
}

/**
 * A collection of arguments for invoking getStorageNetAppStorageVm.
 */
export interface GetStorageNetAppStorageVmOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    aggregates?: pulumi.Input<pulumi.Input<string>[]>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppStorageVmAncestorArgs>[]>;
    array?: pulumi.Input<inputs.GetStorageNetAppStorageVmArrayArgs>;
    avgPerformanceMetrics?: pulumi.Input<inputs.GetStorageNetAppStorageVmAvgPerformanceMetricsArgs>;
    cifsEnabled?: pulumi.Input<boolean>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    diskPools?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppStorageVmDiskPoolArgs>[]>;
    dnsDomains?: pulumi.Input<pulumi.Input<string>[]>;
    domainGroupMoid?: pulumi.Input<string>;
    events?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppStorageVmEventArgs>[]>;
    fcpEnabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    ipspace?: pulumi.Input<string>;
    isProtected?: pulumi.Input<string>;
    iscsiEnabled?: pulumi.Input<boolean>;
    key?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameServers?: pulumi.Input<pulumi.Input<string>[]>;
    nativeFpolicyCount?: pulumi.Input<number>;
    nfsEnabled?: pulumi.Input<boolean>;
    nvmeEnabled?: pulumi.Input<boolean>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetStorageNetAppStorageVmParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppStorageVmPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    subtype?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppStorageVmTagArgs>[]>;
    uuid?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetStorageNetAppStorageVmVersionContextArgs>;
}
