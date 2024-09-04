// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBrands(args?: GetBrandsArgs, opts?: pulumi.InvokeOptions): Promise<GetBrandsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("okta:index/getBrands:getBrands", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBrands.
 */
export interface GetBrandsArgs {
    id?: string;
}

/**
 * A collection of values returned by getBrands.
 */
export interface GetBrandsResult {
    readonly brands: outputs.GetBrandsBrand[];
    readonly id: string;
}
export function getBrandsOutput(args?: GetBrandsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBrandsResult> {
    return pulumi.output(args).apply((a: any) => getBrands(a, opts))
}

/**
 * A collection of arguments for invoking getBrands.
 */
export interface GetBrandsOutputArgs {
    id?: pulumi.Input<string>;
}
