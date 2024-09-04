// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDevice(args: GetDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nso:index/getDevice:getDevice", {
        "instance": args.instance,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDevice.
 */
export interface GetDeviceArgs {
    instance?: string;
    name: string;
}

/**
 * A collection of values returned by getDevice.
 */
export interface GetDeviceResult {
    readonly address: string;
    readonly adminState: string;
    readonly authgroup: string;
    readonly cliNedId: string;
    readonly id: string;
    readonly instance?: string;
    readonly name: string;
    readonly netconfNetId: string;
    readonly port: number;
}
export function getDeviceOutput(args: GetDeviceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeviceResult> {
    return pulumi.output(args).apply((a: any) => getDevice(a, opts))
}

/**
 * A collection of arguments for invoking getDevice.
 */
export interface GetDeviceOutputArgs {
    instance?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
