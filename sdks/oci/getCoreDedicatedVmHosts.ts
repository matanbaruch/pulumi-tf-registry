// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreDedicatedVmHosts(args: GetCoreDedicatedVmHostsArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreDedicatedVmHostsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreDedicatedVmHosts:getCoreDedicatedVmHosts", {
        "availabilityDomain": args.availabilityDomain,
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "instanceShapeName": args.instanceShapeName,
        "remainingMemoryInGbsGreaterThanOrEqualTo": args.remainingMemoryInGbsGreaterThanOrEqualTo,
        "remainingOcpusGreaterThanOrEqualTo": args.remainingOcpusGreaterThanOrEqualTo,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreDedicatedVmHosts.
 */
export interface GetCoreDedicatedVmHostsArgs {
    availabilityDomain?: string;
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetCoreDedicatedVmHostsFilter[];
    id?: string;
    instanceShapeName?: string;
    remainingMemoryInGbsGreaterThanOrEqualTo?: number;
    remainingOcpusGreaterThanOrEqualTo?: number;
    state?: string;
}

/**
 * A collection of values returned by getCoreDedicatedVmHosts.
 */
export interface GetCoreDedicatedVmHostsResult {
    readonly availabilityDomain?: string;
    readonly compartmentId: string;
    readonly dedicatedVmHosts: outputs.GetCoreDedicatedVmHostsDedicatedVmHost[];
    readonly displayName?: string;
    readonly filters?: outputs.GetCoreDedicatedVmHostsFilter[];
    readonly id: string;
    readonly instanceShapeName?: string;
    readonly remainingMemoryInGbsGreaterThanOrEqualTo?: number;
    readonly remainingOcpusGreaterThanOrEqualTo?: number;
    readonly state?: string;
}
export function getCoreDedicatedVmHostsOutput(args: GetCoreDedicatedVmHostsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreDedicatedVmHostsResult> {
    return pulumi.output(args).apply((a: any) => getCoreDedicatedVmHosts(a, opts))
}

/**
 * A collection of arguments for invoking getCoreDedicatedVmHosts.
 */
export interface GetCoreDedicatedVmHostsOutputArgs {
    availabilityDomain?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCoreDedicatedVmHostsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    instanceShapeName?: pulumi.Input<string>;
    remainingMemoryInGbsGreaterThanOrEqualTo?: pulumi.Input<number>;
    remainingOcpusGreaterThanOrEqualTo?: pulumi.Input<number>;
    state?: pulumi.Input<string>;
}
