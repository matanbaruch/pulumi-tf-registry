// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIamLocalUserPasswordPolicy(args?: GetIamLocalUserPasswordPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetIamLocalUserPasswordPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getIamLocalUserPasswordPolicy:getIamLocalUserPasswordPolicy", {
        "account": args.account,
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "enableLockOutForAdminUser": args.enableLockOutForAdminUser,
        "failedLoginTrackerWindow": args.failedLoginTrackerWindow,
        "id": args.id,
        "lockOutTimePeriod": args.lockOutTimePeriod,
        "maxFailedLoginsAllowed": args.maxFailedLoginsAllowed,
        "minCharDifference": args.minCharDifference,
        "minDaysBetweenPasswordChange": args.minDaysBetweenPasswordChange,
        "minLengthPassword": args.minLengthPassword,
        "minLowerCase": args.minLowerCase,
        "minNumeric": args.minNumeric,
        "minSpecialChar": args.minSpecialChar,
        "minUpperCase": args.minUpperCase,
        "modTime": args.modTime,
        "moid": args.moid,
        "numPreviousPasswordsDisallowed": args.numPreviousPasswordsDisallowed,
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
 * A collection of arguments for invoking getIamLocalUserPasswordPolicy.
 */
export interface GetIamLocalUserPasswordPolicyArgs {
    account?: inputs.GetIamLocalUserPasswordPolicyAccount;
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetIamLocalUserPasswordPolicyAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    enableLockOutForAdminUser?: boolean;
    failedLoginTrackerWindow?: number;
    id?: string;
    lockOutTimePeriod?: number;
    maxFailedLoginsAllowed?: number;
    minCharDifference?: number;
    minDaysBetweenPasswordChange?: number;
    minLengthPassword?: number;
    minLowerCase?: number;
    minNumeric?: number;
    minSpecialChar?: number;
    minUpperCase?: number;
    modTime?: string;
    moid?: string;
    numPreviousPasswordsDisallowed?: number;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetIamLocalUserPasswordPolicyParent;
    permissionResources?: inputs.GetIamLocalUserPasswordPolicyPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetIamLocalUserPasswordPolicyTag[];
    versionContext?: inputs.GetIamLocalUserPasswordPolicyVersionContext;
}

/**
 * A collection of values returned by getIamLocalUserPasswordPolicy.
 */
export interface GetIamLocalUserPasswordPolicyResult {
    readonly account?: outputs.GetIamLocalUserPasswordPolicyAccount;
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetIamLocalUserPasswordPolicyAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly enableLockOutForAdminUser?: boolean;
    readonly failedLoginTrackerWindow?: number;
    readonly id: string;
    readonly lockOutTimePeriod?: number;
    readonly maxFailedLoginsAllowed?: number;
    readonly minCharDifference?: number;
    readonly minDaysBetweenPasswordChange?: number;
    readonly minLengthPassword?: number;
    readonly minLowerCase?: number;
    readonly minNumeric?: number;
    readonly minSpecialChar?: number;
    readonly minUpperCase?: number;
    readonly modTime?: string;
    readonly moid?: string;
    readonly numPreviousPasswordsDisallowed?: number;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetIamLocalUserPasswordPolicyParent;
    readonly permissionResources?: outputs.GetIamLocalUserPasswordPolicyPermissionResource[];
    readonly results: outputs.GetIamLocalUserPasswordPolicyResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetIamLocalUserPasswordPolicyTag[];
    readonly versionContext?: outputs.GetIamLocalUserPasswordPolicyVersionContext;
}
export function getIamLocalUserPasswordPolicyOutput(args?: GetIamLocalUserPasswordPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamLocalUserPasswordPolicyResult> {
    return pulumi.output(args).apply((a: any) => getIamLocalUserPasswordPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getIamLocalUserPasswordPolicy.
 */
export interface GetIamLocalUserPasswordPolicyOutputArgs {
    account?: pulumi.Input<inputs.GetIamLocalUserPasswordPolicyAccountArgs>;
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetIamLocalUserPasswordPolicyAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    enableLockOutForAdminUser?: pulumi.Input<boolean>;
    failedLoginTrackerWindow?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    lockOutTimePeriod?: pulumi.Input<number>;
    maxFailedLoginsAllowed?: pulumi.Input<number>;
    minCharDifference?: pulumi.Input<number>;
    minDaysBetweenPasswordChange?: pulumi.Input<number>;
    minLengthPassword?: pulumi.Input<number>;
    minLowerCase?: pulumi.Input<number>;
    minNumeric?: pulumi.Input<number>;
    minSpecialChar?: pulumi.Input<number>;
    minUpperCase?: pulumi.Input<number>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    numPreviousPasswordsDisallowed?: pulumi.Input<number>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetIamLocalUserPasswordPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetIamLocalUserPasswordPolicyPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetIamLocalUserPasswordPolicyTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetIamLocalUserPasswordPolicyVersionContextArgs>;
}
