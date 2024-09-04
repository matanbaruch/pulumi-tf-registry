// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIotDevice(args?: GetIotDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetIotDeviceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scaleway:index/getIotDevice:getIotDevice", {
        "deviceId": args.deviceId,
        "hubId": args.hubId,
        "id": args.id,
        "name": args.name,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIotDevice.
 */
export interface GetIotDeviceArgs {
    deviceId?: string;
    hubId?: string;
    id?: string;
    name?: string;
    region?: string;
}

/**
 * A collection of values returned by getIotDevice.
 */
export interface GetIotDeviceResult {
    readonly allowInsecure: boolean;
    readonly allowMultipleConnections: boolean;
    readonly certificates: outputs.GetIotDeviceCertificate[];
    readonly createdAt: string;
    readonly description: string;
    readonly deviceId?: string;
    readonly hubId: string;
    readonly id: string;
    readonly isConnected: boolean;
    readonly lastActivityAt: string;
    readonly messageFilters: outputs.GetIotDeviceMessageFilter[];
    readonly name?: string;
    readonly region?: string;
    readonly status: string;
    readonly updatedAt: string;
}
export function getIotDeviceOutput(args?: GetIotDeviceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotDeviceResult> {
    return pulumi.output(args).apply((a: any) => getIotDevice(a, opts))
}

/**
 * A collection of arguments for invoking getIotDevice.
 */
export interface GetIotDeviceOutputArgs {
    deviceId?: pulumi.Input<string>;
    hubId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
