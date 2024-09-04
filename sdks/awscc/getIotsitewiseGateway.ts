// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIotsitewiseGateway(args: GetIotsitewiseGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetIotsitewiseGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotsitewiseGateway:getIotsitewiseGateway", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIotsitewiseGateway.
 */
export interface GetIotsitewiseGatewayArgs {
    id: string;
}

/**
 * A collection of values returned by getIotsitewiseGateway.
 */
export interface GetIotsitewiseGatewayResult {
    readonly gatewayCapabilitySummaries: outputs.GetIotsitewiseGatewayGatewayCapabilitySummary[];
    readonly gatewayId: string;
    readonly gatewayName: string;
    readonly gatewayPlatform: outputs.GetIotsitewiseGatewayGatewayPlatform;
    readonly id: string;
    readonly tags: outputs.GetIotsitewiseGatewayTag[];
}
export function getIotsitewiseGatewayOutput(args: GetIotsitewiseGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotsitewiseGatewayResult> {
    return pulumi.output(args).apply((a: any) => getIotsitewiseGateway(a, opts))
}

/**
 * A collection of arguments for invoking getIotsitewiseGateway.
 */
export interface GetIotsitewiseGatewayOutputArgs {
    id: pulumi.Input<string>;
}
