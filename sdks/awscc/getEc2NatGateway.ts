// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEc2NatGateway(args: GetEc2NatGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2NatGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2NatGateway:getEc2NatGateway", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEc2NatGateway.
 */
export interface GetEc2NatGatewayArgs {
    id: string;
}

/**
 * A collection of values returned by getEc2NatGateway.
 */
export interface GetEc2NatGatewayResult {
    readonly allocationId: string;
    readonly connectivityType: string;
    readonly id: string;
    readonly maxDrainDurationSeconds: number;
    readonly natGatewayId: string;
    readonly privateIpAddress: string;
    readonly secondaryAllocationIds: string[];
    readonly secondaryPrivateIpAddressCount: number;
    readonly secondaryPrivateIpAddresses: string[];
    readonly subnetId: string;
    readonly tags: outputs.GetEc2NatGatewayTag[];
}
export function getEc2NatGatewayOutput(args: GetEc2NatGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2NatGatewayResult> {
    return pulumi.output(args).apply((a: any) => getEc2NatGateway(a, opts))
}

/**
 * A collection of arguments for invoking getEc2NatGateway.
 */
export interface GetEc2NatGatewayOutputArgs {
    id: pulumi.Input<string>;
}
