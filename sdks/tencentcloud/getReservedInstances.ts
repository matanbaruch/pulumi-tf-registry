// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getReservedInstances(args?: GetReservedInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetReservedInstancesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getReservedInstances:getReservedInstances", {
        "availabilityZone": args.availabilityZone,
        "id": args.id,
        "instanceType": args.instanceType,
        "reservedInstanceId": args.reservedInstanceId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getReservedInstances.
 */
export interface GetReservedInstancesArgs {
    availabilityZone?: string;
    id?: string;
    instanceType?: string;
    reservedInstanceId?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getReservedInstances.
 */
export interface GetReservedInstancesResult {
    readonly availabilityZone?: string;
    readonly id: string;
    readonly instanceType?: string;
    readonly reservedInstanceId?: string;
    readonly reservedInstanceLists: outputs.GetReservedInstancesReservedInstanceList[];
    readonly resultOutputFile?: string;
}
export function getReservedInstancesOutput(args?: GetReservedInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReservedInstancesResult> {
    return pulumi.output(args).apply((a: any) => getReservedInstances(a, opts))
}

/**
 * A collection of arguments for invoking getReservedInstances.
 */
export interface GetReservedInstancesOutputArgs {
    availabilityZone?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceType?: pulumi.Input<string>;
    reservedInstanceId?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
