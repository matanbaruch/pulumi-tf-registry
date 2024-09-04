// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGaapAccessRegions(args?: GetGaapAccessRegionsArgs, opts?: pulumi.InvokeOptions): Promise<GetGaapAccessRegionsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getGaapAccessRegions:getGaapAccessRegions", {
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGaapAccessRegions.
 */
export interface GetGaapAccessRegionsArgs {
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getGaapAccessRegions.
 */
export interface GetGaapAccessRegionsResult {
    readonly accessRegionSets: outputs.GetGaapAccessRegionsAccessRegionSet[];
    readonly id: string;
    readonly resultOutputFile?: string;
}
export function getGaapAccessRegionsOutput(args?: GetGaapAccessRegionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGaapAccessRegionsResult> {
    return pulumi.output(args).apply((a: any) => getGaapAccessRegions(a, opts))
}

/**
 * A collection of arguments for invoking getGaapAccessRegions.
 */
export interface GetGaapAccessRegionsOutputArgs {
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
