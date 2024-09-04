// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemSmsserverlist(args?: GetSystemSmsserverlistArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemSmsserverlistResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemSmsserverlist:getSystemSmsserverlist", {
        "filter": args.filter,
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemSmsserverlist.
 */
export interface GetSystemSmsserverlistArgs {
    filter?: string;
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemSmsserverlist.
 */
export interface GetSystemSmsserverlistResult {
    readonly filter?: string;
    readonly id: string;
    readonly namelists: string[];
    readonly vdomparam?: string;
}
export function getSystemSmsserverlistOutput(args?: GetSystemSmsserverlistOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemSmsserverlistResult> {
    return pulumi.output(args).apply((a: any) => getSystemSmsserverlist(a, opts))
}

/**
 * A collection of arguments for invoking getSystemSmsserverlist.
 */
export interface GetSystemSmsserverlistOutputArgs {
    filter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
