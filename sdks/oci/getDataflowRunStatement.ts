// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataflowRunStatement(args: GetDataflowRunStatementArgs, opts?: pulumi.InvokeOptions): Promise<GetDataflowRunStatementResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataflowRunStatement:getDataflowRunStatement", {
        "runId": args.runId,
        "statementId": args.statementId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataflowRunStatement.
 */
export interface GetDataflowRunStatementArgs {
    runId: string;
    statementId: string;
}

/**
 * A collection of values returned by getDataflowRunStatement.
 */
export interface GetDataflowRunStatementResult {
    readonly code: string;
    readonly id: string;
    readonly outputs: outputs.GetDataflowRunStatementOutput[];
    readonly progress: number;
    readonly runId: string;
    readonly state: string;
    readonly statementId: string;
    readonly timeCompleted: string;
    readonly timeCreated: string;
}
export function getDataflowRunStatementOutput(args: GetDataflowRunStatementOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataflowRunStatementResult> {
    return pulumi.output(args).apply((a: any) => getDataflowRunStatement(a, opts))
}

/**
 * A collection of arguments for invoking getDataflowRunStatement.
 */
export interface GetDataflowRunStatementOutputArgs {
    runId: pulumi.Input<string>;
    statementId: pulumi.Input<string>;
}
