// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseExadbVmClusterUpdates(args: GetDatabaseExadbVmClusterUpdatesArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseExadbVmClusterUpdatesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseExadbVmClusterUpdates:getDatabaseExadbVmClusterUpdates", {
        "exadbVmClusterId": args.exadbVmClusterId,
        "filters": args.filters,
        "id": args.id,
        "updateType": args.updateType,
        "version": args.version,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseExadbVmClusterUpdates.
 */
export interface GetDatabaseExadbVmClusterUpdatesArgs {
    exadbVmClusterId: string;
    filters?: inputs.GetDatabaseExadbVmClusterUpdatesFilter[];
    id?: string;
    updateType?: string;
    version?: string;
}

/**
 * A collection of values returned by getDatabaseExadbVmClusterUpdates.
 */
export interface GetDatabaseExadbVmClusterUpdatesResult {
    readonly exadbVmClusterId: string;
    readonly exadbVmClusterUpdates: outputs.GetDatabaseExadbVmClusterUpdatesExadbVmClusterUpdate[];
    readonly filters?: outputs.GetDatabaseExadbVmClusterUpdatesFilter[];
    readonly id: string;
    readonly updateType?: string;
    readonly version?: string;
}
export function getDatabaseExadbVmClusterUpdatesOutput(args: GetDatabaseExadbVmClusterUpdatesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseExadbVmClusterUpdatesResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseExadbVmClusterUpdates(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseExadbVmClusterUpdates.
 */
export interface GetDatabaseExadbVmClusterUpdatesOutputArgs {
    exadbVmClusterId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatabaseExadbVmClusterUpdatesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    updateType?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}
