// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDnsZones(args?: GetDnsZonesArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsZonesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("anxcloud:index/getDnsZones:getDnsZones", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDnsZones.
 */
export interface GetDnsZonesArgs {
    id?: string;
}

/**
 * A collection of values returned by getDnsZones.
 */
export interface GetDnsZonesResult {
    readonly id: string;
    readonly zones: outputs.GetDnsZonesZone[];
}
export function getDnsZonesOutput(args?: GetDnsZonesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDnsZonesResult> {
    return pulumi.output(args).apply((a: any) => getDnsZones(a, opts))
}

/**
 * A collection of arguments for invoking getDnsZones.
 */
export interface GetDnsZonesOutputArgs {
    id?: pulumi.Input<string>;
}
