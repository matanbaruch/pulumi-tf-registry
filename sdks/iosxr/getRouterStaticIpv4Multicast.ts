// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRouterStaticIpv4Multicast(args: GetRouterStaticIpv4MulticastArgs, opts?: pulumi.InvokeOptions): Promise<GetRouterStaticIpv4MulticastResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getRouterStaticIpv4Multicast:getRouterStaticIpv4Multicast", {
        "device": args.device,
        "prefixAddress": args.prefixAddress,
        "prefixLength": args.prefixLength,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRouterStaticIpv4Multicast.
 */
export interface GetRouterStaticIpv4MulticastArgs {
    device?: string;
    prefixAddress: string;
    prefixLength: number;
}

/**
 * A collection of values returned by getRouterStaticIpv4Multicast.
 */
export interface GetRouterStaticIpv4MulticastResult {
    readonly device?: string;
    readonly id: string;
    readonly nexthopAddresses: outputs.GetRouterStaticIpv4MulticastNexthopAddress[];
    readonly nexthopInterfaceAddresses: outputs.GetRouterStaticIpv4MulticastNexthopInterfaceAddress[];
    readonly nexthopInterfaces: outputs.GetRouterStaticIpv4MulticastNexthopInterface[];
    readonly prefixAddress: string;
    readonly prefixLength: number;
    readonly vrfs: outputs.GetRouterStaticIpv4MulticastVrf[];
}
export function getRouterStaticIpv4MulticastOutput(args: GetRouterStaticIpv4MulticastOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouterStaticIpv4MulticastResult> {
    return pulumi.output(args).apply((a: any) => getRouterStaticIpv4Multicast(a, opts))
}

/**
 * A collection of arguments for invoking getRouterStaticIpv4Multicast.
 */
export interface GetRouterStaticIpv4MulticastOutputArgs {
    device?: pulumi.Input<string>;
    prefixAddress: pulumi.Input<string>;
    prefixLength: pulumi.Input<number>;
}
