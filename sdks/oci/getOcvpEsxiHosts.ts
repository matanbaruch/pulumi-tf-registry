// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOcvpEsxiHosts(args?: GetOcvpEsxiHostsArgs, opts?: pulumi.InvokeOptions): Promise<GetOcvpEsxiHostsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOcvpEsxiHosts:getOcvpEsxiHosts", {
        "clusterId": args.clusterId,
        "compartmentId": args.compartmentId,
        "computeInstanceId": args.computeInstanceId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "isBillingDonorsOnly": args.isBillingDonorsOnly,
        "isSwapBillingOnly": args.isSwapBillingOnly,
        "sddcId": args.sddcId,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOcvpEsxiHosts.
 */
export interface GetOcvpEsxiHostsArgs {
    clusterId?: string;
    compartmentId?: string;
    computeInstanceId?: string;
    displayName?: string;
    filters?: inputs.GetOcvpEsxiHostsFilter[];
    id?: string;
    isBillingDonorsOnly?: boolean;
    isSwapBillingOnly?: boolean;
    sddcId?: string;
    state?: string;
}

/**
 * A collection of values returned by getOcvpEsxiHosts.
 */
export interface GetOcvpEsxiHostsResult {
    readonly clusterId?: string;
    readonly compartmentId?: string;
    readonly computeInstanceId?: string;
    readonly displayName?: string;
    readonly esxiHostCollections: outputs.GetOcvpEsxiHostsEsxiHostCollection[];
    readonly filters?: outputs.GetOcvpEsxiHostsFilter[];
    readonly id: string;
    readonly isBillingDonorsOnly?: boolean;
    readonly isSwapBillingOnly?: boolean;
    readonly sddcId?: string;
    readonly state?: string;
}
export function getOcvpEsxiHostsOutput(args?: GetOcvpEsxiHostsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOcvpEsxiHostsResult> {
    return pulumi.output(args).apply((a: any) => getOcvpEsxiHosts(a, opts))
}

/**
 * A collection of arguments for invoking getOcvpEsxiHosts.
 */
export interface GetOcvpEsxiHostsOutputArgs {
    clusterId?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    computeInstanceId?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetOcvpEsxiHostsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    isBillingDonorsOnly?: pulumi.Input<boolean>;
    isSwapBillingOnly?: pulumi.Input<boolean>;
    sddcId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
