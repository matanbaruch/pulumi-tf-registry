// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMetalSpotMarketRequest(args: GetMetalSpotMarketRequestArgs, opts?: pulumi.InvokeOptions): Promise<GetMetalSpotMarketRequestResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("equinix:index/getMetalSpotMarketRequest:getMetalSpotMarketRequest", {
        "id": args.id,
        "requestId": args.requestId,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMetalSpotMarketRequest.
 */
export interface GetMetalSpotMarketRequestArgs {
    id?: string;
    requestId: string;
    timeouts?: inputs.GetMetalSpotMarketRequestTimeouts;
}

/**
 * A collection of values returned by getMetalSpotMarketRequest.
 */
export interface GetMetalSpotMarketRequestResult {
    readonly deviceIds: string[];
    readonly devicesMax: number;
    readonly devicesMin: number;
    readonly endAt: string;
    /**
     * @deprecated Deprecated
     */
    readonly facilities: string[];
    readonly id: string;
    readonly maxBidPrice: number;
    readonly metro: string;
    readonly plan: string;
    readonly projectId: string;
    readonly requestId: string;
    readonly timeouts?: outputs.GetMetalSpotMarketRequestTimeouts;
}
export function getMetalSpotMarketRequestOutput(args: GetMetalSpotMarketRequestOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMetalSpotMarketRequestResult> {
    return pulumi.output(args).apply((a: any) => getMetalSpotMarketRequest(a, opts))
}

/**
 * A collection of arguments for invoking getMetalSpotMarketRequest.
 */
export interface GetMetalSpotMarketRequestOutputArgs {
    id?: pulumi.Input<string>;
    requestId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetMetalSpotMarketRequestTimeoutsArgs>;
}
