// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemConsole(args?: GetSystemConsoleArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemConsoleResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemConsole:getSystemConsole", {
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemConsole.
 */
export interface GetSystemConsoleArgs {
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemConsole.
 */
export interface GetSystemConsoleResult {
    readonly baudrate: string;
    readonly fortiexplorer: string;
    readonly id: string;
    readonly login: string;
    readonly mode: string;
    readonly output: string;
    readonly vdomparam?: string;
}
export function getSystemConsoleOutput(args?: GetSystemConsoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemConsoleResult> {
    return pulumi.output(args).apply((a: any) => getSystemConsole(a, opts))
}

/**
 * A collection of arguments for invoking getSystemConsole.
 */
export interface GetSystemConsoleOutputArgs {
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
