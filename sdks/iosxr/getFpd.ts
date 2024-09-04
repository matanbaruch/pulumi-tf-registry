// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFpd(args?: GetFpdArgs, opts?: pulumi.InvokeOptions): Promise<GetFpdResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxr:index/getFpd:getFpd", {
        "device": args.device,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFpd.
 */
export interface GetFpdArgs {
    device?: string;
}

/**
 * A collection of values returned by getFpd.
 */
export interface GetFpdResult {
    readonly autoReloadDisable: boolean;
    readonly autoReloadEnable: boolean;
    readonly autoUpgradeDisable: boolean;
    readonly autoUpgradeEnable: boolean;
    readonly device?: string;
    readonly id: string;
}
export function getFpdOutput(args?: GetFpdOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFpdResult> {
    return pulumi.output(args).apply((a: any) => getFpd(a, opts))
}

/**
 * A collection of arguments for invoking getFpd.
 */
export interface GetFpdOutputArgs {
    device?: pulumi.Input<string>;
}
