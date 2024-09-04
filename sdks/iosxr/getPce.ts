// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPce(args?: GetPceArgs, opts?: pulumi.InvokeOptions): Promise<GetPceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getPce:getPce", {
        "device": args.device,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPce.
 */
export interface GetPceArgs {
    device?: string;
}

/**
 * A collection of values returned by getPce.
 */
export interface GetPceResult {
    readonly addressIpv4: string;
    readonly addressIpv6: string;
    readonly apiAuthenticationDigest: boolean;
    readonly apiSiblingIpv4: string;
    readonly apiUsers: outputs.GetPceApiUser[];
    readonly device?: string;
    readonly id: string;
    readonly peerFilterIpv4AccessList: string;
    readonly stateSyncIpv4s: outputs.GetPceStateSyncIpv4[];
}
export function getPceOutput(args?: GetPceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPceResult> {
    return pulumi.output(args).apply((a: any) => getPce(a, opts))
}

/**
 * A collection of arguments for invoking getPce.
 */
export interface GetPceOutputArgs {
    device?: pulumi.Input<string>;
}
