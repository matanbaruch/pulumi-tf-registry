// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalanceDecompression(args: GetLoadBalanceDecompressionArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalanceDecompressionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getLoadBalanceDecompression:getLoadBalanceDecompression", {
        "id": args.id,
        "mkey": args.mkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalanceDecompression.
 */
export interface GetLoadBalanceDecompressionArgs {
    id?: string;
    mkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getLoadBalanceDecompression.
 */
export interface GetLoadBalanceDecompressionResult {
    readonly cpuLimit: string;
    readonly id: string;
    readonly maxCpuUsage: string;
    readonly method: string;
    readonly mkey: string;
    readonly uriListType: string;
    readonly vdom?: string;
}
export function getLoadBalanceDecompressionOutput(args: GetLoadBalanceDecompressionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalanceDecompressionResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalanceDecompression(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalanceDecompression.
 */
export interface GetLoadBalanceDecompressionOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
