// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApigatewayUsagePlan(args: GetApigatewayUsagePlanArgs, opts?: pulumi.InvokeOptions): Promise<GetApigatewayUsagePlanResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getApigatewayUsagePlan:getApigatewayUsagePlan", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApigatewayUsagePlan.
 */
export interface GetApigatewayUsagePlanArgs {
    id: string;
}

/**
 * A collection of values returned by getApigatewayUsagePlan.
 */
export interface GetApigatewayUsagePlanResult {
    readonly apiStages: outputs.GetApigatewayUsagePlanApiStage[];
    readonly description: string;
    readonly id: string;
    readonly quota: outputs.GetApigatewayUsagePlanQuota;
    readonly tags: outputs.GetApigatewayUsagePlanTag[];
    readonly throttle: outputs.GetApigatewayUsagePlanThrottle;
    readonly usagePlanId: string;
    readonly usagePlanName: string;
}
export function getApigatewayUsagePlanOutput(args: GetApigatewayUsagePlanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApigatewayUsagePlanResult> {
    return pulumi.output(args).apply((a: any) => getApigatewayUsagePlan(a, opts))
}

/**
 * A collection of arguments for invoking getApigatewayUsagePlan.
 */
export interface GetApigatewayUsagePlanOutputArgs {
    id: pulumi.Input<string>;
}
