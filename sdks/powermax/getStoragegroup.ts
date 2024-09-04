// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStoragegroup(args?: GetStoragegroupArgs, opts?: pulumi.InvokeOptions): Promise<GetStoragegroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("powermax:index/getStoragegroup:getStoragegroup", {
        "filter": args.filter,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStoragegroup.
 */
export interface GetStoragegroupArgs {
    filter?: inputs.GetStoragegroupFilter;
    timeouts?: inputs.GetStoragegroupTimeouts;
}

/**
 * A collection of values returned by getStoragegroup.
 */
export interface GetStoragegroupResult {
    readonly filter?: outputs.GetStoragegroupFilter;
    readonly id: string;
    readonly storageGroups: outputs.GetStoragegroupStorageGroup[];
    readonly timeouts?: outputs.GetStoragegroupTimeouts;
}
export function getStoragegroupOutput(args?: GetStoragegroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStoragegroupResult> {
    return pulumi.output(args).apply((a: any) => getStoragegroup(a, opts))
}

/**
 * A collection of arguments for invoking getStoragegroup.
 */
export interface GetStoragegroupOutputArgs {
    filter?: pulumi.Input<inputs.GetStoragegroupFilterArgs>;
    timeouts?: pulumi.Input<inputs.GetStoragegroupTimeoutsArgs>;
}
