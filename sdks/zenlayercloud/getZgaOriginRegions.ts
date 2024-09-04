// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getZgaOriginRegions(args?: GetZgaOriginRegionsArgs, opts?: pulumi.InvokeOptions): Promise<GetZgaOriginRegionsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zenlayercloud:index/getZgaOriginRegions:getZgaOriginRegions", {
        "id": args.id,
        "nameRegex": args.nameRegex,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getZgaOriginRegions.
 */
export interface GetZgaOriginRegionsArgs {
    id?: string;
    nameRegex?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getZgaOriginRegions.
 */
export interface GetZgaOriginRegionsResult {
    readonly id: string;
    readonly nameRegex?: string;
    readonly regions: outputs.GetZgaOriginRegionsRegion[];
    readonly resultOutputFile?: string;
}
export function getZgaOriginRegionsOutput(args?: GetZgaOriginRegionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetZgaOriginRegionsResult> {
    return pulumi.output(args).apply((a: any) => getZgaOriginRegions(a, opts))
}

/**
 * A collection of arguments for invoking getZgaOriginRegions.
 */
export interface GetZgaOriginRegionsOutputArgs {
    id?: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
