// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAlloydbLocations(args?: GetAlloydbLocationsArgs, opts?: pulumi.InvokeOptions): Promise<GetAlloydbLocationsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getAlloydbLocations:getAlloydbLocations", {
        "id": args.id,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAlloydbLocations.
 */
export interface GetAlloydbLocationsArgs {
    id?: string;
    project?: string;
}

/**
 * A collection of values returned by getAlloydbLocations.
 */
export interface GetAlloydbLocationsResult {
    readonly id: string;
    readonly locations: outputs.GetAlloydbLocationsLocation[];
    readonly project?: string;
}
export function getAlloydbLocationsOutput(args?: GetAlloydbLocationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAlloydbLocationsResult> {
    return pulumi.output(args).apply((a: any) => getAlloydbLocations(a, opts))
}

/**
 * A collection of arguments for invoking getAlloydbLocations.
 */
export interface GetAlloydbLocationsOutputArgs {
    id?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
