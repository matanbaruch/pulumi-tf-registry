// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemFortisandbox(args?: GetSystemFortisandboxArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemFortisandboxResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemFortisandbox:getSystemFortisandbox", {
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemFortisandbox.
 */
export interface GetSystemFortisandboxArgs {
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemFortisandbox.
 */
export interface GetSystemFortisandboxResult {
    readonly email: string;
    readonly encAlgorithm: string;
    readonly forticloud: string;
    readonly id: string;
    readonly inlineScan: string;
    readonly interface: string;
    readonly interfaceSelectMethod: string;
    readonly server: string;
    readonly sourceIp: string;
    readonly sslMinProtoVersion: string;
    readonly status: string;
    readonly vdomparam?: string;
}
export function getSystemFortisandboxOutput(args?: GetSystemFortisandboxOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemFortisandboxResult> {
    return pulumi.output(args).apply((a: any) => getSystemFortisandbox(a, opts))
}

/**
 * A collection of arguments for invoking getSystemFortisandbox.
 */
export interface GetSystemFortisandboxOutputArgs {
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
