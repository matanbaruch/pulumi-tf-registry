// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataplatformVersions(args?: GetDataplatformVersionsArgs, opts?: pulumi.InvokeOptions): Promise<GetDataplatformVersionsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ionoscloud:index/getDataplatformVersions:getDataplatformVersions", {
        "id": args.id,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataplatformVersions.
 */
export interface GetDataplatformVersionsArgs {
    id?: string;
    timeouts?: inputs.GetDataplatformVersionsTimeouts;
}

/**
 * A collection of values returned by getDataplatformVersions.
 */
export interface GetDataplatformVersionsResult {
    readonly id: string;
    readonly timeouts?: outputs.GetDataplatformVersionsTimeouts;
    readonly versions: string[];
}
export function getDataplatformVersionsOutput(args?: GetDataplatformVersionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataplatformVersionsResult> {
    return pulumi.output(args).apply((a: any) => getDataplatformVersions(a, opts))
}

/**
 * A collection of arguments for invoking getDataplatformVersions.
 */
export interface GetDataplatformVersionsOutputArgs {
    id?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetDataplatformVersionsTimeoutsArgs>;
}
