// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAsnPool(args?: GetAsnPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetAsnPoolResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("apstra:index/getAsnPool:getAsnPool", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAsnPool.
 */
export interface GetAsnPoolArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getAsnPool.
 */
export interface GetAsnPoolResult {
    readonly id: string;
    readonly name: string;
    readonly ranges: outputs.GetAsnPoolRange[];
    readonly status: string;
    readonly total: number;
    readonly used: number;
    readonly usedPercentage: number;
}
export function getAsnPoolOutput(args?: GetAsnPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAsnPoolResult> {
    return pulumi.output(args).apply((a: any) => getAsnPool(a, opts))
}

/**
 * A collection of arguments for invoking getAsnPool.
 */
export interface GetAsnPoolOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
