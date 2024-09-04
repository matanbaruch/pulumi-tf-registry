// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getElasticsearchSnapshotRepository(args: GetElasticsearchSnapshotRepositoryArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticsearchSnapshotRepositoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("elasticstack:index/getElasticsearchSnapshotRepository:getElasticsearchSnapshotRepository", {
        "elasticsearchConnection": args.elasticsearchConnection,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getElasticsearchSnapshotRepository.
 */
export interface GetElasticsearchSnapshotRepositoryArgs {
    /**
     * @deprecated Deprecated
     */
    elasticsearchConnection?: inputs.GetElasticsearchSnapshotRepositoryElasticsearchConnection;
    name: string;
}

/**
 * A collection of values returned by getElasticsearchSnapshotRepository.
 */
export interface GetElasticsearchSnapshotRepositoryResult {
    readonly azures: outputs.GetElasticsearchSnapshotRepositoryAzure[];
    /**
     * @deprecated Deprecated
     */
    readonly elasticsearchConnection?: outputs.GetElasticsearchSnapshotRepositoryElasticsearchConnection;
    readonly fs: outputs.GetElasticsearchSnapshotRepositoryF[];
    readonly gcs: outputs.GetElasticsearchSnapshotRepositoryGc[];
    readonly hdfs: outputs.GetElasticsearchSnapshotRepositoryHdf[];
    readonly id: string;
    readonly name: string;
    readonly s3s: outputs.GetElasticsearchSnapshotRepositoryS3[];
    readonly type: string;
    readonly urls: outputs.GetElasticsearchSnapshotRepositoryUrl[];
}
export function getElasticsearchSnapshotRepositoryOutput(args: GetElasticsearchSnapshotRepositoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticsearchSnapshotRepositoryResult> {
    return pulumi.output(args).apply((a: any) => getElasticsearchSnapshotRepository(a, opts))
}

/**
 * A collection of arguments for invoking getElasticsearchSnapshotRepository.
 */
export interface GetElasticsearchSnapshotRepositoryOutputArgs {
    /**
     * @deprecated Deprecated
     */
    elasticsearchConnection?: pulumi.Input<inputs.GetElasticsearchSnapshotRepositoryElasticsearchConnectionArgs>;
    name: pulumi.Input<string>;
}
