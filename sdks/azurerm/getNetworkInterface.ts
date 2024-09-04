// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkInterface(args: GetNetworkInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkInterfaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getNetworkInterface:getNetworkInterface", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkInterface.
 */
export interface GetNetworkInterfaceArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetNetworkInterfaceTimeouts;
}

/**
 * A collection of values returned by getNetworkInterface.
 */
export interface GetNetworkInterfaceResult {
    readonly acceleratedNetworkingEnabled: boolean;
    readonly appliedDnsServers: string[];
    readonly dnsServers: string[];
    readonly id: string;
    readonly internalDnsNameLabel: string;
    readonly ipConfigurations: outputs.GetNetworkInterfaceIpConfiguration[];
    readonly ipForwardingEnabled: boolean;
    readonly location: string;
    readonly macAddress: string;
    readonly name: string;
    readonly networkSecurityGroupId: string;
    readonly privateIpAddress: string;
    readonly privateIpAddresses: string[];
    readonly resourceGroupName: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetNetworkInterfaceTimeouts;
    readonly virtualMachineId: string;
}
export function getNetworkInterfaceOutput(args: GetNetworkInterfaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkInterfaceResult> {
    return pulumi.output(args).apply((a: any) => getNetworkInterface(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkInterface.
 */
export interface GetNetworkInterfaceOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetNetworkInterfaceTimeoutsArgs>;
}
