// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIpv6NeighborDynamicOper(args?: GetIpv6NeighborDynamicOperArgs, opts?: pulumi.InvokeOptions): Promise<GetIpv6NeighborDynamicOperResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getIpv6NeighborDynamicOper:getIpv6NeighborDynamicOper", {
        "id": args.id,
        "oper": args.oper,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIpv6NeighborDynamicOper.
 */
export interface GetIpv6NeighborDynamicOperArgs {
    id?: string;
    oper?: inputs.GetIpv6NeighborDynamicOperOper;
}

/**
 * A collection of values returned by getIpv6NeighborDynamicOper.
 */
export interface GetIpv6NeighborDynamicOperResult {
    readonly id: string;
    readonly oper?: outputs.GetIpv6NeighborDynamicOperOper;
}
export function getIpv6NeighborDynamicOperOutput(args?: GetIpv6NeighborDynamicOperOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpv6NeighborDynamicOperResult> {
    return pulumi.output(args).apply((a: any) => getIpv6NeighborDynamicOper(a, opts))
}

/**
 * A collection of arguments for invoking getIpv6NeighborDynamicOper.
 */
export interface GetIpv6NeighborDynamicOperOutputArgs {
    id?: pulumi.Input<string>;
    oper?: pulumi.Input<inputs.GetIpv6NeighborDynamicOperOperArgs>;
}
