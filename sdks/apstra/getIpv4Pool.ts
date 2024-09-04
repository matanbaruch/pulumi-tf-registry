// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIpv4Pool(args?: GetIpv4PoolArgs, opts?: pulumi.InvokeOptions): Promise<GetIpv4PoolResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("apstra:index/getIpv4Pool:getIpv4Pool", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIpv4Pool.
 */
export interface GetIpv4PoolArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getIpv4Pool.
 */
export interface GetIpv4PoolResult {
    readonly id: string;
    readonly name: string;
    readonly status: string;
    readonly subnets: outputs.GetIpv4PoolSubnet[];
    readonly total: number;
    readonly used: number;
    readonly usedPercentage: number;
}
export function getIpv4PoolOutput(args?: GetIpv4PoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpv4PoolResult> {
    return pulumi.output(args).apply((a: any) => getIpv4Pool(a, opts))
}

/**
 * A collection of arguments for invoking getIpv4Pool.
 */
export interface GetIpv4PoolOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
