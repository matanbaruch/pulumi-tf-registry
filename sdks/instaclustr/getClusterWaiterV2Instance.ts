// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getClusterWaiterV2Instance(args: GetClusterWaiterV2InstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterWaiterV2InstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("instaclustr:index/getClusterWaiterV2Instance:getClusterWaiterV2Instance", {
        "clusterId": args.clusterId,
        "currentClusterOperationStatus": args.currentClusterOperationStatus,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getClusterWaiterV2Instance.
 */
export interface GetClusterWaiterV2InstanceArgs {
    clusterId?: string;
    currentClusterOperationStatus?: string;
    id: string;
}

/**
 * A collection of values returned by getClusterWaiterV2Instance.
 */
export interface GetClusterWaiterV2InstanceResult {
    readonly clusterId: string;
    readonly currentClusterOperationStatus: string;
    readonly id: string;
}
export function getClusterWaiterV2InstanceOutput(args: GetClusterWaiterV2InstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterWaiterV2InstanceResult> {
    return pulumi.output(args).apply((a: any) => getClusterWaiterV2Instance(a, opts))
}

/**
 * A collection of arguments for invoking getClusterWaiterV2Instance.
 */
export interface GetClusterWaiterV2InstanceOutputArgs {
    clusterId?: pulumi.Input<string>;
    currentClusterOperationStatus?: pulumi.Input<string>;
    id: pulumi.Input<string>;
}
