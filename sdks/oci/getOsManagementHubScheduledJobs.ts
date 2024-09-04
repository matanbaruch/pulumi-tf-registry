// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOsManagementHubScheduledJobs(args?: GetOsManagementHubScheduledJobsArgs, opts?: pulumi.InvokeOptions): Promise<GetOsManagementHubScheduledJobsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOsManagementHubScheduledJobs:getOsManagementHubScheduledJobs", {
        "compartmentId": args.compartmentId,
        "compartmentIdInSubtree": args.compartmentIdInSubtree,
        "displayName": args.displayName,
        "displayNameContains": args.displayNameContains,
        "filters": args.filters,
        "id": args.id,
        "isManagedByAutonomousLinux": args.isManagedByAutonomousLinux,
        "isRestricted": args.isRestricted,
        "lifecycleStageId": args.lifecycleStageId,
        "locationNotEqualTos": args.locationNotEqualTos,
        "locations": args.locations,
        "managedCompartmentId": args.managedCompartmentId,
        "managedInstanceGroupId": args.managedInstanceGroupId,
        "managedInstanceId": args.managedInstanceId,
        "operationType": args.operationType,
        "scheduleType": args.scheduleType,
        "state": args.state,
        "timeEnd": args.timeEnd,
        "timeStart": args.timeStart,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOsManagementHubScheduledJobs.
 */
export interface GetOsManagementHubScheduledJobsArgs {
    compartmentId?: string;
    compartmentIdInSubtree?: boolean;
    displayName?: string;
    displayNameContains?: string;
    filters?: inputs.GetOsManagementHubScheduledJobsFilter[];
    id?: string;
    isManagedByAutonomousLinux?: boolean;
    isRestricted?: boolean;
    lifecycleStageId?: string;
    locationNotEqualTos?: string[];
    locations?: string[];
    managedCompartmentId?: string;
    managedInstanceGroupId?: string;
    managedInstanceId?: string;
    operationType?: string;
    scheduleType?: string;
    state?: string;
    timeEnd?: string;
    timeStart?: string;
}

/**
 * A collection of values returned by getOsManagementHubScheduledJobs.
 */
export interface GetOsManagementHubScheduledJobsResult {
    readonly compartmentId?: string;
    readonly compartmentIdInSubtree?: boolean;
    readonly displayName?: string;
    readonly displayNameContains?: string;
    readonly filters?: outputs.GetOsManagementHubScheduledJobsFilter[];
    readonly id?: string;
    readonly isManagedByAutonomousLinux?: boolean;
    readonly isRestricted?: boolean;
    readonly lifecycleStageId?: string;
    readonly locationNotEqualTos?: string[];
    readonly locations?: string[];
    readonly managedCompartmentId?: string;
    readonly managedInstanceGroupId?: string;
    readonly managedInstanceId?: string;
    readonly operationType?: string;
    readonly scheduleType?: string;
    readonly scheduledJobCollections: outputs.GetOsManagementHubScheduledJobsScheduledJobCollection[];
    readonly state?: string;
    readonly timeEnd?: string;
    readonly timeStart?: string;
}
export function getOsManagementHubScheduledJobsOutput(args?: GetOsManagementHubScheduledJobsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOsManagementHubScheduledJobsResult> {
    return pulumi.output(args).apply((a: any) => getOsManagementHubScheduledJobs(a, opts))
}

/**
 * A collection of arguments for invoking getOsManagementHubScheduledJobs.
 */
export interface GetOsManagementHubScheduledJobsOutputArgs {
    compartmentId?: pulumi.Input<string>;
    compartmentIdInSubtree?: pulumi.Input<boolean>;
    displayName?: pulumi.Input<string>;
    displayNameContains?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetOsManagementHubScheduledJobsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    isManagedByAutonomousLinux?: pulumi.Input<boolean>;
    isRestricted?: pulumi.Input<boolean>;
    lifecycleStageId?: pulumi.Input<string>;
    locationNotEqualTos?: pulumi.Input<pulumi.Input<string>[]>;
    locations?: pulumi.Input<pulumi.Input<string>[]>;
    managedCompartmentId?: pulumi.Input<string>;
    managedInstanceGroupId?: pulumi.Input<string>;
    managedInstanceId?: pulumi.Input<string>;
    operationType?: pulumi.Input<string>;
    scheduleType?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeEnd?: pulumi.Input<string>;
    timeStart?: pulumi.Input<string>;
}
