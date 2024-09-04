// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getUsageProxyUsagelimits(args: GetUsageProxyUsagelimitsArgs, opts?: pulumi.InvokeOptions): Promise<GetUsageProxyUsagelimitsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getUsageProxyUsagelimits:getUsageProxyUsagelimits", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "limitType": args.limitType,
        "resourceType": args.resourceType,
        "serviceType": args.serviceType,
        "subscriptionId": args.subscriptionId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUsageProxyUsagelimits.
 */
export interface GetUsageProxyUsagelimitsArgs {
    compartmentId: string;
    filters?: inputs.GetUsageProxyUsagelimitsFilter[];
    id?: string;
    limitType?: string;
    resourceType?: string;
    serviceType?: string;
    subscriptionId: string;
}

/**
 * A collection of values returned by getUsageProxyUsagelimits.
 */
export interface GetUsageProxyUsagelimitsResult {
    readonly compartmentId: string;
    readonly filters?: outputs.GetUsageProxyUsagelimitsFilter[];
    readonly id: string;
    readonly limitType?: string;
    readonly resourceType?: string;
    readonly serviceType?: string;
    readonly subscriptionId: string;
    readonly usageLimitCollections: outputs.GetUsageProxyUsagelimitsUsageLimitCollection[];
}
export function getUsageProxyUsagelimitsOutput(args: GetUsageProxyUsagelimitsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUsageProxyUsagelimitsResult> {
    return pulumi.output(args).apply((a: any) => getUsageProxyUsagelimits(a, opts))
}

/**
 * A collection of arguments for invoking getUsageProxyUsagelimits.
 */
export interface GetUsageProxyUsagelimitsOutputArgs {
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetUsageProxyUsagelimitsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    limitType?: pulumi.Input<string>;
    resourceType?: pulumi.Input<string>;
    serviceType?: pulumi.Input<string>;
    subscriptionId: pulumi.Input<string>;
}
