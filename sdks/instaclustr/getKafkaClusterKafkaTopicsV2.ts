// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKafkaClusterKafkaTopicsV2(args: GetKafkaClusterKafkaTopicsV2Args, opts?: pulumi.InvokeOptions): Promise<GetKafkaClusterKafkaTopicsV2Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("instaclustr:index/getKafkaClusterKafkaTopicsV2:getKafkaClusterKafkaTopicsV2", {
        "clusterId": args.clusterId,
        "filters": args.filters,
        "id": args.id,
        "kafkaClusterId": args.kafkaClusterId,
        "topicNames": args.topicNames,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKafkaClusterKafkaTopicsV2.
 */
export interface GetKafkaClusterKafkaTopicsV2Args {
    clusterId?: string;
    filters?: inputs.GetKafkaClusterKafkaTopicsV2Filter[];
    id?: string;
    kafkaClusterId: string;
    topicNames?: string[];
}

/**
 * A collection of values returned by getKafkaClusterKafkaTopicsV2.
 */
export interface GetKafkaClusterKafkaTopicsV2Result {
    readonly clusterId: string;
    readonly filters?: outputs.GetKafkaClusterKafkaTopicsV2Filter[];
    readonly id: string;
    readonly kafkaClusterId: string;
    readonly topicNames: string[];
}
export function getKafkaClusterKafkaTopicsV2Output(args: GetKafkaClusterKafkaTopicsV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKafkaClusterKafkaTopicsV2Result> {
    return pulumi.output(args).apply((a: any) => getKafkaClusterKafkaTopicsV2(a, opts))
}

/**
 * A collection of arguments for invoking getKafkaClusterKafkaTopicsV2.
 */
export interface GetKafkaClusterKafkaTopicsV2OutputArgs {
    clusterId?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetKafkaClusterKafkaTopicsV2FilterArgs>[]>;
    id?: pulumi.Input<string>;
    kafkaClusterId: pulumi.Input<string>;
    topicNames?: pulumi.Input<pulumi.Input<string>[]>;
}
