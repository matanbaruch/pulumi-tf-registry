// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCockpitPlan(args: GetCockpitPlanArgs, opts?: pulumi.InvokeOptions): Promise<GetCockpitPlanResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scaleway:index/getCockpitPlan:getCockpitPlan", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCockpitPlan.
 */
export interface GetCockpitPlanArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getCockpitPlan.
 */
export interface GetCockpitPlanResult {
    readonly id: string;
    readonly name: string;
}
export function getCockpitPlanOutput(args: GetCockpitPlanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCockpitPlanResult> {
    return pulumi.output(args).apply((a: any) => getCockpitPlan(a, opts))
}

/**
 * A collection of arguments for invoking getCockpitPlan.
 */
export interface GetCockpitPlanOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
