// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAutomationActionsAction(args: GetAutomationActionsActionArgs, opts?: pulumi.InvokeOptions): Promise<GetAutomationActionsActionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pagerduty:index/getAutomationActionsAction:getAutomationActionsAction", {
        "actionClassification": args.actionClassification,
        "creationTime": args.creationTime,
        "description": args.description,
        "id": args.id,
        "modifyTime": args.modifyTime,
        "runnerId": args.runnerId,
        "runnerType": args.runnerType,
        "type": args.type,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAutomationActionsAction.
 */
export interface GetAutomationActionsActionArgs {
    actionClassification?: string;
    creationTime?: string;
    description?: string;
    id: string;
    modifyTime?: string;
    runnerId?: string;
    runnerType?: string;
    type?: string;
}

/**
 * A collection of values returned by getAutomationActionsAction.
 */
export interface GetAutomationActionsActionResult {
    readonly actionClassification: string;
    readonly actionDataReferences: outputs.GetAutomationActionsActionActionDataReference[];
    readonly actionType: string;
    readonly creationTime: string;
    readonly description: string;
    readonly id: string;
    readonly modifyTime: string;
    readonly name: string;
    readonly runnerId: string;
    readonly runnerType: string;
    readonly type: string;
}
export function getAutomationActionsActionOutput(args: GetAutomationActionsActionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAutomationActionsActionResult> {
    return pulumi.output(args).apply((a: any) => getAutomationActionsAction(a, opts))
}

/**
 * A collection of arguments for invoking getAutomationActionsAction.
 */
export interface GetAutomationActionsActionOutputArgs {
    actionClassification?: pulumi.Input<string>;
    creationTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id: pulumi.Input<string>;
    modifyTime?: pulumi.Input<string>;
    runnerId?: pulumi.Input<string>;
    runnerType?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
