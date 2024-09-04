// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseToolsDatabaseToolsConnections(args: GetDatabaseToolsDatabaseToolsConnectionsArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseToolsDatabaseToolsConnectionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseToolsDatabaseToolsConnections:getDatabaseToolsDatabaseToolsConnections", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "relatedResourceIdentifier": args.relatedResourceIdentifier,
        "runtimeSupports": args.runtimeSupports,
        "state": args.state,
        "types": args.types,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseToolsDatabaseToolsConnections.
 */
export interface GetDatabaseToolsDatabaseToolsConnectionsArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetDatabaseToolsDatabaseToolsConnectionsFilter[];
    id?: string;
    relatedResourceIdentifier?: string;
    runtimeSupports?: string[];
    state?: string;
    types?: string[];
}

/**
 * A collection of values returned by getDatabaseToolsDatabaseToolsConnections.
 */
export interface GetDatabaseToolsDatabaseToolsConnectionsResult {
    readonly compartmentId: string;
    readonly databaseToolsConnectionCollections: outputs.GetDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection[];
    readonly displayName?: string;
    readonly filters?: outputs.GetDatabaseToolsDatabaseToolsConnectionsFilter[];
    readonly id: string;
    readonly relatedResourceIdentifier?: string;
    readonly runtimeSupports?: string[];
    readonly state?: string;
    readonly types?: string[];
}
export function getDatabaseToolsDatabaseToolsConnectionsOutput(args: GetDatabaseToolsDatabaseToolsConnectionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseToolsDatabaseToolsConnectionsResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseToolsDatabaseToolsConnections(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseToolsDatabaseToolsConnections.
 */
export interface GetDatabaseToolsDatabaseToolsConnectionsOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatabaseToolsDatabaseToolsConnectionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    relatedResourceIdentifier?: pulumi.Input<string>;
    runtimeSupports?: pulumi.Input<pulumi.Input<string>[]>;
    state?: pulumi.Input<string>;
    types?: pulumi.Input<pulumi.Input<string>[]>;
}
