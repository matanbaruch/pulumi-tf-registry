// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNatGateways(args?: GetNatGatewaysArgs, opts?: pulumi.InvokeOptions): Promise<GetNatGatewaysResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getNatGateways:getNatGateways", {
        "id": args.id,
        "name": args.name,
        "resultOutputFile": args.resultOutputFile,
        "vpcId": args.vpcId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNatGateways.
 */
export interface GetNatGatewaysArgs {
    id?: string;
    name?: string;
    resultOutputFile?: string;
    vpcId?: string;
}

/**
 * A collection of values returned by getNatGateways.
 */
export interface GetNatGatewaysResult {
    readonly id?: string;
    readonly name?: string;
    readonly nats: outputs.GetNatGatewaysNat[];
    readonly resultOutputFile?: string;
    readonly vpcId?: string;
}
export function getNatGatewaysOutput(args?: GetNatGatewaysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNatGatewaysResult> {
    return pulumi.output(args).apply((a: any) => getNatGateways(a, opts))
}

/**
 * A collection of arguments for invoking getNatGateways.
 */
export interface GetNatGatewaysOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
}
