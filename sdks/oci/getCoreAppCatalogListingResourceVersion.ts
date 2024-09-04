// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCoreAppCatalogListingResourceVersion(args: GetCoreAppCatalogListingResourceVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreAppCatalogListingResourceVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreAppCatalogListingResourceVersion:getCoreAppCatalogListingResourceVersion", {
        "id": args.id,
        "listingId": args.listingId,
        "resourceVersion": args.resourceVersion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreAppCatalogListingResourceVersion.
 */
export interface GetCoreAppCatalogListingResourceVersionArgs {
    id?: string;
    listingId: string;
    resourceVersion: string;
}

/**
 * A collection of values returned by getCoreAppCatalogListingResourceVersion.
 */
export interface GetCoreAppCatalogListingResourceVersionResult {
    readonly accessiblePorts: number[];
    readonly allowedActions: string[];
    readonly availableRegions: string[];
    readonly compatibleShapes: string[];
    readonly id: string;
    readonly listingId: string;
    readonly listingResourceId: string;
    readonly listingResourceVersion: string;
    readonly resourceVersion: string;
    readonly timePublished: string;
}
export function getCoreAppCatalogListingResourceVersionOutput(args: GetCoreAppCatalogListingResourceVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreAppCatalogListingResourceVersionResult> {
    return pulumi.output(args).apply((a: any) => getCoreAppCatalogListingResourceVersion(a, opts))
}

/**
 * A collection of arguments for invoking getCoreAppCatalogListingResourceVersion.
 */
export interface GetCoreAppCatalogListingResourceVersionOutputArgs {
    id?: pulumi.Input<string>;
    listingId: pulumi.Input<string>;
    resourceVersion: pulumi.Input<string>;
}
