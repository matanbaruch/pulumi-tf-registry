// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataflowInvokeRuns(args: GetDataflowInvokeRunsArgs, opts?: pulumi.InvokeOptions): Promise<GetDataflowInvokeRunsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataflowInvokeRuns:getDataflowInvokeRuns", {
        "applicationId": args.applicationId,
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "displayNameStartsWith": args.displayNameStartsWith,
        "filters": args.filters,
        "id": args.id,
        "ownerPrincipalId": args.ownerPrincipalId,
        "poolId": args.poolId,
        "state": args.state,
        "timeCreatedGreaterThan": args.timeCreatedGreaterThan,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataflowInvokeRuns.
 */
export interface GetDataflowInvokeRunsArgs {
    applicationId?: string;
    compartmentId: string;
    displayName?: string;
    displayNameStartsWith?: string;
    filters?: inputs.GetDataflowInvokeRunsFilter[];
    id?: string;
    ownerPrincipalId?: string;
    poolId?: string;
    state?: string;
    timeCreatedGreaterThan?: string;
}

/**
 * A collection of values returned by getDataflowInvokeRuns.
 */
export interface GetDataflowInvokeRunsResult {
    readonly applicationId?: string;
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly displayNameStartsWith?: string;
    readonly filters?: outputs.GetDataflowInvokeRunsFilter[];
    readonly id: string;
    readonly ownerPrincipalId?: string;
    readonly poolId?: string;
    readonly runs: outputs.GetDataflowInvokeRunsRun[];
    readonly state?: string;
    readonly timeCreatedGreaterThan?: string;
}
export function getDataflowInvokeRunsOutput(args: GetDataflowInvokeRunsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataflowInvokeRunsResult> {
    return pulumi.output(args).apply((a: any) => getDataflowInvokeRuns(a, opts))
}

/**
 * A collection of arguments for invoking getDataflowInvokeRuns.
 */
export interface GetDataflowInvokeRunsOutputArgs {
    applicationId?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    displayNameStartsWith?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDataflowInvokeRunsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    ownerPrincipalId?: pulumi.Input<string>;
    poolId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeCreatedGreaterThan?: pulumi.Input<string>;
}
