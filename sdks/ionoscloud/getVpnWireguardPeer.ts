// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpnWireguardPeer(args: GetVpnWireguardPeerArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnWireguardPeerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ionoscloud:index/getVpnWireguardPeer:getVpnWireguardPeer", {
        "gatewayId": args.gatewayId,
        "id": args.id,
        "location": args.location,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpnWireguardPeer.
 */
export interface GetVpnWireguardPeerArgs {
    gatewayId: string;
    id?: string;
    location: string;
    name?: string;
}

/**
 * A collection of values returned by getVpnWireguardPeer.
 */
export interface GetVpnWireguardPeerResult {
    readonly allowedIps: string[];
    readonly description: string;
    readonly endpoints: outputs.GetVpnWireguardPeerEndpoint[];
    readonly gatewayId: string;
    readonly id?: string;
    readonly location: string;
    readonly name: string;
    readonly publicKey: string;
    readonly status: string;
}
export function getVpnWireguardPeerOutput(args: GetVpnWireguardPeerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpnWireguardPeerResult> {
    return pulumi.output(args).apply((a: any) => getVpnWireguardPeer(a, opts))
}

/**
 * A collection of arguments for invoking getVpnWireguardPeer.
 */
export interface GetVpnWireguardPeerOutputArgs {
    gatewayId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
