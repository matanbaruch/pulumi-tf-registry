// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOsubSubscriptionCommitments(args: GetOsubSubscriptionCommitmentsArgs, opts?: pulumi.InvokeOptions): Promise<GetOsubSubscriptionCommitmentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOsubSubscriptionCommitments:getOsubSubscriptionCommitments", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "subscribedServiceId": args.subscribedServiceId,
        "xOneGatewaySubscriptionId": args.xOneGatewaySubscriptionId,
        "xOneOriginRegion": args.xOneOriginRegion,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOsubSubscriptionCommitments.
 */
export interface GetOsubSubscriptionCommitmentsArgs {
    compartmentId: string;
    filters?: inputs.GetOsubSubscriptionCommitmentsFilter[];
    id?: string;
    subscribedServiceId: string;
    xOneGatewaySubscriptionId?: string;
    xOneOriginRegion?: string;
}

/**
 * A collection of values returned by getOsubSubscriptionCommitments.
 */
export interface GetOsubSubscriptionCommitmentsResult {
    readonly commitments: outputs.GetOsubSubscriptionCommitmentsCommitment[];
    readonly compartmentId: string;
    readonly filters?: outputs.GetOsubSubscriptionCommitmentsFilter[];
    readonly id: string;
    readonly subscribedServiceId: string;
    readonly xOneGatewaySubscriptionId?: string;
    readonly xOneOriginRegion?: string;
}
export function getOsubSubscriptionCommitmentsOutput(args: GetOsubSubscriptionCommitmentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOsubSubscriptionCommitmentsResult> {
    return pulumi.output(args).apply((a: any) => getOsubSubscriptionCommitments(a, opts))
}

/**
 * A collection of arguments for invoking getOsubSubscriptionCommitments.
 */
export interface GetOsubSubscriptionCommitmentsOutputArgs {
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetOsubSubscriptionCommitmentsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    subscribedServiceId: pulumi.Input<string>;
    xOneGatewaySubscriptionId?: pulumi.Input<string>;
    xOneOriginRegion?: pulumi.Input<string>;
}
