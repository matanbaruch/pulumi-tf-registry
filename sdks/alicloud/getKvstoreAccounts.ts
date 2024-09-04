// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKvstoreAccounts(args: GetKvstoreAccountsArgs, opts?: pulumi.InvokeOptions): Promise<GetKvstoreAccountsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getKvstoreAccounts:getKvstoreAccounts", {
        "accountName": args.accountName,
        "id": args.id,
        "instanceId": args.instanceId,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKvstoreAccounts.
 */
export interface GetKvstoreAccountsArgs {
    accountName?: string;
    id?: string;
    instanceId: string;
    nameRegex?: string;
    outputFile?: string;
    status?: string;
}

/**
 * A collection of values returned by getKvstoreAccounts.
 */
export interface GetKvstoreAccountsResult {
    readonly accountName?: string;
    readonly accounts: outputs.GetKvstoreAccountsAccount[];
    readonly id: string;
    readonly ids: string[];
    readonly instanceId: string;
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly status?: string;
}
export function getKvstoreAccountsOutput(args: GetKvstoreAccountsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKvstoreAccountsResult> {
    return pulumi.output(args).apply((a: any) => getKvstoreAccounts(a, opts))
}

/**
 * A collection of arguments for invoking getKvstoreAccounts.
 */
export interface GetKvstoreAccountsOutputArgs {
    accountName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
