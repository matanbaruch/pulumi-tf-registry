// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getInvoice(args: GetInvoiceArgs, opts?: pulumi.InvokeOptions): Promise<GetInvoiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("files:index/getInvoice:getInvoice", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getInvoice.
 */
export interface GetInvoiceArgs {
    id: number;
}

/**
 * A collection of values returned by getInvoice.
 */
export interface GetInvoiceResult {
    readonly amount: string;
    readonly balance: string;
    readonly createdAt: string;
    readonly currency: string;
    readonly downloadUri: string;
    readonly id: number;
    readonly invoiceLineItems: any;
    readonly method: string;
    readonly paymentLineItems: any;
    readonly paymentReversedAt: string;
    readonly paymentType: string;
    readonly siteName: string;
    readonly type: string;
}
export function getInvoiceOutput(args: GetInvoiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInvoiceResult> {
    return pulumi.output(args).apply((a: any) => getInvoice(a, opts))
}

/**
 * A collection of arguments for invoking getInvoice.
 */
export interface GetInvoiceOutputArgs {
    id: pulumi.Input<number>;
}
