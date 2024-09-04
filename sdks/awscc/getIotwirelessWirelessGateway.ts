// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIotwirelessWirelessGateway(args: GetIotwirelessWirelessGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetIotwirelessWirelessGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotwirelessWirelessGateway:getIotwirelessWirelessGateway", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIotwirelessWirelessGateway.
 */
export interface GetIotwirelessWirelessGatewayArgs {
    id: string;
}

/**
 * A collection of values returned by getIotwirelessWirelessGateway.
 */
export interface GetIotwirelessWirelessGatewayResult {
    readonly arn: string;
    readonly description: string;
    readonly id: string;
    readonly lastUplinkReceivedAt: string;
    readonly loRaWan: outputs.GetIotwirelessWirelessGatewayLoRaWan;
    readonly name: string;
    readonly tags: outputs.GetIotwirelessWirelessGatewayTag[];
    readonly thingArn: string;
    readonly thingName: string;
    readonly wirelessGatewayId: string;
}
export function getIotwirelessWirelessGatewayOutput(args: GetIotwirelessWirelessGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotwirelessWirelessGatewayResult> {
    return pulumi.output(args).apply((a: any) => getIotwirelessWirelessGateway(a, opts))
}

/**
 * A collection of arguments for invoking getIotwirelessWirelessGateway.
 */
export interface GetIotwirelessWirelessGatewayOutputArgs {
    id: pulumi.Input<string>;
}
