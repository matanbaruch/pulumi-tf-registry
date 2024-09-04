// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataSafeDiscoveryJobs(args: GetDataSafeDiscoveryJobsArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSafeDiscoveryJobsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataSafeDiscoveryJobs:getDataSafeDiscoveryJobs", {
        "accessLevel": args.accessLevel,
        "compartmentId": args.compartmentId,
        "compartmentIdInSubtree": args.compartmentIdInSubtree,
        "discoveryJobId": args.discoveryJobId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "sensitiveDataModelId": args.sensitiveDataModelId,
        "state": args.state,
        "targetId": args.targetId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataSafeDiscoveryJobs.
 */
export interface GetDataSafeDiscoveryJobsArgs {
    accessLevel?: string;
    compartmentId: string;
    compartmentIdInSubtree?: boolean;
    discoveryJobId?: string;
    displayName?: string;
    filters?: inputs.GetDataSafeDiscoveryJobsFilter[];
    id?: string;
    sensitiveDataModelId?: string;
    state?: string;
    targetId?: string;
}

/**
 * A collection of values returned by getDataSafeDiscoveryJobs.
 */
export interface GetDataSafeDiscoveryJobsResult {
    readonly accessLevel?: string;
    readonly compartmentId: string;
    readonly compartmentIdInSubtree?: boolean;
    readonly discoveryJobCollections: outputs.GetDataSafeDiscoveryJobsDiscoveryJobCollection[];
    readonly discoveryJobId?: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetDataSafeDiscoveryJobsFilter[];
    readonly id: string;
    readonly sensitiveDataModelId?: string;
    readonly state?: string;
    readonly targetId?: string;
}
export function getDataSafeDiscoveryJobsOutput(args: GetDataSafeDiscoveryJobsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataSafeDiscoveryJobsResult> {
    return pulumi.output(args).apply((a: any) => getDataSafeDiscoveryJobs(a, opts))
}

/**
 * A collection of arguments for invoking getDataSafeDiscoveryJobs.
 */
export interface GetDataSafeDiscoveryJobsOutputArgs {
    accessLevel?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    compartmentIdInSubtree?: pulumi.Input<boolean>;
    discoveryJobId?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDataSafeDiscoveryJobsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    sensitiveDataModelId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    targetId?: pulumi.Input<string>;
}
