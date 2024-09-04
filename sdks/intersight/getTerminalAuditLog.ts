// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTerminalAuditLog(args?: GetTerminalAuditLogArgs, opts?: pulumi.InvokeOptions): Promise<GetTerminalAuditLogResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getTerminalAuditLog:getTerminalAuditLog", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "deviceRegistration": args.deviceRegistration,
        "domainGroupMoid": args.domainGroupMoid,
        "endTime": args.endTime,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "startTime": args.startTime,
        "tags": args.tags,
        "user": args.user,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTerminalAuditLog.
 */
export interface GetTerminalAuditLogArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetTerminalAuditLogAncestor[];
    classId?: string;
    createTime?: string;
    deviceRegistration?: inputs.GetTerminalAuditLogDeviceRegistration;
    domainGroupMoid?: string;
    endTime?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetTerminalAuditLogParent;
    permissionResources?: inputs.GetTerminalAuditLogPermissionResource[];
    sharedScope?: string;
    startTime?: string;
    tags?: inputs.GetTerminalAuditLogTag[];
    user?: inputs.GetTerminalAuditLogUser;
    versionContext?: inputs.GetTerminalAuditLogVersionContext;
}

/**
 * A collection of values returned by getTerminalAuditLog.
 */
export interface GetTerminalAuditLogResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetTerminalAuditLogAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly deviceRegistration?: outputs.GetTerminalAuditLogDeviceRegistration;
    readonly domainGroupMoid?: string;
    readonly endTime?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetTerminalAuditLogParent;
    readonly permissionResources?: outputs.GetTerminalAuditLogPermissionResource[];
    readonly results: outputs.GetTerminalAuditLogResult[];
    readonly sharedScope?: string;
    readonly startTime?: string;
    readonly tags?: outputs.GetTerminalAuditLogTag[];
    readonly user?: outputs.GetTerminalAuditLogUser;
    readonly versionContext?: outputs.GetTerminalAuditLogVersionContext;
}
export function getTerminalAuditLogOutput(args?: GetTerminalAuditLogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTerminalAuditLogResult> {
    return pulumi.output(args).apply((a: any) => getTerminalAuditLog(a, opts))
}

/**
 * A collection of arguments for invoking getTerminalAuditLog.
 */
export interface GetTerminalAuditLogOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetTerminalAuditLogAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deviceRegistration?: pulumi.Input<inputs.GetTerminalAuditLogDeviceRegistrationArgs>;
    domainGroupMoid?: pulumi.Input<string>;
    endTime?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetTerminalAuditLogParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetTerminalAuditLogPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    startTime?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetTerminalAuditLogTagArgs>[]>;
    user?: pulumi.Input<inputs.GetTerminalAuditLogUserArgs>;
    versionContext?: pulumi.Input<inputs.GetTerminalAuditLogVersionContextArgs>;
}
