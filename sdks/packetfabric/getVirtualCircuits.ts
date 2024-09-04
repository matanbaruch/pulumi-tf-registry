// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVirtualCircuits(args?: GetVirtualCircuitsArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualCircuitsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("packetfabric:index/getVirtualCircuits:getVirtualCircuits", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVirtualCircuits.
 */
export interface GetVirtualCircuitsArgs {
    id?: string;
}

/**
 * A collection of values returned by getVirtualCircuits.
 */
export interface GetVirtualCircuitsResult {
    readonly backboneServices: outputs.GetVirtualCircuitsBackboneService[];
    readonly id: string;
}
export function getVirtualCircuitsOutput(args?: GetVirtualCircuitsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualCircuitsResult> {
    return pulumi.output(args).apply((a: any) => getVirtualCircuits(a, opts))
}

/**
 * A collection of arguments for invoking getVirtualCircuits.
 */
export interface GetVirtualCircuitsOutputArgs {
    id?: pulumi.Input<string>;
}
