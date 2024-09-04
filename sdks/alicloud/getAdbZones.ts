// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAdbZones(args?: GetAdbZonesArgs, opts?: pulumi.InvokeOptions): Promise<GetAdbZonesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getAdbZones:getAdbZones", {
        "id": args.id,
        "multi": args.multi,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAdbZones.
 */
export interface GetAdbZonesArgs {
    id?: string;
    multi?: boolean;
    outputFile?: string;
}

/**
 * A collection of values returned by getAdbZones.
 */
export interface GetAdbZonesResult {
    readonly id: string;
    readonly ids: string[];
    readonly multi?: boolean;
    readonly outputFile?: string;
    readonly zones: outputs.GetAdbZonesZone[];
}
export function getAdbZonesOutput(args?: GetAdbZonesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAdbZonesResult> {
    return pulumi.output(args).apply((a: any) => getAdbZones(a, opts))
}

/**
 * A collection of arguments for invoking getAdbZones.
 */
export interface GetAdbZonesOutputArgs {
    id?: pulumi.Input<string>;
    multi?: pulumi.Input<boolean>;
    outputFile?: pulumi.Input<string>;
}
