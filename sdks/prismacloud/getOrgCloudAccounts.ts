// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOrgCloudAccounts(args?: GetOrgCloudAccountsArgs, opts?: pulumi.InvokeOptions): Promise<GetOrgCloudAccountsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("prismacloud:index/getOrgCloudAccounts:getOrgCloudAccounts", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOrgCloudAccounts.
 */
export interface GetOrgCloudAccountsArgs {
    id?: string;
}

/**
 * A collection of values returned by getOrgCloudAccounts.
 */
export interface GetOrgCloudAccountsResult {
    readonly id: string;
    readonly listings: outputs.GetOrgCloudAccountsListing[];
    readonly total: number;
}
export function getOrgCloudAccountsOutput(args?: GetOrgCloudAccountsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrgCloudAccountsResult> {
    return pulumi.output(args).apply((a: any) => getOrgCloudAccounts(a, opts))
}

/**
 * A collection of arguments for invoking getOrgCloudAccounts.
 */
export interface GetOrgCloudAccountsOutputArgs {
    id?: pulumi.Input<string>;
}
