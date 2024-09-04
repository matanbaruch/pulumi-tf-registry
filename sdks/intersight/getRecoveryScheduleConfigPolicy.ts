// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRecoveryScheduleConfigPolicy(args?: GetRecoveryScheduleConfigPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetRecoveryScheduleConfigPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getRecoveryScheduleConfigPolicy:getRecoveryScheduleConfigPolicy", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "backupProfiles": args.backupProfiles,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "schedule": args.schedule,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRecoveryScheduleConfigPolicy.
 */
export interface GetRecoveryScheduleConfigPolicyArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetRecoveryScheduleConfigPolicyAncestor[];
    backupProfiles?: inputs.GetRecoveryScheduleConfigPolicyBackupProfile[];
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetRecoveryScheduleConfigPolicyOrganization;
    owners?: string[];
    parent?: inputs.GetRecoveryScheduleConfigPolicyParent;
    permissionResources?: inputs.GetRecoveryScheduleConfigPolicyPermissionResource[];
    schedule?: inputs.GetRecoveryScheduleConfigPolicySchedule;
    sharedScope?: string;
    tags?: inputs.GetRecoveryScheduleConfigPolicyTag[];
    versionContext?: inputs.GetRecoveryScheduleConfigPolicyVersionContext;
}

/**
 * A collection of values returned by getRecoveryScheduleConfigPolicy.
 */
export interface GetRecoveryScheduleConfigPolicyResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetRecoveryScheduleConfigPolicyAncestor[];
    readonly backupProfiles?: outputs.GetRecoveryScheduleConfigPolicyBackupProfile[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetRecoveryScheduleConfigPolicyOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetRecoveryScheduleConfigPolicyParent;
    readonly permissionResources?: outputs.GetRecoveryScheduleConfigPolicyPermissionResource[];
    readonly results: outputs.GetRecoveryScheduleConfigPolicyResult[];
    readonly schedule?: outputs.GetRecoveryScheduleConfigPolicySchedule;
    readonly sharedScope?: string;
    readonly tags?: outputs.GetRecoveryScheduleConfigPolicyTag[];
    readonly versionContext?: outputs.GetRecoveryScheduleConfigPolicyVersionContext;
}
export function getRecoveryScheduleConfigPolicyOutput(args?: GetRecoveryScheduleConfigPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRecoveryScheduleConfigPolicyResult> {
    return pulumi.output(args).apply((a: any) => getRecoveryScheduleConfigPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getRecoveryScheduleConfigPolicy.
 */
export interface GetRecoveryScheduleConfigPolicyOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetRecoveryScheduleConfigPolicyAncestorArgs>[]>;
    backupProfiles?: pulumi.Input<pulumi.Input<inputs.GetRecoveryScheduleConfigPolicyBackupProfileArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetRecoveryScheduleConfigPolicyOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetRecoveryScheduleConfigPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetRecoveryScheduleConfigPolicyPermissionResourceArgs>[]>;
    schedule?: pulumi.Input<inputs.GetRecoveryScheduleConfigPolicyScheduleArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetRecoveryScheduleConfigPolicyTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetRecoveryScheduleConfigPolicyVersionContextArgs>;
}
