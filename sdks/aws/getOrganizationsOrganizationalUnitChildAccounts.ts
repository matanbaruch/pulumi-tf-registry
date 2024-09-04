// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOrganizationsOrganizationalUnitChildAccounts(args: GetOrganizationsOrganizationalUnitChildAccountsArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationsOrganizationalUnitChildAccountsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getOrganizationsOrganizationalUnitChildAccounts:getOrganizationsOrganizationalUnitChildAccounts", {
        "id": args.id,
        "parentId": args.parentId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOrganizationsOrganizationalUnitChildAccounts.
 */
export interface GetOrganizationsOrganizationalUnitChildAccountsArgs {
    id?: string;
    parentId: string;
}

/**
 * A collection of values returned by getOrganizationsOrganizationalUnitChildAccounts.
 */
export interface GetOrganizationsOrganizationalUnitChildAccountsResult {
    readonly accounts: outputs.GetOrganizationsOrganizationalUnitChildAccountsAccount[];
    readonly id: string;
    readonly parentId: string;
}
export function getOrganizationsOrganizationalUnitChildAccountsOutput(args: GetOrganizationsOrganizationalUnitChildAccountsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrganizationsOrganizationalUnitChildAccountsResult> {
    return pulumi.output(args).apply((a: any) => getOrganizationsOrganizationalUnitChildAccounts(a, opts))
}

/**
 * A collection of arguments for invoking getOrganizationsOrganizationalUnitChildAccounts.
 */
export interface GetOrganizationsOrganizationalUnitChildAccountsOutputArgs {
    id?: pulumi.Input<string>;
    parentId: pulumi.Input<string>;
}
