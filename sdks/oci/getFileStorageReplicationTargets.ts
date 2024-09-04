// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFileStorageReplicationTargets(args: GetFileStorageReplicationTargetsArgs, opts?: pulumi.InvokeOptions): Promise<GetFileStorageReplicationTargetsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getFileStorageReplicationTargets:getFileStorageReplicationTargets", {
        "availabilityDomain": args.availabilityDomain,
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFileStorageReplicationTargets.
 */
export interface GetFileStorageReplicationTargetsArgs {
    availabilityDomain: string;
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetFileStorageReplicationTargetsFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getFileStorageReplicationTargets.
 */
export interface GetFileStorageReplicationTargetsResult {
    readonly availabilityDomain: string;
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetFileStorageReplicationTargetsFilter[];
    readonly id?: string;
    readonly replicationTargets: outputs.GetFileStorageReplicationTargetsReplicationTarget[];
    readonly state?: string;
}
export function getFileStorageReplicationTargetsOutput(args: GetFileStorageReplicationTargetsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFileStorageReplicationTargetsResult> {
    return pulumi.output(args).apply((a: any) => getFileStorageReplicationTargets(a, opts))
}

/**
 * A collection of arguments for invoking getFileStorageReplicationTargets.
 */
export interface GetFileStorageReplicationTargetsOutputArgs {
    availabilityDomain: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetFileStorageReplicationTargetsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
