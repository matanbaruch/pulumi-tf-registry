// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface CollectionTimeouts {
    /**
     * Timeout defaults to 5 mins. Accepts a string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
     */
    create?: string;
    /**
     * Timeout defaults to 5 mins. Accepts a string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
     */
    delete?: string;
}

export interface GetCollectionsCollection {
    /**
     * The dimension of the vectors stored in each record held in the collection.
     */
    dimension: number;
    /**
     * The environment where the collection is hosted.
     */
    environment: string;
    /**
     * The name of the collection.
     */
    name: string;
    /**
     * The size of the collection in bytes.
     */
    size: number;
    /**
     * The status of the collection.
     */
    status: string;
}

export interface GetIndexSpec {
    /**
     * Configuration needed to deploy a pod-based index.
     */
    pod: outputs.GetIndexSpecPod;
    /**
     * Configuration needed to deploy a serverless index.
     */
    serverless: outputs.GetIndexSpecServerless;
}

export interface GetIndexSpecPod {
    /**
     * The environment where the index is hosted.
     */
    environment: string;
    /**
     * Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed. These configurations are only valid for use with pod-based indexes.
     */
    metadataConfig: outputs.GetIndexSpecPodMetadataConfig;
    /**
     * The type of pod to use. One of s1, p1, or p2 appended with . and one of x1, x2, x4, or x8.
     */
    podType: string;
    /**
     * The number of pods to be used in the index. This should be equal to shards x replicas.'
     */
    pods: number;
    /**
     * The number of replicas. Replicas duplicate your index. They provide higher availability and throughput. Replicas can be scaled up or down as your needs change.
     */
    replicas: number;
    /**
     * The number of shards. Shards split your data across multiple pods so you can fit more data into an index.
     */
    shards: number;
    /**
     * The name of the collection to create an index from.
     */
    sourceCollection: string;
}

export interface GetIndexSpecPodMetadataConfig {
    /**
     * The indexed fields.
     */
    indexeds: string[];
}

export interface GetIndexSpecServerless {
    /**
     * Ready.
     */
    cloud: string;
    /**
     * Initializing InitializationFailed ScalingUp ScalingDown ScalingUpPodSize ScalingDownPodSize Upgrading Terminating Ready
     */
    region: string;
}

export interface GetIndexStatus {
    /**
     * Ready.
     */
    ready: boolean;
    /**
     * Initializing InitializationFailed ScalingUp ScalingDown ScalingUpPodSize ScalingDownPodSize Upgrading Terminating Ready
     */
    state: string;
}

export interface GetIndexesIndex {
    /**
     * Index dimension
     */
    dimension: number;
    /**
     * The URL address where the index is hosted.
     */
    host: string;
    /**
     * Index metric
     */
    metric: string;
    /**
     * Index name
     */
    name: string;
    /**
     * Spec
     */
    spec: outputs.GetIndexesIndexSpec;
    /**
     * Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed. To specify metadata fields to index, provide an array of the following form: [example_metadata_field]
     */
    status: outputs.GetIndexesIndexStatus;
}

export interface GetIndexesIndexSpec {
    /**
     * Configuration needed to deploy a pod-based index.
     */
    pod: outputs.GetIndexesIndexSpecPod;
    /**
     * Configuration needed to deploy a serverless index.
     */
    serverless: outputs.GetIndexesIndexSpecServerless;
}

export interface GetIndexesIndexSpecPod {
    /**
     * The environment where the index is hosted.
     */
    environment: string;
    /**
     * Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed. These configurations are only valid for use with pod-based indexes.
     */
    metadataConfig: outputs.GetIndexesIndexSpecPodMetadataConfig;
    /**
     * The type of pod to use. One of s1, p1, or p2 appended with . and one of x1, x2, x4, or x8.
     */
    podType: string;
    /**
     * The number of pods to be used in the index. This should be equal to shards x replicas.'
     */
    pods: number;
    /**
     * The number of replicas. Replicas duplicate your index. They provide higher availability and throughput. Replicas can be scaled up or down as your needs change.
     */
    replicas: number;
    /**
     * The number of shards. Shards split your data across multiple pods so you can fit more data into an index.
     */
    shards: number;
    /**
     * The name of the collection to create an index from.
     */
    sourceCollection: string;
}

export interface GetIndexesIndexSpecPodMetadataConfig {
    /**
     * The indexed fields.
     */
    indexeds: string[];
}

export interface GetIndexesIndexSpecServerless {
    /**
     * Ready.
     */
    cloud: string;
    /**
     * Initializing InitializationFailed ScalingUp ScalingDown ScalingUpPodSize ScalingDownPodSize Upgrading Terminating Ready
     */
    region: string;
}

export interface GetIndexesIndexStatus {
    /**
     * Ready.
     */
    ready: boolean;
    /**
     * Initializing InitializationFailed ScalingUp ScalingDown ScalingUpPodSize ScalingDownPodSize Upgrading Terminating Ready
     */
    state: string;
}

export interface IndexSpec {
    /**
     * Configuration needed to deploy a pod-based index.
     */
    pod?: outputs.IndexSpecPod;
    /**
     * Configuration needed to deploy a serverless index.
     */
    serverless?: outputs.IndexSpecServerless;
}

export interface IndexSpecPod {
    /**
     * The environment where the index is hosted.
     */
    environment: string;
    /**
     * Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed. These configurations are only valid for use with pod-based indexes.
     */
    metadataConfig: outputs.IndexSpecPodMetadataConfig;
    /**
     * The type of pod to use. One of s1, p1, or p2 appended with . and one of x1, x2, x4, or x8.
     */
    podType: string;
    /**
     * The number of pods to be used in the index. This should be equal to shards x replicas.'
     */
    pods: number;
    /**
     * The number of replicas. Replicas duplicate your index. They provide higher availability and throughput. Replicas can be scaled up or down as your needs change.
     */
    replicas: number;
    /**
     * The number of shards. Shards split your data across multiple pods so you can fit more data into an index.
     */
    shards: number;
    /**
     * The name of the collection to create an index from.
     */
    sourceCollection?: string;
}

export interface IndexSpecPodMetadataConfig {
    /**
     * The indexed fields.
     */
    indexeds: string[];
}

export interface IndexSpecServerless {
    /**
     * The public cloud where you would like your index hosted. [gcp|aws|azure]
     */
    cloud: string;
    /**
     * The region where you would like your index to be created.
     */
    region: string;
}

export interface IndexStatus {
    /**
     * Ready.
     */
    ready: boolean;
    /**
     * Initializing InitializationFailed ScalingUp ScalingDown ScalingUpPodSize ScalingDownPodSize Upgrading Terminating Ready
     */
    state: string;
}

export interface IndexTimeouts {
    /**
     * Timeout defaults to 5 mins. Accepts a string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
     */
    create?: string;
    /**
     * Timeout defaults to 5 mins. Accepts a string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
     */
    delete?: string;
}

