// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreDedicatedVmHostsInstances(args: GetCoreDedicatedVmHostsInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreDedicatedVmHostsInstancesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreDedicatedVmHostsInstances:getCoreDedicatedVmHostsInstances", {
        "availabilityDomain": args.availabilityDomain,
        "compartmentId": args.compartmentId,
        "dedicatedVmHostId": args.dedicatedVmHostId,
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreDedicatedVmHostsInstances.
 */
export interface GetCoreDedicatedVmHostsInstancesArgs {
    availabilityDomain?: string;
    compartmentId: string;
    dedicatedVmHostId: string;
    filters?: inputs.GetCoreDedicatedVmHostsInstancesFilter[];
    id?: string;
}

/**
 * A collection of values returned by getCoreDedicatedVmHostsInstances.
 */
export interface GetCoreDedicatedVmHostsInstancesResult {
    readonly availabilityDomain?: string;
    readonly compartmentId: string;
    readonly dedicatedVmHostId: string;
    readonly dedicatedVmHostInstances: outputs.GetCoreDedicatedVmHostsInstancesDedicatedVmHostInstance[];
    readonly filters?: outputs.GetCoreDedicatedVmHostsInstancesFilter[];
    readonly id: string;
}
export function getCoreDedicatedVmHostsInstancesOutput(args: GetCoreDedicatedVmHostsInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreDedicatedVmHostsInstancesResult> {
    return pulumi.output(args).apply((a: any) => getCoreDedicatedVmHostsInstances(a, opts))
}

/**
 * A collection of arguments for invoking getCoreDedicatedVmHostsInstances.
 */
export interface GetCoreDedicatedVmHostsInstancesOutputArgs {
    availabilityDomain?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    dedicatedVmHostId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreDedicatedVmHostsInstancesFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
