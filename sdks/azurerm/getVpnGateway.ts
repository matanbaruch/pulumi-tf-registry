// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpnGateway(args: GetVpnGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getVpnGateway:getVpnGateway", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpnGateway.
 */
export interface GetVpnGatewayArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetVpnGatewayTimeouts;
}

/**
 * A collection of values returned by getVpnGateway.
 */
export interface GetVpnGatewayResult {
    readonly bgpSettings: outputs.GetVpnGatewayBgpSetting[];
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly scaleUnit: number;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetVpnGatewayTimeouts;
    readonly virtualHubId: string;
}
export function getVpnGatewayOutput(args: GetVpnGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpnGatewayResult> {
    return pulumi.output(args).apply((a: any) => getVpnGateway(a, opts))
}

/**
 * A collection of arguments for invoking getVpnGateway.
 */
export interface GetVpnGatewayOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetVpnGatewayTimeoutsArgs>;
}
