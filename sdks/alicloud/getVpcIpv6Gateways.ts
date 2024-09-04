// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpcIpv6Gateways(args?: GetVpcIpv6GatewaysArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcIpv6GatewaysResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getVpcIpv6Gateways:getVpcIpv6Gateways", {
        "id": args.id,
        "ids": args.ids,
        "ipv6GatewayName": args.ipv6GatewayName,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "status": args.status,
        "vpcId": args.vpcId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcIpv6Gateways.
 */
export interface GetVpcIpv6GatewaysArgs {
    id?: string;
    ids?: string[];
    ipv6GatewayName?: string;
    nameRegex?: string;
    outputFile?: string;
    status?: string;
    vpcId?: string;
}

/**
 * A collection of values returned by getVpcIpv6Gateways.
 */
export interface GetVpcIpv6GatewaysResult {
    readonly gateways: outputs.GetVpcIpv6GatewaysGateway[];
    readonly id: string;
    readonly ids: string[];
    readonly ipv6GatewayName?: string;
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly status?: string;
    readonly vpcId?: string;
}
export function getVpcIpv6GatewaysOutput(args?: GetVpcIpv6GatewaysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcIpv6GatewaysResult> {
    return pulumi.output(args).apply((a: any) => getVpcIpv6Gateways(a, opts))
}

/**
 * A collection of arguments for invoking getVpcIpv6Gateways.
 */
export interface GetVpcIpv6GatewaysOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    ipv6GatewayName?: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
}
