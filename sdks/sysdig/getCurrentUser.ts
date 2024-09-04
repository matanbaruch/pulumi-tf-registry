// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCurrentUser(args?: GetCurrentUserArgs, opts?: pulumi.InvokeOptions): Promise<GetCurrentUserResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sysdig:index/getCurrentUser:getCurrentUser", {
        "id": args.id,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCurrentUser.
 */
export interface GetCurrentUserArgs {
    id?: string;
    timeouts?: inputs.GetCurrentUserTimeouts;
}

/**
 * A collection of values returned by getCurrentUser.
 */
export interface GetCurrentUserResult {
    readonly email: string;
    readonly id: string;
    readonly lastName: string;
    readonly name: string;
    readonly systemRole: string;
    readonly timeouts?: outputs.GetCurrentUserTimeouts;
}
export function getCurrentUserOutput(args?: GetCurrentUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCurrentUserResult> {
    return pulumi.output(args).apply((a: any) => getCurrentUser(a, opts))
}

/**
 * A collection of arguments for invoking getCurrentUser.
 */
export interface GetCurrentUserOutputArgs {
    id?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetCurrentUserTimeoutsArgs>;
}
