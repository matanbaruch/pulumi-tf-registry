// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVertexAiIndex(args: GetVertexAiIndexArgs, opts?: pulumi.InvokeOptions): Promise<GetVertexAiIndexResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getVertexAiIndex:getVertexAiIndex", {
        "id": args.id,
        "name": args.name,
        "project": args.project,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVertexAiIndex.
 */
export interface GetVertexAiIndexArgs {
    id?: string;
    name: string;
    project?: string;
    region: string;
}

/**
 * A collection of values returned by getVertexAiIndex.
 */
export interface GetVertexAiIndexResult {
    readonly createTime: string;
    readonly deployedIndexes: outputs.GetVertexAiIndexDeployedIndex[];
    readonly description: string;
    readonly displayName: string;
    readonly effectiveLabels: {[key: string]: string};
    readonly etag: string;
    readonly id: string;
    readonly indexStats: outputs.GetVertexAiIndexIndexStat[];
    readonly indexUpdateMethod: string;
    readonly labels: {[key: string]: string};
    readonly metadataSchemaUri: string;
    readonly metadatas: outputs.GetVertexAiIndexMetadata[];
    readonly name: string;
    readonly project?: string;
    readonly region: string;
    readonly terraformLabels: {[key: string]: string};
    readonly updateTime: string;
}
export function getVertexAiIndexOutput(args: GetVertexAiIndexOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVertexAiIndexResult> {
    return pulumi.output(args).apply((a: any) => getVertexAiIndex(a, opts))
}

/**
 * A collection of arguments for invoking getVertexAiIndex.
 */
export interface GetVertexAiIndexOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    region: pulumi.Input<string>;
}
