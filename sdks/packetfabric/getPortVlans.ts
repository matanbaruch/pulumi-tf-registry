// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPortVlans(args: GetPortVlansArgs, opts?: pulumi.InvokeOptions): Promise<GetPortVlansResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("packetfabric:index/getPortVlans:getPortVlans", {
        "id": args.id,
        "portCircuitId": args.portCircuitId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPortVlans.
 */
export interface GetPortVlansArgs {
    id?: string;
    portCircuitId: string;
}

/**
 * A collection of values returned by getPortVlans.
 */
export interface GetPortVlansResult {
    readonly id: string;
    readonly lowestAvailableVlan: number;
    readonly maxVlan: number;
    readonly portCircuitId: string;
}
export function getPortVlansOutput(args: GetPortVlansOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPortVlansResult> {
    return pulumi.output(args).apply((a: any) => getPortVlans(a, opts))
}

/**
 * A collection of arguments for invoking getPortVlans.
 */
export interface GetPortVlansOutputArgs {
    id?: pulumi.Input<string>;
    portCircuitId: pulumi.Input<string>;
}
