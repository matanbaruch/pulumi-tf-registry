// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDevice(args?: GetDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("metal:index/getDevice:getDevice", {
        "deviceId": args.deviceId,
        "hostname": args.hostname,
        "id": args.id,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDevice.
 */
export interface GetDeviceArgs {
    deviceId?: string;
    hostname?: string;
    id?: string;
    projectId?: string;
}

/**
 * A collection of values returned by getDevice.
 */
export interface GetDeviceResult {
    readonly accessPrivateIpv4: string;
    readonly accessPublicIpv4: string;
    readonly accessPublicIpv6: string;
    readonly alwaysPxe: boolean;
    readonly billingCycle: string;
    readonly description: string;
    readonly deviceId: string;
    readonly facility: string;
    readonly hardwareReservationId: string;
    readonly hostname: string;
    readonly id: string;
    readonly ipxeScriptUrl: string;
    readonly metro: string;
    readonly networkType: string;
    readonly networks: outputs.GetDeviceNetwork[];
    readonly operatingSystem: string;
    readonly plan: string;
    readonly ports: outputs.GetDevicePort[];
    readonly projectId: string;
    readonly rootPassword: string;
    readonly sshKeyIds: string[];
    readonly state: string;
    readonly storage: string;
    readonly tags: string[];
}
export function getDeviceOutput(args?: GetDeviceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeviceResult> {
    return pulumi.output(args).apply((a: any) => getDevice(a, opts))
}

/**
 * A collection of arguments for invoking getDevice.
 */
export interface GetDeviceOutputArgs {
    deviceId?: pulumi.Input<string>;
    hostname?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}
