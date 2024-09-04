// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVpcPublicIpAddressPoolCidrBlocks(args: GetVpcPublicIpAddressPoolCidrBlocksArgs, opts?: pulumi.InvokeOptions): Promise<GetVpcPublicIpAddressPoolCidrBlocksResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getVpcPublicIpAddressPoolCidrBlocks:getVpcPublicIpAddressPoolCidrBlocks", {
        "cidrBlock": args.cidrBlock,
        "id": args.id,
        "ids": args.ids,
        "outputFile": args.outputFile,
        "publicIpAddressPoolId": args.publicIpAddressPoolId,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVpcPublicIpAddressPoolCidrBlocks.
 */
export interface GetVpcPublicIpAddressPoolCidrBlocksArgs {
    cidrBlock?: string;
    id?: string;
    ids?: string[];
    outputFile?: string;
    publicIpAddressPoolId: string;
    status?: string;
}

/**
 * A collection of values returned by getVpcPublicIpAddressPoolCidrBlocks.
 */
export interface GetVpcPublicIpAddressPoolCidrBlocksResult {
    readonly blocks: outputs.GetVpcPublicIpAddressPoolCidrBlocksBlock[];
    readonly cidrBlock?: string;
    readonly id: string;
    readonly ids: string[];
    readonly outputFile?: string;
    readonly publicIpAddressPoolId: string;
    readonly status?: string;
}
export function getVpcPublicIpAddressPoolCidrBlocksOutput(args: GetVpcPublicIpAddressPoolCidrBlocksOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpcPublicIpAddressPoolCidrBlocksResult> {
    return pulumi.output(args).apply((a: any) => getVpcPublicIpAddressPoolCidrBlocks(a, opts))
}

/**
 * A collection of arguments for invoking getVpcPublicIpAddressPoolCidrBlocks.
 */
export interface GetVpcPublicIpAddressPoolCidrBlocksOutputArgs {
    cidrBlock?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    outputFile?: pulumi.Input<string>;
    publicIpAddressPoolId: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
