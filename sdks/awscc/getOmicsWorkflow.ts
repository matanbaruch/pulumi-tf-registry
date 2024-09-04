// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOmicsWorkflow(args: GetOmicsWorkflowArgs, opts?: pulumi.InvokeOptions): Promise<GetOmicsWorkflowResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getOmicsWorkflow:getOmicsWorkflow", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOmicsWorkflow.
 */
export interface GetOmicsWorkflowArgs {
    id: string;
}

/**
 * A collection of values returned by getOmicsWorkflow.
 */
export interface GetOmicsWorkflowResult {
    readonly accelerators: string;
    readonly arn: string;
    readonly creationTime: string;
    readonly definitionUri: string;
    readonly description: string;
    readonly engine: string;
    readonly id: string;
    readonly main: string;
    readonly name: string;
    readonly parameterTemplate: {[key: string]: outputs.GetOmicsWorkflowParameterTemplate};
    readonly status: string;
    readonly storageCapacity: number;
    readonly tags: {[key: string]: string};
    readonly type: string;
    readonly workflowId: string;
}
export function getOmicsWorkflowOutput(args: GetOmicsWorkflowOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOmicsWorkflowResult> {
    return pulumi.output(args).apply((a: any) => getOmicsWorkflow(a, opts))
}

/**
 * A collection of arguments for invoking getOmicsWorkflow.
 */
export interface GetOmicsWorkflowOutputArgs {
    id: pulumi.Input<string>;
}
