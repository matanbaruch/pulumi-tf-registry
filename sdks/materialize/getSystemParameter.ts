// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemParameter(args?: GetSystemParameterArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemParameterResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("materialize:index/getSystemParameter:getSystemParameter", {
        "id": args.id,
        "name": args.name,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemParameter.
 */
export interface GetSystemParameterArgs {
    id?: string;
    name?: string;
    region?: string;
}

/**
 * A collection of values returned by getSystemParameter.
 */
export interface GetSystemParameterResult {
    readonly id: string;
    readonly name?: string;
    readonly parameters: outputs.GetSystemParameterParameter[];
    readonly region: string;
}
export function getSystemParameterOutput(args?: GetSystemParameterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemParameterResult> {
    return pulumi.output(args).apply((a: any) => getSystemParameter(a, opts))
}

/**
 * A collection of arguments for invoking getSystemParameter.
 */
export interface GetSystemParameterOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
