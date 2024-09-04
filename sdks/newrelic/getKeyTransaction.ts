// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getKeyTransaction(args: GetKeyTransactionArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyTransactionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("newrelic:index/getKeyTransaction:getKeyTransaction", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKeyTransaction.
 */
export interface GetKeyTransactionArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getKeyTransaction.
 */
export interface GetKeyTransactionResult {
    readonly id: string;
    readonly name: string;
}
export function getKeyTransactionOutput(args: GetKeyTransactionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKeyTransactionResult> {
    return pulumi.output(args).apply((a: any) => getKeyTransaction(a, opts))
}

/**
 * A collection of arguments for invoking getKeyTransaction.
 */
export interface GetKeyTransactionOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
