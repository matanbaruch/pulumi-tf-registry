// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDhcpOptions(args?: GetDhcpOptionsArgs, opts?: pulumi.InvokeOptions): Promise<GetDhcpOptionsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("outscale:index/getDhcpOptions:getDhcpOptions", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDhcpOptions.
 */
export interface GetDhcpOptionsArgs {
    filters?: inputs.GetDhcpOptionsFilter[];
    id?: string;
}

/**
 * A collection of values returned by getDhcpOptions.
 */
export interface GetDhcpOptionsResult {
    readonly dhcpOptions: outputs.GetDhcpOptionsDhcpOption[];
    readonly dhcpOptionsSetIds: string[];
    readonly filters?: outputs.GetDhcpOptionsFilter[];
    readonly id: string;
    readonly requestId: string;
}
export function getDhcpOptionsOutput(args?: GetDhcpOptionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDhcpOptionsResult> {
    return pulumi.output(args).apply((a: any) => getDhcpOptions(a, opts))
}

/**
 * A collection of arguments for invoking getDhcpOptions.
 */
export interface GetDhcpOptionsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetDhcpOptionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
