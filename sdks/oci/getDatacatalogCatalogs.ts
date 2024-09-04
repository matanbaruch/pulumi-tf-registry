// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatacatalogCatalogs(args: GetDatacatalogCatalogsArgs, opts?: pulumi.InvokeOptions): Promise<GetDatacatalogCatalogsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatacatalogCatalogs:getDatacatalogCatalogs", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatacatalogCatalogs.
 */
export interface GetDatacatalogCatalogsArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetDatacatalogCatalogsFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getDatacatalogCatalogs.
 */
export interface GetDatacatalogCatalogsResult {
    readonly catalogs: outputs.GetDatacatalogCatalogsCatalog[];
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetDatacatalogCatalogsFilter[];
    readonly id: string;
    readonly state?: string;
}
export function getDatacatalogCatalogsOutput(args: GetDatacatalogCatalogsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatacatalogCatalogsResult> {
    return pulumi.output(args).apply((a: any) => getDatacatalogCatalogs(a, opts))
}

/**
 * A collection of arguments for invoking getDatacatalogCatalogs.
 */
export interface GetDatacatalogCatalogsOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatacatalogCatalogsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
