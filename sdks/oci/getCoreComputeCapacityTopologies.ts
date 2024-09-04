// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreComputeCapacityTopologies(args: GetCoreComputeCapacityTopologiesArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreComputeCapacityTopologiesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreComputeCapacityTopologies:getCoreComputeCapacityTopologies", {
        "availabilityDomain": args.availabilityDomain,
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreComputeCapacityTopologies.
 */
export interface GetCoreComputeCapacityTopologiesArgs {
    availabilityDomain?: string;
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetCoreComputeCapacityTopologiesFilter[];
    id?: string;
}

/**
 * A collection of values returned by getCoreComputeCapacityTopologies.
 */
export interface GetCoreComputeCapacityTopologiesResult {
    readonly availabilityDomain?: string;
    readonly compartmentId: string;
    readonly computeCapacityTopologyCollections: outputs.GetCoreComputeCapacityTopologiesComputeCapacityTopologyCollection[];
    readonly displayName?: string;
    readonly filters?: outputs.GetCoreComputeCapacityTopologiesFilter[];
    readonly id: string;
}
export function getCoreComputeCapacityTopologiesOutput(args: GetCoreComputeCapacityTopologiesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreComputeCapacityTopologiesResult> {
    return pulumi.output(args).apply((a: any) => getCoreComputeCapacityTopologies(a, opts))
}

/**
 * A collection of arguments for invoking getCoreComputeCapacityTopologies.
 */
export interface GetCoreComputeCapacityTopologiesOutputArgs {
    availabilityDomain?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreComputeCapacityTopologiesFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
