// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAccounts(args?: GetAccountsArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("snowflake:index/getAccounts:getAccounts", {
        "id": args.id,
        "pattern": args.pattern,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAccounts.
 */
export interface GetAccountsArgs {
    id?: string;
    pattern?: string;
}

/**
 * A collection of values returned by getAccounts.
 */
export interface GetAccountsResult {
    readonly accounts: outputs.GetAccountsAccount[];
    readonly id: string;
    readonly pattern?: string;
}
export function getAccountsOutput(args?: GetAccountsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountsResult> {
    return pulumi.output(args).apply((a: any) => getAccounts(a, opts))
}

/**
 * A collection of arguments for invoking getAccounts.
 */
export interface GetAccountsOutputArgs {
    id?: pulumi.Input<string>;
    pattern?: pulumi.Input<string>;
}
