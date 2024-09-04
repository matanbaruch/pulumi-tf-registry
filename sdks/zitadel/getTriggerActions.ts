// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTriggerActions(args: GetTriggerActionsArgs, opts?: pulumi.InvokeOptions): Promise<GetTriggerActionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zitadel:index/getTriggerActions:getTriggerActions", {
        "flowType": args.flowType,
        "id": args.id,
        "orgId": args.orgId,
        "triggerType": args.triggerType,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTriggerActions.
 */
export interface GetTriggerActionsArgs {
    flowType: string;
    id?: string;
    orgId?: string;
    triggerType: string;
}

/**
 * A collection of values returned by getTriggerActions.
 */
export interface GetTriggerActionsResult {
    readonly actionIds: string[];
    readonly flowType: string;
    readonly id: string;
    readonly orgId?: string;
    readonly triggerType: string;
}
export function getTriggerActionsOutput(args: GetTriggerActionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTriggerActionsResult> {
    return pulumi.output(args).apply((a: any) => getTriggerActions(a, opts))
}

/**
 * A collection of arguments for invoking getTriggerActions.
 */
export interface GetTriggerActionsOutputArgs {
    flowType: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    triggerType: pulumi.Input<string>;
}
