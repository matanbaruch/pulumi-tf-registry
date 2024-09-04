// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNasZones(args?: GetNasZonesArgs, opts?: pulumi.InvokeOptions): Promise<GetNasZonesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getNasZones:getNasZones", {
        "fileSystemType": args.fileSystemType,
        "id": args.id,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNasZones.
 */
export interface GetNasZonesArgs {
    fileSystemType?: string;
    id?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getNasZones.
 */
export interface GetNasZonesResult {
    readonly fileSystemType?: string;
    readonly id: string;
    readonly outputFile?: string;
    readonly zones: outputs.GetNasZonesZone[];
}
export function getNasZonesOutput(args?: GetNasZonesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNasZonesResult> {
    return pulumi.output(args).apply((a: any) => getNasZones(a, opts))
}

/**
 * A collection of arguments for invoking getNasZones.
 */
export interface GetNasZonesOutputArgs {
    fileSystemType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
