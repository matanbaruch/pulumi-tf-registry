// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCddcZones(args?: GetCddcZonesArgs, opts?: pulumi.InvokeOptions): Promise<GetCddcZonesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getCddcZones:getCddcZones", {
        "id": args.id,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCddcZones.
 */
export interface GetCddcZonesArgs {
    id?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getCddcZones.
 */
export interface GetCddcZonesResult {
    readonly id: string;
    readonly ids: string[];
    readonly outputFile?: string;
    readonly zones: outputs.GetCddcZonesZone[];
}
export function getCddcZonesOutput(args?: GetCddcZonesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCddcZonesResult> {
    return pulumi.output(args).apply((a: any) => getCddcZones(a, opts))
}

/**
 * A collection of arguments for invoking getCddcZones.
 */
export interface GetCddcZonesOutputArgs {
    id?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
