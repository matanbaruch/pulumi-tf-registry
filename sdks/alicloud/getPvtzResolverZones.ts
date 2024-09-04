// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPvtzResolverZones(args?: GetPvtzResolverZonesArgs, opts?: pulumi.InvokeOptions): Promise<GetPvtzResolverZonesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getPvtzResolverZones:getPvtzResolverZones", {
        "id": args.id,
        "outputFile": args.outputFile,
        "status": args.status,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPvtzResolverZones.
 */
export interface GetPvtzResolverZonesArgs {
    id?: string;
    outputFile?: string;
    status?: string;
}

/**
 * A collection of values returned by getPvtzResolverZones.
 */
export interface GetPvtzResolverZonesResult {
    readonly id: string;
    readonly outputFile?: string;
    readonly status?: string;
    readonly zones: outputs.GetPvtzResolverZonesZone[];
}
export function getPvtzResolverZonesOutput(args?: GetPvtzResolverZonesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPvtzResolverZonesResult> {
    return pulumi.output(args).apply((a: any) => getPvtzResolverZones(a, opts))
}

/**
 * A collection of arguments for invoking getPvtzResolverZones.
 */
export interface GetPvtzResolverZonesOutputArgs {
    id?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
