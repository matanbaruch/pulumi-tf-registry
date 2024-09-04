// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDatastoreStats(args: GetDatastoreStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetDatastoreStatsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vsphere:index/getDatastoreStats:getDatastoreStats", {
        "capacity": args.capacity,
        "datacenterId": args.datacenterId,
        "freeSpace": args.freeSpace,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatastoreStats.
 */
export interface GetDatastoreStatsArgs {
    capacity?: {[key: string]: string};
    datacenterId: string;
    freeSpace?: {[key: string]: string};
    id?: string;
}

/**
 * A collection of values returned by getDatastoreStats.
 */
export interface GetDatastoreStatsResult {
    readonly capacity?: {[key: string]: string};
    readonly datacenterId: string;
    readonly freeSpace?: {[key: string]: string};
    readonly id: string;
}
export function getDatastoreStatsOutput(args: GetDatastoreStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatastoreStatsResult> {
    return pulumi.output(args).apply((a: any) => getDatastoreStats(a, opts))
}

/**
 * A collection of arguments for invoking getDatastoreStats.
 */
export interface GetDatastoreStatsOutputArgs {
    capacity?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    datacenterId: pulumi.Input<string>;
    freeSpace?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    id?: pulumi.Input<string>;
}
