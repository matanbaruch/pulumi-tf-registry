// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDcdbShards(args: GetDcdbShardsArgs, opts?: pulumi.InvokeOptions): Promise<GetDcdbShardsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getDcdbShards:getDcdbShards", {
        "id": args.id,
        "instanceId": args.instanceId,
        "resultOutputFile": args.resultOutputFile,
        "shardInstanceIds": args.shardInstanceIds,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDcdbShards.
 */
export interface GetDcdbShardsArgs {
    id?: string;
    instanceId: string;
    resultOutputFile?: string;
    shardInstanceIds?: string[];
}

/**
 * A collection of values returned by getDcdbShards.
 */
export interface GetDcdbShardsResult {
    readonly id: string;
    readonly instanceId: string;
    readonly lists: outputs.GetDcdbShardsList[];
    readonly resultOutputFile?: string;
    readonly shardInstanceIds?: string[];
}
export function getDcdbShardsOutput(args: GetDcdbShardsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDcdbShardsResult> {
    return pulumi.output(args).apply((a: any) => getDcdbShards(a, opts))
}

/**
 * A collection of arguments for invoking getDcdbShards.
 */
export interface GetDcdbShardsOutputArgs {
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    shardInstanceIds?: pulumi.Input<pulumi.Input<string>[]>;
}
