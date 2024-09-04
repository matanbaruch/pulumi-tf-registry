// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getResultCodeMaps(args?: GetResultCodeMapsArgs, opts?: pulumi.InvokeOptions): Promise<GetResultCodeMapsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getResultCodeMaps:getResultCodeMaps", {
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getResultCodeMaps.
 */
export interface GetResultCodeMapsArgs {
    filter?: string;
}

/**
 * A collection of values returned by getResultCodeMaps.
 */
export interface GetResultCodeMapsResult {
    readonly filter?: string;
    readonly id: string;
    readonly ids: string[];
}
export function getResultCodeMapsOutput(args?: GetResultCodeMapsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResultCodeMapsResult> {
    return pulumi.output(args).apply((a: any) => getResultCodeMaps(a, opts))
}

/**
 * A collection of arguments for invoking getResultCodeMaps.
 */
export interface GetResultCodeMapsOutputArgs {
    filter?: pulumi.Input<string>;
}
