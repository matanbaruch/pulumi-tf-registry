// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSubscription(args?: GetSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetSubscriptionResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("rediscloud:index/getSubscription:getSubscription", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSubscription.
 */
export interface GetSubscriptionArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getSubscription.
 */
export interface GetSubscriptionResult {
    readonly cloudProviders: outputs.GetSubscriptionCloudProvider[];
    readonly id: string;
    readonly maintenanceWindows: outputs.GetSubscriptionMaintenanceWindow[];
    readonly memoryStorage: string;
    readonly name: string;
    readonly numberOfDatabases: number;
    readonly paymentMethod: string;
    readonly paymentMethodId: string;
    readonly pricings: outputs.GetSubscriptionPricing[];
    readonly status: string;
}
export function getSubscriptionOutput(args?: GetSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getSubscription(a, opts))
}

/**
 * A collection of arguments for invoking getSubscription.
 */
export interface GetSubscriptionOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
