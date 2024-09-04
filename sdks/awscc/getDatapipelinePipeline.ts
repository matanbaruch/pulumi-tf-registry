// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatapipelinePipeline(args: GetDatapipelinePipelineArgs, opts?: pulumi.InvokeOptions): Promise<GetDatapipelinePipelineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getDatapipelinePipeline:getDatapipelinePipeline", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatapipelinePipeline.
 */
export interface GetDatapipelinePipelineArgs {
    id: string;
}

/**
 * A collection of values returned by getDatapipelinePipeline.
 */
export interface GetDatapipelinePipelineResult {
    readonly activate: boolean;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly parameterObjects: outputs.GetDatapipelinePipelineParameterObject[];
    readonly parameterValues: outputs.GetDatapipelinePipelineParameterValue[];
    readonly pipelineId: string;
    readonly pipelineObjects: outputs.GetDatapipelinePipelinePipelineObject[];
    readonly pipelineTags: outputs.GetDatapipelinePipelinePipelineTag[];
}
export function getDatapipelinePipelineOutput(args: GetDatapipelinePipelineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatapipelinePipelineResult> {
    return pulumi.output(args).apply((a: any) => getDatapipelinePipeline(a, opts))
}

/**
 * A collection of arguments for invoking getDatapipelinePipeline.
 */
export interface GetDatapipelinePipelineOutputArgs {
    id: pulumi.Input<string>;
}
