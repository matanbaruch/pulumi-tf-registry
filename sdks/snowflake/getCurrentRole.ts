// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCurrentRole(args?: GetCurrentRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetCurrentRoleResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("snowflake:index/getCurrentRole:getCurrentRole", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCurrentRole.
 */
export interface GetCurrentRoleArgs {
    id?: string;
}

/**
 * A collection of values returned by getCurrentRole.
 */
export interface GetCurrentRoleResult {
    readonly id: string;
    readonly name: string;
}
export function getCurrentRoleOutput(args?: GetCurrentRoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCurrentRoleResult> {
    return pulumi.output(args).apply((a: any) => getCurrentRole(a, opts))
}

/**
 * A collection of arguments for invoking getCurrentRole.
 */
export interface GetCurrentRoleOutputArgs {
    id?: pulumi.Input<string>;
}
