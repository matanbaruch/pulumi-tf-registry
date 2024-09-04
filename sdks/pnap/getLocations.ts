// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLocations(args?: GetLocationsArgs, opts?: pulumi.InvokeOptions): Promise<GetLocationsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pnap:index/getLocations:getLocations", {
        "id": args.id,
        "location": args.location,
        "productCategory": args.productCategory,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLocations.
 */
export interface GetLocationsArgs {
    id?: string;
    location?: string;
    productCategory?: string;
}

/**
 * A collection of values returned by getLocations.
 */
export interface GetLocationsResult {
    readonly id: string;
    readonly location?: string;
    readonly locations: outputs.GetLocationsLocation[];
    readonly productCategory?: string;
}
export function getLocationsOutput(args?: GetLocationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocationsResult> {
    return pulumi.output(args).apply((a: any) => getLocations(a, opts))
}

/**
 * A collection of arguments for invoking getLocations.
 */
export interface GetLocationsOutputArgs {
    id?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    productCategory?: pulumi.Input<string>;
}
