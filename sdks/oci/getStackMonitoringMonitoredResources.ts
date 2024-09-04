// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStackMonitoringMonitoredResources(args: GetStackMonitoringMonitoredResourcesArgs, opts?: pulumi.InvokeOptions): Promise<GetStackMonitoringMonitoredResourcesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getStackMonitoringMonitoredResources:getStackMonitoringMonitoredResources", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "status": args.status,
        "workRequestId": args.workRequestId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStackMonitoringMonitoredResources.
 */
export interface GetStackMonitoringMonitoredResourcesArgs {
    compartmentId: string;
    filters?: inputs.GetStackMonitoringMonitoredResourcesFilter[];
    id?: string;
    name?: string;
    status?: string;
    workRequestId?: string;
}

/**
 * A collection of values returned by getStackMonitoringMonitoredResources.
 */
export interface GetStackMonitoringMonitoredResourcesResult {
    readonly compartmentId: string;
    readonly filters?: outputs.GetStackMonitoringMonitoredResourcesFilter[];
    readonly id: string;
    readonly monitoredResourceCollections: outputs.GetStackMonitoringMonitoredResourcesMonitoredResourceCollection[];
    readonly name?: string;
    readonly status?: string;
    readonly workRequestId?: string;
}
export function getStackMonitoringMonitoredResourcesOutput(args: GetStackMonitoringMonitoredResourcesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStackMonitoringMonitoredResourcesResult> {
    return pulumi.output(args).apply((a: any) => getStackMonitoringMonitoredResources(a, opts))
}

/**
 * A collection of arguments for invoking getStackMonitoringMonitoredResources.
 */
export interface GetStackMonitoringMonitoredResourcesOutputArgs {
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetStackMonitoringMonitoredResourcesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    workRequestId?: pulumi.Input<string>;
}
