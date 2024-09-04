// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDisasterRecoveryDrPlanExecutions(args: GetDisasterRecoveryDrPlanExecutionsArgs, opts?: pulumi.InvokeOptions): Promise<GetDisasterRecoveryDrPlanExecutionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDisasterRecoveryDrPlanExecutions:getDisasterRecoveryDrPlanExecutions", {
        "displayName": args.displayName,
        "drPlanExecutionId": args.drPlanExecutionId,
        "drProtectionGroupId": args.drProtectionGroupId,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDisasterRecoveryDrPlanExecutions.
 */
export interface GetDisasterRecoveryDrPlanExecutionsArgs {
    displayName?: string;
    drPlanExecutionId?: string;
    drProtectionGroupId: string;
    filters?: inputs.GetDisasterRecoveryDrPlanExecutionsFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getDisasterRecoveryDrPlanExecutions.
 */
export interface GetDisasterRecoveryDrPlanExecutionsResult {
    readonly displayName?: string;
    readonly drPlanExecutionCollections: outputs.GetDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection[];
    readonly drPlanExecutionId?: string;
    readonly drProtectionGroupId: string;
    readonly filters?: outputs.GetDisasterRecoveryDrPlanExecutionsFilter[];
    readonly id: string;
    readonly state?: string;
}
export function getDisasterRecoveryDrPlanExecutionsOutput(args: GetDisasterRecoveryDrPlanExecutionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDisasterRecoveryDrPlanExecutionsResult> {
    return pulumi.output(args).apply((a: any) => getDisasterRecoveryDrPlanExecutions(a, opts))
}

/**
 * A collection of arguments for invoking getDisasterRecoveryDrPlanExecutions.
 */
export interface GetDisasterRecoveryDrPlanExecutionsOutputArgs {
    displayName?: pulumi.Input<string>;
    drPlanExecutionId?: pulumi.Input<string>;
    drProtectionGroupId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDisasterRecoveryDrPlanExecutionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
