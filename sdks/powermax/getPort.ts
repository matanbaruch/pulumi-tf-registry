// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPort(args?: GetPortArgs, opts?: pulumi.InvokeOptions): Promise<GetPortResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("powermax:index/getPort:getPort", {
        "filter": args.filter,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPort.
 */
export interface GetPortArgs {
    filter?: inputs.GetPortFilter;
    timeouts?: inputs.GetPortTimeouts;
}

/**
 * A collection of values returned by getPort.
 */
export interface GetPortResult {
    readonly filter?: outputs.GetPortFilter;
    readonly id: string;
    readonly portDetails: outputs.GetPortPortDetail[];
    readonly timeouts?: outputs.GetPortTimeouts;
}
export function getPortOutput(args?: GetPortOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPortResult> {
    return pulumi.output(args).apply((a: any) => getPort(a, opts))
}

/**
 * A collection of arguments for invoking getPort.
 */
export interface GetPortOutputArgs {
    filter?: pulumi.Input<inputs.GetPortFilterArgs>;
    timeouts?: pulumi.Input<inputs.GetPortTimeoutsArgs>;
}
