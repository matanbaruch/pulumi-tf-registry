// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTlsSubscriptionIds(args?: GetTlsSubscriptionIdsArgs, opts?: pulumi.InvokeOptions): Promise<GetTlsSubscriptionIdsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fastly:index/getTlsSubscriptionIds:getTlsSubscriptionIds", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTlsSubscriptionIds.
 */
export interface GetTlsSubscriptionIdsArgs {
    id?: string;
}

/**
 * A collection of values returned by getTlsSubscriptionIds.
 */
export interface GetTlsSubscriptionIdsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getTlsSubscriptionIdsOutput(args?: GetTlsSubscriptionIdsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTlsSubscriptionIdsResult> {
    return pulumi.output(args).apply((a: any) => getTlsSubscriptionIds(a, opts))
}

/**
 * A collection of arguments for invoking getTlsSubscriptionIds.
 */
export interface GetTlsSubscriptionIdsOutputArgs {
    id?: pulumi.Input<string>;
}
