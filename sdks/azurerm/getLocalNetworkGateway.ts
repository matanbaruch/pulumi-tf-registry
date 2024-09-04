// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLocalNetworkGateway(args: GetLocalNetworkGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalNetworkGatewayResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getLocalNetworkGateway:getLocalNetworkGateway", {
        "id": args.id,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLocalNetworkGateway.
 */
export interface GetLocalNetworkGatewayArgs {
    id?: string;
    name: string;
    resourceGroupName: string;
    timeouts?: inputs.GetLocalNetworkGatewayTimeouts;
}

/**
 * A collection of values returned by getLocalNetworkGateway.
 */
export interface GetLocalNetworkGatewayResult {
    readonly addressSpaces: string[];
    readonly bgpSettings: outputs.GetLocalNetworkGatewayBgpSetting[];
    readonly gatewayAddress: string;
    readonly gatewayFqdn: string;
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetLocalNetworkGatewayTimeouts;
}
export function getLocalNetworkGatewayOutput(args: GetLocalNetworkGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocalNetworkGatewayResult> {
    return pulumi.output(args).apply((a: any) => getLocalNetworkGateway(a, opts))
}

/**
 * A collection of arguments for invoking getLocalNetworkGateway.
 */
export interface GetLocalNetworkGatewayOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetLocalNetworkGatewayTimeoutsArgs>;
}
