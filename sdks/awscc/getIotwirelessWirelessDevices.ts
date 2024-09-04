// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIotwirelessWirelessDevices(opts?: pulumi.InvokeOptions): Promise<GetIotwirelessWirelessDevicesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIotwirelessWirelessDevices:getIotwirelessWirelessDevices", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIotwirelessWirelessDevices.
 */
export interface GetIotwirelessWirelessDevicesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getIotwirelessWirelessDevicesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIotwirelessWirelessDevicesResult> {
    return pulumi.output(getIotwirelessWirelessDevices(opts))
}
