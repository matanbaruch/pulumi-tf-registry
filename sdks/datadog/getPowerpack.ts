// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPowerpack(args: GetPowerpackArgs, opts?: pulumi.InvokeOptions): Promise<GetPowerpackResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("datadog:index/getPowerpack:getPowerpack", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPowerpack.
 */
export interface GetPowerpackArgs {
    name: string;
}

/**
 * A collection of values returned by getPowerpack.
 */
export interface GetPowerpackResult {
    readonly id: string;
    readonly name: string;
}
export function getPowerpackOutput(args: GetPowerpackOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPowerpackResult> {
    return pulumi.output(args).apply((a: any) => getPowerpack(a, opts))
}

/**
 * A collection of arguments for invoking getPowerpack.
 */
export interface GetPowerpackOutputArgs {
    name: pulumi.Input<string>;
}
