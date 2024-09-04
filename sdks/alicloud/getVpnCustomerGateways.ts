// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpnCustomerGateways(args?: GetVpnCustomerGatewaysArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnCustomerGatewaysResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getVpnCustomerGateways:getVpnCustomerGateways", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpnCustomerGateways.
 */
export interface GetVpnCustomerGatewaysArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getVpnCustomerGateways.
 */
export interface GetVpnCustomerGatewaysResult {
    readonly gateways: outputs.GetVpnCustomerGatewaysGateway[];
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
}
export function getVpnCustomerGatewaysOutput(args?: GetVpnCustomerGatewaysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpnCustomerGatewaysResult> {
    return pulumi.output(args).apply((a: any) => getVpnCustomerGateways(a, opts))
}

/**
 * A collection of arguments for invoking getVpnCustomerGateways.
 */
export interface GetVpnCustomerGatewaysOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
