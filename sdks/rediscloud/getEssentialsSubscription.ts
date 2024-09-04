// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEssentialsSubscription(args?: GetEssentialsSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetEssentialsSubscriptionResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("rediscloud:index/getEssentialsSubscription:getEssentialsSubscription", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEssentialsSubscription.
 */
export interface GetEssentialsSubscriptionArgs {
    id?: number;
    name?: string;
}

/**
 * A collection of values returned by getEssentialsSubscription.
 */
export interface GetEssentialsSubscriptionResult {
    readonly creationDate: string;
    readonly id: number;
    readonly name: string;
    readonly paymentMethodId: number;
    readonly planId: number;
    readonly status: string;
}
export function getEssentialsSubscriptionOutput(args?: GetEssentialsSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEssentialsSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getEssentialsSubscription(a, opts))
}

/**
 * A collection of arguments for invoking getEssentialsSubscription.
 */
export interface GetEssentialsSubscriptionOutputArgs {
    id?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}
