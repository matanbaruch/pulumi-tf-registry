// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemHealthCheckScript(args: GetSystemHealthCheckScriptArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemHealthCheckScriptResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSystemHealthCheckScript:getSystemHealthCheckScript", {
        "id": args.id,
        "mkey": args.mkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemHealthCheckScript.
 */
export interface GetSystemHealthCheckScriptArgs {
    id?: string;
    mkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getSystemHealthCheckScript.
 */
export interface GetSystemHealthCheckScriptResult {
    readonly file: string;
    readonly id: string;
    readonly mkey: string;
    readonly vdom?: string;
}
export function getSystemHealthCheckScriptOutput(args: GetSystemHealthCheckScriptOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemHealthCheckScriptResult> {
    return pulumi.output(args).apply((a: any) => getSystemHealthCheckScript(a, opts))
}

/**
 * A collection of arguments for invoking getSystemHealthCheckScript.
 */
export interface GetSystemHealthCheckScriptOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
