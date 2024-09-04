// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getWebhostingOffer(args?: GetWebhostingOfferArgs, opts?: pulumi.InvokeOptions): Promise<GetWebhostingOfferResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scaleway:index/getWebhostingOffer:getWebhostingOffer", {
        "id": args.id,
        "name": args.name,
        "offerId": args.offerId,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWebhostingOffer.
 */
export interface GetWebhostingOfferArgs {
    id?: string;
    name?: string;
    offerId?: string;
    region?: string;
}

/**
 * A collection of values returned by getWebhostingOffer.
 */
export interface GetWebhostingOfferResult {
    readonly billingOperationPath: string;
    readonly id: string;
    readonly name?: string;
    readonly offerId?: string;
    readonly price: string;
    readonly products: outputs.GetWebhostingOfferProduct[];
    readonly region: string;
}
export function getWebhostingOfferOutput(args?: GetWebhostingOfferOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebhostingOfferResult> {
    return pulumi.output(args).apply((a: any) => getWebhostingOffer(a, opts))
}

/**
 * A collection of arguments for invoking getWebhostingOffer.
 */
export interface GetWebhostingOfferOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    offerId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
