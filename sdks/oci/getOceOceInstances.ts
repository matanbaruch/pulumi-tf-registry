// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOceOceInstances(args: GetOceOceInstancesArgs, opts?: pulumi.InvokeOptions): Promise<GetOceOceInstancesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOceOceInstances:getOceOceInstances", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
        "tenancyId": args.tenancyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOceOceInstances.
 */
export interface GetOceOceInstancesArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetOceOceInstancesFilter[];
    id?: string;
    state?: string;
    tenancyId?: string;
}

/**
 * A collection of values returned by getOceOceInstances.
 */
export interface GetOceOceInstancesResult {
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetOceOceInstancesFilter[];
    readonly id: string;
    readonly oceInstances: outputs.GetOceOceInstancesOceInstance[];
    readonly state?: string;
    readonly tenancyId?: string;
}
export function getOceOceInstancesOutput(args: GetOceOceInstancesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOceOceInstancesResult> {
    return pulumi.output(args).apply((a: any) => getOceOceInstances(a, opts))
}

/**
 * A collection of arguments for invoking getOceOceInstances.
 */
export interface GetOceOceInstancesOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetOceOceInstancesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tenancyId?: pulumi.Input<string>;
}
