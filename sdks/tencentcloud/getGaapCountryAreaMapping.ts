// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGaapCountryAreaMapping(args?: GetGaapCountryAreaMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetGaapCountryAreaMappingResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getGaapCountryAreaMapping:getGaapCountryAreaMapping", {
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGaapCountryAreaMapping.
 */
export interface GetGaapCountryAreaMappingArgs {
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getGaapCountryAreaMapping.
 */
export interface GetGaapCountryAreaMappingResult {
    readonly countryAreaMappingLists: outputs.GetGaapCountryAreaMappingCountryAreaMappingList[];
    readonly id: string;
    readonly resultOutputFile?: string;
}
export function getGaapCountryAreaMappingOutput(args?: GetGaapCountryAreaMappingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGaapCountryAreaMappingResult> {
    return pulumi.output(args).apply((a: any) => getGaapCountryAreaMapping(a, opts))
}

/**
 * A collection of arguments for invoking getGaapCountryAreaMapping.
 */
export interface GetGaapCountryAreaMappingOutputArgs {
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
