// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getUsageProxySubscriptionRedeemableUsers(args: GetUsageProxySubscriptionRedeemableUsersArgs, opts?: pulumi.InvokeOptions): Promise<GetUsageProxySubscriptionRedeemableUsersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getUsageProxySubscriptionRedeemableUsers:getUsageProxySubscriptionRedeemableUsers", {
        "filters": args.filters,
        "id": args.id,
        "subscriptionId": args.subscriptionId,
        "tenancyId": args.tenancyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUsageProxySubscriptionRedeemableUsers.
 */
export interface GetUsageProxySubscriptionRedeemableUsersArgs {
    filters?: inputs.GetUsageProxySubscriptionRedeemableUsersFilter[];
    id?: string;
    subscriptionId: string;
    tenancyId: string;
}

/**
 * A collection of values returned by getUsageProxySubscriptionRedeemableUsers.
 */
export interface GetUsageProxySubscriptionRedeemableUsersResult {
    readonly filters?: outputs.GetUsageProxySubscriptionRedeemableUsersFilter[];
    readonly id: string;
    readonly redeemableUserCollections: outputs.GetUsageProxySubscriptionRedeemableUsersRedeemableUserCollection[];
    readonly subscriptionId: string;
    readonly tenancyId: string;
}
export function getUsageProxySubscriptionRedeemableUsersOutput(args: GetUsageProxySubscriptionRedeemableUsersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUsageProxySubscriptionRedeemableUsersResult> {
    return pulumi.output(args).apply((a: any) => getUsageProxySubscriptionRedeemableUsers(a, opts))
}

/**
 * A collection of arguments for invoking getUsageProxySubscriptionRedeemableUsers.
 */
export interface GetUsageProxySubscriptionRedeemableUsersOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetUsageProxySubscriptionRedeemableUsersFilterArgs>[]>;
    id?: pulumi.Input<string>;
    subscriptionId: pulumi.Input<string>;
    tenancyId: pulumi.Input<string>;
}
