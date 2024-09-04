// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagementCmeManagement(args?: GetManagementCmeManagementArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementCmeManagementResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementCmeManagement:getManagementCmeManagement", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementCmeManagement.
 */
export interface GetManagementCmeManagementArgs {
    id?: string;
}

/**
 * A collection of values returned by getManagementCmeManagement.
 */
export interface GetManagementCmeManagementResult {
    readonly domain: string;
    readonly host: string;
    readonly id: string;
    readonly name: string;
}
export function getManagementCmeManagementOutput(args?: GetManagementCmeManagementOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementCmeManagementResult> {
    return pulumi.output(args).apply((a: any) => getManagementCmeManagement(a, opts))
}

/**
 * A collection of arguments for invoking getManagementCmeManagement.
 */
export interface GetManagementCmeManagementOutputArgs {
    id?: pulumi.Input<string>;
}
