// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAppmgmtControlMonitoredInstances(args: GetAppmgmtControlMonitoredInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetAppmgmtControlMonitoredInstancesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getAppmgmtControlMonitoredInstances:getAppmgmtControlMonitoredInstances", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAppmgmtControlMonitoredInstances.
 */
export interface GetAppmgmtControlMonitoredInstancesArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetAppmgmtControlMonitoredInstancesFilter[];
    id?: string;
}

/**
 * A collection of values returned by getAppmgmtControlMonitoredInstances.
 */
export interface GetAppmgmtControlMonitoredInstancesResult {
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetAppmgmtControlMonitoredInstancesFilter[];
    readonly id: string;
    readonly monitoredInstanceCollections: outputs.GetAppmgmtControlMonitoredInstancesMonitoredInstanceCollection[];
}
export function getAppmgmtControlMonitoredInstancesOutput(args: GetAppmgmtControlMonitoredInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppmgmtControlMonitoredInstancesResult> {
    return pulumi.output(args).apply((a: any) => getAppmgmtControlMonitoredInstances(a, opts))
}

/**
 * A collection of arguments for invoking getAppmgmtControlMonitoredInstances.
 */
export interface GetAppmgmtControlMonitoredInstancesOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetAppmgmtControlMonitoredInstancesFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
