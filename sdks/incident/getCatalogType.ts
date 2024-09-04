// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCatalogType(args?: GetCatalogTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetCatalogTypeResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("incident:index/getCatalogType:getCatalogType", {
        "categories": args.categories,
        "name": args.name,
        "typeName": args.typeName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCatalogType.
 */
export interface GetCatalogTypeArgs {
    categories?: string[];
    name?: string;
    typeName?: string;
}

/**
 * A collection of values returned by getCatalogType.
 */
export interface GetCatalogTypeResult {
    readonly categories?: string[];
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly sourceRepoUrl: string;
    readonly typeName: string;
}
export function getCatalogTypeOutput(args?: GetCatalogTypeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCatalogTypeResult> {
    return pulumi.output(args).apply((a: any) => getCatalogType(a, opts))
}

/**
 * A collection of arguments for invoking getCatalogType.
 */
export interface GetCatalogTypeOutputArgs {
    categories?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    typeName?: pulumi.Input<string>;
}
