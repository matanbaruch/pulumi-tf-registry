// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemPasswordpolicyguestadmin(args?: GetSystemPasswordpolicyguestadminArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemPasswordpolicyguestadminResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemPasswordpolicyguestadmin:getSystemPasswordpolicyguestadmin", {
        "id": args.id,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemPasswordpolicyguestadmin.
 */
export interface GetSystemPasswordpolicyguestadminArgs {
    id?: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemPasswordpolicyguestadmin.
 */
export interface GetSystemPasswordpolicyguestadminResult {
    readonly applyTo: string;
    readonly change4Characters: string;
    readonly expireDay: number;
    readonly expireStatus: string;
    readonly id: string;
    readonly minChangeCharacters: number;
    readonly minLowerCaseLetter: number;
    readonly minNonAlphanumeric: number;
    readonly minNumber: number;
    readonly minUpperCaseLetter: number;
    readonly minimumLength: number;
    readonly reusePassword: string;
    readonly status: string;
    readonly vdomparam?: string;
}
export function getSystemPasswordpolicyguestadminOutput(args?: GetSystemPasswordpolicyguestadminOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemPasswordpolicyguestadminResult> {
    return pulumi.output(args).apply((a: any) => getSystemPasswordpolicyguestadmin(a, opts))
}

/**
 * A collection of arguments for invoking getSystemPasswordpolicyguestadmin.
 */
export interface GetSystemPasswordpolicyguestadminOutputArgs {
    id?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
