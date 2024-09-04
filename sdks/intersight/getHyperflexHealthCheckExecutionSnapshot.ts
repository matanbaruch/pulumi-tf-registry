// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHyperflexHealthCheckExecutionSnapshot(args?: GetHyperflexHealthCheckExecutionSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperflexHealthCheckExecutionSnapshotResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getHyperflexHealthCheckExecutionSnapshot:getHyperflexHealthCheckExecutionSnapshot", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "category": args.category,
        "cause": args.cause,
        "classId": args.classId,
        "completionTime": args.completionTime,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "healthCheckDefinition": args.healthCheckDefinition,
        "healthCheckDetails": args.healthCheckDetails,
        "healthCheckExecutionErrorDetails": args.healthCheckExecutionErrorDetails,
        "healthCheckExecutionErrorSummary": args.healthCheckExecutionErrorSummary,
        "healthCheckExecutionStatus": args.healthCheckExecutionStatus,
        "healthCheckResult": args.healthCheckResult,
        "healthCheckSummary": args.healthCheckSummary,
        "healthCheckVcenterIp": args.healthCheckVcenterIp,
        "hxCluster": args.hxCluster,
        "hxDeviceName": args.hxDeviceName,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "nodeLevelInfos": args.nodeLevelInfos,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "suggestedResolution": args.suggestedResolution,
        "tags": args.tags,
        "versionContext": args.versionContext,
        "workflow": args.workflow,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHyperflexHealthCheckExecutionSnapshot.
 */
export interface GetHyperflexHealthCheckExecutionSnapshotArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetHyperflexHealthCheckExecutionSnapshotAncestor[];
    category?: string;
    cause?: string;
    classId?: string;
    completionTime?: string;
    createTime?: string;
    domainGroupMoid?: string;
    healthCheckDefinition?: inputs.GetHyperflexHealthCheckExecutionSnapshotHealthCheckDefinition;
    healthCheckDetails?: string;
    healthCheckExecutionErrorDetails?: string;
    healthCheckExecutionErrorSummary?: string;
    healthCheckExecutionStatus?: string;
    healthCheckResult?: string;
    healthCheckSummary?: string;
    healthCheckVcenterIp?: string;
    hxCluster?: inputs.GetHyperflexHealthCheckExecutionSnapshotHxCluster;
    hxDeviceName?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    nodeLevelInfos?: inputs.GetHyperflexHealthCheckExecutionSnapshotNodeLevelInfo[];
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetHyperflexHealthCheckExecutionSnapshotParent;
    permissionResources?: inputs.GetHyperflexHealthCheckExecutionSnapshotPermissionResource[];
    registeredDevice?: inputs.GetHyperflexHealthCheckExecutionSnapshotRegisteredDevice;
    sharedScope?: string;
    suggestedResolution?: string;
    tags?: inputs.GetHyperflexHealthCheckExecutionSnapshotTag[];
    versionContext?: inputs.GetHyperflexHealthCheckExecutionSnapshotVersionContext;
    workflow?: inputs.GetHyperflexHealthCheckExecutionSnapshotWorkflow;
}

/**
 * A collection of values returned by getHyperflexHealthCheckExecutionSnapshot.
 */
export interface GetHyperflexHealthCheckExecutionSnapshotResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetHyperflexHealthCheckExecutionSnapshotAncestor[];
    readonly category?: string;
    readonly cause?: string;
    readonly classId?: string;
    readonly completionTime?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly healthCheckDefinition?: outputs.GetHyperflexHealthCheckExecutionSnapshotHealthCheckDefinition;
    readonly healthCheckDetails?: string;
    readonly healthCheckExecutionErrorDetails?: string;
    readonly healthCheckExecutionErrorSummary?: string;
    readonly healthCheckExecutionStatus?: string;
    readonly healthCheckResult?: string;
    readonly healthCheckSummary?: string;
    readonly healthCheckVcenterIp?: string;
    readonly hxCluster?: outputs.GetHyperflexHealthCheckExecutionSnapshotHxCluster;
    readonly hxDeviceName?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly nodeLevelInfos?: outputs.GetHyperflexHealthCheckExecutionSnapshotNodeLevelInfo[];
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetHyperflexHealthCheckExecutionSnapshotParent;
    readonly permissionResources?: outputs.GetHyperflexHealthCheckExecutionSnapshotPermissionResource[];
    readonly registeredDevice?: outputs.GetHyperflexHealthCheckExecutionSnapshotRegisteredDevice;
    readonly results: outputs.GetHyperflexHealthCheckExecutionSnapshotResult[];
    readonly sharedScope?: string;
    readonly suggestedResolution?: string;
    readonly tags?: outputs.GetHyperflexHealthCheckExecutionSnapshotTag[];
    readonly versionContext?: outputs.GetHyperflexHealthCheckExecutionSnapshotVersionContext;
    readonly workflow?: outputs.GetHyperflexHealthCheckExecutionSnapshotWorkflow;
}
export function getHyperflexHealthCheckExecutionSnapshotOutput(args?: GetHyperflexHealthCheckExecutionSnapshotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHyperflexHealthCheckExecutionSnapshotResult> {
    return pulumi.output(args).apply((a: any) => getHyperflexHealthCheckExecutionSnapshot(a, opts))
}

/**
 * A collection of arguments for invoking getHyperflexHealthCheckExecutionSnapshot.
 */
export interface GetHyperflexHealthCheckExecutionSnapshotOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetHyperflexHealthCheckExecutionSnapshotAncestorArgs>[]>;
    category?: pulumi.Input<string>;
    cause?: pulumi.Input<string>;
    classId?: pulumi.Input<string>;
    completionTime?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    healthCheckDefinition?: pulumi.Input<inputs.GetHyperflexHealthCheckExecutionSnapshotHealthCheckDefinitionArgs>;
    healthCheckDetails?: pulumi.Input<string>;
    healthCheckExecutionErrorDetails?: pulumi.Input<string>;
    healthCheckExecutionErrorSummary?: pulumi.Input<string>;
    healthCheckExecutionStatus?: pulumi.Input<string>;
    healthCheckResult?: pulumi.Input<string>;
    healthCheckSummary?: pulumi.Input<string>;
    healthCheckVcenterIp?: pulumi.Input<string>;
    hxCluster?: pulumi.Input<inputs.GetHyperflexHealthCheckExecutionSnapshotHxClusterArgs>;
    hxDeviceName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    nodeLevelInfos?: pulumi.Input<pulumi.Input<inputs.GetHyperflexHealthCheckExecutionSnapshotNodeLevelInfoArgs>[]>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetHyperflexHealthCheckExecutionSnapshotParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetHyperflexHealthCheckExecutionSnapshotPermissionResourceArgs>[]>;
    registeredDevice?: pulumi.Input<inputs.GetHyperflexHealthCheckExecutionSnapshotRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    suggestedResolution?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetHyperflexHealthCheckExecutionSnapshotTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetHyperflexHealthCheckExecutionSnapshotVersionContextArgs>;
    workflow?: pulumi.Input<inputs.GetHyperflexHealthCheckExecutionSnapshotWorkflowArgs>;
}
