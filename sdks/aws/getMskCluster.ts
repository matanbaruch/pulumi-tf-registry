// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMskCluster(args: GetMskClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetMskClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getMskCluster:getMskCluster", {
        "clusterName": args.clusterName,
        "id": args.id,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMskCluster.
 */
export interface GetMskClusterArgs {
    clusterName: string;
    id?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getMskCluster.
 */
export interface GetMskClusterResult {
    readonly arn: string;
    readonly bootstrapBrokers: string;
    readonly bootstrapBrokersPublicSaslIam: string;
    readonly bootstrapBrokersPublicSaslScram: string;
    readonly bootstrapBrokersPublicTls: string;
    readonly bootstrapBrokersSaslIam: string;
    readonly bootstrapBrokersSaslScram: string;
    readonly bootstrapBrokersTls: string;
    readonly brokerNodeGroupInfos: outputs.GetMskClusterBrokerNodeGroupInfo[];
    readonly clusterName: string;
    readonly clusterUuid: string;
    readonly id: string;
    readonly kafkaVersion: string;
    readonly numberOfBrokerNodes: number;
    readonly tags: {[key: string]: string};
    readonly zookeeperConnectString: string;
    readonly zookeeperConnectStringTls: string;
}
export function getMskClusterOutput(args: GetMskClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMskClusterResult> {
    return pulumi.output(args).apply((a: any) => getMskCluster(a, opts))
}

/**
 * A collection of arguments for invoking getMskCluster.
 */
export interface GetMskClusterOutputArgs {
    clusterName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
