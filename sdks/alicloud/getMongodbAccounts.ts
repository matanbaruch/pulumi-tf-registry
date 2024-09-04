// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMongodbAccounts(args: GetMongodbAccountsArgs, opts?: pulumi.InvokeOptions): Promise<GetMongodbAccountsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getMongodbAccounts:getMongodbAccounts", {
        "accountName": args.accountName,
        "id": args.id,
        "instanceId": args.instanceId,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMongodbAccounts.
 */
export interface GetMongodbAccountsArgs {
    accountName?: string;
    id?: string;
    instanceId: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getMongodbAccounts.
 */
export interface GetMongodbAccountsResult {
    readonly accountName?: string;
    readonly accounts: outputs.GetMongodbAccountsAccount[];
    readonly id: string;
    readonly instanceId: string;
    readonly outputFile?: string;
}
export function getMongodbAccountsOutput(args: GetMongodbAccountsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMongodbAccountsResult> {
    return pulumi.output(args).apply((a: any) => getMongodbAccounts(a, opts))
}

/**
 * A collection of arguments for invoking getMongodbAccounts.
 */
export interface GetMongodbAccountsOutputArgs {
    accountName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
