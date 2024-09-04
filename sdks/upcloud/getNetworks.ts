// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNetworks(args?: GetNetworksArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworksResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("upcloud:index/getNetworks:getNetworks", {
        "filterName": args.filterName,
        "id": args.id,
        "zone": args.zone,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworks.
 */
export interface GetNetworksArgs {
    filterName?: string;
    id?: string;
    zone?: string;
}

/**
 * A collection of values returned by getNetworks.
 */
export interface GetNetworksResult {
    readonly filterName?: string;
    readonly id: string;
    readonly networks: outputs.GetNetworksNetwork[];
    readonly zone?: string;
}
export function getNetworksOutput(args?: GetNetworksOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworksResult> {
    return pulumi.output(args).apply((a: any) => getNetworks(a, opts))
}

/**
 * A collection of arguments for invoking getNetworks.
 */
export interface GetNetworksOutputArgs {
    filterName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    zone?: pulumi.Input<string>;
}
