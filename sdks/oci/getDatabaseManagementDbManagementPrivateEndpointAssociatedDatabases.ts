// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases(args: GetDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases:getDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases", {
        "compartmentId": args.compartmentId,
        "dbManagementPrivateEndpointId": args.dbManagementPrivateEndpointId,
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.
 */
export interface GetDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesArgs {
    compartmentId: string;
    dbManagementPrivateEndpointId: string;
    filters?: inputs.GetDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter[];
    id?: string;
}

/**
 * A collection of values returned by getDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.
 */
export interface GetDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesResult {
    readonly associatedDatabaseCollections: outputs.GetDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesAssociatedDatabaseCollection[];
    readonly compartmentId: string;
    readonly dbManagementPrivateEndpointId: string;
    readonly filters?: outputs.GetDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilter[];
    readonly id: string;
}
export function getDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesOutput(args: GetDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseManagementDbManagementPrivateEndpointAssociatedDatabases.
 */
export interface GetDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesOutputArgs {
    compartmentId: pulumi.Input<string>;
    dbManagementPrivateEndpointId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatabaseManagementDbManagementPrivateEndpointAssociatedDatabasesFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
