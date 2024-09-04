// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProductCategories(args: GetProductCategoriesArgs, opts?: pulumi.InvokeOptions): Promise<GetProductCategoriesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getProductCategories:getProductCategories", {
        "categoryId": args.categoryId,
        "categoryState": args.categoryState,
        "contents": args.contents,
        "exposureScope": args.exposureScope,
        "filters": args.filters,
        "id": args.id,
        "languageCode": args.languageCode,
        "productId": args.productId,
        "productState": args.productState,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProductCategories.
 */
export interface GetProductCategoriesArgs {
    categoryId?: string;
    categoryState?: string;
    contents?: inputs.GetProductCategoriesContent[];
    exposureScope?: string;
    filters?: inputs.GetProductCategoriesFilter[];
    id?: string;
    languageCode: string;
    productId?: string;
    productState?: string;
}

/**
 * A collection of values returned by getProductCategories.
 */
export interface GetProductCategoriesResult {
    readonly categoryId?: string;
    readonly categoryState?: string;
    readonly contents?: outputs.GetProductCategoriesContent[];
    readonly exposureScope?: string;
    readonly filters?: outputs.GetProductCategoriesFilter[];
    readonly id: string;
    readonly languageCode: string;
    readonly productId?: string;
    readonly productState?: string;
    readonly totalCount: number;
}
export function getProductCategoriesOutput(args: GetProductCategoriesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProductCategoriesResult> {
    return pulumi.output(args).apply((a: any) => getProductCategories(a, opts))
}

/**
 * A collection of arguments for invoking getProductCategories.
 */
export interface GetProductCategoriesOutputArgs {
    categoryId?: pulumi.Input<string>;
    categoryState?: pulumi.Input<string>;
    contents?: pulumi.Input<pulumi.Input<inputs.GetProductCategoriesContentArgs>[]>;
    exposureScope?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetProductCategoriesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    languageCode: pulumi.Input<string>;
    productId?: pulumi.Input<string>;
    productState?: pulumi.Input<string>;
}
