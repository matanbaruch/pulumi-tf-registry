// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApplianceDataExportPolicy(args?: GetApplianceDataExportPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetApplianceDataExportPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getApplianceDataExportPolicy:getApplianceDataExportPolicy", {
        "account": args.account,
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "enable": args.enable,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "parentConfig": args.parentConfig,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "subConfigs": args.subConfigs,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApplianceDataExportPolicy.
 */
export interface GetApplianceDataExportPolicyArgs {
    account?: inputs.GetApplianceDataExportPolicyAccount;
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetApplianceDataExportPolicyAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    enable?: boolean;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetApplianceDataExportPolicyParent;
    parentConfig?: inputs.GetApplianceDataExportPolicyParentConfig;
    permissionResources?: inputs.GetApplianceDataExportPolicyPermissionResource[];
    sharedScope?: string;
    subConfigs?: inputs.GetApplianceDataExportPolicySubConfig[];
    tags?: inputs.GetApplianceDataExportPolicyTag[];
    versionContext?: inputs.GetApplianceDataExportPolicyVersionContext;
}

/**
 * A collection of values returned by getApplianceDataExportPolicy.
 */
export interface GetApplianceDataExportPolicyResult {
    readonly account?: outputs.GetApplianceDataExportPolicyAccount;
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetApplianceDataExportPolicyAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly enable?: boolean;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetApplianceDataExportPolicyParent;
    readonly parentConfig?: outputs.GetApplianceDataExportPolicyParentConfig;
    readonly permissionResources?: outputs.GetApplianceDataExportPolicyPermissionResource[];
    readonly results: outputs.GetApplianceDataExportPolicyResult[];
    readonly sharedScope?: string;
    readonly subConfigs?: outputs.GetApplianceDataExportPolicySubConfig[];
    readonly tags?: outputs.GetApplianceDataExportPolicyTag[];
    readonly versionContext?: outputs.GetApplianceDataExportPolicyVersionContext;
}
export function getApplianceDataExportPolicyOutput(args?: GetApplianceDataExportPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplianceDataExportPolicyResult> {
    return pulumi.output(args).apply((a: any) => getApplianceDataExportPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getApplianceDataExportPolicy.
 */
export interface GetApplianceDataExportPolicyOutputArgs {
    account?: pulumi.Input<inputs.GetApplianceDataExportPolicyAccountArgs>;
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetApplianceDataExportPolicyAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    enable?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetApplianceDataExportPolicyParentArgs>;
    parentConfig?: pulumi.Input<inputs.GetApplianceDataExportPolicyParentConfigArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetApplianceDataExportPolicyPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    subConfigs?: pulumi.Input<pulumi.Input<inputs.GetApplianceDataExportPolicySubConfigArgs>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetApplianceDataExportPolicyTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetApplianceDataExportPolicyVersionContextArgs>;
}
