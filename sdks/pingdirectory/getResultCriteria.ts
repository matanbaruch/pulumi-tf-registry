// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getResultCriteria(args: GetResultCriteriaArgs, opts?: pulumi.InvokeOptions): Promise<GetResultCriteriaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getResultCriteria:getResultCriteria", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getResultCriteria.
 */
export interface GetResultCriteriaArgs {
    name: string;
}

/**
 * A collection of values returned by getResultCriteria.
 */
export interface GetResultCriteriaResult {
    readonly allIncludedAuthzUserGroupDns: string[];
    readonly allIncludedResponseControls: string[];
    readonly allIncludedResultCriterias: string[];
    readonly anyIncludedAuthzUserGroupDns: string[];
    readonly anyIncludedResponseControls: string[];
    readonly anyIncludedResultCriterias: string[];
    readonly assuranceBehaviorAlteredByControl: string;
    readonly assuranceSatisfied: string;
    readonly assuranceTimeoutCriteria: string;
    readonly assuranceTimeoutValue: string;
    readonly description: string;
    readonly excludedAuthzUserBaseDns: string[];
    readonly excludedUserBaseDns: string[];
    readonly excludedUserFilters: string[];
    readonly excludedUserGroupDns: string[];
    readonly extensionArguments: string[];
    readonly extensionClass: string;
    readonly id: string;
    readonly includeAnonymousBinds: boolean;
    readonly includedAuthzUserBaseDns: string[];
    readonly includedUserBaseDns: string[];
    readonly includedUserFilters: string[];
    readonly includedUserGroupDns: string[];
    readonly localAssuranceLevels: string[];
    readonly missingAnyPrivilege: string;
    readonly missingPrivileges: string[];
    readonly name: string;
    readonly noneIncludedAuthzUserGroupDns: string[];
    readonly noneIncludedResponseControls: string[];
    readonly noneIncludedResultCriterias: string[];
    readonly notAllIncludedAuthzUserGroupDns: string[];
    readonly notAllIncludedResponseControls: string[];
    readonly notAllIncludedResultCriterias: string[];
    readonly processingTimeCriteria: string;
    readonly processingTimeValue: string;
    readonly queueTimeCriteria: string;
    readonly queueTimeValue: string;
    readonly referralReturned: string;
    readonly remoteAssuranceLevels: string[];
    readonly requestCriteria: string;
    readonly responseDelayedByAssurance: string;
    readonly resultCodeCriteria: string;
    readonly resultCodeValues: string[];
    readonly retiredPasswordUsedForBind: string;
    readonly searchEntryReturnedCount: number;
    readonly searchEntryReturnedCriteria: string;
    readonly searchIndexedCriteria: string;
    readonly searchReferenceReturnedCount: number;
    readonly searchReferenceReturnedCriteria: string;
    readonly type: string;
    readonly usedAlternateAuthzid: string;
    readonly usedAnyPrivilege: string;
    readonly usedPrivileges: string[];
}
export function getResultCriteriaOutput(args: GetResultCriteriaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResultCriteriaResult> {
    return pulumi.output(args).apply((a: any) => getResultCriteria(a, opts))
}

/**
 * A collection of arguments for invoking getResultCriteria.
 */
export interface GetResultCriteriaOutputArgs {
    name: pulumi.Input<string>;
}
