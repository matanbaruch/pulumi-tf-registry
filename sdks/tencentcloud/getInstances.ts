// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getInstances(args?: GetInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetInstancesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getInstances:getInstances", {
        "availabilityZone": args.availabilityZone,
        "dedicatedClusterId": args.dedicatedClusterId,
        "id": args.id,
        "instanceId": args.instanceId,
        "instanceName": args.instanceName,
        "instanceSetIds": args.instanceSetIds,
        "projectId": args.projectId,
        "resultOutputFile": args.resultOutputFile,
        "subnetId": args.subnetId,
        "tags": args.tags,
        "vpcId": args.vpcId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getInstances.
 */
export interface GetInstancesArgs {
    availabilityZone?: string;
    dedicatedClusterId?: string;
    id?: string;
    instanceId?: string;
    instanceName?: string;
    instanceSetIds?: string[];
    projectId?: number;
    resultOutputFile?: string;
    subnetId?: string;
    tags?: {[key: string]: string};
    vpcId?: string;
}

/**
 * A collection of values returned by getInstances.
 */
export interface GetInstancesResult {
    readonly availabilityZone?: string;
    readonly dedicatedClusterId?: string;
    readonly id: string;
    readonly instanceId?: string;
    readonly instanceLists: outputs.GetInstancesInstanceList[];
    readonly instanceName?: string;
    readonly instanceSetIds?: string[];
    readonly projectId?: number;
    readonly resultOutputFile?: string;
    readonly subnetId?: string;
    readonly tags?: {[key: string]: string};
    readonly vpcId?: string;
}
export function getInstancesOutput(args?: GetInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInstancesResult> {
    return pulumi.output(args).apply((a: any) => getInstances(a, opts))
}

/**
 * A collection of arguments for invoking getInstances.
 */
export interface GetInstancesOutputArgs {
    availabilityZone?: pulumi.Input<string>;
    dedicatedClusterId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
    instanceName?: pulumi.Input<string>;
    instanceSetIds?: pulumi.Input<pulumi.Input<string>[]>;
    projectId?: pulumi.Input<number>;
    resultOutputFile?: pulumi.Input<string>;
    subnetId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    vpcId?: pulumi.Input<string>;
}
