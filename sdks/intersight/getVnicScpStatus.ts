// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVnicScpStatus(args?: GetVnicScpStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetVnicScpStatusResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getVnicScpStatus:getVnicScpStatus", {
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
        "profile": args.profile,
        "reason": args.reason,
        "sharedScope": args.sharedScope,
        "status": args.status,
        "tags": args.tags,
        "versionContext": args.versionContext,
        "vhbaInfos": args.vhbaInfos,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVnicScpStatus.
 */
export interface GetVnicScpStatusArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetVnicScpStatusAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetVnicScpStatusParent;
    permissionResources?: inputs.GetVnicScpStatusPermissionResource[];
    profile?: inputs.GetVnicScpStatusProfile;
    reason?: string;
    sharedScope?: string;
    status?: string;
    tags?: inputs.GetVnicScpStatusTag[];
    versionContext?: inputs.GetVnicScpStatusVersionContext;
    vhbaInfos?: inputs.GetVnicScpStatusVhbaInfo[];
}

/**
 * A collection of values returned by getVnicScpStatus.
 */
export interface GetVnicScpStatusResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetVnicScpStatusAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetVnicScpStatusParent;
    readonly permissionResources?: outputs.GetVnicScpStatusPermissionResource[];
    readonly profile?: outputs.GetVnicScpStatusProfile;
    readonly reason?: string;
    readonly results: outputs.GetVnicScpStatusResult[];
    readonly sharedScope?: string;
    readonly status?: string;
    readonly tags?: outputs.GetVnicScpStatusTag[];
    readonly versionContext?: outputs.GetVnicScpStatusVersionContext;
    readonly vhbaInfos?: outputs.GetVnicScpStatusVhbaInfo[];
}
export function getVnicScpStatusOutput(args?: GetVnicScpStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVnicScpStatusResult> {
    return pulumi.output(args).apply((a: any) => getVnicScpStatus(a, opts))
}

/**
 * A collection of arguments for invoking getVnicScpStatus.
 */
export interface GetVnicScpStatusOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetVnicScpStatusAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetVnicScpStatusParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetVnicScpStatusPermissionResourceArgs>[]>;
    profile?: pulumi.Input<inputs.GetVnicScpStatusProfileArgs>;
    reason?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetVnicScpStatusTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetVnicScpStatusVersionContextArgs>;
    vhbaInfos?: pulumi.Input<pulumi.Input<inputs.GetVnicScpStatusVhbaInfoArgs>[]>;
}
