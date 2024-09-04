// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPipelines(args: GetPipelinesArgs, opts?: pulumi.InvokeOptions): Promise<GetPipelinesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("buddy:index/getPipelines:getPipelines", {
        "domain": args.domain,
        "nameRegex": args.nameRegex,
        "projectName": args.projectName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPipelines.
 */
export interface GetPipelinesArgs {
    domain: string;
    nameRegex?: string;
    projectName: string;
}

/**
 * A collection of values returned by getPipelines.
 */
export interface GetPipelinesResult {
    readonly domain: string;
    readonly id: string;
    readonly nameRegex?: string;
    readonly pipelines: outputs.GetPipelinesPipeline[];
    readonly projectName: string;
}
export function getPipelinesOutput(args: GetPipelinesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPipelinesResult> {
    return pulumi.output(args).apply((a: any) => getPipelines(a, opts))
}

/**
 * A collection of arguments for invoking getPipelines.
 */
export interface GetPipelinesOutputArgs {
    domain: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    projectName: pulumi.Input<string>;
}
