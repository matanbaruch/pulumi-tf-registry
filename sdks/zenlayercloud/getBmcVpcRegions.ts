// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBmcVpcRegions(args?: GetBmcVpcRegionsArgs, opts?: pulumi.InvokeOptions): Promise<GetBmcVpcRegionsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zenlayercloud:index/getBmcVpcRegions:getBmcVpcRegions", {
        "availabilityZone": args.availabilityZone,
        "id": args.id,
        "region": args.region,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBmcVpcRegions.
 */
export interface GetBmcVpcRegionsArgs {
    availabilityZone?: string;
    id?: string;
    region?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getBmcVpcRegions.
 */
export interface GetBmcVpcRegionsResult {
    readonly availabilityZone?: string;
    readonly id: string;
    readonly region?: string;
    readonly regions: outputs.GetBmcVpcRegionsRegion[];
    readonly resultOutputFile?: string;
}
export function getBmcVpcRegionsOutput(args?: GetBmcVpcRegionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBmcVpcRegionsResult> {
    return pulumi.output(args).apply((a: any) => getBmcVpcRegions(a, opts))
}

/**
 * A collection of arguments for invoking getBmcVpcRegions.
 */
export interface GetBmcVpcRegionsOutputArgs {
    availabilityZone?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
