// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDevice(args?: GetDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hivelocity:index/getDevice:getDevice", {
        "filters": args.filters,
        "first": args.first,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDevice.
 */
export interface GetDeviceArgs {
    filters?: inputs.GetDeviceFilter[];
    first?: boolean;
    id?: string;
}

/**
 * A collection of values returned by getDevice.
 */
export interface GetDeviceResult {
    readonly deviceId: number;
    readonly deviceType: string;
    readonly filters?: outputs.GetDeviceFilter[];
    readonly first?: boolean;
    readonly hostname: string;
    readonly id: string;
    readonly ipAddresses: string[];
    readonly ipmiAddress: string;
    readonly ipmiEnabled: boolean;
    readonly location: {[key: string]: string};
    readonly metadata: {[key: string]: string};
    readonly name: string;
    readonly powerStatus: string;
    readonly servicePlan: number;
    readonly status: string;
    readonly tags: string[];
}
export function getDeviceOutput(args?: GetDeviceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeviceResult> {
    return pulumi.output(args).apply((a: any) => getDevice(a, opts))
}

/**
 * A collection of arguments for invoking getDevice.
 */
export interface GetDeviceOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetDeviceFilterArgs>[]>;
    first?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
}
