// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHealthChecksVantagePoints(args?: GetHealthChecksVantagePointsArgs, opts?: pulumi.InvokeOptions): Promise<GetHealthChecksVantagePointsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getHealthChecksVantagePoints:getHealthChecksVantagePoints", {
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHealthChecksVantagePoints.
 */
export interface GetHealthChecksVantagePointsArgs {
    displayName?: string;
    filters?: inputs.GetHealthChecksVantagePointsFilter[];
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getHealthChecksVantagePoints.
 */
export interface GetHealthChecksVantagePointsResult {
    readonly displayName?: string;
    readonly filters?: outputs.GetHealthChecksVantagePointsFilter[];
    readonly healthChecksVantagePoints: outputs.GetHealthChecksVantagePointsHealthChecksVantagePoint[];
    readonly id: string;
    readonly name?: string;
}
export function getHealthChecksVantagePointsOutput(args?: GetHealthChecksVantagePointsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHealthChecksVantagePointsResult> {
    return pulumi.output(args).apply((a: any) => getHealthChecksVantagePoints(a, opts))
}

/**
 * A collection of arguments for invoking getHealthChecksVantagePoints.
 */
export interface GetHealthChecksVantagePointsOutputArgs {
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetHealthChecksVantagePointsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
