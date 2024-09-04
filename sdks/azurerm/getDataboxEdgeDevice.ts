// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataboxEdgeDevice(args: GetDataboxEdgeDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetDataboxEdgeDeviceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getDataboxEdgeDevice:getDataboxEdgeDevice", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataboxEdgeDevice.
 */
export interface GetDataboxEdgeDeviceArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetDataboxEdgeDeviceTimeouts;
}

/**
 * A collection of values returned by getDataboxEdgeDevice.
 */
export interface GetDataboxEdgeDeviceResult {
    readonly deviceProperties: outputs.GetDataboxEdgeDeviceDeviceProperty[];
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly skuName: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetDataboxEdgeDeviceTimeouts;
}
export function getDataboxEdgeDeviceOutput(args: GetDataboxEdgeDeviceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataboxEdgeDeviceResult> {
    return pulumi.output(args).apply((a: any) => getDataboxEdgeDevice(a, opts))
}

/**
 * A collection of arguments for invoking getDataboxEdgeDevice.
 */
export interface GetDataboxEdgeDeviceOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetDataboxEdgeDeviceTimeoutsArgs>;
}
