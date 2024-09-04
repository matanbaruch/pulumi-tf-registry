// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getUsageProxySubscriptionRedeemableUser(args: GetUsageProxySubscriptionRedeemableUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUsageProxySubscriptionRedeemableUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getUsageProxySubscriptionRedeemableUser:getUsageProxySubscriptionRedeemableUser", {
        "subscriptionId": args.subscriptionId,
        "tenancyId": args.tenancyId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUsageProxySubscriptionRedeemableUser.
 */
export interface GetUsageProxySubscriptionRedeemableUserArgs {
    subscriptionId: string;
    tenancyId: string;
}

/**
 * A collection of values returned by getUsageProxySubscriptionRedeemableUser.
 */
export interface GetUsageProxySubscriptionRedeemableUserResult {
    readonly id: string;
    readonly items: outputs.GetUsageProxySubscriptionRedeemableUserItem[];
    readonly subscriptionId: string;
    readonly tenancyId: string;
    readonly userId: string;
}
export function getUsageProxySubscriptionRedeemableUserOutput(args: GetUsageProxySubscriptionRedeemableUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUsageProxySubscriptionRedeemableUserResult> {
    return pulumi.output(args).apply((a: any) => getUsageProxySubscriptionRedeemableUser(a, opts))
}

/**
 * A collection of arguments for invoking getUsageProxySubscriptionRedeemableUser.
 */
export interface GetUsageProxySubscriptionRedeemableUserOutputArgs {
    subscriptionId: pulumi.Input<string>;
    tenancyId: pulumi.Input<string>;
}
