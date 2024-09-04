// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEventBridgeService(args?: GetEventBridgeServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetEventBridgeServiceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getEventBridgeService:getEventBridgeService", {
        "enable": args.enable,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEventBridgeService.
 */
export interface GetEventBridgeServiceArgs {
    enable?: string;
    id?: string;
}

/**
 * A collection of values returned by getEventBridgeService.
 */
export interface GetEventBridgeServiceResult {
    readonly enable?: string;
    readonly id: string;
    readonly status: string;
}
export function getEventBridgeServiceOutput(args?: GetEventBridgeServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEventBridgeServiceResult> {
    return pulumi.output(args).apply((a: any) => getEventBridgeService(a, opts))
}

/**
 * A collection of arguments for invoking getEventBridgeService.
 */
export interface GetEventBridgeServiceOutputArgs {
    enable?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
