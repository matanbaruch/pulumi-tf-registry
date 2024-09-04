// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSqlserverAccounts(args: GetSqlserverAccountsArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlserverAccountsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getSqlserverAccounts:getSqlserverAccounts", {
        "id": args.id,
        "instanceId": args.instanceId,
        "name": args.name,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSqlserverAccounts.
 */
export interface GetSqlserverAccountsArgs {
    id?: string;
    instanceId: string;
    name?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getSqlserverAccounts.
 */
export interface GetSqlserverAccountsResult {
    readonly id: string;
    readonly instanceId: string;
    readonly lists: outputs.GetSqlserverAccountsList[];
    readonly name?: string;
    readonly resultOutputFile?: string;
}
export function getSqlserverAccountsOutput(args: GetSqlserverAccountsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlserverAccountsResult> {
    return pulumi.output(args).apply((a: any) => getSqlserverAccounts(a, opts))
}

/**
 * A collection of arguments for invoking getSqlserverAccounts.
 */
export interface GetSqlserverAccountsOutputArgs {
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
