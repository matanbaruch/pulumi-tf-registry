// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreVirtualNetworks(args: GetCoreVirtualNetworksArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreVirtualNetworksResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreVirtualNetworks:getCoreVirtualNetworks", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreVirtualNetworks.
 */
export interface GetCoreVirtualNetworksArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetCoreVirtualNetworksFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getCoreVirtualNetworks.
 */
export interface GetCoreVirtualNetworksResult {
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetCoreVirtualNetworksFilter[];
    readonly id: string;
    readonly state?: string;
    readonly virtualNetworks: outputs.GetCoreVirtualNetworksVirtualNetwork[];
}
export function getCoreVirtualNetworksOutput(args: GetCoreVirtualNetworksOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreVirtualNetworksResult> {
    return pulumi.output(args).apply((a: any) => getCoreVirtualNetworks(a, opts))
}

/**
 * A collection of arguments for invoking getCoreVirtualNetworks.
 */
export interface GetCoreVirtualNetworksOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreVirtualNetworksFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
