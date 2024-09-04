// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getComputeIpAddressReservation(args: GetComputeIpAddressReservationArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeIpAddressReservationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("opc:index/getComputeIpAddressReservation:getComputeIpAddressReservation", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComputeIpAddressReservation.
 */
export interface GetComputeIpAddressReservationArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getComputeIpAddressReservation.
 */
export interface GetComputeIpAddressReservationResult {
    readonly description: string;
    readonly id: string;
    readonly ipAddress: string;
    readonly ipAddressPool: string;
    readonly name: string;
    readonly tags: string[];
    readonly uri: string;
}
export function getComputeIpAddressReservationOutput(args: GetComputeIpAddressReservationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeIpAddressReservationResult> {
    return pulumi.output(args).apply((a: any) => getComputeIpAddressReservation(a, opts))
}

/**
 * A collection of arguments for invoking getComputeIpAddressReservation.
 */
export interface GetComputeIpAddressReservationOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
