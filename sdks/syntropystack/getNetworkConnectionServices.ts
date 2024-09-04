// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkConnectionServices(args?: GetNetworkConnectionServicesArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkConnectionServicesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("syntropystack:index/getNetworkConnectionServices:getNetworkConnectionServices", {
        "connectionGroupId": args.connectionGroupId,
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkConnectionServices.
 */
export interface GetNetworkConnectionServicesArgs {
    connectionGroupId?: number;
    filter?: inputs.GetNetworkConnectionServicesFilter;
}

/**
 * A collection of values returned by getNetworkConnectionServices.
 */
export interface GetNetworkConnectionServicesResult {
    readonly connectionGroupId?: number;
    readonly filter?: outputs.GetNetworkConnectionServicesFilter;
    readonly id: string;
    readonly services: outputs.GetNetworkConnectionServicesService[];
}
export function getNetworkConnectionServicesOutput(args?: GetNetworkConnectionServicesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkConnectionServicesResult> {
    return pulumi.output(args).apply((a: any) => getNetworkConnectionServices(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkConnectionServices.
 */
export interface GetNetworkConnectionServicesOutputArgs {
    connectionGroupId?: pulumi.Input<number>;
    filter?: pulumi.Input<inputs.GetNetworkConnectionServicesFilterArgs>;
}
