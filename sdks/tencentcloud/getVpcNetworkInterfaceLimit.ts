// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVpcNetworkInterfaceLimit(args: GetVpcNetworkInterfaceLimitArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcNetworkInterfaceLimitResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getVpcNetworkInterfaceLimit:getVpcNetworkInterfaceLimit", {
        "id": args.id,
        "instanceId": args.instanceId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcNetworkInterfaceLimit.
 */
export interface GetVpcNetworkInterfaceLimitArgs {
    id?: string;
    instanceId: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getVpcNetworkInterfaceLimit.
 */
export interface GetVpcNetworkInterfaceLimitResult {
    readonly eniPrivateIpAddressQuantity: number;
    readonly eniQuantity: number;
    readonly extendEniPrivateIpAddressQuantity: number;
    readonly extendEniQuantity: number;
    readonly id: string;
    readonly instanceId: string;
    readonly resultOutputFile?: string;
    readonly subEniPrivateIpAddressQuantity: number;
    readonly subEniQuantity: number;
}
export function getVpcNetworkInterfaceLimitOutput(args: GetVpcNetworkInterfaceLimitOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcNetworkInterfaceLimitResult> {
    return pulumi.output(args).apply((a: any) => getVpcNetworkInterfaceLimit(a, opts))
}

/**
 * A collection of arguments for invoking getVpcNetworkInterfaceLimit.
 */
export interface GetVpcNetworkInterfaceLimitOutputArgs {
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
