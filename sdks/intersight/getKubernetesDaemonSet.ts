// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKubernetesDaemonSet(args?: GetKubernetesDaemonSetArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesDaemonSetResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getKubernetesDaemonSet:getKubernetesDaemonSet", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "metadata": args.metadata,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "status": args.status,
        "tags": args.tags,
        "uuid": args.uuid,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKubernetesDaemonSet.
 */
export interface GetKubernetesDaemonSetArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetKubernetesDaemonSetAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    metadata?: inputs.GetKubernetesDaemonSetMetadata;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetKubernetesDaemonSetParent;
    permissionResources?: inputs.GetKubernetesDaemonSetPermissionResource[];
    registeredDevice?: inputs.GetKubernetesDaemonSetRegisteredDevice;
    sharedScope?: string;
    status?: inputs.GetKubernetesDaemonSetStatus;
    tags?: inputs.GetKubernetesDaemonSetTag[];
    uuid?: string;
    versionContext?: inputs.GetKubernetesDaemonSetVersionContext;
}

/**
 * A collection of values returned by getKubernetesDaemonSet.
 */
export interface GetKubernetesDaemonSetResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetKubernetesDaemonSetAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly metadata?: outputs.GetKubernetesDaemonSetMetadata;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetKubernetesDaemonSetParent;
    readonly permissionResources?: outputs.GetKubernetesDaemonSetPermissionResource[];
    readonly registeredDevice?: outputs.GetKubernetesDaemonSetRegisteredDevice;
    readonly results: outputs.GetKubernetesDaemonSetResult[];
    readonly sharedScope?: string;
    readonly status?: outputs.GetKubernetesDaemonSetStatus;
    readonly tags?: outputs.GetKubernetesDaemonSetTag[];
    readonly uuid?: string;
    readonly versionContext?: outputs.GetKubernetesDaemonSetVersionContext;
}
export function getKubernetesDaemonSetOutput(args?: GetKubernetesDaemonSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubernetesDaemonSetResult> {
    return pulumi.output(args).apply((a: any) => getKubernetesDaemonSet(a, opts))
}

/**
 * A collection of arguments for invoking getKubernetesDaemonSet.
 */
export interface GetKubernetesDaemonSetOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetKubernetesDaemonSetAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    metadata?: pulumi.Input<inputs.GetKubernetesDaemonSetMetadataArgs>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetKubernetesDaemonSetParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetKubernetesDaemonSetPermissionResourceArgs>[]>;
    registeredDevice?: pulumi.Input<inputs.GetKubernetesDaemonSetRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    status?: pulumi.Input<inputs.GetKubernetesDaemonSetStatusArgs>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetKubernetesDaemonSetTagArgs>[]>;
    uuid?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetKubernetesDaemonSetVersionContextArgs>;
}
