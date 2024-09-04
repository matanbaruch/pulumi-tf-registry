// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getViewHealthStatus(args?: GetViewHealthStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetViewHealthStatusResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getViewHealthStatus:getViewHealthStatus", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getViewHealthStatus.
 */
export interface GetViewHealthStatusArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetViewHealthStatusAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetViewHealthStatusParent;
    permissionResources?: inputs.GetViewHealthStatusPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetViewHealthStatusTag[];
    versionContext?: inputs.GetViewHealthStatusVersionContext;
}

/**
 * A collection of values returned by getViewHealthStatus.
 */
export interface GetViewHealthStatusResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetViewHealthStatusAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetViewHealthStatusParent;
    readonly permissionResources?: outputs.GetViewHealthStatusPermissionResource[];
    readonly results: outputs.GetViewHealthStatusResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetViewHealthStatusTag[];
    readonly versionContext?: outputs.GetViewHealthStatusVersionContext;
}
export function getViewHealthStatusOutput(args?: GetViewHealthStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetViewHealthStatusResult> {
    return pulumi.output(args).apply((a: any) => getViewHealthStatus(a, opts))
}

/**
 * A collection of arguments for invoking getViewHealthStatus.
 */
export interface GetViewHealthStatusOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetViewHealthStatusAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetViewHealthStatusParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetViewHealthStatusPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetViewHealthStatusTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetViewHealthStatusVersionContextArgs>;
}
