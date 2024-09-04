// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkTelemetryCheck(args?: GetNetworkTelemetryCheckArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkTelemetryCheckResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getNetworkTelemetryCheck:getNetworkTelemetryCheck", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "deviceMoId": args.deviceMoId,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "registeredDevice": args.registeredDevice,
        "rn": args.rn,
        "sharedScope": args.sharedScope,
        "status": args.status,
        "tags": args.tags,
        "telemetryConfig": args.telemetryConfig,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkTelemetryCheck.
 */
export interface GetNetworkTelemetryCheckArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetNetworkTelemetryCheckAncestor[];
    classId?: string;
    createTime?: string;
    deviceMoId?: string;
    dn?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetNetworkTelemetryCheckParent;
    permissionResources?: inputs.GetNetworkTelemetryCheckPermissionResource[];
    registeredDevice?: inputs.GetNetworkTelemetryCheckRegisteredDevice;
    rn?: string;
    sharedScope?: string;
    status?: string;
    tags?: inputs.GetNetworkTelemetryCheckTag[];
    telemetryConfig?: string;
    versionContext?: inputs.GetNetworkTelemetryCheckVersionContext;
}

/**
 * A collection of values returned by getNetworkTelemetryCheck.
 */
export interface GetNetworkTelemetryCheckResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetNetworkTelemetryCheckAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly deviceMoId?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetNetworkTelemetryCheckParent;
    readonly permissionResources?: outputs.GetNetworkTelemetryCheckPermissionResource[];
    readonly registeredDevice?: outputs.GetNetworkTelemetryCheckRegisteredDevice;
    readonly results: outputs.GetNetworkTelemetryCheckResult[];
    readonly rn?: string;
    readonly sharedScope?: string;
    readonly status?: string;
    readonly tags?: outputs.GetNetworkTelemetryCheckTag[];
    readonly telemetryConfig?: string;
    readonly versionContext?: outputs.GetNetworkTelemetryCheckVersionContext;
}
export function getNetworkTelemetryCheckOutput(args?: GetNetworkTelemetryCheckOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkTelemetryCheckResult> {
    return pulumi.output(args).apply((a: any) => getNetworkTelemetryCheck(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkTelemetryCheck.
 */
export interface GetNetworkTelemetryCheckOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetNetworkTelemetryCheckAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deviceMoId?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetNetworkTelemetryCheckParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetNetworkTelemetryCheckPermissionResourceArgs>[]>;
    registeredDevice?: pulumi.Input<inputs.GetNetworkTelemetryCheckRegisteredDeviceArgs>;
    rn?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNetworkTelemetryCheckTagArgs>[]>;
    telemetryConfig?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetNetworkTelemetryCheckVersionContextArgs>;
}
