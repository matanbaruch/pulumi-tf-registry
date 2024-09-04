// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOpsiOperationsInsightsPrivateEndpoints(args?: GetOpsiOperationsInsightsPrivateEndpointsArgs, opts?: pulumi.InvokeOptions): Promise<GetOpsiOperationsInsightsPrivateEndpointsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOpsiOperationsInsightsPrivateEndpoints:getOpsiOperationsInsightsPrivateEndpoints", {
        "compartmentId": args.compartmentId,
        "compartmentIdInSubtree": args.compartmentIdInSubtree,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "isUsedForRacDbs": args.isUsedForRacDbs,
        "opsiPrivateEndpointId": args.opsiPrivateEndpointId,
        "states": args.states,
        "vcnId": args.vcnId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOpsiOperationsInsightsPrivateEndpoints.
 */
export interface GetOpsiOperationsInsightsPrivateEndpointsArgs {
    compartmentId?: string;
    compartmentIdInSubtree?: boolean;
    displayName?: string;
    filters?: inputs.GetOpsiOperationsInsightsPrivateEndpointsFilter[];
    id?: string;
    isUsedForRacDbs?: boolean;
    opsiPrivateEndpointId?: string;
    states?: string[];
    vcnId?: string;
}

/**
 * A collection of values returned by getOpsiOperationsInsightsPrivateEndpoints.
 */
export interface GetOpsiOperationsInsightsPrivateEndpointsResult {
    readonly compartmentId?: string;
    readonly compartmentIdInSubtree?: boolean;
    readonly displayName?: string;
    readonly filters?: outputs.GetOpsiOperationsInsightsPrivateEndpointsFilter[];
    readonly id: string;
    readonly isUsedForRacDbs?: boolean;
    readonly operationsInsightsPrivateEndpointCollections: outputs.GetOpsiOperationsInsightsPrivateEndpointsOperationsInsightsPrivateEndpointCollection[];
    readonly opsiPrivateEndpointId?: string;
    readonly states?: string[];
    readonly vcnId?: string;
}
export function getOpsiOperationsInsightsPrivateEndpointsOutput(args?: GetOpsiOperationsInsightsPrivateEndpointsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOpsiOperationsInsightsPrivateEndpointsResult> {
    return pulumi.output(args).apply((a: any) => getOpsiOperationsInsightsPrivateEndpoints(a, opts))
}

/**
 * A collection of arguments for invoking getOpsiOperationsInsightsPrivateEndpoints.
 */
export interface GetOpsiOperationsInsightsPrivateEndpointsOutputArgs {
    compartmentId?: pulumi.Input<string>;
    compartmentIdInSubtree?: pulumi.Input<boolean>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetOpsiOperationsInsightsPrivateEndpointsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    isUsedForRacDbs?: pulumi.Input<boolean>;
    opsiPrivateEndpointId?: pulumi.Input<string>;
    states?: pulumi.Input<pulumi.Input<string>[]>;
    vcnId?: pulumi.Input<string>;
}
