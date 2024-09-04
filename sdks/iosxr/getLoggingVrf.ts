// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLoggingVrf(args: GetLoggingVrfArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggingVrfResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getLoggingVrf:getLoggingVrf", {
        "device": args.device,
        "vrfName": args.vrfName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoggingVrf.
 */
export interface GetLoggingVrfArgs {
    device?: string;
    vrfName: string;
}

/**
 * A collection of values returned by getLoggingVrf.
 */
export interface GetLoggingVrfResult {
    readonly device?: string;
    readonly hostIpv4Addresses: outputs.GetLoggingVrfHostIpv4Address[];
    readonly hostIpv6Addresses: outputs.GetLoggingVrfHostIpv6Address[];
    readonly id: string;
    readonly vrfName: string;
}
export function getLoggingVrfOutput(args: GetLoggingVrfOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoggingVrfResult> {
    return pulumi.output(args).apply((a: any) => getLoggingVrf(a, opts))
}

/**
 * A collection of arguments for invoking getLoggingVrf.
 */
export interface GetLoggingVrfOutputArgs {
    device?: pulumi.Input<string>;
    vrfName: pulumi.Input<string>;
}
