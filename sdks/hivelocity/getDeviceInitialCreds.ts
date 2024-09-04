// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDeviceInitialCreds(args: GetDeviceInitialCredsArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceInitialCredsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hivelocity:index/getDeviceInitialCreds:getDeviceInitialCreds", {
        "deviceId": args.deviceId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDeviceInitialCreds.
 */
export interface GetDeviceInitialCredsArgs {
    deviceId: number;
    id?: string;
}

/**
 * A collection of values returned by getDeviceInitialCreds.
 */
export interface GetDeviceInitialCredsResult {
    readonly deviceId: number;
    readonly id: string;
    readonly lockerUrl: string;
    readonly password: string;
    readonly port: number;
    readonly user: string;
}
export function getDeviceInitialCredsOutput(args: GetDeviceInitialCredsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeviceInitialCredsResult> {
    return pulumi.output(args).apply((a: any) => getDeviceInitialCreds(a, opts))
}

/**
 * A collection of arguments for invoking getDeviceInitialCreds.
 */
export interface GetDeviceInitialCredsOutputArgs {
    deviceId: pulumi.Input<number>;
    id?: pulumi.Input<string>;
}
