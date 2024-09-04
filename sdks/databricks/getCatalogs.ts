// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCatalogs(args?: GetCatalogsArgs, opts?: pulumi.InvokeOptions): Promise<GetCatalogsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("databricks:index/getCatalogs:getCatalogs", {
        "id": args.id,
        "ids": args.ids,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCatalogs.
 */
export interface GetCatalogsArgs {
    id?: string;
    ids?: string[];
}

/**
 * A collection of values returned by getCatalogs.
 */
export interface GetCatalogsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getCatalogsOutput(args?: GetCatalogsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCatalogsResult> {
    return pulumi.output(args).apply((a: any) => getCatalogs(a, opts))
}

/**
 * A collection of arguments for invoking getCatalogs.
 */
export interface GetCatalogsOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}
