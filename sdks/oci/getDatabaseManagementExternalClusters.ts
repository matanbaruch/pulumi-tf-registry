// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseManagementExternalClusters(args?: GetDatabaseManagementExternalClustersArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseManagementExternalClustersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseManagementExternalClusters:getDatabaseManagementExternalClusters", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "externalDbSystemId": args.externalDbSystemId,
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseManagementExternalClusters.
 */
export interface GetDatabaseManagementExternalClustersArgs {
    compartmentId?: string;
    displayName?: string;
    externalDbSystemId?: string;
    filters?: inputs.GetDatabaseManagementExternalClustersFilter[];
    id?: string;
}

/**
 * A collection of values returned by getDatabaseManagementExternalClusters.
 */
export interface GetDatabaseManagementExternalClustersResult {
    readonly compartmentId?: string;
    readonly displayName?: string;
    readonly externalClusterCollections: outputs.GetDatabaseManagementExternalClustersExternalClusterCollection[];
    readonly externalDbSystemId?: string;
    readonly filters?: outputs.GetDatabaseManagementExternalClustersFilter[];
    readonly id: string;
}
export function getDatabaseManagementExternalClustersOutput(args?: GetDatabaseManagementExternalClustersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseManagementExternalClustersResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseManagementExternalClusters(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseManagementExternalClusters.
 */
export interface GetDatabaseManagementExternalClustersOutputArgs {
    compartmentId?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    externalDbSystemId?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatabaseManagementExternalClustersFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
