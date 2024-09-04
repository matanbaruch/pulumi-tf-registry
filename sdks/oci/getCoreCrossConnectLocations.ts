// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreCrossConnectLocations(args: GetCoreCrossConnectLocationsArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreCrossConnectLocationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreCrossConnectLocations:getCoreCrossConnectLocations", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreCrossConnectLocations.
 */
export interface GetCoreCrossConnectLocationsArgs {
    compartmentId: string;
    filters?: inputs.GetCoreCrossConnectLocationsFilter[];
    id?: string;
}

/**
 * A collection of values returned by getCoreCrossConnectLocations.
 */
export interface GetCoreCrossConnectLocationsResult {
    readonly compartmentId: string;
    readonly crossConnectLocations: outputs.GetCoreCrossConnectLocationsCrossConnectLocation[];
    readonly filters?: outputs.GetCoreCrossConnectLocationsFilter[];
    readonly id: string;
}
export function getCoreCrossConnectLocationsOutput(args: GetCoreCrossConnectLocationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreCrossConnectLocationsResult> {
    return pulumi.output(args).apply((a: any) => getCoreCrossConnectLocations(a, opts))
}

/**
 * A collection of arguments for invoking getCoreCrossConnectLocations.
 */
export interface GetCoreCrossConnectLocationsOutputArgs {
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreCrossConnectLocationsFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
