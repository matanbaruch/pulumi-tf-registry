// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMetalGateway(args: GetMetalGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetMetalGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("equinix:index/getMetalGateway:getMetalGateway", {
        "gatewayId": args.gatewayId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMetalGateway.
 */
export interface GetMetalGatewayArgs {
    gatewayId: string;
}

/**
 * A collection of values returned by getMetalGateway.
 */
export interface GetMetalGatewayResult {
    readonly gatewayId: string;
    readonly id: string;
    readonly ipReservationId: string;
    readonly privateIpv4SubnetSize: number;
    readonly projectId: string;
    readonly state: string;
    readonly vlanId: string;
    readonly vrfId: string;
}
export function getMetalGatewayOutput(args: GetMetalGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMetalGatewayResult> {
    return pulumi.output(args).apply((a: any) => getMetalGateway(a, opts))
}

/**
 * A collection of arguments for invoking getMetalGateway.
 */
export interface GetMetalGatewayOutputArgs {
    gatewayId: pulumi.Input<string>;
}
