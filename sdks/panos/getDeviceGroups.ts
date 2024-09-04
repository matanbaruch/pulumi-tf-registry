// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDeviceGroups(args?: GetDeviceGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getDeviceGroups:getDeviceGroups", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDeviceGroups.
 */
export interface GetDeviceGroupsArgs {
    id?: string;
}

/**
 * A collection of values returned by getDeviceGroups.
 */
export interface GetDeviceGroupsResult {
    readonly id: string;
    readonly listings: string[];
    readonly total: number;
}
export function getDeviceGroupsOutput(args?: GetDeviceGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeviceGroupsResult> {
    return pulumi.output(args).apply((a: any) => getDeviceGroups(a, opts))
}

/**
 * A collection of arguments for invoking getDeviceGroups.
 */
export interface GetDeviceGroupsOutputArgs {
    id?: pulumi.Input<string>;
}
