// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabase(args?: GetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vultr:index/getDatabase:getDatabase", {
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabase.
 */
export interface GetDatabaseArgs {
    filters?: inputs.GetDatabaseFilter[];
    id?: string;
}

/**
 * A collection of values returned by getDatabase.
 */
export interface GetDatabaseResult {
    readonly clusterTimeZone: string;
    readonly databaseEngine: string;
    readonly databaseEngineVersion: string;
    readonly dateCreated: string;
    readonly dbname: string;
    readonly ferretdbCredentials: {[key: string]: string};
    readonly filters?: outputs.GetDatabaseFilter[];
    readonly host: string;
    readonly id: string;
    readonly label: string;
    readonly latestBackup: string;
    readonly maintenanceDow: string;
    readonly maintenanceTime: string;
    readonly mysqlLongQueryTime: number;
    readonly mysqlRequirePrimaryKey: boolean;
    readonly mysqlSlowQueryLog: boolean;
    readonly mysqlSqlModes: string[];
    readonly password: string;
    readonly plan: string;
    readonly planDisk: number;
    readonly planRam: number;
    readonly planReplicas: number;
    readonly planVcpus: number;
    readonly port: string;
    readonly publicHost: string;
    readonly readReplicas: outputs.GetDatabaseReadReplica[];
    readonly redisEvictionPolicy: string;
    readonly region: string;
    readonly status: string;
    readonly tag: string;
    readonly trustedIps: string[];
    readonly user: string;
    readonly vpcId: string;
}
export function getDatabaseOutput(args?: GetDatabaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseResult> {
    return pulumi.output(args).apply((a: any) => getDatabase(a, opts))
}

/**
 * A collection of arguments for invoking getDatabase.
 */
export interface GetDatabaseOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatabaseFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
