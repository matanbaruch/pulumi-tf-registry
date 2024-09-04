// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreAppCatalogListings(args?: GetCoreAppCatalogListingsArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreAppCatalogListingsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreAppCatalogListings:getCoreAppCatalogListings", {
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "publisherName": args.publisherName,
        "publisherType": args.publisherType,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreAppCatalogListings.
 */
export interface GetCoreAppCatalogListingsArgs {
    displayName?: string;
    filters?: inputs.GetCoreAppCatalogListingsFilter[];
    id?: string;
    publisherName?: string;
    publisherType?: string;
}

/**
 * A collection of values returned by getCoreAppCatalogListings.
 */
export interface GetCoreAppCatalogListingsResult {
    readonly appCatalogListings: outputs.GetCoreAppCatalogListingsAppCatalogListing[];
    readonly displayName?: string;
    readonly filters?: outputs.GetCoreAppCatalogListingsFilter[];
    readonly id: string;
    readonly publisherName?: string;
    readonly publisherType?: string;
}
export function getCoreAppCatalogListingsOutput(args?: GetCoreAppCatalogListingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreAppCatalogListingsResult> {
    return pulumi.output(args).apply((a: any) => getCoreAppCatalogListings(a, opts))
}

/**
 * A collection of arguments for invoking getCoreAppCatalogListings.
 */
export interface GetCoreAppCatalogListingsOutputArgs {
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreAppCatalogListingsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    publisherName?: pulumi.Input<string>;
    publisherType?: pulumi.Input<string>;
}
