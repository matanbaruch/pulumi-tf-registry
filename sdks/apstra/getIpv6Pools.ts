// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIpv6Pools(opts?: pulumi.InvokeOptions): Promise<GetIpv6PoolsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("apstra:index/getIpv6Pools:getIpv6Pools", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIpv6Pools.
 */
export interface GetIpv6PoolsResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly ids: string[];
}
export function getIpv6PoolsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIpv6PoolsResult> {
    return pulumi.output(getIpv6Pools(opts))
}
