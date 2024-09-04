// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageNetAppDiskEvent(args?: GetStorageNetAppDiskEventArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageNetAppDiskEventResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getStorageNetAppDiskEvent:getStorageNetAppDiskEvent", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "cause": args.cause,
        "classId": args.classId,
        "clusterUuid": args.clusterUuid,
        "createTime": args.createTime,
        "currentState": args.currentState,
        "disk": args.disk,
        "domainGroupMoid": args.domainGroupMoid,
        "duration": args.duration,
        "id": args.id,
        "impactArea": args.impactArea,
        "impactLevel": args.impactLevel,
        "impactResourceName": args.impactResourceName,
        "impactResourceType": args.impactResourceType,
        "impactResourceUuid": args.impactResourceUuid,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "nodeUuid": args.nodeUuid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "severity": args.severity,
        "sharedScope": args.sharedScope,
        "svmUuid": args.svmUuid,
        "tags": args.tags,
        "uuid": args.uuid,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageNetAppDiskEvent.
 */
export interface GetStorageNetAppDiskEventArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetStorageNetAppDiskEventAncestor[];
    cause?: string;
    classId?: string;
    clusterUuid?: string;
    createTime?: string;
    currentState?: string;
    disk?: inputs.GetStorageNetAppDiskEventDisk;
    domainGroupMoid?: string;
    duration?: string;
    id?: string;
    impactArea?: string;
    impactLevel?: string;
    impactResourceName?: string;
    impactResourceType?: string;
    impactResourceUuid?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    nodeUuid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetStorageNetAppDiskEventParent;
    permissionResources?: inputs.GetStorageNetAppDiskEventPermissionResource[];
    severity?: string;
    sharedScope?: string;
    svmUuid?: string;
    tags?: inputs.GetStorageNetAppDiskEventTag[];
    uuid?: string;
    versionContext?: inputs.GetStorageNetAppDiskEventVersionContext;
}

/**
 * A collection of values returned by getStorageNetAppDiskEvent.
 */
export interface GetStorageNetAppDiskEventResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetStorageNetAppDiskEventAncestor[];
    readonly cause?: string;
    readonly classId?: string;
    readonly clusterUuid?: string;
    readonly createTime?: string;
    readonly currentState?: string;
    readonly disk?: outputs.GetStorageNetAppDiskEventDisk;
    readonly domainGroupMoid?: string;
    readonly duration?: string;
    readonly id: string;
    readonly impactArea?: string;
    readonly impactLevel?: string;
    readonly impactResourceName?: string;
    readonly impactResourceType?: string;
    readonly impactResourceUuid?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly nodeUuid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetStorageNetAppDiskEventParent;
    readonly permissionResources?: outputs.GetStorageNetAppDiskEventPermissionResource[];
    readonly results: outputs.GetStorageNetAppDiskEventResult[];
    readonly severity?: string;
    readonly sharedScope?: string;
    readonly svmUuid?: string;
    readonly tags?: outputs.GetStorageNetAppDiskEventTag[];
    readonly uuid?: string;
    readonly versionContext?: outputs.GetStorageNetAppDiskEventVersionContext;
}
export function getStorageNetAppDiskEventOutput(args?: GetStorageNetAppDiskEventOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageNetAppDiskEventResult> {
    return pulumi.output(args).apply((a: any) => getStorageNetAppDiskEvent(a, opts))
}

/**
 * A collection of arguments for invoking getStorageNetAppDiskEvent.
 */
export interface GetStorageNetAppDiskEventOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppDiskEventAncestorArgs>[]>;
    cause?: pulumi.Input<string>;
    classId?: pulumi.Input<string>;
    clusterUuid?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    currentState?: pulumi.Input<string>;
    disk?: pulumi.Input<inputs.GetStorageNetAppDiskEventDiskArgs>;
    domainGroupMoid?: pulumi.Input<string>;
    duration?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    impactArea?: pulumi.Input<string>;
    impactLevel?: pulumi.Input<string>;
    impactResourceName?: pulumi.Input<string>;
    impactResourceType?: pulumi.Input<string>;
    impactResourceUuid?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nodeUuid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetStorageNetAppDiskEventParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppDiskEventPermissionResourceArgs>[]>;
    severity?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    svmUuid?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetStorageNetAppDiskEventTagArgs>[]>;
    uuid?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetStorageNetAppDiskEventVersionContextArgs>;
}
