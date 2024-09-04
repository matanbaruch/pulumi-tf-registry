// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLogAnalyticsLogAnalyticsEntitiesSummary(args: GetLogAnalyticsLogAnalyticsEntitiesSummaryArgs, opts?: pulumi.InvokeOptions): Promise<GetLogAnalyticsLogAnalyticsEntitiesSummaryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getLogAnalyticsLogAnalyticsEntitiesSummary:getLogAnalyticsLogAnalyticsEntitiesSummary", {
        "compartmentId": args.compartmentId,
        "id": args.id,
        "namespace": args.namespace,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLogAnalyticsLogAnalyticsEntitiesSummary.
 */
export interface GetLogAnalyticsLogAnalyticsEntitiesSummaryArgs {
    compartmentId: string;
    id?: string;
    namespace: string;
}

/**
 * A collection of values returned by getLogAnalyticsLogAnalyticsEntitiesSummary.
 */
export interface GetLogAnalyticsLogAnalyticsEntitiesSummaryResult {
    readonly activeEntitiesCount: number;
    readonly compartmentId: string;
    readonly entitiesWithHasLogsCollectedCount: number;
    readonly entitiesWithManagementAgentCount: number;
    readonly id: string;
    readonly namespace: string;
}
export function getLogAnalyticsLogAnalyticsEntitiesSummaryOutput(args: GetLogAnalyticsLogAnalyticsEntitiesSummaryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLogAnalyticsLogAnalyticsEntitiesSummaryResult> {
    return pulumi.output(args).apply((a: any) => getLogAnalyticsLogAnalyticsEntitiesSummary(a, opts))
}

/**
 * A collection of arguments for invoking getLogAnalyticsLogAnalyticsEntitiesSummary.
 */
export interface GetLogAnalyticsLogAnalyticsEntitiesSummaryOutputArgs {
    compartmentId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    namespace: pulumi.Input<string>;
}
