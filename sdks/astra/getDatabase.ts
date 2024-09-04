// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDatabase(args: GetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("astra:index/getDatabase:getDatabase", {
        "databaseId": args.databaseId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabase.
 */
export interface GetDatabaseArgs {
    databaseId: string;
    id?: string;
}

/**
 * A collection of values returned by getDatabase.
 */
export interface GetDatabaseResult {
    readonly additionalKeyspaces: string[];
    readonly cloudProvider: string;
    readonly cqlshUrl: string;
    readonly dataEndpointUrl: string;
    readonly databaseId: string;
    readonly datacenters: {[key: string]: string};
    readonly dbType: string;
    readonly grafanaUrl: string;
    readonly graphqlUrl: string;
    readonly id: string;
    readonly keyspace: string;
    readonly name: string;
    readonly nodeCount: number;
    readonly organizationId: string;
    readonly ownerId: string;
    readonly regions: string[];
    readonly replicationFactor: number;
    readonly status: string;
    readonly totalStorage: number;
}
export function getDatabaseOutput(args: GetDatabaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseResult> {
    return pulumi.output(args).apply((a: any) => getDatabase(a, opts))
}

/**
 * A collection of arguments for invoking getDatabase.
 */
export interface GetDatabaseOutputArgs {
    databaseId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
