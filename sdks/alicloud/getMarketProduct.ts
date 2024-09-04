// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMarketProduct(args: GetMarketProductArgs, opts?: pulumi.InvokeOptions): Promise<GetMarketProductResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getMarketProduct:getMarketProduct", {
        "availableRegion": args.availableRegion,
        "id": args.id,
        "productCode": args.productCode,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMarketProduct.
 */
export interface GetMarketProductArgs {
    availableRegion?: string;
    id?: string;
    productCode: string;
}

/**
 * A collection of values returned by getMarketProduct.
 */
export interface GetMarketProductResult {
    readonly availableRegion?: string;
    readonly id: string;
    readonly productCode: string;
    readonly products: outputs.GetMarketProductProduct[];
}
export function getMarketProductOutput(args: GetMarketProductOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMarketProductResult> {
    return pulumi.output(args).apply((a: any) => getMarketProduct(a, opts))
}

/**
 * A collection of arguments for invoking getMarketProduct.
 */
export interface GetMarketProductOutputArgs {
    availableRegion?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    productCode: pulumi.Input<string>;
}
