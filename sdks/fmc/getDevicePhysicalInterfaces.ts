// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDevicePhysicalInterfaces(args: GetDevicePhysicalInterfacesArgs, opts?: pulumi.InvokeOptions): Promise<GetDevicePhysicalInterfacesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fmc:index/getDevicePhysicalInterfaces:getDevicePhysicalInterfaces", {
        "deviceId": args.deviceId,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDevicePhysicalInterfaces.
 */
export interface GetDevicePhysicalInterfacesArgs {
    deviceId: string;
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getDevicePhysicalInterfaces.
 */
export interface GetDevicePhysicalInterfacesResult {
    readonly description: string;
    readonly deviceId: string;
    readonly id: string;
    readonly ifName: string;
    readonly mode: string;
    readonly mtu: number;
    readonly name: string;
    readonly securityZoneId: string;
    readonly type: string;
}
export function getDevicePhysicalInterfacesOutput(args: GetDevicePhysicalInterfacesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDevicePhysicalInterfacesResult> {
    return pulumi.output(args).apply((a: any) => getDevicePhysicalInterfaces(a, opts))
}

/**
 * A collection of arguments for invoking getDevicePhysicalInterfaces.
 */
export interface GetDevicePhysicalInterfacesOutputArgs {
    deviceId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
