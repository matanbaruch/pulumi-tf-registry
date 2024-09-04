// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAutomationActionsRunner(args: GetAutomationActionsRunnerArgs, opts?: pulumi.InvokeOptions): Promise<GetAutomationActionsRunnerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pagerduty:index/getAutomationActionsRunner:getAutomationActionsRunner", {
        "description": args.description,
        "id": args.id,
        "lastSeen": args.lastSeen,
        "runbookBaseUri": args.runbookBaseUri,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAutomationActionsRunner.
 */
export interface GetAutomationActionsRunnerArgs {
    description?: string;
    id: string;
    lastSeen?: string;
    runbookBaseUri?: string;
}

/**
 * A collection of values returned by getAutomationActionsRunner.
 */
export interface GetAutomationActionsRunnerResult {
    readonly creationTime: string;
    readonly description: string;
    readonly id: string;
    readonly lastSeen: string;
    readonly name: string;
    readonly runbookBaseUri: string;
    readonly runnerType: string;
    readonly type: string;
}
export function getAutomationActionsRunnerOutput(args: GetAutomationActionsRunnerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAutomationActionsRunnerResult> {
    return pulumi.output(args).apply((a: any) => getAutomationActionsRunner(a, opts))
}

/**
 * A collection of arguments for invoking getAutomationActionsRunner.
 */
export interface GetAutomationActionsRunnerOutputArgs {
    description?: pulumi.Input<string>;
    id: pulumi.Input<string>;
    lastSeen?: pulumi.Input<string>;
    runbookBaseUri?: pulumi.Input<string>;
}
