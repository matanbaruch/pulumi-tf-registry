// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemTimeManual(args?: GetSystemTimeManualArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemTimeManualResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSystemTimeManual:getSystemTimeManual", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemTimeManual.
 */
export interface GetSystemTimeManualArgs {
    id?: string;
}

/**
 * A collection of values returned by getSystemTimeManual.
 */
export interface GetSystemTimeManualResult {
    readonly dst: string;
    readonly id: string;
    readonly tz: string;
}
export function getSystemTimeManualOutput(args?: GetSystemTimeManualOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemTimeManualResult> {
    return pulumi.output(args).apply((a: any) => getSystemTimeManual(a, opts))
}

/**
 * A collection of arguments for invoking getSystemTimeManual.
 */
export interface GetSystemTimeManualOutputArgs {
    id?: pulumi.Input<string>;
}
