// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemFm(args?: GetSystemFmArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemFmResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiswitch:index/getSystemFm:getSystemFm", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemFm.
 */
export interface GetSystemFmArgs {
    id?: string;
}

/**
 * A collection of values returned by getSystemFm.
 */
export interface GetSystemFmResult {
    readonly autoBackup: string;
    readonly fswid: string;
    readonly id: string;
    readonly ip: string;
    readonly ipsec: string;
    readonly scheduledConfigRestore: string;
    readonly status: string;
    readonly vdom: string;
}
export function getSystemFmOutput(args?: GetSystemFmOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemFmResult> {
    return pulumi.output(args).apply((a: any) => getSystemFm(a, opts))
}

/**
 * A collection of arguments for invoking getSystemFm.
 */
export interface GetSystemFmOutputArgs {
    id?: pulumi.Input<string>;
}
