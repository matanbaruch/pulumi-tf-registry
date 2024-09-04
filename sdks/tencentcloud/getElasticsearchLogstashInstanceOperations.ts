// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getElasticsearchLogstashInstanceOperations(args: GetElasticsearchLogstashInstanceOperationsArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticsearchLogstashInstanceOperationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getElasticsearchLogstashInstanceOperations:getElasticsearchLogstashInstanceOperations", {
        "endTime": args.endTime,
        "id": args.id,
        "instanceId": args.instanceId,
        "resultOutputFile": args.resultOutputFile,
        "startTime": args.startTime,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getElasticsearchLogstashInstanceOperations.
 */
export interface GetElasticsearchLogstashInstanceOperationsArgs {
    endTime: string;
    id?: string;
    instanceId: string;
    resultOutputFile?: string;
    startTime: string;
}

/**
 * A collection of values returned by getElasticsearchLogstashInstanceOperations.
 */
export interface GetElasticsearchLogstashInstanceOperationsResult {
    readonly endTime: string;
    readonly id: string;
    readonly instanceId: string;
    readonly operations: outputs.GetElasticsearchLogstashInstanceOperationsOperation[];
    readonly resultOutputFile?: string;
    readonly startTime: string;
}
export function getElasticsearchLogstashInstanceOperationsOutput(args: GetElasticsearchLogstashInstanceOperationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticsearchLogstashInstanceOperationsResult> {
    return pulumi.output(args).apply((a: any) => getElasticsearchLogstashInstanceOperations(a, opts))
}

/**
 * A collection of arguments for invoking getElasticsearchLogstashInstanceOperations.
 */
export interface GetElasticsearchLogstashInstanceOperationsOutputArgs {
    endTime: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
    startTime: pulumi.Input<string>;
}
