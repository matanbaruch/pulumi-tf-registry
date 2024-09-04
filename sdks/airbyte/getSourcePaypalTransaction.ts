// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourcePaypalTransaction(args: GetSourcePaypalTransactionArgs, opts?: pulumi.InvokeOptions): Promise<GetSourcePaypalTransactionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourcePaypalTransaction:getSourcePaypalTransaction", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourcePaypalTransaction.
 */
export interface GetSourcePaypalTransactionArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourcePaypalTransaction.
 */
export interface GetSourcePaypalTransactionResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourcePaypalTransactionOutput(args: GetSourcePaypalTransactionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourcePaypalTransactionResult> {
    return pulumi.output(args).apply((a: any) => getSourcePaypalTransaction(a, opts))
}

/**
 * A collection of arguments for invoking getSourcePaypalTransaction.
 */
export interface GetSourcePaypalTransactionOutputArgs {
    sourceId: pulumi.Input<string>;
}
