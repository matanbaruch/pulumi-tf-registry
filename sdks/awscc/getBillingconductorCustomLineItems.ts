// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBillingconductorCustomLineItems(opts?: pulumi.InvokeOptions): Promise<GetBillingconductorCustomLineItemsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getBillingconductorCustomLineItems:getBillingconductorCustomLineItems", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getBillingconductorCustomLineItems.
 */
export interface GetBillingconductorCustomLineItemsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getBillingconductorCustomLineItemsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetBillingconductorCustomLineItemsResult> {
    return pulumi.output(getBillingconductorCustomLineItems(opts))
}
