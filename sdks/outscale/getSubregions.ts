// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSubregions(args?: GetSubregionsArgs, opts?: pulumi.InvokeOptions): Promise<GetSubregionsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("outscale:index/getSubregions:getSubregions", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSubregions.
 */
export interface GetSubregionsArgs {
    filters?: inputs.GetSubregionsFilter[];
    id?: string;
}

/**
 * A collection of values returned by getSubregions.
 */
export interface GetSubregionsResult {
    readonly filters?: outputs.GetSubregionsFilter[];
    readonly id: string;
    readonly requestId: string;
    readonly subregions: outputs.GetSubregionsSubregion[];
}
export function getSubregionsOutput(args?: GetSubregionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSubregionsResult> {
    return pulumi.output(args).apply((a: any) => getSubregions(a, opts))
}

/**
 * A collection of arguments for invoking getSubregions.
 */
export interface GetSubregionsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetSubregionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
