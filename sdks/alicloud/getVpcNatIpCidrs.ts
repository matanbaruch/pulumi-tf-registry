// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpcNatIpCidrs(args: GetVpcNatIpCidrsArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcNatIpCidrsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getVpcNatIpCidrs:getVpcNatIpCidrs", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "natGatewayId": args.natGatewayId,
        "natIpCidrNames": args.natIpCidrNames,
        "natIpCidrs": args.natIpCidrs,
        "outputFile": args.outputFile,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcNatIpCidrs.
 */
export interface GetVpcNatIpCidrsArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    natGatewayId: string;
    natIpCidrNames?: string[];
    natIpCidrs?: string[];
    outputFile?: string;
    status?: string;
}

/**
 * A collection of values returned by getVpcNatIpCidrs.
 */
export interface GetVpcNatIpCidrsResult {
    readonly cidrs: outputs.GetVpcNatIpCidrsCidr[];
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly natGatewayId: string;
    readonly natIpCidrNames?: string[];
    readonly natIpCidrs?: string[];
    readonly outputFile?: string;
    readonly status?: string;
}
export function getVpcNatIpCidrsOutput(args: GetVpcNatIpCidrsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcNatIpCidrsResult> {
    return pulumi.output(args).apply((a: any) => getVpcNatIpCidrs(a, opts))
}

/**
 * A collection of arguments for invoking getVpcNatIpCidrs.
 */
export interface GetVpcNatIpCidrsOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    natGatewayId: pulumi.Input<string>;
    natIpCidrNames?: pulumi.Input<pulumi.Input<string>[]>;
    natIpCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    outputFile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
