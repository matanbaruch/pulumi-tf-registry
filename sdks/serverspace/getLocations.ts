// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLocations(args?: GetLocationsArgs, opts?: pulumi.InvokeOptions): Promise<GetLocationsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("serverspace:index/getLocations:getLocations", {
        "filters": args.filters,
        "id": args.id,
        "sorts": args.sorts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLocations.
 */
export interface GetLocationsArgs {
    filters?: inputs.GetLocationsFilter[];
    id?: string;
    sorts?: inputs.GetLocationsSort[];
}

/**
 * A collection of values returned by getLocations.
 */
export interface GetLocationsResult {
    readonly filters?: outputs.GetLocationsFilter[];
    readonly id: string;
    readonly locations: outputs.GetLocationsLocation[];
    readonly sorts?: outputs.GetLocationsSort[];
}
export function getLocationsOutput(args?: GetLocationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocationsResult> {
    return pulumi.output(args).apply((a: any) => getLocations(a, opts))
}

/**
 * A collection of arguments for invoking getLocations.
 */
export interface GetLocationsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetLocationsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    sorts?: pulumi.Input<pulumi.Input<inputs.GetLocationsSortArgs>[]>;
}
