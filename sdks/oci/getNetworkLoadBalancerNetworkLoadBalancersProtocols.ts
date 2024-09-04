// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworkLoadBalancerNetworkLoadBalancersProtocols(args?: GetNetworkLoadBalancerNetworkLoadBalancersProtocolsArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkLoadBalancerNetworkLoadBalancersProtocolsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getNetworkLoadBalancerNetworkLoadBalancersProtocols:getNetworkLoadBalancerNetworkLoadBalancersProtocols", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkLoadBalancerNetworkLoadBalancersProtocols.
 */
export interface GetNetworkLoadBalancerNetworkLoadBalancersProtocolsArgs {
    filters?: inputs.GetNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter[];
    id?: string;
}

/**
 * A collection of values returned by getNetworkLoadBalancerNetworkLoadBalancersProtocols.
 */
export interface GetNetworkLoadBalancerNetworkLoadBalancersProtocolsResult {
    readonly filters?: outputs.GetNetworkLoadBalancerNetworkLoadBalancersProtocolsFilter[];
    readonly id: string;
    readonly networkLoadBalancersProtocolCollections: outputs.GetNetworkLoadBalancerNetworkLoadBalancersProtocolsNetworkLoadBalancersProtocolCollection[];
}
export function getNetworkLoadBalancerNetworkLoadBalancersProtocolsOutput(args?: GetNetworkLoadBalancerNetworkLoadBalancersProtocolsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkLoadBalancerNetworkLoadBalancersProtocolsResult> {
    return pulumi.output(args).apply((a: any) => getNetworkLoadBalancerNetworkLoadBalancersProtocols(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkLoadBalancerNetworkLoadBalancersProtocols.
 */
export interface GetNetworkLoadBalancerNetworkLoadBalancersProtocolsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetNetworkLoadBalancerNetworkLoadBalancersProtocolsFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
