// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServerConfigChangeDetail(args?: GetServerConfigChangeDetailArgs, opts?: pulumi.InvokeOptions): Promise<GetServerConfigChangeDetailResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getServerConfigChangeDetail:getServerConfigChangeDetail", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "changes": args.changes,
        "classId": args.classId,
        "configChangeContext": args.configChangeContext,
        "configChangeFlag": args.configChangeFlag,
        "createTime": args.createTime,
        "disruptions": args.disruptions,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "message": args.message,
        "modStatus": args.modStatus,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "profile": args.profile,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServerConfigChangeDetail.
 */
export interface GetServerConfigChangeDetailArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetServerConfigChangeDetailAncestor[];
    changes?: string[];
    classId?: string;
    configChangeContext?: inputs.GetServerConfigChangeDetailConfigChangeContext;
    configChangeFlag?: string;
    createTime?: string;
    disruptions?: string[];
    domainGroupMoid?: string;
    id?: string;
    message?: string;
    modStatus?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetServerConfigChangeDetailParent;
    permissionResources?: inputs.GetServerConfigChangeDetailPermissionResource[];
    profile?: inputs.GetServerConfigChangeDetailProfile;
    sharedScope?: string;
    tags?: inputs.GetServerConfigChangeDetailTag[];
    versionContext?: inputs.GetServerConfigChangeDetailVersionContext;
}

/**
 * A collection of values returned by getServerConfigChangeDetail.
 */
export interface GetServerConfigChangeDetailResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetServerConfigChangeDetailAncestor[];
    readonly changes?: string[];
    readonly classId?: string;
    readonly configChangeContext?: outputs.GetServerConfigChangeDetailConfigChangeContext;
    readonly configChangeFlag?: string;
    readonly createTime?: string;
    readonly disruptions?: string[];
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly message?: string;
    readonly modStatus?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetServerConfigChangeDetailParent;
    readonly permissionResources?: outputs.GetServerConfigChangeDetailPermissionResource[];
    readonly profile?: outputs.GetServerConfigChangeDetailProfile;
    readonly results: outputs.GetServerConfigChangeDetailResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetServerConfigChangeDetailTag[];
    readonly versionContext?: outputs.GetServerConfigChangeDetailVersionContext;
}
export function getServerConfigChangeDetailOutput(args?: GetServerConfigChangeDetailOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerConfigChangeDetailResult> {
    return pulumi.output(args).apply((a: any) => getServerConfigChangeDetail(a, opts))
}

/**
 * A collection of arguments for invoking getServerConfigChangeDetail.
 */
export interface GetServerConfigChangeDetailOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetServerConfigChangeDetailAncestorArgs>[]>;
    changes?: pulumi.Input<pulumi.Input<string>[]>;
    classId?: pulumi.Input<string>;
    configChangeContext?: pulumi.Input<inputs.GetServerConfigChangeDetailConfigChangeContextArgs>;
    configChangeFlag?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    disruptions?: pulumi.Input<pulumi.Input<string>[]>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    message?: pulumi.Input<string>;
    modStatus?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetServerConfigChangeDetailParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetServerConfigChangeDetailPermissionResourceArgs>[]>;
    profile?: pulumi.Input<inputs.GetServerConfigChangeDetailProfileArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetServerConfigChangeDetailTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetServerConfigChangeDetailVersionContextArgs>;
}
