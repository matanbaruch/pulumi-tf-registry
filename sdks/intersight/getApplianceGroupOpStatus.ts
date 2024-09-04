// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApplianceGroupOpStatus(args?: GetApplianceGroupOpStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetApplianceGroupOpStatusResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getApplianceGroupOpStatus:getApplianceGroupOpStatus", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "apps": args.apps,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "groupName": args.groupName,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "overallStatus": args.overallStatus,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "systemOpStatus": args.systemOpStatus,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApplianceGroupOpStatus.
 */
export interface GetApplianceGroupOpStatusArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetApplianceGroupOpStatusAncestor[];
    apps?: inputs.GetApplianceGroupOpStatusApp[];
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    groupName?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    overallStatus?: string;
    owners?: string[];
    parent?: inputs.GetApplianceGroupOpStatusParent;
    permissionResources?: inputs.GetApplianceGroupOpStatusPermissionResource[];
    sharedScope?: string;
    systemOpStatus?: inputs.GetApplianceGroupOpStatusSystemOpStatus;
    tags?: inputs.GetApplianceGroupOpStatusTag[];
    versionContext?: inputs.GetApplianceGroupOpStatusVersionContext;
}

/**
 * A collection of values returned by getApplianceGroupOpStatus.
 */
export interface GetApplianceGroupOpStatusResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetApplianceGroupOpStatusAncestor[];
    readonly apps?: outputs.GetApplianceGroupOpStatusApp[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly groupName?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly overallStatus?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetApplianceGroupOpStatusParent;
    readonly permissionResources?: outputs.GetApplianceGroupOpStatusPermissionResource[];
    readonly results: outputs.GetApplianceGroupOpStatusResult[];
    readonly sharedScope?: string;
    readonly systemOpStatus?: outputs.GetApplianceGroupOpStatusSystemOpStatus;
    readonly tags?: outputs.GetApplianceGroupOpStatusTag[];
    readonly versionContext?: outputs.GetApplianceGroupOpStatusVersionContext;
}
export function getApplianceGroupOpStatusOutput(args?: GetApplianceGroupOpStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplianceGroupOpStatusResult> {
    return pulumi.output(args).apply((a: any) => getApplianceGroupOpStatus(a, opts))
}

/**
 * A collection of arguments for invoking getApplianceGroupOpStatus.
 */
export interface GetApplianceGroupOpStatusOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetApplianceGroupOpStatusAncestorArgs>[]>;
    apps?: pulumi.Input<pulumi.Input<inputs.GetApplianceGroupOpStatusAppArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    groupName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    overallStatus?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetApplianceGroupOpStatusParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetApplianceGroupOpStatusPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    systemOpStatus?: pulumi.Input<inputs.GetApplianceGroupOpStatusSystemOpStatusArgs>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetApplianceGroupOpStatusTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetApplianceGroupOpStatusVersionContextArgs>;
}
