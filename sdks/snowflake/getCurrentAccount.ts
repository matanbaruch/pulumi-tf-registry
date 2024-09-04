// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCurrentAccount(args?: GetCurrentAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetCurrentAccountResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("snowflake:index/getCurrentAccount:getCurrentAccount", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCurrentAccount.
 */
export interface GetCurrentAccountArgs {
    id?: string;
}

/**
 * A collection of values returned by getCurrentAccount.
 */
export interface GetCurrentAccountResult {
    readonly account: string;
    readonly id: string;
    readonly region: string;
    readonly url: string;
}
export function getCurrentAccountOutput(args?: GetCurrentAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCurrentAccountResult> {
    return pulumi.output(args).apply((a: any) => getCurrentAccount(a, opts))
}

/**
 * A collection of arguments for invoking getCurrentAccount.
 */
export interface GetCurrentAccountOutputArgs {
    id?: pulumi.Input<string>;
}
