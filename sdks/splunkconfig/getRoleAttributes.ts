// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRoleAttributes(args: GetRoleAttributesArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleAttributesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("splunkconfig:index/getRoleAttributes:getRoleAttributes", {
        "id": args.id,
        "roleName": args.roleName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRoleAttributes.
 */
export interface GetRoleAttributesArgs {
    id?: string;
    roleName: string;
}

/**
 * A collection of values returned by getRoleAttributes.
 */
export interface GetRoleAttributesResult {
    readonly capabilities: string[];
    readonly cumulativeRealtimeSearchJobsQuota: number;
    readonly cumulativeSearchJobsQuota: number;
    readonly id: string;
    readonly importedRoles: string[];
    readonly realtimeSearchJobsQuota: number;
    readonly roleName: string;
    readonly searchDiskQuota: number;
    readonly searchFilter: string;
    readonly searchIndexesAlloweds: string[];
    readonly searchJobsQuota: number;
    readonly searchTimeWin: number;
}
export function getRoleAttributesOutput(args: GetRoleAttributesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoleAttributesResult> {
    return pulumi.output(args).apply((a: any) => getRoleAttributes(a, opts))
}

/**
 * A collection of arguments for invoking getRoleAttributes.
 */
export interface GetRoleAttributesOutputArgs {
    id?: pulumi.Input<string>;
    roleName: pulumi.Input<string>;
}
