// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDashboards(args?: GetDashboardsArgs, opts?: pulumi.InvokeOptions): Promise<GetDashboardsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("wavefront:index/getDashboards:getDashboards", {
        "id": args.id,
        "limit": args.limit,
        "offset": args.offset,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDashboards.
 */
export interface GetDashboardsArgs {
    id?: string;
    limit?: number;
    offset?: number;
}

/**
 * A collection of values returned by getDashboards.
 */
export interface GetDashboardsResult {
    readonly dashboards: outputs.GetDashboardsDashboard[];
    readonly id: string;
    readonly limit?: number;
    readonly offset?: number;
}
export function getDashboardsOutput(args?: GetDashboardsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDashboardsResult> {
    return pulumi.output(args).apply((a: any) => getDashboards(a, opts))
}

/**
 * A collection of arguments for invoking getDashboards.
 */
export interface GetDashboardsOutputArgs {
    id?: pulumi.Input<string>;
    limit?: pulumi.Input<number>;
    offset?: pulumi.Input<number>;
}
