// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getQueuingQosPolicySystemOut(args?: GetQueuingQosPolicySystemOutArgs, opts?: pulumi.InvokeOptions): Promise<GetQueuingQosPolicySystemOutResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nxos:index/getQueuingQosPolicySystemOut:getQueuingQosPolicySystemOut", {
        "device": args.device,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getQueuingQosPolicySystemOut.
 */
export interface GetQueuingQosPolicySystemOutArgs {
    device?: string;
}

/**
 * A collection of values returned by getQueuingQosPolicySystemOut.
 */
export interface GetQueuingQosPolicySystemOutResult {
    readonly device?: string;
    readonly id: string;
}
export function getQueuingQosPolicySystemOutOutput(args?: GetQueuingQosPolicySystemOutOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetQueuingQosPolicySystemOutResult> {
    return pulumi.output(args).apply((a: any) => getQueuingQosPolicySystemOut(a, opts))
}

/**
 * A collection of arguments for invoking getQueuingQosPolicySystemOut.
 */
export interface GetQueuingQosPolicySystemOutOutputArgs {
    device?: pulumi.Input<string>;
}
