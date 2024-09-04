// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudStorageGatewayStocks(args?: GetCloudStorageGatewayStocksArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudStorageGatewayStocksResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getCloudStorageGatewayStocks:getCloudStorageGatewayStocks", {
        "gatewayClass": args.gatewayClass,
        "id": args.id,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudStorageGatewayStocks.
 */
export interface GetCloudStorageGatewayStocksArgs {
    gatewayClass?: string;
    id?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getCloudStorageGatewayStocks.
 */
export interface GetCloudStorageGatewayStocksResult {
    readonly gatewayClass?: string;
    readonly id: string;
    readonly outputFile?: string;
    readonly stocks: outputs.GetCloudStorageGatewayStocksStock[];
}
export function getCloudStorageGatewayStocksOutput(args?: GetCloudStorageGatewayStocksOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudStorageGatewayStocksResult> {
    return pulumi.output(args).apply((a: any) => getCloudStorageGatewayStocks(a, opts))
}

/**
 * A collection of arguments for invoking getCloudStorageGatewayStocks.
 */
export interface GetCloudStorageGatewayStocksOutputArgs {
    gatewayClass?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
