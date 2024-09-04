// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseExadbVmClusterUpdateHistoryEntries(args: GetDatabaseExadbVmClusterUpdateHistoryEntriesArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseExadbVmClusterUpdateHistoryEntriesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseExadbVmClusterUpdateHistoryEntries:getDatabaseExadbVmClusterUpdateHistoryEntries", {
        "exadbVmClusterId": args.exadbVmClusterId,
        "filters": args.filters,
        "id": args.id,
        "updateType": args.updateType,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseExadbVmClusterUpdateHistoryEntries.
 */
export interface GetDatabaseExadbVmClusterUpdateHistoryEntriesArgs {
    exadbVmClusterId: string;
    filters?: inputs.GetDatabaseExadbVmClusterUpdateHistoryEntriesFilter[];
    id?: string;
    updateType?: string;
}

/**
 * A collection of values returned by getDatabaseExadbVmClusterUpdateHistoryEntries.
 */
export interface GetDatabaseExadbVmClusterUpdateHistoryEntriesResult {
    readonly exadbVmClusterId: string;
    readonly exadbVmClusterUpdateHistoryEntries: outputs.GetDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntry[];
    readonly filters?: outputs.GetDatabaseExadbVmClusterUpdateHistoryEntriesFilter[];
    readonly id: string;
    readonly updateType?: string;
}
export function getDatabaseExadbVmClusterUpdateHistoryEntriesOutput(args: GetDatabaseExadbVmClusterUpdateHistoryEntriesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseExadbVmClusterUpdateHistoryEntriesResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseExadbVmClusterUpdateHistoryEntries(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseExadbVmClusterUpdateHistoryEntries.
 */
export interface GetDatabaseExadbVmClusterUpdateHistoryEntriesOutputArgs {
    exadbVmClusterId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatabaseExadbVmClusterUpdateHistoryEntriesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    updateType?: pulumi.Input<string>;
}
