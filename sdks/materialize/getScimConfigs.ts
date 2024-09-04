// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getScimConfigs(args?: GetScimConfigsArgs, opts?: pulumi.InvokeOptions): Promise<GetScimConfigsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("materialize:index/getScimConfigs:getScimConfigs", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getScimConfigs.
 */
export interface GetScimConfigsArgs {
    id?: string;
}

/**
 * A collection of values returned by getScimConfigs.
 */
export interface GetScimConfigsResult {
    readonly configurations: outputs.GetScimConfigsConfiguration[];
    readonly id: string;
}
export function getScimConfigsOutput(args?: GetScimConfigsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScimConfigsResult> {
    return pulumi.output(args).apply((a: any) => getScimConfigs(a, opts))
}

/**
 * A collection of arguments for invoking getScimConfigs.
 */
export interface GetScimConfigsOutputArgs {
    id?: pulumi.Input<string>;
}
