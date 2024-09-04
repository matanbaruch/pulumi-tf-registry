// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemNtp(args?: GetSystemNtpArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemNtpResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemNtp:getSystemNtp", {
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemNtp.
 */
export interface GetSystemNtpArgs {
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemNtp.
 */
export interface GetSystemNtpResult {
    readonly authentication: string;
    readonly id: string;
    readonly interfaces: outputs.GetSystemNtpInterface[];
    readonly key: string;
    readonly keyId: number;
    readonly keyType: string;
    readonly ntpservers: outputs.GetSystemNtpNtpserver[];
    readonly ntpsync: string;
    readonly serverMode: string;
    readonly sourceIp: string;
    readonly sourceIp6: string;
    readonly syncinterval: number;
    readonly type: string;
    readonly vdomparam?: string;
}
export function getSystemNtpOutput(args?: GetSystemNtpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemNtpResult> {
    return pulumi.output(args).apply((a: any) => getSystemNtp(a, opts))
}

/**
 * A collection of arguments for invoking getSystemNtp.
 */
export interface GetSystemNtpOutputArgs {
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
