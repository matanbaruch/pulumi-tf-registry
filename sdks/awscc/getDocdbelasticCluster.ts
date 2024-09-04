// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDocdbelasticCluster(args: GetDocdbelasticClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetDocdbelasticClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getDocdbelasticCluster:getDocdbelasticCluster", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDocdbelasticCluster.
 */
export interface GetDocdbelasticClusterArgs {
    id: string;
}

/**
 * A collection of values returned by getDocdbelasticCluster.
 */
export interface GetDocdbelasticClusterResult {
    readonly adminUserName: string;
    readonly adminUserPassword: string;
    readonly authType: string;
    readonly backupRetentionPeriod: number;
    readonly clusterArn: string;
    readonly clusterEndpoint: string;
    readonly clusterName: string;
    readonly id: string;
    readonly kmsKeyId: string;
    readonly preferredBackupWindow: string;
    readonly preferredMaintenanceWindow: string;
    readonly shardCapacity: number;
    readonly shardCount: number;
    readonly shardInstanceCount: number;
    readonly subnetIds: string[];
    readonly tags: outputs.GetDocdbelasticClusterTag[];
    readonly vpcSecurityGroupIds: string[];
}
export function getDocdbelasticClusterOutput(args: GetDocdbelasticClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDocdbelasticClusterResult> {
    return pulumi.output(args).apply((a: any) => getDocdbelasticCluster(a, opts))
}

/**
 * A collection of arguments for invoking getDocdbelasticCluster.
 */
export interface GetDocdbelasticClusterOutputArgs {
    id: pulumi.Input<string>;
}
