// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFcZones(args?: GetFcZonesArgs, opts?: pulumi.InvokeOptions): Promise<GetFcZonesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getFcZones:getFcZones", {
        "id": args.id,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFcZones.
 */
export interface GetFcZonesArgs {
    id?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getFcZones.
 */
export interface GetFcZonesResult {
    readonly id: string;
    readonly ids: string[];
    readonly outputFile?: string;
    readonly zones: outputs.GetFcZonesZone[];
}
export function getFcZonesOutput(args?: GetFcZonesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFcZonesResult> {
    return pulumi.output(args).apply((a: any) => getFcZones(a, opts))
}

/**
 * A collection of arguments for invoking getFcZones.
 */
export interface GetFcZonesOutputArgs {
    id?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
