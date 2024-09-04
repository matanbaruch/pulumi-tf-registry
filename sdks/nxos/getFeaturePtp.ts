// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFeaturePtp(args?: GetFeaturePtpArgs, opts?: pulumi.InvokeOptions): Promise<GetFeaturePtpResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nxos:index/getFeaturePtp:getFeaturePtp", {
        "device": args.device,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFeaturePtp.
 */
export interface GetFeaturePtpArgs {
    device?: string;
}

/**
 * A collection of values returned by getFeaturePtp.
 */
export interface GetFeaturePtpResult {
    readonly adminState: string;
    readonly device?: string;
    readonly id: string;
}
export function getFeaturePtpOutput(args?: GetFeaturePtpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFeaturePtpResult> {
    return pulumi.output(args).apply((a: any) => getFeaturePtp(a, opts))
}

/**
 * A collection of arguments for invoking getFeaturePtp.
 */
export interface GetFeaturePtpOutputArgs {
    device?: pulumi.Input<string>;
}
