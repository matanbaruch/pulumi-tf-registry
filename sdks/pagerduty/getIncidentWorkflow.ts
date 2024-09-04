// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIncidentWorkflow(args: GetIncidentWorkflowArgs, opts?: pulumi.InvokeOptions): Promise<GetIncidentWorkflowResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pagerduty:index/getIncidentWorkflow:getIncidentWorkflow", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIncidentWorkflow.
 */
export interface GetIncidentWorkflowArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getIncidentWorkflow.
 */
export interface GetIncidentWorkflowResult {
    readonly description: string;
    readonly id: string;
    readonly name: string;
}
export function getIncidentWorkflowOutput(args: GetIncidentWorkflowOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIncidentWorkflowResult> {
    return pulumi.output(args).apply((a: any) => getIncidentWorkflow(a, opts))
}

/**
 * A collection of arguments for invoking getIncidentWorkflow.
 */
export interface GetIncidentWorkflowOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
