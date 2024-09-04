// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreComputeCapacityTopologyComputeNetworkBlocks(args: GetCoreComputeCapacityTopologyComputeNetworkBlocksArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreComputeCapacityTopologyComputeNetworkBlocksResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreComputeCapacityTopologyComputeNetworkBlocks:getCoreComputeCapacityTopologyComputeNetworkBlocks", {
        "availabilityDomain": args.availabilityDomain,
        "compartmentId": args.compartmentId,
        "computeCapacityTopologyId": args.computeCapacityTopologyId,
        "computeHpcIslandId": args.computeHpcIslandId,
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreComputeCapacityTopologyComputeNetworkBlocks.
 */
export interface GetCoreComputeCapacityTopologyComputeNetworkBlocksArgs {
    availabilityDomain?: string;
    compartmentId?: string;
    computeCapacityTopologyId: string;
    computeHpcIslandId?: string;
    filters?: inputs.GetCoreComputeCapacityTopologyComputeNetworkBlocksFilter[];
    id?: string;
}

/**
 * A collection of values returned by getCoreComputeCapacityTopologyComputeNetworkBlocks.
 */
export interface GetCoreComputeCapacityTopologyComputeNetworkBlocksResult {
    readonly availabilityDomain?: string;
    readonly compartmentId?: string;
    readonly computeCapacityTopologyId: string;
    readonly computeHpcIslandId?: string;
    readonly computeNetworkBlockCollections: outputs.GetCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection[];
    readonly filters?: outputs.GetCoreComputeCapacityTopologyComputeNetworkBlocksFilter[];
    readonly id: string;
}
export function getCoreComputeCapacityTopologyComputeNetworkBlocksOutput(args: GetCoreComputeCapacityTopologyComputeNetworkBlocksOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreComputeCapacityTopologyComputeNetworkBlocksResult> {
    return pulumi.output(args).apply((a: any) => getCoreComputeCapacityTopologyComputeNetworkBlocks(a, opts))
}

/**
 * A collection of arguments for invoking getCoreComputeCapacityTopologyComputeNetworkBlocks.
 */
export interface GetCoreComputeCapacityTopologyComputeNetworkBlocksOutputArgs {
    availabilityDomain?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    computeCapacityTopologyId: pulumi.Input<string>;
    computeHpcIslandId?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreComputeCapacityTopologyComputeNetworkBlocksFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
