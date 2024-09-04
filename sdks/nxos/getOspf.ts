// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOspf(args?: GetOspfArgs, opts?: pulumi.InvokeOptions): Promise<GetOspfResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nxos:index/getOspf:getOspf", {
        "device": args.device,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOspf.
 */
export interface GetOspfArgs {
    device?: string;
}

/**
 * A collection of values returned by getOspf.
 */
export interface GetOspfResult {
    readonly adminState: string;
    readonly device?: string;
    readonly id: string;
}
export function getOspfOutput(args?: GetOspfOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOspfResult> {
    return pulumi.output(args).apply((a: any) => getOspf(a, opts))
}

/**
 * A collection of arguments for invoking getOspf.
 */
export interface GetOspfOutputArgs {
    device?: pulumi.Input<string>;
}
