// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLoadBalancerLoadBalancers(args: GetLoadBalancerLoadBalancersArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalancerLoadBalancersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getLoadBalancerLoadBalancers:getLoadBalancerLoadBalancers", {
        "compartmentId": args.compartmentId,
        "detail": args.detail,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalancerLoadBalancers.
 */
export interface GetLoadBalancerLoadBalancersArgs {
    compartmentId: string;
    detail?: string;
    displayName?: string;
    filters?: inputs.GetLoadBalancerLoadBalancersFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getLoadBalancerLoadBalancers.
 */
export interface GetLoadBalancerLoadBalancersResult {
    readonly compartmentId: string;
    readonly detail?: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetLoadBalancerLoadBalancersFilter[];
    readonly id: string;
    readonly loadBalancers: outputs.GetLoadBalancerLoadBalancersLoadBalancer[];
    readonly state?: string;
}
export function getLoadBalancerLoadBalancersOutput(args: GetLoadBalancerLoadBalancersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalancerLoadBalancersResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalancerLoadBalancers(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalancerLoadBalancers.
 */
export interface GetLoadBalancerLoadBalancersOutputArgs {
    compartmentId: pulumi.Input<string>;
    detail?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetLoadBalancerLoadBalancersFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
