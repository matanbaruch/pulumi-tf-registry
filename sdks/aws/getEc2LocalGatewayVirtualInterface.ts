// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEc2LocalGatewayVirtualInterface(args?: GetEc2LocalGatewayVirtualInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2LocalGatewayVirtualInterfaceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getEc2LocalGatewayVirtualInterface:getEc2LocalGatewayVirtualInterface", {
        "filters": args.filters,
        "id": args.id,
        "tags": args.tags,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEc2LocalGatewayVirtualInterface.
 */
export interface GetEc2LocalGatewayVirtualInterfaceArgs {
    filters?: inputs.GetEc2LocalGatewayVirtualInterfaceFilter[];
    id?: string;
    tags?: {[key: string]: string};
    timeouts?: inputs.GetEc2LocalGatewayVirtualInterfaceTimeouts;
}

/**
 * A collection of values returned by getEc2LocalGatewayVirtualInterface.
 */
export interface GetEc2LocalGatewayVirtualInterfaceResult {
    readonly filters?: outputs.GetEc2LocalGatewayVirtualInterfaceFilter[];
    readonly id: string;
    readonly localAddress: string;
    readonly localBgpAsn: number;
    readonly localGatewayId: string;
    readonly localGatewayVirtualInterfaceIds: string[];
    readonly peerAddress: string;
    readonly peerBgpAsn: number;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetEc2LocalGatewayVirtualInterfaceTimeouts;
    readonly vlan: number;
}
export function getEc2LocalGatewayVirtualInterfaceOutput(args?: GetEc2LocalGatewayVirtualInterfaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2LocalGatewayVirtualInterfaceResult> {
    return pulumi.output(args).apply((a: any) => getEc2LocalGatewayVirtualInterface(a, opts))
}

/**
 * A collection of arguments for invoking getEc2LocalGatewayVirtualInterface.
 */
export interface GetEc2LocalGatewayVirtualInterfaceOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetEc2LocalGatewayVirtualInterfaceFilterArgs>[]>;
    id?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GetEc2LocalGatewayVirtualInterfaceTimeoutsArgs>;
}
