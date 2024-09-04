// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStackMonitoringDiscoveryJobs(args: GetStackMonitoringDiscoveryJobsArgs, opts?: pulumi.InvokeOptions): Promise<GetStackMonitoringDiscoveryJobsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getStackMonitoringDiscoveryJobs:getStackMonitoringDiscoveryJobs", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStackMonitoringDiscoveryJobs.
 */
export interface GetStackMonitoringDiscoveryJobsArgs {
    compartmentId: string;
    filters?: inputs.GetStackMonitoringDiscoveryJobsFilter[];
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getStackMonitoringDiscoveryJobs.
 */
export interface GetStackMonitoringDiscoveryJobsResult {
    readonly compartmentId: string;
    readonly discoveryJobCollections: outputs.GetStackMonitoringDiscoveryJobsDiscoveryJobCollection[];
    readonly filters?: outputs.GetStackMonitoringDiscoveryJobsFilter[];
    readonly id: string;
    readonly name?: string;
}
export function getStackMonitoringDiscoveryJobsOutput(args: GetStackMonitoringDiscoveryJobsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStackMonitoringDiscoveryJobsResult> {
    return pulumi.output(args).apply((a: any) => getStackMonitoringDiscoveryJobs(a, opts))
}

/**
 * A collection of arguments for invoking getStackMonitoringDiscoveryJobs.
 */
export interface GetStackMonitoringDiscoveryJobsOutputArgs {
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetStackMonitoringDiscoveryJobsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
