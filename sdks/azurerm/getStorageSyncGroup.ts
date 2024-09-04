// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStorageSyncGroup(args: GetStorageSyncGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageSyncGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getStorageSyncGroup:getStorageSyncGroup", {
        "id": args.id,
        "name": args.name,
        "storageSyncId": args.storageSyncId,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageSyncGroup.
 */
export interface GetStorageSyncGroupArgs {
    id?: string;
    name: string;
    storageSyncId: string;
    timeouts?: inputs.GetStorageSyncGroupTimeouts;
}

/**
 * A collection of values returned by getStorageSyncGroup.
 */
export interface GetStorageSyncGroupResult {
    readonly id: string;
    readonly name: string;
    readonly storageSyncId: string;
    readonly timeouts?: outputs.GetStorageSyncGroupTimeouts;
}
export function getStorageSyncGroupOutput(args: GetStorageSyncGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageSyncGroupResult> {
    return pulumi.output(args).apply((a: any) => getStorageSyncGroup(a, opts))
}

/**
 * A collection of arguments for invoking getStorageSyncGroup.
 */
export interface GetStorageSyncGroupOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    storageSyncId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetStorageSyncGroupTimeoutsArgs>;
}
