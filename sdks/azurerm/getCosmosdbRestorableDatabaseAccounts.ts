// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCosmosdbRestorableDatabaseAccounts(args: GetCosmosdbRestorableDatabaseAccountsArgs, opts?: pulumi.InvokeOptions): Promise<GetCosmosdbRestorableDatabaseAccountsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getCosmosdbRestorableDatabaseAccounts:getCosmosdbRestorableDatabaseAccounts", {
        "id": args.id,
        "location": args.location,
        "name": args.name,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCosmosdbRestorableDatabaseAccounts.
 */
export interface GetCosmosdbRestorableDatabaseAccountsArgs {
    id?: string;
    location: string;
    name: string;
    timeouts?: inputs.GetCosmosdbRestorableDatabaseAccountsTimeouts;
}

/**
 * A collection of values returned by getCosmosdbRestorableDatabaseAccounts.
 */
export interface GetCosmosdbRestorableDatabaseAccountsResult {
    readonly accounts: outputs.GetCosmosdbRestorableDatabaseAccountsAccount[];
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly timeouts?: outputs.GetCosmosdbRestorableDatabaseAccountsTimeouts;
}
export function getCosmosdbRestorableDatabaseAccountsOutput(args: GetCosmosdbRestorableDatabaseAccountsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCosmosdbRestorableDatabaseAccountsResult> {
    return pulumi.output(args).apply((a: any) => getCosmosdbRestorableDatabaseAccounts(a, opts))
}

/**
 * A collection of arguments for invoking getCosmosdbRestorableDatabaseAccounts.
 */
export interface GetCosmosdbRestorableDatabaseAccountsOutputArgs {
    id?: pulumi.Input<string>;
    location: pulumi.Input<string>;
    name: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetCosmosdbRestorableDatabaseAccountsTimeoutsArgs>;
}
