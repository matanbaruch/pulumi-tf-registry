// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getClusterSchedulesDataSource(args: GetClusterSchedulesDataSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterSchedulesDataSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netapp-ontap:index/getClusterSchedulesDataSource:getClusterSchedulesDataSource", {
        "cxProfileName": args.cxProfileName,
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getClusterSchedulesDataSource.
 */
export interface GetClusterSchedulesDataSourceArgs {
    cxProfileName: string;
    filter?: inputs.GetClusterSchedulesDataSourceFilter;
}

/**
 * A collection of values returned by getClusterSchedulesDataSource.
 */
export interface GetClusterSchedulesDataSourceResult {
    readonly clusterSchedules: outputs.GetClusterSchedulesDataSourceClusterSchedule[];
    readonly cxProfileName: string;
    readonly filter?: outputs.GetClusterSchedulesDataSourceFilter;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
export function getClusterSchedulesDataSourceOutput(args: GetClusterSchedulesDataSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterSchedulesDataSourceResult> {
    return pulumi.output(args).apply((a: any) => getClusterSchedulesDataSource(a, opts))
}

/**
 * A collection of arguments for invoking getClusterSchedulesDataSource.
 */
export interface GetClusterSchedulesDataSourceOutputArgs {
    cxProfileName: pulumi.Input<string>;
    filter?: pulumi.Input<inputs.GetClusterSchedulesDataSourceFilterArgs>;
}
