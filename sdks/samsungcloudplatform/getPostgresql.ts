// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPostgresql(args: GetPostgresqlArgs, opts?: pulumi.InvokeOptions): Promise<GetPostgresqlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getPostgresql:getPostgresql", {
        "id": args.id,
        "postgresqlClusterId": args.postgresqlClusterId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPostgresql.
 */
export interface GetPostgresqlArgs {
    id?: string;
    postgresqlClusterId: string;
}

/**
 * A collection of values returned by getPostgresql.
 */
export interface GetPostgresqlResult {
    readonly auditEnabled: boolean;
    readonly backupConfigs: outputs.GetPostgresqlBackupConfig[];
    readonly blockId: string;
    readonly contracts: outputs.GetPostgresqlContract[];
    readonly createdBy: string;
    readonly createdDt: string;
    readonly databaseVersion: string;
    readonly id: string;
    readonly imageId: string;
    readonly maintenances: outputs.GetPostgresqlMaintenance[];
    readonly modifiedBy: string;
    readonly modifiedDt: string;
    readonly natIpAddress: string;
    readonly postgresqlClusterId: string;
    readonly postgresqlClusterName: string;
    readonly postgresqlClusterState: string;
    readonly postgresqlInitialConfigs: outputs.GetPostgresqlPostgresqlInitialConfig[];
    readonly postgresqlMasterClusterId: string;
    readonly postgresqlReplicaClusterIds: string[];
    readonly postgresqlServerGroups: outputs.GetPostgresqlPostgresqlServerGroup[];
    readonly projectId: string;
    readonly securityGroupIds: string[];
    readonly serviceZoneId: string;
    readonly subnetId: string;
    readonly timezone: string;
    readonly vpcId: string;
}
export function getPostgresqlOutput(args: GetPostgresqlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPostgresqlResult> {
    return pulumi.output(args).apply((a: any) => getPostgresql(a, opts))
}

/**
 * A collection of arguments for invoking getPostgresql.
 */
export interface GetPostgresqlOutputArgs {
    id?: pulumi.Input<string>;
    postgresqlClusterId: pulumi.Input<string>;
}
