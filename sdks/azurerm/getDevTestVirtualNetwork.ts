// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDevTestVirtualNetwork(args: GetDevTestVirtualNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetDevTestVirtualNetworkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getDevTestVirtualNetwork:getDevTestVirtualNetwork", {
        "id": args.id,
        "labName": args.labName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDevTestVirtualNetwork.
 */
export interface GetDevTestVirtualNetworkArgs {
    id?: string;
    labName: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetDevTestVirtualNetworkTimeouts;
}

/**
 * A collection of values returned by getDevTestVirtualNetwork.
 */
export interface GetDevTestVirtualNetworkResult {
    readonly allowedSubnets: outputs.GetDevTestVirtualNetworkAllowedSubnet[];
    readonly id: string;
    readonly labName: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly subnetOverrides: outputs.GetDevTestVirtualNetworkSubnetOverride[];
    readonly timeouts?: outputs.GetDevTestVirtualNetworkTimeouts;
    readonly uniqueIdentifier: string;
}
export function getDevTestVirtualNetworkOutput(args: GetDevTestVirtualNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDevTestVirtualNetworkResult> {
    return pulumi.output(args).apply((a: any) => getDevTestVirtualNetwork(a, opts))
}

/**
 * A collection of arguments for invoking getDevTestVirtualNetwork.
 */
export interface GetDevTestVirtualNetworkOutputArgs {
    id?: pulumi.Input<string>;
    labName: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetDevTestVirtualNetworkTimeoutsArgs>;
}
