// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServiceCatalogEndUserProducts(args?: GetServiceCatalogEndUserProductsArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceCatalogEndUserProductsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getServiceCatalogEndUserProducts:getServiceCatalogEndUserProducts", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "pageNumber": args.pageNumber,
        "pageSize": args.pageSize,
        "sortBy": args.sortBy,
        "sortOrder": args.sortOrder,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServiceCatalogEndUserProducts.
 */
export interface GetServiceCatalogEndUserProductsArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    pageNumber?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: string;
}

/**
 * A collection of values returned by getServiceCatalogEndUserProducts.
 */
export interface GetServiceCatalogEndUserProductsResult {
    readonly endUserProducts: outputs.GetServiceCatalogEndUserProductsEndUserProduct[];
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly outputFile?: string;
    readonly pageNumber?: number;
    readonly pageSize?: number;
    readonly sortBy?: string;
    readonly sortOrder?: string;
}
export function getServiceCatalogEndUserProductsOutput(args?: GetServiceCatalogEndUserProductsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceCatalogEndUserProductsResult> {
    return pulumi.output(args).apply((a: any) => getServiceCatalogEndUserProducts(a, opts))
}

/**
 * A collection of arguments for invoking getServiceCatalogEndUserProducts.
 */
export interface GetServiceCatalogEndUserProductsOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    pageNumber?: pulumi.Input<number>;
    pageSize?: pulumi.Input<number>;
    sortBy?: pulumi.Input<string>;
    sortOrder?: pulumi.Input<string>;
}
